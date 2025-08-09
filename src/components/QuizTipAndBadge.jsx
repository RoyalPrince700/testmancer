// QuizTipAndBadge.jsx
import React from "react";
import { FiEdit, FiBookOpen, FiMessageSquare, FiBookmark, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";
import { supabase } from "../../supabase/supabaseClient";


const QuizTipAndBadge = () => {
  return (
    <>
      {/* Practice Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl my-10 p-6 text-white mb-12"
      >
        <h2 className="text-2xl font-bold mb-4">English Quiz Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Read questions carefully before answering",
            "Manage your time wisely during the quiz",
            "Review grammar rules before attempting grammatical quizzes",
            "Build your vocabulary with daily practice",
            "Pay attention to context in comprehension quizzes",
            "Practice identifying errors in sentences",
          ].map((tip, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-1 mt-1">
                <FiBookmark className="text-white text-sm" />
              </div>
              <p className="text-teal-100">{tip}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Badges Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Earn English Quiz Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Grammar Guru",
              description: "Complete all grammatical quizzes with 90%+ score",
              icon: <FiEdit className="text-teal-500 text-3xl" />,
              color: "bg-teal-100",
            },
            {
              name: "Vocabulary Master",
              description: "Score 100% on all vocabulary quizzes",
              icon: <FiBookOpen className="text-coral-500 text-3xl" />,
              color: "bg-coral-100",
            },
            {
              name: "Comprehension Expert",
              description: "Complete comprehension quizzes in record time",
              icon: <FiMessageSquare className="text-yellow-500 text-3xl" />,
              color: "bg-yellow-100",
            },
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className={`${badge.color} p-6 rounded-xl flex flex-col items-center text-center`}
            >
              <div className="mb-4">{badge.icon}</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{badge.name}</h3>
              <p className="text-gray-500">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

       {/* Footer Motivation
        {firstName && isAuthenticated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Keep Going, {firstName}! ✨
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every quiz you master brings you closer to your dream university. 
              Champions aren't born - they're made one quiz at a time!
            </p>
          </motion.div>
        )} */}
    </>
  );
};

export default QuizTipAndBadge;