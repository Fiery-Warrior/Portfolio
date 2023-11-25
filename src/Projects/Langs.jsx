// // Langs.jsx
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';
// import './basic.css';

// const styles = {
//   card: {
//     maxWidth: 335,
//     minWidth: 1040,
//     minHeight: 230,
//     maxHeight: 230,
//     '@media (max-width: 1087px)': { minWidth: 902 },
//     '@media (max-width: 950px)': { minWidth: 877 },
//     '@media (max-width: 550px)': { minWidth: 350 },
//     '@media (max-width: 418px)': { minWidth: 320, maxWidth: 220 },
//     position: 'relative',
//   },
//   cardMedia: {
//     height: '100%',
//     width: '100%',
//     filter: 'blur(0px)',
//     transition: 'filter 0.2s ease-in-out',
//   },
//   cardMediaHover: {
//     filter: 'blur(5px)',
//   },
// };

// export default function Langs() {
//   return (
//     <>
//       <Card sx={styles.card} className='card-test'>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             image="\static\awards\ta.jpg"
//             alt="Me at USAA"
//             className='card-media'
//             onMouseEnter={() => {
//               const cardMedia = document.querySelector('.card-media');
//               if (cardMedia) {
//                 cardMedia.style.filter = 'blur(5px)';
//               }
//               const titleTest = document.querySelector('.title-test');
//               if (titleTest) {
//                 titleTest.style.display = 'block';
//               }
//             }}
//             onMouseLeave={() => {
//               const cardMedia = document.querySelector('.card-media');
//               if (cardMedia) {
//                 cardMedia.style.filter = 'blur(0px)';
//               }
//               const titleTest = document.querySelector('.title-test');
//               if (titleTest) {
//                 titleTest.style.display = 'none';
//               }
//             }}
//           />
  
//         </CardActionArea>
//       </Card>
//     </>
//   );
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import './basic.css';

const styles = {
  card: {
    maxWidth: 335,
    minWidth: 1040,
    minHeight: 230,
    maxHeight: 230,
    '@media (max-width: 1087px)': {
      minWidth: 902,
    },
    '@media (max-width: 950px)': {
      minWidth: 877,
    },
    '@media (max-width: 550px)': {
      minWidth: 350,
    },
    '@media (max-width: 418px)': {
      minWidth: 320,
      maxWidth: 220,
    },
    position: 'relative',
  },
  cardMedia: {
    height: '100%',
    width: '100%',
    filter: 'blur(0px)',
    transition: 'filter 0.2s ease-in-out',
  },
  cardMediaHover: {
    filter: 'blur(5px)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    zIndex: 1, // Set z-index to a higher value than the image card
  },
  overlayText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2, // Set z-index to an even higher value than the overlay background
    color: 'white',
    fontSize: '24px',
  },
};
 

export default function Langs({ children }) {
  return (
    <>
      <Card sx={styles.card} className='over-card'>
        <CardActionArea
          onMouseEnter={() => {
            const cardMedia = document.querySelector('.card-media');
            if (cardMedia) {
              cardMedia.style.filter = 'blur(5px)';
            }
            const overlay = document.querySelector('.overlay');
            if (overlay) {
              overlay.style.display = 'block';
            }
            const overlayText = document.querySelector('.overlay-text');
            if (overlayText) {
              overlayText.style.display = 'block';
            }
          }}
          onMouseLeave={() => {
            const cardMedia = document.querySelector('.card-media');
            if (cardMedia) {
              cardMedia.style.filter = 'blur(0px)';
            }
            const overlay = document.querySelector('.overlay');
            if (overlay) {
              overlay.style.display = 'none';
            }
            const overlayText = document.querySelector('.overlay-text');
            if (overlayText) {
              overlayText.style.display = 'none';
            }
          }}
        >
          <CardMedia
            component="img"
            image="\static\awards\MoriartyLogo.png"
            alt="Me at USAA"
            className="card-media"
            sx={styles.cardMedia}
          />
        </CardActionArea>
      </Card>

    </>
  );
}
