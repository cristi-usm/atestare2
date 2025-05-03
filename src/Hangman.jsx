import React, { useState, useEffect } from "react";
import { words } from "./constants/words.js";
import { letters } from "./constants/letters.js";
import { stages } from "./constants/stages.js";
import styles from "./Hangman.module.css";

const Hangman = () => {
  const [cuvant, seteazaCuvant] = useState("");
  const [litereGhicite, seteazaLitereGhicite] = useState([]);
  const [greseli, seteazaGreseli] = useState(0);
  const [stareJoc, seteazaStareJoc] = useState("joc");
  const [litereGresite, seteazaLitereGresite] = useState([]);

  const incepeJoc = () => {
    const cuvantNou = words[Math.floor(Math.random() * words.length)];
    seteazaCuvant(cuvantNou);
    seteazaLitereGhicite([]);
    seteazaLitereGresite([]);
    seteazaGreseli(0);
    seteazaStareJoc("joc");
  };

  useEffect(() => {
    incepeJoc();
  }, []);

  const alegeLitera = (litera) => {
    if (stareJoc !== "joc" || litereGhicite.includes(litera)) return;

    const litereNoi = [...litereGhicite, litera];
    seteazaLitereGhicite(litereNoi);

    if (!cuvant.includes(litera)) {
      const greseliNoi = greseli + 1;
      seteazaGreseli(greseliNoi);
      seteazaLitereGresite([...litereGresite, litera]);

      if (greseliNoi >= 6) {
        seteazaStareJoc("pierdut");
      }
    }

    if (cuvant.split("").every((l) => litereNoi.includes(l))) {
      seteazaStareJoc("castigat");
    }
  };

  const afiseazaCuvant = cuvant
    .split("")
    .map((litera) => (litereGhicite.includes(litera) ? litera : "_"))
    .join(" ");

  const afiseazaCuvantFinal = cuvant.split("").map((litera, index) => {
    const esteGresita = !litereGhicite.includes(litera);
    return (
      <span
        key={index}
        className={esteGresita ? styles.literaGresita : styles.literaCorecta}
      >
        {litera}
      </span>
    );
  });

  return (
    <div className={styles.container}>
      
      {stareJoc === "pierdut" ? (
        <div className={styles.pierdut}>
          <h1 className={styles.titluPierdut}>YOU LOST</h1>
          <div className={styles.spanzuratoare}>
            <img src={stages[7]} alt="Spanzuratoare" />
          </div>
          <div className={styles.cuvant}>{afiseazaCuvantFinal}</div>
          <button onClick={incepeJoc} className={styles.butonIncearcaDinNou}>
            TRY AGAIN
          </button>
        </div>
      
    ) : stareJoc === "castigat" ? (
        <div className={styles.castigat}>
          <h1 className={styles.titluCastigat}>YOU WON</h1>
          <div className={styles.spanzuratoare}>
            <img src={stages[greseli]} alt="Spanzuratoare" />
          </div>
          <div className={styles.cuvant}>{afiseazaCuvantFinal}</div>
          <button onClick={incepeJoc} className={styles.butonIncearcaDinNou}>
            PLAY AGAIN
          </button>
        </div>
      ) : (
        <>
          <div className={styles.spanzuratoare}>
            <img src={stages[greseli]} alt="Spanzuratoare" />
          </div>
          <div className={styles.cuvant}>
            <span>{afiseazaCuvant}</span>
          </div>
          
          <div className={styles.litere}>
            {letters.map((litera) => (
              <button
                key={litera}
                onClick={() => alegeLitera(litera)}
                className={`${styles.butonLitera} ${
                  litereGhicite.includes(litera) ? styles.dezactivat : ""
                }`}
                disabled={litereGhicite.includes(litera)}
              >
                {litera}
              </button>
              
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Hangman;
