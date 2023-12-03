import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import QuestionCard from './QuestionCard/QuestionCard';
import { useState } from 'react';
import { questions } from './Data/QuestionData';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  
function onAnswer(isCorrect) {
  if(isCorrect) {
    setScore((preValue) => preValue + 1) //increase score
  }

  if(currentIndex === questions.length - 1) {
    setQuizFinished(true); //end of questions
  } else {
    setCurrentIndex((value) => value + 1); //proceed to next question
  }
}

const restartHandler = () => {
  setCurrentIndex(0);
  setQuizFinished(false);
  setScore(0);
}

  return (
    <>
      <Header />
      <main className = 'app'>
          {quizFinished? (
            <Result score={score} restartHandler={restartHandler} questions={questions} />
          ) : (
            <QuestionCard index = {currentIndex} question={questions} onAnswer={onAnswer} />
          )}
          
      </main>
    </>


  );
}

export default App;
