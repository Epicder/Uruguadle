import { useEffect } from "react"
import useWordle from "../hooks/useWordle"
import Grid from "./grid"
import Keypad from "./keypad"
import Modal from "./Modal"
import { useState } from "react"
import Popup from "./Popup"

export default function Wordle(props) {
    const { currentGuess, handleKey, guesses, isCorrect, turn, usedKeys, errorMessage } = useWordle(props.solution);
    const [showModal, setShowModal] = useState(false);

    const solLength = props.solution.length;

    useEffect(() => {
        window.addEventListener('keyup', handleKey);

        if (isCorrect) {
            setTimeout(() => setShowModal(true), 1800);
            window.removeEventListener('keyup', handleKey);
        }

        if (turn > solLength && !isCorrect) {
            console.log('Perdiste');
            setShowModal(true);
            window.removeEventListener('keyup', handleKey);
        }

        return () => window.removeEventListener('keyup', handleKey);
    }, [handleKey, isCorrect, turn, solLength]);

    return (
        <div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} lenrow={props.solution} />
            <Keypad usedKeys={usedKeys} onKeyClick={handleKey} />
            <Popup message={errorMessage} />
            {showModal && (
                <Modal isCorrect={isCorrect} turn={turn} solution={props.solution} description={props.description} />
            )}
        </div>
    );
}
