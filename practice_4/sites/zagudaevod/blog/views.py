from django.shortcuts import render

def index(request):
    return render(request, 'blog/Praktikum_4.1.html', {'title': 'lists'})



