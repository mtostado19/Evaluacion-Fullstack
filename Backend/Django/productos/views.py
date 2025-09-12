from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from .models import Producto
from .serializers import ProductoSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def productosAll(request):
    try:
        
        if request.method == 'GET':
            productos = Producto.objects.all()
            serializer = ProductoSerializer(productos, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        if request.method == 'POST':
            serializer = ProductoSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
            return Response(serializer.data)
        
    except Producto.DoesNotExist:
        return Response("No existe", status=status.HTTP_404_NOT_FOUND)


@api_view(['GET', 'PUT', 'DELETE'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def productoSingle(request, producto_id):
    try:

        producto = Producto.objects.get(pk=producto_id)

        if request.method == 'GET':
            serializer = ProductoSerializer(producto, many=False)
            return Response(serializer.data)

        if request.method == 'PUT':
            serializer = ProductoSerializer(producto, data=request.data)
            if serializer.is_valid():
                serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        if request.method == 'DELETE':
            producto.delete()
            return Response({ "message": "Producto borrado"}, status=status.HTTP_204)
    except:
        return Response("Error", status=status.HTTP_404_NOT_FOUND)
