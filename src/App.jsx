import React from "react";
import Imagine from "./Components/Imagine/Imagine";
import Litere from "./Components/Litere/Litere";
import Cuvantul from "./Components/Cuvantul/Cuvantul";
import {words} from "./constants/words";
import { useState } from "react";

function App(){
    const cuvintRandom = Math.floor(Math.random() * words.length);
    const [litereGhicite, setLitereGhicite] = useState([]);
    const [literaApasata, setLiteraApasata] = useState("");
    const [gresit, setGresit] = useState(0);
    const [cuvintDinLista, setCuvintDinLista] = useState(words[cuvintRandom]);
    console.log(cuvintDinLista);
    console.log(literaApasata);
    console.log(litereGhicite);

   function verifLitera(litera){
        setLitereGhicite([...litereGhicite, litera]);
        setLiteraApasata(litera);
        if (!cuvintDinLista.includes(litera)){
            setGresit(gresit => gresit + 1);
        }
    }
    console.log(gresit);

    const litereleCorecte = litereGhicite.filter(l => cuvintDinLista.includes(l));
    const castigat = litereleCorecte.length === cuvintDinLista.length;
    const jocTerminat = gresit >= 7;

    function handleClick(){
        setLiteraApasata("");
        setLitereGhicite([]);
        setGresit(0);
        setCuvintDinLista(words[cuvintRandom]);
    }
    
    return(
        <>
            {jocTerminat && <h2>Ai pierdut</h2>}
            {castigat && <h2>Ai cistigat</h2>}
           <Imagine gresit={gresit}/> 
           <Cuvantul fiecareCuvint={cuvintDinLista} litereGhicite={litereGhicite} jocTerminat={jocTerminat}/>
           <Litere litereGhicite={litereGhicite} gresit={gresit} handleClick={handleClick} onClick={verifLitera} />
        </>
    )
}
export default App
