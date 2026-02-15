import express from "express";
import notesRoutes from "../src/routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimit from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;

// Middleware used to get user's input
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(rateLimit);

// Entry API
app.use("/api/notes", notesRoutes);

// DB connection and running server
connectDB().then(() => {
  app.listen(5001, () => {
    console.log("Server running at PORT", PORT);
  });
});
