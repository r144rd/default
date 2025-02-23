from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.



def index(request):
    header =" User Data"
    langs = ["python", "java","c++"]
    user = {"name":"tom", "age": 34}
    address = ("abrikosovaya",23,34)
    
    
    data = {"header": header, "langs":langs,"user":user, "address":address }
    data2 = {"red":"красный","blue":"siniy","yellow":"yellow"}
    
    return render(request, "index.html", context={"data2":data2})
    
    
    
    

def about(request):
    return render(request,"about.html")

def contact(request):
    return render(request,"contact.html")