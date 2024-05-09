import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

/* Importing Pages */
import Intro from "./Pages/Intro/Intro";
import About from "./Pages/About/About";
import Vans from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetails";
import Layout from "./Components/Layout";
import HostLayout from "./Components/HostLayout";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import HostVan from "./Pages/Host/HostVan";
import HostVanDetails from "./Pages/Host/HostVanDetails";
import Review from "./Pages/Host/Review";

import "./index.css";
import "../server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Intro />} />
          <Route path="vans" element={<Vans />} />
          <Route path="about" element={<About />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVan />} />
            <Route path="vans/:id" element={<HostVanDetails />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
