export default function Word({ randomWord, guessLetters, isLose }) {
    return (<>
        <div className='word'>
            {randomWord.split("").map((letter, index) => (
                <span key={index} className='letter' style={{
                    color: isLose
                        ? guessLetters.includes(letter)
                            ? "green"
                            : "red"
                        : "black"
                }}>
                    {guessLetters.includes(letter) || isLose ? letter : "_"}
                </span>
            ))}
        </div>

    </>
    )
}