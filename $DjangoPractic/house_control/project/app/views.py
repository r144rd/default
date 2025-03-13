# app/views.py
import random
import string
import qrcode
import json
from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import RegistrationForm, LoginForm
from django.contrib.auth import login
import os
import requests
from .models import Request
from .forms import RequestForm
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views import View









def index(request):
    register_form = RegistrationForm()  # форма регистрации  регистрации
    login_form = LoginForm()  # форма логина

    if request.method == 'POST':
        if 'register' in request.POST:
            register_form = RegistrationForm(request.POST)
            if register_form.is_valid():
                user = register_form.save()
                login(request, user)
                return redirect('lk')  # перенаправление на страницу личного кабинета
        elif 'login' in request.POST:
            login_form = LoginForm(request, data=request.POST)
            if login_form.is_valid():
                login(request, login_form.get_user())
                return redirect('lk')  # перенаправление на страницу личного кабинета

    return render(request, 'index.html', {'register_form': register_form, 'login_form': login_form})

def lk(request):
    return render(request, 'lk.html')




# def payment_qr(request):
#     return render(request, "payments.html")

def generate_random_string(length = 10):
    letters = string.ascii_letters + string.digits
    return ''.join(random.choice(letters) for i in range (length))


def payments_view(request):
    random_text = generate_random_string(12)  # Реализация qr кода для оплаты так как привязывать банки долго и муторно
    # покажем просто как моглы генерироваться уникальные id для оплаты и зачисления
    qr_image = qrcode.make(random_text)
    
    qr_image_path = os.path.join('media', 'qr_code.png')
    qr_image.save(qr_image_path)
    
    context = {'qr_image_path':qr_image_path, 'random_text':random_text}
    return render(request, 'payments.html', context)
    
    
TELEGRAM_TOKEN = '8002181617:AAHySgOXyolPmFDiPdH8_1nUOU34gfqD_H8'
CHAT_ID = '-1002512035980'



def request_form(request):
    if request.method == 'POST':
        form = RequestForm(request.POST)
        if form.save():
            # логика отправки -->
            message = f"Новое обращение от {form.cleaned_data['name']} \n email: {form.cleaned_data['email']} \n Описание :{form.cleaned_data['description']}"
            requests.post(f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage", data={
                'chat_id': CHAT_ID,
                'text': message
            })
            return HttpResponse('Ваше обращение успешно отправленно !')
    else:
        form = RequestForm()
    return render(request, 'request_form.html', {'form':form})





@csrf_exempt  
def send_message(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            message = data.get('message', '')
            if not message:
                return JsonResponse({'success': False, 'error': 'Empty message'}, status=400)
        
            return JsonResponse({'success': True})
        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'error': 'Invalid JSON'}, status=400)
    return JsonResponse({'success': False, 'error': 'Only POST requests are allowed'}, status=405)

def get_messages(request):
    
    return JsonResponse({'messages': ["Сообщение 1", "Сообщение 2", "Сообщение 3"]})  # Пример
        
def chat(request):
    return render (request, 'chat.html')