from django.urls import path
from . import views

urlpatterns = [
    # http://127.0.0.1:8000/api/test,
    path('test/', views.test, name='test'),    
]