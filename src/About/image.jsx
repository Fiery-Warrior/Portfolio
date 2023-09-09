import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

export default function ImgMediaCard() {
  return (
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
      <CardActions>
        <a
          href="https://www.linkedin.com/in/keagan-bogart-786951209"
          target="_blank"
        >
          <FaLinkedin
            size={25}
            style={{
              color: "#0A66C2",
              paddingRight: "3%",
              "@media (max-width: 480px)": {
                fontSize: 20,
              },
            }}
          />
        </a>
        <a
          href="https://github.com/Fiery-Warrior"
          target="_blank"
        >
          <FaGithubSquare
            size={25}
            style={{
              color: "#000000",
              paddingRight: "3%",
              "@media (max-width: 480px)": {
                fontSize: 20,
              },
            }}
          />
        </a>
        <a href="mailto:keagan.j.bogart@gmail.com">
          <RiMailFill
            size={25}
            style={{
              color: "#D44638",
              paddingRight: "3%",
              "@media (max-width: 480px)": {
                fontSize: 20,
              },
            }}
          />
        </a>
      </CardActions>
    </Card>
  );
}
