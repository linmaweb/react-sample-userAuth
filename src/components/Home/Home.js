import React, { useState, useContext } from "react";
import GithubContext from "../../context/GithubContext";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import Info from "../Info/Info";
import List from "../List/List";
import "./Home.css";

const Home = () => {
  const context = useContext(GithubContext);
  const URL_BASE = `https://api.github.com/users/`;
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const searchUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.get(`${URL_BASE}${query}`);
      setUser(data);
    } catch (eror) {
      alert("user not found");
    }
    setQuery("");
  };

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <div className="formWrapper">
        <div className="container">
          <form onSubmit={searchUser}>
            <input
              type="text"
              value={query}
              placeholder="search for a user..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </form>
        </div>
      </div>
      <div className="content">
        <div className="container">
          {user && <Info user={user} />}
          {user && <List repos_url={user.repos_url} />}
        </div>
      </div>
    </>
  );
};

export default Home;
