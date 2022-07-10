import '../styles/App.css';
import Form from './Form';
import Header from './Header';
import Question from './Question';
import { useState } from 'react'
import Score from './Score'

function App() {

  const [isValidate, setIsValidate] = useState(false);
  const [formValues, setFormValue] = useState(0);
  const [identity, setIdentity] = useState([]);
  const takeFormValue = ((score)=>{
    setFormValue(score);
  })
  const takeIdentity = (name, mail)=>{
      setIdentity(arr=>[...arr, name,mail]);
  }
  const testValidation = (etat)=>{
    setIsValidate(etat);
  }
  const [isOver, setIsOver] = useState(false);
  const testIsOver = (etat)=>{
    setIsOver(etat);
  }
  return (
    <div className="App">
          {!isValidate && 
          <div>
           <Header /> 
           <Form action={testValidation} infos={takeIdentity} /> 
           </div>}
          {!isOver&&(isValidate && <Question action={testIsOver} form={takeFormValue} over={testIsOver} /> )}

          {isOver && <Score value={[formValues]} auth={identity}/>}
          
    </div>
  );
}
export default App;
