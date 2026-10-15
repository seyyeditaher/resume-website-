
from django.urls import path
from .views import (home,project_detail,ProjectListCreateAPIView,ProjectRetrieveUpdateDestroyAPIView,)

urlpatterns = [path('', home, name='home'),
path('project/<int:id>/', project_detail, name='project_detail'),
path('api/projects/', ProjectListCreateAPIView.as_view(), name='project-list-create'),
path('api/projects/<int:id>/', ProjectRetrieveUpdateDestroyAPIView.as_view(), name='project-detail'),]

