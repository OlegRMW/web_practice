import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'zagudaevod.settings')
django.setup()

from blog.models import Category, Tag, Post

def create_sample_data():
    categories = [
        {'title': 'Программирование', 'slug': 'programming'},
        {'title': 'Дизайн', 'slug': 'design'},
        {'title': 'Маркетинг', 'slug': 'marketing'},
        {'title': 'Путешествия', 'slug': 'travel'},
    ]
    
    for cat_data in categories:
        Category.objects.get_or_create(**cat_data)
    
    tags = [
        {'title': 'Python', 'slug': 'python'},
        {'title': 'Django', 'slug': 'django'},
        {'title': 'Веб-разработка', 'slug': 'web-development'},
        {'title': 'UI/UX', 'slug': 'ui-ux'},
        {'title': 'SEO', 'slug': 'seo'},
        {'title': 'Советы', 'slug': 'tips'},
    ]
    
    for tag_data in tags:
        Tag.objects.get_or_create(**tag_data)
    
    posts_data = [
        {
            'title': 'Основы Django для начинающих',
            'slug': 'django-basics',
            'author': 'Алексей Петров',
            'content': 'Django - это мощный фреймворк для веб-разработки...',
            'category': Category.objects.get(slug='programming'),
            'tags': ['python', 'django', 'web-development'],
            'views': 150
        },
        {
            'title': 'Принципы современного веб-дизайна', 
            'slug': 'modern-web-design',
            'author': 'Мария Иванова',
            'content': 'Современный веб-дизайн требует внимания к деталям...',
            'category': Category.objects.get(slug='design'),
            'tags': ['ui-ux', 'tips'],
            'views': 89
        },
    ]
    
    for post_data in posts_data:
        tags = post_data.pop('tags')
        post = Post.objects.create(**post_data)
        for tag_slug in tags:
            tag = Tag.objects.get(slug=tag_slug)
            post.tags.add(tag)
    
    print("Данные успешно созданы!")

if __name__ == '__main__':
    create_sample_data()
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'zagudaevod.settings')
django.setup()

from blog.models import Category, Tag, Post

def create_sample_data():
    categories = [
        {'title': 'Программирование', 'slug': 'programming'},
        {'title': 'Дизайн', 'slug': 'design'},
        {'title': 'Маркетинг', 'slug': 'marketing'},
        {'title': 'Путешествия', 'slug': 'travel'},
    ]   
    
    for cat_data in categories:
        Category.objects.get_or_create(**cat_data)
    
    tags = [
        {'title': 'Python', 'slug': 'python'},
        {'title': 'Django', 'slug': 'django'},
        {'title': 'Веб-разработка', 'slug': 'web-development'},
        {'title': 'UI/UX', 'slug': 'ui-ux'},
        {'title': 'SEO', 'slug': 'seo'},
        {'title': 'Советы', 'slug': 'tips'},
    ]
    
    for tag_data in tags:
        Tag.objects.get_or_create(**tag_data)
    
    posts_data = [
        {
            'title': 'Основы Django для начинающих',
            'slug': 'django-basics',
            'author': 'Алексей Петров',
            'content': 'Django - это мощный фреймворк для веб-разработки...',
            'category': Category.objects.get(slug='programming'),
            'tags': ['python', 'django', 'web-development'],
            'views': 150
        },
        {
            'title': 'Принципы современного веб-дизайна', 
            'slug': 'modern-web-design',
            'author': 'Мария Иванова',
            'content': 'Современный веб-дизайн требует внимания к деталям...',
            'category': Category.objects.get(slug='design'),
            'tags': ['ui-ux', 'tips'],
            'views': 89
        },
    ]
    
    for post_data in posts_data:
        tags = post_data.pop('tags')
        post = Post.objects.create(**post_data)
        for tag_slug in tags:
            tag = Tag.objects.get(slug=tag_slug)
            post.tags.add(tag)
    
    print("Данные успешно созданы!")

if __name__ == '__main__':
    create_sample_data()