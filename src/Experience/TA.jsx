import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import Resume from './resume.pdf';

export default function Career() {
  return (
    <a href = "https://github.com/Fiery-Warrior/mm_pythonweb/blob/main/READmeSources/resume.pdf" style={{textDecoration: "none"}} target="_blank">
    <Card sx={{ display: 'flex', maxWidth: 345, minWidth: 390, minHeight: 137, '@media (max-width: 950px)': { minHeight: 150 }, '@media (max-width: 550px)': { minWidth: 355 }, '@media (max-width: 418px)': { minHeight: 135 }}}>
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
          ‣ Present, create, and grade assignments 
          <br/>
          ‣ Manage Teacher Assistants

          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
    </a>

    
  );
}