import { useState, useEffect } from 'react'

// hook con las funciones de intentos y storage de las palabras
const useWordle = (targetWord) => {
    const [turn, setTurn] = useState(0) // Maneja cada turno del jugador
    const [currentGuess, setCurrentGuess] = useState('') // Se añade una letra a currentGuess cada vez que el usuario toca una letra
    const [history, setHistory] = useState([]) //Guesses pasados del usuario pero como str, para checkear que no vuelva a poner la misma palabra
    const [isCorrect, setIsCorrect] = useState(false)// Manejo de victoria de la partida
    const [guesses, setGuesses] = useState([]) //Guesses pasados del usuario, pero formateados como array para los colores


    // Seniors viendo que uso más de 2 else if: MIS OJOSSSSSS (joke, es para que sea más legible)
    useEffect(() => {
        let numTries;
        if (targetWord.length === 2) {
            numTries = 3;
        } else if (targetWord.length === 3) {
            numTries = 4;
        } else if (targetWord.length === 4) {
            numTries = 5;
        } else if (targetWord.length === 5) {
            numTries = 6;
        } else if (targetWord.length === 6) {
            numTries = 6;
        } else if (targetWord.length === 7) {
            numTries = 7;
        } else if (targetWord.length === 8) {
            numTries = 7;
        } else if (targetWord.length === 9) {
            numTries = 7;
        } else if (targetWord.length === 10) {
            numTries = 7;
        }
        setGuesses([...Array(numTries)]);
    }, [targetWord]);

    // Formatear el guess del user a un array
    const formatGuess = () => {
        let solutionArray = [...targetWord];
        let formattedGuess = [...currentGuess].map((l) => {
            return { key: l, color: 'grey' };
        });

        // encontramos las coincidencias exactas (verde)
        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green';
                solutionArray[i] = null;
            }
        });

        // encontramos las coincidencias solo de letra, no de pos (amarillo)
        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow';
                solutionArray[solutionArray.indexOf(l.key)] = null;
            }
        });

        return formattedGuess;
    };

    // añadir el guess del usuario a sus guesses y history
    const addNewGuess = (formatted) => {
        if (currentGuess === targetWord) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formatted
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setCurrentGuess('')
    }

    // manejo del input del usuario para el useState currentGuess
    const handleKey = (props) => {
        if (props.key === 'Enter') {
            if (turn > targetWord.length) {
                console.log("te quedaste sin turnos")
                return
            }
            if (history.includes(currentGuess)) {
                console.log("Ya intentaste esa palabra")
                return
            }
            if (currentGuess.length !== targetWord.length) {
               console.log("La palabra no matchea con los caracteres")
               return
            }
            const formatted = formatGuess()
            addNewGuess(formatted)
        }
        if (props.key === 'Backspace') {
            setCurrentGuess((prev => {
                return prev.slice(0, -1)
            }))
        }
        if (/^[A-Za-zñÑ]$/.test(props.key)) {
            if (currentGuess.length < targetWord.length) {
                setCurrentGuess((prev) => {
                    return (prev + props.key)
                })
            }
        }
    }

    return { turn, currentGuess, guesses, isCorrect, handleKey }
}

export default useWordle