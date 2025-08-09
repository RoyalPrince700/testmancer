import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiAward, FiCheck, FiX, FiBarChart2, FiHelpCircle, FiAlertTriangle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../../provider/AuthContext";
import { supabase } from "../../../supabase/supabaseClient";

const QuizComponent = ({ quizId, subject, topic, subtopic, backPath, questions }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPoints, setTotalPoints] = useState(0);
  const [rank, setRank] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isFirstAttempt, setIsFirstAttempt] = useState(true);
  const [pointsAwarded, setPointsAwarded] = useState(0);
  const [wasFirstAttempt, setWasFirstAttempt] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || !user) return;

    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        // Check quiz progress
        const { data: quizProgress, error: quizError } = await supabase
          .from('postutme_quiz_progress')
          .select('completed, attempts, best_score')
          .eq('user_id', user.id)
          .eq('quiz_id', quizId)
          .single();

        if (quizError && !quizError.message.includes('No rows found')) {
          throw quizError;
        }

        const attempts = quizProgress?.attempts || 0;
        setIsCompleted(quizProgress?.completed || false);
        setIsFirstAttempt(attempts === 0);
        setPointsAwarded(quizProgress?.best_score || 0);

        // Fetch leaderboard data
        const { data: leaderboardData, error: leaderboardError } = await supabase
          .from('leaderboard')
          .select('total_points, rank')
          .eq('user_id', user.id)
          .single();

        if (leaderboardError) throw leaderboardError;

        setTotalPoints(leaderboardData?.total_points || 0);
        setRank(leaderboardData?.rank || 0);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [isAuthenticated, user, quizId]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowHint(false);
    const currentAnswers = [...userAnswers];
    const wasCorrect = currentAnswers[currentQuestion]?.correct;
    currentAnswers[currentQuestion] = {
      questionId: questions[currentQuestion].id,
      selected: answer.text,
      correct: answer.correct,
    };
    setUserAnswers(currentAnswers);

    let newScore = score;
    if (wasCorrect) newScore -= 1;
    if (answer.correct) newScore += 1;
    setScore(newScore);
  };

  const nextQuestion = async () => {
    if (selectedAnswer === null) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowHint(false);
    } else {
      setWasFirstAttempt(isFirstAttempt);

      if (isAuthenticated && user) {
        try {
          const pointsToAward = isFirstAttempt ? score : 0;
          const isQuizCompleted = score / questions.length >= 0.7;

          await supabase
            .from('quiz_attempts')
            .insert({
              user_id: user.id,
              quiz_id: quizId,
              score: score,
              total_questions: questions.length,
              points_earned: pointsToAward,
              attempted_at: new Date().toISOString(),
              is_first_attempt: isFirstAttempt,
            });

          const { data: existingProgress } = await supabase
            .from('postutme_quiz_progress')
            .select('attempts, best_score')
            .eq('user_id', user.id)
            .eq('quiz_id', quizId)
            .single();

          const currentAttempts = existingProgress?.attempts || 0;
          const currentBestScore = existingProgress?.best_score || 0;

          await supabase
            .from('postutme_quiz_progress')
            .upsert(
              {
                user_id: user.id,
                quiz_id: quizId,
                completed: isQuizCompleted,
                first_completed_at: isQuizCompleted && !isCompleted ? new Date().toISOString() : undefined,
                last_attempt_at: new Date().toISOString(),
                best_score: Math.max(score, currentBestScore),
                attempts: currentAttempts + 1,
              },
              {
                onConflict: 'user_id,quiz_id',
              }
            );

          if (isFirstAttempt && pointsToAward > 0) {
            setTotalPoints((prev) => prev + pointsToAward);
            setPointsAwarded(pointsToAward);
          }

          let retryCount = 0;
          const maxRetries = 3;
          let leaderboardData = null;

          while (retryCount < maxRetries && !leaderboardData) {
            const { data, error } = await supabase
              .from('leaderboard')
              .select('total_points, rank')
              .eq('user_id', user.id)
              .single();

            if (error && !error.message.includes('No rows found')) {
              throw error;
            }

            if (data) {
              leaderboardData = data;
            } else {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              retryCount++;
            }
          }

          if (leaderboardData) {
            setTotalPoints(leaderboardData.total_points);
            setRank(leaderboardData.rank || 0);
          }

          setIsCompleted(isQuizCompleted);
          setIsFirstAttempt(false);
        } catch (error) {
          console.error("Error saving quiz progress:", error.message);
          alert("Failed to save quiz progress. Please try again.");
        }
      }
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1] || null);
      setShowHint(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setShowPreview(false);
    setShowHint(false);
    setUserAnswers([]);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {showResult && !showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative"
          >
            <button
              onClick={() => setShowResult(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>

            <div className="text-center py-4">
              <div className="inline-block bg-gradient-to-r from-green-500 to-green-700 rounded-full p-3 mb-4">
                <FiAward className="text-white text-3xl" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quiz Completed!</h3>

              <p className="text-gray-700 mb-6">
                You scored <span className="font-bold text-green-600">{score}/{questions.length}</span>!
                {wasFirstAttempt ? (
                  score > 0 ? (
                    <>
                      <br />
                      You've earned <span className="font-bold text-green-600">{score} points</span>!
                    </>
                  ) : (
                    <>
                      <br />
                      No points earned this time. Try again to improve your score!
                    </>
                  )
                ) : pointsAwarded > 0 ? (
                  <>
                    <br />
                    You've already earned <span className="font-bold text-green-600">{pointsAwarded} points</span> for this quiz on your first attempt.
                  </>
                ) : (
                  <>
                    <br />
                    Points are only awarded on first attempts.
                  </>
                )}
                {isCompleted && (
                  <>
                    <br />
                    You've completed the <span className="font-bold">{subtopic}</span> quiz!
                  </>
                )}
              </p>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setShowPreview(true)}
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-bold rounded-full px-6 py-3 hover:shadow-lg transition-shadow"
                >
                  View Answers
                </button>
                <button
                  onClick={restartQuiz}
                  className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-full px-6 py-3 hover:shadow-lg transition-shadow"
                >
                  Retry Quiz
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl w-full relative max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>

            <div className="py-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Quiz Answers & Explanations
              </h3>

              {questions.map((question, index) => (
                <div key={question.id} className="mb-6 p-4 bg-indigo-50 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Question {index + 1}: {question.text}
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Your Answer:</span> {userAnswers[index]?.selected || "Not answered"}
                    {userAnswers[index]?.correct ? (
                      <FiCheck className="inline ml-2 text-green-500" />
                    ) : (
                      <FiX className="inline ml-2 text-red-500" />
                    )}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Correct Answer:</span> {question.correctAnswer}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Explanation:</span> {question.explanation}
                  </p>
                </div>
              ))}

              <button
                onClick={restartQuiz}
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-bold rounded-full px-6 py-3 hover:shadow-lg transition-shadow mt-4"
              >
                Retry Quiz
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {!showResult && !showPreview && (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {!isFirstAttempt && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-yellow-100 rounded-xl flex items-center gap-3 border border-yellow-300"
            >
              <FiAlertTriangle className="text-yellow-600 text-xl" />
              <p className="text-gray-800">
                You have already taken the <span className="font-bold">{subtopic}</span> quiz. Points are only awarded on your first attempt.
              </p>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Link to={backPath} className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                <FiArrowLeft />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">
                {topic} Quiz: {subtopic}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full">
                <FiAward className="text-yellow-500" />
                <span className="font-bold">{totalPoints} pts</span>
              </div>
              <div className="flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full">
                <FiBarChart2 className="text-indigo-600" />
                <span className="font-bold">#{rank}</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-gray-600">Score: {score}</span>
              <span className="font-medium text-indigo-700">
                Answered: {userAnswers.filter((answer) => answer !== undefined).length}/{questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-3 rounded-full"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-indigo-100"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{questions[currentQuestion].text}</h2>
            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    selectedAnswer && selectedAnswer.id === option.id
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 hover:bg-teal-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-700">{option.id.toUpperCase()}.</span>
                    <span>{option.text}</span>
                  </div>
                </button>
              ))}
            </div>

            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6 p-4 bg-yellow-50 rounded-xl"
              >
                <p className="text-gray-700">
                  <span className="font-bold">Hint:</span> {questions[currentQuestion].hint}
                </p>
              </motion.div>
            )}
          </motion.div>

          <div className="flex justify-between items-center">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                currentQuestion === 0 ? "text-gray-400 cursor-not-allowed" : "text-teal-700 hover:bg-teal-50"
              }`}
            >
              <FiArrowLeft />
              Previous
            </button>

            <div className="flex gap-4">
              <motion.button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 text-black font-medium hover:shadow-lg transition-shadow animate-pulse"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiHelpCircle />
                {showHint ? "Hide Hint" : "Hint!"}
              </motion.button>

              <button
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
                className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                  selectedAnswer === null
                    ? "text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-teal-600 to-teal-800 text-white font-medium hover:shadow-lg transition-shadow"
                }`}
              >
                {currentQuestion < questions.length - 1 ? "Next" : "Finish Quiz"}
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;