import React, { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { HomePage, FilmsPage, SingleFilmPage } from './pages';

const App = (props) => {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/films">Films</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="film/:id" element={SingleFilmPage}></Route>
        </Routes>
      </BrowserRouter>
    );
  }


export default App;
