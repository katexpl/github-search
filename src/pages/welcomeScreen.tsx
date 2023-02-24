import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <>
      <div className="welcome-screen-header">Github Search</div>
      <div className="welcome-screen-container">
        <div className="welcome-screen-content-container">
          <p className="welcome-screen-text">
            This is a React application called GithubSearch that enables users
            to search for a GitHub user by their login name and retrieve the
            last 5 updated projects for that user along with the last 5 commits
            for each project. The app uses the GitHub API to fetch the data.
          </p>
          <div className="welcome-page-buttons-wrapper">
            <div className="task-button-container">
              <Link to="/github-search">Github Search</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
