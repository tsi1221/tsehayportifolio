import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; // Replace with your actual path

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <img
            src={logo}
            alt="TsiPortfolio Logo"
            className="navbar-logo"
          />
          <h1>Tsi...</h1>
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
