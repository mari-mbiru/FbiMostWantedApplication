# FBI Most Wanted - Fullstack Application

## Overview

This is a fullstack application for viewing and filtering the [FBI Most Wanted](https://api.fbi.gov/@wanted) list, built as an interview project. The project is split into two parts:

### 🔧 Backend
- **NestJS** – A progressive Node.js framework for building efficient and scalable server-side applications.
- **Puppeteer** – Used to programmatically retrieve authentication headers from the FBI website.
- **Axios** – For making HTTP requests to the FBI API.
- **In-memory caching** – Used to reduce the number of requests to the upstream API and provide faster response times.

### 🎨 Frontend
- **Vue 3** with **Vite** – For fast development and modern frontend capabilities.
- **TanStack Query (Vue Query)** – Manages server state, caching, and background data syncing.
- **ShadCN UI** – A set of accessible, themeable UI components built with Tailwind CSS.
- **Tailwind CSS** – Utility-first CSS framework for consistent and responsive design.

---

## Running the Applications

The easiest way to run both the backend and frontend is using Docker Compose. This sets up both services and handles networking and dependencies for you.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/) (or use `docker compose` with Docker CLI v2+)


### Running Locally

In the **root directory** (where `docker-compose.yml` is located), run:

```bash
docker-compose up --build

