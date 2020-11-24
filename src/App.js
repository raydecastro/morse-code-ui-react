import morsecodelogo from './morse_code.jpg';
import './App.css';

import MorseCodePanel from "./MorseCodePanel"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={morsecodelogo} className="App-logo" alt="logo" />
        <MorseCodePanel />
      </header>
    </div>
  );
}

export default App;
