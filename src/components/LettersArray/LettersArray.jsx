
import  { letters } from "../../constants/letters"


export const LettersArray = ({guessedLetters, onLetterClick}) => {



    return (
        <div style={{gap: "5px" }}>
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
                            backgroundColor: isPressed ? "#ccc" : "black",
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