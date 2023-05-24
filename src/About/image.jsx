import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 440 }}>
      <CardMedia
        component="img"
        alt="Beach Walk"
        height="400"
        image="\me.jpg"
      />
      <CardActions>
          <a href="https://www.linkedin.com/in/keagan-bogart-786951209" target="_blank">
            <FaLinkedin size={25} style={{ color: "#0A66C2", paddingRight: "3%"  }}/>
          </a>
          <a href="https://github.com/Fiery-Warrior/mm_pythonweb" target="_blank">
            <FaGithubSquare size={25} style={{ color: "#000000", paddingRight: "3%" }}/>
          </a>
          <a href="mailto:keagan.j.bogart@gmail.com">
            <RiMailFill size={25} style={{ color: "#D44638", paddingRight: "3%" }}/>
          </a>
      </CardActions>
    </Card>
  );
}
