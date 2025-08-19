// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./preColoQuestions";

export const QuizPreColo =() => {
  return (
    <QuizComponent 
      quizId="pre_colonial_nigeria_quiz"
      questions={questions}
      quizTitle="Pre Colonial Period"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizPreColo;