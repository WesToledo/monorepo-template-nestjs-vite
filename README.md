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

The project uses PostgreSQL with Prisma ORM. Start the database using Docker:

```bash
npm run docker:up
```

### 2. Database Migrations

Before running the applications for the first time, you must apply the database migrations:

```bash
npm run db:migrate
```

This command will:

1. Create the database if it doesn't exist.
2. Apply migrations to the database.
3. Generate the Prisma Client.

### 3. Run the Applications

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

- **Frontend:** Accessible at `http://localhost:5173`
- **Backend:** Accessible at `http://localhost:3000`

## Other Scripts

- **Build:** `npm run build` - Builds both applications.
- **Lint:** `npm run lint` - Lints both applications.
- **Test:** `npm run test` - Runs backend tests.
- **Database Migrate:** `npm run db:migrate` - Creates and applies migrations.
- **Prisma Client Generate:** `npm run db:generate` - Regenerates Prisma Client.
- **Prisma Studio:** `npm run db:studio` - Opens a UI to explore your data.
- **Docker Up/Down:** `npm run docker:up` / `npm run docker:down` - Manage database container.
