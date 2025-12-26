from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView
from .models import Post 
from .models import Category
from django.db.models import F
from .forms import PostsForm

class Home(ListView):
    model = Post 
    template_name = 'blog/index.html'
    context_object_name = 'posts'
    paginate_by = 4
    
    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Classic Blog Design'
        return context

def add_news(request):
    if request.method == 'POST':
        # получение данных из формы
        form = PostsForm(request.POST)

        # если данные прошли валидацию, то записываем их в базу данных
        if form.is_valid():
            # вводим данные в таблицу
            Post.objects.create(**form.cleaned_data)
            # после ввода данных вызываем главную страницу
            return redirect('home')
    else:
        form = PostsForm()

    return render(request, 'blog/add_news.html', {'form': form})


class PostsByCategory(ListView):
    template_name = 'blog/index.html'
    
    context_object_name = 'posts'
    
    paginate_by = 4
    
    allow_empty = False
    
    def get_queryset(self):
        return Post.objects.filter(category__slug=self.kwargs['slug'])
    
    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = Category.objects.get(slug=self.kwargs['slug'])
        
        return context 
    
class GetPost(DetailView):
    model = Post
    template_name = 'blog/single.html'
    context_object_name = 'post'

    # создаем функцию для добавления в шаблон index дополнительного представления данных
    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        # обращаемся к полю views модели данных для записи числа просмотров
        self.object.views = F('views') + 1
        # сохраняем данные о просмотрах в базе данных
        self.object.save()
        # для вывода числа просмотров обновляем данные о статье из базы данных
        self.object.refresh_from_db()
        return context 

class PostsByTag(ListView):
    pass

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

def practice_7_1(request):
    return render(request, 'blog/Praktikum7.1.html', {'title': 'lists'}) 

def practice_7_2(request):
    return render(request, 'blog/Praktikum_7.2.html', {'title': 'lists'}) 

def practice_9(request):
    return render(request, 'blog/Praktikum9.html', {'title': 'lists'}) 

def practice_8(request):
    return render(request, 'blog/Praktikum_8.html', {'title': 'lists'})    

def practice_10(request):
    return render(request, 'blog/Praktikum10js.html', {'title': 'lists'})

def get_category(request, slug):
    return render(request, 'blog/category.html', {'title': 'lists'})

def get_post(request, slug):
    return render(request, 'blog/index.html')