from django.urls import path 
from .views import * 

urlpatterns = {
    path('', index),
    path('text_1/', text_1),
    path('text_2/', text_2),
    path('list/', list),
    path('practice_4.1/', practice_4_1),
    path('practice_4.2/', practice_4_2),
    path('practice_4.3/', practice_4_3),
}