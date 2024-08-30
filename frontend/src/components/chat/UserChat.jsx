import React, { useContext } from "react";
import Input from "./Input.jsx";
import Messages from "./Messages.jsx";
import { GeneralContext } from "../../contexts/GeneralContextProvider.jsx";

const UserChat = () => {
  const { chatData } = useContext(GeneralContext);

  return (
    <div className="chat">
      {chatData.user && (
        <div className="chatInfo">
          <img src={chatData.user?.profilePic} alt="" />
          <span>{chatData.user.username}</span>
        </div>
      )}
      <Messages />
      <Input />
    </div>
  );
};
export default UserChat;
