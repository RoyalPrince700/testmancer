import React, { useState, useEffect } from "react";
import { FiHelpCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { supabase } from "../../supabase/supabaseClient";

export const Hint = ({ 
  questionHint, 
  userId, 
  totalPoints,  // Renamed from totalPoints
  setTotalPoints,  // Renamed from setTotalPoints
  isHintTaken,
  setIsHintTaken,
  quizId,  // Required: e.g., subtopic
  questionId  // Required: e.g., question ID
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showFirstHintPopup, setShowFirstHintPopup] = useState(false);
  const [showInsufficientGemsPopup, setShowInsufficientGemsPopup] = useState(false);
  const [isFirstHintEver, setIsFirstHintEver] = useState(null); // null until checked

  // Check if user has ever taken a hint
  useEffect(() => {
    if (!userId) return;

    const checkFirstHint = async () => {
      try {
        const { data, error } = await supabase
          .from('point_deductions')
          .select('id')
          .eq('user_id', userId)
          .eq('reason', 'hint')
          .limit(1);
        
        if (error && !error.message.includes("No rows found")) {
          throw error;
        }
        
        setIsFirstHintEver(data?.length === 0);
      } catch (error) {
        console.error("Error checking hint history:", error);
        setShowInsufficientGemsPopup(true); // Fallback to popup for errors
      }
    };

    checkFirstHint();
  }, [userId]);

  const handleTakeHint = async () => {
    if (isProcessing || isFirstHintEver === null) return;
    
    if (showHint) {
      setShowHint(false);
      return;
    }
    
    if (isHintTaken) {
      setShowHint(true);
      return;
    }
    
    if (totalPoints < 2) {
      setShowInsufficientGemsPopup(true);
      return;
    }
    
    if (isFirstHintEver) {
      setShowFirstHintPopup(true);
      return;
    }
    
    await proceedWithHint();
  };

  const proceedWithHint = async () => {
    setIsProcessing(true);
    
    try {
      // Verify gems from leaderboard
      const { data: lbData, error: fetchError } = await supabase
        .from('leaderboard')
        .select('total_points')
        .eq('user_id', userId)
        .single();
      
      if (fetchError || lbData.total_points < 2) {
        setShowInsufficientGemsPopup(true);
        throw new Error(fetchError?.message || "Insufficient gems");
      }

      // Insert deduction
      const { error: insertError } = await supabase
        .from('point_deductions')
        .insert({
          user_id: userId,
          points_deducted: 2,
          reason: 'hint',
          quiz_id: quizId,
          question_id: questionId
        });
      
      if (insertError) {
        if (insertError.code === '23505') {  // Unique constraint violation
          setShowHint(true);
          setIsHintTaken(true);
          return;
        }
        throw insertError;
      }
      
      // Update local state
      setTotalPoints(lbData.total_points - 2);
      setIsHintTaken(true);
      setShowHint(true);
      setIsFirstHintEver(false);
    } catch (error) {
      console.error("Error deducting gems:", error);
      setShowInsufficientGemsPopup(true);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFirstHintConfirm = async () => {
    setShowFirstHintPopup(false);
    await proceedWithHint();
  };

  const handleInsufficientGemsClose = () => {
    setShowInsufficientGemsPopup(false);
  };

  return (
    <div>
      {/* Hint Button */}
      <motion.button
        onClick={handleTakeHint}
        disabled={isProcessing || isFirstHintEver === null}
        whileHover={{ scale: (isProcessing || isFirstHintEver === null) ? 1 : 1.02 }}
        className={`flex items-center gap-2 px-4 py-3 rounded-full ${
          isProcessing || isFirstHintEver === null
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-teal-200 to-teal-300 text-teal-900 font-semibold shadow-sm hover:shadow-md'
        }`}
      >
        <FiHelpCircle />
        {isProcessing ? "Processing..." : showHint ? "Hide Hint" : "Hint"}
      </motion.button>
      
      {/* Hint Content */}
      {showHint && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-teal-50 rounded-xl border-2 border-teal-100"
        >
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Hint:</span> {questionHint}
          </div>
        </motion.div>
      )}

      {/* First Hint Popup */}
      {showFirstHintPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm relative overflow-hidden"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg mb-4">
                <FiHelpCircle className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Unlock a Hint! 🎉</h3>
              <p className="text-gray-700 mb-4">
                Heads up! Each time you use a hint, <span className="font-bold text-teal-700">2 gems 💎</span> will be deducted from your total gems. Ready to get a clue?
              </p>
              <button
                onClick={handleFirstHintConfirm}
                className="w-full rounded-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold shadow-md hover:scale-102 transform transition-transform"
              >
                Got it! Show Hint
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Insufficient Gems Popup */}
      {showInsufficientGemsPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm relative overflow-hidden"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg mb-4">
                <FiHelpCircle className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Not Enough Gems! 💎</h3>
              <p className="text-gray-700 mb-4">
                You need <span className="font-bold text-teal-700">2 gems 💎</span> to unlock a hint. Take more subtopics and quizzes to earn more gems!
              </p>
              <button
                onClick={handleInsufficientGemsClose}
                className="w-full rounded-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold shadow-md hover:scale-102 transform transition-transform"
              >
                Okay, I’ll Earn More!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};