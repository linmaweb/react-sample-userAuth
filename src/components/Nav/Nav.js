import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../../config";
import "./Nav.css";

const Nav = () => {
  const context = useContext(GithubContext);

  return (
    <div className="nav-wrapper">
      <div className="container">
        {context.user ? (
          <div className="nav">
            <span>{context.user.email}</span>
            <Link
              to="/"
              onClick={() => {
                context.setUser(null);
              }}
            >
              Log Out
            </Link>
          </div>
        ) : (
          <div className="nav">
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
