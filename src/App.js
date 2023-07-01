import './App.css';
import Navbar from './Navbar/Navbar.js';
import About from './About/About';
import Experience from './Experience/Experience';
import Connect from './Connect/Connect';
import HamburgerMenu from './Ham/Hambar'
import MobileConnect from './Connect/MobileSize/MobileConnect'
import NavbarSection from './navi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar/> */} {/**Original Nav top */}

        <NavbarSection/> {/**Side Nav 2.0 */}
        
        {/* For mobile */}
        {/* <HamburgerMenu/>*/} 

        <About/>
        {/* <Experience/> */}
        {/* <Connect/> */}
        <MobileConnect/>
      </header>

      <footer className="footer">
        <p>Copyright © Keagan Bogart 2023</p>
    </footer>
    </div>
  );
}

export default App;
