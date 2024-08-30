import React, { createContext, useReducer, useState } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [isCreateStoryOpen, setIsCreateStoryOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const [notifications, setNotifications] = useState([]);

  const [chatFriends, setChatFriends] = useState([]);

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const userId = localStorage.getItem("userId");

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            userId > action.payload._id
              ? userId + action.payload._id
              : action.payload._id + userId,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <GeneralContext.Provider
      value={{
        isCreatePostOpen,
        setIsCreatePostOpen,
        isCreateStoryOpen,
        setIsCreateStoryOpen,
        isNotificationsOpen,
        setNotificationsOpen,
        notifications,
        setNotifications,
        chatFriends,
        setChatFriends,
        chatData: state,
        dispatch,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
