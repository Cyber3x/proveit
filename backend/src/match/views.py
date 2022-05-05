import math
from urllib.request import Request
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from match.serializers import MatchSerializer
from django.contrib.auth.models import User
from .models import Match, Sport
from .serializers import MatchSerializer
from datetime import date, timedelta, datetime
import geopy.distance
from rest_framework import generics, permissions, authentication



# TODO: add sport to POST
# match/
class MatchView(APIView):

    def get(self, request: Request) -> Response:
        matches = Match.objects.all()
        serializer = MatchSerializer(matches, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request: Request) -> Response:
        serializer = MatchSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


# match/<id>
class MatchDetailsView(APIView):

    def get_match(self, id):
        try:
            return Match.objects.get(id=id)
        except Match.DoesNotExist:
            return Response(status=HTTP_404_NOT_FOUND)

    def get(self, request: Request, id) -> Response:
        match = self.get_match(id)
        serializer = MatchSerializer(match)
        return Response(serializer.data, status=HTTP_200_OK)

    def delete(self, request: Request, id) -> Response:
        match = self.get_match(id)
        serializer = MatchSerializer(match)
        match.delete()
        return Response(serializer.data, status=HTTP_200_OK)


# match/filter/<n_players>/<is_ranked>/<radius>/<timedelta_hours>/<sport_id>
class FilteredMatchesView(APIView):

    def get(self, request: Request, n_players, ranked_int, radius, state_int, timedelta_hours, sport_id) -> Response:

        # state_int -> state string
        states = "LSAFC"
        state = states[state_int]
       
        # get datetime values to filter for only the next 3 hours
        startDateTime = datetime.today()
        endDateTime = startDateTime + timedelta(hours=timedelta_hours)

        # get ranked value from url int
        ranked = True if ranked_int == 1 else False

        # perform the filtering
        matches = Match.objects.filter(number_of_players = n_players, start_datetime__range = [startDateTime, endDateTime], 
                                       state = state, is_private = False, is_ranked = ranked, sport = sport_id)

        # location filtering with geopy
        current_location = (45.761025, 16.005809)
        for match in matches:
            match_location = (match.latitude, match.longitude)
            distance = geopy.distance.distance(current_location, match_location).km
            print(distance)
            if distance > radius:
                matches = matches.exclude(id = match.id)


        # serialize the data and return
        serializer = MatchSerializer(matches, many=True)
        return Response(serializer.data, status=HTTP_200_OK)



# match/create/<n_players>/<is_ranked>/<is_private>/<latitude>/<longitude>/<sport_id>
class CreateLobbyView(APIView):

    def post(self, request: Request, n_players, is_ranked_int, is_private_int, latitude, longitude, sport_id, admin_id) -> Response:

        is_ranked = True if is_ranked_int == 1 else False
        is_private = True if is_private_int == 1 else False
        
        sport = Sport.objects.get(id = sport_id)


        match = Match.objects.create(number_of_players = n_players, state = 'L', 
                                    is_ranked = is_ranked, is_private = is_private, latitude = latitude, 
                                    longitude = longitude, start_datetime = datetime.now(), sport = sport, admin_id = admin_id)

        serializer = MatchSerializer(match)
        return Response(serializer.data, status=HTTP_200_OK)
    
# match/start/id
class StartMatchView(APIView):

    def post(self, request: Request, id):

        match = Match.objects.get(id = id)
        match.state = 'A'
        match.save()

        serializer = MatchSerializer(match)
        return Response(serializer.data, status=HTTP_200_OK)

# match/end/id
class EndMatchView(APIView):

    def post(self, request: Request, id):

        match = Match.objects.get(id = id)
        match.state = 'F'
        match.save()

        serializer = MatchSerializer(match)
        return Response(serializer.data, status=HTTP_200_OK)

# match/cancel/id
class CancelMatchView(APIView):

    def post(self, request: Request, id):

        match = Match.objects.get(id = id)
        match.state = 'C'
        match.save()

        serializer = MatchSerializer(match)
        return Response(serializer.data, status=HTTP_200_OK)

# TODO: replace user with player
# match/addPlayer/<user_id>/<match_id> 
class AddPlayerView(APIView):

    def post(self, request: Request, user_id,match_id):

        match = Match.objects.get(id = match_id)
        match.players.add(user_id)

        serializer = MatchSerializer(match)
        return Response(serializer.data, status=HTTP_200_OK)


# match/removePlayer/<user_id>/<match_id> 
class RemovePlayerView(APIView):

    def post(self, request: Request, user_id,match_id):

        match = Match.objects.get(id = match_id)
        match.players.remove(user_id)

        serializer = MatchSerializer(match)
        return Response(serializer.data, status=HTTP_200_OK)


        
