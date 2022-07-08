import React from 'react'
import UIFx from 'uifx'
import clapclap from '../assets/clap.mp3';

import '../styles/Score.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Score() {
    const element = <FontAwesomeIcon icon={faCircleXmark} size="6x" className="image"  color="green"  />
    const clap = new UIFx(
        clapclap,{
            volume: 0.4,
            throttleMs: 100
        }
    )
    
    return (
    <div>
        <h3>Doddy Matabaro</h3>
        <h5>matabarododdy@gmail.com</h5>
        {element}
        <h5>12/15</h5>
        {/* {clap.play()} */}
        <div>
            <button type='submit'>Accueil</button>
        </div>
        
    </div>
  )
}

export default Score