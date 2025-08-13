import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiAward,
  FiCheck,
  FiX,
  FiBarChart2,
  FiAlertTriangle,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../../provider/AuthContext";
import { supabase } from "../../../supabase/supabaseClient";
import { Hint } from "../../components/Hint";
import TestMancerLoader from "../../components/TestMancer";

export const QuizComponent = ({
  quizId,
  quizTitle,
  questions,
  backPath,
  themeColor = "teal",
  leaderboardTable = "leaderboard"
}) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPoints, setTotalPoints] = useState(0);
  const [rank, setRank] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isFirstAttempt, setIsFirstAttempt] = useState(true);
  const [pointsAwarded, setPointsAwarded] = useState(0);
  const [hintsTaken, setHintsTaken] = useState({});
  const [lockResult, setLockResult] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Confetti canvas
  const canvasRef = useRef(null);
  const confettiParticles = useRef([]);
  const confettiAnimating = useRef(false);

  // Confetti functions
  const createConfettiParticle = (w, h) => {
    const colors = ["#08A88A", "#18B6A6", "#FFD166", "#FF6B6B", "#7C3AED"];
    return {
      x: Math.random() * w,
      y: Math.random() * -40,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * 4 + 2,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.2,
      life: 0,
      ttl: 120 + Math.random() * 60,
    };
  };

  const drawConfetti = (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const particles = confettiParticles.current;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12;
      p.rot += p.vr;
      p.life += 1;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }

    confettiParticles.current = particles.filter((p) => p.life < p.ttl && p.y < h + 100);
  };

  const animateConfetti = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const w = (canvas.width = canvas.offsetWidth);
    const h = (canvas.height = canvas.offsetHeight);

    drawConfetti(ctx, w, h);
    if (confettiParticles.current.length > 0) {
      requestAnimationFrame(animateConfetti);
    } else {
      confettiAnimating.current = false;
    }
  };

  const startConfetti = () => {
    if (!canvasRef.current) return;
    const c = canvasRef.current;
    const w = c.offsetWidth;
    const h = c.offsetHeight;

    confettiParticles.current = Array.from({ length: 60 }).map(() => createConfettiParticle(w, h));
    if (!confettiAnimating.current) {
      confettiAnimating.current = true;
      animateConfetti();
      setTimeout(() => {
        confettiParticles.current.push(...Array.from({ length: 24 }).map(() => createConfettiParticle(w, h)));
      }, 300);
    }

    setTimeout(() => {
      confettiParticles.current = [];
    }, 6000);
  };

  useEffect(() => {
    if (!isAuthenticated || !user?.id || !quizId) {
      setIsLoading(false);
      return;
    }

    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        // ---- Fetch latest quiz progress ----
        const { data: progressData, error: progressError } = await supabase
          .from("postutme_quiz_progress")
          .select("completed, attempts, best_score")
          .eq("user_id", user.id)
          .eq("quiz_id", quizId)
          .limit(1);

        if (progressError) throw progressError;

        let attempts = 0;
        let bestScore = 0;
        let completed = false;

        if (progressData.length > 0) {
          attempts = Math.max(progressData[0].attempts || 0, 0);
          bestScore = progressData[0].best_score || 0;
          completed = progressData[0].completed || false;
        }

        setAttempts(attempts);
        setIsCompleted(completed);
        setIsFirstAttempt(attempts === 0);
        setPointsAwarded(0); // Only set on finish

        // ---- Fetch hint usage ----
        const { data: deductionData, error: deductionError } = await supabase
          .from("point_deductions")
          .select("question_id")
          .eq("user_id", user.id)
          .eq("quiz_id", quizId)
          .eq("reason", "hint");

        if (deductionError) throw deductionError;

        const takenHints =
          deductionData?.reduce((acc, d) => {
            const questionIndex = questions.findIndex(q => q.id === d.question_id);
            if (questionIndex !== -1) acc[questionIndex] = true;
            return acc;
          }, {}) || {};
        setHintsTaken(takenHints);

        // ---- Fetch leaderboard data ----
        const { data: leaderboardData, error: leaderboardError } = await supabase
          .from(leaderboardTable)
          .select("total_points, rank")
          .eq("user_id", user.id)
          .limit(1);

        if (leaderboardError) throw leaderboardError;

        if (leaderboardData.length > 0) {
  setTotalPoints(leaderboardData[0].total_points || 0);
  setRank(leaderboardData[0].rank || 0);
} 
      } catch (error) {
        console.error("Error fetching user data:", error?.message || error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [isAuthenticated, user?.id, quizId, leaderboardTable, questions]);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    const answers = [...userAnswers];
    const prev = answers[currentQuestion];
    const wasPrevCorrect = prev?.correct || false;

    answers[currentQuestion] = {
      questionId: questions[currentQuestion].id,
      selected: option.text,
      correct: option.correct,
    };
    setUserAnswers(answers);

    let newScore = score;
    if (wasPrevCorrect && !option.correct) newScore -= 1;
    if (!wasPrevCorrect && option.correct) newScore += 1;
    setScore(newScore);
  };

  // Only navigation, no awarding logic
  const nextQuestion = () => {
    if (!selectedAnswer) return;
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((s) => s + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1] || null);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion === 0) return;
    setCurrentQuestion((s) => s - 1);
    setSelectedAnswer(userAnswers[currentQuestion - 1] || null);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setShowPreview(false);
    setUserAnswers([]);
    setIsCompleted(false);
    setHintsTaken({});
    // Don't reset isFirstAttempt here - it should persist
  };

  // All awarding logic here, only called on finish
  const handleFinish = async () => {
    if (!selectedAnswer) return;

    const wasFirstAttempt = isFirstAttempt;
    const pointsToAward = wasFirstAttempt ? score : 0;

    try {
      if (isAuthenticated && user) {
        // Save attempt
        await supabase.from("quiz_attempts").insert({
          user_id: user.id,
          quiz_id: quizId,
          score,
          total_questions: questions.length,
          points_earned: pointsToAward,
          attempted_at: new Date().toISOString(),
          is_first_attempt: wasFirstAttempt,
        });

        // Update progress
        const { data: existingProgress } = await supabase
          .from("postutme_quiz_progress")
          .select("attempts, best_score")
          .eq("user_id", user.id)
          .eq("quiz_id", quizId)
          .single();

        await supabase.from("postutme_quiz_progress").upsert(
          {
            user_id: user.id,
            quiz_id: quizId,
            completed: true,
            first_completed_at: wasFirstAttempt ? new Date().toISOString() : undefined,
            last_attempt_at: new Date().toISOString(),
            best_score: Math.max(score, existingProgress?.best_score || 0),
            attempts: (existingProgress?.attempts || 0) + 1,
          },
          { onConflict: "user_id,quiz_id" }
        );

        // Update points if earned
        if (pointsToAward > 0) {
          setTotalPoints((p) => p + pointsToAward);
          setPointsAwarded(pointsToAward);
        } else {
          setPointsAwarded(0);
        }
      }
    } catch (error) {
      console.error("Error saving quiz progress:", error);
    } finally {
      setIsCompleted(true);
      setShowResult(true);
      setIsFirstAttempt(false);
      startConfetti();
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setShowPreview(false);
    setUserAnswers([]);
    setHintsTaken({});
  };

  useEffect(() => {
    if (!showResult) {
      confettiParticles.current = [];
    }
  }, [showResult]);

  if (isLoading) {
    return (
      <TestMancerLoader/>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-${themeColor}-50 to-white py-8`}>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 w-full h-full z-40"></canvas>

      {/* Result Modal */}
      

{showResult && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: 40 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="relative bg-white rounded-3xl shadow-2xl px-8 py-10 w-full max-w-md text-center border-4 border-teal-200"
    >
      <div className="flex flex-col items-center gap-2">
        <motion.div
          initial={{ rotate: -20, scale: 0.7 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="mb-2"
        >
          <span className="text-5xl">🎉</span>
        </motion.div>
        <h2 className="text-2xl font-extrabold text-teal-700 mb-1">Quiz Complete!</h2>
        <p className="text-lg text-gray-700 mb-2">
          You scored <span className="font-bold text-teal-600">{score}</span> out of <span className="font-bold">{questions.length}</span>
        </p>
        {pointsAwarded > 0 && (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 12 }}
            className="flex flex-col items-center mb-2"
          >
            <span className="text-3xl animate-bounce">💎</span>
            <span className="text-teal-700 font-bold text-lg mt-1">
              +{pointsAwarded} gems added!
            </span>
          </motion.div>
        )}
        {!pointsAwarded && (
          <div className="mb-2">
            <span className="text-gray-400 text-sm">No gems awarded on retry</span>
          </div>
        )}
        <div className="flex flex-col gap-2 mt-4 w-full">
          <button
            onClick={() => setShowPreview(true)}
            className="w-full py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold shadow hover:scale-105 transition"
          >
            View Answers
          </button>
          <button
            onClick={handleRetry}
            className="w-full py-3 rounded-full bg-white border-2 border-teal-400 text-teal-700 font-semibold shadow hover:bg-teal-50 transition"
          >
            Retry Quiz
          </button>
        </div>
        <button
          onClick={() => setShowResult(false)}
          className="absolute top-3 right-3 text-teal-400 hover:text-teal-700 text-2xl"
          aria-label="Close"
        >
          <FiX />
        </button>
      </div>
    </motion.div>
  </div>
)}

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-4xl relative max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 text-teal-600 hover:text-teal-800"
            >
              <FiX size={22} />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Answers & Explanations</h3>

            <div className="space-y-4">
              {questions.map((q, i) => (
                <div key={q.id} className="p-4 rounded-2xl bg-white border-2 border-teal-50 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{i + 1}. {q.text}</h4>
                      <p className="mt-2 text-sm text-gray-700">
                        <span className="font-bold">Your Answer:</span> {userAnswers[i]?.selected || "Not answered"}
                        {userAnswers[i]?.correct ? (
                          <FiCheck className="inline ml-2 text-teal-600" />
                        ) : (
                          <FiX className="inline ml-2 text-red-400" />
                        )}
                      </p>
                      <p className="text-sm text-gray-700 mt-1"><span className="font-bold">Correct:</span> {q.correctAnswer}</p>
                      {q.explanation && (
                        <p className="text-sm text-gray-700 mt-1"><span className="font-bold">Explanation:</span> {q.explanation}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button
                onClick={restartQuiz}
                className={`w-full rounded-full px-6 py-3 bg-gradient-to-r from-${themeColor}-500 to-${themeColor}-700 text-white font-semibold`}
              >
                Retry Quiz
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Main Quiz UI */}
      {!showResult && !showPreview && (
        <div className="container mx-auto px-4 max-w-3xl">
          {!isFirstAttempt && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-yellow-50 rounded-2xl flex items-center gap-3 border border-yellow-200"
            >
              <FiAlertTriangle className="text-yellow-600" />
              <p className="text-sm text-gray-800">
                You have already taken <span className="font-semibold">{quizTitle}</span>.
                Points are only awarded on first attempt.
              </p>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Link
                to={backPath}
                className={`text-${themeColor}-600 hover:text-${themeColor}-800 p-2 rounded-full bg-white shadow-sm`}
              >
                <FiArrowLeft />
              </Link>
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">{quizTitle}</h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className={`flex items-center justify-center gap-2 bg-white/60 px-3 py-2 rounded-full shadow-sm border border-${themeColor}-50`}>
                <span className="font-semibold">{totalPoints} gems</span>
                <span className="text-xl">💎</span>
              </div>
              <Link to={`/leaderboard`}
                className={`flex items-center gap-2 bg-white/60 px-3 py-2 rounded-full shadow-sm border border-${themeColor}-50`}>
                <FiBarChart2 className={`text-${themeColor}-600`} />
                <span className="font-semibold">#{rank}</span>
              </Link>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center text-sm mb-2">
              <div className="text-gray-600">
                Question <span className="font-semibold">{currentQuestion + 1}</span> of {questions.length}
              </div>
              <div className="text-gray-600">
                Score: <span className={`font-semibold text-${themeColor}-700`}>{score}</span>
              </div>
            </div>

            <div className={`w-full bg-${themeColor}-100 rounded-full h-3 overflow-hidden`}>
              <div
                className={`h-3 rounded-full bg-gradient-to-r from-${themeColor}-400 to-lime-400 transition-all`}
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-white rounded-3xl shadow-xl p-6 mb-6 border-2 border-${themeColor}-50`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {questions[currentQuestion].text}
                </h2>
                <p className="text-sm text-gray-600">
                  Pick the best answer — be quick to earn first-attempt gems!
                </p>
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-500">Answered</div>
                <div className={`font-semibold text-${themeColor}-700`}>
                  {userAnswers.filter(Boolean).length}/{questions.length}
                </div>
              </div>
            </div>

            <div className="grid gap-4 mt-6">
              {questions[currentQuestion].options.map((option) => {
                const active = selectedAnswer && selectedAnswer.id === option.id;
                return (
                  <motion.button
                    key={option.id}
                    onClick={() => handleAnswer(option)}
                    whileTap={{ scale: 0.98 }}
                    className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-3 ${
                      active
                        ? `bg-gradient-to-r from-${themeColor}-50 to-${themeColor}-100 border-${themeColor}-400 transform scale-101`
                        : "bg-white border-transparent hover:bg-teal-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold ${
                        active ? `bg-${themeColor}-600 text-white` : `bg-${themeColor}-50 text-${themeColor}-700`
                      }`}>
                        {option.id.toUpperCase()}
                      </div>
                      <div className="text-gray-800">{option.text}</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <Hint
              questionHint={questions[currentQuestion].hint}
              userId={user?.id}
              totalPoints={totalPoints}
              setTotalPoints={setTotalPoints}
              isHintTaken={hintsTaken[currentQuestion] || false}
              setIsHintTaken={(value) => setHintsTaken((prev) => ({ ...prev, [currentQuestion]: value }))}
              quizId={quizId}
              questionId={questions[currentQuestion].id}
            />
          </motion.div>

          <div className="flex items-center justify-between gap-4">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-full ${
                currentQuestion === 0
                  ? "text-gray-400 bg-white/30 cursor-not-allowed"
                  : `text-${themeColor}-700 bg-white shadow-sm hover:shadow-md`
              }`}
            >
              <FiArrowLeft />
              Previous
            </button>

            <div className="flex items-center gap-3">
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full ${
                    !selectedAnswer
                      ? "text-gray-400 bg-white/30 cursor-not-allowed"
                      : `bg-gradient-to-r from-${themeColor}-600 to-${themeColor}-800 text-white font-semibold shadow-md hover:shadow-lg`
                  }`}
                >
                  Next
                  <FiArrowRight />
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  disabled={!selectedAnswer}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full ${
                    !selectedAnswer
                      ? "text-gray-400 bg-white/30 cursor-not-allowed"
                      : `bg-gradient-to-r from-${themeColor}-600 to-${themeColor}-800 text-white font-semibold shadow-md hover:shadow-lg`
                  }`}
                >
                  Finish Quiz
                  <FiArrowRight />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;