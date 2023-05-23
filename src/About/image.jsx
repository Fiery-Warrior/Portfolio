import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 440,}}>
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}