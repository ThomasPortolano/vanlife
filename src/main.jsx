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
import HostVanInfo from "./Pages/Host/HostVanInfo";
import HostVanPricing from "./Pages/Host/HostVanPricing";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import Review from "./Pages/Host/Review";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";

import "./index.css";
import "../server";
import AuthRequired from "./Components/AuthRequired";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Intro />} />
          <Route path="vans" element={<Vans />} />
          <Route path="about" element={<About />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVan />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              <Route path="review" element={<Review />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
