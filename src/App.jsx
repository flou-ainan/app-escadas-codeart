import { useState } from 'react'
import reactLogo from './assets/react.svg'
import netlifyLogo from './assets/netlifyLogo.svg'
import githubLogo from './assets/githubLogo.svg'
import Form from './Form'
import './App.css'
import {montar, remontar} from './ManipuladorDeEscadas'

function App() {
  const [escada, setEscada] = useState( 
    montar(
      280, //altura: altura da escada em centimetros
      16, // espelho: altura do degrau em centimetros
      27 //  piso: largura do degrau em centimetros
    )
  )
  
  function handleChange(event) {
    const {id, value} = event.target
    setEscada(prevEscada => {
        return remontar(
          {
            ...prevEscada,
            [id]:value
          }
          )
    })    
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.github.com/" target="_blank">
          <img src={githubLogo} className="logo github" alt="Github logo" />
        </a>
        <a href="https://www.netlify.com/" target="_blank">
          <img src={netlifyLogo} className="logo netlify" alt="Netlify logo" />
        </a>
      </div>
      <h2>Vite + React + Github + Netlify</h2>
      <div className="card">
        <p>
          APP ESCADAS Flow codeArt <b>EM CONSTRUÇÃO</b>
        </p>
      </div>
      <Form
        altura={escada.altura}
        piso={escada.piso}
        espelho={escada.espelho}
        handleChange={handleChange} />
        <p>Num de Degraus: {escada.numDegraus}</p>
        <p>Largura: {escada.largura} cm</p>
        <p>Angulo: {escada.angulo.toFixed(2)} º</p>
    </div>
  )
}

export default App
