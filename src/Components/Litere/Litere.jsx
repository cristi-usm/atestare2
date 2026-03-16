import './Litere.css'

function Litere({ litere, litereGhicite, cuvant, laApasareLitera, jocTerminat }) {
    return (
        <div className="litereContainer">
            {litere.map((litera) => {

                let esteApasata = false;
                if (litereGhicite.includes(litera)) {
                    esteApasata = true;
                }

                let esteCorecta = false;
                if (esteApasata === true && cuvant.includes(litera)) {
                    esteCorecta = true;
                }

                let esteGresita = false;
                if (esteApasata === true && cuvant.includes(litera) === false) {
                    esteGresita = true;
                }

                let clasa = "literaBtn";
                if (esteCorecta === true) {
                    clasa = "literaBtn corecta";
                }
                if (esteGresita === true) {
                    clasa = "literaBtn gresita";
                }
                
                let esteDezactivat = false;
                if (esteApasata === true || jocTerminat === true) {
                    esteDezactivat = true;
                }

                return (
                    <button
                        key={litera}
                        className={clasa}
                        onClick={() => laApasareLitera(litera)}
                        disabled={esteDezactivat}
                    >
                        {litera}
                    </button>
                );
            })}
        </div>
    );
}

export default Litere;
