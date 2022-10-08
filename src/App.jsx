import { useState, useEffect, createElement } from 'react'
import reactLogo from './assets/react.svg'
import netlifyLogo from './assets/netlifyLogo.svg'
import githubLogo from './assets/githubLogo.svg'
import Form from './Form'
import './App.css'
import {montar, remontar} from './ManipuladorDeEscadas'
import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'

function App() {
  let svgTimer
  const [escada, setEscada] = useState( 
    montar(
      300, //altura: altura da escada em centimetros
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
  useEffect(()=>{
    // Cria elemento
    let div = document.createElement("div")
    div.id = "svg"
    document.getElementById("app").appendChild(div)

    //----------------
    svgTimer = setTimeout(() => {
      let {altura, piso, espelho} = escada
      altura = parseInt(altura)
      piso = parseInt(piso)
      espelho = parseInt(espelho)
      console.log(escada)
      let alturaDeg = altura
      var draw = SVG().addTo('#svg').size(650, 400)
      let style = {fill: '#75A'}
      let OrigemY = 400 - parseInt(altura)
      draw.rect(2, espelho).attr(style).move(0, OrigemY-espelho)
      alturaDeg -= espelho
      let count = 0
      while (alturaDeg >= 0){
        draw.rect(piso, alturaDeg).attr(style).move(piso*count, (espelho*count)+OrigemY)
        alturaDeg -= espelho
        count ++
      }

    },200)
    
    return () => {
      // Remove elemento
      clearTimeout(svgTimer)
      document.getElementById('svg').remove()     
      //------------------
    }
  },[escada.altura, escada.piso, escada.espelho])
  

  return (
    <div className="App" id="app">
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
          APP ESCADAS Flow codeArt <b><a href='https://github.com/flou-ainan/app-escadas-codeart#app-para-projetar-escadas'>EM CONSTRUÇÃO</a></b>
        </p>
      </div>
      <Form
        altura={escada.altura}
        piso={escada.piso}
        espelho={escada.espelho}
        handleChange={handleChange} 
      />

        <span className='infos'>Num de Degraus: {escada.numDegraus}</span>
        <span className='infos'>Largura: {escada.largura} cm</span>
        <span className='infos'>Angulo: {escada.angulo.toFixed(2)} º</span>
    </div>
  )
}

export default App
