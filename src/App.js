import './App.css';
import Navbar from './Navbar/Navbar.js';
import About from './About/About';
import Experience from './Experience/Experience';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <About/>
        <Experience/>
      </header>

      <footer className="footer">
        <p>Copyright © Keagan Bogart 2023</p>
    </footer>
    </div>
  );
}

export default App;
