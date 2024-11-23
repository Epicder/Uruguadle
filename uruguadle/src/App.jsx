import { useState } from 'react'
import './App.css'
import WordleGame from './components/uruguadle.jsx'
import HowToPlay from './components/howtoplay.jsx'
import { motion } from 'framer-motion'
import Info from './assets/info.svg'

export default function App() {
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  const handleClick = () => {
    setShowHowToPlay(!showHowToPlay);
  };

  const handleClose = () => {
    setShowHowToPlay(false);
  };

  const animation = {
    scale: [1, 1.15, 1.15, 1, 1],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  };
  
  return (
    <>


    <motion.div className='title-container' animate={animation} >
      <button  className='info' onClick={handleClick}><img src={Info} alt='info'/></button> 
    <h1 className='title'><span className='uru'>Uru</span><span className='guay'>gua</span><span className='dle'>dle 🌞</span></h1>
    </motion.div>
      <div className='game-screen'>
        <WordleGame/>
        {showHowToPlay && <HowToPlay onClose={handleClose} />}
      </div>
      
    </>
  )
}


