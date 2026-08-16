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
        <Link to="/favorites">favorites</Link>
        <Link to="/register">New User?</Link>
        <Link to="/login">sign in?</Link>


      </div>
    </nav>
  );
}

export default Navbar;