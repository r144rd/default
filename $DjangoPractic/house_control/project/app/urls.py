
from django.urls import path
from .views import index, lk,payments_view, request_form
from . import views


urlpatterns = [
    path('', index, name='index'),
    path('lk/', lk, name='lk'),
    path('payments/', payments_view, name='payment_view'),
    path('request/', request_form, name= 'request_form')
]