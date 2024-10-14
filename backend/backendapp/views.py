from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FactSerializer, BreedSerializer
from .models import Fact, Breed

# Create your views here.

class FactView(viewsets.ModelViewSet):
    serializer_class = FactSerializer
    queryset = Fact.objects.all()

class BreedView(viewsets.ModelViewSet):
    serializer_class = BreedSerializer
    queryset = Fact.objects.all()

