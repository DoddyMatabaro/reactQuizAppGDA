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
    useEffect(() => {
        const interval = setInterval(() => {
          setProgressValue(progressValue => progressValue - 1);
          progressValue === 0 ? console.log("c'est fait") : console.log("c'est une erreur")
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    return (
        <div>  
            <QuestionHead value={base[0].titre} />
            <QuestionInfos index='1' max={base.length} timer={progressValue}/>
            <ProgressBar value={progressValue} />
            <Assertion />
            <ButtonsQuestion />
        </div>
    );
}

export default Question;
