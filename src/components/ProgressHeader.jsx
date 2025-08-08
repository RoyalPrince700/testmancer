// new/src/components/ProgressHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiAward, FiBarChart2 } from 'react-icons/fi';

const ProgressHeader = ({ title, icon, totalPoints, rank }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
      <div className="flex items-center gap-4">
        <Link to="/english" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
          <FiArrowLeft />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          {icon}
          {title}
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
  );
};

export default ProgressHeader;