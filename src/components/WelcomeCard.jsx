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

  // Update user streak when they log in for the first time in a day
 const updateStreak = async () => {
  if (!user) return 0; // Return 0 if no user

  try {
    // Get current date in YYYY-MM-DD format (UTC)
    const today = new Date().toISOString().split('T')[0];
    
    // Fetch user's current activity data
    const { data: activityData, error: fetchError } = await supabase
      .from('user_activity')
      .select('streak, last_active_at')
      .eq('user_id', user.id)
      .single();

    // Handle fetch errors (except "not found" which we handle below)
    if (fetchError && fetchError.code !== 'PGRST116') {
      throw fetchError;
    }

    let newStreak = 1;
    let shouldUpdate = false;

    if (activityData) {
      // Get the last active date in YYYY-MM-DD format
      const lastActiveDate = activityData.last_active_at 
        ? new Date(activityData.last_active_at).toISOString().split('T')[0]
        : null;

      // Calculate yesterday's date
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      if (lastActiveDate === yesterdayStr) {
        // Consecutive day login - increment streak
        newStreak = activityData.streak + 1;
        shouldUpdate = true;
      } else if (lastActiveDate !== today) {
        // Not consecutive - reset streak
        newStreak = 1;
        shouldUpdate = true;
      }
      // If lastActiveDate === today, do nothing (already logged in today)
    } else {
      // No existing record - first time user
      shouldUpdate = true;
    }

    // Update database if needed
    if (shouldUpdate) {
      const { error: updateError } = await supabase
        .from('user_activity')
        .upsert({
          user_id: user.id,
          streak: newStreak,
          last_active_at: today
        }, {
          onConflict: 'user_id'
        });

      if (updateError) {
        console.error('Upsert error:', updateError);
        throw updateError;
      }
    }

    return newStreak;
  } catch (error) {
    console.error('Error updating streak:', error);
    return stats.streak || 1; // Fallback to current streak or 1
  }
};

  useEffect(() => {
    if (!isAuthenticated || !user) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        // Update streak first
        const updatedStreak = await updateStreak();
        
        // Fetch all data in parallel
        const [profileRes, leaderboardRes, badgeRes] = await Promise.all([
          supabase
            .from("profiles")
            .select("full_name, avatar_url")
            .eq("id", user.id)
            .single(),
            
          supabase
            .from("leaderboard")
            .select("total_points, rank")
            .eq("user_id", user.id)
            .single(),
            
          supabase
            .from("postutme_badges")
            .select("*", { count: "exact" })
            .eq("user_id", user.id)
        ]);

        setUserData(profileRes.data);
        setStats({
          totalPoints: leaderboardRes.data?.total_points || 0,
          rank: leaderboardRes.data?.rank || 0,
          streak: updatedStreak,
          badges: badgeRes.count || 0
        });

      } catch (error) {
        console.error("Error in WelcomeCard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isAuthenticated, user]);

  // ... rest of the component remains the same (loading state and JSX)
   const firstName = userData?.full_name?.split(" ")[0] || "Champion";
  
    if (loading) {
      return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-2xl shadow-sm border border-indigo-100">
          {/* Placeholder for User Info */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-200"></div>
            <div className="space-y-2">
              <div className="h-7 w-36 bg-gray-200 rounded"></div>
              <div className="h-4 w-48 bg-gray-200 rounded"></div>
            </div>
          </div>
  
          {/* Placeholder for Stats */}
          <div className="flex flex-wrap justify-center gap-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm"
              >
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-4 w-8 bg-gray-200 rounded"></div>
                <div className="h-4 w-12 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
  
         
<style>{`
  .animate-shimmer {
    position: relative;
    overflow: hidden;
  }
  .animate-shimmer::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: shimmer 1.5s infinite;
  }
  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`}</style>
        </div>
      );
    }
  
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
          <div className="flex items-baseline gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
               <span className="text-xl">💎</span>
            <span className="font-bold">{stats.totalPoints}</span>
            <span className="text-gray-600">gems</span>
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
