const Result = ({score, questions, restartHandler}) => {
    const showConfetti = score > 7 ? <Confetti /> : null;

    return (
        <>
         {showConfetti}
         <div className="finalScore">
            You scored <strong>{score}</strong> out of {questions.length} questions
         </div>

         <button onClick={restartHandler} className="restart">
            RESTART{" "}
         </button>
        </>
    )
}

export default Result;