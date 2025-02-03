import React, { useState, useEffect } from "react";

const quizData = {
  easy: [
    {
      type: "multiple-choice",
      question: "Which of the following is a JavaScript framework?",
      options: ["React", "CSS", "HTML", "Python"],
      correctAnswer: "React",
    },
    {
      type: "true-false",
      question: "JavaScript is a compiled language.",
      correctAnswer: "false",
    },
    {
      type: "text-input",
      question: "What does DOM stand for?",
      correctAnswer: "Document Object Model",
    },
  ],
  medium: [
    {
      type: "multiple-choice",
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Google", "Oracle"],
      correctAnswer: "Netscape",
    },
    {
      type: "true-false",
      question: "JavaScript supports automatic memory management.",
      correctAnswer: "true",
    },
    {
      type: "text-input",
      question: "What keyword is used to define a constant in JavaScript?",
      correctAnswer: "const",
    },
  ],
  hard: [
    {
      type: "multiple-choice",
      question:
        "Which method is used to add an element to the end of an array in JavaScript?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
    },
    {
      type: "true-false",
      question: "JavaScript is single-threaded.",
      correctAnswer: "true",
    },
    {
      type: "text-input",
      question:
        "What is the result of 0.1 + 0.2 === 0.3 in JavaScript?",
      correctAnswer: "false",
    },
  ],
};

const QuizGame = () => {

  const [level, setLevel] = useState("easy");
  const [questions, setQuestions] = useState(quizData.easy);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  useEffect(() => {
    setQuestions(quizData[level]);
    setCurrentIndex(0);
    setIsAnswered(false);
    setUserAnswer("");
  }, [level]);

  const handleSubmit = () => {
    const currentQuestion = questions[currentIndex];
    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const normalizedCorrectAnswer = currentQuestion.correctAnswer.trim().toLowerCase();

    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      const points = level === "easy" ? 10 : level === "medium" ? 20 : 30;
      setScore((prevScore) => prevScore + points);
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Wrong! Correct answer: ${currentQuestion.correctAnswer}`);
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setFeedback("");
      setUserAnswer("");
      setIsAnswered(false);
    } else {
      if (level === "easy") {
        setLevel("medium");
      } else if (level === "medium") {
        setLevel("hard");
      } else {
        setGameFinished(true);
      }
    }
  };

  if (gameFinished) {
    return (
      <div>
        <h2>Congratulations! You have completed the quiz.</h2>
        <p>Your final score: {score}</p>
      </div>
    );
  }

  if (!questions.length) return <h2>Loading...</h2>;

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <h2>Level: {level.toUpperCase()}</h2>
      <h3>{currentQuestion.question}</h3>

      {currentQuestion.type === "multiple-choice" && (
        <div>
          {currentQuestion.options.map((option, idx) => (
            <label
              key={idx}
              style={{
                display: "block",
                color: isAnswered
                  ? option === currentQuestion.correctAnswer
                    ? "green"
                    : option === userAnswer
                    ? "red"
                    : "black"
                  : "black",
              }}
            >
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={isAnswered}
                checked={userAnswer === option}
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {currentQuestion.type === "true-false" && (
        <div>
          {["true", "false"].map((option, idx) => (
            <label
              key={idx}
              style={{
                display: "block",
                textTransform: "capitalize",
                color: isAnswered
                  ? option === currentQuestion.correctAnswer
                    ? "green"
                    : option === userAnswer
                    ? "red"
                    : "black"
                  : "black",
              }}
            >
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={isAnswered}
                checked={userAnswer === option}
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {currentQuestion.type === "text-input" && (
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={isAnswered}
          placeholder="Type your answer here"
        />
      )}

      {!isAnswered ? (
        <button
          style={{
            marginTop: "20px",
            color: "white",
            backgroundColor: userAnswer.trim() ? "green" : "black",
            fontSize: "15px",
          }}
          onClick={handleSubmit}
          disabled={!userAnswer.trim()}
        >
          Submit
        </button>
      ) : (
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            marginTop: "20px",
            fontSize: "15px",
          }}
          onClick={handleNext}
        >
          Next
        </button>
      )}

      <p style={{ marginTop: "20px" }}>{feedback}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default QuizGame;
