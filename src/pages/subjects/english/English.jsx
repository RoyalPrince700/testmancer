import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiBook, 
  FiChevronDown, 
  FiChevronUp, 
  FiCheckCircle,
  FiBarChart2,
  FiZap,
  FiAward,
  FiLock
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../../../provider/AuthContext';
import { supabase } from '../../../../supabase/supabaseClient';
import Leaderboard from '../../../components/Leaderboard';
import WelcomeCard from '../../../components/WelcomeCard';
import ProgressCard from '../../../components/ProgressCard';
import { ENGLISH_TOPICS } from '../../../data/englishTopics';
import * as Icons from 'react-icons/fi';
import GamifiedButton from '../../../components/GamifiedButton';

const English = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [expandedCard, setExpandedCard] = useState(null);
  const [completedSubtopics, setCompletedSubtopics] = useState({
    grammatical: Array(9).fill(false),
    vocabulary: Array(5).fill(false),
    comprehension: Array(2).fill(false),
    oral: Array(2).fill(false),
    modifiers: Array(3).fill(false)
  });
  const [loading, setLoading] = useState(true);
  const [badgeCount, setBadgeCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [userData, setUserData] = useState(null);
  const [showLockedModal, setShowLockedModal] = useState(null);

  // Derived user progress from completedSubtopics
  const userProgress = useMemo(() => {
    const completed = Object.values(completedSubtopics)
      .flat()
      .filter(status => status).length;
    return { completed, total: 21 };
  }, [completedSubtopics]);

  // Determine if a topic is unlocked
  const isTopicUnlocked = useCallback((index) => {
    if (index === 0) return true; // First topic is always unlocked
    const prevTopic = ENGLISH_TOPICS[index - 1];
    const prevProgress = calculateProgress(prevTopic.id);
    return prevProgress.completed === prevProgress.total;
  }, [completedSubtopics]);

  // Fetch user profile data
  useEffect(() => {
    if (!user) return;
    
    const fetchUserProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error.message);
        } else {
          setUserData(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err.message);
      }
    };

    fetchUserProfile();
  }, [user]);

  // Fetch user progress from Supabase
  const fetchUserProgress = useCallback(async () => {
    if (!user?.id) return;
    
    setLoading(true);
    
    try {
      const { data: progressData, error: progressError } = await supabase
        .from('postutme_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('subject', 'English');
      
      if (progressError) throw progressError;
      
      const newCompleted = {
        grammatical: Array(9).fill(false),
        vocabulary: Array(5).fill(false),
        comprehension: Array(2).fill(false),
        oral: Array(2).fill(false),
        modifiers: Array(3).fill(false)
      };
      
      if (progressData) {
        progressData.forEach(item => {
          const topicIndex = ENGLISH_TOPICS.findIndex(t => t.id === item.topic);
          if (topicIndex !== -1) {
            const subtopicIndex = ENGLISH_TOPICS[topicIndex].subtopics.findIndex(
              sub => sub.name === item.subtopic
            );
            if (subtopicIndex !== -1) {
              newCompleted[item.topic][subtopicIndex] = true;
            }
          }
        });
      }
      
      setCompletedSubtopics(newCompleted);
      
      const { count: badgeCount, error: badgeError } = await supabase
        .from('postutme_badges')
        .select('*', { count: 'exact' })
        .eq('user_id', user.id)
        .eq('subject', 'English');
      
      if (badgeError) throw badgeError;
      setBadgeCount(badgeCount || 0);
      
      const { data: streakData, error: streakError } = await supabase
        .from('user_activity')
        .select('streak')
        .eq('user_id', user.id)
        .single();
      
      if (!streakError) {
        setStreak(streakData?.streak || 0);
      }
      
    } catch (error) {
      console.error("Error fetching user progress:", error);
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    fetchUserProgress();
  }, [fetchUserProgress]);

  const toggleCard = (index) => {
    if (isTopicUnlocked(index)) {
      setExpandedCard(expandedCard === index ? null : index);
    } else {
      setShowLockedModal(index);
    }
  };

  const toggleSubTopic = async (category, index) => {
    const topic = ENGLISH_TOPICS.find(t => t.id === category);
    const subtopic = topic.subtopics[index];
    const isCurrentlyCompleted = completedSubtopics[category][index];
    
    try {
      if (isCurrentlyCompleted) {
        const { error } = await supabase
          .from('postutme_progress')
          .delete()
          .eq('user_id', user.id)
          .eq('subject', 'English')
          .eq('topic', category)
          .eq('subtopic', subtopic.name);
        
        if (error) throw new Error(`Failed to delete progress: ${error.message}`);
      } else {
        const { error } = await supabase
          .from('postutme_progress')
          .insert([{
            user_id: user.id,
            subject: 'English',
            topic: category,
            subtopic: subtopic.name,
            completed: true,
            completed_at: new Date().toISOString(),
            points_earned: 3
          }]);
        
        if (error) throw new Error(`Failed to insert progress: ${error.message}`);
      }
      
      // Update local state
      setCompletedSubtopics(prev => ({
        ...prev,
        [category]: prev[category].map((val, i) => 
          i === index ? !val : val
        )
      }));
      
      // Calculate new completed count for badge check
      const newCompletedCount = isCurrentlyCompleted 
        ? userProgress.completed - 1 
        : userProgress.completed + 1;
      
      // Check and award badge only when all subtopics are completed
      if (!isCurrentlyCompleted && newCompletedCount === 21) {
        const { data: existingBadges, error: badgeError } = await supabase
          .from('postutme_badges')
          .select('id')
          .eq('user_id', user.id)
          .eq('subject', 'English')
          .eq('badge_type', 'bronze');
        
        if (badgeError) {
          console.error('Badge query error:', badgeError.message);
          throw new Error(`Failed to query badges: ${badgeError.message}`);
        }
        
        console.log('Existing badges:', existingBadges); // Debug log
        
        if (!existingBadges?.length) {
          const { error: insertError } = await supabase
            .from('postutme_badges')
            .insert([{
              user_id: user.id,
              badge_type: 'bronze',
              subject: 'English',
              topic: category,
              earned_at: new Date().toISOString()
            }]);
          
          if (insertError) {
            console.error('Badge insertion error:', insertError.message);
            throw new Error(`Failed to insert badge: ${insertError.message}`);
          }
          console.log('Badge inserted successfully');
          setBadgeCount(prev => prev + 1);
        } else {
          console.log('Badge already exists, skipping insertion');
        }
      }
      
      // Refresh badge count to ensure consistency
      const { count: updatedBadgeCount, error: countError } = await supabase
        .from('postutme_badges')
        .select('*', { count: 'exact' })
        .eq('user_id', user.id)
        .eq('subject', 'English');
      
      if (countError) {
        console.error('Badge count error:', countError.message);
      } else {
        setBadgeCount(updatedBadgeCount || 0);
      }
      
    } catch (error) {
      console.error('Error in toggleSubTopic:', error.message);
    }
  };

  const calculateProgress = (category) => {
    const completed = completedSubtopics[category].filter(Boolean).length;
    const total = completedSubtopics[category].length;
    return { completed, total, percentage: Math.round((completed / total) * 100) };
  };

  const handleStartPractice = (path, topicIndex) => {
    if (isTopicUnlocked(topicIndex)) {
      navigate(path);
    } else {
      setShowLockedModal(topicIndex);
    }
  };

  const closeLockedModal = () => {
    setShowLockedModal(null);
  };

  const firstName = userData?.full_name?.split(' ')[0] || 'Champion';

  // Locked Topic Modal Component
  const LockedTopicModal = ({ topicIndex }) => {
    const prevTopic = ENGLISH_TOPICS[topicIndex - 1];
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 120 }}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div className="bg-white rounded-2xl p-6 max-w-md mx-auto text-center shadow-lg" role="dialog" aria-modal="true">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: 2, duration: 0.5 }}
            className="text-4xl mb-4"
          >
            🔒
          </motion.div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Whoa, {firstName}! This Topic is Locked! 🚀
          </h3>
          <p className="text-gray-500 mb-4">
            You need to conquer <span className="font-semibold text-teal-500">{prevTopic.title}</span> first to unlock this adventure! Keep pushing, champ!
          </p>
          <button
            onClick={closeLockedModal}
            className="bg-gradient-to-r from-teal-400 to-teal-600 text-white font-medium rounded-full px-6 py-2 hover:shadow-lg hover:scale-105 transition-all"
          >
            Got It!
          </button>
        </div>
      </motion.div>
    );
  };

  if (loading || !userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coral-500 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading your English adventure...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <WelcomeCard />

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6 font-medium">
            <FiZap className="text-yellow-500 animate-pulse" />
            Make Learning Fun & Rewarding!
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            {firstName ? (
              <span>
                🚀 Hey {firstName}, Master English Grammar!
              </span>
            ) : (
              <span>🚀 English Language Mastery</span>
            )}
          </h1>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {firstName 
              ? `Earn badges and climb the leaderboard, ${firstName}!` 
              : "Earn badges and climb the leaderboard!"}
          </p>
        </motion.div>

        {firstName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl p-6 text-white text-center mb-10 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-3">
              {firstName}, You're Making Great Progress! 🔥
            </h2>
            <p className="text-teal-100">
              Keep going to unlock more badges and climb the English leaderboard!
            </p>
          </motion.div>
        )}

        <ProgressCard userProgress={userProgress} badgeCount={badgeCount} streak={streak} />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          {ENGLISH_TOPICS.map((topic, index) => {
            const progress = calculateProgress(topic.id);
            const IconComponent = Icons[topic.icon];
            const isTopicCompleted = progress.completed === progress.total;
            const isUnlocked = isTopicUnlocked(index);
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 relative ${!isUnlocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                whileHover={isUnlocked ? { scale: 1.02 } : {}}
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
                
                {!isUnlocked && (
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
                    
                    <button className="p-2 rounded-full hover:bg-teal-50" disabled={!isUnlocked}>
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
                
                {expandedCard === index && isUnlocked && (
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
          })}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              English Leaderboard
            </h2>
            <Link 
              to="/post-utme/leaderboard" 
              className="text-coral-500 hover:text-coral-600 font-medium flex items-center gap-1"
            >
              View Full Leaderboard
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <Leaderboard 
            limit={3} 
            title="" 
            showBadges={false} 
            className="bg-gradient-to-r from-teal-400 to-teal-600 text-white"
          />
        </motion.div>
        
        {firstName && (
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
              Every topic you master brings you closer to your dream university. 
              Remember, champions aren't born - they're made one practice session at a time!
            </p>
          </motion.div>
        )}

        <AnimatePresence>
          {showLockedModal !== null && (
            <LockedTopicModal topicIndex={showLockedModal} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default English;