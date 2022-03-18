from pyexpat import model
from sre_parse import State
from django.db import models
from django.contrib.auth.models import User



class Sport(models.Model):
    # TODO: brainstrom and add needed fields

    name = models.CharField(max_length = 20, default = "")
    max_players = models.IntegerField(default = 100)
    min_players = models.IntegerField(default = 1)

    def __str__(self):
         return self.name


class Match(models.Model):
    # TODO: Needs to be corectly modeled after lucid chart

    class States(models.TextChoices):
        LOBBY = 'L'
        SCHEDULED = 'S'
        ACTIVE = 'A'
        FINISHED = 'F'
        CANCELED = 'C'
    
    admin = models.OneToOneField(User, default = None, on_delete = models.DO_NOTHING, related_name= "game_admin")
    sport = models.ForeignKey(Sport, on_delete = models.DO_NOTHING, default = 1)
    players = models.ManyToManyField(User, default = None)
    start_datetime = models.DateTimeField()
    number_of_players = models.PositiveSmallIntegerField(default=0)
    state = models.CharField(choices=States.choices, max_length=1, default=States.LOBBY)
    average_elo = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    is_ranked = models.BooleanField(default=False)
    is_private = models.BooleanField(default=False)
    latitude = models.DecimalField(max_digits = 9, decimal_places=6, default=0)
    longitude = models.DecimalField(max_digits = 9, decimal_places=6, default=0)

    def _str_(self):
        return f'match of type: {self.state}'

    if sport:
        def __str__(self):
            return f'{int(self.number_of_players / 2)}v{int(self.number_of_players / 2)} {self.sport.name}'




