//import logo from './logo.svg';
import grevious from '../src/grevious.png';
import './App.css';

function grievousHello() {
  const general = document.getElementById('general');
  const generalFace = document.getElementsByClassName("App-logo");
  general.style.color = 'white';
  generalFace.src = grevious;
}

function grievousGoodbye() {
  const general = document.getElementById('general');
  general.style.color = '#e61d1d';
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={grevious} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p
          className="App-link"
        >
          Hello <span id="dot">•</span> there!
        </p>
        <p onMouseOver={grievousHello} onMouseOut={grievousGoodbye} id="general">General Kenobi</p>
      </header>
    </div>
  );
}

export default App;
