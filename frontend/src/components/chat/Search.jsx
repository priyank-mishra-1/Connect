import React, { useContext, useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { GeneralContext } from "../../contexts/GeneralContextProvider.jsx";
import { SocketContext } from "../../contexts/SocketContextProvider.jsx";

const Search = () => {
  const { dispatch } = useContext(GeneralContext);
  const { socket } = useContext(SocketContext);
  const [search, setSearch] = useState("");
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState();
  const [err, setErr] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setErr(false);
    setUser();
    await socket.emit("chat-user-searched", {
      ownId: userId,
      username: search,
    });
    setSearch("");
  };

  useEffect(() => {
    socket.on("searched-chat-user", async ({ user }) => {
      setUser(user);
    });
    socket.on("no-searched-chat-user", async () => {
      setErr(true);
    });
  }, [socket]);

  const handleSelect = async (user) => {
    await dispatch({ type: "CHANGE_USER", payload: user });
    setUser();
  };

  return (
    <div className="search">
      <div className="searchform">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <div className="s-icon" onClick={handleSearch}>
          <TbSearch />
        </div>
      </div>

      {err && <span>No User Found!!</span>}

      {user && (
        <div className="userInfo" onClick={() => handleSelect(user)}>
          <img src={user.profilePic} alt="" />
          <div className="userChatInfo">
            {" "}
            <span>{user.username}</span>{" "}
          </div>
        </div>
      )}
    </div>
  );
};
export default Search;
