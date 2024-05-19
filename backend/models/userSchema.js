import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: validator.isEmail,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      maxLength: 10,
    },
    confirmpassword: {
      type: String,
      required: true,
      maxLength: 10,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
