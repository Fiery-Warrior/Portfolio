import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import './bachelors.css';
import CollegeImages from './Images';

export default function Bachelors() {
  return (
    // <a href="https://github.com/Fiery-Warrior/mm_pythonweb/blob/main/READmeSources/resume.pdf" style={{ textDecoration: "none" }} target="_blank">
       <Card sx={{ display: 'flex', maxWidth: 345, minWidth: 472, minHeight: 237, '@media (max-width: 1087px)': { minWidth: 388 }, '@media (max-width: 950px)': { minWidth: 408 }, '@media (max-width: 550px)': { minWidth: 355, maxWidth:230 }, '@media (max-width: 418px)': { minHeight: 210, minWidth: 320, maxWidth:220 } }}>
      <div className="card">

        <CardActionArea>
          <CardContent>

                      <Typography gutterBottom variant="h5" component="div">
                      Accomplishments
                      </Typography>
                      <p className="school">Over the past few years I've had some fantastic oportunites to be more involved in Academia, work force, and be the opening speaker at a Symposium</p>

                      <Typography gutterBottom component="div" sx={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(2, 1fr)', 
                      gap: '25px', 
                      '@media (max-width: 550px)': { fontSize: '18px'},
                      '& > p': { margin: '0', padding: '0' }
                    }}>
                      <p style={{fontSize: '23px'}}>Presentations</p>
                      <p style={{fontSize: '23px'}}>Awards</p>
                      <p>‣ Opening Speaker</p>
                      <p>‣ DBU CS Honor Award</p>
                      <p>‣ Student-Athlete</p>
                      <p>‣ DBU CS Scholarship</p>
                      <p>‣ MSITM Ambassador</p>
                      <p>‣ President's Honor Award</p>
                    </Typography>

                      <section className="card__content">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">

                    </div>
                    <div className="flip-card-back">
                      <p className="card__title">A Glimps</p>

                      <CollegeImages/>

                    </div>
                  </div>
                </div>
              </section>
          </CardContent>
        </CardActionArea>
    </div>

      </Card>
    // </a>
  );
}