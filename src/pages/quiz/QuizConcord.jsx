// In your route component
import QuizComponent from "./QuizComponent";
import questions from "../../data/concordQuestions";

export const QuizConcord =() => {
  return (
    <QuizComponent 
      quizId="concord_quiz"
      questions={questions}
      quizTitle="Grammar Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizConcord;