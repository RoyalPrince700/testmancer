
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
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../../provider/AuthContext";
import { supabase } from "../../../supabase/supabaseClient";
import { englishQuizTopics } from "../../data/englishQuizTopics";
import GamifiedButton from "../../components/GamifiedButton";
import QuizTipAndBadge from "../../components/QuizTipAndBadge";
import WelcomeCard from "../../components/WelcomeCard";

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

  const iconComponents = {
    FiEdit,
    FiBookOpen,
    FiMessageSquare,
    FiVolume2,
    FiBook,
  };

  const initialTopics = englishQuizTopics.map((topic) => ({
    ...topic,
    icon: iconComponents[topic.icon] || FiBook,
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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let updatedStats = {
          points: 0,
          rank: 0,
          completedQuizzes: 0,
        };

        let profileData = null;
        let leaderboardData = null;
        let quizProgressData = null;
        let progressData = null;

        if (isAuthenticated && user) {
          const [
            { data: profile, error: profileError },
            { data: leaderboard, error: lbError },
            { data: quizProgress, error: quizProgressError },
            { data: progress, error: progressError },
          ] = await Promise.all([
            supabase.from("profiles").select("full_name").eq("id", user.id).single(),
            supabase.from("leaderboard").select("total_points, rank").eq("user_id", user.id).single(),
            supabase.from("postutme_quiz_progress").select("quiz_id, completed, best_score, attempts").eq("user_id", user.id),
            supabase.from("postutme_progress").select("topic, subtopic").eq("user_id", user.id).eq("subject", "English"),
          ]);

          if (profileError && !profileError.message.includes("No rows found")) {
            console.error("Error fetching profile:", profileError);
          } else if (profile?.full_name) {
            setFirstName(profile.full_name.split(" ")[0] || "Champion");
          }

          if (lbError && !lbError.message.includes("No rows found")) {
            console.error("Error fetching leaderboard:", lbError);
          } else {
            updatedStats.points = leaderboard?.total_points || 0;
            updatedStats.rank = leaderboard?.rank || 0;
          }

          if (quizProgressError) {
            console.error("Error fetching quiz progress:", quizProgressError);
          }
          if (progressError) {
            console.error("Error fetching progress:", progressError);
          }

          profileData = profile;
          leaderboardData = leaderboard;
          quizProgressData = quizProgress;
          progressData = progress;
        }

        const quizProgressMap = {};
        if (quizProgressData) {
          quizProgressData.forEach((progress) => {
            quizProgressMap[progress.quiz_id] = progress;
          });
          updatedStats.completedQuizzes = quizProgressData.filter((p) => p.completed).length;
        }

        const { data: quizAttemptsData, error: attemptsError } = await supabase
          .from("quiz_attempts")
          .select("quiz_id, points_earned, total_questions")
          .eq("user_id", user?.id)
          .eq("is_first_attempt", true);

        if (attemptsError) {
          console.error("Error fetching quiz attempts:", attemptsError);
        }

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
            const isCompleted = progressData?.some(
              (p) => p.topic === topic.id && p.subtopic === subtopic.name
            ) || progress?.completed || false;
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

        if (userProgress.completed === 21) {
          const { data: existingBadges } = await supabase
            .from("postutme_badges")
            .select("id")
            .eq("user_id", user.id)
            .eq("subject", "English")
            .eq("badge_type", "bronze");
          if (!existingBadges?.length) {
            await supabase
              .from("postutme_badges")
              .insert([{
                user_id: user.id,
                badge_type: "bronze",
                subject: "English",
                topic: "all",
                earned_at: new Date().toISOString(),
              }]);
            setUserStats((prev) => ({ ...prev, badgeCount: (prev.badgeCount || 0) + 1 }));
          }
        }
      } catch (error) {
        console.error("Unexpected error fetching data:", error);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <FiLoader className="animate-spin text-3xl text-coral-500 mx-auto mb-4" />
          <p className="text-gray-500">Loading your English quiz adventure...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <WelcomeCard />
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6 font-medium">
            <FiZap className="text-yellow-500 animate-pulse" />
            Make Learning Fun & Rewarding!
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            {firstName && isAuthenticated ? (
              <span>🚀 Hey {firstName}, Conquer English Quizzes!</span>
            ) : (
              <span>🚀 English Quiz Mastery</span>
            )}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {firstName && isAuthenticated
              ? `Earn badges and climb the leaderboard, ${firstName}!`
              : "Earn badges and climb the leaderboard!"}
          </p>
        </motion.div>

        {isAuthenticated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl p-6 text-white text-center mb-10 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-3">
              {firstName}, You're Making Great Progress! 🔥
            </h2>
            <p className="text-teal-100">
              You've completed {userStats.completedQuizzes} quizzes and earned {userStats.points} points. Keep going to climb to rank #{userStats.rank - 1 || 1}!
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=" rounded-2xl shadow-lg p-6 mb-10"
        >
         <div className="bg-white rounded-2xl p-6 mb-10">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <div className="flex items-center gap-4">
      <div className="bg-teal-100 border-2 border-dashed rounded-full w-12 h-12 flex items-center justify-center">
        <FiUser className="text-teal-500 text-xl" />
      </div>
      <div>
        <h2 className="font-bold text-gray-800">
          {firstName ? `${firstName}'s Progress` : "English Learner"}
        </h2>
        <p className="text-sm text-gray-500">
          Rank #{userStats.rank} • {userStats.points} Points
        </p>
      </div>
    </div>
    <div className="w-full md:w-auto">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            Overall Progress: {userProgress.completed}/{userProgress.total} subtopics
          </span>
          <span className="text-sm font-medium text-teal-600">
            {userProgress.percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-teal-400 to-teal-600 h-2.5 rounded-full" 
            style={{ width: `${userProgress.percentage}%` }}
          ></div>
        </div>
        {/* <div className="flex items-center justify-end gap-2 text-sm">
          <FiAward className="text-coral-500" />
          <span>{userStats.completedQuizzes} Quizzes Completed</span>
        </div> */}
      </div>
    </div>
  </div>
</div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-8">
          {topics.map((topic, index) => {
            const completionPercentage = calculatePercentage(topic.completed, topic.total);
            const isTopicCompleted = topic.completed === topic.total;
            const isUnlocked = isTopicUnlocked(index);

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 relative bg-gradient-to-r ${topic.color}`}
                whileHover={{ scale: isUnlocked ? 1.02 : 1 }}
              >
                {isTopicCompleted && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                    className="absolute top-4 right-4 bg-yellow-400 rounded-full p-2 shadow-md border border-yellow-500"
                    title="Topic Mastered!"
                    aria-label={`Badge awarded for completing all subtopics in ${topic.title}`}
                  >
                    <FiAward className="text-white text-2xl" />
                  </motion.div>
                )}
                {!isUnlocked && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                    className="absolute top-4 right-12 bg-gray-400 rounded-full p-2 shadow-md border border-gray-500"
                    title="Topic Locked"
                    aria-label={`Topic ${topic.title} is locked`}
                  >
                    <FiLock className="text-white text-2xl" />
                  </motion.div>
                )}
                <div className="p-6 cursor-pointer" onClick={() => toggleTopic(index)}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl p-4">
                        <topic.icon className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{topic.title}</h3>
                        <p className="text-gray-500 mt-1">{topic.description}</p>
                        <div className="mt-3 flex items-center gap-4">
                          <div className="flex items-center gap-2 text-sm">
                            <FiBarChart2 className="text-coral-500" />
                            <span>{topic.completed}/{topic.total} quizzes</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <FiBarChart2 className="text-coral-500" />
                            <span>{completionPercentage}% complete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-teal-50" disabled={!isUnlocked}>
                      {expandedTopic === index ? (
                        <FiChevronUp className="text-coral-500 text-xl" />
                      ) : (
                        <FiChevronDown className="text-coral-500 text-xl" />
                      )}
                    </button>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-teal-500 to-teal-600 h-2.5 rounded-full"
                        style={{ width: `${completionPercentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-coral-500">{completionPercentage}%</span>
                  </div>
                </div>

                {expandedTopic === index && isUnlocked && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6">
                      <h4 className="font-medium text-gray-800 mb-4">
                        Subtopics ({topic.completed}/{topic.total} completed)
                      </h4>
                      <div className="space-y-3">
                        {topic.subtopics.map((subtopic, subIndex) => (
                          <div
                            key={subIndex}
                            className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg transition-colors ${
                              subtopic.completed
                                ? "bg-teal-50 hover:bg-teal-100"
                                : "bg-gray-50 hover:bg-gray-100"
                            }`}
                          >
                            <div className="flex items-center gap-3 mb-2 sm:mb-0">
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                                  subtopic.completed ? "border-green-500 bg-green-500 text-white" : "border-teal-300"
                                }`}
                              >
                                {subtopic.completed && <FiAward size={14} />}
                              </div>
                              <div>
                                <span
                                  className={`font-medium ${
                                    subtopic.completed ? "text-green-600" : "text-gray-700"
                                  }`}
                                >
                                  {subtopic.name}
                                </span>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-sm text-gray-500">
                                  {subtopic.attempts > 0 ? (
                                    <>
                                      <span>Best Score: {subtopic.bestScore}%</span>
                                      <span>Attempts: {subtopic.attempts}</span>
                                      {subtopic.pointsEarned > 0 && (
                                        <span>Points Earned: {subtopic.pointsEarned}</span>
                                      )}
                                    </>
                                  ) : (
                                    <span>Not yet attempted</span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <GamifiedButton 
                              onClick={() => navigate(subtopic.path)}
                              icon={FiArrowRight}
                            >
                              {subtopic.attempts > 0 ? "Retake Quiz" : "Start Quiz"}
                            </GamifiedButton>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex justify-end">
                        <GamifiedButton
                          onClick={() => navigate(`/english-quiz/${topic.id}`)}
                          icon={FiBook}
                        >
                          Practice All Quizzes
                        </GamifiedButton>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <QuizTipAndBadge />
        <AnimatePresence>
          {showLockedModal !== null && <LockedTopicModal topicIndex={showLockedModal} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EnglishQuiz;
