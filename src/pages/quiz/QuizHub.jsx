import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FiBook, 
  FiEdit, 
  FiGlobe,FiAward ,FiStar ,
  FiZap
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../../provider/AuthContext";
import { supabase } from "../../../supabase/supabaseClient";
import FullNameModal from '../../components/FullNameModal';
import WelcomeCard from '../../components/WelcomeCard';
import StatsOverview from '../../components/StatsOverview';
import SnaptestLoader from "../../components/SnaptestLoader";



const QuizHub = () => {
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
      description: "Master grammar and comprehension! 📚",
      path: "/quiz-hub/english",
      totalQuestions: 50,
      color: "from-pink-500 to-pink-600"
    },
    {
      id: "mathematics",
      title: "Mathematics",
      icon: FiEdit,
      description: "Crack numbers and win badges! 🔢",
      path: "/quiz-hub/mathematics",
      totalQuestions: 40,
      color: "from-teal-400 to-teal-600"
    },
    {
      id: "currentAffairs",
      title: "Current Affairs",
      icon: FiGlobe,
      description: "Stay updated, stay sharp! 🌍",
      path: "/quiz-hub/currentAffairs",
      totalQuestions: 30,
      color: "from-purple-400 to-purple-600"
    }
  ];

  const fetchData = useCallback(async () => {
    if (!isAuthenticated || !user) return;
    setLoading(true);

    try {
      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('full_name, avatar_url')
        .eq('id', user.id)
        .single();

      if (profileError) {
        console.error("Error fetching profile:", profileError.message);
        return;
      }

      setUserData(profileData);
      if (!profileData.full_name || !profileData.avatar_url) {
        setShowModal(true);
      }

      // Fetch quiz statistics
      const { data: quizData, error: quizError } = await supabase
        .from('quiz_attempts')
        .select('quiz_id, score, total_questions, points_earned, attempted_at');

      if (quizError) {
        console.error("Error fetching quiz data:", quizError.message);
        return;
      }

      // Process quiz stats
      const statsByCategory = { english: [], mathematics: [], currentAffairs: [] };
      quizData?.forEach(attempt => {
        if (attempt.quiz_id.includes('english')) {
          statsByCategory.english.push(attempt);
        } else if (attempt.quiz_id.includes('math')) {
          statsByCategory.mathematics.push(attempt);
        } else if (attempt.quiz_id.includes('affairs')) {
          statsByCategory.currentAffairs.push(attempt);
        }
      });

      const calculatedStats = quizConfig.map(category => {
        const attempts = statsByCategory[category.id];
        const highScore = attempts.length > 0 ? Math.max(...attempts.map(a => a.score)) : 0;
        const totalScore = attempts.reduce((sum, a) => sum + a.score, 0);
        const avgScore = attempts.length > 0 ? Math.round(totalScore / attempts.length) : 0;
        const lastAttempt = attempts.length > 0 ? new Date(Math.max(...attempts.map(a => new Date(a.attempted_at)))).toLocaleDateString() : null;

        return {
          ...category,
          stats: {
            attempts: attempts.length,
            highScore,
            avgScore,
            lastAttempt,
            progress: Math.round((highScore / category.totalQuestions) * 100)
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, type: 'spring', stiffness: 120 } }
  };

  if (loading) {
    return <SnaptestLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <WelcomeCard />

        {/* Main Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6 font-medium">
            <FiZap className="text-yellow-500 animate-pulse" />
            Make Quizzing Fun & Rewarding!
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            {userData?.full_name ? (
              <span>
                🚀 Hey {userData.full_name.split(' ')[0]}, Ace Your Quizzes!
              </span>
            ) : (
              <span>🚀 Quiz Challenge Hub</span>
            )}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {userData?.full_name 
              ? `Test your knowledge, earn badges, and climb the leaderboard, ${userData.full_name.split(' ')[0]}!` 
              : "Test your knowledge, earn badges, and climb the leaderboard to show your skills!"}
          </p>

          {/* <StatsOverview /> */}
        </motion.div>

        {/* Personalized Callout */}
        {userData?.full_name && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl p-6 text-white text-center mb-12 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-3">
              {userData.full_name.split(' ')[0]}, You're on Fire! 🔥
            </h2>
            <p className="text-blue-100">
              Keep quizzing to climb the leaderboard and unlock exclusive badges. 
              Every correct answer brings you closer to the top!
            </p>
          </motion.div>
        )}

        {/* Quiz Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quizStats.map((category, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              <Link to={category.path} className="group" aria-label={`Start ${category.title} quiz`}>
                <div className="h-full bg-white rounded-2xl shadow-xl p-6 border border-gray-200 hover:border-gray-300 transition-all relative overflow-hidden">
                  {hoveredCard === i && (
                    <div className="absolute top-4 right-4 flex gap-2 z-10">
                      <motion.div
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-yellow-100 border border-yellow-500 rounded-full p-2"
                      >
                        <FiAward className="text-yellow-600" />
                      </motion.div>
                      <motion.div
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1 }}
                        className="bg-blue-100 border border-blue-500 rounded-full p-2"
                      >
                        <FiStar className="text-blue-600" />
                      </motion.div>
                    </div>
                  )}

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">High Score</span>
                      <span className="font-medium text-blue-500">{category.stats.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2.5 rounded-full`}
                        style={{ width: `${category.stats.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-5 flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-blue-100 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className={`relative bg-gradient-to-br ${category.color} rounded-2xl p-5 flex items-center justify-center w-20 h-20`}>
                        <category.icon className="text-white text-3xl" />
                      </div>
                    </div>
                  </div>

                  {/* Texts */}
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-center mb-6">{category.description}</p>

                  {/* Footer Stats */}
                  <div className="flex justify-center gap-4 text-sm text-blue-500 font-medium mb-6">
                    <div className="flex items-center gap-2">
                      <FiAward />
                      <span>{category.stats.attempts} attempts</span>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => navigate(category.path)}
                      className={`bg-gradient-to-r ${category.color} text-white font-semibold rounded-full px-6 py-2 hover:scale-105 hover:shadow-lg transition-all`}
                    >
                      {userData?.full_name ? "Continue Quizzing" : "Start Quiz"} 🚀
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Personalized Encouragement */}
        {userData?.full_name && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Keep Going, {userData.full_name.split(' ')[0]}! ✨
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