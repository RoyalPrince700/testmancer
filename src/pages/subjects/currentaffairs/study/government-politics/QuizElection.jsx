// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./electionQuestion";

export const QuizElection =() => {
  return (
    <QuizComponent 
      quizId="nigeria_elections_quiz"
      questions={questions}
      quizTitle="Government-And-Politics"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizElection;