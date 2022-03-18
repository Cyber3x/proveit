# Generated by Django 4.0.3 on 2022-03-18 11:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('match', '0017_remove_match_admin'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='admin',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.DO_NOTHING, related_name='game_admin', to=settings.AUTH_USER_MODEL),
        ),
    ]
