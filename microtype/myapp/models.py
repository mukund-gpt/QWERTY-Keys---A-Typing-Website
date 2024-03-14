from django.contrib.auth.models import User
from django.db import models

# Create your models here.

# class History(models.Model):
#     username=models.CharField(max_length=20, primary_key=True)
#     best_pa=models.IntegerField()
#     test=models.IntegerField()
    


class History(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    user=models.CharField(max_length=20)
    best_pa = models.IntegerField(default=0)
    test = models.IntegerField(default=0)

class YourModel(models.Model):
    your_field = models.CharField(max_length=100)