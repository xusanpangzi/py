# Generated by Django 2.2.1 on 2019-05-27 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('officeblog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(max_length=300),
        ),
    ]
