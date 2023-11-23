import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import './bachelors.css';

export default function Bachelors() {
  return (
    <a href="https://github.com/Fiery-Warrior/mm_pythonweb/blob/main/READmeSources/resume.pdf" style={{ textDecoration: "none" }} target="_blank">
      <Card sx={{ maxWidth: 345, minWidth: 472, minHeight: 237, '@media (max-width: 1087px)': { minWidth: 388 }, '@media (max-width: 950px)': { minWidth: 408 }, '@media (max-width: 550px)': { minWidth: 355, maxWidth: 230 }, '@media (max-width: 418px)': { minHeight: 210, minWidth: 320, maxWidth: 220 } }}>
      <div className="card">

        <CardActionArea>
          <CardContent>

                      <Typography gutterBottom variant="h5" component="div">
                        Bachelors of Cyber Security
                      </Typography>
                      <p className="school">Dallas Baptist University, 3.95 GPA</p>
                      <p className="front_description" style={{ lineHeight: "1.5", fontSize: '20px' }}>
                        Graduated with a Bachelor's degree in Cyber Security, while working as a Teaching Assistant, Tutor, Student Athlete, and serving as an English Tutor to international students.
                      </p>
                      <br/>
                      <Typography gutterBottom component="div" sx={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(3, 1fr)', 
                      gap: '2px', 
                      '@media (max-width: 550px)': { fontSize: '18px', gap: '2px' },
                      '& > p': { margin: '0', padding: '0' }
                    }}>
                      <p>#TA</p>
                      <p>#Tutor</p>
                      <p>#Student-Athlete</p>
                      <p>#Cyber-Security</p>
                      <p>#Bachelor's</p>
                      <p>#Serving</p>
                    </Typography>
                      <section className="card__content">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">

                    </div>
                    <div className="flip-card-back">
                      <p className="card__title">Relevant Courses</p>

                      <Typography gutterBottom variant="h6" component="div" sx={{ display: 'grid', gridTemplateColumns: 'repeat(1fr)', gap: '10px', '@media (max-width: 550px)': { fontSize: '12px', gap: '5px' } }}>
                          <span>‣ Information Assurance</span>
                          <span>‣ Ethical Hacking</span>
                          <span>‣ Software Security</span>
                          <span>‣ Network Security</span>
                          <span>‣ Digital Forensics</span>
                          <span>‣ Database</span>
                          <span>‣ Java </span>
                          <span>‣ Software Engineering </span>
                          <span>‣ Python </span>
                      </Typography>
                    </div>
                  </div>
                </div>
              </section>
          </CardContent>
        </CardActionArea>
    </div>

      </Card>
    </a>
  );
}