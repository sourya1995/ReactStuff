import React from 'react'

const QuestionCard = ({index, onAnswer, question}) => {
  return (
    <>
        <div className='question'>
            <div className='question-number'>
                <span>Question {index + 1}</span>/{question.length}
            </div>
            <div className='question-text'>{question[index].questionText}</div>
        </div>

        <div className='answer'>
            {question[index].answerOptions.map((option) => {
                return (
                    <button className='options' onClick={() => onAnswer(option.isCorrect)} key={option.answerText}>
                        {option.answerText}
                    </button>
                )
            })}
        </div>
    </>
  )
}

export default QuestionCard