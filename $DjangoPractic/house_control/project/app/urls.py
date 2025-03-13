
from django.urls import path
from .views import index, lk,payments_view, request_form
from . import views
from .views import send_message, get_messages 


urlpatterns = [
    path('', index, name='index'),
    path('lk/', lk, name='lk'),
    path('payments/', payments_view, name='payment_view'),
    path('request/', request_form, name= 'request_form'),
    # path('send-message/', views.send_message, name='send-message'),
    # path('get-messages/', views.GetMessages.as_view(), name='get-messages'),
    path('send-message/', send_message, name='send_message'),
    path('get-messages/', get_messages, name='get_messages'),
    path('chat/', views.chat, name='chat')
]