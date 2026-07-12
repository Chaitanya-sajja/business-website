import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="navbar">

            <div className="logo">
                🏢 Business Website
            </div>
            <button onClick={toggleMenu}>
                ☰
            </button>
            <p>{menuOpen ? "Menu Open" : "Menu Closed"}</p>
            { menuOpen && (<ul className="nav-links">

                <li><Link to="/Home">Home</Link></li>

                <li><Link to ="/About">About</Link></li>

                <li><Link to ="/Services">Services</Link></li>

                <li><Link to ="/Portfolio">Portfolio</Link></li>

                <li><Link to ="/Contact">Contact</Link></li>

            </ul>
            )
        }

        </nav>
    );
}

export default Navbar;