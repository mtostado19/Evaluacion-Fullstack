from django.urls import path, include
from rest_framework import routers
from . import views

urlpatterns = [
    path('', views.productosAll),
    path('producto/<int:producto_id>/', views.productoSingle)
]