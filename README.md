# MREECO Django backend

The existing storefront is now served by Django, with catalog data stored in SQLite and editable through the Django admin.

## Run locally

```powershell
.\.venv\Scripts\Activate.ps1
python manage.py migrate
python manage.py import_frontend_products
python manage.py runserver
```

Open `http://127.0.0.1:8000/` for the storefront or `http://127.0.0.1:8000/admin/` for catalog administration. Create an admin user with `python manage.py createsuperuser`.

## Catalog API

- `GET /api/products/`
- `GET /api/products/?category=Arduino`
- `GET /api/products/?q=uno`
- `GET /api/products/<slug>/`
