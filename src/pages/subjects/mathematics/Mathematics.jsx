// src/pages/subjects/english/Mathematics.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiChevronDown, 
  FiChevronUp, 
  FiCheckCircle,
  FiBarChart2,
  FiZap,
  FiAward,
  FiLock,
  FiBook
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
import EnglishCard from '../../../components/EnglishCard';
import LoadingSpinner from '../../../components/LoadingSpinner';
import TestMancerLoader from '../../../components/TestMancer';

const Mathematics = () => {
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
  const [showUnlockPopup, setShowUnlockPopup] = useState(null);
  const [showBadgePopup, setShowBadgePopup] = useState(null);
  // NEW: State to store admin status
  const [isAdmin, setIsAdmin] = useState(false);

  const userProgress = useMemo(() => {
    const completed = Object.values(completedSubtopics)
      .flat()
      .filter(status => status).length;
    return { completed, total: 21 };
  }, [completedSubtopics]);

  const isTopicUnlocked = useCallback((index) => {
    // If user is admin, unlock all topics
    if (isAdmin) return true;
    // Existing logic for non-admin users
    if (index === 0) return true;
    const prevTopic = ENGLISH_TOPICS[index - 1];
    const prevProgress = calculateProgress(prevTopic.id);
    return prevProgress.completed === prevProgress.total;
  }, [completedSubtopics, isAdmin]);

  useEffect(() => {
    if (!user) return;
    const fetchUserProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*, role") // Updated to include role
          .eq("id", user.id)
          .single();
        if (!error) {
          setUserData(data);
          setIsAdmin(data.role === 'admin'); // Set admin status
        } else {
          console.error("Error fetching user profile:", error.message);
        }
      } catch (err) {
        console.error("Unexpected error:", err.message);
      }
    };
    fetchUserProfile();
  }, [user]);

  const fetchUserProgress = useCallback(async () => {
    if (!user?.id) return;
    setLoading(true);
    try {
      const { data: progressData } = await supabase
        .from('postutme_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('subject', 'English');
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

      const { count: badgeCount } = await supabase
        .from('postutme_badges')
        .select('*', { count: 'exact' })
        .eq('user_id', user.id)
        .eq('subject', 'English');
      setBadgeCount(badgeCount || 0);

      const { data: streakData } = await supabase
        .from('user_activity')
        .select('streak')
        .eq('user_id', user.id)
        .single();
      setStreak(streakData?.streak || 0);
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
      if (expandedCard !== index && !completedSubtopics[ENGLISH_TOPICS[index].id].some(Boolean)) {
        setShowUnlockPopup(index);
      }
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
        .upsert(
          [{
            user_id: user.id,
            subject: 'English',
            topic: category,
            subtopic: subtopic.name,
            completed: true,
            completed_at: new Date().toISOString(),
            points_earned: 3
          }],
          {
            onConflict: ['user_id', 'subject', 'topic', 'subtopic'], // Specify the unique constraint columns
            ignoreDuplicates: false // Update existing record
          }
        );
      if (error) throw new Error(`Failed to upsert progress: ${error.message}`);
    }

    setCompletedSubtopics(prev => ({
      ...prev,
      [category]: prev[category].map((val, i) =>
        i === index ? !val : val
      )
    }));

    const newCompletedCount = isCurrentlyCompleted
      ? userProgress.completed - 1
      : userProgress.completed + 1;

    if (!isCurrentlyCompleted && newCompletedCount === 21) {
      const { data: existingBadges } = await supabase
        .from('postutme_badges')
        .select('id')
        .eq('user_id', user.id)
        .eq('subject', 'English')
        .eq('badge_type', 'bronze');
      if (!existingBadges?.length) {
        await supabase
          .from('postutme_badges')
          .insert([{
            user_id: user.id,
            badge_type: 'bronze',
            subject: 'English',
            topic: category,
            earned_at: new Date().toISOString()
          }]);
        setBadgeCount(prev => prev + 1);
        setShowBadgePopup({
          type: 'bronze',
          message: `🎉 Congratulations ${firstName}! You've earned the Bronze Badge in English!`
        });
      }
    }

    const { count: updatedBadgeCount } = await supabase
      .from('postutme_badges')
      .select('*', { count: 'exact' })
      .eq('user_id', user.id)
      .eq('subject', 'English');
    setBadgeCount(updatedBadgeCount || 0);
  } catch (error) {
    console.error('Error in toggleSubTopic:', error.message);
    alert('Failed to update progress. Please try again or contact support.');
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

  const closeLockedModal = () => setShowLockedModal(null);
  const firstName = userData?.full_name?.split(' ')[0] || 'Champion';

  const LockedTopicModal = ({ topicIndex }) => {
    const prevTopic = ENGLISH_TOPICS[topicIndex - 1];
    return (
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3, type: 'spring', stiffness: 120 }} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-2xl p-6 max-w-md mx-auto text-center shadow-lg">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Whoa, {firstName}! This Topic is Locked! 🚀</h3>
          <p className="text-gray-500 mb-4">You need to conquer <span className="font-semibold text-teal-500">{prevTopic.title}</span> first to unlock this adventure! Keep pushing, champ!</p>
          <button onClick={closeLockedModal} className="bg-gradient-to-r from-teal-400 to-teal-600 text-white font-medium rounded-full px-6 py-2">Got It!</button>
        </div>
      </motion.div>
    );
  };

  const UnlockPopup = ({ topicIndex, onClose }) => (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md mx-auto text-center shadow-lg">
        <h3 className="text-2xl font-bold text-green-600 mb-3">🔥 New Topic Unlocked!</h3>
        <p className="mb-4">Well done, {firstName}! You’ve unlocked <b>{ENGLISH_TOPICS[topicIndex].title}</b>. Keep up the momentum!</p>
        <button onClick={onClose} className="bg-green-500 text-white px-6 py-2 rounded-full">Let’s Go 🚀</button>
      </div>
    </motion.div>
  );

  const BadgePopup = ({ badge, onClose }) => (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md mx-auto text-center shadow-lg">
        <div className="text-5xl mb-3">🏅</div>
        <h3 className="text-xl font-bold text-yellow-600 mb-3">Badge Earned!</h3>
        <p className="mb-4">{badge.message}</p>
        <button onClick={onClose} className="bg-yellow-500 text-white px-6 py-2 rounded-full">Awesome! 🎯</button>
      </div>
    </motion.div>
  );

  if (loading || !userData) return <TestMancerLoader />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-8">
          {ENGLISH_TOPICS.map((topic, index) => {
            const progress = calculateProgress(topic.id);
            const IconComponent = Icons[topic.icon];
            const isTopicCompleted = progress.completed === progress.total;
            const isUnlocked = isTopicUnlocked(index);
            return (
              <EnglishCard
                key={index}
                topic={{ ...topic, iconComponent: IconComponent }}
                index={index}
                expandedCard={expandedCard}
                toggleCard={toggleCard}
                isTopicUnlocked={isUnlocked}
                isTopicCompleted={isTopicCompleted}
                completedSubtopics={completedSubtopics}
                toggleSubTopic={toggleSubTopic}
                handleStartPractice={handleStartPractice}
                calculateProgress={calculateProgress}
              />
            );
          })}
        </motion.div>

        {firstName && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 text-center">
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
          {showLockedModal !== null && !isAdmin && ( // Only show modal for non-admins
            <LockedTopicModal topicIndex={showLockedModal} />
          )}
          {showUnlockPopup !== null && (
            <UnlockPopup topicIndex={showUnlockPopup} onClose={() => setShowUnlockPopup(null)} />
          )}
          {showBadgePopup && (
            <BadgePopup badge={showBadgePopup} onClose={() => setShowBadgePopup(null)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Mathematics;