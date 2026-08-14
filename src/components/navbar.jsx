import "../assets/css/navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
      Logomi
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cards">Scripts</Link>
        <Link to="/favorites">favorites</Link>

      </div>
    </nav>
  );
}

export default Navbar;