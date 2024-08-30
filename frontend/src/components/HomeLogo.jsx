import React, { useContext, useEffect, useState } from "react";
import logoimg from "../images/SocialeX.png";
import "../styles/HomeLogo.css";
import { TbSearch } from "react-icons/tb";
// import { GeneralContext } from "../context/GeneralContextProvider";
import { SocketContext } from "../contexts/SocketContextProvider.jsx";
import Search from "./Search.jsx";

const HomeLogo = () => {
  const { socket } = useContext(SocketContext);
  const [search, setSearch] = useState("");
  const [searchedUser, setSearchedUser] = useState();

  const handleSearch = async () => {
    await socket.emit("user-search", { username: search });
    setSearch("");
  };
  useEffect(() => {
    socket.on("searched-user", ({ user }) => {
      setSearchedUser(user);
    });
  }, [socket]);

  return (
    <div className="LogoSearch">
      <img className="logoImg" src={logoimg} alt="" />
      <div className="Search">
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
      <Search searchedUser={searchedUser} setSearchedUser={setSearchedUser} />
    </div>
  );
};

export default HomeLogo;
