# Generated by Django 4.0.3 on 2022-03-03 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('match', '0003_alter_match_number_of_players'),
    ]

    operations = [
        migrations.AlterField(
            model_name='match',
            name='number_of_players',
            field=models.PositiveSmallIntegerField(default=0),
        ),
    ]
