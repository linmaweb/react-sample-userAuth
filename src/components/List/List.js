import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./List.css";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <div className="section">
      <div className="repos">
        {repos.map((repo, index) => (
          <a
            href={repo.html_url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="reposWrapper"
          >
            <div className="repo">
              {repo.name && (
                <p>
                  <i className="fas fa-laptop-code"></i>
                  {repo.name}
                </p>
              )}
              <div className="repoInfo">
                {repo.language && (
                  <p>
                    <span></span>
                    {repo.language}
                  </p>
                )}
                {repo.updated_at && (
                  <p className="repoUpdated">{repo.updated_at}</p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Repos;
