import React from 'react'
import LabelQuestion from './LabelQuestion'


function Assertion(props) {
    const etat = (fonct)=>{
            fonct(props.etat);
    }
  return (
    <div>
          {props.question.map((assertion, index) => (
                   <LabelQuestion assertion={assertion} index={index} value={props.value}/>               
             ))} 
    </div>
  )
}
export default Assertion