import { useState } from "react";
import { letters } from "./constants/letters";
import { words } from "./constants/words";
import { stages } from "./constants/stages";
import "./index.css";


const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

function App() {
  const [word, setWord] = useState(getRandomWord()); 
  const [guessedLetters, setGuessedLetters] = useState([]); 
  const [wrongGuesses, setWrongGuesses] = useState(0); 

  
  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setWrongGuesses(wrongGuesses + 1);
      }
    }
  };

  
  const handleTryAgain = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  
  const displayWord = word
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  return (
    <div className="game-container">
      
      <img src={stages[wrongGuesses]} alt="Hangman stage" className="gallows" />

      
      <div className="word">{displayWord}</div>

      
      <div className="letters">
        {letters.map((letter, index) => (
          <button
            key={index}
            onClick={() => handleLetterClick(letter)}
            disabled={guessedLetters.includes(letter)}
            className="letter-button"
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Try Again button */}
      <button onClick={handleTryAgain} className="try-again-button">
        Try Again
      </button>
    </div>
  );
}

export default App;