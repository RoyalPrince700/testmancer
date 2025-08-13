// src/pages/QuizPage.jsx
import { useParams } from "react-router-dom";
import QuizComponent from "../components/QuizComponent";
import englishQuizTopics from "../data/englishQuizTopics";

// Import all quiz data files
import tensesQuestions from "../data/quizzes/tensesQuestions";
import concordQuestions from "../data/quizzes/concordQuestions";
// ... import other quiz data files

const quizDataMap = {
  tenses_quiz: tensesQuestions,
  concord_quiz: concordQuestions,
  sentence_structure_quiz: sentenceStructureQuestions,
  // Add other quiz IDs here
};

const QuizPage = () => {
  const { quizId } = useParams();
  
  // Find quiz metadata
  const quizMeta = englishQuizTopics.flatMap(topic => 
    topic.subtopics.filter(sub => sub.quizId === quizId)
  )[0];

  // Get quiz questions
  const questions = quizDataMap[quizId] || [];

  if (!quizMeta || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Quiz Not Found</h1>
          <p className="text-gray-600">The requested quiz could not be loaded.</p>
        </div>
      </div>
    );
  }

  return (
    <QuizComponent 
      quizId={quizId}
      questions={questions}
      quizTitle={quizMeta.name}
      backPath="/quiz-hub/english"
    />
  );
};

export default QuizPage;