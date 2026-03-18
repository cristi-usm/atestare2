export default function Keyboard({letters,guessLetters,setWrongGuess,randomWord,setGuessLetters,isWinner,isLose}){
    return(
        <>
        <div className='keyboard'>
                    {letters.map((letter, index) => (
                        <button
                            className={`key ${guessLetters.includes(letter)
                                ? randomWord.includes(letter)
                                    ? "correct"
                                    : "wrong"
                                : ""
                                }`}
                            key={index}
                            onClick={() => {
                                setGuessLetters(prev => [...prev, letter]);

                                if (!randomWord.includes(letter)) {
                                    setWrongGuess(prev => prev + 1);
                                }
                            }}
                            disabled={guessLetters.includes(letter) || isWinner || isLose}
                        >
                            {letter}
                        </button>

                    ))}
                </div >
        </>
    )
}