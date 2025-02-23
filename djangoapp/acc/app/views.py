from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.



def index(request):
    header =" User Data"
    langs = ["python", "java","c++"]
    user = {"name":"tom", "age": 34}
    address = ("abrikosovaya",23,34)
    
    
    data = {"header": header, "langs":langs,"user":user, "address":address }
    return render(request, "index.html", context=data)
    
    
    

def about(request):
    return render(request,"about.html")

def contact(request):
    return render(request,"contact.html")