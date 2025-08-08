// new/src/components/ProgressCard.jsx
import React from 'react';
import { FiAward, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProgressCard = ({ userProgress, badgeCount, streak, subject = 'English' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-10"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Your {subject} Journey
          </h2>
          <p className="text-gray-600 mb-4">
            <span className="font-bold text-indigo-700">
              {userProgress?.completed || 0} 
            </span> out of {userProgress?.total || 0} subtopics completed
          </p>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-4 rounded-full" 
              style={{ 
                width: `${userProgress ? Math.round((userProgress.completed / userProgress.total) * 100) : 0}%` 
              }}
            ></div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-indigo-50 rounded-xl p-5 flex items-center gap-4">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full p-4">
              <FiAward className="text-white text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Badges Earned</p>
              <p className="text-2xl font-bold text-indigo-700">
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
  );
};

export default ProgressCard;