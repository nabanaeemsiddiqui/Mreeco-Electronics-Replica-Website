from decimal import Decimal

from django.core.management.base import BaseCommand

from store.models import Order, OrderItem, Product


class Command(BaseCommand):
    help = "Create sample orders for the Django admin"

    def handle(self, *args, **options):
        if Order.objects.exists():
            self.stdout.write("Orders already exist; no sample orders were added.")
            return

        products = list(Product.objects.order_by("sort_order")[:3])
        if len(products) < 2:
            self.stdout.write(self.style.ERROR("Import products before seeding orders."))
            return

        samples = [
            ("MRE-10001", "Naba Naeem Siddiqui", "tokazukanns@gmail.com", "Road Shaheed-e-Millat Rd, Karachi", "Cash on delivery", "processing", [(products[0], 1)]),
            ("MRE-10002", "Test Customer", "customer@example.com", "Lahore, Pakistan", "Bank transfer", "pending", [(products[1], 2), (products[0], 1)]),
        ]
        for number, name, email, address, payment, status, lines in samples:
            total = sum(product.price * quantity for product, quantity in lines)
            order = Order.objects.create(order_number=number, customer_name=name, customer_email=email, delivery_address=address, payment_method=payment, status=status, total=Decimal(total))
            OrderItem.objects.bulk_create([OrderItem(order=order, product=product, quantity=quantity, unit_price=product.price) for product, quantity in lines])
        self.stdout.write(self.style.SUCCESS("Created 2 sample orders."))