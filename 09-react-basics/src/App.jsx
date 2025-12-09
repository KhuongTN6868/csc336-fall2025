import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import RandomDog from "./RandomDog.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dog">Random Dog</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dog" element={<RandomDog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
