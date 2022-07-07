import React from 'react'
import LabelQuestion from './LabelQuestion'


function Assertion(props) {
   
  return (
    <div>
          {props.question.map((assertion) => (
                <div >
                   <LabelQuestion value='1' assertion={assertion}/>
                </div>
             ))} 
             
    </div>
  )
}
export default Assertion