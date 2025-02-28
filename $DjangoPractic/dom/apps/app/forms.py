from django import forms 
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

# class RegistrationForm(forms.ModelForm):
#     password = forms.CharField(widget= forms.PasswordInput)
#     password_confirm = forms.CharField(widget=forms.PasswordInput)
#     class Meta:
#         model = CustomUser
#         fields = ['username','password','phone_number']
        
#     def clean(self):
#         cleaned_data = super().clean()
#         password = cleaned_data.get("password")
        
#         password_confirm = cleaned_data.get("password_confirm")
#         if password != password_confirm:
#             raise forms.ValidationError("Password incorect")
        
        
class UserRegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)
    
    class Meta:
        model= User
        fields = ['username','email','password1','password2']
        
        
class UserLoginForm(AuthenticationForm):
    username = forms.CharField(label='login')
    password = forms.CharField(label='password', widget=forms.PasswordInput)
    