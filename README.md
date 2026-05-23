# Product Store

Full-stack MERN product store with a React + Vite frontend and an Express + MongoDB backend.

## Features

- Create, read, update, and delete products
- Image URL support for product cards
- Chakra UI styling with dark/light mode
- Backend API served from `backend/server.js`
- Vite proxy for local frontend development

## Setup

1. Copy `.env.example` to `.env` and set your MongoDB connection string:

```bash
cp .env.example .env
```

2. Install dependencies:

```bash
npm install
npm install --prefix frontend
```

## Run locally

### Backend only

```bash
npm run dev
```

### Frontend only

```bash
npm run dev --prefix frontend
```

The frontend uses a proxy to forward `/api` requests to `http://localhost:5000`.

## Build for production

```bash
npm run build
```

Then start the server:

```bash
npm run start
```

## API routes

- `GET /api/products`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

## Notes

- Make sure MongoDB is running and `MONGO_URI` is set correctly.
- The backend serves the production build from `frontend/dist` when `NODE_ENV=production`.
