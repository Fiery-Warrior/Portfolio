import React from "react";
import "./connect.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Connect = () => {
  const handleEmailClick = () => {
    // Code to handle opening the email area goes here
    console.log("Email clicked");
  };

  return (
    <section id="contact" style={{ color: "#000000" }}>
      <div className="container-a">
        <div className="description">
          <h1 style={{ textAlign: "center" }}>Contact</h1>
        </div>

        <Card sx={{ maxWidth: 345, minWidth: 440 }} className="contactme">
          <CardActionArea onClick={handleEmailClick}>
            <CardContent>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaEnvelope style={{ marginRight: "10px" }} />
                <Typography gutterBottom variant="h5" component="div">
                  keagan.j.bogart@gmail.com
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaLinkedin style={{ marginRight: "10px" }} />
                <Typography gutterBottom variant="h5" component="div" onClick={(e) => e.stopPropagation()} >
                  <a href="https://www.linkedin.com/in/keagan-bogart-786951209" target="_blank" rel="noopener noreferrer">
                    Keagan Bogart
                  </a>
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </section>
  );
};

export default Connect;
