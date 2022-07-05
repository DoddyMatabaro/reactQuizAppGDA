import React from 'react'
import '../styles/QuestionInfos.css'

export default function QuestionInfos(props) {
  return (
    <div className='quiz-infos'>
        <h6 className='quiz-index'>Question {props.index} / {props.max}</h6>
        <h6 className='quiz-timer'>{props.timer}</h6>
    </div>
  )
}
