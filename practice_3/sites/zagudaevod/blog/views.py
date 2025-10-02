from django.shortcuts import render

def index(request):
    return render(request, 'blog/index.html', {'title': 'lists'})

def text_1(request):
    return render(request, 'blog/три.html', {'title': 'lists'})

def text_2(request):
    return render(request, 'blog/Задание_4.html', {'title': 'lists'})

def text_3(request):
    return render(request, 'blog/5-6.html', {'title': 'lists'})

def list(request):
    return render(request, 'blog/практикум_3.1.html', {'title': 'lists'})

def practice_4_1(request):
    return render(request, 'blog/practice_4.1.html', {'title': 'lists'})

def practice_4_2(request):
    return render(request, 'blog/practice_4.2.html', {'title': 'lists'})

def practice_4_3(request):
    return render(request, 'blog/practice_4.3.html', {'title': 'lists'})