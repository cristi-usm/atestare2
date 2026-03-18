import { useState } from 'react';
import { letters } from './constants/letters.js';
import { stages } from './constants/stages.js';
import { words } from "./constants/words.js";
import Word from './components/Word.jsx';
import Keyboard from './components/Keyboard.jsx';

function App() {
    const [randomWord] = useState(
        words[Math.floor(Math.random() * words.length)]
    );
    const [guessLetters, setGuessLetters] = useState([]);
    const [wrongGuess, setWrongGuess] = useState(0);


    const isWinner = randomWord.split("").every(letter => guessLetters.includes(letter));
    const isLose = wrongGuess >= stages.length - 1;
    const resetGame = () => {
        setGuessLetters([]);
        setWrongGuess(0);
    }
    return (
        <>
            <div className="game">
                <img src={stages[wrongGuess]} className='hangman-img' />

                <Word
                    randomWord={randomWord}
                    guessLetters={guessLetters}
                    isLose={isLose}
                />
                <Keyboard
                letters={letters}
                guessLetters={guessLetters}
                randomWord={randomWord}
                setGuessLetters={setGuessLetters}
                setWrongGuess={setWrongGuess}
                isWinner={isWinner}
                isLose={isLose}
                 />

                {isWinner && <h2>You Win 🎉</h2>}
                {isLose && <h2>You lose 😢</h2>}
                {isLose && <p>The word was:<strong>{randomWord}</strong></p>}
                {isLose && (<button onClick={resetGame}>TRY AGAIN</button>)}
            </div>
        </>)

}

export default App;