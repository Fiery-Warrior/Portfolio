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
    <Card sx={{ display: 'flex', maxWidth: 345, minWidth: 440, maxHeight: 140}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Teacher Assistant
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize: '15px' }}>
          ‣ Presnting Labs, creating and grading assignments 
          <br/>
          ‣ Manage Teacher Assistants

          </Typography>
        </CardContent>

      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="\ta.jpg"
        alt="Me at USAA"
      />
    </Card>
  );
}
