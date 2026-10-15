from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE,null=True)

    def __str__(self):
        return self.name

    