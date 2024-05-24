import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

try {
  mongoose.connect(URI);
  console.log("connected to database");
} catch (error) {
  console.log(error);
}

app.use("/user", userRoutes);
app.listen(PORT, () => {
  console.log(`welcome to port ${PORT}`);
});
