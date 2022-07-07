import React from 'react'
import '../styles/LabelQuestion.css'

function LabelQuestion(props) {
  return (
    <div className="column">
        <input className='input-radio' type="radio" value={props.index}  />
        <label className='label-radio'>{props.assertion}</label> 
    </div>
  )
}

export default LabelQuestion