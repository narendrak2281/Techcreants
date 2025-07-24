# Techcreants Backend API

A Django REST Framework backend for the Techcreants website.

## Features

- Product Management API
- Service Listings API
- Case Studies API
- Lead Generation API
- Newsletter Subscription API
- Future AI Chatbot Integration Ready
- Analytics Tracking API

## API Endpoints

### Products

- `GET /api/v1/products/` - List all products
- `GET /api/v1/products/{id}/` - Get product details

### Services

- `GET /api/v1/services/` - List all services
- `GET /api/v1/services/{id}/` - Get service details

### Case Studies

- `GET /api/v1/case-studies/` - List all case studies
- `GET /api/v1/case-studies/{id}/` - Get case study details

### Lead Generation

- `POST /api/v1/leads/` - Submit contact form, demo request, or quote request

### Newsletter

- `POST /api/v1/newsletter/` - Subscribe to newsletter

### Chat (Future)

- `POST /api/v1/chat/` - Send chat message
- `POST /api/v1/chat/session/` - Create chat session

### Analytics

- `POST /api/v1/analytics/track/` - Track user events

## Setup

1. Create virtual environment: `python -m venv venv`
2. Activate virtual environment: `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (macOS/Linux)
3. Install dependencies: `pip install -r requirements.txt`
4. Setup database: `python manage.py migrate`
5. Create superuser: `python manage.py createsuperuser`
6. Run server: `python manage.py runserver`

## Environment Variables

Create a `.env` file in the backend directory:

```
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://username:password@localhost:5432/techcreants
CORS_ALLOWED_ORIGINS=http://localhost:3000
EMAIL_HOST=your-smtp-host
EMAIL_PORT=587
EMAIL_HOST_USER=your-email@domain.com
EMAIL_HOST_PASSWORD=your-email-password
```
