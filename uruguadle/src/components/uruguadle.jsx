import React, { useState, useEffect } from "react";
import wordsData from "../words.json";
import Wordle from "./wordle.jsx";

const WordleGame = () => {
  const [words, setWords] = useState([]);
  const [targetWord, setTargetWord] = useState("");
  const [targetDesc, setTargetDesc] = useState("");

  useEffect(() => {
    const wordList = wordsData.words;
    setWords(wordList);
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setTargetWord(randomWord.word);
    setTargetDesc(randomWord.desc);
  }, []);

  return (
    <div>
      <Wordle solution={targetWord} description={targetDesc} />
    </div>
  );
};

export default WordleGame;