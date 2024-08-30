import React from "react";
import "../styles/Home.css";
import Post from "../components/Post.jsx";
import HomeLogo from "../components/HomeLogo.jsx";
import Navbar from "../components/Navbar.jsx";
import Stories from "../components/Stories.jsx";

const Home = () => {
  return (
    <div className="homePage">
      <HomeLogo />
      <Navbar />
      <Stories />
      <Post />
    </div>
  );
};

export default Home;
