// In your route component
import QuizComponent from "./QuizComponent";
import questions from "../../data/sentenceQuestions";

export const QuizSentence =() => {
  return (
    <QuizComponent 
      quizId="sentence_quiz"
      questions={questions}
      quizTitle="Grammar Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizSentence;