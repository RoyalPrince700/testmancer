// In your route component
import QuizComponent from "../../../quiz/QuizComponent";
import questions from "./oralQuestion";

export const QuizOral =() => {
  return (
    <QuizComponent 
      quizId="oral_quiz"
      questions={questions}
      quizTitle="Oral Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizOral;