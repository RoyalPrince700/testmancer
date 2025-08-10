import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Leaderboard({
  limit = 10,
  title = "POST-UTME Leaderboard",
  showBadges = true,
  showRank = true,
  className = "",
}) {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  const rankColors = [
    "from-yellow-400 to-yellow-500", // 1st
    "from-gray-300 to-gray-400",     // 2nd
    "from-orange-400 to-orange-500", // 3rd
    "from-teal-400 to-teal-600",     // 4th+
    "from-pink-400 to-pink-600",
    "from-coral-400 to-orange-500",
  ];

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("leaderboard")
        .select("*")
        .order("total_points", { ascending: false })
        .limit(limit);

      if (!error) setLeaderboard(data || []);
      setLoading(false);
    };

    fetchLeaderboard();
  }, [limit]);

  return (
    <div className={`rounded-xl shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>

      {loading ? (
        <div className="text-center py-8 text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading leaderboard...</p>
        </div>
      ) : leaderboard.length === 0 ? (
        <p className="text-gray-100 text-center py-8">No data available yet</p>
      ) : (
        <div className="space-y-4">
          {leaderboard.map((entry, index) => {
            const gradient = rankColors[index] || rankColors[(index % rankColors.length)];
            const percentage =
              leaderboard[0]?.total_points > 0
                ? Math.round((entry.total_points / leaderboard[0].total_points) * 100)
                : 0;

            return (
              <motion.div
                key={entry.user_id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
              >
                {/* Rank */}
                {showRank && (
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-br ${gradient}`}
                  >
                    {index + 1}
                  </div>
                )}

                {/* Avatar + Info */}
                <div className="flex items-center gap-3 flex-1">
                  {entry.avatar_url ? (
                    <div
                      className={`p-1 rounded-full bg-gradient-to-br ${gradient}`}
                    >
                      <img
                        src={entry.avatar_url}
                        alt={entry.full_name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} border-2 border-white`}
                    />
                  )}

                  <div className="flex-1">
                    <div className="font-medium text-gray-800 flex items-center gap-2">
                      {entry.full_name || "Anonymous"}
                      {index === 0 && <FiAward className="text-yellow-400" />}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.5 }}
                        className={`h-2 bg-gradient-to-r ${gradient}`}
                      />
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                      {entry.total_points} points
                    </div>
                  </div>
                </div>

                {/* Badges */}
                {showBadges && (
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
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
