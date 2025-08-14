// In your route component
import QuizComponent from "../../../quiz/QuizComponent";
import questions from "./spellingQuestions";

export const QuizSpelling =() => {
  return (
    <QuizComponent 
      quizId="spelling_quiz"
      questions={questions}
      quizTitle="Oral Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizSpelling;