from django.db import models
from django.contrib.auth.models import User
from match.models import Sport
from django.contrib.postgres.fields import ArrayField

# TODO: Create player model

class PlayerProfile(models.Model):
    # TODO: brainstrom and add needed fields

    basketball_elo = models.IntegerField(default = 0)
    football_elo = models.IntegerField(default = 0)
    tennis_elo = models.IntegerField(default = 0)
    volleyball_elo = models.IntegerField(default = 0)
    handball_elo = models.IntegerField(default = 0)
    
    user = models.OneToOneField(User, on_delete=models.DO_NOTHING)
    is_banned = models.BooleanField(default = False)
    is_premium = models.BooleanField(default=False)
    ranked_sport = models.OneToOneField(Sport, on_delete=models.DO_NOTHING)
    is_searching = models.BooleanField(default = False)
    is_open_for_match = models.BooleanField(default = False)
    is_visible_on_leaderbord = models.BooleanField(default = True)
    elo_boosts_left = models.IntegerField(default = 0)

