// src/pages/subject/Mathematics.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FiCalculator, FiDivide, FiPercent, 
  FiChevronDown, FiChevronUp, FiCheckCircle,
  FiAward, FiBarChart2, FiShapes, 
  FiPieChart, FiTriangle, FiLock,
  FiZap, FiStar
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../../../provider/AuthContext";
import { supabase } from "../../../../supabase/supabaseClient";
import Leaderboard from "../../../components/Leaderboard";

export const Mathematics = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [expandedCard, setExpandedCard] = useState(null);
  const [completedSubtopics, setCompletedSubtopics] = useState({
    algebra: Array(7).fill(false),
    geometry: Array(5).fill(false),
    trigonometry: Array(4).fill(false),
    calculus: Array(3).fill(false),
    statistics: Array(4).fill(false)
  });
  const [userProgress, setUserProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [badgeCount, setBadgeCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [userData, setUserData] = useState(null);

  // Fetch user profile data
  useEffect(() => {
    if (!isAuthenticated || !user) return;
    
    const fetchUserProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) throw error;
        setUserData(data);
      } catch (err) {
        console.error("Error fetching profile:", err.message);
      }
    };

    fetchUserProfile();
  }, [isAuthenticated, user]);

  // Fetch user progress from Supabase
  useEffect(() => {
    if (!isAuthenticated) return;
    
    const fetchUserProgress = async () => {
      setLoading(true);
      
      try {
        // Fetch user progress
        const { data: progressData } = await supabase
          .from('postutme_progress')
          .select('*')
          .eq('user_id', user.id)
          .eq('subject', 'Mathematics');
        
        // Initialize completed subtopics
        const newCompleted = {...completedSubtopics};
        
        // Mark completed subtopics
        topics.forEach(topic => {
          topic.subtopics.forEach((subtopic, subIndex) => {
            const isCompleted = progressData?.some(item => 
              item.topic === topic.id && 
              item.subtopic === subtopic.name
            );
            
            if (isCompleted) {
              newCompleted[topic.id][subIndex] = true;
            }
          });
        });
        
        setCompletedSubtopics(newCompleted);
        
        // Fetch badge count
        const { count: badgeCount } = await supabase
          .from('postutme_badges')
          .select('*', { count: 'exact' })
          .eq('user_id', user.id);
        
        setBadgeCount(badgeCount || 0);
        
        // Fetch streak
        const { data: streakData } = await supabase
          .from('user_activity')
          .select('streak')
          .eq('user_id', user.id)
          .single();
        
        setStreak(streakData?.streak || 0);
        
        setUserProgress({
          completed: progressData?.length || 0,
          total: 23 // Total subtopics in Mathematics
        });
        
      } catch (error) {
        console.error("Error fetching user progress:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserProgress();
  }, [isAuthenticated, user]);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const toggleSubTopic = async (category, index) => {
    const topic = topics.find(t => t.id === category);
    const subtopic = topic.subtopics[index];
    const isCurrentlyCompleted = completedSubtopics[category][index];
    
    try {
      // Update in Supabase
      if (isCurrentlyCompleted) {
        await supabase
          .from('postutme_progress')
          .delete()
          .eq('user_id', user.id)
          .eq('subject', 'Mathematics')
          .eq('topic', category)
          .eq('subtopic', subtopic.name);
      } else {
        await supabase
          .from('postutme_progress')
          .insert([{
            user_id: user.id,
            subject: 'Mathematics',
            topic: category,
            subtopic: subtopic.name,
            completed: true,
            points_earned: 2
          }]);
      }
      
      // Update local state
      setCompletedSubtopics(prev => ({
        ...prev,
        [category]: prev[category].map((status, i) => 
          i === index ? !status : status
        )
      }));
      
      // Update badge count if needed
      const completedCount = Object.values(completedSubtopics)
        .flat()
        .filter(Boolean).length;
      
      if (completedCount >= 5 && badgeCount < 1) {
        setBadgeCount(1);
      }
      
    } catch (error) {
      console.error("Error updating subtopic status:", error);
    }
  };

  const topics = [
    {
      id: "algebra",
      title: "Algebra",
      icon: FiDivide,
      description: "Master equations, inequalities, and algebraic expressions",
      color: "from-blue-500 to-blue-700",
      subtopics: [
        { name: "Linear Equations", path: "/mathematics/linear-equations" },
        { name: "Quadratic Equations", path: "/mathematics/quadratic-equations" },
        { name: "Simultaneous Equations", path: "/mathematics/simultaneous-equations" },
        { name: "Inequalities", path: "/mathematics/inequalities" },
        { name: "Polynomials", path: "/mathematics/polynomials" },
        { name: "Sequences & Series", path: "/mathematics/sequences-series" },
        { name: "Indices & Logarithms", path: "/mathematics/indices-logarithms" }
      ]
    },
    {
      id: "geometry",
      title: "Geometry",
      icon: FiShapes,
      description: "Understand shapes, sizes, and properties of space",
      color: "from-green-500 to-green-700",
      subtopics: [
        { name: "Coordinate Geometry", path: "/mathematics/coordinate-geometry" },
        { name: "Circle Theorems", path: "/mathematics/circle-theorems" },
        { name: "Plane Geometry", path: "/mathematics/plane-geometry" },
        { name: "Solid Geometry", path: "/mathematics/solid-geometry" },
        { name: "Vectors", path: "/mathematics/vectors" }
      ]
    },
    {
      id: "trigonometry",
      title: "Trigonometry",
      icon: FiTriangle,
      description: "Explore relationships between angles and sides of triangles",
      color: "from-purple-500 to-purple-700",
      subtopics: [
        { name: "Trigonometric Ratios", path: "/mathematics/trig-ratios" },
        { name: "Trigonometric Identities", path: "/mathematics/trig-identities" },
        { name: "Sine & Cosine Rules", path: "/mathematics/sine-cosine-rules" },
        { name: "Trigonometric Equations", path: "/mathematics/trig-equations" }
      ]
    },
    {
      id: "calculus",
      title: "Calculus",
      icon: FiPercent,
      description: "Master differentiation and integration techniques",
      color: "from-red-500 to-red-700",
      subtopics: [
        { name: "Differentiation", path: "/mathematics/differentiation" },
        { name: "Integration", path: "/mathematics/integration" },
        { name: "Applications of Calculus", path: "/mathematics/calculus-applications" }
      ]
    },
    {
      id: "statistics",
      title: "Statistics & Probability",
      icon: FiPieChart,
      description: "Analyze data and understand chance events",
      color: "from-yellow-500 to-yellow-700",
      subtopics: [
        { name: "Measures of Central Tendency", path: "/mathematics/central-tendency" },
        { name: "Probability", path: "/mathematics/probability" },
        { name: "Permutations & Combinations", path: "/mathematics/permutations-combinations" },
        { name: "Data Representation", path: "/mathematics/data-representation" }
      ]
    }
  ];

  const calculateProgress = (category) => {
    const completed = completedSubtopics[category].filter(Boolean).length;
    const total = completedSubtopics[category].length;
    return { completed, total, percentage: Math.round((completed / total) * 100) };
  };

  const handleStartPractice = (path) => {
    navigate(path);
  };

  // Get user's first name
  const firstName = userData?.full_name?.split(' ')[0] || 'Champion';

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mx-auto bg-blue-100 rounded-full p-4 w-24 h-24 flex items-center justify-center mb-6">
            <FiLock className="text-blue-600 text-4xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Restricted</h1>
          <p className="text-gray-600 mb-6">
            You need to be logged in to access Mathematics resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-600 text-white font-medium rounded-full px-6 py-3 hover:bg-blue-700 transition-colors"
            >
              Log In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="border border-blue-600 text-blue-600 font-medium rounded-full px-6 py-3 hover:bg-blue-50 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading || !userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your Mathematics progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Welcome Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm max-w-md mx-auto"
        >
          {userData.avatar_url ? (
            <img 
              src={userData.avatar_url} 
              alt={userData.full_name} 
              className="w-14 h-14 rounded-full border-2 border-blue-300 object-cover"
            />
          ) : (
            <div className="bg-blue-100 border-2 border-dashed rounded-full w-14 h-14 flex items-center justify-center">
              <FiAward className="text-blue-500 text-xl" />
            </div>
          )}
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Welcome back, {firstName}! 👋
            </h2>
            <p className="text-gray-600 text-sm">
              Ready to conquer Mathematics?
            </p>
          </div>
        </motion.div>

        {/* Main Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6 font-medium">
            <FiZap className="text-yellow-500 animate-pulse" />
            Unlock Your Math Potential!
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            {firstName ? (
              <span>
                🚀 Hey {firstName}, Master Mathematics!
              </span>
            ) : (
              <span>🚀 Mathematics Mastery</span>
            )}
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {firstName 
              ? `Solve problems and earn rewards, ${firstName}!` 
              : "Solve problems and earn rewards!"}
          </p>
        </motion.div>

        {/* Personalized Callout */}
        {firstName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-6 text-white text-center mb-10 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-3">
              {firstName}, You're Making Great Progress! 🔥
            </h2>
            <p className="text-blue-100">
              Every problem solved brings you closer to your dream university!
            </p>
          </motion.div>
        )}

        {/* Progress Summary */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Your Math Journey
              </h2>
              <p className="text-gray-600 mb-4">
                <span className="font-bold text-blue-700">
                  {userProgress?.completed || 0} 
                </span> out of 23 subtopics completed
              </p>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-700 h-4 rounded-full" 
                  style={{ 
                    width: `${userProgress ? Math.round((userProgress.completed / userProgress.total) * 100) : 0}%` 
                  }}
                ></div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-blue-50 rounded-xl p-5 flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-full p-4">
                  <FiAward className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Badges Earned</p>
                  <p className="text-2xl font-bold text-blue-700">
                    {badgeCount}
                  </p>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-5 flex items-center gap-4">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full p-4">
                  <FiStar className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Current Streak</p>
                  <p className="text-2xl font-bold text-yellow-700">
                    {streak} days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Topics Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          {topics.map((topic, index) => {
            const progress = calculateProgress(topic.id);
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${topic.color} rounded-xl p-4`}>
                        <topic.icon className="text-white text-2xl" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{topic.title}</h3>
                        <p className="text-gray-600 mt-1">{topic.description}</p>
                        
                        <div className="mt-3 flex items-center gap-4">
                          <div className="flex items-center gap-2 text-sm">
                            <FiAward className="text-blue-600" />
                            <span>{progress.completed}/{progress.total} badges</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm">
                            <FiBarChart2 className="text-blue-600" />
                            <span>{progress.percentage}% complete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="p-2 rounded-full hover:bg-blue-50">
                      {expandedCard === index ? 
                        <FiChevronUp className="text-blue-600 text-xl" /> : 
                        <FiChevronDown className="text-blue-600 text-xl" />
                      }
                    </button>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-700 h-2.5 rounded-full" 
                        style={{ width: `${progress.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-blue-700">{progress.percentage}%</span>
                  </div>
                </div>
                
                {/* Subtopic List */}
                {expandedCard === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100"
                  >
                    <div className="p-6">
                      <h4 className="font-medium text-gray-900 mb-4">
                        Subtopics ({progress.completed}/{progress.total} completed)
                      </h4>
                      
                      <div className="space-y-3">
                        {topic.subtopics.map((subtopic, subIndex) => (
                          <div 
                            key={subIndex} 
                            className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSubTopic(topic.id, subIndex);
                                }}
                                className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                                  completedSubtopics[topic.id][subIndex] 
                                    ? "border-green-500 bg-green-500 text-white" 
                                    : "border-blue-300"
                                }`}
                              >
                                {completedSubtopics[topic.id][subIndex] && <FiCheckCircle size={14} />}
                              </button>
                              
                              <span className={`font-medium ${
                                completedSubtopics[topic.id][subIndex] 
                                  ? "text-green-600" 
                                  : "text-gray-700"
                              }`}>
                                {subtopic.name}
                              </span>
                            </div>
                            
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStartPractice(subtopic.path);
                              }}
                              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                            >
                              Start Practice
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <button 
                          onClick={() => handleStartPractice(`/mathematics/${topic.id}`)}
                          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full px-6 py-3 hover:shadow-lg transition-shadow flex items-center gap-2"
                        >
                          Practice All Topics
                          <FiCalculator className="text-white" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Leaderboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Mathematics Leaderboard
            </h2>
            <Link 
              to="/post-utme/leaderboard" 
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
            >
              View Full Leaderboard
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <Leaderboard 
            limit={3} 
            title="" 
            showBadges={false} 
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white"
          />
        </motion.div>
        
        {/* Personal Encouragement */}
        {firstName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Keep Solving, {firstName}! ✨
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every equation solved brings you closer to your dream university. 
              Remember, mathematics is not about numbers but understanding!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Mathematics;