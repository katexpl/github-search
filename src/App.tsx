import GithubSearch from "./pages/GithubSearch";
import WelcomeScreen from "./pages/WelcomeScreen";
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
