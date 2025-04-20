from django.urls import path
from . import views
urlpatterns = [
    path("test",views.test, name= "index"),# test路径对应views中的test函数,
    
    #path("get_statistic",views.get_statistic),
    #path("get_high_frequenct_assay",views.get_high_frequenct_assay),
]
