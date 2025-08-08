import React, { useEffect, useState } from "react";
import { FiAward, FiZap, FiBarChart2, FiUser } from "react-icons/fi";
import { useAuth } from "../../provider/AuthContext";
import { supabase } from "../../supabase/supabaseClient";

const WelcomeCard = () => {
  const { user, isAuthenticated } = useAuth();

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState({
    totalPoints: 0,
    rank: 0,
    streak: 0,
    badges: 0
  });

  useEffect(() => {
    if (!isAuthenticated || !user) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch user profile
        const { data: profileData } = await supabase
          .from("profiles")
          .select("full_name, avatar_url")
          .eq("id", user.id)
          .single();

        setUserData(profileData);

        // Fetch leaderboard stats
        const { data: leaderboardData } = await supabase
          .from("leaderboard")
          .select("total_points, rank")
          .eq("user_id", user.id)
          .single();

        // Fetch streak
        const { data: activityData } = await supabase
          .from("user_activity")
          .select("streak")
          .eq("user_id", user.id)
          .single();

        // Fetch badge count
        const { count: badgeCount } = await supabase
          .from("postutme_badges")
          .select("*", { count: "exact" })
          .eq("user_id", user.id);

        setStats({
          totalPoints: leaderboardData?.total_points || 0,
          rank: leaderboardData?.rank || 0,
          streak: activityData?.streak || 0,
          badges: badgeCount || 0
        });

      } catch (error) {
        console.error("Error in WelcomeCard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isAuthenticated, user]);

  const firstName = userData?.full_name?.split(" ")[0] || "Champion";

  if (loading) return null;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-2xl shadow-sm border border-indigo-100">
      {/* User Info */}
      <div className="flex items-center gap-4">
        {userData?.avatar_url ? (
          <img
            src={userData.avatar_url}
            alt={userData.full_name}
            className="w-14 h-14 rounded-full border-2 border-indigo-300 object-cover"
          />
        ) : (
          <div className="bg-indigo-100 rounded-full p-3">
            <FiUser className="text-indigo-600 text-2xl" />
          </div>
        )}
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Welcome back, {firstName}! 👋
          </h2>
          <p className="text-gray-600 text-sm">
            Ready to continue your learning journey?
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-3">
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
          <FiAward className="text-yellow-500" />
          <span className="font-bold">{stats.totalPoints}</span>
          <span className="text-gray-600">Points</span>
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
          <FiAward className="text-purple-500" />
          <span className="font-bold">{stats.badges}</span>
          <span className="text-gray-600">Badges</span>
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
          <FiZap className="text-yellow-500" />
          <span className="font-bold">{stats.streak}</span>
          <span className="text-gray-600">Days</span>
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
          <FiBarChart2 className="text-indigo-600" />
          <span className="font-bold">#{stats.rank}</span>
          <span className="text-gray-600">Rank</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
