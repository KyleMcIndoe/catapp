from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FactSerializer
from .models import Fact

# Create your views here.

class FactView(viewsets.ModelViewSet):
    serializer_class = FactSerializer
    queryset = Fact.objects.all()