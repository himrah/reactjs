# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-03-21 02:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_auto_20180321_0227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='img',
            name='profile',
            field=models.ImageField(upload_to=b'photos/profile/original', verbose_name=b'Image'),
        ),
    ]
