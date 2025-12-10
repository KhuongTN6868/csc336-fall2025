import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import AddToList from "./AddToList";

export default function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <nav className="nav">
          <NavLink to="/" end className="navlink">Home</NavLink>
          <NavLink to="/list" className="navlink">List</NavLink>
          <NavLink to="/add" className="navlink">Add</NavLink>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<AddToList />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}