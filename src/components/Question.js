import React, { useState, useEffect } from 'react';
import QuestionHead from './QuestionHead';
import '../styles/Question.css';
import { base } from '../datas/base';
import QuestionInfos from './QuestionInfos';
import ProgressBar from './ProgressBar';
import Assertion from './Assertion';
import ButtonsQuestion from './ButtonsQuestion';

const Question = (props) => {
    const [progressValue, setProgressValue] = useState(60);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setProgressValue(progressValue => progressValue - 1);
    //       // progressValue === 0 ? console.log("c'est fait") : console.log("c'est une erreur")
    //     }, 1000);
    //     return () => clearInterval(interval);
    //   }, []);
      const [comp, setComp] = useState(0);
      const [score, setScore] = useState(0);
      const [selectAnswer, setSelectAnswer] = useState([]);
      const [value, setValue] = useState('');
      const takeSelectedAnswer = (answer)=>{
          setSelectAnswer( arr => [...arr, answer]);
      }
      const handler = (()=>{
        if(value !==''){takeSelectedAnswer(value)};
          setComp(comp + 1);
      })
      const takeValue = (val)=>{(setValue(val))}   
      console.log("la valeur est " +selectAnswer);
      let calcScore = ((selectAnswer)=>{ //comparing  selected assertions and the corrects assertions in the Base questions and return un score 
        for(let i=0; i<selectAnswer.length;i++){
            if(selectAnswer[i] == base[i].reponse){
                setScore(score++); 
            }
        }
      })
      
      if(comp === base.length - 1){
        props.over(true);
       }
    return (
        <div>  
            
            <QuestionHead value={base[comp].titre} />

            <QuestionInfos index={comp+1} max={base.length} timer={progressValue}/>
            {/* <ProgressBar value={progressValue} /> */}
            <Assertion question={base[comp].reponses} value={takeValue} />
            <ButtonsQuestion action={handler} />
            
        </div>
    );
}

export default Question;
