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
    file_path = os.path.join(settings.BASE_DIR,'ocr','data',file_name)
    argv = str(argv)
    return JsonResponse(get_all_color(argv))