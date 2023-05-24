import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Career() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 440, }}>
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
            Presnting Labs, creating and grading assignments <br/>Manage two other Teacher Assistants

          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>

    
  );
}