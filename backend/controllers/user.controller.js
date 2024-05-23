import createToken from "../Token/token.js";
import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  try {
    if (password !== confirmpassword) {
      return res.status(400).json({
        success: false,
        error: "Passwords Are Not Matching",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        error: "User Already Exists",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      name,
      email,
      password: hashpassword,
    });
    await newUser.save();
    if (newUser) {
      createToken(newUser._id, res);
      return res.status(201).json({
        success: true,
        message: "User Registred Successfully",
        newUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Something Went Wrong",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPassword = await bcrypt.compare(password, user.password);
    if (!user || !isPassword) {
      res.status(500).json({
        success: false,
        error: "Invalid Username or Password",
      });
    }
    createToken(user._id, res);
    return res.status(201).json({
      success: true,
      message: "User Logged In Successfully",
      user: {
        name: user.name,
        email: user.email,
        userid: user._id,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Something Went Wrong",
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(201).json({
      success: true,
      message: "User Logged Out Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Something Went Wrong",
    });
  }
};
