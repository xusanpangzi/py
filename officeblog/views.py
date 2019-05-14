from django.shortcuts import render, get_object_or_404
from .models import Post


def pysensing(request):
    post_list = Post.objects.all().order_by('-created_time')


    return render(request, 'pysensing.html', context={'post_list': post_list})
