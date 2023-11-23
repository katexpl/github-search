import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import GoBackArrow from "../components/BackArrow";
import { IProject, ICommit, IError } from "../models/models";

const GithubSearch: React.FC = () => {
  const [userLogin, setUserLogin] = useState<string>("");
  const [userProjects, setUserProjects] = useState<IProject[]>([]);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: AxiosResponse = await axios.get(
        `https://api.github.com/users/${userLogin}`
      );

      if (response.status === 200 && response.data.login) {
        setUserLogin(response.data.login);
        setError(""); // Clear the error on successful user retrieval
      } else {
        console.error("Failed to retrieve login.");
        setError("An error occurred");
      }

      const projects: AxiosResponse = await axios.get(
        `https://api.github.com/users/${userLogin}/repos?sort=updated&direction=desc&per_page=5`
      );
      setUserProjects(projects.data);

      if (projects.data) {
        const commits = await Promise.all(
          projects.data.map(async (project: IProject) => {
            if (project.size === 0) {
              return [];
            }
            const { data: projectCommits } = await axios.get(
              `https://api.github.com/repos/${userLogin}/${project.name}/commits`
            );
            return projectCommits.slice(0, 5) as ICommit[];
          })
        );

        setUserProjects((prevProjects) =>
          prevProjects.map((project: IProject, i) => {
            project.commits = commits[i];
            return project;
          })
        );

        // Check if there are no commits for any project
        if (commits.every((commitArray) => commitArray.length === 0)) {
          setError("This user has no commits.");
        } else {
          setError(""); // Clear the error if there are commits
        }
      }
    } catch (err: unknown) {
      const error = err as IError;
      if (error.response && error.response.status === 404) {
        setError(`User ${userLogin} not found`);
        setUserProjects([]); // Reset userProjects on user not found
      } else {
        setError("An error occurred");
      }
    }
  };

  return (
    <>
      <GoBackArrow />
      <div className="github-search-container">
        <h1>Github Search</h1>
        <form onSubmit={handleSubmit} className="github-search-form">
          <label>
            <p>GitHub Login:</p>
            <input
              type="text"
              value={userLogin}
              onChange={(e) => setUserLogin(e.target.value)}
            />
          </label>
          <button type="submit" disabled={!userLogin}>
            Submit
          </button>
        </form>
        {error && <p>{error}</p>}
        {userProjects.length > 0 && (
          <div className="github-search-results-wrapper">
            <h2>Projects:</h2>

            {userProjects.map((project) => (
              <div key={project.id}>
                <h3>{project.name}</h3>
                <p>Last updated: {project.updated_at}</p>
                <h4>Commits:</h4>
                <ul>
                  {project.commits
                    ? project.commits.map((commit) => (
                      <li key={commit.sha}>
                        {commit.commit.message ? (
                          commit.commit.message
                        ) : (
                          <i>No message</i>
                        )}{" "}
                      </li>
                    ))
                    : "No commits available"}
                </ul>
                <div className="styled-separator" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GithubSearch;
