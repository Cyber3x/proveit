from rest_framework import serializers
from .models import Match

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ['id', 'start_datetime', 'number_of_players',
            'state', 'average_elo', 'is_ranked', 'is_private', 'latitude', 'longitude']