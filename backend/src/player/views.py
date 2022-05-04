from winsound import PlaySound
from django.shortcuts import render
import math
from urllib.request import Request
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from django.contrib.auth.models import User
from datetime import date, timedelta, datetime
from .models import PlayerProfile

# Create your views here.
class AddPlayerWin(APIView):

    def post(self, user_id, sport_id) -> Response:
        try:
            user = User.objects.get(id=user_id)
            player = PlayerProfile.objects.get(user = user)
            if sport_id == 0:
                PlayerProfile.basketball_elo += 10
                PlayerProfile.save()
            elif sport_id == 1:
                PlayerProfile.football_elo += 10
            elif sport_id == 2:
                PlayerProfile.tennis_elo += 10
            elif sport_id == 3:
                PlayerProfile.volleyball_elo += 10
            elif sport_id == 4:
                PlayerProfile.handball_elo += 10
            PlayerProfile.save()
            return Response(status=HTTP_200_OK)

       

        except User.DoesNotExist:
            return Response(status=HTTP_404_NOT_FOUND)

    
class PlayerView(APIView):

    def post(self, user_id, sport_id) -> Response:
        try:
            user = User.objects.get(id=user_id)
            player = PlayerProfile.objects.get(user = user)
            if sport_id == 0:
                PlayerProfile.basketball_elo += 10
                PlayerProfile.save()
            elif sport_id == 1:
                PlayerProfile.football_elo += 10
            elif sport_id == 2:
                PlayerProfile.tennis_elo += 10
            elif sport_id == 3:
                PlayerProfile.volleyball_elo += 10
            elif sport_id == 4:
                PlayerProfile.handball_elo += 10
            PlayerProfile.save()
            return Response(status=HTTP_200_OK)

        except User.DoesNotExist:
            return Response(status=HTTP_404_NOT_FOUND)
   
