// import React, { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import './App.css';
// import Navbar from './Navbar/Navbar.js';
// import Landing from './Landing/Landing';
// import About from './About/About';
// import Experience from './Experience/Experience';
// import Connect from './Connect/Connect';
// import HamburgerMenu from './Ham/Hambar'
// import MobileConnect from './Connect/MobileSize/MobileConnect'
// import NavbarSection from './navi';
// import NavbarSectionM from './Ham/NaviM/navim';
// import Education from './Education/Education';

// function App() {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //   });
  // }, []);

//   return (
//     <div className="App" data-scroll-container>
//       <header className="App-header" data-scroll data-scroll-speed="1">
//         <NavbarSection/>
//         <Landing/>
//         <About/>
//         <Education/>
//         <Experience/>
//         <MobileConnect/>
//         <section className="mobile-bar">
//           <NavbarSectionM/>
//         </section>
//       </header>
//       <footer className="footer">
//         <p>Copyright © Keagan Bogart 2023</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './Navbar/Navbar.js';
import Landing from './Landing/Landing';
import About from './About/About';
import Experience from './Experience/Experience';
import Connect from './Connect/Connect';
import HamburgerMenu from './Ham/Hambar'
import MobileConnect from './Connect/MobileSize/MobileConnect'
import NavbarSection from './navi';
import NavbarSectionM from './Ham/NaviM/navim';
import Ed from './Ed/Ed.jsx'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar/> */} {/**Original Nav top */}

        <NavbarSection/> {/**Side Nav 2.0 */}
        
        {/* <HamburgerMenu/> for mobile*/}
         
        <Landing/>
        <About/>
        <Ed/>

        <Experience/>
        {/* <Connect/> */}
        <MobileConnect/>

<section className="mobile-bar">
<NavbarSectionM/>

</section>


      </header>

      <footer className="footer">

        <p>Copyright © Keagan Bogart 2023</p>
    </footer>
    </div>
  );
}



export default App;