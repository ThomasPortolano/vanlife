import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">#VANLIFE</div>
      <div className="navbar__menu">
        <div className="navbar__menu-item">About</div>
        <div className="navbar__menu-item">Vans</div>
      </div>
    </div>
  );
}
