import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

/* Importing UI Components */
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

/* Importing Pages */
import Intro from "./Pages/Intro/Intro";
import About from "./Pages/About/About";
import Vans from "./Pages/Vans/Vans";

import "./index.css";
import "../server";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
