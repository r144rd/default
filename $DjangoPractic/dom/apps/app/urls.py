from django.urls import path
from .views import index, logout_view                                                      

urlpatterns = [
    path('', index, name='index'),
    path('login/', logout_view, name='logout'),
]