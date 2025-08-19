//src/components/Leaderboard.jsx
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { FiAward } from "react-icons/fi";
import { motion } from "framer-motion";
import { avatarList } from "../components/avatarList"; // Updated import path
import TestMancerLoader from "./TestMancer";

export default function Leaderboard({
  limit = 10,
  title = "POST-UTME Leaderboard",
  showBadges = true,
  showRank = true,
  className = "",
  activeTab = "overall",
  timeRange = "all-time",
}) {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  const rankColors = [
    "from-yellow-400 to-yellow-500",
    "from-gray-300 to-gray-400",
    "from-orange-400 to-orange-500",
    "from-teal-400 to-teal-600",
    "from-pink-400 to-pink-600",
    "from-blue-400 to-blue-500",
  ];

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      let query = supabase
        .from("leaderboard")
        .select("*")
        .order("total_points", { ascending: false })
        .limit(limit);

      if (activeTab !== "overall") {
        query = query.eq("category", activeTab);
      }

      if (timeRange === "weekly") {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        query = query.gte("updated_at", oneWeekAgo.toISOString());
      } else if (timeRange === "monthly") {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        query = query.gte("updated_at", oneMonthAgo.toISOString());
      }

      const { data, error } = await query;

      if (!error) setLeaderboard(data || []);
      setLoading(false);
    };

    fetchLeaderboard();
  }, [limit, activeTab, timeRange]);

  return (
    <div className={`rounded-xl shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-4 text-teal-700">{title}</h2>

      {loading ? (
       <TestMancerLoader/>
      ) : leaderboard.length === 0 ? (
        <p className="text-gray-100 text-center py-8">No data available yet</p>
      ) : (
        <div className="space-y-4">
          {leaderboard.map((entry, index) => {
            const gradient = rankColors[index] || rankColors[index % rankColors.length];
            const percentage =
              leaderboard[0]?.total_points > 0
                ? Math.round((entry.total_points / leaderboard[0].total_points) * 100)
                : 0;
            const defaultAvatar = avatarList[index % avatarList.length];

            return (
              <motion.div
                key={entry.user_id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
              >
                {showRank && (
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-br ${gradient}`}
                  >
                    {index + 1}
                  </div>
                )}

                <div className="flex items-center gap-3 flex-1">
                  <div className={`p-1 rounded-full bg-gradient-to-br ${gradient}`}>
                    <img
                      src={entry.avatar_url || defaultAvatar}
                      alt={entry.full_name || "User"}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white"
                      onError={(e) => {
                        e.target.src = defaultAvatar;
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="font-medium text-gray-800 flex items-center gap-2">
                      {entry.full_name || "Anonymous"}
                      {index === 0 && <FiAward className="text-yellow-400" />}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.5 }}
                        className={`h-2 bg-gradient-to-r ${gradient}`}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {entry.total_points} gems
                    </div>
                  </div>
                </div>

                {/* {showBadges && (
                  <div className="flex gap-1">
                    {entry.gold_badges > 0 && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                        🥇 {entry.gold_badges}
                      </span>
                    )}
                    {entry.silver_badges > 0 && (
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        🥈 {entry.silver_badges}
                      </span>
                    )}
                    {entry.bronze_badges > 0 && (
                      <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                        🥉 {entry.bronze_badges}
                      </span>
                    )}
                  </div>
                )} */}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}