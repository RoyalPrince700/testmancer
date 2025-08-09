// EnglishCard.jsx
import React from 'react';
import { FiChevronDown, FiChevronUp, FiCheckCircle, FiBarChart2, FiAward, FiLock, FiBook } from 'react-icons/fi';
import { motion } from 'framer-motion';
import GamifiedButton from '../components/GamifiedButton';

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
  const IconComponent = topic.iconComponent; // Assuming you'll pass the icon component
  
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
          className="absolute top-4 right-4 bg-yellow-400 rounded-full p-2 shadow-md border border-yellow-500"
          title="Topic Mastered!"
          aria-label={`Badge awarded for completing all subtopics in ${topic.title}`}
        >
          <FiAward className="text-white text-2xl" />
        </motion.div>
      )}
      
      {!isTopicUnlocked && (
        <div className="absolute top-4 left-4 bg-gray-200 rounded-full p-2 shadow-sm">
          <FiLock className="text-gray-400 text-2xl" aria-label={`Topic ${topic.title} is locked`} />
        </div>
      )}
      
      <div 
        className="p-6 cursor-pointer"
        onClick={() => toggleCard(index)}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-start gap-4">
            <div className={`bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl p-4`}>
              <IconComponent className="text-white text-2xl" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800">{topic.title}</h3>
              <p className="text-gray-500 mt-1">{topic.description}</p>
              
              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <FiBarChart2 className="text-coral-500" />
                  <span>{progress.completed}/{progress.total} subtopics</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <FiBarChart2 className="text-coral-500" />
                  <span>{progress.percentage}% complete</span>
                </div>
              </div>
            </div>
          </div>
          
          <button className="p-2 rounded-full hover:bg-teal-50" disabled={!isTopicUnlocked}>
            {expandedCard === index ? 
              <FiChevronUp className="text-coral-500 text-xl" /> : 
              <FiChevronDown className="text-coral-500 text-xl" />
            }
          </button>
        </div>
        
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-coral-500 to-coral-600 h-2.5 rounded-full" 
              style={{ width: `${progress.percentage}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-coral-500">{progress.percentage}%</span>
        </div>
      </div>
      
      {expandedCard === index && isTopicUnlocked && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-200"
        >
          <div className="p-6">
            <h4 className="font-medium text-gray-800 mb-4">
              Subtopics ({progress.completed}/{progress.total} completed)
            </h4>
            
            <div className="space-y-3">
              {topic.subtopics.map((subtopic, subIndex) => (
                <div 
                  key={subIndex} 
                  className="flex items-center justify-between p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubTopic(topic.id, subIndex);
                      }}
                      className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                        completedSubtopics[topic.id][subIndex] 
                          ? "border-green-500 bg-green-500 text-white" 
                          : "border-teal-300"
                      }`}
                    >
                      {completedSubtopics[topic.id][subIndex] && <FiCheckCircle size={14} />}
                    </button>
                    
                    <span className={`font-medium ${
                      completedSubtopics[topic.id][subIndex] 
                        ? "text-green-600" 
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
                    className="text-coral-500 hover:text-coral-600 font-medium flex items-center gap-1"
                  >
                    Start Practice
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-end">
              <GamifiedButton 
                onClick={() => handleStartPractice(`/english/${topic.id}`, index)}
                icon={FiBook}
              >
                Practice All Topics
              </GamifiedButton>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EnglishCard;