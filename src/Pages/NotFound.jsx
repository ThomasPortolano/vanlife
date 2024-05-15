import { Link } from "react-router-dom";
import "../index.css";

export default function NotFound() {
  return (
    <div className="notfound__container">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link className="return__home" to="/">
        Return to Home
      </Link>
    </div>
  );
}
