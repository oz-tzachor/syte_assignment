## Catalog Management System (Dockerized)

This project contains a full-stack catalog management system with a React frontend, Express backend, and MongoDB database. The entire system is dockerized for easy setup and deployment.

## Directory Structure

root/
├── catalog-frontend/ # React frontend
├── catalog-backend/ # Express backend
├── docker-compose.yml # Docker Compose configuration

## Prerequisites

Ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Build and Run the System

Run the following command to build and start all services:

```bash
docker-compose up --build
```

## Access the Application

Once the services are running:

- **Frontend**: Open your browser and go to [http://localhost:3000](http://localhost:3031)
- **Backend**: The API is available at [http://localhost:3033/api/catalogs](http://localhost:3033/api/catalogs)

## Stop the System

To stop the running services, press `CTRL+C` in the terminal where Docker is running. Then remove the containers with:

```bash
docker-compose down
```

## Environment Variables

The backend connects to MongoDB using the `MONGO_URI` environment variable. By default, the `docker-compose.yml` file configures the backend to connect to a MongoDB container.

---

## Postman Collection

Included is the `Postman` collection used for testing the API as `JSON` file.

---

## Personal Note

This Dockerized system was created as an **extra step** to enhance the original home task. It demonstrates how to deploy a full-stack application with containerized services, making the setup and execution seamless and consistent across environments.

By Dockerizing both the **frontend** and **backend** and integrating a **MongoDB container**, this project is not only functional but also portable and easy to maintain.

---