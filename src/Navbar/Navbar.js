import React from "react";
import './nav.css';
import kbComponent from './kbComponent.png';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ marginRight: "auto" }} 
          >
            <section className="logo">
              <img
                src={kbComponent}
                alt="Logo"
                style={{  maxWidth: "75%", height: "auto", paddingTop: "4%", paddingLeft: "5%" }} 
              />
            </section>

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
            href="\resume.pdf"
            target="_blank"
            className="nav-link"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
