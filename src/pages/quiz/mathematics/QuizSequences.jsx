import React from "react";
import QuizComponent from "../QuizComponent";
import questions from "../../subjects/mathematics/study/algebra/sequenceQuestions";

const QuizSequences = () => {
  return (
    <QuizComponent 
      quizId="sequences_quiz"
      questions={questions}
      quizTitle="Sequences and Series Quiz"
      backPath="/quiz-hub/mathematics"
    />
  );
};

export default QuizSequences;
