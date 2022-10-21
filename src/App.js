import logo from './logo.svg';
import './App.css';
import Heading from './heading';
import Paragraph from './paragraph';

function App() {
  return (
    <div className="App">
        <Heading number = "first" />
        <Heading number = "second" />
        <Heading number = "third" />
        <Paragraph description = "happy" />
        <Paragraph description = "sad" />
        <Paragraph description = "funky" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
