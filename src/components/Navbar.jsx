import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">Portfolio</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>

        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>

        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>

        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>

        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>

        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>

        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

      </ul>

    </nav>
  );
}

export default Navbar;