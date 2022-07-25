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
    useEffect(() => {
        const interval = setInterval(() => {
          setProgressValue(progressValue => progressValue - 1);
        }, 1000);     
        return () => clearInterval(interval);
      }, []);
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
          setProgressValue(60);
      })
      const quit = (()=>{
        setComp(base.length );
      })
      const takeValue = (val)=>{(setValue(val))}   
      let calcScore = ((elts)=>{
        let i=0;
        //comparing  selected assertions and the corrects assertions in the Base questions and return un score 
        elts.map((elt, index)=>( elt=== `${base[index].reponse}`? i++: null))
        return i
      })

      if(comp === base.length){
        props.over(true);
        props.form(calcScore(selectAnswer))       
     }
    return (
        <div>  
            { comp < base.length && (<div>
             <QuestionHead value={base[comp].titre} />
            <QuestionInfos index={comp+1} max={base.length} timer={progressValue} />
            <ProgressBar value={progressValue} />
            <Assertion question={base[comp].reponses} value={takeValue} />
            <ButtonsQuestion action={[handler, quit]} />
            {  progressValue >= 0 ? null: handler() }
            </div>) }            
        </div>
    );
}

export default Question;
