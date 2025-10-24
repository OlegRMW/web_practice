from django.shortcuts import render


def practice_3(request):
    return render(request, 'blog/практикум_3.1.html', {'title': 'lists'})

def practice_4(request):
    return render(request, 'blog/Praktikum_4.1.html', {'title': 'lists'})

def practice_5(request):
    return render(request, 'blog/Praktikum5.html', {'title': 'lists'})

def practice_6(request):
    return render(request, 'blog/index.html', {'title': 'lists'})

def practice_7(request):
    return render(request, 'blog/Praktikum7.html', {'title': 'lists'})




