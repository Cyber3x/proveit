from django.urls import path
from .views import AddPlayerWin

urlpatterns = [
    path('addWin/<int:user_id>/<int:sport_id>', AddPlayerWin.as_view(), name = "add player win")
]
