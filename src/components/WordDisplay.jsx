function WordDisplay({ word, guessedLetters, revealWord }) {
  return (
    <section className="word-row" aria-label="Cuvântul de ghicit">
      {word.split("").map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter)
        const shouldReveal = isGuessed || revealWord

        let letterClassName = "word-letter"
        if (shouldReveal && isGuessed) {
          letterClassName += " word-letter-correct"
        } else if (shouldReveal) {
          letterClassName += " word-letter-missed"
        }

        return (
          <span key={`${letter}-${index}`} className="word-slot">
            <span className={letterClassName}>{shouldReveal ? letter : ""}</span>
          </span>
        )
      })}
    </section>
  )
}

export default WordDisplay
