# Generated by Django 4.0.3 on 2022-03-11 12:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('match', '0009_alter_match_sport'),
    ]

    operations = [
        migrations.AlterField(
            model_name='match',
            name='sport',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='match.sport'),
        ),
    ]
