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
            USAA
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Summer 2022 Worked as Full Stack Software Engineer
            Summer 2023 Wil be working as an AWS Cloud Developer
          </Typography>
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Teacher Assistant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Presnting Labs, creating and grading assignments, and managing two other Teacher Assistants

          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
  );
}