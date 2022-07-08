import '../styles/App.css';
import Form from './Form';
import Header from './Header';
import Question from './Question';
import { useState } from 'react'
import Score from './Score'

function App() {

  const [isValidate, setIsValidate] = useState(false);
  const [formValues, setFormValue] = useState([]);
  const takeFormValue = ((score)=>{
    setFormValue( arr => [...arr, score]);
  })

  const testValidation = (etat)=>{
    setIsValidate(etat);
  }
  const [isOver, setIsOver] = useState(false);
  const testIsOver = (etat)=>{
    setIsOver(etat);
  }
  console.log(isOver);
  return (
    <div className="App">
          {!isValidate && 
          <div>
           <Header /> 
           <Form action={testValidation} /> 
           </div>}
          {isValidate && <Question action={testIsOver} form={takeFormValue} over={testIsOver}/> }
          
          {isOver && <Score />}
          
    </div>
  );
}

export default App;
