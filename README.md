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

## Deploy on Render

Create a Render Web Service from this repository. Render can use the included `render.yaml`, or use these commands manually:

```text
Build command: pip install -r requirements.txt && python manage.py migrate && python manage.py import_frontend_products
Start command: gunicorn config.wsgi:application --bind 0.0.0.0:$PORT
```

## Catalog API

- `GET /api/products/`
- `GET /api/products/?category=Arduino`
- `GET /api/products/?q=uno`
- `GET /api/products/<slug>/`
