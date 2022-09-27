import React from 'react';
import axios from 'axios'

import { IMG_URL } from '../../api.jsx'
import code from '../../assets/code.jpg'

export function Movie({movie, showMovie = true}) {
  return (
    <div>
      {showMovie && <img src={ IMG_URL + movie.poster_path } alt="Capa do filme" />}
      <div>
        <h2>{showMovie && movie.title}</h2>
        <p>{showMovie && movie.overview}</p>
      </div>
    </div>
  );
}