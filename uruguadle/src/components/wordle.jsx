import { useEffect } from "react"
import useWorlde from "../hooks/useWordle"

export default function Wordle (props) {
    const {currentGuess, handleKey} = useWorlde(props.solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKey)

        return () => window.removeEventListener('keyup', handleKey)
    }, [handleKey])

    return (
        <div>
           <h3>Tu guess es={currentGuess}</h3>
        </div>
    )
}