import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

try {
  mongoose.connect(URI);
  console.log("connected to database");
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.send("Hello Developer!");
});

app.listen(PORT, () => {
  console.log(`welcome to port ${PORT}`);
});
