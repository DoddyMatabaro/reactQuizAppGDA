import React, { useState } from 'react'
import '../styles/LabelQuestion.css'

function LabelQuestion(props) {
 
  return (
    <div className="column">
        <input className='input-radio' 
             name="assertion" type="radio" 
             value={props.index}  
             onChange={(e)=>{props.value(e.target.value)}}
        />
        <label className='label-radio'>{props.assertion}</label> 
    </div>
  )
}

export default LabelQuestion