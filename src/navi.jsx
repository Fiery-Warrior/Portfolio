import React from "react";
import Image from "react-bootstrap/Image";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { GiTeacher, GiRotaryPhone } from "react-icons/gi";
import "./navi.css";

const NavbarSection = () => {
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
      <div className="chair"
        style={{
          width: "50%",
          height: "18%",
          borderRadius: "50%",
          overflow: "hidden",
          border: "6px solid #2c2f3f",
          marginTop: "15%",
        }}
      >
          <a href="https://www.linkedin.com/in/keagan-bogart-786951209" target="_blank">
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

      <h2 className="name" style={{ marginTop: "10px", marginBottom: "0", color: "#ccc", fontSize: "110%", paddingBottom: "5%" }}>
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
              color: "#ccc",
              margin: "0 10px",
              transition: "color 0.3s ease",
              textDecoration: "none", // Remove underline
            }}
            className="icon-link"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Fiery-Warrior"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ccc",
              margin: "0 10px",
              transition: "color 0.3s ease",
              textDecoration: "none", // Remove underline
            }}
            className="icon-link"
          >
            <FaGithubSquare size={30} />
          </a>
          <a
            href="mailto:keagan.j.bogart@gmail.com"
            style={{
              color: "#ccc",
              margin: "0 10px",
              transition: "color 0.3s ease",
              textDecoration: "none", // Remove underline
            }}
            className="icon-link"
          >
            <RiMailFill size={30} />
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
              color: "#ccc",
              margin: "5px 0",
              transition: "color 0.3s ease",
              paddingTop: "20%",
              textDecoration: "none", // Remove underline
              fontSize: "85%",
            }}
            className="section-link"
          >
            <AiFillHome /> Home
          </a>
          
          <a
            href="#about"
            style={{
              color: "#ccc",
              margin: "5px 0",
              transition: "color 0.3s ease",
              paddingTop: "10%",
              textDecoration: "none", // Remove underline
              fontSize: "85%",
            }}
            className="section-link"
          >
            <BsPersonFill /> About
          </a>

          <a
            href="#experience"
            style={{
              color: "#ccc",
              margin: "5px 0",
              transition: "color 0.3s ease",
              paddingTop: "10%",
              textDecoration: "none", // Remove underline
              fontSize: "85%",

            }}
            className="section-link"
          >
            <GiTeacher /> Experience
          </a>


          <a
            href="https://drive.google.com/file/d/1_dPJU4Snvlp7gi9mNe0kWtDGeRKrnCmr/view?usp=drive_link" target="_blank"
            style={{
              color: "#ccc",
              margin: "5px 0",
              transition: "color 0.3s ease",
              paddingTop: "10%",
              textDecoration: "none", // Removes underline
              fontSize: "85%",

            }}
            className="section-link"
          >
            <IoIosPaper /> Resume
          </a>

          <a
            href="mailto:keagan.j.bogart@gmail.com"
            style={{
              color: "#ccc",
              margin: "5px 0",
              transition: "color 0.3s ease",
              paddingTop: "10%",
              textDecoration: "none", // Removes underline
              fontSize: "85%",

            }}
            className="section-link"
          >
            <GiRotaryPhone /> Contact
          </a>
        </div>

        {/* Footer */}
        <div className="nav-icons"
        style={{
            position: "absolute",
            bottom: "0",
            // width: "100%",
            paddingBottom: "8%",
            color: "#ccc",
            textAlign: "center",
            fontSize: "14px",
            marginBottom: "10px", //margin bottom for spacing
            
        }}
        
        >
          {/* Created by Keagan Bogart */}
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
