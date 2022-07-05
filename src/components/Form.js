import React from 'react'
import '../styles/Form.css'
import {useState} from 'react';

export default function From () {
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorMail, setErrorMail] = useState("");
    // const handeChange = (e)=>{
    //     e.preventDefault();
    // }

    const validName= (value)=>{ // name validation (name != "" and name.length > 2 ) 
        value === "" ? setErrorName("Renseignez le nom") : value.length < 2 ? setErrorName("Entez un nom valide !") : setErrorName("");
        setName(value);
    }

    const validMail= (value)=>{
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        value === "" ? setErrorMail("Renseignez le mail") : !(regexEmail.test(value)) ? setErrorMail("Entez une adresse mail valide !") : setErrorMail("");
    }
  return (
    <form>  
        <label>
            Nom
            <input type="text"
                    value ={name}
                    onChange={(e)=>validName(e.target.value)}
            />
            {/* {console.log(error)} */}
            <small>{ errorName }</small>
        </label><br/>
        <label>
            Mail
            <input type="mail" 
                    // value ={mail}
                    onChange={(e)=>validMail(e.target.value)}
            />
            <small>{ errorMail }</small>
        </label>
        <input type='submit' value='Commencer' />
    </form>
  )
}