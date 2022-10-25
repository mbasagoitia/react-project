import React, { Component } from "react";

class FilmsList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            list: [],
        }
    }

    getFilms () {
        fetch("https://ghibliapi.herokuapp.com/films").then((res) => res.json()).then((data) => {
            this.setState({
                list: data,
            })
        }).catch((err) => console.error(err))        
    }

    componentDidMount() {
        this.getFilms();
    }

    render() {
      return <ul>{this.state.list.map((film) => {
        return <li key={film.id}>{film.title}</li>
      })}</ul>;
    }
  }

  export default FilmsList;