from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from Api import views
from rest_framework.authtoken.views import ObtainAuthToken
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/', ObtainAuthToken.as_view()),
    



]
