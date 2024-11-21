import { setState, useState } from 'react'

// hook con las funciones de intentos y storage de las palabras
const useWorlde = (targetWord) => {
    const [turn, setTurn] = useState(0) // Maneja cada turno del jugador
    const [currentGuess, setCurrentGuess] = useState('') // Se añade una letra a currentGuess cada vez que el usuario toca una letra
    const [guesses, setGuesses] = useState([]) //Guesses pasados del usuario, pero formateados como array para los colores
    const [history, setHistory] = useState([]) //Guesses pasados del usuario pero como str, para checkear que no vuelva a poner la misma palabra
    const [isCorrect, setIsCorrect] = useState(false)// Manejo de victoria de la partida
    // Formatear el guess del user a un array
    const formatGuess = () => {
    }

    // añadir el guess del usuario a sus guesses y history
    const addNewGuess = () => {
    }

    // manejo del input del usuario para el useState currentGuess
    const handleKey = (props) => {
        if (/^[A-Za-z]$/.test(props.key)) {
            if (currentGuess.length < targetWord.length) {
                setCurrentGuess((prev) => {
                    return prev + props.key
                })
            }
            
        }
    }


    return ({turn, currentGuess, guesses, isCorrect, handleKey})
}





export default useWorlde