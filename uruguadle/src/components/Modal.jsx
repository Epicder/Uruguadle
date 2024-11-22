import React from 'react'
import './css/modal.css'

export default function Modal(props) {
  return (
    <div className='modal'>
      {props.isCorrect && (
        <div className='modal-text'>
          <h1>Correcto, sos el/la más capito!</h1>
          <p>Te llevó {props.turn} turnos encontrar la palabra <span className='word'>{props.solution}</span></p>
          <p>Significado de la palabra: <strong>{props.description}</strong></p>
        </div>
      )}
      {!props.isCorrect && (
        <div className='modal-text'>
          <h1>Perdiste, tarao'</h1>
          <p>La palabra era <span>{props.solution}</span></p>
          <br/>
          <p>Significado de la palabra: <strong>{props.description}</strong></p>
        </div>
      )}
    </div>
  )
}
