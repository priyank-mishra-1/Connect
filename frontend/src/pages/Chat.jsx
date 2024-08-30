import React from "react";
import "../styles/Chat.css";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/chat/Sidebar.jsx";
import UserChat from "../components/chat/UserChat.jsx";
import HomeLogo from "../components/HomeLogo.jsx";

const Chat = () => {
  return (
    <div className="chatPage">
      {/* <HomeLogo /> */}
      {/* <Navbar /> */}

      <div className="home">
        <Sidebar />
        <UserChat />
      </div>
    </div>
  );
};

export default Chat;
