import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 472, minHeight: 237}}>
      <a href = "https://www.moriartymatrix.com/" style={{textDecoration: "none"}} target="_blank">
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Recent Project"
        height="80"
        image="\MoriartyLogo.png"
      />
        <CardContent>
        <Typography variant="body2" color="text.secondary" fontSize={15}>
            Educational Offensive Cyber Security Framework that guides the user through Lockhead Martin's Cyber Kill Chain
          </Typography>       
          <br/>   
          <Typography variant="body2" color="text.secondary" fontSize={15}>
          Creates awareness of the hacking-lifecycle so it better prepares students, employees, cyber-enthusiasts, and security testers.          </Typography>
        </CardContent>
      </CardActionArea>
      </a>

    </Card>
  );
}