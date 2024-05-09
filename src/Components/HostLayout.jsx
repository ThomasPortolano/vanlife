import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Styles/host.css";

export default function Layout() {
  return (
    <>
      <nav className="host__nav__container">
        <Link className="host__nav__elements" to="/host">
          Dashboard
        </Link>
        <Link className="host__nav__elements" to="/host/income">
          Income
        </Link>
        <Link className="host__nav__elements" to="/host/review">
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
