from app.models import *
from django.forms import *
from django.contrib.auth.forms import AuthenticationForm,UserCreationForm
from django.contrib.auth import authenticate
from PIL import Image
from django import forms

class Registrationform(UserCreationForm):
    username=forms.CharField(max_length=15,widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder':'Username'}))
    first_name=forms.CharField(max_length=15,widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder':'First Name'}))
    last_name=forms.CharField(max_length=15,widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder':'Last Name'}))
    email=forms.EmailField(error_messages={'required': 'already exist!'},widget=forms.TextInput(attrs={'type':"email",'class':"validate form-control",'id':'email','placeholder':'Email Address'}))
    password1 = forms.CharField(widget=PasswordInput(attrs={'class': 'form-control', 'placeholder':'Password'}))
    password2 = forms.CharField(widget=PasswordInput(attrs={'class': 'form-control', 'placeholder':'Password Repeat'}))
    #password1=forms.PasswordInput(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder':'Password'}))
    #password2=forms.PasswordInput(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder':'Password Repeat'}))
    #phone = forms.IntegerField()
    #phone = forms.IntegerField(widget=forms.TextInput(attrs={'type': "phone", 'class': "validate", 'id': 'phone','name':'phone'}))
    class Meta:
        model = User
        fields =("username","first_name","last_name","email")

    def clean(self,*args,**kwargs):
        ems=self.cleaned_data.get('email')
        u=self.cleaned_data.get('username')

        if User.objects.filter(username=u):
            raise forms.ValidationError("Username Already exist")
        if User.objects.filter(email=ems):
            raise forms.ValidationError("Email already exist")


        return self.cleaned_data



class ImageInputForm(forms.ModelForm):
    class Meta:
        model = Photos
        fields = ('original_photo',)

class ProfileForm(forms.ModelForm):
    #birth_day = forms.DateField(widget=forms.DateInput(format='%m/%d/%Y')), input_formats=('%m/%d/%Y',))
    
    birth_day = forms.DateField(widget=forms.DateInput(attrs={'type':'date','class':'form-control'},format='%m/%d/%Y'),input_formats=('%Y-%m-%d',))
    class Meta:
        model = Profile
        fields =  ('about','birth_day')
        widgets={
            'about':Textarea(attrs={'class':'form-control','placeholder':'Tell us about your...','data-resizable':'true'}),
        }


class ProfilePicForm(forms.ModelForm):
    class Meta:
        model = Profile_pic
        fields = ('profile_original',)        



class PhotoForm(forms.ModelForm):
    #x = forms.FloatField(widget=forms.HiddenInput())
    #y = forms.FloatField(widget=forms.HiddenInput())
    #width = forms.FloatField(widget=forms.HiddenInput())
    #height = forms.FloatField(widget=forms.HiddenInput())

    class Meta:
        model = Photos
        fields = ('original_photo',)
        
        
        #fields = ('photo', 'x', 'y', 'width', 'height', )
    """def save(self):
        Photo = super(PhotoForm, self).save()

        x = self.cleaned_data.get('x')
        y = self.cleaned_data.get('y')
        w = self.cleaned_data.get('width')
        h = self.cleaned_data.get('height')

        image = Image.open(Photo.photo)
        cropped_image = image.crop((x, y, w+x, h+y))
        resized_image = cropped_image.resize((200, 200), Image.ANTIALIAS)
        resized_image.save(Photo.photo.path)
        return Photo"""


class Comment_form(forms.ModelForm):
    #comment = forms.Textarea(attrs={'class': 'form-control', 'placeholder':'Username'}) 
    #comment = forms.CharField(label="Username", max_length=30, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder':'Comment here...'}))
    class Meta:
        model = Comments
        fields = ('comment',)
        widgets={
            'comment':Textarea(attrs={'class':'form-control','placeholder':'Comment here...','data-resizable':'true'}),
        }


class LoginForm(AuthenticationForm):
    username = forms.CharField(label="Username", max_length=30, widget=forms.TextInput(attrs={'class': 'form-control', 'name': 'username','placeholder':'Username'}))
    password = forms.CharField(label="Password", max_length=30, widget=forms.TextInput(attrs={'class': 'form-control', 'name': 'password','type':'password','placeholder':'Password'}))

    def clean(self,*args,**kwargs):
        username =self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        if username and password:
            user = authenticate(username=username,password=password)
            if not user:
                raise forms.ValidationError("this user doest not exist")
        return super(LoginForm,self).clean(*args,**kwargs)        