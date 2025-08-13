// In your route component
import QuizComponent from "./QuizComponent";
import questions from "../../data/realQuestions";

export const QuizReal =() => {
  return (
    <QuizComponent 
      quizId="real_quiz"
      questions={questions}
      quizTitle="Grammar Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizReal;