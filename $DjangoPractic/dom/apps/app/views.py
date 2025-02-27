from django.shortcuts import render,redirect
from .forms import RegistrationForm
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required

# Create your views here.
def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit = False)
            user.set_password(form.cleaned_data['password'])
            user.save()
            login(request,user)
            return redirect('lk')
    
    else:
        form = RegistrationForm()
    return render(request,'index.html',{'form':form})

@login_required
def lk(request):
    return render(request, 'lk.html',{"username":request.user.username})
