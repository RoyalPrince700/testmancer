import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  FiArrowLeft, 
  FiArrowRight, 
  FiAward, 
  FiCheck, 
  FiX,
  FiBarChart2,
  FiClock
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../../../provider/AuthContext";
import { supabase } from "../../../../supabase/supabaseClient";
import TestMancerLoader from "../../../components/TestMancer";

const LearningModule = ({
  moduleId,
  subject,
  topic,
  subtopic,
  pages,
  points,
  quizPath,
  backPath,
  badges = []
}) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [rank, setRank] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [showNoPointsPopup, setShowNoPointsPopup] = useState(false);
  const [pointsAwarded, setPointsAwarded] = useState(0);
  const [isMarkingComplete, setIsMarkingComplete] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [wasCompletedOnLoad, setWasCompletedOnLoad] = useState(false);
  const [timeSpentOnPage, setTimeSpentOnPage] = useState(0);
  const [showTimeWarning, setShowTimeWarning] = useState(false);
  const minimumTimeRequired = 15; // Minimum seconds required per page

  // Create a ref for the content container
  const contentRef = useRef(null);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpentOnPage(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentPage]);

  // Reset timer when page changes
  useEffect(() => {
    setTimeSpentOnPage(0);
  }, [currentPage]);

  // Fetch user progress and gems (points in backend)
  useEffect(() => {
    if (!isAuthenticated || !user) return;

    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        // First, always fetch the leaderboard stats
        const { data: leaderboardData } = await supabase
          .from('leaderboard')
          .select('total_points, rank')
          .eq('user_id', user.id)
          .single();

        setTotalPoints(leaderboardData?.total_points || 0);
        setRank(leaderboardData?.rank || 0);

        // Then check if module is completed
        const { data, error } = await supabase
          .from('postutme_progress')
          .select('completed, points_earned')
          .eq('user_id', user.id)
          .eq('subject', subject)
          .eq('topic', topic)
          .eq('subtopic', subtopic)
          .single();

        if (error && !error.message.includes('No rows found')) {
          throw error;
        }

        // Set completion states
        setIsCompleted(data?.completed || false);
        setWasCompletedOnLoad(data?.completed || false);
        setPointsAwarded(data?.points_earned || 0);

      } catch (error) {
        console.error("Error fetching user data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [isAuthenticated, user, subject, topic, subtopic, moduleId]);

  // Automatically mark as complete when reaching last page
  useEffect(() => {
    if (
      isAuthenticated && 
      user && 
      currentPage === pages.length - 1 && 
      !isMarkingComplete
    ) {
      if (!wasCompletedOnLoad) {
        // First-time completion
        markModuleComplete();
      } else {
        // Already completed from before
        setShowNoPointsPopup(true);
      }
    }
  }, [currentPage, wasCompletedOnLoad, isAuthenticated, user]);

  const markModuleComplete = async () => {
    if (!isAuthenticated || !user || isCompleted) return;
    
    // Check if user spent enough time
    if (timeSpentOnPage < minimumTimeRequired) {
      setShowTimeWarning(true);
      return;
    }

    setIsMarkingComplete(true);
    
    try {
      const { error } = await supabase
        .from('postutme_progress')
        .upsert({
          user_id: user.id,
          subject: subject,
          topic: topic,
          subtopic: subtopic,
          completed: true,
          completed_at: new Date().toISOString(),
          points_earned: points
        }, {
          onConflict: 'user_id,subject,topic,subtopic'
        });

      if (error) throw error;

      // Refresh user data
      const { data: leaderboardData } = await supabase
        .from('leaderboard')
        .select('total_points, rank')
        .eq('user_id', user.id)
        .single();

      setTotalPoints(leaderboardData?.total_points || 0);
      setRank(leaderboardData?.rank || 0);
      setIsCompleted(true);
      setPointsAwarded(points);
      setShowSparkles(true);
      setTimeout(() => setShowCompletionPopup(true), 500);

    } catch (error) {
      console.error("Error marking module complete:", error.message);
    } finally {
      setIsMarkingComplete(false);
    }
  };

  // Scroll to the very top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (timeSpentOnPage < minimumTimeRequired) {
      setShowTimeWarning(true);
      return;
    }

    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const startQuiz = () => {
    navigate(quizPath);
  };

  if (isLoading) {
    return (
     <TestMancerLoader />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Sparkle Confetti */}
      {showSparkles && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              initial={{ 
                scale: 0,
                opacity: 1,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
                y: Math.random() * 100 - 100
              }}
              transition={{ 
                duration: 1.5, 
                ease: "easeOut",
                delay: i * 0.02 
              }}
              onAnimationComplete={() => i === 49 && setShowSparkles(false)}
            >
              {["✨", "🎉", "🌟", "🏆"][Math.floor(Math.random() * 4)]}
            </motion.div>
          ))}
        </div>
      )}

      {/* Completion Popup */}
      {showCompletionPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative border-4 border-teal-400"
          >
            <div className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-full p-2">
              <FiAward size={28} />
            </div>
            
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-teal-400 to-teal-600 w-24 h-24 rounded-full mb-4 mx-auto">
                <div className="text-4xl">🏆</div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-teal-600 to-pink-500 bg-clip-text text-transparent">
                Module Mastered! 🎉
              </h3>
              
              <div className="bg-teal-50 rounded-xl p-4 mb-4 border border-teal-100">
                <p className="text-gray-700">
                  You've completed <span className="font-bold text-teal-700">{subtopic}</span> and earned
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-2xl font-bold text-teal-700">+{points} gems</span>
                  <span className="text-xl">💎</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={() => setShowCompletionPopup(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl px-4 py-3 transition-colors flex items-center justify-center gap-2"
                >
                  <FiX /> Later
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowCompletionPopup(false);
                    startQuiz();
                  }}
                  className="flex-1 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold rounded-xl px-4 py-3 hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                >
                  Take Quiz Now <FiArrowRight />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* No Points Popup */}
      {showNoPointsPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative border-4 border-teal-400"
          >
            <div className="absolute -top-4 -right-4 bg-teal-500 text-white rounded-full p-2">
              <FiAward size={28} />
            </div>
            
            <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                Module Completed Before!
              </h3>
              
              <div className="bg-teal-50 rounded-xl p-4 mb-4 border border-teal-100">
                <p className="text-gray-700">
                  You've already completed <span className="font-bold text-teal-700">{subtopic}</span> and earned your points.
                </p>
                <p className="mt-2 text-gray-700">
                  Try a new topic to earn more gems! 💎
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={() => setShowNoPointsPopup(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl px-4 py-3 transition-colors flex items-center justify-center gap-2"
                >
                  <FiX /> Close
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowNoPointsPopup(false);
                    navigate("/post-utme/english");
                  }}
                  className="flex-1 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold rounded-xl px-4 py-3 hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                >
                  Browse New Topics <FiArrowRight />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Time Warning Popup */}
      {showTimeWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative border-4 border-yellow-400"
          >
            <div className="absolute -top-4 -right-4 bg-yellow-500 text-white rounded-full p-2">
              <FiClock size={28} />
            </div>
            
            <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Slow Down! ⏳
              </h3>
              
              <div className="bg-yellow-50 rounded-xl p-4 mb-4 border border-yellow-100">
                <p className="text-gray-700">
                  You need to spend at least <strong>{minimumTimeRequired} seconds</strong> on each page to earn gems.
                </p>
                <p className="mt-2 text-gray-700">
                  Time spent: <strong>{timeSpentOnPage}s / {minimumTimeRequired}s</strong>
                </p>
              </div>
              
              <button
                onClick={() => setShowTimeWarning(false)}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl px-4 py-3 hover:shadow-lg transition-shadow"
              >
                Got it! I'll read properly
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
          {/* Left section with arrow and title */}
          <div className="flex flex-col items-start gap-1">
            <Link className="mb-1" to='/post-utme/current-affairs'>
              <FiArrowLeft className="text-xl" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              {pages[currentPage].title}
            </h1>
          </div>
          
          {/* Right section with badges */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-teal-100 px-3 py-1 rounded-full text-teal-800">
              <FiAward className="text-yellow-500" />
              <span className="font-bold">{totalPoints} gems</span>
              <span className="text-xl">💎</span>
            </div>
            <div className="flex items-center gap-2 bg-pink-100 px-3 py-1 rounded-full text-pink-800">
              <FiBarChart2 className="text-pink-600" />
              <span className="font-bold">#{rank}</span>
            </div>
          </div>
        </div>
        
        {/* Completion Badge */}
        {isCompleted && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-gradient-to-r from-teal-500 to-teal-700 text-white p-4 rounded-xl flex items-center gap-3"
          >
            <FiAward className="text-xl" />
            <span>You've completed {subtopic}! +{points} gems earned 💎</span>
          </motion.div>
        )}
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">
              Section {currentPage + 1} of {pages.length}
            </span>
            <span className="font-medium text-teal-700">
              {Math.min(currentPage + 1, pages.length)}/{pages.length} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-teal-400 to-teal-600 h-3 rounded-full" 
              style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Content Card */}
        <motion.div 
          key={currentPage}
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-teal-100"
        >
          {pages[currentPage].content}
        </motion.div>
        
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <motion.button 
            whileHover={{ x: -5 }}
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-full ${
              currentPage === 0 
                ? "text-gray-400 cursor-not-allowed" 
                : "text-teal-700 hover:bg-teal-50"
            }`}
          >
            <FiArrowLeft />
            Previous
          </motion.button>
          
          {currentPage < pages.length - 1 ? (
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextPage}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-medium rounded-full px-6 py-3 hover:shadow-lg transition-shadow"
            >
              Next
              <FiArrowRight />
            </motion.button>
          ) : (
            <motion.div
              animate={!showCompletionPopup && isCompleted ? {
                scale: [1, 1.1, 1],
                transition: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }
              } : {}}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setCurrentPage(0); scrollToTop(); }}
                className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold rounded-full px-8 py-4 hover:shadow-lg shadow-md"
              >
                {isCompleted ? "Retake" : "Take Quiz Now! 🚀"}
                <FiAward />
              </motion.button>
            </motion.div>
          )}
        </div>
        
        {/* Badges Preview */}
        {currentPage < pages.length - 1 && badges.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center p-6 bg-gradient-to-br from-teal-50 to-pink-50 rounded-2xl border border-teal-200"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <FiAward className="text-yellow-500" />
              Complete all sections to unlock:
            </h3>
            
            <div className="flex justify-center gap-6 flex-wrap">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-20 h-20 rounded-2xl ${badge.color} flex items-center justify-center mb-2 shadow-md`}
                  >
                    <div className="text-3xl">
                      {badge.emoji || "🏅"}
                    </div>
                  </div>
                  <span className="font-medium text-gray-700">
                    {badge.name || "Unnamed Badge"}
                  </span>
                  <span className="text-sm text-teal-600">
                    +{badge.points ?? 0} gems 💎
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LearningModule;