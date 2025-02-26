from django.shortcuts import render,redirect
from .forms import RegistrationForm
from django.contrib.auth import login

# Create your views here.
def index(request):
    form = RegistrationForm()
    return render(request, "index.html",{'form':form})

# def register(request):
#     if request.method == 'POST':
#         form = RegistrationForm(request.POST)
#         if form.is_valid():
#             user = form.save(commit = False)
#             user.set_password(form.cleaned_data['password'])
#             user.save()
#             login(request,user)
#             return redirect('lk')
#     else:
#         form = RegistrationForm()
#     return render(request, "index.html", {'form':form})


def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            try:
                form.save()  # Сохраните пользователя
                return redirect('success_url')  # Перенаправьте на страницу успеха
            except IntegrityError:
                form.add_error('username', 'Это имя пользователя уже занято.')
    else:
        form = RegistrationForm()
    return render(request, 'index.html', {'form': form})

# def lk(request):
#     return render(request, 'lk.html')