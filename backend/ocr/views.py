from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import pandas as pd
import numpy as np
import os
from django.conf import settings
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .color_generation import get_all_color
# Create your views here.
baseurl = "Desktop/shop_admin/backend/ocr/"
def test(request):
    return HttpResponse("hello world")
def get_high_frequenct_assay(request):
    argv = request.GET.get('argv','-1')
    file_name = 'high_frequenct_assay.csv'
    file_path = os.path.join(settings.BASE_DIR,'ocr','data',file_name)
    argv = str(argv)
    return JsonResponse(get_all_color(argv))

################Section3####################################################
def box_data_helper(df,category_col,value_col,label_col,individual_col ,ascending_fg=False):
    categories = df.groupby(category_col)[value_col].mean().sort_values(ascending=ascending_fg).index

    box_data = []
    outlier_data = []

    for category in categories:
        category_data = df[df[category_col] == category][value_col]
        Q1 = category_data.quantile(0.25)
        Q2 = category_data.mean()
        Q3 = category_data.quantile(0.75)
        IQR = Q3 - Q1
        min_value = category_data.min()
        max_value = category_data.max()
        
        # 离群值定义
        lower_bound = Q1 - 1.5 * IQR
        if lower_bound < min_value:
            lower_bound = min_value
        upper_bound = Q3 + 1.5 * IQR
        if upper_bound > max_value:
            upper_bound = max_value
        outliers = df[(df[category_col] == category) & ((df[value_col] < lower_bound) | (df[value_col] > upper_bound))]
        # 
        box_data.append([round(lower_bound,2), round(Q1,2), round(Q2,2), round(Q3,2), round(upper_bound,2),len(category_data.tolist()),round(min_value,2),round(max_value,2)])
        for _, row in outliers.iterrows():
            outlier_data.append([categories.tolist().index(category), round(row[value_col], 2), row[individual_col]])
    result = {'box_data':box_data,'outlier_data':outlier_data,'category_data':list(categories)}   
    return result
