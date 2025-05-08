import { Link } from "react-router-dom";
import "../Styles/Navbar.css"; // Make sure to create this CSS file

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/Home"  className="nav-link">Home</Link>
            <Link to="/Project" className="nav-link">Project</Link>
            <Link to="/Research" className="nav-link">Research</Link>
        </nav>
    );
}