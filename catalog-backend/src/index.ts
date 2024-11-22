import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./config/db";
import catalogRoutes from "./routes/catalogRoutes";

// Load environment vars from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/catalogs", catalogRoutes);

//
const startServer = async () => {
  try {
    await connectToDatabase();
    const PORT = process.env.PORT || 3033;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(
      "Failed to connect to MongoDB. Server is shutting down.",
      error
    );
    process.exit(1);
  }
};

startServer();
