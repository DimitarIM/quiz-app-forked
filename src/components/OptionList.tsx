import React from 'react'
import questions from '@/data/data'
import OptionButton from './OptionButton'

function OptionList({ handleClick, userAnswer, rightAnswer, questionNumber }
  : {
    handleClick: React.Dispatch<React.SetStateAction<string>>,
    userAnswer: string | null,
    rightAnswer: string,
    questionNumber: number
  }) {
  const { options } = questions[questionNumber];
  return (
    <div className='flex flex-col w-full  gap-6'>
      {options.map((option, index) => (
        <OptionButton key={index} option={option} handleClick={handleClick} userAnswer={userAnswer} rightAnswer={rightAnswer} />
      ))}
    </div>
  )
}

export default OptionList