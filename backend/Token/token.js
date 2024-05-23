import jwt from "jsonwebtoken";

 const createToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};
export default createToken