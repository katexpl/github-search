# GithubSearch React Application

## Overview
GithubSearch is a React application that allows users to search for a GitHub user by their login name and retrieve information about the last 5 updated projects for that user. Additionally, it provides details on the last 5 commits for each project. The application utilizes the GitHub API to fetch the necessary data.

## Features
- GitHub User Search: Enter the GitHub login name of a user to retrieve their information.

- Project and Commit Details: View the last 5 updated projects for the user along with the last 5 commits for each project.

- Error Handling: In case of user not found or other errors, the application provides informative error messages.

## Getting started

1. Clone repository to your local machine:
```bash
git clone https://github.com/your-username/github-search.git
```

2. Install dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

## Usage 
1. Enter the GitHub login name of the user you want to search for.
2. Click the "Submit" button to fetch and display project and commit details.
3. Explore the last 5 updated projects, including information on project updates and the last 5 commits for each project.

## Technologies Used
- React
- Axios for making API requests
- Redux Toolkit for state management
