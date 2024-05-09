import "../Styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <Link to="/">#VANLIFE</Link>
      </div>
      <div className="navbar__menu">
        <Link className="navbar__menu-item" to="/host">
          Host
        </Link>
        <Link className="navbar__menu-item" to="/about">
          About
        </Link>
        <Link className="navbar__menu-item" to="/vans">
          Vans
        </Link>
      </div>
    </div>
  );
}
