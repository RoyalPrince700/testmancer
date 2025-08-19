// In your route component
import QuizComponent from "../../../../../pages/quiz/QuizComponent";
import questions from "./worldLeadersQuestions";

export const QuizWorldLeader =() => {
  return (
    <QuizComponent 
      quizId="world_leader_quiz"
      questions={questions}
      quizTitle="World Leaders"
      backPath="/quiz-hub/current-affairs"
    />
  );
}

export default QuizWorldLeader;