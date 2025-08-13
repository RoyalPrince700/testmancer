// In your route component
import QuizComponent from "./QuizComponent";
import questions from "../../data/sentenceTypeQuestions";

export const QuizSentenceType =() => {
  return (
    <QuizComponent 
      quizId="sentence_types_quiz"
      questions={questions}
      quizTitle="Grammar Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizSentenceType;