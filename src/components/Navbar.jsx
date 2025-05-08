import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {}
      <button 
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {}
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/project" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Project
        </Link>
        <Link to="/research" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Research
        </Link>
      </div>
    </nav>
  );
}