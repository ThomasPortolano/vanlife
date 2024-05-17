import "../Styles/navbar.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

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
        <NavLink to="/login">
          <button onClick={fakeLogOut}>X</button>
        </NavLink>
      </div>
    </div>
  );
}
