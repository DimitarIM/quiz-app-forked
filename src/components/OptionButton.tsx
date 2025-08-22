import React, { useEffect, useState } from 'react'

function OptionButton({ option, handleClick, userAnswer, rightAnswer }:
  { option: string, handleClick: React.Dispatch<React.SetStateAction<string>>, userAnswer: string | null, rightAnswer: string }) {
  const [btnClass, setClass] = useState<string>("")

  useEffect(() => {
    setClass("");
  }, [option]);
  
  const buttonLogic = () => {
    handleClick(option);
    setClass(option === rightAnswer ? "right" : "wrong");
  }

  return (
    <button data-testid="option-button" disabled={userAnswer !== ""}
      onClick={() => buttonLogic()}
      className={`flex cursor-pointer w-full h-full p-3 bg-foreground shadow-global rounded-2xl px-5 ${btnClass}`}>
      {option}
    </button>
  )
}

export default OptionButton