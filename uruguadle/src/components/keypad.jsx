
import React, { useState } from 'react'
import './css/keypad.css'

export default function Keypad(props) {
    // make an array of letters in lowercase, qwerty order
    const letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
        console.log("letras pasadas:")
        console.log(props.usedKeys)
    return (
        <div className='keypad'>
            {letters && letters.map((l) => {
                const color = props.usedKeys[l]
                return (
                    <div key={l} className={color}>{l}</div>
                )
            })}
        </div>
    )
}
