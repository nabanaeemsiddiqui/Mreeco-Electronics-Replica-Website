from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from .models import Product


def product_payload(product):
    return {
        "id": product.slug,
        "name": product.name,
        "price": f"Rs {product.price:,.2f}",
        "image": product.image,
        "images": product.images or ([product.image] if product.image else []),
        "category": product.category.name,
        "available": product.available,
    }


def products_api(request):
    products = Product.objects.select_related("category").all()
    category = request.GET.get("category")
    search = request.GET.get("q", "").strip()
    if category and category != "All":
        products = products.filter(category__name=category)
    if search:
        products = products.filter(name__icontains=search)
    return JsonResponse({"count": products.count(), "products": [product_payload(item) for item in products]})


def product_detail_api(request, slug):
    product = get_object_or_404(Product.objects.select_related("category"), slug=slug)
    return JsonResponse(product_payload(product))
