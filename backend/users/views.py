from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .serializers import UsuarioSerializer

# Create your views here.

@api_view(['GET'])
def usuariosAll(request):
    usuarios = User.objects.all()
    serializer = UsuarioSerializer(usuarios, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def registerUser(request):

    serializer = UsuarioSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=serializer.data['username'])
        user.set_password(serializer.data['password'])
        user.save()
        
        token = Token.objects.create(user=user)
        return Response({
            "user": serializer.data,
            "token": token.key
        })
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def loginUser(request):

    user = User.objects.get(username=request.data['username'])

    if not user.check_password(request.data['password']):
        return Response({"error": "Password incorrecto"}, status=status.HTTP_400_BAD_REQUEST)
    
    token, created = Token.objects.get_or_create(user=user)
    serializer = UsuarioSerializer(user)
    return Response({ "user": serializer.data, "token": token.key }, status=status.HTTP_201_CREATED)