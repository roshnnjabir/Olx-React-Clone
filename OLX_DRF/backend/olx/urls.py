from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet, RegisterView, create_product

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
urlpatterns = [
    path('api', include(router.urls)),
    path('register/', RegisterView.as_view(), name='register'),
    path('api/sell/', create_product),
]