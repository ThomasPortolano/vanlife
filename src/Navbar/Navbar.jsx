import "../Styles/navbar.css";
import { NavLink, Link } from "react-router-dom";
// import { FaAddressBook } from "react-icons/fa6";

export default function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <Link to="/">#VANLIFE</Link>
      </div>
      <div className="navbar__menu">
        <NavLink
          className="navbar__menu-item"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className="navbar__menu-item"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="navbar__menu-item"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/vans"
        >
          Vans
        </NavLink>
        <NavLink
          className="navbar__menu-item"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}
