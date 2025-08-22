import React from 'react'

function NextButton({ changeQuestion }:
  { changeQuestion: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <button className='flex cursor-pointer w-fit h-full p-2 rounded-2xl font-bold shadow-global bg-background' onClick={() => changeQuestion(prev => prev + 1)}>
      NEXT
    </button>
  )
}

export default NextButton