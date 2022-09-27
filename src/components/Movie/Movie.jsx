import React from 'react';

import { IMG_URL } from '../../api.jsx'

import './styles.css'

//Carrega as informações do filme
export function Movie({movie, showMovie = true}) {
  return (
    <div id='movieContainer'>
      {showMovie && <img src={ IMG_URL + movie.poster_path } alt="Capa do filme" id='poster'/>}
      <div>
        <h2>{showMovie && movie.title}</h2>
        <p>{showMovie && movie.overview}</p>
      </div>
    </div>
  );
}