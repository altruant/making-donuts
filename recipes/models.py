from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.postgres.fields import ArrayField
# Create your models here.
RECIPE_TYPE_CHOICES = (
    ('BMS', 'Breads, Muffins, and Scones'),
    ('BR', 'Breakfast'),
    ('DST', 'Desserts'),
    ('DIN', 'Dinner'),
    ('DR', 'Drinks'),
    ('LN', 'Lunch'),
    ('SD', 'Sides'),
)

TEMP_CHOICES = (
    ('F', '°F'),
    ('C', '°C'),
)

class Recipe(models.Model):
    recipe_name=models.CharField(max_length=255)
    image_url=models.URLField(max_length=255, default='https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png')
    is_public=models.BooleanField(default=False)
    recipe_type=models.CharField(max_length=4, choices=RECIPE_TYPE_CHOICES)
    prep_time=models.DurationField()
    cook_time=models.DurationField()
    cook_temp=models.SmallIntegerField(validators=[MinValueValidator(0), MaxValueValidator(500)])
    temp_format=models.CharField(max_length=1, choices=TEMP_CHOICES, default='F')
    amount=models.SmallIntegerField(validators=[MinValueValidator(0), MaxValueValidator(1000)])
    serving=models.CharField(max_length=255)
    ingredients=models.TextField(default=None)
    instructions=models.TextField(default=None)

    def __str__(self):
        return self.recipe_name
