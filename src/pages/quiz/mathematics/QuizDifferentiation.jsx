import React from "react";
import QuizComponent from "../QuizComponent";
import questions from "../../subjects/mathematics/study/calculus/differentiationQuestions";

const QuizDifferentiation = () => {
  return (
    <QuizComponent 
      quizId="differentiation_quiz"
      questions={questions}
      quizTitle="Differentiation Quiz"
      backPath="/quiz-hub/mathematics"
    />
  );
};

export default QuizDifferentiation;
