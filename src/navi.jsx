import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { GiTeacher, GiRotaryPhone } from "react-icons/gi";
import SchoolIcon from '@mui/icons-material/School';
import "./navi.css";

const styles = {
  link: {
    color: "#ccc",
    margin: "10px 0",
    transition: "all 0.3s ease",
    textDecoration: "none", // Remove underline
    fontSize: "105%",
  },
hover: {
  transform: "scale(1.1)", // Make the link "pop up"
  zIndex: 1, // Make sure the link is above the others
},
blur: {
  filter: "blur(2px)", // Blur the other links
},
};

const NavbarSection = () => {
const [hoveredLink, setHoveredLink] = useState(null);

const handleLinkHover = (link) => {
  setHoveredLink(link);
};

return (
  <div
    className="black-rectangle"
    style={{
      width: "20%",
      height: "100%",
      backgroundColor: "#040B14",
      position: "fixed",
      left: "0",
      top: "0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
{/** */}
<div
        className="chair"
        style={{
          width: "50%",
          height: "18%",
          borderRadius: "50%",
          overflow: "hidden",
          border: "6px solid #2c2f3f",
          marginTop: "15%",
        }}
      >
        <a
          href="https://www.linkedin.com/in/keagan-bogart-786951209"
          target="_blank"
        >
          <Image
            src="/chair2.avif"
            alt="Profile Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </a>
      </div>

      <h2
        className="name"
        style={{
          marginTop: "10px",
          marginBottom: "0",
          color: "#ccc",
          fontSize: "110%",
          paddingBottom: "5%",
        }}
      >
        Keagan Bogart
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/keagan-bogart-786951209"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.link,
              ...(hoveredLink === "linkedin" && styles.hover),
              ...(hoveredLink && hoveredLink !== "linkedin" && styles.blur),
            }}
            className="icon-link"
            onMouseEnter={() => handleLinkHover("linkedin")}
            onMouseLeave={() => handleLinkHover(null)}
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/Fiery-Warrior"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.link,
              ...(hoveredLink === "github" && styles.hover),
              ...(hoveredLink && hoveredLink !== "github" && styles.blur),
            }}
            className="icon-link"
            onMouseEnter={() => handleLinkHover("github")}
            onMouseLeave={() => handleLinkHover(null)}
          >
            <FaGithubSquare size={40} />
          </a>
          <a
            href="mailto:keagan.j.bogart@gmail.com"
            style={{
              ...styles.link,
              ...(hoveredLink === "mail" && styles.hover),
              ...(hoveredLink && hoveredLink !== "mail" && styles.blur),
            }}
            className="icon-link"
            onMouseEnter={() => handleLinkHover("mail")}
            onMouseLeave={() => handleLinkHover(null)}
          >
            <RiMailFill size={40} />
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "10px",
          }}
        >
        <a
        href="#home"
        style={{
          ...styles.link,
          ...(hoveredLink === "home" && styles.hover),
          ...(hoveredLink && hoveredLink !== "home" && styles.blur),
        }}
        className="section-link"
        onMouseEnter={() => handleLinkHover("home")}
        onMouseLeave={() => handleLinkHover(null)}
      >
        <AiFillHome /> Home
      </a>
       <a
        href="#about"
        style={{
          ...styles.link,
          ...(hoveredLink === "about" && styles.hover),
          ...(hoveredLink && hoveredLink !== "about" && styles.blur),
        }}
        className="section-link"
        onMouseEnter={() => handleLinkHover("about")}
        onMouseLeave={() => handleLinkHover(null)}
      >
        <BsPersonFill /> About
      </a>



      <a
        href="#education"
        style={{
          ...styles.link,
          ...(hoveredLink === "education" && styles.hover),
          ...(hoveredLink && hoveredLink !== "education" && styles.blur),
        }}
        className="section-link"
        onMouseEnter={() => handleLinkHover("education")}
        onMouseLeave={() => handleLinkHover(null)}
      >
        <SchoolIcon /> Education
      </a>



      <a
        href="#experience"
        style={{
          ...styles.link,
          ...(hoveredLink === "experience" && styles.hover),
          ...(hoveredLink && hoveredLink !== "experience" && styles.blur),
        }}
        className="section-link"
        onMouseEnter={() => handleLinkHover("experience")}
        onMouseLeave={() => handleLinkHover(null)}
      >
        <GiTeacher /> Experience
      </a>

      <a
        href="https://drive.google.com/file/d/1_dPJU4Snvlp7gi9mNe0kWtDGeRKrnCmr/view?usp=drive_link"
        target="_blank"
        style={{
          ...styles.link,
          ...(hoveredLink === "resume" && styles.hover),
          ...(hoveredLink && hoveredLink !== "resume" && styles.blur),
        }}
        className="section-link"
        onMouseEnter={() => handleLinkHover("resume")}
        onMouseLeave={() => handleLinkHover(null)}
      >
        <IoIosPaper /> Resume
      </a>

      {/* <a
        href="mailto:keagan.j.bogart@gmail.com"
        style={{
          ...styles.link,
          ...(hoveredLink === "contact" && styles.hover),
          ...(hoveredLink && hoveredLink !== "contact" && styles.blur),
        }}
        className="section-link"
        onMouseEnter={() => handleLinkHover("contact")}
        onMouseLeave={() => handleLinkHover(null)}
      >
        <GiRotaryPhone /> Contact
      </a> */}
      </div>
      </div>

            {/* Footer */}
            <div
              className="nav-icons"
              style={{
                position: "absolute",
                bottom: "0",
                paddingBottom: "8%",
                color: "#ccc",
                textAlign: "center",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
        {/* Created by Keagan Bogart */}
      </div>
    </div>
  );

};

export default NavbarSection;