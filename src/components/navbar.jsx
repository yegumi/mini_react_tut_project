import { Link } from "react-router-dom";

function Navbar(){
    return(
    <div className="navbar">
        <div className="navbar-brand"></div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">home</Link>
                <Link to="/favorites" className="nav-link">favorite movies </Link>

            </div>

    </div>)
}

export default Navbar