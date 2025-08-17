import React from "react";
import QuizComponent from "../QuizComponent";
import questions from "../../subjects/mathematics/study/numbertheory/modularArithmeticQuestions";

const QuizModularArithmetic = () => {
  return (
    <QuizComponent 
      quizId="modular_arithmetic_quiz"
      questions={questions}
      quizTitle="Modular Arithmetic Quiz"
      backPath="/quiz-hub/mathematics"
    />
  );
};

export default QuizModularArithmetic;
