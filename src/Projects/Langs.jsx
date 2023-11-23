import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Langs() {
  return (
    <Card sx={{ maxWidth: 335, minWidth: 1040, minHeight: 230, '@media (max-width: 1087px)': { minWidth: 902 }, '@media (max-width: 950px)': { minWidth: 877 }, '@media (max-width: 550px)': { minWidth: 350 }, '@media (max-width: 418px)': { minWidth: 320, maxWidth:220 } }}>
    {/* <Card sx={{ maxWidth: 345, minWidth: 472, minHeight: 237, '@media (max-width: 1087px)': { minWidth: 388 }, '@media (max-width: 950px)': { minWidth: 408 }, '@media (max-width: 550px)': { minWidth: 355, maxWidth:230 }, '@media (max-width: 418px)': { minHeight: 210, minWidth: 320, maxWidth:220 } }}> */}
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', '@media (max-width: 550px)': { fontSize: '13px', gap: '5px' } }}>
            <span>‣ React.js</span>
            <span>‣ Django</span>
            <span>‣ AWS</span>
            <span>‣ Python</span>
            
            <span>‣ Terraform</span>
            <span>‣ Java </span>
            <span>‣ HTML </span>
            <span>‣ CSS </span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
