# Generated by Django 3.1.2 on 2020-10-29 18:22

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0006_auto_20201029_1821'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='instructions',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.TextField(default=None), size=8),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='notes',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.TextField(default=None), size=8),
        ),
    ]
