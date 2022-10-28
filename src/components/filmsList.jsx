import React, { useState, useEffect } from "react";

const FilmsList = (props) => {

    const [list, setList] = useState([]);

    const getFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films").then((res) => res.json()).then((data) => {
            setList(data)
        }).catch((err) => console.error(err))        
    }

    useEffect(() => {
        getFilms();
    }, []);

      return (
        <ul>
            {list.map((film) => <li key={film.id}>{film.title}</li>)}
        </ul>
      )
    }

  export default FilmsList;