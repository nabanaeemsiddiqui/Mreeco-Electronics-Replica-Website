import re
from decimal import Decimal
from pathlib import Path

from django.core.management.base import BaseCommand
from django.utils.text import slugify

from store.models import Category, Product


PRODUCT_PATTERN = re.compile(
    r"\{\s*id:\s*'(?P<slug>[^']+)'\s*,\s*name:\s*'(?P<name>[^']+)'\s*,\s*price:\s*'Rs\s*(?P<price>[0-9,]+(?:\.[0-9]+)?)'\s*,\s*image:\s*'(?P<image>[^']+)'\s*,\s*images:\s*\[(?P<images>.*?)\][^}]*?category:\s*'(?P<category>[^']+)'\s*,\s*available:\s*(?P<available>true|false)",
    re.DOTALL,
)

IMAGE_PATTERN = re.compile(r"'([^']+)'")


class Command(BaseCommand):
    help = "Import the existing product catalog from js/script.js"

    def handle(self, *args, **options):
        source_path = Path(__file__).resolve().parents[3] / "js" / "script.js"
        source = source_path.read_text(encoding="utf-8")
        imported = 0

        for sort_order, match in enumerate(PRODUCT_PATTERN.finditer(source)):
            values = match.groupdict()
            category, _ = Category.objects.get_or_create(
                name=values["category"],
                defaults={"slug": slugify(values["category"])},
            )
            Product.objects.update_or_create(
                slug=values["slug"],
                defaults={
                    "name": values["name"],
                    "category": category,
                    "price": Decimal(values["price"].replace(",", "")),
                    "image": values["image"],
                    "images": IMAGE_PATTERN.findall(values["images"]),
                    "available": values["available"] == "true",
                    "sort_order": sort_order,
                },
            )
            imported += 1

        self.stdout.write(self.style.SUCCESS(f"Imported {imported} products from {source_path.name}."))
