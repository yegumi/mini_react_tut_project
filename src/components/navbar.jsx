import "../assets/css/navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Ancient Scripts
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cards">Scripts</Link>
      </div>
    </nav>
  );
}

export default Navbar;