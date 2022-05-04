from django.db import models
from django.contrib.auth.models import User
from match.models import Sport
# TODO: Create player model

class PlayerProfile(models.Model):
    # TODO: brainstrom and add needed fields

    
    user = models.OneToOneField(User, on_delete=models.DO_NOTHING)
    is_banned = models.BooleanField(default = False)
    is_premium = models.BooleanField(default=False)
    ranked_sport = models.OneToOneField(Sport, on_delete=models.DO_NOTHING)
    is_searching = models.BooleanField(default = False)
    is_open_for_match = models.BooleanField(default = False)
    is_visible_on_leaderbord = models.BooleanField(default = True)
    elo_boosts_left = models.IntegerField(default = 0)

