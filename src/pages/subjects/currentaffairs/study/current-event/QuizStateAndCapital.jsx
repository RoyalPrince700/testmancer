// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./stateandCapitalQuestion";

export const QuizStateAndCapital =() => {
  return (
    <QuizComponent 
      quizId="state_and_capital_quiz"
      questions={questions}
      quizTitle="State and Capital"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizStateAndCapital;