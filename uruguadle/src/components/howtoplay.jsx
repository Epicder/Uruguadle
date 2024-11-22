import React, { useState } from 'react';




const HowToPlay = () => {
    const [popup, setPopup] = useState(true);

    const handleClick = () => {
        setPopup(false);
    }
    if (!popup) {
        return null;
    }

    return (
        <div className="how-to-play-pop-up">
            <div className='mini-popup'>
                <h3>Cómo jugar</h3>
                <p>Tenés varios intentos para adivinar una palabra oculta al azar.
                Cada intento te dirá cuántas letras acertaste y cuántas están en la posición correcta.
                El juego te indicará con un código de color los aciertos de cada letra y si están en la posición correcta.</p>
                <br/>
                <br />
                <div className="grid">
                    <div className="row">
                        <div className="green">B</div>
                        <div>O</div>
                        <div>T</div>
                        <div>I</div>
                        <div>J</div>
                        <div>A</div>
                    </div>
                </div>
                <p>Verde significa que la letra está en la palabra oculta y en la posición correcta.</p>
                <br />
                <br />
                <div className="grid">
                    <div className="row">
                        <div>P</div>
                        <div className="yellow">I</div>
                        <div>L</div>
                        <div>S</div>
                        <div>E</div>
                        <div>N</div>
                    </div>
                </div>
                <p>Amarillo significa que la letra está en la palabra oculta pero en una posición incorrecta.</p>
                <br />
                <br />
                <div className="grid">
                    <div className="row">
                        <div>G</div>
                        <div>U</div>
                        <div className="grey">A</div>
                        <div>C</div>
                        <div>H</div>
                        <div>O</div>
                    </div>
                </div>
                <p>La palabra oculta no contiene la letra.</p>
                <br />
                <br />
                <p>La palabra al azar está relacionada con la cultura uruguaya,
                puede ser comida, una bebida, un lugar, una expresión, una marca, etc.</p>
                <br />
                <br />
                <button className="play-btn" onClick={handleClick}>A juga'</button>
                <br />
                <br />
                <br />
                <a href="https://github.com/Epicder/Uruguadle" target="_blank"><i>Repositorio del juego</i></a>
                <br />
                <i>Hecho con 🧉 y 🥐 por Elián 🐸</i>
           </div>
        </div>
);   
}


export default HowToPlay;