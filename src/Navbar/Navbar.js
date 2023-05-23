import React from "react";
import './nav.css';
const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a
            className="nav-link"
          >
          <a className="nav-link" dangerouslySetInnerHTML={{ __html: "&lt;KeaganBogart/&gt;" }}></a>
          </a>
        </li>        
        <li className="nav-item a">
          <a
            href="#about"
            className="nav-link"
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
        </li>
        <li className="nav-item a">
          <a
            href="#experience"
            className="nav-link"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </a>
        </li>
        <li className="nav-item a">
          <a
            href="#contact"
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </li>
        <li className="nav-item a">
          <a
            href="#resume"
            className="nav-link"
            onClick={() => scrollToSection("resume")}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
