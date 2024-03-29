import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import './experience.css'

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <a href = "https://www.linkedin.com/pulse/my-summer-internship-experience-usaa-keagan-bogart?trk=public_profile_article_view" style={{textDecoration: "none"}} target="_blank">
    <Card sx={{ display: 'flex', maxWidth: 345, minWidth: 390, maxHeight: 150, '@media (max-width: 550px)': { minWidth: 355 }, '@media (max-width: 418px)': { minHeight: 210, minWidth: 320, maxWidth:230 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" className="title-usaa">
            USAA Intern 
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize: '13px', '@media (max-width: 450px)': { fontSize: '12px' } }}>
          ‣ Summer 2022 worked as Full Stack Engineer
          <br/>
          ‣ Summer 2023 working as an AWS Cloud Developer
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, '@media (max-width: 450px)': { width: 160 } }}
        image="\group_usaa.avif"
        alt="Me at USAA"
      />
    </Card>
</a>
  );
}
