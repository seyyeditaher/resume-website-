from django.shortcuts import render, get_object_or_404
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import Project
from .serializers import ProjectSerializer



def home(request):
    projects = Project.objects.all()
    return render(
        request,
        'website/index.html',
        {'projects': projects, 'project': projects.first()}
    )

def project_detail(request, id):
    project = get_object_or_404(Project, id=id)
    return render(request, 'website/project_detail.html', {'project': project})



class ProjectListCreateAPIView(ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'id'
