import User from "../models/userSchema.js";
import mongoose from "mongoose";

export const register = (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  try {
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords Are Not Matching" });
    }
    const user = User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User Already Exists" });
    }
    const newUser = new User({
      name,
      email,
      password,
    });
    newUser.save();
    return res.status(201).json({ message: "User Registred Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something Went Wrong" });
  }
};
