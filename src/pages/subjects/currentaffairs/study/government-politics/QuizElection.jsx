// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./electionQuestion";

export const QuizElection =() => {
  return (
    <QuizComponent 
      quizId="nigeria_elections_quiz"
      questions={questions}
      quizTitle="Elections in Nigeria"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizElection;