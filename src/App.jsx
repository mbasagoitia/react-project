import React, { useState, useEffect } from 'react';
import './App.css';
import FilmsList from './components/filmsList';

const App = (props) => {

  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setList([...list, text]);
    setText("");
  }

    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit = {onSubmit}>
          <input type="text" value = {text} onChange = {(event) => {
            setText(event.target.value)
          }}/>
          <button type="submit">Add</button>
        </form>
        <ul>{list.map((item, index) => {
          return <li key = {index}>{item}</li>
        })}</ul>
        <FilmsList />
      </div>
    );
  }


export default App;
