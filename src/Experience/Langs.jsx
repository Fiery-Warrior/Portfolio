import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Langs() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 985, '@media (max-width: 1087px)': { minWidth: 902 }, '@media (max-width: 950px)': { minWidth: 877 }, '@media (max-width: 550px)': { minWidth: 355 } }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', '@media (max-width: 550px)': { fontSize: '1rem', gap: '5px' } }}>
            <span>‣ React.js</span>
            <span>‣ Django</span>
            <span>‣ AWS</span>
            <span>‣ Python</span>
            
            <span>‣ VMware</span>
            <span>‣ Linux</span>
            <span>‣ C++</span>
            <span>‣ Bash</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
