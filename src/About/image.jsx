import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 440 }}>
      <CardMedia
        component="img"
        alt="Beach Walk"
        height="400"
        image="\me.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{ fontStyle: "italic" }}>
          keagan.j.bogart@gmail.com
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ color: "#000000" }}>
          <FaGithubSquare size={25} />
        </Button>
        <Button size="small" style={{ color: "#0A66C2" }}>
          <FaLinkedin size={25} />
        </Button>
      </CardActions>
    </Card>
  );
}
