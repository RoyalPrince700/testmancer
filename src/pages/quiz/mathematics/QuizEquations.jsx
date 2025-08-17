import React from "react";
import QuizComponent from "../QuizComponent";
import questions from "../../subjects/mathematics/study/algebra/equationQuestions";

const QuizEquations = () => {
  return (
    <QuizComponent 
      quizId="equations_quiz"
      questions={questions}
      quizTitle="Equations and Inequalities Quiz"
      backPath="/quiz-hub/mathematics"
    />
  );
};

export default QuizEquations;
