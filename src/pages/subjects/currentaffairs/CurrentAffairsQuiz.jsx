import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiEdit,
  FiBookOpen,
  FiMessageSquare,
  FiGlobe,
  FiBook,
  FiChevronDown,
  FiChevronUp,
  FiAward,
  FiBarChart2,
  FiUser,
  FiArrowRight,
  FiLoader,
  FiZap,
  FiTrendingUp,
  FiHash,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../../../provider/AuthContext";
import { supabase } from "../../../../supabase/supabaseClient";
import { currentAffairsQuizTopics } from "./currentAffairsQuizTopics";
import GamifiedButton from "../../../components/GamifiedButton";
import QuizTipAndBadge from "../../../components/QuizTipAndBadge";
import WelcomeCard from "../../../components/WelcomeCard";
import TestMancerLoader from "../../../components/TestMancer";

// Color theme mapping
const colorMap = [
  { bg: 'bg-green-500', text: 'text-green-500', border: 'border-green-500', gradient: 'from-green-400 to-green-600' },
  { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500', gradient: 'from-blue-400 to-blue-600' },
  { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500', gradient: 'from-purple-400 to-purple-600' },
  { bg: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-500', gradient: 'from-yellow-400 to-amber-500' },
  { bg: 'bg-indigo-500', text: 'text-indigo-500', border: 'border-indigo-500', gradient: 'from-indigo-400 to-indigo-600' }
];

export const CurrentAffairsQuiz = () => {
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
  const [completedLearningSubtopics, setCompletedLearningSubtopics] = useState({});

  const iconComponents = {
    FiEdit,
    FiBookOpen,
    FiMessageSquare,
    FiGlobe,
    FiBook,
    FiBarChart2,
    FiTrendingUp,
    FiHash,
  };

  const initialTopics = currentAffairsQuizTopics.map((topic, index) => ({
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

  const fetchCompletedLearningSubtopics = async (userId) => {
    const { data, error } = await supabase
      .from('postutme_progress')
      .select('topic, subtopic')
      .eq('user_id', userId)
      .eq('subject', 'Current-Affairs');

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
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  const calculatePercentage = (completed, total) => {
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  const handleQuizStart = (subtopic) => {
    navigate(subtopic.path);
  };

  const handlePracticeAll = (topic) => {
    navigate(`/mathematics-quiz/${topic.id}`);
  };

  if (loading) {
    return <TestMancerLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-8">
          {topics.map((topic, index) => {
            const completionPercentage = calculatePercentage(topic.completed, topic.total);
            const isTopicCompleted = topic.completed === topic.total;
            const theme = topic.color;

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 relative"
                whileHover={{ scale: 1.02 }}
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
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                    <div className="flex items-start gap-3">
                      <div className={`bg-gradient-to-br ${theme.gradient} rounded-xl p-3`}>
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
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTopic(index);
                        }}
                        aria-label={expandedTopic === index ? `Collapse subtopics for ${topic.title}` : `Expand subtopics for ${topic.title}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
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

                {expandedTopic === index && (
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
                        {topic.subtopics.map((subtopic, subIndex) => (
                          <div
                            key={subIndex}
                            className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg transition-colors ${theme.bg} bg-opacity-10 hover:bg-opacity-20`}
                          >
                            <div className="flex items-center gap-2 mb-2 sm:mb-0">
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                                  subtopic.completed
                                    ? `${theme.border} ${theme.bg} text-white`
                                    : `${theme.border} bg-white`
                                }`}
                              >
                                {subtopic.completed ? <FiAward size={12} /> : <FiBook size={12} />}
                              </div>
                              <div>
                                <span
                                  className={`font-medium text-sm ${
                                    subtopic.completed
                                      ? theme.text
                                      : theme.text
                                  }`}
                                >
                                  {subtopic.name}
                                </span>
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
                              </div>
                            </div>
                            <button 
                              onClick={() => handleQuizStart(subtopic)}
                              icon={FiArrowRight}
                              className={`w-full sm:w-auto ${theme.bg} text-white text-sm px-6 py-3 rounded-full font-bold shadow-md hover:shadow-xl transition duration-300`}
                            >
                              {subtopic.attempts > 0 ? "Retake Quiz" : "Start Quiz"}
                            </button>
                          </div>
                        ))}
                      </div>
                      
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default CurrentAffairsQuiz;
