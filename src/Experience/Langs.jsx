import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Langs() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 985 }}>
      <CardActionArea>
        <CardContent>
            {/** the repeat() function creates 4 columns with equal widths (and the 1fr means one fraction of the available space is used) */}
          <Typography gutterBottom variant="h5" component="div" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
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
