import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiBook,
  FiEdit,
  FiGlobe,
  FiBarChart2,
  FiStar,
  FiZap
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../../provider/AuthContext";
import { supabase } from "../../../supabase/supabaseClient";
import FullNameModal from "../../components/FullNameModal";
import WelcomeCard from "../../components/WelcomeCard";
import TestMancerLoader from "../../components/TestMancer";
import { englishQuizTopics } from "../../data/englishQuizTopics";

export const QuizHub = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [quizStats, setQuizStats] = useState([]);

  const quizConfig = [
    {
      id: "english",
      title: "English",
      icon: FiBook,
      description: "Master grammar! 📚",
      path: "/quiz-hub/english",
      totalQuizzes: 50,
      color: "from-pink-500 to-pink-600"
    },
    {
      id: "mathematics",
      title: "Mathematics",
      icon: FiEdit,
      description: "Crack numbers! 🔢",
      path: "/quiz-hub/mathematics",
      totalQuizzes: 40,
      color: "from-teal-400 to-teal-600"
    },
    {
      id: "currentAffairs",
      title: "Current Affairs",
      icon: FiGlobe,
      description: "Stay updated! 🌍",
      path: "/quiz-hub/current-affairs",
      totalQuizzes: 30,
      color: "from-purple-400 to-purple-600"
    }
  ];

  const fetchData = useCallback(async () => {
    if (!isAuthenticated || !user) return;
    setLoading(true);

    try {
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.error("Error fetching profile:", profileError.message);
        return;
      }

      setUserData(profileData);
      if (!profileData.full_name || !profileData.avatar_url) {
        setShowModal(true);
      }

      const { data: progressData, error: progressError } = await supabase
        .from("postutme_quiz_progress")
        .select("quiz_id, completed, best_score, attempts")
        .eq("user_id", user.id);

      if (progressError) {
        console.error("Error fetching quiz progress:", progressError.message);
        return;
      }

      const calculatedStats = quizConfig.map((category) => {
        const categoryQuizIds = englishQuizTopics
          .flatMap(topic => topic.subtopics)
          .map(subtopic => subtopic.quizId)
          .filter(quizId => quizId.includes(category.id));

        const progresses = progressData.filter((p) => 
          categoryQuizIds.includes(p.quiz_id)
        );

        const completedQuizzes = progresses.filter((p) => p.completed).length;
        const totalQuizzes = categoryQuizIds.length;
        const attempts = progresses.reduce(
          (sum, p) => sum + (p.attempts || 0),
          0
        );
        const highScore =
          progresses.length > 0
            ? Math.max(...progresses.map((p) => p.best_score || 0))
            : 0;
        const avgScore =
          progresses.length > 0
            ? Math.round(
                progresses.reduce(
                  (sum, p) => sum + (p.best_score || 0),
                  0
                ) / progresses.length
              )
            : 0;

        const progressPercent =
          totalQuizzes > 0
            ? Math.round((completedQuizzes / totalQuizzes) * 100)
            : 0;

        return {
          ...category,
          stats: {
            attempts,
            highScore,
            avgScore,
            completedQuizzes,
            totalQuizzes,
            progress: progressPercent
          }
        };
      });

      setQuizStats(calculatedStats);
    } catch (error) {
      console.error("Unexpected error:", error.message);
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <TestMancerLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-2 max-w-6xl">
        {/* Callout */}
        {userData?.full_name && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl p-4 sm:p-6 text-white text-center mb-12 max-w-2xl mx-auto overflow-hidden"
            aria-label="Quiz Hub welcome message"
          >
            {/* Quiz Hub Label (Mobile Only) */}
            <div className="absolute top-1 left-2 sm:hidden bg-blue-700 bg-opacity-50 text-white text-xs font-medium rounded-full px-2 py-1">
              Quiz Hub
            </div>
            {/* Background Icon */}
            <FiStar className="absolute top-2 right-2 text-blue-200 opacity-30 text-4xl" />
            <h2 className="text-xl sm:text-2xl font-bold py-2 mb-2 sm:mb-3">
              Welcome to the Quiz Hub, {userData.full_name.split(" ")[0]}! 🔥
            </h2>
            <p className="text-blue-100 text-sm sm:text-base">
              Test your knowledge with fun quizzes and climb the leaderboard!
            </p>
          </motion.div>
        )}

        {/* Quiz Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quizStats.map((category, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              <Link to={category.path} className="group">
                <div className="h-full bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:border-gray-300 transition-all relative overflow-hidden">
                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-medium text-blue-500">
                        {category.stats.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                        style={{ width: `${category.stats.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-blue-100 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div
                        className={`relative bg-gradient-to-br ${category.color} rounded-xl p-4 flex items-center justify-center w-16 h-16`}
                      >
                        <category.icon className="text-white text-2xl" />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-bold text-center text-gray-800 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-center text-sm mb-4">
                    {category.description}
                  </p>

                  {/* Footer */}
                  <div className="flex justify-center gap-3 text-xs text-blue-500 font-medium mb-4">
                    <Link to="/post-utme/leaderboard" className="flex items-center gap-1">
                      <FiBarChart2 />
                      <span>Leaderboard</span>
                    </Link>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => navigate(category.path)}
                      className={`w-full bg-gradient-to-r ${category.color} text-white font-semibold rounded-full px-4 py-2 text-sm hover:scale-105 hover:shadow-lg transition-all`}
                      aria-label={`Start or resume ${category.title} quiz`}
                    >
                      {userData?.full_name
                        ? "Resume"
                        : "Start Quiz"}{" "}
                      🚀
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Encouragement */}
        {userData?.full_name && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Keep Going, {userData.full_name.split(" ")[0]}! ✨
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every quiz you take sharpens your skills and boosts your rank.
              Aim for the top and unlock all the badges!
            </p>
          </motion.div>
        )}

        <AnimatePresence>
          {showModal && (
            <FullNameModal
              userId={user?.id}
              onClose={() => setShowModal(false)}
              onSuccess={(updatedUser) => setUserData(updatedUser)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizHub;