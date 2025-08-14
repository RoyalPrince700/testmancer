// In your route component
import QuizComponent from "../../../quiz/QuizComponent";
import questions from "./wordMeaningQuestion";

export const QuizWordMeaning =() => {
  return (
    <QuizComponent 
      quizId="word_meanings_quiz"
      questions={questions}
      quizTitle="Vocabulary Master Quiz"
      backPath="/quiz-hub/english"
    />
  );
}

export default QuizWordMeaning;