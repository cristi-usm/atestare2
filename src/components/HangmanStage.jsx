function HangmanStage({ stageUrl, attempts, maxAttempts }) {
  return (
    <section className="stage-card" aria-live="polite">
      <img
        className="stage-image"
        src={stageUrl}
        alt={`Hangman stage ${attempts} of ${maxAttempts}`}
      />
      <p className="attempts-text">
        Greșeli: {attempts}/{maxAttempts}
      </p>
    </section>
  )
}

export default HangmanStage
