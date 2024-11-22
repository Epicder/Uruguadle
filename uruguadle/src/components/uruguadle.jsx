import React, { useState, useEffect } from "react";
import wordsData from "../words.json";
import Wordle from "./wordle.jsx"

const WordleGame = () => {
  const [words, setWords] = useState([]);
  const [targetWord, setTargetWord] = useState("");

  useEffect(() => {
    setWords(wordsData.words);
    setTargetWord(wordsData.words[Math.floor(Math.random() * wordsData.words.length)]);
  }, []);

  return (
        <div>
           <Wordle solution={targetWord}/>
        </div>
      )}

export default WordleGame;