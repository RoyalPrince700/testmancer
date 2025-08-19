// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./unilorinQuestions";

export const QuizUnilorin =() => {
  return (
    <QuizComponent 
      quizId="unilorin_quiz"
      questions={questions}
      quizTitle="Unilorin History Quiz"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizUnilorin;