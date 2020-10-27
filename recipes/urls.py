from django.urls import path

from .views import RecipeRetrieveUpdateDestroyView, RecipeListCreateView

urlpatterns = [
    path('<int:pk>/', RecipeRetrieveUpdateDestroyView.as_view()),
    path('', RecipeListCreateView.as_view()),
]
