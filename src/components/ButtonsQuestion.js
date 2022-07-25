import React from 'react'
import '../styles/ButtonsQuestion.css' 

function ButtonsQuestion(props) {
    
  return (
    <div>
        <button onClick={(()=>props.action[1]())}>Quitter</button>
        <button onClick={(()=>{
            props.action[0]();
            })} desabled={true}>Suivant</button>
    </div>
  )
}

export default ButtonsQuestion