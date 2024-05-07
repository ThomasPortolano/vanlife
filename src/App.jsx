import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutIndex from "./About/AboutIndex";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
