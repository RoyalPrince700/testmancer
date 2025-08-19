// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./nigerianLeaderQuestion";

export const QuizNigeriaLeaders =() => {
  return (
    <QuizComponent 
      quizId="nigerian_leaders_quiz"
      questions={questions}
      quizTitle="Nigerian Leaders"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizNigeriaLeaders;