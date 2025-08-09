import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiStar, FiAward, FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { useAuth } from "../../provider/AuthContext";
import { supabase } from "../../supabase/supabaseClient";

const StatsOverview = () => {
  const { user, isAuthenticated } = useAuth();
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!isAuthenticated || !user) {
        setLoading(false);
        return;
      }

      try {
        // Fetch badge counts
        const { count: badgeCount, error: badgeError } = await supabase
          .from('postutme_badges')
          .select('*', { count: 'exact' })
          .eq('user_id', user.id);

        if (badgeError) throw badgeError;

        // Fetch streak
        const { data: activityData, error: activityError } = await supabase
          .from('user_activity')
          .select('streak')
          .eq('user_id', user.id)
          .single();

        if (activityError) throw activityError;

        // Fetch leaderboard rank
        const { data: leaderboardData, error: leaderboardError } = await supabase
          .from('leaderboard')
          .select('total_points, rank')
          .eq('user_id', user.id)
          .single();

        if (leaderboardError) throw leaderboardError;

        setAchievements([
          { icon: FiStar, title: "Daily Streak", value: `${activityData?.streak || 0} days`, color: "text-yellow-500" },
          { icon: FiAward, title: "Badges Earned", value: badgeCount?.toString() || "0", color: "text-green-500" },
          { icon: FiBarChart2, title: "Leaderboard Rank", value: `#${leaderboardData?.rank || "N/A"}`, color: "text-blue-500" },
          { icon: FiCheckCircle, title: "Total Points", value: leaderboardData?.total_points || "0", color: "text-purple-500" }
        ]);
      } catch (error) {
        console.error("Error fetching stats:", error);
        // Set default values if there's an error
        setAchievements([
          { icon: FiStar, title: "Daily Streak", value: "0 days", color: "text-yellow-500" },
          { icon: FiAward, title: "Badges Earned", value: "0", color: "text-green-500" },
          { icon: FiBarChart2, title: "Leaderboard Rank", value: "#N/A", color: "text-blue-500" },
          { icon: FiCheckCircle, title: "Total Points", value: "0", color: "text-purple-500" }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [isAuthenticated, user]);

  if (loading) {
    return (
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow-md animate-pulse h-20"></div>
        ))}
      </div>
    );
  }

  return (
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
  );
};

export default StatsOverview;