import React from "react";
import QuizComponent from "../QuizComponent";
import questions from "../../subjects/mathematics/study/calculus/integrationQuestions";

const QuizIntegration = () => {
  return (
    <QuizComponent 
      quizId="integration_quiz"
      questions={questions}
      quizTitle="Integration Quiz"
      backPath="/quiz-hub/mathematics"
    />
  );
};

export default QuizIntegration;
