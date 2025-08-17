import React from "react";
import QuizComponent from "../QuizComponent";
import questions from "../../subjects/mathematics/study/numbertheory/setsVennDiagramsQuestions";

const QuizSetsVennDiagrams = () => {
  return (
    <QuizComponent 
      quizId="sets_venn_diagrams_quiz"
      questions={questions}
      quizTitle="Sets and Venn Diagrams Quiz"
      backPath="/quiz-hub/mathematics"
    />
  );
};

export default QuizSetsVennDiagrams;
