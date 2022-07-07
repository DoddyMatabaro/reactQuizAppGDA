import React from 'react'
import LabelQuestion from './LabelQuestion'


function Assertion(props) {
   
  return (
    <div>
          {props.question.map((assertion, index) => (
                <div key={`key${index}`}>
                   <LabelQuestion assertion={assertion} index={index} value={props.value} />
                </div>
             ))} 
    </div>
  )
}
export default Assertion