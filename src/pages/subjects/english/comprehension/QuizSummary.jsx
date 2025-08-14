// In your route component
import QuizComponent from "../../../quiz/QuizComponent";
import questions from "./summarySkillQuestion";

export const QuizSummary =() => {
  return (
    <QuizComponent 
      quizId="summary_quiz"
      questions={questions}
      quizTitle="Comprehension Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizSummary;