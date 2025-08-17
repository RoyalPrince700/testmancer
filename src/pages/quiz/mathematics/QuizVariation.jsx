import React from "react";
import QuizComponent from "../QuizComponent";
import questions from "../../subjects/mathematics/study/algebra/variationQuestions";

const QuizVariation = () => {
  return (
    <QuizComponent 
      quizId="variation_quiz"
      questions={questions}
      quizTitle="Variation Quiz"
      backPath="/quiz-hub/mathematics"
    />
  );
};

export default QuizVariation;
