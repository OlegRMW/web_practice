from django.urls import path 
from .views import * 

urlpatterns = [
    path('', practice_6),
    path('blog/', practice_6),
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
    path('', practice_6, name='home'),
    path('category/<str:slug>', get_category, name='category')
]