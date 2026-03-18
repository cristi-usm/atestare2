import './Imagine.css'
import { stages } from '../../constants/stages';

function Imagine({gresit}){
    return(
        <>
            <h1>Joc Hangman</h1>
            <div className="imaginea">
                <img src={stages[gresit]} alt="Imaginea cu spanzuratoarea" />
            </div>
        </>
    )
}
export default Imagine;
