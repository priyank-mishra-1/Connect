import express from "express";
import {
  fetchAllPosts,
  fetchAllStories,
  fetchUserImg,
  fetchUserName,
} from "../controllers/Posts.js";
import { createPost } from "../controllers/createPost.js";

const router = express.Router();

router.post("/createPost", createPost);
router.get("/fetchAllPosts", fetchAllPosts);
router.get("/fetchUserName", fetchUserName);
router.get("/fetchUserImg", fetchUserImg);
router.get("/fetchAllStories", fetchAllStories);

export default router;
