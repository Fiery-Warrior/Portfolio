import React from "react";
import Card from "@mui/material/Card";

export default function ImgMediaCard() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/me.jpg')",
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
}
