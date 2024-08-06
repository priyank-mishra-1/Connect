import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/Users.js";
import { config } from "dotenv";
config({ path: "../.env" });

const JWT_SECRET = "connectIsSecuredThroughJWT";
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const register = async (req, res) => {
  try {
    const { username, email, password, profilePic } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
      profilePic,
    });

    const user = await newUser.save();

    const token = generateToken(user._id);

    const userData = {
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
      about: user.about,
      posts: user.posts,
      followers: user.followers,
      following: user.following,
    };

    res.status(200).json({ token, user: userData });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      in: "error in registering user",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);
    delete user.password;
    const userData = {
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
      about: user.about,
      posts: user.posts,
      followers: user.followers,
      following: user.following,
    };

    res.status(200).json({
      token,
      user: userData,
    });
    console.log(token, userData);
  } catch (err) {
    res.status(500).json({ error: err.message, in: "error in logging" });
  }
};
