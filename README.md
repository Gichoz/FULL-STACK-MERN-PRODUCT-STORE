# 🛍️ Full-Stack MERN Product Store 22/09/2026

A modern, full-stack product management and e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js), featuring containerized local development with Docker Desktop and automated CI/CD workflows via GitHub Actions.

---

## 🌟 Key Features

* **Product Management:** Full CRUD operations (Create, Read, Update, Delete) to manage store inventory with real-time updates.
* **Global State Management:** Fast, centralized state management using **Zustand** to keep UI state in sync across components.
* **RESTful API Architecture:** Scalable Node.js/Express backend providing endpoints for product listings, single product queries, and inventory state updates.
* **Modern Component UI:** Fully responsive frontend interface styled with **Chakra UI** for consistent design and accessibility.
* **Docker Containerization:** Isolated container setups using Docker and Docker Compose to spin up application services and database dependencies effortlessly.
* **Automated CI/CD Workflows:** GitHub Actions configured to automate linting, formatting checks, test suites, and Docker image builds on every commit.

---

## 🛠️ Tech Stack & Infrastructure

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Chakra UI, Zustand, Vite |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ORM |
| **DevOps & Infra** | Docker, Docker Desktop, Docker Compose, GitHub Actions |
| **Tooling & Standards**| ESLint, Prettier, Husky |

---

## 📁 Repository Structure

```text
FULL-STACK-MERN-PRODUCT-STORE/
├── .github/
│   └── workflows/    # CI/CD pipelines (lint, test, build)
├── backend/          # Express API server, routes, controllers, and models
│   ├── Dockerfile    # Backend container definition
│   └── ...
├── frontend/         # React SPA application frontend
│   ├── Dockerfile    # Frontend container definition
│   └── ...
├── docker-compose.yml# Container orchestration for local development
└── README.md

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
