import React from 'react';
import '../styles/Header.css'

const Header = () => {
    return (
        <div>
            <h2 className="title">JavaScript Quiz</h2>
            <p className="subtitle">
                Évaluez vos connaissances en JavaScript en répondant aux questions que nous avons 
                spécialement sélectionnées pour vous.
                 C'est fun et c'est gratuit.
            </p>
        </div>
    );
}

export default Header;
