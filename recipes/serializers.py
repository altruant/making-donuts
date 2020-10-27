from rest_framework import serializers

from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'recipe_name', 'image_url', 'recipe_type', 'prep_time', 'cook_time', 'cook_temp', 'temp_format', 'amount', 'serving',)
