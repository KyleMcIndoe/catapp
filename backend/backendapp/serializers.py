from rest_framework import serializers
from .models import Fact, Breed

class FactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fact
        fields = ('id', 'title', 'body')

class BreedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breed
        fields = ('id', 'title', 'body')