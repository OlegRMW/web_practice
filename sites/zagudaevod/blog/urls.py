from django.urls import path 
from .views import * 

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('blog/', Home.as_view()),
    path('blog/practice_3', practice_3),
    path('blog/practice_4', practice_4),
    path('blog/practice_5', practice_5),
    path('blog/practice_6', practice_6),
    path('blog/practice_7', practice_7),
    path('blog/practice_7_1', practice_7_1),
    path('blog/practice_7_2', practice_7_2),
    path('blog/practice_9', practice_9),
    path('blog/practice_8', practice_8),
    path('blog/practice_10', practice_10),
    path('category/<str:slug>', PostsByCategory.as_view(), name='category'),
    path('post/<str:slug>/', GetPost.as_view(), name='post'),
    path('tag/<str:slug>/', PostsByTag.as_view(), name='tag'),
    path('posts/add-news/', add_news, name='add_news')
]