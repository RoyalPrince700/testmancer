// In your route component
import QuizComponent from "../../../quiz/QuizComponent";
import questions from "./comprehensionQuestions";

export const QuizComprehension =() => {
  return (
    <QuizComponent 
      quizId="comprehension_quiz"
      questions={questions}
      quizTitle="Comprehension Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizComprehension;