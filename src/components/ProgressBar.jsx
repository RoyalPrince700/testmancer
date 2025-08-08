// new/src/components/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ currentPage, totalPages }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">
          Section {currentPage + 1} of {totalPages}
        </span>
        <span className="font-medium text-indigo-700">
          {Math.min(currentPage + 1, totalPages)}/{totalPages} completed
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-3 rounded-full" 
          style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;