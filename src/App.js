import morsecodelogo from './morseCodePanel/morse_code.jpg';
import './App.css';

import MorseCodePanel from "./morseCodePanel/MorseCodePanel"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={morsecodelogo} className="App-logo rounded" alt="logo" />
      </header>
      <MorseCodePanel />
    </div>
  );
}

export default App;
