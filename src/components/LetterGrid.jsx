function LetterGrid({ letters, guessedLetters, word, isGameOver, onGuess }) {
  const guessedSet = new Set(guessedLetters)

  return (
    <section className="keyboard" aria-label="Tastatură litere">
      {letters.map((letter) => {
        const isGuessed = guessedSet.has(letter)
        const isCorrect = word.includes(letter)

        let keyClassName = "letter-key"
        if (isGuessed && isCorrect) {
          keyClassName += " key-correct"
        } else if (isGuessed) {
          keyClassName += " key-wrong"
        } else if (isGameOver && isCorrect) {
          keyClassName += " key-reveal"
        }

        return (
          <button
            key={letter}
            type="button"
            className={keyClassName}
            onClick={() => onGuess(letter)}
            disabled={isGameOver || isGuessed}
            aria-label={`Ghicește litera ${letter}`}
          >
            {letter}
          </button>
        )
      })}
    </section>
  )
}

export default LetterGrid
