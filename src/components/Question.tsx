'use client'

import React, { useEffect, useState } from 'react'
import OptionList from './OptionList';
import questions from '@/data/data';
import NextButton from './NextButton';

function FinishButton({ rightAnswers, wrongAnswers }: { rightAnswers: number, wrongAnswers: number, }) {
  const [isActive, setActive] = useState<boolean>(false);
  return (
    <>
      <div className='flex flex-row-reverse'>
        {!isActive && <button onClick={() => setActive(true)}
          className='lex cursor-pointer w-fit h-full p-2 rounded-2xl font-bold shadow-global bg-background'>
          FINISH
        </button>}
      </div>

      {
        isActive && <div data-testid="results" className='flex flex-col w-full justify-center gap-1'>
          <h3 className='font-bold'>Final results:</h3>
          <div data-testid="right-answers">Right:{rightAnswers}</div>
          <div data-testid="wrong-answers">Wrong:{wrongAnswers}</div>
        </div>
      }
    </>

  )
}

function getQuestionObj(questionNum: number) {
  return questions[questionNum - 1];
}

function Question() {
  const [userAnswer, handleClick] = useState<string>("");
  const [questionNum, changeQuestion] = useState<number>(1);
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);

  const hasAnswered = questions[questionNum - 1].options.every(o => o !== userAnswer);

  useEffect(() => {
    if (userAnswer === getQuestionObj(questionNum).correctAnswer) {
      setRightAnswers(prev => prev + 1);
    }
    else if (userAnswer !== "") {
      setWrongAnswers(prev => prev + 1);
    }

  }, [userAnswer])

  useEffect(() => {
    handleClick("");
  }, [questionNum]);



  return (
    <div className='bg-question flex flex-col items-center justify-center pt-4 pb-8 px-8 gap-4 w-fit h-fit min-w-100 max-w-100 rounded-2xl text-center'>
      <div className='flex gap-2'>
        <h2>Question {questionNum} of {questions.length}</h2>
      </div>
      <h3 className='font-bold text-wrap'>{questions[questionNum - 1].question}</h3>

      <OptionList handleClick={handleClick} userAnswer={userAnswer} rightAnswer={questions[questionNum - 1].correctAnswer} questionNumber={questionNum - 1} />

      <div className='flex flex-row-reverse just-end items-end w-full pt-5'>
        {userAnswer !== "" && !hasAnswered && questionNum < 5 && <NextButton changeQuestion={changeQuestion} />}

        {!hasAnswered && questionNum === 5 && <FinishButton rightAnswers={rightAnswers} wrongAnswers={wrongAnswers} />}
      </div>
    </div>
  )
}

export default Question