from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return render(request, "index.html")


def postuser(request):
    name = request.POST.get("name","undefined")
    age = request.POST.get("age",1)
    langs = request.POST.getlist("lang")
    return HttpResponse(f"<h1> Name: {name} age : {age} </h1> <h2>languages {langs}</h2>")    
    

def about(request):
    return render(request,"about.html")


