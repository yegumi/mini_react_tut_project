import "../assets/css/navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const token = localStorage.getItem("accessToken");
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
      Logomi
      </Link>

      <div className="navbar-links">
        {!token ? (
          <>
            <Link to="/register">New User?</Link>
            <Link to="/login">sign in?</Link>
          
          </>
        ):<Link to="/login">Log out</Link> }
        <Link to="/">Home</Link>
        <Link to="/favorites">favorites</Link>
        <Link to="/upload">wanna share a new logo?</Link>
        <Link to="/profile">profile</Link>


      </div>
    </nav>
  );
}

export default Navbar;