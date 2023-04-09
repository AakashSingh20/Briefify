from django.shortcuts import render,redirect

def about_us(request):
    return render(request,'aboutus.html')