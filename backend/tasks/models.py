from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Tasks(models.Model):
    STATE_OPTIONS = {
        "Pendiente": "pendiente",
        "EnProgreso": "enProgreso",
        "Completada": "completada"
    }
    titulo = models.CharField(max_length=50)
    descripcion = models.TextField(blank=True)
    estado_actual = models.CharField(max_length=10, choices=STATE_OPTIONS, default="Pendiente")
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)