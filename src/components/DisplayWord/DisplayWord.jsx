import "./DisplayWord.css"


export const DisplayWord = ({displayWord, randomWord}) => {



    return (
        <div className="display-word-container">
            <div className="`word-wrapper ${isComplete ? 'complete' : ''}`">
                {displayWord}
            </div>
            {randomWord && (
                <div className="hint-box">
                    <p className="hint-text"><strong className="hint-label">hint:</strong>
                        {randomWord.description}
                    </p>
                </div>
            )}
        </div>
    )
}