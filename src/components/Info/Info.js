import React from "react";
import "./Info.css";

const Info = ({ user }) => {
  return (
    <div className="section">
      <div className="user">
        <div className="userWrapper">
          <div className="imgWrapper">
            <img src={user.avatar_url} alt="user" />
          </div>
          <div className="row">
            <div className="info">
              {user.name && <h2>{user.name}</h2>}
              {user.login && <h3>{user.login}</h3>}
            </div>

            {user.bio && (
              <div className="desc">
                <p>{user.bio}</p>
              </div>
            )}

            <div className="links">
              {user.location && (
                <p>
                  <i className="fas fa-map-marker-alt fa-sm"></i>
                  {user.location}
                </p>
              )}

              {user.blog && (
                <a
                  href={`http: //${user.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-link fa-sm"></i>
                  {user.blog}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
