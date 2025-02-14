import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router"
import About from "./About";
import Projects from "./Projects";
import LandingPage from "./LandingPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;