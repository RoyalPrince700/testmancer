// In your route component
import QuizComponent from "../../../quiz/QuizComponent";
import questions from "./adverbialQuestions";

export const QuizAdverbial =() => {
  return (
    <QuizComponent 
      quizId="modifiers_quiz"
      questions={questions}
      quizTitle="Adverbial Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizAdverbial;