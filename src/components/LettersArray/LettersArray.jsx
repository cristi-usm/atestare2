
import  { letters } from "../../constants/letters"
import "./LettersArray.css"

export const LettersArray = ({guessedLetters, onLetterClick}) => {



    return (
        <div className="letters-container">
            {letters.map((l) => {
                const isPressed = guessedLetters.includes(l);

                return (
                    <button
                        key={l}
                        onClick={() => onLetterClick(l)}
                        disabled={isPressed} 
                        style={{
                            padding: "10px",
                            cursor: isPressed ? "not-allowed" : "pointer",
                            backgroundColor: isPressed ? "#ccc" : "#6A7282",
                            color: "white",
                            border: "none",
                            borderRadius: "4px"
                        }}
                    >
                        {l}
                    </button>
                );
            })}
        </div>
    )



}