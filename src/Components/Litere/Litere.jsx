import './Litere.css'
import Litera from '../Litera/Litera';
import {letters} from '../../constants/letters';

function Litere({ onClick, gresit, handleClick, litereGhicite }) {
    return gresit < 7 ? (
        <div className="litere">
            {letters.map((litera) => (
                <Litera key={litera}  litera={litera} litereGhicite={litereGhicite} onClick={() => onClick(litera)} />
            ))}
        </div>
    ): (<div><button className="btnDinNou" onClick={handleClick}>Apasa din nou</button></div>)}
    
export default Litere;
