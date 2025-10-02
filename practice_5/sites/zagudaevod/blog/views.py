from django.shortcuts import render

def index(request):
    return render(request, 'blog/Praktikum_5.html', {'title': 'lists'})



