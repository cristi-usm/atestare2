import styles from "./Litera.module.css";

function Litera({ letter, onclick, litereAlese }) {
  const literaApasata = litereAlese.includes(letter);
  return (
    <>
      <button
        className={styles.buton}
        onClick={() => onclick(letter)}
        disabled={literaApasata}
      >
        {letter}
      </button>
    </>
  );
}
export default Litera;
