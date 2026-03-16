export function LetterBox({ children, onLetterClick, notAcctive }) {
  return (
    <button
      className={`w-9 h-14 bg-auto text-3xl font-['Times_New_Roman'] border border-gray-700/30 rounded-md ${notAcctive && "bg-neutral-100 text-neutral-400 cursor-not-allowed"}`}
      onClick={onLetterClick}
    >
      {children}
    </button>
  );
}

export default LetterBox;
