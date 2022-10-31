import React, { useState } from 'react';

const HomePage = (props) => {

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
          <input type="text" name="listItem" id="listItem" value = {text} onChange = {(event) => {
            setText(event.target.value)
          }}/>
          <button type="submit">Add</button>
        </form>
        <ul>{list.map((item, index) => {
          return <li key = {index}>{item}</li>
        })}</ul>
      </div>
    );
  }


export default HomePage;
