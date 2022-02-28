import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website is powered by react app
        </p>
        <a
          className="App-link"
          href="https://www.cookingchanneltv.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter into the new world of cooking..
        </a>
      </header>
    </div>
  );
}

export default App;
