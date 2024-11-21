import React, { useState, useEffect } from "react";
import wordsData from "../words.json";
import "./css/uruguadle.css";

const WordleGame = () => {
  const [words, setWords] = useState([]);
  const [targetWord, setTargetWord] = useState("");

  useEffect(() => {
    setWords(wordsData.words);
    setTargetWord(wordsData.words[Math.floor(Math.random() * wordsData.words.length)]);
  }, []);

  return (
        <div>
            <p>Word: {targetWord}</p>
        </div>
      )}

export default WordleGame;