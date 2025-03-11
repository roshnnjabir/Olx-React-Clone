from django.db import models

class Category(models.Model):
    name=models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
    
    
class Product(models.Model):
    name=models.CharField(max_length=225)
    price=models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    image_url = models.URLField(max_length=500, blank=True, null=True, default='https://images.unsplash.com/photo-1416339306562-f3d12fefd36f')

    def __str__(self):
        return self.name