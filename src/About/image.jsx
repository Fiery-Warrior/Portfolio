// import React from "react";
// import Card from "@mui/material/Card";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./image.css";

export default function ImgMediaCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <section className="image-cards-i">
        <div className="card-inner-i">
          <div className="card-front-i" onClick={handleCardFlip}>
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
              <CardMedia
                component="img"
                alt="Beach Walk"
                height="400"
                image="\me.avif"
                sx={{
                  "@media (max-width: 768px)": {
                    height: 300,
                  },
                  "@media (max-width: 480px)": {
                    height: 250,
                  },
                }}
              />
            </Card>
          </div>

          <div className="card-back-i" onClick={handleCardFlip}>
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
              <CardMedia
                component="img"
                alt="At office"
                height="400"
                image="\work.jpg"
                sx={{
                  "@media (max-width: 768px)": {
                    height: 300,
                  },
                  "@media (max-width: 480px)": {
                    height: 250,
                  },
                }}
              />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}