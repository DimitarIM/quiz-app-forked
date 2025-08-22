import React from 'react'

function NextButton({ changeQuestion }:
  { changeQuestion: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <button className='flex cursor-pointer w-full h-full p-4 rounded-2xl font-bold shadow-global' onClick={() => changeQuestion(prev => prev + 1)}>
      NEXT
    </button>
  )
}

export default NextButton