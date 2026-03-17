import React from "react";
import styles from "./WordContainer.module.css";

const getStatus = (isGuessed, gameState) => {
  if (gameState === "won") return "wonLetter";
  if (isGuessed) return "filled";
  if (gameState === "lost") return "lostLetter";
  return "empty";
};

const WordContainer = ({ guessedWord, word, gameState }) => {
  return (
    <div className={styles.container}>
      {Array.from(word).map((letter, index) => {
        const isGuessed = guessedWord.includes(letter);
        const status = getStatus(isGuessed, gameState);

        const showLetter = isGuessed || gameState === "lost";

        return (
          <span key={index} className={`${styles.letterBox} ${styles[status]}`}>
            {showLetter ? letter : "_"}
          </span>
        );
      })}
    </div>
  );
};

export default WordContainer;
