 
  
export function montar(altura, espelho, piso){
    let escada = {
      altura:[altura],
      espelho:[espelho],
      piso:[piso],
      largura:0,
      numDegraus:0,
      angulo:0
    }
    return escada = atualizar(escada)
  }

  export function remontar(protoEscada){
    return montar(protoEscada.altura, protoEscada.espelho, protoEscada.piso)
  }

  function atualizar(escada){
    escada = atualizarNumDegraus(escada)
    escada = atualizarLargura(escada)
    escada = atualizarAngulo(escada)
    return escada
  }
  
  function atualizarNumDegraus(escada){
    let a = escada.altura 
    a = a/escada.espelho 
    escada.numDegraus = Math.ceil(a)
    return escada
  }

  function atualizarLargura(escada){
    let a = escada.altura
    a -= escada.espelho
    a = a/escada.espelho
    a = Math.ceil(a)
    escada.largura = a * escada.piso
    return escada
  }

  function atualizarAngulo(escada){ // --> docs/Angulo-de-inclinacao.md
    let TA
    let ANrad
    TA = escada.altura / escada.largura
    ANrad = Math.atan(TA)

    escada.angulo = ANrad * (180/Math.PI)
    return escada
  }