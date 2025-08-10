import React from 'react';
import { 
  FiChevronDown, FiChevronUp, FiCheckCircle, 
  FiBarChart2, FiAward, FiLock, FiBook 
} from 'react-icons/fi';
import { motion } from 'framer-motion';

// Single color theme mapping
const colorMap = [
  { bg: 'bg-teal-500', text: 'text-teal-500', border: 'border-teal-500', gradient: 'from-teal-400 to-teal-600' },
  { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500', gradient: 'from-pink-400 to-pink-600' },
  { bg: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500', gradient: 'from-orange-400 to-orange-500' },
  { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500', gradient: 'from-purple-400 to-indigo-500' },
  { bg: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-500', gradient: 'from-yellow-400 to-amber-500' }
];

const EnglishCard = ({
  topic,
  index,
  expandedCard,
  toggleCard,
  isTopicUnlocked,
  isTopicCompleted,
  completedSubtopics,
  toggleSubTopic,
  handleStartPractice,
  calculateProgress
}) => {
  const progress = calculateProgress(topic.id);
  const IconComponent = topic.iconComponent;
  const theme = colorMap[index % colorMap.length];

  return (
    <motion.div 
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 relative ${!isTopicUnlocked ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={isTopicUnlocked ? { scale: 1.02 } : {}}
    >
      {isTopicCompleted && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
          className={`absolute top-4 right-4 ${theme.bg} rounded-full p-2 shadow-md border ${theme.border}`}
        >
          <FiAward className="text-white text-2xl" />
        </motion.div>
      )}

      {!isTopicUnlocked && (
        <div className="absolute top-4 left-4 bg-gray-200 rounded-full p-2 shadow-sm">
          <FiLock className="text-gray-400 text-2xl" />
        </div>
      )}

      <div 
        className="p-6 cursor-pointer"
        onClick={() => toggleCard(index)}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-start gap-4">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 3 }}
              className={`bg-gradient-to-br ${theme.gradient} rounded-xl p-4 shadow-md`}
            >
              <IconComponent className="text-white text-2xl" />
            </motion.div>

            <div>
              <h3 className="text-xl font-bold text-gray-800">{topic.title}</h3>
              <p className="text-gray-500 mt-1">{topic.description}</p>
              
              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiBarChart2 className={theme.text} />
                  <span>{progress.completed}/{progress.total} subtopics</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FiBarChart2 className={theme.text} />
                  <span>{progress.percentage}% complete</span>
                </div>
              </div>
            </div>
          </div>

          <button className="p-2 rounded-full hover:bg-gray-100" disabled={!isTopicUnlocked}>
            {expandedCard === index ? 
              <FiChevronUp className={`${theme.text} text-xl`} /> : 
              <FiChevronDown className={`${theme.text} text-xl`} />
            }
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress.percentage}%` }}
              transition={{ duration: 0.5 }}
              className={`h-2.5 rounded-full ${theme.bg}`}
            ></motion.div>
          </div>
          <span className={`text-sm font-medium ${theme.text}`}>
            {progress.percentage}%
          </span>
        </div>
      </div>

      {/* Expanded subtopics */}
      {expandedCard === index && isTopicUnlocked && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`border-t border-gray-200 bg-gradient-to-b from-white via-${theme.bg.replace('bg-', '')}/5 to-white`}
        >
          <div className="p-6">
            <h4 className="font-medium text-gray-800 mb-4">
              Subtopics ({progress.completed}/{progress.total} completed)
            </h4>

            <div className="space-y-3">
              {topic.subtopics.map((subtopic, subIndex) => (
                <div 
                  key={subIndex} 
                  className={`flex items-center justify-between p-4 rounded-lg border hover:shadow-sm transition-all ${theme.bg} bg-opacity-5`}
                >
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubTopic(topic.id, subIndex);
                      }}
                      className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                        completedSubtopics[topic.id][subIndex] 
                          ? `${theme.border} ${theme.bg} text-white` 
                          : `${theme.border} bg-white`
                      }`}
                    >
                      {completedSubtopics[topic.id][subIndex] && <FiCheckCircle size={14} />}
                    </button>
                    
                    <span className={`font-medium ${
                      completedSubtopics[topic.id][subIndex] 
                        ? theme.text 
                        : "text-gray-700"
                    }`}>
                      {subtopic.name}
                    </span>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStartPractice(subtopic.path, index);
                    }}
                    className={`${theme.text} hover:opacity-80 font-medium flex items-center gap-1`}
                  >
                    Practice
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* New Practice All Topics Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => handleStartPractice(`/english/${topic.id}`, index)}
                className={`${theme.bg} text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90 flex items-center gap-2`}
              >
                <FiBook />
                Practice All Topics
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EnglishCard;
