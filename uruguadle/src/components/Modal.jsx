import React from 'react'
import './css/modal.css'

export default function Modal(props) {

  const resetPage = () => {
    window.location.reload()
  }

  return (
    <div className='modal'>
      {props.isCorrect && (
        <div className='modal-text'>
          <h1>Correcto, sos el/la más capito!</h1>
          <p>Te llevó {props.turn} turnos encontrar la palabra - <span className='word'>{props.solution}</span> -</p>
          <br />
          <p>Significado de la palabra: "<strong>{props.description}</strong>"</p>
          <br />
          <br />
          <button className='play-again' onClick={resetPage}>Juga' denuevo</button>
        </div>
      )}
      {!props.isCorrect && (
        <div className='modal-text'>
          <h1>Mal ahí, ñeri...'</h1>
          <p>La palabra era - <span className='word'>{props.solution}</span> -</p>
          <br />
          <p>Significado de la palabra: "<strong>{props.description}</strong>"</p>
          <br />
          <br />
          <button className='play-again' onClick={resetPage}>Juga' denuevo</button>
        </div>
      )}
    </div>
  )
}
