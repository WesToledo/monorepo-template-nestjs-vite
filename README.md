# Monorepo Template NestJS Vite

This is a monorepo structure using NPM workspaces, featuring a NestJS backend and a Vite-powered React frontend.

## Structure

- `apps/backend`: NestJS backend service.
- `apps/frontend`: Vite (React) frontend application.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) (optional, for database or full project orchestration)

## Getting Started

### 1. Installation

Install dependencies for all packages from the root directory:

```bash
npm install
```

### 2. Environment Setup

Copy the example environment file and update it if necessary:

```bash
cp .env.example .env
```

## Local Development

### 1. Start the Database

The project uses PostgreSQL. The easiest way to run it is via Docker:

```bash
docker-compose -f docker-compose.dev.yml up -d
```

### 2. Run the Applications

You can run both the frontend and backend concurrently in development mode:

```bash
npm run dev
```

Alternatively, you can run them individually:

- **Backend:** `npm run dev:backend`
- **Frontend:** `npm run dev:frontend`

The applications will be available at:

- **Frontend:** `http://localhost:5173`
- **Backend:** `http://localhost:3000`

## Production (Docker)

To run the entire project (database, backend, and frontend) in production mode using Docker:

```bash
docker-compose up -d --build
```

- **Frontend:** Accessible at `http://localhost:4173`
- **Backend:** Accessible at `http://localhost:3000`

## Other Scripts

- **Build:** `npm run build` - Builds both applications.
- **Lint:** `npm run lint` - Lints both applications.
- **Test:** `npm run test` - Runs backend tests.
