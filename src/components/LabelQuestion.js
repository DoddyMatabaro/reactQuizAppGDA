import React, { useState } from 'react'
import '../styles/LabelQuestion.css'

function LabelQuestion(props) {
    // const [checked, setChecked] = useState(false);
    // props.etat(useState)
    // console.log(checked);
  return (
    <div className="column">
        <input className='input-radio' 
             name="assertion" type="radio" 
             value={props.index}  
            //  onClick={(e) => setChecked(true)}
             onChange={(e)=>{
                props.value(e.target.value)
                // setChecked(props.etat);
            }}
        />
        <label className='label-radio'>{props.assertion}</label> 
    </div>
  )
}

export default LabelQuestion