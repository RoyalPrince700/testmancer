// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./constitutionQuestion";

export const QuizConstitution =() => {
  return (
    <QuizComponent 
      quizId="nigeria_constitution_quiz"
      questions={questions}
      quizTitle="Government-And-Politics"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizConstitution;