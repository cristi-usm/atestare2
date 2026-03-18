import Litera from "../Litere/index.jsx";
import letters from "../../constants/letters.js";
import styles from "./Tastatura.module.css";

function Tastatura({ onClikLitera, litereAlese, gresit, restart }) {
  return (
    <>
      {gresit < 7 ? (
        <div className={styles.root}>
          {letters.map((l) => (
            <Litera
              onclick={onClikLitera}
              key={l}
              letter={l}
              litereAlese={litereAlese}
            />
          ))}
        </div>
      ) : (
        <button className={styles.restartButton} onClick={restart}>
          Restart
        </button>
      )}
    </>
  );
}
export default Tastatura;
