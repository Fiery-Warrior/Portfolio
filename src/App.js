import './App.css';
import Navbar from './Navbar/Navbar.js';
import About from './About/About';
import Experience from './Experience/Experience';
import Connect from './Connect/Connect';
// import Hambar from './Hambar/Hambar';
import DrawerAppBar from './Hambar/Hambar'
import MobileConnect from './Connect/MobileSize/MobileConnect'
// import HamburgerMenu from './Ham/Hambar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* <DrawerAppBar/> */}
        {/* <HamburgerMenu/> */}
        <About/>
        <Experience/>
        <Connect/>
        <MobileConnect/>
      </header>

      <footer className="footer">
        <p>Copyright © Keagan Bogart 2023</p>
    </footer>
    </div>
  );
}

export default App;
