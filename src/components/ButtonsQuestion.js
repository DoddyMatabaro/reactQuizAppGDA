import React from 'react'
import '../styles/ButtonsQuestion.css'

function ButtonsQuestion(props) {
  return (
    <div>
        <button>Quitter</button>
        <button onClick={(()=>props.action())}>Suivant</button>
    </div>
  )
}

export default ButtonsQuestion