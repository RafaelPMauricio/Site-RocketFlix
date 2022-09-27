import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

//Imagens usadas no botão, favicon e no topo do site
import siteLogo from './assets/shuffle.svg'
import imgMenor from './assets/favico/favicon-32x32.png'

//Componente para apresentar o filme
import { Movie } from './components/Movie/Movie'

//Variáveis com as urls da api
import {
  API_KEY, BASE_URL,
  language,
} from './api.jsx'

function App() {

  const [buttonPress, setButtonPress] = useState(false)//Verificar se o botão foi apertado para mostrar o filme
  const [page, setPage] = useState(1)//Manter controle da página à pesquisar o filme
  const [movieId, setMovieId] = useState(0)//Manter controle do filme à pesquisar na página
  const [movie, setMovie] = useState("")//Manter controle do filme que será passado para o componente

  //Mudar a página de pesquisa do filme aleatoriamente
  const changePageRandom = () => {
    setPage(Math.floor(Math.random() * 500 + 1))
  }

  //Mudar o filme pego na página aleatoriamente
  const changeMovieRandom = () => {
    setMovieId(Math.floor(Math.random() * 20))
    setButtonPress(true)
  }

  //Mudar o filme com a página e o número do filme na API
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
      <button onClick={/* Mudar tanto a página quanto o número do filme */() => { changePageRandom(), changeMovieRandom() }} ><img src={imgMenor} alt="setas para indicar aleatoriedade"/>Encontrar filme</button>
      <p>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
    </div>
  )
}

export default App
