import "./Litera.css";

function Litera({ litera, literaApasata, onClick, litereGhicite }) {
let apasat = litereGhicite.includes(litera);

  return (
    <>
    <button
      className={`literaBtn ${literaApasata ? "activ" : ""}`}
      onClick={() => onClick(litera)}
      disabled={apasat} 
    >
      {litera}
    </button>
    </>
  );
}
export default Litera;
