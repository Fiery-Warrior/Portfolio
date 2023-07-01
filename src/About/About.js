import React from "react";
import "./about.css";
import Card from "@mui/material/Card";

const About = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "20%",
        height: "150vh",
        width: "80vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/me2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 440,
          "@media (max-width: 768px)": {
            maxWidth: 300,
            minWidth: "auto",
          },
          "@media (max-width: 480px)": {
            maxWidth: 250,
          },
        }}
      >
  
        
      </Card>
    </div>
  );
};

export default About;
