function GameStatus({ isWon, isLost, word }) {
  if (!isWon && !isLost) {
    return null
  }

  return (
    <section
      className={`status-panel ${isWon ? "status-win" : "status-lose"}`}
      aria-live="polite"
    >
      <h2>{isWon ? "Ai câștigat!" : "Ai pierdut!"}</h2>
      <p>
        {isWon
          ? "Ai ghicit toate literele înainte de ultimul stadiu."
          : `Cuvântul era ${word}.`}
      </p>
    </section>
  )
}

export default GameStatus
