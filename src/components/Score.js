import React from 'react'
import UIFx from 'uifx'
// import clapclap from '../assets/clap.mp3';
import { base } from '../datas/base'
import '../styles/Score.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Score(props) {
    const element = <FontAwesomeIcon icon={props.value >= (base.length /2) ? faCircleCheck : 
     faCircleXmark} size="6x" className="image"  
     color={props.value >= (base.length /2) ? "#9aca19"  : "#9b4d48" }  />
    // const clap = new UIFx(
    //     clapclap,{
    //         volume: 0.4,
    //         throttleMs: 100
    //     }
    // )
    function  refreshApp(){
        window.location.reload(false);
    }
    return (
     <div className="score">
        <h3>{props.auth[0]}</h3>
        <h5>{props.auth[1]}</h5>
        {element}
        <h5>{props.value} / {base.length}</h5>
        {/* {clap.play()} */}
        <div>
            <button className='accueil' type='submit' onClick={refreshApp}>Accueil</button>
        </div>
    </div>
  )
}

export default Score 