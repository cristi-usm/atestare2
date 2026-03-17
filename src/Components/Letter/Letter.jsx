import React from "react";
import styles from "./Letter.module.css";

const Letter = ({ letter, onClick, isSelected = false }) => {
  
  return (
    <div
      className={isSelected ? styles.letterSelected : styles.letter}
      onClick={() => onClick(letter)}
    >
      {letter}
    </div>
  );
};

export default Letter;
