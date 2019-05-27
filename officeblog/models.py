from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User
from django.utils.six import python_2_unicode_compatible

class Post(models.Model):
    title=models.CharField(max_length=300)
    body=models.TextField()
    created_time=models.DateTimeField()

    def __str__(self):
        return self.title
    def get_absolute_url(self):
        return reverse('officeblog:pysensing')

# Create your models here.
