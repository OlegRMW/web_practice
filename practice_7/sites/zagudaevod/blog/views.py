from django.shortcuts import render

def index(request):
    return render(request, 'blog/Praktikum7.html', {'title': 'lists'})



