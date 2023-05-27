import React from "react";
import "./connect.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';

const Connect = () => {
  const handleEmailClick = () => {
    // Code to handle opening the email area goes here
    console.log("Email clicked");
  }

  return (
    <section id="contact" style={{ color: "#000000" }}>
      <div className="container-a">
        <div className="description-c">
          <h1 style={{ textAlign: "center" }}>Contact</h1>

        <Card sx={{ maxWidth: 345, minWidth: 290 }} className="contactme">
          <CardActionArea onClick={handleEmailClick}>
            <CardContent>
              <a href="https://www.linkedin.com/in/keagan-bogart-786951209" target="_blank">
                <FaLinkedin size={45} style={{ color: "#0A66C2", paddingRight: "5%" }} />
              </a>
              <a href="https://github.com/Fiery-Warrior" target="_blank">
                <FaGithubSquare size={45} style={{ color: "#000000", paddingRight: "5%" }} />
              </a>
              <a href="mailto:keagan.j.bogart@gmail.com">
                <RiMailFill size={45} style={{ color: "#D44638", paddingRight: "5%" }} />
              </a>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      </div>

    </section>

  );
};

export default Connect;
