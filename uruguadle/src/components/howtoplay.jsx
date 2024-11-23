import React, { useState } from 'react';

const HowToPlay = ({ onClose }) => {
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
                </p>
                <p className='parentesis'>(Si la palabra al azar se te complica, podés reiniciar la página para una nueva)</p>
                <br/>
                <br />
                <div className="grid">
                    <div className="row-howtoplay">
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
                <div className="grid">
                    <div className="row-howtoplay">
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
                <div className="grid">
                    <div className="row-howtoplay">
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
                <p>La palabra al azar está relacionada con la cultura uruguaya,
                puede ser comida, una bebida, un lugar, una expresión, una marca, etc.</p>
                <br />
                <button onClick={onClose}>A juga'</button>
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