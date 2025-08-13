// In your route component
import QuizComponent from "./QuizComponent";
import questions from "../../data/punctuationQuestions";

export const QuizPunctuation =() => {
  return (
    <QuizComponent 
      quizId="punctuation_quiz"
      questions={questions}
      quizTitle="Grammar Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizPunctuation;