import React from "react";
import Letter from "../Letter/Letter";
import styles from "./Board.module.css";

const Board = ({ guessedLetters, letters, onClick }) => {
  return (
    <div className={styles.board}>
      {letters.map((l) => (
        <Letter
          letter={l}
          key={l}
          onClick={onClick}
          isSelected={guessedLetters.includes(l)}
        />
      ))}
    </div>
  );
};

export default Board;
