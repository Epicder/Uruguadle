import { useEffect } from "react"
import useWorlde from "../hooks/useWordle"
import Grid from "./grid"

export default function Wordle (props) {
    const {currentGuess, handleKey, guesses, isCorrect, turn} = useWorlde(props.solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKey)

        return () => window.removeEventListener('keyup', handleKey)
    }, [handleKey])
     
    useEffect(() => {
        console.log(guesses, isCorrect, turn)
    }), [guesses, isCorrect, turn]

    return (
        <div>
            <h2> La palabra es={props.solution}</h2>
           <h3>Tu guess es={currentGuess}</h3>
           <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} lenrow={props.solution}/>
        </div>
    )
}