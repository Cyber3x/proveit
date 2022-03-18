# Generated by Django 4.0.3 on 2022-03-11 13:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('match', '0014_remove_sport_match_type_options_sport_min_players'),
    ]

    operations = [
        migrations.AlterField(
            model_name='match',
            name='sport',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='match.sport'),
        ),
        migrations.AlterField(
            model_name='sport',
            name='name',
            field=models.CharField(default='', max_length=20),
        ),
    ]
