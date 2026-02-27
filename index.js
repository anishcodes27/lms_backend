import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import userRouter from "./routers/userRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to database
dbConnect();

app.use("/api/users", userRouter);

// For local development
if (process.env.NODE_ENV !== "production") {
  app.listen(8080, () => console.log("Server Started on port 8080"));
}

// Export for Vercel
export default app;

