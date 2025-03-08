# app/urls.py

from django.urls import path
from .views import index, lk

urlpatterns = [
    path('', index, name='index'),
    path('lk/', lk, name='lk'),
]