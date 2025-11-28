from django.urls import path
from . import views

urlpatterns = [
    # Products
    path('products/', views.get_products, name='products'),
    path('products/<int:pk>/', views.get_product_details, name='product_details'),

    # Cart
    path('cart/', views.read_cart, name='read_cart'),
    path('cart/add/', views.add_to_cart, name='add_to_cart'),
    path('cart/update/<int:pk>/',views.update_cart, name='update_cart'),
    path('cart/remove/<int:pk>/',views.remove_from_cart, name='remove_from_cart'),
]
