import { useCallback, useEffect, useMemo, useState } from "react"
import GameStatus from "./components/GameStatus"
import HangmanStage from "./components/HangmanStage"
import LetterGrid from "./components/LetterGrid"
import WordDisplay from "./components/WordDisplay"
import { letters } from "./constants/letters"
import { stages } from "./constants/stages"
import { words } from "./constants/words"

function getRandomWord(excludeWord) {
  let nextWord = words[Math.floor(Math.random() * words.length)]

  if (words.length > 1) {
    while (nextWord === excludeWord) {
      nextWord = words[Math.floor(Math.random() * words.length)]
    }
  }

  return nextWord
}

function App() {
  const [secretWord, setSecretWord] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongLetters = useMemo(
    () => guessedLetters.filter((letter) => !secretWord.includes(letter)),
    [guessedLetters, secretWord],
  )

  const maxMistakes = stages.length - 1
  const mistakes = Math.min(wrongLetters.length, maxMistakes)
  const isLost = mistakes >= maxMistakes
  const isWon = secretWord.split("").every((letter) => guessedLetters.includes(letter))
  const isGameOver = isWon || isLost

  const guessLetter = useCallback(
    (letter) => {
      if (isGameOver) {
        return
      }

      setGuessedLetters((currentLetters) => {
        if (currentLetters.includes(letter)) {
          return currentLetters
        }

        return [...currentLetters, letter]
      })
    },
    [isGameOver],
  )

  const restartGame = useCallback(() => {
    setGuessedLetters([])
    setSecretWord((currentWord) => getRandomWord(currentWord))
  }, [])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return
      }

      const pressedKey = event.key.toUpperCase()
      if (!letters.includes(pressedKey)) {
        return
      }

      event.preventDefault()
      guessLetter(pressedKey)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [guessLetter])

  return (
    <main className="app-shell">
      <div className="background-mark background-mark-left" aria-hidden="true" />
      <div className="background-mark background-mark-right" aria-hidden="true" />

      <header className="app-header">
        <p className="app-kicker">React Hangman</p>
        <h1>Spânzurătoarea</h1>
        <p className="app-subtitle">
          Ghicește cuvântul literă cu literă. Fiecare greșeală adaugă o nouă
          parte la desen.
        </p>
      </header>

      <HangmanStage
        stageUrl={stages[mistakes]}
        attempts={mistakes}
        maxAttempts={maxMistakes}
      />

      <WordDisplay
        word={secretWord}
        guessedLetters={guessedLetters}
        revealWord={isLost}
      />

      <GameStatus isWon={isWon} isLost={isLost} word={secretWord} />

      <LetterGrid
        letters={letters}
        guessedLetters={guessedLetters}
        word={secretWord}
        isGameOver={isGameOver}
        onGuess={guessLetter}
      />

      <button className="restart-button" type="button" onClick={restartGame}>
        Repornește jocul
      </button>
    </main>
  )
}

export default App
