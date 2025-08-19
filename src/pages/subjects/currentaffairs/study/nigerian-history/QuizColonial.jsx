// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./colonialQuestions";

export const QuizColonial =() => {
  return (
    <QuizComponent 
      quizId="colonial_nigeria_quiz"
      questions={questions}
      quizTitle="Nigeria-History"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizColonial;