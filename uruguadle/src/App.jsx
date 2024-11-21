import { useState } from 'react'
import './App.css'
// import Keyboard from './components/keyboard.jsx'
import WordleGame from './components/uruguadle.jsx'
export default function App() {
  return (
    <>
      <h1><span className='uru'>Uru</span><span className='guay'>gua</span><span className='dle'>dle 🥩🍷</span></h1>
      <div className='game-screen'>
        <WordleGame/>
      </div>
    </>
  )
}


