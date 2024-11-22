import { useEffect } from "react"
import useWorlde from "../hooks/useWordle"
import Grid from "./grid"
import Keypad from "./keypad"
import Modal from "./Modal"
import { useState } from "react"

export default function Wordle (props) {
    const {currentGuess, handleKey, guesses, isCorrect, turn, usedKeys} = useWorlde(props.solution)
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        window.addEventListener('keyup', handleKey)
        if (isCorrect) {
            setTimeout(() => {
                setShowModal(true)
            }
            , 2000)
            window.removeEventListener('keyup', handleKey)
        }
        if (turn > props.solution.length && !isCorrect) {
            setTimeout(() => {
                setShowModal(true)
            }
            , 2000)

            window.removeEventListener('keyup', handleKey)
        }

        return () => window.removeEventListener('keyup', handleKey)
    }, [handleKey, isCorrect])
     
    useEffect(() => {
    }), [guesses, isCorrect, turn]

    return (
        <div>
           <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} lenrow={props.solution}/>
           <Keypad usedKeys={usedKeys}/>
           {showModal &&<Modal isCorrect={isCorrect} turn={turn} solution={props.solution} description={props.description}/>}
        </div>
    )
}


