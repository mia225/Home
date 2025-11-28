from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Product, CartUser


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(), source="product", write_only=True
    )

    class Meta:
        model = CartUser
        fields = ['cart_id', 'product', 'product_id', 'user', 'qty', 'created_at']
        read_only_fields = ['cart_id', 'created_at']