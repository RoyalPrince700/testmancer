// In your route component
import QuizComponent from "./QuizComponent";
import questions from "../../data/subjuctiveQuestions";

export const QuizSubjunctive =() => {
  return (
    <QuizComponent 
      quizId="subjunctive_quiz"
      questions={questions}
      quizTitle="Grammar Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizSubjunctive;