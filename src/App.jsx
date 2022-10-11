import { useState, useEffect, createElement } from 'react'
import reactLogo from './assets/react.svg'
import netlifyLogo from './assets/netlifyLogo.svg'
import githubLogo from './assets/githubLogo.svg'
import svgjsLogo from './assets/svgjsLogo.svg'
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
    // Remove Placeholder

    // ------------
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


      let degQuant = Math.ceil(altura/espelho)
      let largura = (degQuant -1) * piso

      let quadro = {x:500, y:300}

      let aux = quadro.y / altura
      let aux2 = quadro.x / largura

      aux = aux > aux2 ? aux2 : aux


     let alturaDeg = altura * aux
      espelho = espelho * aux
      piso = piso * aux

     
      
      
      var draw = SVG().addTo('#svg').size(quadro.x, quadro.y)
      let style = {fill: '#75A'}
      let OrigemY = espelho
      draw.rect(quadro.x, quadro.y).attr({fill: '#fff'})
      draw.rect(2, espelho).attr(style).move(0, OrigemY-espelho)
      alturaDeg -= espelho
      let count = 0
      while (alturaDeg >= 0){
        draw.rect(piso, alturaDeg).attr(style).move(piso*count, (espelho*count)+OrigemY).stroke({ color: '#75a', opacity: 1, width: 2 })
        alturaDeg -= espelho
        count ++
      }

    },200)
    
    return () => {
      // Remove elemento
      clearTimeout(svgTimer)
      document.getElementById('svg').remove()     
      //------------------
      //Insere Placeholder

      //-----------------
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
        <a href="https://svgjs.dev/docs/3.0/" target="_blank">
          <img src={svgjsLogo} className="logo svgjs" alt="SVG.js logo" />
        </a> 
        <a href="https://www.github.com/" target="_blank">
          <img src={githubLogo} className="logo github" alt="Github logo" />
        </a>
        <a href="https://www.netlify.com/" target="_blank">
          <img src={netlifyLogo} className="logo netlify" alt="Netlify logo" />
        </a>
      </div>
      <h4>Vite + React + SVG.js + Github + Netlify</h4>
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
        <br /><br /><br />
    </div>
  )
}

export default App
