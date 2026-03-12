import { useEffect, useState } from "react";
import { LettersArray } from "./components/LettersArray/LettersArray";
import { StageDraw } from "./components/StageDraw/StageDraw";
import stages from "./constants/stages.json"
import words from "./constants/words.json"
import { DisplayWord } from "./components/DisplayWord/DisplayWord";
import "./app.css"

function App() {

    const [stage, setStage] = useState(0)
    const [randomWord, setRandomWord] = useState(null)
    const [guessedLetters, setGuessedLetters] = useState([])

    const lose = stage >= 6
    const win = randomWord && randomWord.word.split("").every(letter => 
        guessedLetters.includes(letter)
    );


    function pickNewWord(){
        const randomFromWords = words[Math.floor(Math.random() * words.length)]
        setRandomWord(randomFromWords)
        setStage(0)
        setGuessedLetters([])

    }

    useEffect(() => {
        pickNewWord()
    }, [])

    const displayWord = randomWord?.word.split("").map(letter => 
        guessedLetters.includes(letter) ? letter : "_"
    ).join(" ")


    function handleLetterClick(letter){

        if(lose || win ) return;
        if(!guessedLetters.includes(letter)) {
            setGuessedLetters(gl => [...gl, letter])

            if(!randomWord.word.includes(letter)){
            setStage(s => s + 1)
            }
        }

        
    }

    return <div className="app-container">
<div style={{ textAlign: "center", padding: "20px" }}>
            {lose && (
                <div style={{ color: "red" }}>
                    <h2>You Lose!!! Loh...</h2>
                    <p>Word was: <strong>{randomWord?.word}</strong></p>
                </div>
            )}

            {win && (
                <div style={{ color: "green" }}>
                    <h2>Krasavcik, esti bun!!</h2>
                </div>
            )}

            <StageDraw stage_id={stages[stage]} />

            <DisplayWord displayWord={displayWord} randomWord={randomWord} />
            
            {!win && !lose && (
                <LettersArray
                    guessedLetters={guessedLetters}
                    onLetterClick={handleLetterClick}
                />
            )}

            <br />
            <button className="action-button" onClick={pickNewWord} style={{ marginTop: "20px" }}>
                {win || lose ? "Try Again" : "New Word"}
            </button>
        </div>

    
    
    </div>;
}

export default App;
