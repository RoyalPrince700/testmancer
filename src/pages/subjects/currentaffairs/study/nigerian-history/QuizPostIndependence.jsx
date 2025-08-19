// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./postIndeQuestion";

export const QuizPostIndependence =() => {
  return (
    <QuizComponent 
      quizId="post_independence_nigeria_quiz"
      questions={questions}
      quizTitle="Nigeria-History"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizPostIndependence;