import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Career() {
  return (
    <a href = "\resume.pdf" style={{textDecoration: "none"}} target="_blank">
    <Card sx={{ display: 'flex', maxWidth: 345, minWidth: 440, minHeight: 137, '@media (max-width: 950px)': { minHeight: 150 }, '@media (max-width: 550px)': { minWidth: 400 }}}>
    <CardActionArea>
      {/* <CardMedia
        component="img"
        alt="Recent Project"
        height="100"
        image="\MoriartyLogo.png"
      /> */}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Teacher Assistant
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ‣ Presnting Labs, creating and grading assignments 
          <br/>
          ‣ Manage Teacher Assistants

          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
    </a>

    
  );
}