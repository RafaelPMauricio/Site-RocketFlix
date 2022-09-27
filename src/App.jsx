import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import siteLogo from './assets/shuffle.svg'
import imgMenor from './assets/favico/favicon-32x32.png'

import { Movie } from './components/Movie/Movie'

import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.jsx'

function App() {

  const [buttonPress, setButtonPress] = useState(false)
  const [page, setPage] = useState(1)
  const [movie, setMovie] = useState("")
  const [movieId, setMovieId] = useState(0)

  const changePageRandom = () => {
    setPage(Math.floor(Math.random() * 500 + 1))
  }

  const changeMovieRandom = () => {
    setMovieId(Math.floor(Math.random() * 20))
    setButtonPress(true)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}top_rated?${API_KEY}&${language}&page=${page}`).then(response => response.data).then(data => setMovie(data.results[movieId])).catch(error => {
      console.log(error)
    })
  }, [movieId])

  return (
    <div id='container'>
      <img src={siteLogo} alt="setas para indicar aleatoriedade" id='logo' />
      <h1>Não sabe o que assistir?</h1>
      <Movie movie={movie} showMovie={buttonPress}/>
      <button onClick={() => { changePageRandom(), changeMovieRandom() }} ><img src={imgMenor} alt="setas para indicar aleatoriedade"/>Encontrar filme</button>
      <p>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
    </div>
  )
}

export default App
