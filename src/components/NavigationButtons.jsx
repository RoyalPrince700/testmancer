// new/src/components/NavigationButtons.jsx
import React from 'react';
import { FiArrowLeft, FiArrowRight, FiAward } from 'react-icons/fi';

const NavigationButtons = ({ currentPage, totalPages, prevPage, nextPage, startQuiz, isCompleted }) => {
  return (
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
      
      {currentPage < totalPages - 1 ? (
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
  );
};

export default NavigationButtons;