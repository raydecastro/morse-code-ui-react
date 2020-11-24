import logo from './logo.svg';
import './App.css';

import MorseCodePanel from "./MorseCodePanel"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  
        <MorseCodePanel />

        <a
          className="App-link"
          href="https://github.com/raydecastro/morse-code-ui-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          morsey!
        </a>
      </header>
    </div>
  );
}

export default App;
