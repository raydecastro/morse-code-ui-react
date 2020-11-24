import logo from './logo.svg';
import './App.css';

import MorseCodePanel from "./MorseCodePanel"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MorseCodePanel />
      </header>
    </div>
  );
}

export default App;
