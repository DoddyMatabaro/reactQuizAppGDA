import React from 'react'
import '../styles/Form.css'
import {useState} from 'react';

export default function From (props) {
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [etatVal, setEtatVal] = useState(false);
    const [errorName, setErrorName] = useState(" ");
    const [errorMail, setErrorMail] = useState(" ");

    const validName= (value)=>{ // name validation (name != "" and name.length > 2 ) 
        value === "" ? setErrorName("Renseignez le nom") : 
        value.length < 2 ? setErrorName("Entez un nom valide !") : 
        setErrorName("");
        setName(value);
        handlerClick();
    }
    const validMail= (value)=>{ // mail validation
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        value === "" ? setErrorMail("Renseignez le mail") : 
        !(regexEmail.test(value)) ? setErrorMail("Entez une adresse mail valide !") : 
        setErrorMail("");
        setMail(value);
        handlerClick();
    }
    const handlerClick = ()=>{
        if(errorMail === "" && errorName === ""){
            return setEtatVal(true);
        }
        return setEtatVal(false);
    }
  return (
    <form>  
        <label>
            Nom
            <input type="text" placeholder='Entrez votre nom(ex.  Doddy Matabaro) '
                    value ={name}
                    onChange={(e)=>validName(e.target.value)}
            />
            <small>{ errorName }</small>
        </label><br/>
        <label>
            Mail
            <input type="mail"  placeholder="Entrez votre adresse mail(ex. doddy@gda.kda)"
                    // value ={mail}
                    onChange={(e)=>validMail(e.target.value)}
            />
            <small>{ errorMail }</small>
        </label>
        <input type='submit' value='Commencer'  onClick={(e)=>{
            e.preventDefault();
            handlerClick(etatVal);
            props.action(etatVal);
            props.infos(name,mail)
        }} />
    </form>
  )
}