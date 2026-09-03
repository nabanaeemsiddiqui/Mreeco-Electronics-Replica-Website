from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

from store.views import product_detail_api, products_api

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/products/", products_api, name="products-api"),
    path("api/products/<slug:slug>/", product_detail_api, name="product-detail-api"),
    path("", TemplateView.as_view(template_name="index.html"), name="home"),
    path("products.html", TemplateView.as_view(template_name="products.html"), name="products-page"),
    path("collections.html", TemplateView.as_view(template_name="collections.html"), name="collections-page"),
    path("product-details.html", TemplateView.as_view(template_name="product-details.html"), name="product-detail-page"),
    path("cart.html", TemplateView.as_view(template_name="cart.html"), name="cart-page"),
    path("checkout.html", TemplateView.as_view(template_name="checkout.html"), name="checkout-page"),
    path("login.html", TemplateView.as_view(template_name="login.html"), name="login-page"),
    path("signup.html", TemplateView.as_view(template_name="signup.html"), name="signup-page"),
]

if settings.DEBUG:
    urlpatterns += static("/", document_root=settings.BASE_DIR)
