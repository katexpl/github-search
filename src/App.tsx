import GithubSearch from "./pages/githubSearch";
import WelcomeScreen from "./pages/welcomeScreen";
import "./styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/github-search" element={<GithubSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
