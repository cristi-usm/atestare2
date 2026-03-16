import { LetterBox } from "../LetterBox";

export function Keyboard({
  letterArr,
  onLetterClick,
  hideKeyboard,
  onButtonClick,
}) {
  return hideKeyboard ? (
    <button
      className={`bg-neutral-200 text-3xl font-['Times_New_Roman'] border border-gray-700/30 rounded-md p-1.5`}
      onClick={onButtonClick}
    >
      TRY AGAIN
    </button>
  ) : (
    <div className={`w-150 h-max flex flex-wrap gap-8 justify-center`}>
      {letterArr.map((letter) => (
        <LetterBox
          key={letter.letter}
          onLetterClick={() => onLetterClick(letter.letter)}
          notAcctive={letter.disabled}
        >
          {letter.letter}
        </LetterBox>
      ))}
    </div>
  );
}

export default Keyboard;
