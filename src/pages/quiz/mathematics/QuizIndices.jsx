import React from "react";
import QuizComponent from "../QuizComponent";
import questions from "../../subjects/mathematics/study/algebra/indicesQuestions";

const QuizIndices = () => {
  return (
    <QuizComponent 
      quizId="indices_quiz"
      questions={questions}
      quizTitle="Indices and Logarithms Quiz"
      backPath="/quiz-hub/mathematics"
    />
  );
};

export default QuizIndices;
