// LeaderboardPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiAward, FiArrowLeft, FiBarChart2 } from "react-icons/fi";
import Leaderboard from "../components/Leaderboard";
import { useAuth } from "../../provider/AuthContext";
import { supabase } from "../../supabase/supabaseClient";

const LeaderboardPage = () => {
  const { user } = useAuth();
  const [timeRange, setTimeRange] = useState("all-time");
  const [userRank, setUserRank] = useState(null);
  const [userPoints, setUserPoints] = useState(0);

  const timeRanges = [
    { id: "all-time", label: "All Time" },
    { id: "monthly", label: "This Month" },
    { id: "weekly", label: "This Week" },
  ];

  useEffect(() => {
    const fetchUserRank = async () => {
      if (!user) return;

      try {
        // First get the user's points for the current time range
        let pointsQuery = supabase
          .from("leaderboard")
          .select("total_points")
          .eq("user_id", user.id);

        if (timeRange === "weekly") {
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          pointsQuery = pointsQuery.gte("updated_at", oneWeekAgo.toISOString());
        } else if (timeRange === "monthly") {
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
          pointsQuery = pointsQuery.gte("updated_at", oneMonthAgo.toISOString());
        }

        const { data: pointsData, error: pointsError } = await pointsQuery;

        if (pointsError) throw pointsError;
        if (!pointsData || pointsData.length === 0) {
          setUserRank(null);
          setUserPoints(0);
          return;
        }

        setUserPoints(pointsData[0].total_points);

        // Then get the rank by counting how many users have more points
        let rankQuery = supabase
          .from("leaderboard")
          .select("*", { count: "exact" });

        if (timeRange === "weekly") {
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          rankQuery = rankQuery.gte("updated_at", oneWeekAgo.toISOString());
        } else if (timeRange === "monthly") {
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
          rankQuery = rankQuery.gte("updated_at", oneMonthAgo.toISOString());
        }

        // Count users with higher points
        const { count, error: rankError } = await rankQuery
          .gt("total_points", pointsData[0].total_points)
          .order("total_points", { ascending: false });

        if (rankError) throw rankError;

        // Rank is count + 1 (since count is number of users above you)
        setUserRank(count !== null ? count + 1 : null);
      } catch (error) {
        console.error("Error fetching user rank:", error);
        setUserRank(null);
      }
    };

    fetchUserRank();
  }, [user, timeRange]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <Link
              to="/"
              className="text-teal-600 hover:text-teal-800 flex items-center gap-1"
            >
              <FiArrowLeft /> Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              POST-UTME Leaderboard
            </h1>
            <p className="text-gray-600 mt-2">
              Compete with other students and climb to the top!
            </p>
          </div>

          {user && (
            <div className="bg-gradient-to-r from-teal-400 via-pink-400 to-orange-400 rounded-xl p-4 text-white shadow-lg">
              <p className="text-sm">Your Current Rank</p>
              <p className="text-2xl font-bold">
                #{userRank || "Not Ranked"}
              </p>
              {userPoints > 0 && (
                <p className="text-xs opacity-80">{userPoints} gems</p>
              )}
            </div>
          )}
        </div>

        {/* Time Range Selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {timeRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setTimeRange(range.id)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all shadow-sm ${
                timeRange === range.id
                  ? "bg-gradient-to-r from-pink-400 to-orange-400 text-white scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>

        {/* Leaderboard */}
        <div className="mb-12">
          <Leaderboard
            limit={20}
            title="Overall Leaderboard"
            className="mb-8"
            timeRange={timeRange}
          />

          {user && (
            <div className="bg-gradient-to-r from-teal-400 via-pink-400 to-orange-400 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Progress</h3>
                  <p>
                    {userRank
                      ? `You're currently ranked #${userRank} in the overall leaderboard with ${userPoints} gems. Keep going to reach the top!`
                      : "You're not ranked yet. Start completing quizzes to appear on the leaderboard!"}
                  </p>
                </div>
                <FiBarChart2 className="text-3xl opacity-80" />
              </div>
              {userRank && (
                <div className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, 100 - (userRank || 100))}%`,
                    }}
                  ></div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Badge Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FiAward className="text-yellow-500" /> About Badges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🥇</span>
                <h3 className="font-bold">Gold Badges</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Awarded for completing all topics in a subject and achieving top
                scores in quizzes.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🥈</span>
                <h3 className="font-bold">Silver Badges</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Awarded for completing all topics in a specific category within
                a subject.
              </p>
            </div>
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🥉</span>
                <h3 className="font-bold">Bronze Badges</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Awarded for completing individual topics and maintaining
                learning streaks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;