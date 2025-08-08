// src/components/LearningModule.jsx
import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { 
  FiArrowLeft, 
  FiArrowRight, 
  FiAward, 
  FiCheck, 
  FiX,
  FiBarChart2
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../provider/AuthContext";
import { supabase } from "../../supabase/supabaseClient";

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
  const [pointsAwarded, setPointsAwarded] = useState(0);
  const [isMarkingComplete, setIsMarkingComplete] = useState(false);

  // Fetch user progress and points
  useEffect(() => {
    if (!isAuthenticated || !user) return;

    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        // Check if module is completed
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

        setIsCompleted(data?.completed || false);
        setPointsAwarded(data?.points_earned || 0);

        // Fetch user's total points and rank
        const { data: leaderboardData } = await supabase
          .from('leaderboard')
          .select('total_points, rank')
          .eq('user_id', user.id)
          .single();

        setTotalPoints(leaderboardData?.total_points || 0);
        setRank(leaderboardData?.rank || 0);

      } catch (error) {
        console.error("Error fetching user data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [isAuthenticated, user, subject, topic, subtopic]);

  // Automatically mark as complete when reaching last page
  useEffect(() => {
    if (isAuthenticated && 
        user && 
        !isCompleted && 
        currentPage === pages.length - 1 && 
        !isMarkingComplete) {
      markModuleComplete();
    }
  }, [currentPage, isCompleted, isAuthenticated, user]);

  const markModuleComplete = async () => {
    if (!isAuthenticated || !user || isCompleted) return;
    
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
      setShowCompletionPopup(true);

    } catch (error) {
      console.error("Error marking module complete:", error.message);
    } finally {
      setIsMarkingComplete(false);
    }
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startQuiz = () => {
    navigate(quizPath);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Completion Popup */}
      {showCompletionPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative"
          >
            <button 
              onClick={() => setShowCompletionPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
            
            <div className="text-center py-4">
              <div className="inline-block bg-gradient-to-r from-green-500 to-green-700 rounded-full p-3 mb-4">
                <FiAward className="text-white text-3xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Course Completed!
              </h3>
              
              <p className="text-gray-700 mb-6">
                You've completed the <span className="font-bold">{subtopic}</span> course and earned 
                <span className="font-bold text-green-600"> {points} points</span>!
              </p>
              
              <button
                onClick={() => {
                  setShowCompletionPopup(false);
                  startQuiz();
                }}
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-bold rounded-full px-6 py-3 hover:shadow-lg transition-shadow"
              >
                Take Quiz Now
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link to={backPath} className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              <FiArrowLeft />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              {pages[currentPage].icon}
              {pages[currentPage].title}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full">
              <FiAward className="text-yellow-500" />
              <span className="font-bold">{totalPoints} pts</span>
            </div>
            <div className="flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full">
              <FiBarChart2 className="text-indigo-600" />
              <span className="font-bold">#{rank}</span>
            </div>
          </div>
        </div>
        
        {/* Completion Badge */}
        {isCompleted && (
          <div className="mb-6 bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-xl flex items-center gap-3">
            <FiAward className="text-xl" />
            <span>You've completed {subtopic}! +{points} points earned</span>
          </div>
        )}
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">
              Section {currentPage + 1} of {pages.length}
            </span>
            <span className="font-medium text-indigo-700">
              {Math.min(currentPage + 1, pages.length)}/{pages.length} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-3 rounded-full" 
              style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Content Card */}
        <motion.div 
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-indigo-100"
        >
          {pages[currentPage].content}
        </motion.div>
        
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button 
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-full ${
              currentPage === 0 
                ? "text-gray-400 cursor-not-allowed" 
                : "text-indigo-700 hover:bg-indigo-50"
            }`}
          >
            <FiArrowLeft />
            Previous
          </button>
          
          {currentPage < pages.length - 1 ? (
            <button 
              onClick={nextPage}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-medium rounded-full px-6 py-3 hover:shadow-lg transition-shadow"
            >
              Next Section
              <FiArrowRight />
            </button>
          ) : (
            <button 
              onClick={startQuiz}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-full px-8 py-4 hover:shadow-lg transform hover:scale-105 transition-all"
            >
              {isCompleted ? "Retake Quiz" : "Take Quiz Now!"}
              <FiAward />
            </button>
          )}
        </div>
        
        {/* Badges Preview */}
        {currentPage < pages.length - 1 && badges.length > 0 && (
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <FiAward className="text-yellow-500" />
              Complete all sections to earn these badges:
            </h3>
            
            <div className="flex justify-center gap-6 flex-wrap">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center mb-2`}>
                    <FiAward className="text-white text-2xl" />
                  </div>
                  <span className="font-medium text-gray-700 text-sm">{badge.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningModule;