// new/src/components/CompletionPopUp.jsx
import React from 'react';
import { FiAward, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CompletionPopup = ({ subtopic, pointsAwarded, onClose, onTakeQuiz }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative"
      >
        <button 
          onClick={onClose}
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
            <span className="font-bold text-green-600"> {pointsAwarded} points</span>!
          </p>
          
          <button
            onClick={onTakeQuiz}
            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-bold rounded-full px-6 py-3 hover:shadow-lg transition-shadow"
          >
            Take Quiz Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CompletionPopup;