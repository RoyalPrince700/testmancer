// new/src/components/BadgesPreview.jsx
import React from 'react';
import { FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';

const BadgesPreview = ({ badges }) => {
  return (
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
  );
};

export default BadgesPreview;