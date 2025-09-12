from django.urls import path, include
from rest_framework import routers
from . import views

urlpatterns = [
    path('', views.usuariosAll),
    path('register/', views.registerUser),
    path('login/', views.loginUser),
]