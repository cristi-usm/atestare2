import { useState } from "react";
import Board from "./Components/Board/Board";
import { letters } from "./constants/letters";
import { words } from "./constants/words";
import { stages } from "./constants/stages";
import "./App.css";
import WordContainer from "./Components/WordContainer/WordContainer";

const maximumTries = 7;

function App() {
  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const [word, setWord] = useState(getRandomWord());

  const [guessedLetters, setGuessedLetters] = useState([]);

  const [tries, setTries] = useState(0);
  const [stage, setStage] = useState(stages[tries]);
  const [gameState, setGameState] = useState("playing");

  const restart = () => {
    setWord(getRandomWord());
    setTries(0);
    setStage(stages[0]);
    setGameState("playing");
    setGuessedLetters([]);
  };

  const clickLetter = (letter) => {
    if (gameState !== "playing") return;

    if (guessedLetters.includes(letter)) return;

    const newGuessed = [...guessedLetters, letter];
    setGuessedLetters(newGuessed);

    if (!word.includes(letter)) {
      const newTries = tries + 1;
      setTries(newTries);
      setStage(stages[newTries]);

      if (newTries >= maximumTries) {
        setGameState("lost");
        return;
      }
    }

    if (word.split("").every((l) => newGuessed.includes(l))) {
      setGameState("won");
    }
  };

  return (
    <>
      {gameState === "won" && <h1 className="win-message">You won!</h1>}
      {gameState === "lost" && <h1 className="lost-message">You lost!</h1>}

      <div className="stage">
        <img src={stage} className="stage-img" />
      </div>
      <div className="word-container">
        <WordContainer
          guessedWord={guessedLetters}
          word={word}
          gameState={gameState}
        />
      </div>
      {gameState === "playing" && (
        <Board
          guessedLetters={guessedLetters}
          letters={letters}
          onClick={clickLetter}
        />
      )}
      <div className="restart-button">
        {gameState !== "playing" && (
          <button className="lost-button" onClick={restart}>
            TRY AGAIN
          </button>
        )}
      </div>
    </>
  );
}

export default App;
