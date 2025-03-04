"""
URL configuration for apps project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from app import views 
from app.views import index, logout_view  
from django.views.generic import TemplateView





urlpatterns = [
    path('admin/', admin.site.urls),
    # path('',register, name ='register'),
    # path('accounts', include('apps.urls'))
    path('', index, name='index'),
    path('login/', logout_view, name='logout'),
    
    # path('lk',TemplateView.as_view(template_name= 'lk.html'),name='lk') Устаревшая 
    # path('lk/', lk, name='lk'),
    # path('login/',login_view,name='login')
    
]