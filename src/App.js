import './App.css';
import Navbar from './Navbar/Navbar.js';
import About from './About/About';
import Experience from './Experience/Experience';
import Connect from './Connect/Connect';
// import Hambar from './Hambar/Hambar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* <Hambar/> */}
        <About/>
        <Experience/>
        <Connect/>
      </header>

      <footer className="footer">
        <p>Copyright © Keagan Bogart 2023</p>
    </footer>
    </div>
  );
}

export default App;
