from ast import Add
from django.urls import path, register_converter
from .views import FilteredMatchesView, MatchView, MatchDetailsView, CreateLobbyView, AddPlayerView, RemovePlayerView, EndMatchView, CancelMatchView, StartMatchView
from . import converts, views

register_converter(converts.FloatUrlParameterConverter, 'float')

urlpatterns = [

    # match viewing
    path('', MatchView.as_view(), name='match'),
    path('<int:id>/', MatchDetailsView.as_view(), name='match_details_view'),

    # find match
    path('filter/<int:n_players>/<int:ranked_int>/<int:radius>', FilteredMatchesView.as_view(), name='filtered_matches_view'),

    # match creation + player adding / removing
    path('create/<int:n_players>/<int:is_ranked_int>/<int:is_private_int>/<float:latitude>/<float:longitude>/<int:sport_id>', CreateLobbyView.as_view(), name = 'create_lobby_view'),
    path('addPlayer/<int:user_id>/<match_id>', AddPlayerView.as_view(), name = "add_player_view"),
    path('removePlayer/<int:user_id>/<match_id>', RemovePlayerView.as_view(), name = "remove_player_view"),

    # match state flow
    path('start/<int:id>', StartMatchView.as_view(), name = "start_match_view"),
    path('end/<int:id>', EndMatchView.as_view(), name = "end_match_view"),
    path('cancel/<int:id>', CancelMatchView.as_view(), name = "cancel_match_view"),

]
