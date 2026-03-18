import Tastatura from "./components/Tastatura";
import Text from "./components/Text";
import { useState } from "react";
import words from "./constants/words.js";
import Image from "./components/Image";
//import style from "./index.css";

const indexRandom = Math.floor(Math.random() * words.length);

function App() {
  const [gresit, setGreseala] = useState(0);
  const [word, setWord] = useState(words[indexRandom]);
  const [litereAlese, setLitereAlese] = useState([]);
  console.log(word);
  console.log(gresit)
  console.log(litereAlese)
  const pressLetter = (letter) => {
    if (litereAlese.includes(letter)) return;
    setLitereAlese((litereExistenta) => [...litereExistenta, letter]);
    if (!word.includes(letter)) {
      setGreseala((g) => g + 1);
    }
  };
  const restart = () => {
    let newIndex = Math.floor(Math.random() * words.length);
    setWord(()=>words[newIndex]);
    setGreseala(0);
    setLitereAlese(()=>[])

  };

  return (
    <>
      <Image gresit={gresit} />
      <Text word={word} litereAlese={litereAlese} gresit={gresit}/>
      <Tastatura restart={restart} onClikLitera={pressLetter} litereAlese={litereAlese} gresit={gresit} />
    </>
  );
}

export default App;
