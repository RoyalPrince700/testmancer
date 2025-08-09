import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FiArrowLeft, FiArrowRight, FiAward, FiCheck, FiX,
  FiBarChart2, FiHelpCircle, FiAlertTriangle
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../provider/AuthContext";
import { supabase } from "../../supabase/supabaseClient";

const Quiz = ({
  quizId,
  title,
  backPath,
  questions,
  dbTables = {
    progressTable: "quiz_progress",
    attemptsTable: "quiz_attempts",
    leaderboardTable: "leaderboard"
  },
  awardPointsOnFirstAttempt = true
}) => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

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
          .from(dbTables.progressTable)
          .select('completed, attempts, best_score')
          .eq('user_id', user.id)
          .eq('quiz_id', quizId)
          .single();

        if (quizError && !quizError.message.includes('No rows found')) throw quizError;

        const attempts = quizProgress?.attempts || 0;
        setIsCompleted(quizProgress?.completed || false);
        setIsFirstAttempt(attempts === 0);
        setPointsAwarded(quizProgress?.best_score || 0);

        // Fetch leaderboard
        const { data: leaderboardData, error: leaderboardError } = await supabase
          .from(dbTables.leaderboardTable)
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
          const pointsToAward = (awardPointsOnFirstAttempt && isFirstAttempt) ? score : 0;
          const isQuizCompleted = score / questions.length >= 0.7;

          await supabase.from(dbTables.attemptsTable).insert({
            user_id: user.id,
            quiz_id: quizId,
            score,
            total_questions: questions.length,
            points_earned: pointsToAward,
            attempted_at: new Date().toISOString(),
            is_first_attempt: isFirstAttempt,
          });

          const { data: existingProgress } = await supabase
            .from(dbTables.progressTable)
            .select('attempts, best_score')
            .eq('user_id', user.id)
            .eq('quiz_id', quizId)
            .single();

          const currentAttempts = existingProgress?.attempts || 0;
          const currentBestScore = existingProgress?.best_score || 0;

          await supabase.from(dbTables.progressTable).upsert({
            user_id: user.id,
            quiz_id: quizId,
            completed: isQuizCompleted,
            first_completed_at: isQuizCompleted && !isCompleted ? new Date().toISOString() : undefined,
            last_attempt_at: new Date().toISOString(),
            best_score: Math.max(score, currentBestScore),
            attempts: currentAttempts + 1,
          }, { onConflict: 'user_id,quiz_id' });

          if (isFirstAttempt && pointsToAward > 0) {
            setTotalPoints(prev => prev + pointsToAward);
            setPointsAwarded(pointsToAward);
          }

          // Refresh leaderboard
          const { data: leaderboardData } = await supabase
            .from(dbTables.leaderboardTable)
            .select('total_points, rank')
            .eq('user_id', user.id)
            .single();

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Main Quiz */}
      {!showResult && !showPreview && (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {!isFirstAttempt && (
            <div className="mb-6 p-4 bg-yellow-100 rounded-xl flex items-center gap-3">
              <FiAlertTriangle className="text-yellow-600" />
              <p>You have already taken the <b>{title}</b> quiz. Points are only awarded on your first attempt.</p>
            </div>
          )}

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Link to={backPath} className="text-indigo-600 hover:text-indigo-800">
                <FiArrowLeft />
              </Link>
              <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full">
                <FiAward className="text-yellow-500" /> <span className="font-bold">{totalPoints} pts</span>
              </div>
              <div className="flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full">
                <FiBarChart2 className="text-indigo-600" /> <span className="font-bold">#{rank}</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-1">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>Score: {score}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-3 rounded-full"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}>
              </div>
            </div>
          </div>

          {/* Question */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-6">{questions[currentQuestion].text}</h2>
            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option)}
                  className={`p-4 rounded-xl border ${
                    selectedAnswer?.id === option.id ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:bg-teal-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{option.id.toUpperCase()}.</span>
                    <span>{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
            {showHint && (
              <div className="mt-6 p-4 bg-yellow-50 rounded-xl">
                <p><b>Hint:</b> {questions[currentQuestion].hint}</p>
              </div>
            )}
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6">
            <button onClick={prevQuestion} disabled={currentQuestion === 0} className="px-6 py-3 rounded-full">
              <FiArrowLeft /> Previous
            </button>
            <div className="flex gap-4">
              <button onClick={() => setShowHint(!showHint)} className="px-6 py-3 rounded-full bg-yellow-200">
                <FiHelpCircle /> {showHint ? "Hide Hint" : "Hint"}
              </button>
              <button
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
                className="px-6 py-3 rounded-full bg-teal-600 text-white"
              >
                {currentQuestion < questions.length - 1 ? "Next" : "Finish"} <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz; 