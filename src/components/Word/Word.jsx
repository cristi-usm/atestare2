export function Word({ word, correctLetter, win }) {
  return (
    <div className={`w-150 h-max flex gap-4 text-4xl font-['Times_New_Roman'] justify-center items-center ${win === true && 'text-green-600'} ${win === false &&  "text-red-600"}`}>
      {word.map((letter, index) => (correctLetter.includes(letter) || win === false )? <p key={index}>{letter}</p> : <p key={index}>_</p>
      )}
    </div>
  );
}

export default Word;
