import { useState } from 'react'
import './App.css'
import WordleGame from './components/uruguadle.jsx'
import HowToPlay from './components/howtoplay.jsx'

const handleClick = () => {
  return (
    <HowToPlay/>
  )
}


export default function App() {
  return (
    <>
    <div className='title-container'>
      <button className='info' onClick={handleClick}>ℹ</button>
    <h1 className='title'><span className='uru'>Uru</span><span className='guay'>gua</span><span className='dle'>dle 🥩🍷</span></h1>
    <HowToPlay/>
    </div>
      <div className='game-screen'>
        <WordleGame/>
      </div>
    </>
  )
}


