import { useState } from "react";
import { Keyboard } from "./components/Keyboard";
import { letters } from "./constants/letters";
import { words } from "./constants/words";
import { stages } from "./constants/stages";
import { Word } from "./components/Word";

function App() {
  const [lettersObj, setlettersObj] = useState(
    letters.map((letter) => {
      return { letter: letter, disabled: false };
    }),
  );
  const [word, setWord] = useState(() => wordOfTheGame(words));
  const [wrongLetter, setWrongLetter] = useState([]);
  const [correctLetter, setCorectLetter] = useState([]);
  const [stage, setStage] = useState(stages[0]);
  const [wrongCount, setWrongCount] = useState(1);
  const [endGame, setEndGame] = useState(false);
  const [hasWon, setHasWon] = useState(null);

  function wordOfTheGame(array) {
    const word = [...array[Math.floor(Math.random() * array.length)]];
    return word;
  }

  function compareLetters(letterArr, letter) {
    if (letterArr.includes(letter)) {
      if (letterArr.length === correctLetter.length + 1) {
        setHasWon(true);
        setEndGame(true);
      }
      setCorectLetter((prev) => [...prev, letter]);
    } else {
      setWrongLetter((prev) => [...prev, letter]);
      setWrongCount((prev) => prev + 1);
      setStage(stages[wrongCount]);
      if (wrongLetter.length === 6) {
        setHasWon(false);
        setEndGame(true);
      }
    }
  }

  function handleClick(letter) {
    const gameWordArray = [...new Set(word)];
    setlettersObj((prevObj) =>
      prevObj.map((item) => {
        if (item.letter === letter) {
          item.disabled = true;
        }
        return item;
      }),
    );
    if (correctLetter.includes(letter) || wrongLetter.includes(letter)) {
      return;
    }
    compareLetters(gameWordArray, letter);
  }

  function restart() {
    setlettersObj(
      letters.map((letter) => {
        return { letter: letter, disabled: false };
      }),
    );
    setWord(wordOfTheGame(words));
    setWrongLetter([]);
    setCorectLetter([]);
    setStage(stages[0]);
    setWrongCount(1);
    setEndGame(false);
    setHasWon(null);
  }

  return (
    <div className={`flex flex-col justify-center items-center gap-6`}>
      {hasWon === true && (
        <h1 className={`text-green-600 text-3xl font-['Times_New_Roman'] mt-2`}>
          YOU WON
        </h1>
      )}
      {hasWon === false && (
        <h1 className={`text-red-600 text-3xl font-['Times_New_Roman'] mt-2`}>
          YOU LOST
        </h1>
      )}
      <div className={`w-50`}>
        <img src={stage} alt="stage_image" />
      </div>
      <Word word={word} correctLetter={correctLetter} win={hasWon}></Word>
      <Keyboard
        letterArr={lettersObj}
        onLetterClick={(letter) => handleClick(letter)}
        hideKeyboard={endGame}
        onButtonClick={restart}
      ></Keyboard>
    </div>
  );
}

export default App;
