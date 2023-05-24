import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', maxWidth: 345, minWidth: 440, maxHeight: 150 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            USAA Summer 
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize: '15px' }}>
          ‣ Summer 2022 worked as Full Stack Software Engineer
          <br/>
          ‣ Summer 2023 will work as an AWS Cloud Developer
          </Typography>
        </CardContent>

      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="\usaa.jpg"
        alt="Me at USAA"
      />
    </Card>
  );
}