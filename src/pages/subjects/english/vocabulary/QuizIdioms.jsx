// In your route component
import QuizComponent from "../../../quiz/QuizComponent";
import questions from "./idiomsQuestion";

export const QuizIdioms =() => {
  return (
    <QuizComponent 
      quizId="idioms_quiz"
      questions={questions}
      quizTitle="Vocabulary Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizIdioms;