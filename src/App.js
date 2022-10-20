import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>First Experience with React</h1>
        <p>React is so cool!</p>
        <p>I can't wait to become proficient!</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
