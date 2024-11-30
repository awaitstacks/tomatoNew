import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        messaage: "User doesn't exists",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        messaage: "Invalid credentials",
      });
    }
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, messaage: "Error" });
  }
};
//Create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // Checking user already exits
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, messaage: "User already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, messaage: "Please enter valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        messaage: "Please enter valid strong password",
      });
    }
    //Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    return res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log("Error");
    return res.json({ success: false, messaage: "Error creating user" });
  }
};

export { loginUser, registerUser };
