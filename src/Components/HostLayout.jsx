import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../Styles/host.css";

export default function Layout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host__nav__container">
        <NavLink
          className="host__nav__elements"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className="host__nav__elements"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className="host__nav__elements"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host/vans"
        >
          Vans
        </NavLink>
        <NavLink
          className="host__nav__elements"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host/review"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
