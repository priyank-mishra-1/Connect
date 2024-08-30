import React, { useContext, useEffect } from "react";
import { GeneralContext } from "../../contexts/GeneralContextProvider.jsx";
import { SocketContext } from "../../contexts/SocketContextProvider.jsx";
const Chats = () => {
  const { chatFriends, setChatFriends, dispatch, chatData } =
    useContext(GeneralContext);
  const { socket } = useContext(SocketContext);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    socket.emit("fetch-friends", { userId });

    socket.on("friends-data-fetched", ({ friendsData }) => {
      setChatFriends(friendsData);
    });
  }, []);

  const handleSelect = (data) => {
    dispatch({ type: "CHANGE_USER", payload: data });
    console.log(chatData);
  };
  useEffect(() => {
    if (chatData.chatId !== null) {
      socket.emit("fetch-messages", { chatId: chatData.chatId });
    }
  }, [chatData]);

  console.log(chatFriends);

  return (
    <div className="chats">
      {chatFriends &&
        chatFriends.map((data) => {
          return (
            <div
              className="userInfo"
              key={data._id}
              onClick={() => handleSelect(data)}
            >
              <img src={data.profilePic} alt="" />
              <div className="userChatInfo">
                <span>{data.username}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Chats;
