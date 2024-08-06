import Post from "../models/Posts.js";
import User from "../models/Users.js";
import Stories from "../models/Stories.js";

export const fetchAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });

    res.status(200).json({ posts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchUserName = async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findById(userId);
    console.log(userId);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchUserImg = async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findOne({ _id: userId });
    console.log(userId);
    res.status(200).json(user); // this creates profilePic
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchAllStories = async (req, res) => {
  try {
    const stories = await Stories.find();

    res.status(200).json(stories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
