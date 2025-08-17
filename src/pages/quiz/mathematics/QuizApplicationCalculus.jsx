import React from "react";
import QuizComponent from "../QuizComponent";
import questions from "../../subjects/mathematics/study/calculus/applicationCalculusQuestions";

const QuizApplicationCalculus = () => {
  return (
    <QuizComponent 
      quizId="application_calculus_quiz"
      questions={questions}
      quizTitle="Applications of Calculus Quiz"
      backPath="/quiz-hub/mathematics"
    />
  );
};

export default QuizApplicationCalculus;
