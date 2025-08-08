import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  FiBook,
  FiDivide,
  FiGlobe,
  FiAward,
  FiBarChart2,
  FiStar,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import FullNameModal from '../components/FullNameModal';
import { useAuth } from '../../provider/AuthContext';
import { supabase } from '../../supabase/supabaseClient';
import WelcomeCard from '../components/WelcomeCard';

const SnaptestLoader = () => {
  const circleVariants = {
    initial: { scale: 0.8, opacity: 0.5 },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.5, 1, 0.5],
      transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" }
    }
  };

  const letterVariants = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120 }
    })
  };

  const text = "TestMancer";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white" aria-live="polite" aria-label="Loading Snaptest progress">
      <div className="flex gap-3 mb-6">
        <motion.div
          variants={circleVariants}
          initial="initial"
          animate="animate"
          className="w-12 h-12 rounded-full bg-pink-500"
        />
        <motion.div
          variants={circleVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="w-12 h-12 rounded-full bg-teal-500"
        />
        <motion.div
          variants={circleVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="w-12 h-12 rounded-full bg-yellow-400"
        />
      </div>
      <div className="flex gap-1 mb-4">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="initial"
            animate="animate"
            className="text-3xl font-bold text-gray-800"
          >
            {char}
          </motion.span>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-gray-500 text-lg"
      >
        Snapping your progress into place! 📸
      </motion.p>
    </div>
  );
};

const PostUtme = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  // Subject configuration with total subtopics
  const subjectConfig = [
    {
      title: "English",
      icon: FiBook,
      description: "Master grammar and comprehension! 📚",
      path: "/post-utme/english",
      totalSubtopics: 21,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Mathematics",
      icon: FiDivide,
      description: "Crack numbers and win badges! 🔢",
      path: "/mathematics",
      totalSubtopics: 20,
      color: "from-teal-400 to-teal-600",
    },
    {
      title: "Current Affairs",
      icon: FiGlobe,
      description: "Stay updated, stay sharp! 🌍",
      path: "/current-affairs",
      totalSubtopics: 15,
      color: "from-purple-400 to-purple-600",
    },
  ];

  // Fetch user profile and progress data
  const fetchUserData = useCallback(async () => {
    if (!user) return;
    setLoading(true);

    try {
      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.error("Error fetching profile:", profileError.message);
        return;
      }

      setUserData(profileData);
      if (!profileData.full_name || !profileData.avatar_url) {
        setShowModal(true);
      }

      // Fetch progress for all subjects
      const { data: progressData, error: progressError } = await supabase
        .from('postutme_progress')
        .select('subject, subtopic')
        .eq('user_id', user.id)
        .eq('completed', true);

      if (progressError) {
        console.error("Error fetching progress:", progressError.message);
        return;
      }

      // Fetch badge counts
      const { data: badgeData, error: badgeError } = await supabase
        .from('postutme_badges')
        .select('subject');

      if (badgeError) {
        console.error("Error fetching badges:", badgeError.message);
        return;
      }

      // Fetch streak
      const { data: streakData, error: streakError } = await supabase
        .from('user_activity')
        .select('streak')
        .eq('user_id', user.id)
        .single();

      if (streakError) {
        console.error("Error fetching streak:", streakError.message);
      }

      // Process progress and badges
      const progressBySubject = progressData.reduce((acc, { subject }) => {
        acc[subject] = (acc[subject] || 0) + 1;
        return acc;
      }, {});

      const badgeBySubject = badgeData.reduce((acc, { subject }) => {
        acc[subject] = (acc[subject] || 0) + 1;
        return acc;
      }, {});

      // Update subjects with dynamic data
      const updatedSubjects = subjectConfig.map(subject => ({
        ...subject,
        badgeCount: badgeBySubject[subject.title] || 0,
        progress: Math.round(((progressBySubject[subject.title] || 0) / subject.totalSubtopics) * 100),
      }));

      setSubjects(updatedSubjects);

      // Update achievements
      const totalBadges = Object.values(badgeBySubject).reduce((sum, count) => sum + count, 0);
      const totalTopicsMastered = Object.values(progressBySubject).reduce((sum, count) => sum + count, 0);
      const totalSubtopics = subjectConfig.reduce((sum, subject) => sum + subject.totalSubtopics, 0);

      setAchievements([
        { icon: FiStar, title: "Daily Streak", value: `${streakData?.streak || 0} days`, color: "text-yellow-500" },
        { icon: FiAward, title: "Badges Earned", value: totalBadges.toString(), color: "text-green-500" },
        { icon: FiBarChart2, title: "Leaderboard Rank", value: "#24", color: "text-pink-500" },
        { icon: FiCheckCircle, title: "Topics Mastered", value: `${totalTopicsMastered}/${totalSubtopics}`, color: "text-teal-500" },
      ]);

    } catch (err) {
      console.error("Unexpected error:", err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, type: 'spring', stiffness: 120 } },
  };

  if (loading) {
    return <SnaptestLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <WelcomeCard />

        {/* Main Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6 font-medium">
            <FiZap className="text-yellow-500 animate-pulse" />
            Make Learning Fun & Rewarding!
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            {userData?.full_name ? (
              <span>
                🚀 Hey {userData.full_name.split(' ')[0]}, Crush Your Post-UTME!
              </span>
            ) : (
              <span>🚀 Post-UTME Gamified Practice</span>
            )}
          </h1>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {userData?.full_name 
              ? `Earn rewards, track your progress, and rise to the top, ${userData.full_name.split(' ')[0]}!` 
              : "Earn rewards, track your progress, and rise to the top as you prepare for success!"}
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3"
              >
                <div className={`p-3 rounded-lg bg-gray-100 ${a.color}`}>
                  <a.icon className="text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{a.title}</p>
                  <p className="font-bold text-lg text-gray-800">{a.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personalized Callout */}
        {userData?.full_name && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl p-6 text-white text-center mb-12 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-3">
              {userData.full_name.split(' ')[0]}, You're on Fire! 🔥
            </h2>
            <p className="text-teal-100">
              Keep going to climb the leaderboard and unlock exclusive badges. 
              Every topic you master brings you closer to the top!
            </p>
          </motion.div>
        )}

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              <Link to={s.path} className="group" aria-label={`Start ${s.title} practice`}>
                <div className="h-full bg-white rounded-2xl shadow-xl p-6 border border-gray-200 hover:border-gray-300 transition-all relative overflow-hidden">
                  {hoveredCard === i && (
                    <div className="absolute top-4 right-4 flex gap-2 z-10">
                      <motion.div
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-yellow-100 border border-yellow-500 rounded-full p-2"
                      >
                        <FiAward className="text-yellow-600" />
                      </motion.div>
                      <motion.div
                        variants={badgeVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1 }}
                        className="bg-teal-100 border border-teal-500 rounded-full p-2"
                      >
                        <FiStar className="text-teal-600" />
                      </motion.div>
                    </div>
                  )}

                  {/* PROGRESS */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-medium text-pink-500">{s.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`bg-gradient-to-r ${s.color} h-2.5 rounded-full`}
                        style={{ width: `${s.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* ICON */}
                  <div className="mb-5 flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-teal-100 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className={`relative bg-gradient-to-br ${s.color} rounded-2xl p-5 flex items-center justify-center w-20 h-20`}>
                        <s.icon className="text-white text-3xl" />
                      </div>
                    </div>
                  </div>

                  {/* TEXTS */}
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-center mb-6">{s.description}</p>

                  {/* FOOTER ACTIONS */}
                  <div className="flex justify-center gap-4 text-sm text-teal-500 font-medium mb-6">
                    <div className="flex items-center gap-2">
                      <FiAward />
                      <span>{s.badgeCount} badges</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiBarChart2 />
                      <span>Leaderboard</span>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button className={`bg-gradient-to-r ${s.color} text-white font-semibold rounded-full px-6 py-2 hover:scale-105 hover:shadow-lg transition-all`}>
                      {userData?.full_name ? "Continue Journey" : "Start Practice"} 🚀
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Personalized Encouragement */}
        {userData?.full_name && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Keep Going, {userData.full_name.split(' ')[0]}! ✨
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every topic you master brings you closer to your dream university. 
              Champions aren't born—they're made one practice session at a time!
            </p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {showModal && (
          <FullNameModal 
            userId={user?.id} 
            onClose={() => setShowModal(false)}
            onSuccess={(updatedUser) => setUserData(updatedUser)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PostUtme;