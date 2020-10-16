from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

class UserViewSet(viewsets.ModelViewSet):
	queryset  = User.objects.all()
	serializer_class = UserSerializer 
	authentication_classes = (TokenAuthentication,)
	permissions_classes = (IsAuthenticated,)

