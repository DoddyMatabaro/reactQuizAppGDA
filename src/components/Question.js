import React, { useState, useEffect } from 'react';
import QuestionHead from './QuestionHead';
import '../styles/Question.css';
import { base } from '../datas/base';
import QuestionInfos from './QuestionInfos';
import ProgressBar from './ProgressBar';
import Assertion from './Assertion';
import ButtonsQuestion from './ButtonsQuestion';

const Question = () => {
    const [progressValue, setProgressValue] = useState(60);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setProgressValue(progressValue => progressValue - 1);
    //       // progressValue === 0 ? console.log("c'est fait") : console.log("c'est une erreur")
    //     }, 1000);
    //     return () => clearInterval(interval);
    //   }, []);
      const [comp, setComp] = useState(0);
      const handler = (()=>{
          setComp(comp + 1);
      })
     
    return (
        <div>  
            <QuestionHead value={base[comp].titre} />
            <QuestionInfos index={comp+1} max={base.length} timer={progressValue}/>
            {/* <ProgressBar value={progressValue} /> */}
            <Assertion question={base[comp].reponses}/>
            <ButtonsQuestion action={handler} />
            {console.log(comp)}
            
        </div>
    );
}

export default Question;
