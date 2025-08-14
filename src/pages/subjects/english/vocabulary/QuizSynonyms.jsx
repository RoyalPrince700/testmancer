// In your route component
import QuizComponent from "../../../quiz/QuizComponent";
import questions from "./synonymsQuestion";

export const QuizSynonyms =() => {
  return (
    <QuizComponent 
      quizId="synonyms_quiz"
      questions={questions}
      quizTitle="Vocabulary Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizSynonyms;