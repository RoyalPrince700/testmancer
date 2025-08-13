// In your route component
import QuizComponent from "./QuizComponent";
import questions from "../../data/questionTagsQuestions";

export const QuizQuestionTag =() => {
  return (
    <QuizComponent 
      quizId="question_tags_quiz"
      questions={questions}
      quizTitle="Grammar Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizQuestionTag;