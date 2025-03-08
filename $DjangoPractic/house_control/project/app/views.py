# app/views.py

from django.shortcuts import render, redirect
from .forms import RegistrationForm, LoginForm
from django.contrib.auth import login

def index(request):
    register_form = RegistrationForm()  # Инициализируем форму регистрации
    login_form = LoginForm()  # Инициализируем форму входа

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