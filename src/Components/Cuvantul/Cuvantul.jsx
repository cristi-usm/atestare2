import './Cuvantul.css'

function Cuvantul({ fiecareCuvint, litereGhicite , jocTerminat}) {
  return (
    <div className="cuvant">
      {fiecareCuvint.split("").map((litera, index) => (
        <span key={index} className={`linie ${litereGhicite.includes(litera) ? 'ghicita' : jocTerminat ? 'neghicita' :''}`}>
         {litereGhicite.includes(litera) || jocTerminat ? litera : "_"}
        </span>
      ))}
    </div>
  );
}
export default Cuvantul;
