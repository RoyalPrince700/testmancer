// In your route component
import QuizComponent from "../../../quiz/QuizComponent";
import questions from "./participleQuestion";

export const QuizParticiple =() => {
  return (
    <QuizComponent 
      quizId="participial_quiz"
      questions={questions}
      quizTitle="Adverbial Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizParticiple;