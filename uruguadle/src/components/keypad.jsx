
import React, { useState } from 'react'
import './css/keypad.css'

export default function Keypad(props) {
   
    const letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
    return (
        <div className='keypad'>
            {letters && letters.map((l) => {
                const color = props.usedKeys[l]
                return (
                    <div key={l} className={color} onClick={() => props.onKeyClick({ key: l })}>{l}</div>
                )
            })}
            <div
                className="keypad-action"
                onClick={() => props.onKeyClick({ key:'Backspace'})} 
                >
                ⌫
            </div>
            <div
                className="keypad-action"
                onClick={() => props.onKeyClick({ key:'Enter'})}
            >
                ✔
            </div>
        </div>
    )
}
