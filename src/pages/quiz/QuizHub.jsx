// src/pages/quiz/QuizHub.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FiBook, 
  FiEdit, 
  FiGlobe, 
  FiAward, 
  FiBarChart2, 
  FiClock,FiCheck ,
  FiUser,
  FiChevronRight
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../../provider/AuthContext";
import { supabase } from "../../../supabase/supabaseClient";

export const QuizHub = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [quizStats, setQuizStats] = useState({
    english: { attempts: 0, highScore: 0, avgScore: 0, lastAttempt: null },
    mathematics: { attempts: 0, highScore: 0, avgScore: 0, lastAttempt: null },
    currentAffairs: { attempts: 0, highScore: 0, avgScore: 0, lastAttempt: null }
  });
  const [userData, setUserData] = useState(null);
  const [overallStats, setOverallStats] = useState({
    totalPoints: 0,
    rank: 0,
    streak: 0,
    badges: 0
  });

  // Fetch user data and quiz statistics
  useEffect(() => {
    if (!isAuthenticated) return;
    
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch user profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('full_name, avatar_url')
          .eq('id', user.id)
          .single();
        
        if (profileData) setUserData(profileData);
        
        // Fetch quiz statistics
        const { data: quizData } = await supabase
          .from('quiz_attempts')
          .select('quiz_id, score, total_questions, points_earned, attempted_at');
        
        // Organize quiz data by category
        const stats = { english: [], mathematics: [], currentAffairs: [] };
        
        if (quizData) {
          quizData.forEach(attempt => {
            if (attempt.quiz_id.includes('english')) {
              stats.english.push(attempt);
            } else if (attempt.quiz_id.includes('math')) {
              stats.mathematics.push(attempt);
            } else if (attempt.quiz_id.includes('affairs')) {
              stats.currentAffairs.push(attempt);
            }
          });
        }
        
        // Calculate stats for each category
        const calculatedStats = {};
        
        Object.entries(stats).forEach(([category, attempts]) => {
          if (attempts.length === 0) {
            calculatedStats[category] = {
              attempts: 0,
              highScore: 0,
              avgScore: 0,
              lastAttempt: null
            };
          } else {
            const highScore = Math.max(...attempts.map(a => a.score));
            const totalScore = attempts.reduce((sum, a) => sum + a.score, 0);
            const avgScore = Math.round(totalScore / attempts.length);
            const lastAttempt = new Date(Math.max(...attempts.map(a => new Date(a.attempted_at))));
            
            calculatedStats[category] = {
              attempts: attempts.length,
              highScore,
              avgScore,
              lastAttempt: lastAttempt.toLocaleDateString()
            };
          }
        });
        
        setQuizStats(calculatedStats);
        
        // Fetch overall stats
        const { data: leaderboardData } = await supabase
          .from('leaderboard')
          .select('total_points, rank')
          .eq('user_id', user.id)
          .single();
        
        const { data: activityData } = await supabase
          .from('user_activity')
          .select('streak')
          .eq('user_id', user.id)
          .single();
        
        const { count: badgeCount } = await supabase
          .from('postutme_badges')
          .select('*', { count: 'exact' })
          .eq('user_id', user.id);
        
        setOverallStats({
          totalPoints: leaderboardData?.total_points || 0,
          rank: leaderboardData?.rank || 0,
          streak: activityData?.streak || 0,
          badges: badgeCount || 0
        });
        
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [isAuthenticated, user]);

  const quizCategories = [
    {
      id: "english",
      name: "English",
      icon: <FiBook className="text-blue-500" />,
      color: "from-blue-200 to-blue-200",
      description: "Grammar, Vocabulary, Comprehension",
      stats: quizStats.english
    },
    {
      id: "mathematics",
      name: "Mathematics",
      icon: <FiEdit className="text-purple-500" />,
      color: "from-purple-200 to-purple-200",
      description: "Algebra, Geometry, Calculus, Statistics",
      stats: quizStats.mathematics
    },
    {
      id: "currentAffairs",
      name: "Current Affairs",
      icon: <FiGlobe className="text-green-500" />,
      color: "from-green-200 to-green-200",
      description: "Politics, Economy, Technology, World Events",
      stats: quizStats.currentAffairs
    }
  ];

  const formatScore = (score, total = 100) => {
    return `${Math.round(score)}/${total}`;
  };

 

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Quiz Challenge Hub
            </h1>
            <p className="text-lg text-gray-600">
              Test your knowledge and climb the leaderboard
            </p>
          </div>
          
          {userData && (
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm mt-4 md:mt-0">
              {userData.avatar_url ? (
                <img 
                  src={userData.avatar_url} 
                  alt={userData.full_name} 
                  className="w-12 h-12 rounded-full border-2 border-blue-300 object-cover"
                />
              ) : (
                <div className="bg-blue-100 border-2 border-dashed rounded-full w-12 h-12 flex items-center justify-center">
                  <FiUser className="text-blue-500 text-xl" />
                </div>
              )}
              <div>
                <h2 className="font-bold text-gray-800">{userData.full_name || "Quiz Master"}</h2>
                <p className="text-sm text-gray-600">Rank #{overallStats.rank}</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { 
              title: "Total Points", 
              value: overallStats.totalPoints, 
              icon: <FiAward className="text-yellow-500" />,
              color: "bg-yellow-100 text-yellow-800"
            },
            { 
              title: "Current Rank", 
              value: `#${overallStats.rank}`, 
              icon: <FiBarChart2 className="text-blue-500" />,
              color: "bg-blue-100 text-blue-800"
            },
            { 
              title: "Streak", 
              value: `${overallStats.streak} days`, 
              icon: <FiClock className="text-green-500" />,
              color: "bg-green-100 text-green-800"
            },
            { 
              title: "Badges", 
              value: overallStats.badges, 
              icon: <FiAward className="text-purple-500" />,
              color: "bg-purple-100 text-purple-800"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${stat.color} p-5 rounded-xl`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="text-2xl">
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Quiz Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quizCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 text-black`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">
                    {category.icon}
                  </div>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    {category.stats.attempts} attempts
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                <p className="opacity-90">{category.description}</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">High Score</p>
                    <p className="font-bold text-lg">
                      {category.stats.highScore > 0 
                        ? formatScore(category.stats.highScore) 
                        : "N/A"}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Avg. Score</p>
                    <p className="font-bold text-lg">
                      {category.stats.avgScore > 0 
                        ? formatScore(category.stats.avgScore) 
                        : "N/A"}
                    </p>
                  </div>
                </div>
                
                {category.stats.lastAttempt && (
                  <p className="text-sm text-gray-600 mb-6">
                    Last attempt: {category.stats.lastAttempt}
                  </p>
                )}
                
                <button
                  onClick={() => navigate(`/quiz-hub/${category.id}`)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-medium rounded-full px-6 py-3 hover:shadow-lg transition-all"
                >
                  Start {category.name} Quiz
                  <FiChevronRight className="text-lg" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Practice Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl p-6 text-white mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Quiz Preparation Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Review key concepts before starting",
              "Manage your time effectively during the quiz",
              "Read questions carefully before answering",
              "Eliminate obviously wrong answers first",
              "Review your answers before submitting"
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-white/20 rounded-full p-1 mt-1">
                  <FiCheck className="text-white" />
                </div>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Badges Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Earn Quiz Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Grammar Guru",
                description: "Score 90%+ in English quiz",
                icon: <FiBook className="text-blue-500 text-3xl" />,
                color: "bg-blue-100"
              },
              {
                name: "Math Master",
                description: "Complete all math quizzes",
                icon: <FiEdit className="text-purple-500 text-3xl" />,
                color: "bg-purple-100"
              },
              {
                name: "Current Affairs Expert",
                description: "Take 10 current affairs quizzes",
                icon: <FiGlobe className="text-green-500 text-3xl" />,
                color: "bg-green-100"
              }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`${badge.color} p-6 rounded-xl flex flex-col items-center text-center`}
              >
                <div className="mb-4">
                  {badge.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{badge.name}</h3>
                <p className="text-gray-700">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizHub;