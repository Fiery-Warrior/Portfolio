// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function ActionAreaCard() {
//   return (
//     <Card sx={{ maxWidth: 345, minWidth: 472, minHeight: 237}}>
//       <a href = "https://www.moriartymatrix.com/" style={{textDecoration: "none"}} target="_blank">
//     <CardActionArea>
//       <CardMedia
//         component="img"
//         alt="Recent Project"
//         height="80"
//         image="\MoriartyLogo.png"
//       />
//         <CardContent>
//         <Typography variant="body2" color="text.secondary" fontSize={15}>
//             Educational Offensive Cyber Security Framework that guides the user through Lockhead Martin's Cyber Kill Chain
//           </Typography>       
//           <br/>   
//           <Typography variant="body2" color="text.secondary" fontSize={15}>
//           Creates awareness of the hacking-lifecycle so it better prepares students, employees, cyber-enthusiasts, and security testers.          </Typography>
//         </CardContent>
//       </CardActionArea>
//       </a>

//     </Card>
//   );
// }



import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 472, minHeight: 237, '@media (max-width: 1087px)': { minWidth: 388 }, '@media (max-width: 950px)': { minWidth: 408 }, '@media (max-width: 550px)': { minWidth: 355, minHeight: 200 } }}>
      <a href="https://www.moriartymatrix.com/" style={{textDecoration: "none"}} target="_blank">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Recent Project"
            height="65"
            image="\MoriartyLogo.png"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '15px', '@media (max-width: 768px)': { fontSize: '12px' } }}>
              Educational Offensive Cyber Security Framework that guides the user through Lockhead Martin's Cyber Kill Chain
            </Typography>
            <br/>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '15px', '@media (max-width: 768px)': { fontSize: '12px' } }}>
              Creates awareness of the hacking-lifecycle so it better prepares students, employees, cyber-enthusiasts, and security testers.
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}
