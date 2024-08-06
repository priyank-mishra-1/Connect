import Post from "../models/Posts.js";

export const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);

    const post = await newPost.save();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message, in: "error in creating posts" });
  }
};
