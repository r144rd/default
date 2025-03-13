from django.contrib.auth.models import User
from django.db import models



# Create your models here.

class Request(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return f"{self.name} - {self.created_at}"
    
    
class Message(models.Model):
    user_message = models.TextField()
    bot_response = models.TextField(blank=True, null=True)
    created_at = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user_message} - {self.created_at}"
    