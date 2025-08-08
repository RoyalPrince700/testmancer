// src/components/TopicCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiBarChart2, FiChevronUp, FiChevronDown, FiBook, FiCheckCircle } from "react-icons/fi";

const TopicCard = ({
  topic,
  index,
  expandedCard,
  toggleCard,
  calculateProgress,
  completedSubtopics,
  toggleSubTopic,
  handleStartPractice
}) => {
  const progress = calculateProgress(topic.id);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-indigo-100"
    >
      {/* Card Header */}
      <div className="p-6 cursor-pointer" onClick={() => toggleCard(index)}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-start gap-4">
            <div className={`bg-gradient-to-br ${topic.color} rounded-xl p-4`}>
              <topic.icon className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{topic.title}</h3>
              <p className="text-gray-600 mt-1">{topic.description}</p>
              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <FiAward className="text-indigo-600" />
                  <span>{progress.completed}/{progress.total} badges</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FiBarChart2 className="text-indigo-600" />
                  <span>{progress.percentage}% complete</span>
                </div>
              </div>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-indigo-50">
            {expandedCard === index
              ? <FiChevronUp className="text-indigo-600 text-xl" />
              : <FiChevronDown className="text-indigo-600 text-xl" />}
          </button>
        </div>
        {/* Progress Bar */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-2.5 rounded-full"
              style={{ width: `${progress.percentage}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-indigo-700">{progress.percentage}%</span>
        </div>
      </div>

      {/* Dropdown Section */}
      {expandedCard === index && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-100"
        >
          <div className="p-6">
            <h4 className="font-medium text-gray-900 mb-4">
              Subtopics ({progress.completed}/{progress.total} completed)
            </h4>
            <div className="space-y-3">
              {topic.subtopics.map((subtopic, subIndex) => (
                <div
                  key={subIndex}
                  className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
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
                          : "border-indigo-300"
                      }`}
                    >
                      {completedSubtopics[topic.id][subIndex] && <FiCheckCircle size={14} />}
                    </button>
                    <span className={`font-medium ${
                      completedSubtopics[topic.id][subIndex] ? "text-green-600" : "text-gray-700"
                    }`}>
                      {subtopic.name}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStartPractice(subtopic.path);
                    }}
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
                  >
                    Start Practice
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => handleStartPractice(`/english/${topic.id}`)}
                className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-medium rounded-full px-6 py-3 hover:shadow-lg transition-shadow flex items-center gap-2"
              >
                Practice All Topics
                <FiBook className="text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TopicCard;
