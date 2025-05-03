import React, { useState, useEffect } from 'react';
import { words } from './constants/words';
import { letters } from './constants/letters';
import { stages } from './constants/stages';


function App() {
    const [word, setWord] = useState('');
    const [correctLetters, setCorrectLetters] = useState([]);
    const [incorrectTries, setIncorrectTries] = useState(0);
    const [gameProgress, setGameProgress] = useState('playing');

    useEffect(() => {
        const randomWord = words[Math.floor(Math.random() * word.length)];
        setWord(randomWord);
    }, []);

    function analizeGuess(letter) {
        if (gameProgress !== 'playing' || correctLetters.includes(letter)) return;

        const updatedLetters = [...correctLetters, letter];
        setCorrectLetters(updatedLetters);

        if (!word.includes(letter)) {
            const nextIncorrect = incorrectTries + 1;
            setIncorrectTries(nextIncorrect);
            if (nextIncorrect >= stages.length - 1) {
                setGameProgress('lost');
            }
        } else {
            const allLettersOpen = word.split('').every((char) => updatedLetters.includes(char));
            if (allLettersOpen) {
                setGameProgress('won');
            }
        }
        }

        function tryAgain() {
            const newWord = words[Math.floor(Math.random() * words.length)];
            setWord(newWord);
            setCorrectLetters([]);
            setIncorrectTries(0);
            setGameProgress('playing');
        }


    return (
        <div>
            <h1>Hangman Game Test Title</h1>
            <img src={stages[incorrectTries]} alt="Hangman stage" width="300"></img>
            <div>
                {word.split('').map((char, index) => (
                    <span key={index}>
                        {correctLetters.includes(char) ? char : '_'}{' '}
                    </span>
                ))}
            </div>
            <div>
                {letters.map((letter) => (
                    <button 
                    key={letter}
                    onClick={() => analizeGuess(letter)}
                    disabled={correctLetters.includes(letter) || gameProgress !== 'playing'}
                    >
                    {letter}
                    </button>
                ))}
            </div>
            {gameProgress === 'won' && <p>You won</p>}
            {gameProgress === 'lost' && <p>You lost</p>}
            <button onClick={tryAgain}>Try again</button>
        </div>
    );
}

export default App;
