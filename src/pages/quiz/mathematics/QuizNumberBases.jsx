import React from "react";
import QuizComponent from "../QuizComponent";
import questions from "../../subjects/mathematics/study/numbertheory/numberBasesQuestions";

const QuizNumberBases = () => {
  return (
    <QuizComponent 
      quizId="number_bases_quiz"
      questions={questions}
      quizTitle="Number Bases Quiz"
      backPath="/quiz-hub/mathematics"
    />
  );
};

export default QuizNumberBases;
