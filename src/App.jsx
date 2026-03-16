import { useState } from "react";
import Imagine from "./Components/Imagine/Imagine";
import Cuvantul from "./Components/Cuvantul/Cuvantul";
import Litere from "./Components/Litere/Litere";

import { letters } from "./constants/letters";
import { stages } from "./constants/stages";
import { words } from "./constants/words";

function getCuvantAleatoriu() {
    const indexAleatoriu = Math.floor(Math.random() * words.length);
    return words[indexAleatoriu];
}

function App() {
    const [cuvant, setCuvant] = useState(getCuvantAleatoriu);
    const [litereGhicite, setLitereGhicite] = useState([]);

    const litereGresite = [];
    for (let i = 0; i < litereGhicite.length; i++) {
        const litera = litereGhicite[i];
        if (cuvant.includes(litera) === false) {
            litereGresite.push(litera);
        }
    }

    const numarGreseli = litereGresite.length;
    
    let indexImagine = numarGreseli;
    if (numarGreseli >= stages.length) {
        indexImagine = stages.length - 1;
    }
    const imagineCurenta = stages[indexImagine];

    let estePierdut = false;
    if (numarGreseli >= stages.length - 1) {
        estePierdut = true;
    }

    const litereleDinCuvant = cuvant.split("");
    let esteCastigat = true;
    for (let i = 0; i < litereleDinCuvant.length; i++) {
        const litera = litereleDinCuvant[i];
        if (litereGhicite.includes(litera) === false) {
            esteCastigat = false;
        }
    }

    let jocTerminat = false;
    if (estePierdut === true || esteCastigat === true) {
        jocTerminat = true;
    }

    function handleApasareLitera(literaApasata) {
        if (jocTerminat === true) {
            return;
        }

        setLitereGhicite(function(listaDePanaAcum) {
            return [...listaDePanaAcum, literaApasata];
        });
    }

    function handleRestart() {
        setCuvant(getCuvantAleatoriu());
        setLitereGhicite([]);
    }

    return (
        <div className="app">
            {esteCastigat === true && (
                <p className="mesajCastigat">Ai cistigat!</p>
            )}
            
            {estePierdut === true && (
                <p className="mesajPierdut">Ai pierdut!</p>
            )}

            <Imagine src={imagineCurenta} />

            <Cuvantul
                cuvant={cuvant}
                litereGhicite={litereGhicite}
                jocTerminat={estePierdut}
            />

            {jocTerminat === false && (
                <Litere
                    litere={letters}
                    litereGhicite={litereGhicite}
                    cuvant={cuvant}
                    laApasareLitera={handleApasareLitera}
                    jocTerminat={jocTerminat}
                />
            )}

            {jocTerminat === true && (
                <button className="btnRestart" onClick={handleRestart}>
                    INCEARCA DIN NOU
                </button>
            )}
        </div>
    );
}

export default App;
