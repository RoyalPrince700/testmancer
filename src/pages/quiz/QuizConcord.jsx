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
import questions from "../../data/concordQuestions";
import { Hint } from "../../components/Hint"; // Assuming Hint.jsx is in the same directory

export const QuizConcord = ({ moduleId, subject, topic, subtopic, backPath }) => {
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
  const [hintsTaken, setHintsTaken] = useState({}); // Tracks hints taken per question

  // Confetti canvas
  const canvasRef = useRef(null);
  const confettiParticles = useRef([]);
  const confettiAnimating = useRef(false);

  useEffect(() => {
  if (!isAuthenticated || !user) {
    setIsLoading(false);
    return;
  }

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const { data: quizProgress, error: quizError } = await supabase
        .from("postutme_quiz_progress")
        .select("completed, attempts, best_score")
        .eq("user_id", user.id)
        .eq("quiz_id", subtopic)
        .single();

      if (quizError && !quizError.message.includes("No rows found")) {
        throw quizError;
      }

      const attempts = quizProgress?.attempts || 0;
      setIsCompleted(quizProgress?.completed || false);
      setIsFirstAttempt(attempts === 0);
      setPointsAwarded(quizProgress?.best_score || 0);

      // Fetch deductions to initialize hintsTaken
      const { data: deductionData, error: deductionError } = await supabase
        .from('point_deductions')
        .select('question_id')
        .eq('user_id', user.id)
        .eq('quiz_id', subtopic)
        .eq('reason', 'hint');

      if (deductionError && !deductionError.message.includes("No rows found")) {
        throw deductionError;
      }

      const takenHints = deductionData?.reduce((acc, d) => {
        const questionIndex = questions.findIndex(q => q.id === d.question_id);
        if (questionIndex !== -1) acc[questionIndex] = true;
        return acc;
      }, {}) || {};
      setHintsTaken(takenHints);

      const { data: leaderboardData, error: leaderboardError } = await supabase
        .from("leaderboard")
        .select("total_points, rank")
        .eq("user_id", user.id)
        .single();

      if (leaderboardError && !leaderboardError.message.includes("No rows found")) {
        throw leaderboardError;
      }

      setTotalPoints(leaderboardData?.total_points || 0);
      setRank(leaderboardData?.rank || 0);
    } catch (error) {
      console.error("Error fetching user data:", error?.message || error);
      toast.error("Failed to load user data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  fetchUserData();
}, [isAuthenticated, user, subtopic]);

  // Handle answer selection and local score update
  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    const answers = [...userAnswers];
    const prev = answers[currentQuestion];
    const wasPrevCorrect = prev?.correct || false;

    // Save current selection
    answers[currentQuestion] = {
      questionId: questions[currentQuestion].id,
      selected: option.text,
      correct: option.correct,
    };
    setUserAnswers(answers);

    // Update score (adjust if user changed answer)
    let newScore = score;
    if (wasPrevCorrect && !option.correct) newScore -= 1;
    if (!wasPrevCorrect && option.correct) newScore += 1;
    setScore(newScore);
  };

  const nextQuestion = async () => {
    if (!selectedAnswer) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((s) => s + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1] || null);
      return;
    }

    // Finish quiz
    const finished = true;
    setIsCompleted(finished);

    if (isAuthenticated && user) {
      try {
        const pointsToAward = isFirstAttempt ? score : 0;

        await supabase.from("quiz_attempts").insert({
          user_id: user.id,
          quiz_id: subtopic,
          score,
          total_questions: questions.length,
          points_earned: pointsToAward,
          attempted_at: new Date().toISOString(),
          is_first_attempt: isFirstAttempt,
        });

        // Upsert progress
        const { data: existingProgress } = await supabase
          .from("postutme_quiz_progress")
          .select("attempts, best_score")
          .eq("user_id", user.id)
          .eq("quiz_id", subtopic)
          .single();

        const currentAttempts = existingProgress?.attempts || 0;
        const currentBestScore = existingProgress?.best_score || 0;

        await supabase.from("postutme_quiz_progress").upsert(
          {
            user_id: user.id,
            quiz_id: subtopic,
            completed: finished,
            first_completed_at: finished && !isCompleted ? new Date().toISOString() : undefined,
            last_attempt_at: new Date().toISOString(),
            best_score: Math.max(score, currentBestScore),
            attempts: currentAttempts + 1,
          },
          { onConflict: "user_id,quiz_id" }
        );

        if (isFirstAttempt && pointsToAward > 0) {
          setTotalPoints((p) => p + pointsToAward);
          setPointsAwarded(pointsToAward);
        }

        // Refresh leaderboard (simple retry loop)
        let lb = null;
        let retries = 0;
        while (!lb && retries < 3) {
          const { data, error } = await supabase
            .from("leaderboard")
            .select("total_points, rank")
            .eq("user_id", user.id)
            .single();
          if (error && !error.message.includes("No rows found")) {
            throw error;
          }
          if (data) lb = data;
          else {
            await new Promise((r) => setTimeout(r, 800));
            retries += 1;
          }
        }

        if (lb) {
          setTotalPoints(lb.total_points || 0);
          setRank(lb.rank || 0);
        }

        setIsFirstAttempt(false);
      } catch (error) {
        console.error("Error saving quiz progress:", error?.message || error);
        alert("Failed to save quiz progress. Try again later.");
      }
    }

    // Show result modal and trigger confetti
    setShowResult(true);
    startConfetti();
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
  setHintsTaken({});  // Reset local hint state (deductions persist in DB)
};

  // ----- Lightweight canvas confetti (no external deps) -----
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
      p.vy += 0.12; // gravity
      p.rot += p.vr;
      p.life += 1;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }

    // Remove dead particles
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
        confettiParticles.current.push(...Array.from({ length:  24 }).map(() => createConfettiParticle(w, h)));
      }, 300);
    }

    // Auto stop after 6s
    setTimeout(() => {
      confettiParticles.current = [];
    }, 6000);
  };

  // Stop confetti when modal closed
  useEffect(() => {
    if (!showResult) {
      confettiParticles.current = [];
    }
  }, [showResult]);

  // ----- Render -----
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-teal-600 mx-auto mb-4"></div>
          <p className="text-teal-700 font-medium">Loading your progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-8">
      {/* Confetti canvas (absolute over entire area) */}
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 w-full h-full z-40"></canvas>

      {/* Result Modal */}
      {showResult && !showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-lg relative overflow-hidden"
          >
            <button
              onClick={() => setShowResult(false)}
              className="absolute top-4 right-4 text-teal-600 hover:text-teal-800"
            >
              <FiX size={22} />
            </button>

            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg mb-4">
                <FiAward className="text-white text-3xl" />
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">You completed the quiz 🎉</h3>
              <p className="text-gray-700 mb-4">
                Score: <span className="font-bold text-teal-700">{score}/{questions.length}</span>
              </p>

              <div className="grid grid-cols-1 gap-3 mt-4">
                <button
                  onClick={() => setShowPreview(true)}
                  className="w-full rounded-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold shadow-md hover:scale-102 transform transition-transform"
                >
                  View Answers
                </button>
                <button
                  onClick={restartQuiz}
                  className="w-full rounded-full px-6 py-3 bg-white border-2 border-teal-200 text-teal-700 font-semibold hover:bg-teal-50"
                >
                  Retry Quiz
                </button>
              </div>

              <div className="mt-5 text-sm text-gray-600">
                {isFirstAttempt ? (
                  score > 0 ? (
                    <>
                      You've earned <span className="font-bold text-teal-700">{score}</span> gems for your first attempt!
                    </>
                  ) : (
                    <>No gems earned this time. Try again to improve your score!</>
                  )
                ) : pointsAwarded > 0 ? (
                  <>You previously earned <span className="font-bold text-teal-700">{pointsAwarded}</span> gems for this quiz.</>
                ) : (
                  <>Points are only awarded on first attempts.</>
                )}
              </div>
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
                      <p className="text-sm text-gray-700 mt-1"><span className="font-bold">Explanation:</span> {q.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button onClick={restartQuiz} className="w-full rounded-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold">
                Retry Quiz
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Main Quiz UI */}
      {!showResult && !showPreview && (
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Previous attempts banner */}
          {!isFirstAttempt && (
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 bg-yellow-50 rounded-2xl flex items-center gap-3 border border-yellow-200">
              <FiAlertTriangle className="text-yellow-600" />
              <p className="text-sm text-gray-800">You have already taken <span className="font-semibold">{subtopic}</span>. Points are only awarded on first attempt.</p>
            </motion.div>
          )}

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Link to={backPath || "/quiz-hub/english/"} className="text-teal-600 hover:text-teal-800 p-2 rounded-full bg-white shadow-sm">
                <FiArrowLeft />
              </Link>
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">Concord Quiz</h1>
                <p className="text-sm text-gray-600">{subtopic}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-full shadow-sm border border-teal-50">
                <FiAward className="text-yellow-500" />
                <span className="font-semibold">{totalPoints} pts</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-full shadow-sm border border-teal-50">
                <FiBarChart2 className="text-teal-600" />
                <span className="font-semibold">#{rank}</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center text-sm mb-2">
              <div className="text-gray-600">Question <span className="font-semibold">{currentQuestion + 1}</span> of {questions.length}</div>
              <div className="text-gray-600">Score: <span className="font-semibold text-teal-700">{score}</span></div>
            </div>

            <div className="w-full bg-teal-100 rounded-full h-3 overflow-hidden">
              <div className="h-3 rounded-full bg-gradient-to-r from-teal-400 to-lime-400 transition-all" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
            </div>
          </div>

          {/* Question card */}
          <motion.div key={currentQuestion} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-xl p-6 mb-6 border-2 border-teal-50">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{questions[currentQuestion].text}</h2>
                <p className="text-sm text-gray-600">Pick the best answer — be quick to earn first-attempt gems!</p>
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-500">Answered</div>
                <div className="font-semibold text-teal-700">{userAnswers.filter(Boolean).length}/{questions.length}</div>
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
                        ? "bg-gradient-to-r from-teal-50 to-teal-100 border-teal-400 transform scale-101"
                        : "bg-white border-transparent hover:bg-teal-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold ${active ? "bg-teal-600 text-white" : "bg-teal-50 text-teal-700"}`}>
                        {option.id.toUpperCase()}
                      </div>
                      <div className="text-gray-800">{option.text}</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Hint Component */}
          <Hint
                questionHint={questions[currentQuestion].hint}
                userId={user?.id}
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
                isHintTaken={hintsTaken[currentQuestion] || false}
                setIsHintTaken={(value) => setHintsTaken((prev) => ({ ...prev, [currentQuestion]: value }))}
                quizId={subtopic}
                questionId={questions[currentQuestion].id}
                />
          </motion.div>

          {/* Nav actions */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-full ${currentQuestion === 0 ? "text-gray-400 bg-white/30 cursor-not-allowed" : "text-teal-700 bg-white shadow-sm hover:shadow-md"}`}
            >
              <FiArrowLeft />
              Previous
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={nextQuestion}
                disabled={!selectedAnswer}
                className={`flex items-center gap-2 px-5 py-3 rounded-full ${
                  !selectedAnswer ? "text-gray-400 bg-white/30 cursor-not-allowed" : "bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold shadow-md hover:shadow-lg"
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

export default QuizConcord;