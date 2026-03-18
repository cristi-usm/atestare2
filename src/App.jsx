import { letters } from "./constants/letters.js";
import { useState } from "react";
import { words } from "./constants/words.js";
import { stages } from "./constants/stages.js";
import "./index.css"

function App() {
    const [targetWord] = useState(() => {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex].toUpperCase();
    });

    const [displayWord, setDisplayWord] = useState(Array(targetWord.length).fill("_"));
    const [mistakes, setMistakes] = useState(0);
    const [clickedLetters, setClickedLetters] = useState([]);

    const isLost = mistakes >= stages.length - 1;
    const isWon = !displayWord.includes("_") && displayWord.length > 0;
    const isGameOver = isLost || isWon;

    const handleSelectedLetter = (letter) => {
        if (isGameOver || clickedLetters.includes(letter)) return;

        setClickedLetters((prev) => [...prev, letter]);

        if (targetWord.includes(letter)) {
            const newDisplayWord = [...displayWord];
            for (let i = 0; i < targetWord.length; i++) {
                if (targetWord[i] === letter) {
                    newDisplayWord[i] = letter;
                }
            }
            setDisplayWord(newDisplayWord);
        } else {
            if (mistakes < stages.length - 1) {
                setMistakes((prev) => prev + 1);
            }
        }
    };

    return (
        <div className="game-container">
            <div className="stages-section">
                <img src={stages[mistakes]} alt="hangman" />
            </div>

            <div className="displayWord-section">
                {targetWord.split("").map((letter, idx) => {
                    const wasGuessed = displayWord[idx] !== "_";

                    let statusClass = "";
                    if (isGameOver) {
                        statusClass = wasGuessed ? "correct" : "incorrect";
                    }

                    return (
                        <span key={idx} className={`word-letter ${statusClass}`}>
                            {wasGuessed || isLost ? letter : "_"}
                        </span>
                    );
                })}
            </div>

            <div className="letters-section">
                {letters.map((letter, idx) => {
                    const isClicked = clickedLetters.includes(letter);
                    return (
                        <button
                            key={idx}
                            className={`key-button ${isClicked ? "clicked" : ""}`}
                            onClick={() => handleSelectedLetter(letter)}
                            disabled={isClicked || isGameOver}
                        >
                            {letter}
                        </button>
                    );
                })}
            </div>

            {isGameOver && (
                <button className="reset-btn" onClick={() => window.location.reload()}>
                    Restart Game
                </button>
            )}
        </div>
    );
}

export default App;