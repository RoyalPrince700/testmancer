// In your route component
import QuizComponent from "../../../quiz/QuizComponent";
import questions from "./infiniteQuestion";

export const QuizInfinitive =() => {
  return (
    <QuizComponent 
      quizId="infinitive_quiz"
      questions={questions}
      quizTitle="Adverbial Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizInfinitive;