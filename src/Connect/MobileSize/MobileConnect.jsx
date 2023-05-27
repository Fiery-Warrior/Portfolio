import React from "react";
import "./connect.css";
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';

const MobileConnect = () => {
  const handleEmailClick = () => {
    // Code to handle opening the email area goes here
    console.log("Email clicked");
  };

  return (
    <section id="contact" style={{ color: "#000000" }}>
      <div className="container-a-mobile">
        <div className="description-c-mobile">
          <h1 style={{ textAlign: "center" }}>Contact</h1>
        </div>

        <div className="contactme-mobile">
          <a href="https://www.linkedin.com/in/keagan-bogart-786951209" target="_blank">
            <FaLinkedin size={45} style={{ color: "#0A66C2", paddingRight: "5%" }} />
          </a>
          <a href="https://github.com/Fiery-Warrior" target="_blank">
            <FaGithubSquare size={45} style={{ color: "#000000", paddingRight: "5%" }} />
          </a>
          <a href="mailto:keagan.j.bogart@gmail.com">
            <RiMailFill size={45} style={{ color: "#D44638", paddingRight: "5%" }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileConnect;
