from django.contrib import admin
from .models import Project , Category

# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'date','category')
    search_fields = ('name', 'description')
    list_filter = ('date','category')
    ordering = ('-date',)
    
