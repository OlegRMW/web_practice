from django.urls import path 
from .views import * 

urlpatterns = {
    path('', practice_6),
    path('blog/', practice_6),
    path('blog/practice_3', practice_3),
    path('blog/practice_4', practice_4),
    path('blog/practice_5', practice_5),
    path('blog/practice_6', practice_6),
    path('blog/practice_7', practice_7),
}