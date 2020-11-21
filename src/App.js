import logo from './logo.svg';
import './App.css';

import MorseCodeGenerator from 'morse-code/source/morsecodegenerator';

function App() {

  let mcg = new MorseCodeGenerator();
  let code = mcg.generate("love");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{code}</code>
        </p>
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
