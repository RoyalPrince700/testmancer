// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./politicalPartyQuestions";

export const QuizPoliticalParty =() => {
  return (
    <QuizComponent 
      quizId="nigeria_political_parties_quiz"
      questions={questions}
      quizTitle="Government-And-Politics"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizPoliticalParty;