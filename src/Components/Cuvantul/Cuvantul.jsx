import './Cuvantul.css'

function Cuvantul({ cuvant, litereGhicite, jocTerminat }) {
    return (
        <div className="cuvantContainer">
            {cuvant.split("").map((litera, index) => {

                let esteGhicita = false;
                if (litereGhicite.includes(litera)) {
                    esteGhicita = true;
                }

                let esteNegasita = false;
                if (jocTerminat === true && esteGhicita === false) {
                    esteNegasita = true;
                }

                let afisam = "linie";
                if (esteGhicita === true) {
                    afisam = "linie corecta";
                }
                if (esteNegasita === true) {
                    afisam = "linie gresita";
                }

                let ceAfisam = " ";
                if (esteGhicita === true) {
                    ceAfisam = litera;
                }
                if (esteNegasita === true) {
                    ceAfisam = litera;
                }

                return (
                    <span key={index} className={afisam}>
                        {ceAfisam}
                    </span>
                );
            })}
        </div>
    );
}

export default Cuvantul;
