# Generated by Django 3.1.2 on 2020-10-29 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_auto_20201029_1717'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='ingredients',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='instructions',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='notes',
            field=models.TextField(),
        ),
    ]
