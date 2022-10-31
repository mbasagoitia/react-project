import React, { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";

const FilmsPage = (props) => {

    const [list, setList] = useState([]);
    const [searchDirector, setSearchDirector] = useState("all");

    const getFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films").then((res) => res.json()).then((data) => {
            setList(data)
        }).catch((err) => console.error(err))        
    }

    useEffect(() => {
        getFilms();
    }, []);

    const filmsByDirector = filterFilmsByDirector(list, searchDirector);
    const directors = getListOf(list, "director");

      return (
        <>
        <h1>Studio Ghibli Films</h1>
        <form>
            <div className="form-group">
                <label htmlFor="searchDirector">Search Director</label>
                <select name="searchDirector" id="searchDirector" value={searchDirector} onChange={(e) => setSearchDirector(e.target.value)}>
                    <option value="all">All</option>
                    {directors.map((director, idx) => <option key={director+idx} value={director}>{director}</option>)}
                </select>
            </div>
        </form>
        <ul>
            {filmsByDirector.map((film) => <li key={film.id}>{film.title}</li>)}
        </ul>
        </>
      )
    }

  export default FilmsPage;