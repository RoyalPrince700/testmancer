// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./cultureTradQuestion";

export const QuizCulture =() => {
  return (
    <QuizComponent 
      quizId="culture_quiz"
      questions={questions}
      quizTitle="Culture and Tradition in Nigeria"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizCulture;