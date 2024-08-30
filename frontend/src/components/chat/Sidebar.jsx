import React from "react";
import Search from "./Search.jsx";
import Chats from "./Chats.jsx";
import Navbar from "../Navbar.jsx";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />

      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
