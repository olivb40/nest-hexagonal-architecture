# Car Rental Management System

This project is a NestJS application that implements a car rental management system using a hexagonal architecture. The application handles car rental operations, allowing clients to rent cars. Clients can be either individuals (paying the standard price) or professionals (receiving a 15% discount per day).

The project uses:

- **NestJS** as the main framework.
- **TypeORM** with PostgreSQL for persistence.
- **SWC** as the compiler for faster builds.
- **Docker** & **Docker Compose** for containerization.

---

## Table of Contents

- [Architecture](#architecture)
- [Features](#features)
- [Installation](#installation)
- [Development](#development)
- [Docker Setup](#docker-setup)
- [Usage](#usage)
- [License](#license)

---

## Architecture

This project follows a hexagonal architecture (also known as ports and adapters) with a modular structure:

- **Domain:** Contains the interfaces and entities (e.g., `IClient`, `ICar`, `IRental`) as well as domain services (e.g., `RentalCalculationService`). The domain layer is completely independent of any external technology.
- **Application:** Contains application services (use cases) that orchestrate business logic, such as the `RentalService`.
- **Infrastructure:** Contains implementations for persistence (using TypeORM), including ORM entities (e.g., `ClientOrmEntity`, `CarOrmEntity`, `RentalOrmEntity`) and repository implementations.
- **Adapters:** Contains controllers and other interfaces (e.g., `RentalController`) to expose the API.
- **Modules:** The project is modularized (e.g., `RentalModule`) to group functionality and dependencies, keeping the system organized and maintainable.

---

## Features

- **Car Rental Management:** Create, retrieve, and manage car rental operations.
- **Client Types:** Handle both individual and professional clients with different pricing rules.
- **Price Calculation:** Apply a 15% discount for professional clients.
- **Hexagonal Architecture:** Decouples business logic from external frameworks, making the application more flexible and testable.
- **Dockerized Setup:** Use Docker and Docker Compose for a consistent development and production environment.

---

## Installation

### Prerequisites

- Node.js (v16 or above)
- npm or yarn
- PostgreSQL (or use the provided Docker Compose configuration)
- Docker (for containerization)

### Steps

1. **Clone the Repository:**

   ```
   git clone <repository-url>
   cd nest-hexagonal-architecture
   ```

2. **Build and Run with Docker Compose:**

   ```
   docker compose up --build
   ```
