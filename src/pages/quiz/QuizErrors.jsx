// In your route component
import QuizComponent from "./QuizComponent";
import questions from "../../data/errorQuestions";

export const QuizError =() => {
  return (
    <QuizComponent 
      quizId="errors_quiz"
      questions={questions}
      quizTitle="Grammar Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizError;