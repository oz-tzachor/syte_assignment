I encountered an issue while generating the downloadable file. Let me try again to ensure the file is correctly created.

It seems there is an issue creating the downloadable file directly. Let me provide you the **README content**, which you can copy into a `README.md` file manually.

---

### **README Content**

````markdown
# Express Catalog Management API

This project is a backend service for managing catalogs, built with Express and TypeScript. It connects to a MongoDB database and provides CRUD operations for catalog management.

## Features

- Add, edit, delete, and retrieve catalogs.
- Automatic handling of `isPrimary` field to ensure only one primary catalog per vertical.
- Validation of fields like `name`, `vertical`, and `locales`.
- Configurable via `.env` file for environment variables.
- Scheduled automated indexing with cron-like functionality.
- Middleware for JSON parsing and CORS.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) running locally or via a cloud service like MongoDB Atlas.

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```env
   MONGO_URI=mongodb://localhost:27017/catalogDB
   PORT=3033
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

Base URL: `http://localhost:<PORT>/api/catalogs`

| Method | Endpoint | Description                | Request Body                             |
| ------ | -------- | -------------------------- | ---------------------------------------- |
| GET    | `/`      | Fetch all catalogs         | None                                     |
| POST   | `/`      | Add a new catalog          | `{ name, vertical, isPrimary, locales }` |
| PUT    | `/:id`   | Update an existing catalog | `{ name, vertical, isPrimary, locales }` |
| DELETE | `/:id`   | Delete a catalog by ID     | None                                     |

## Project Structure

```
src/
  config/
    db.ts           # Database connection configuration
  controllers/
    catalogController.ts # Handles API logic
  models/
    catalog.ts      # Mongoose schema for catalogs
  routes/
    catalogRoutes.ts # API route definitions
  services/
    catalogService.ts # Business logic and database operations
  index.ts          # Entry point of the application
```

## Scripts

- `npm run dev`: Start the server in development mode with TypeScript compilation.
- `npm run build`: Compile the TypeScript code into JavaScript.
- `npm start`: Start the compiled JavaScript server.

## Dependencies

- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling for Node.js.
- `cors`: Middleware to enable Cross-Origin Resource Sharing.
- `dotenv`: Environment variable management.

## Dev Dependencies

- `typescript`: TypeScript for type safety.
- `@types/node`, `@types/express`, `@types/mongoose`: Type definitions.
- `ts-node-dev`: Development tool for running TypeScript directly.

## Contributing

Feel free to fork the project and submit pull requests for improvements or additional features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

```

---

1. Copy this content.
2. Paste it into a new file named `README.md` in the root of your project directory.

Let me know if you need help with anything else! 🚀
```
