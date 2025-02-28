from django.shortcuts import render, redirect
from .forms import UserRegisterForm, UserLoginForm
from django.contrib.auth import login, authenticate
from django.contrib.auth import logout

def index(request):
    if request.method == 'POST':
        if 'register' in request.POST:
            form = UserRegisterForm(request.POST)
            if form.is_valid():
                user = form.save()
                login(request, user)
                return redirect('lk')  # Перенаправление на Личный Кабинет
        elif 'login' in request.POST:
            form = UserLoginForm(data=request.POST)
            if form.is_valid():
                username = form.cleaned_data.get('username')
                password = form.cleaned_data.get('password')
                user = authenticate(request, username=username, password=password)
                if user is not None:
                    login(request, user)
                    return redirect('lk')  # Перенаправление на Личный Кабинет
    else:
        form = UserRegisterForm()  # Показать форму регистрации по умолчанию

    return render(request, 'app/index.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('index')  # Перенаправление на главную страницу