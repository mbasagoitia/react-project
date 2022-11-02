import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterFilmsByDirector, getListOf, getFilmStats } from "../helpers/film.helpers";

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

    const directors = getListOf(list, "director");
    const filmsByDirector = filterFilmsByDirector(list, searchDirector);

    const { avg_score, total, latest } = getFilmStats(filmsByDirector);
    

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
        <div>
            <div>
                <span># Of Films: </span>
                <span>{total}</span>
            </div>
            <div>
                <span>Average Rating: </span>
                <span>{avg_score.toFixed(2)}</span>
            </div>
            <div>
                <span>Latest Film: </span>
                <span>{latest}</span>
            </div>
        </div>
        <ul>
            {filmsByDirector.map((film) => <li key={film.id}><Link path={`film/${film.id}`}>{film.title}</Link></li>)}
        </ul>
        </>
      )
    }

  export default FilmsPage;