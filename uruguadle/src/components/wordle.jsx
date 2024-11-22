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
           <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} lenrow={props.solution}/>
        </div>
    )
}