 import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiEdit,
  FiBookOpen,
  FiMessageSquare,
  FiVolume2,
  FiBook,
  FiChevronDown,
  FiChevronUp,
  FiAward,
  FiBarChart2,
  FiUser,
  FiArrowRight,
  FiLoader,
  FiZap,
  FiLock,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../../provider/AuthContext";
import { supabase } from "../../../supabase/supabaseClient";
import { englishQuizTopics } from "../../data/englishQuizTopics";
import GamifiedButton from "../../components/GamifiedButton";
import QuizTipAndBadge from "../../components/QuizTipAndBadge";
import WelcomeCard from "../../components/WelcomeCard";
import TestMancerLoader from "../../components/TestMancer";

// Color theme mapping
const colorMap = [
  { bg: 'bg-teal-500', text: 'text-teal-500', border: 'border-teal-500', gradient: 'from-teal-400 to-teal-600' },
  { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500', gradient: 'from-pink-400 to-pink-600' },
  { bg: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-500', gradient: 'from-yellow-400 to-amber-500' },
  { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500', gradient: 'from-purple-400 to-indigo-500' },
  { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500', gradient: 'from-orange-400 to-orange-500' }
];

export const EnglishQuiz = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [userStats, setUserStats] = useState({
    points: 0,
    rank: 0,
    completedQuizzes: 0,
  });
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [showLockedModal, setShowLockedModal] = useState(null);
  const [showSubtopicLockedModal, setShowSubtopicLockedModal] = useState(null);
  const [completedLearningSubtopics, setCompletedLearningSubtopics] = useState({});
  const [showBanner, setShowBanner] = useState(true); // State for unlock banner

  const iconComponents = {
    FiEdit,
    FiBookOpen,
    FiMessageSquare,
    FiVolume2,
    FiBook,
  };

  const initialTopics = englishQuizTopics.map((topic, index) => ({
    ...topic,
    icon: iconComponents[topic.icon] || FiBook,
    color: colorMap[index % colorMap.length], // Assign unique color theme
    subtopics: topic.subtopics.map((subtopic) => ({
      ...subtopic,
      completed: false,
      bestScore: 0,
      attempts: 0,
      pointsEarned: 0,
    })),
  }));

  const userProgress = useMemo(() => {
    const completed = topics.reduce((sum, topic) => sum + topic.completed, 0);
    const total = topics.reduce((sum, topic) => sum + topic.total, 0);
    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  }, [topics]);

  const isTopicUnlocked = useCallback(
    (index) => {
      if (index === 0) return true;
      const prevTopic = topics[index - 1];
      return prevTopic.completed === prevTopic.total;
    },
    [topics]
  );

  // Dismiss banner and remember in localStorage
  const dismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem('englishQuizBannerDismissed', 'true');
  };

  // Check if banner was previously dismissed
  useEffect(() => {
    const isDismissed = localStorage.getItem('englishQuizBannerDismissed') === 'true';
    setShowBanner(!isDismissed);
  }, []);

  const fetchCompletedLearningSubtopics = async (userId) => {
    const { data, error } = await supabase
      .from('postutme_progress')
      .select('topic, subtopic')
      .eq('user_id', userId)
      .eq('subject', 'English');

    if (!error && data) {
      const completedMap = {};
      data.forEach(item => {
        if (!completedMap[item.topic]) {
          completedMap[item.topic] = new Set();
        }
        completedMap[item.topic].add(item.subtopic);
      });
      setCompletedLearningSubtopics(completedMap);
    }
  };

  const isLearningSubtopicCompleted = (topicId, subtopicName) => {
    return completedLearningSubtopics[topicId]?.has(subtopicName) || false;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let updatedStats = {
          points: 0,
          rank: 0,
          completedQuizzes: 0,
        };

        if (isAuthenticated && user) {
          await fetchCompletedLearningSubtopics(user.id);

          const [
            { data: profile, error: profileError },
            { data: leaderboard, error: lbError },
            { data: quizProgress, error: quizProgressError },
          ] = await Promise.all([
            supabase.from("profiles").select("full_name").eq("id", user.id).single(),
            supabase.from("leaderboard").select("total_points, rank").eq("user_id", user.id).single(),
            supabase.from("postutme_quiz_progress").select("quiz_id, completed, best_score, attempts").eq("user_id", user.id),
          ]);

          if (profile?.full_name) {
            setFirstName(profile.full_name.split(" ")[0] || "Champion");
          }

          if (leaderboard) {
            updatedStats.points = leaderboard.total_points || 0;
            updatedStats.rank = leaderboard.rank || 0;
          }

          const quizProgressMap = {};
          if (quizProgress) {
            quizProgress.forEach((progress) => {
              quizProgressMap[progress.quiz_id] = progress;
            });
            updatedStats.completedQuizzes = quizProgress.filter((p) => p.completed).length;
          }

          const { data: quizAttemptsData } = await supabase
            .from("quiz_attempts")
            .select("quiz_id, points_earned, total_questions")
            .eq("user_id", user.id)
            .eq("is_first_attempt", true);

          const quizPointsMap = {};
          if (quizAttemptsData) {
            quizAttemptsData.forEach((attempt) => {
              quizPointsMap[attempt.quiz_id] = {
                pointsEarned: attempt.points_earned || 0,
                totalQuestions: attempt.total_questions || 10,
              };
            });
          }

          const topicsWithProgress = initialTopics.map((topic) => {
            const subtopicsWithStatus = topic.subtopics.map((subtopic) => {
              const progress = quizProgressMap[subtopic.quizId];
              const pointsData = quizPointsMap[subtopic.quizId] || {};
              const isCompleted = progress?.completed || false;
              return {
                ...subtopic,
                completed: isCompleted,
                bestScore: progress?.best_score
                  ? Math.round((progress.best_score / (pointsData.totalQuestions || 10)) * 100)
                  : 0,
                attempts: progress?.attempts || 0,
                pointsEarned: pointsData.pointsEarned || 0,
              };
            });

            const completedSubtopics = subtopicsWithStatus.filter((subtopic) => subtopic.completed);
            return {
              ...topic,
              completed: completedSubtopics.length,
              total: topic.subtopics.length,
              subtopics: subtopicsWithStatus,
            };
          });

          setUserStats(updatedStats);
          setTopics(topicsWithProgress);
        } else {
          setTopics(
            initialTopics.map((t) => ({
              ...t,
              completed: 0,
              total: t.subtopics.length,
              subtopics: t.subtopics.map((s) => ({
                ...s,
                completed: false,
                bestScore: 0,
                attempts: 0,
                pointsEarned: 0,
              })),
            }))
          );
        }
      } catch (error) {
        console.error("Unexpected error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isAuthenticated, user]);

  const toggleTopic = (index) => {
    if (isTopicUnlocked(index)) {
      setExpandedTopic(expandedTopic === index ? null : index);
    } else {
      setShowLockedModal(index);
    }
  };

  const calculatePercentage = (completed, total) => {
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  const handleQuizStart = (subtopic) => {
    const isUnlocked = subtopic.completed || isLearningSubtopicCompleted(subtopic.topicId, subtopic.name);
    if (isUnlocked) {
      navigate(subtopic.path);
    } else {
      setShowSubtopicLockedModal(subtopic.name);
    }
  };

  const handlePracticeAll = (topic) => {
    const allCompleted = topic.subtopics.every(subtopic => 
      subtopic.completed || isLearningSubtopicCompleted(topic.id, subtopic.name)
    );
    
    if (allCompleted) {
      navigate(`/english-quiz/${topic.id}`);
    } else {
      setShowSubtopicLockedModal("all quizzes in this topic");
    }
  };

  const LockedTopicModal = ({ topicIndex }) => {
    const prevTopic = topics[topicIndex - 1];
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div className="bg-white rounded-2xl p-6 max-w-md mx-auto text-center shadow-lg">
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: 2, duration: 0.5 }} className="text-4xl mb-4">
            🔒
          </motion.div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Whoa, {firstName}! This Topic is Locked! 🚀
          </h3>
          <p className="text-gray-500 mb-4">
            Complete <span className="font-semibold text-teal-500">{prevTopic.title}</span> first!
          </p>
          <button
            onClick={() => setShowLockedModal(null)}
            className="bg-gradient-to-r from-teal-400 to-teal-600 text-white font-medium rounded-full px-6 py-2"
          >
            Got It!
          </button>
        </div>
      </motion.div>
    );
  };

  const LockedSubtopicModal = ({ subtopicName, onClose }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-2xl p-6 max-w-md mx-auto text-center shadow-lg">
        <div className="text-4xl mb-4">🔒</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          Quiz Locked
        </h3>
        <p className="text-gray-500 mb-4">
          Complete the <span className="font-semibold text-teal-500">
            {subtopicName}
          </span> learning module first to unlock this quiz.
        </p>
        <div className="mb-6">
          <Link 
            to="/post-utme/english" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-medium rounded-full px-6 py-2"
            onClick={onClose}
          >
            <FiBookOpen /> Study Now
          </Link>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 underline text-sm"
        >
          I'll do it later
        </button>
      </div>
    </motion.div>
  );

  if (loading) {
    return <TestMancerLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Locked Quizzes Banner */}
        <AnimatePresence>
          {showBanner && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 text-white flex flex-wrap items-center justify-between gap-3 mb-8"
            >
              <div className="flex items-start gap-3">
                <FiLock className="text-2xl mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Unlock Quizzes by Studying First</h3>
                  <p className="text-sm opacity-90 max-w-3xl">
                    Each quiz is locked until you complete the corresponding learning module. 
                    Head to the study page to unlock quizzes.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  to="/post-utme/english" 
                  className="bg-white text-blue-600 font-medium rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition flex items-center gap-2"
                  onClick={dismissBanner}
                >
                  <FiBookOpen /> Study English Now
                </Link>
                <button 
                  onClick={dismissBanner}
                  className="text-white hover:text-gray-200 p-2 rounded-full hover:bg-white/10 transition"
                  aria-label="Dismiss banner"
                >
                  <FiX className="text-xl" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-8">
          {topics.map((topic, index) => {
            const completionPercentage = calculatePercentage(topic.completed, topic.total);
            const isTopicCompleted = topic.completed === topic.total;
            const isUnlocked = isTopicUnlocked(index);
            const theme = topic.color;

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 relative ${!isUnlocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                whileHover={{ scale: isUnlocked ? 1.02 : 1 }}
                onClick={() => toggleTopic(index)}
                aria-label={`Toggle ${topic.title} subtopics`}
              >
                {isTopicCompleted && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                    className={`absolute top-4 right-4 ${theme.bg} rounded-full p-2 shadow-md border ${theme.border}`}
                    title="Topic Mastered!"
                  >
                    <FiAward className="text-white text-xl" />
                  </motion.div>
                )}
                {!isUnlocked && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                    className={`absolute top-4 left-4 ${theme.bg} rounded-full p-2 shadow-md border ${theme.border}`}
                    title="Topic Locked"
                  >
                    <FiLock className="text-white text-xl" />
                  </motion.div>
                )}
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                    <div className="flex items-start gap-3">
                      <div className={`bg-gradient-to-br ${theme.gradient} rounded-xl p-3 ${!isUnlocked ? 'pl-10' : ''}`}>
                        <topic.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{topic.title}</h3>
                        <p className="text-gray-500 mt-1 text-sm">{topic.description}</p>
                        <div className="mt-2 flex items-center gap-3">
                          <div className="flex items-center gap-2 text-xs sm:text-sm">
                            <FiBarChart2 className={theme.text} />
                            <span>{topic.completed}/{topic.total} quizzes</span>
                          </div>
                          <div className="hidden sm:flex items-center gap-2 text-xs sm:text-sm">
                            <FiBarChart2 className={theme.text} />
                            <span>{completionPercentage}% complete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex flex-col items-end">
                      <motion.button
                        className={`p-3 rounded-full ${theme.bg} text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme.border}`}
                        disabled={!isUnlocked}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTopic(index);
                        }}
                        aria-label={expandedTopic === index ? `Collapse subtopics for ${topic.title}` : `Expand subtopics for ${topic.title}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ scale: isUnlocked ? [1, 1.05, 1] : 1 }}
                        transition={{ duration: 0.8, repeat: isUnlocked ? Infinity : 0, repeatType: "reverse" }}
                      >
                        {expandedTopic === index ? (
                          <FiChevronUp className="text-xl" />
                        ) : (
                          <FiChevronDown className="text-xl" />
                        )}
                      </motion.button>
                      <span className="text-xs text-gray-500 mt-1 sm:hidden">
                        {expandedTopic === index ? "Hide Subtopics" : "Tap for Subtopics"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${theme.gradient} h-2 rounded-full`}
                        style={{ width: `${completionPercentage}%` }}
                      ></div>
                    </div>
                    <span className={`hidden sm:block text-xs font-medium ${theme.text}`}>
                      {completionPercentage}%
                    </span>
                  </div>
                </div>

                {expandedTopic === index && isUnlocked && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`border-t border-gray-200 bg-gradient-to-b from-white via-${theme.bg.replace('bg-', '')}/5 to-white`}
                  >
                    <div className="p-4 sm:p-6">
                      <h4 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">
                        Subtopics ({topic.completed}/{topic.total} completed)
                      </h4>
                      <div className="space-y-2">
                        {topic.subtopics.map((subtopic, subIndex) => {
                          const isQuizUnlocked = subtopic.completed || isLearningSubtopicCompleted(topic.id, subtopic.name);
                          return (
                            <div
                              key={subIndex}
                              className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg transition-colors ${
                                isQuizUnlocked
                                  ? `${theme.bg} bg-opacity-10 hover:bg-opacity-20`
                                  : "bg-gray-50 hover:bg-gray-100"
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                <div
                                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                                    isQuizUnlocked
                                      ? subtopic.completed
                                        ? `${theme.border} ${theme.bg} text-white`
                                        : `${theme.border} bg-white`
                                      : "border-gray-300"
                                  }`}
                                >
                                  {isQuizUnlocked ? (
                                    subtopic.completed ? <FiAward size={12} /> : <FiBook size={12} />
                                  ) : (
                                    <FiLock size={12} />
                                  )}
                                </div>
                                <div>
                                  <span
                                    className={`font-medium text-sm ${
                                      isQuizUnlocked
                                        ? subtopic.completed
                                          ? theme.text
                                          : theme.text
                                        : "text-gray-700"
                                    }`}
                                  >
                                    {subtopic.name}
                                  </span>
                                  {!isQuizUnlocked && (
                                    <div className="text-xs text-gray-500 mt-1">
                                      Complete the learning module to unlock this quiz
                                    </div>
                                  )}
                                  {/* How to unlock tooltip */}
                                  <div className="group relative inline-block">
                                    {!isQuizUnlocked && (
                                      <>
                                        <span className="text-xs text-blue-500 mt-1 cursor-help underline decoration-dotted">
                                          How to unlock?
                                        </span>
                                        <div className="absolute hidden group-hover:block bottom-full left-0 mb-2 p-2 bg-white text-gray-700 text-xs rounded shadow-lg z-10 min-w-[200px] border border-gray-200">
                                          <FiLock className="inline mr-1" />
                                          Complete the "{subtopic.name}" module in Study Mode to unlock this quiz. 
                                          <Link 
                                            to="/post-utme/english" 
                                            className="mt-1 block text-blue-500 font-medium hover:underline"
                                          >
                                            Go to Study Page
                                          </Link>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                  {isQuizUnlocked && (
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-xs text-gray-500">
                                      {subtopic.attempts > 0 ? (
                                        <>
                                          <span>Best Score: {subtopic.bestScore}%</span>
                                          <span>Attempts: {subtopic.attempts}</span>
                                          {subtopic.pointsEarned > 0 && (
                                            <span>Points Earned: {subtopic.pointsEarned}</span>
                                          )}
                                        </>
                                      ) : (
                                        <span>Ready to attempt</span>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                              {isQuizUnlocked ? (
                                <GamifiedButton 
                                  onClick={() => handleQuizStart(subtopic)}
                                  icon={FiArrowRight}
                                  className={`w-full sm:w-auto ${theme.bg} text-white px-4 py-1.5 text-sm`}
                                >
                                  {subtopic.attempts > 0 ? "Retake Quiz" : "Start Quiz"}
                                </GamifiedButton>
                              ) : (
                                <button
                                  className="w-full sm:w-auto px-4 py-1.5 bg-gray-200 text-gray-500 rounded-lg flex items-center gap-2 text-sm cursor-not-allowed"
                                  disabled
                                >
                                  <FiLock />
                                  Locked
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {showLockedModal !== null && <LockedTopicModal topicIndex={showLockedModal} />}
          {showSubtopicLockedModal && (
            <LockedSubtopicModal 
              subtopicName={showSubtopicLockedModal} 
              onClose={() => setShowSubtopicLockedModal(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EnglishQuiz;