// src/pages/games/games.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiStar, FiPlay, FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../../provider/AuthContext";
import { supabase } from "../../../supabase/supabaseClient";
import TestMancerLoader from "../../components/TestMancer";

const GamesHub = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [totalPoints, setTotalPoints] = useState(0);
  const [rank, setRank] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [playedToday, setPlayedToday] = useState(false);

  // Game list
  const games = [
    {
      id: "gem_quest",
      title: "Gem Quest",
      description: "Answer 60-second quizzes and earn gems fast!",
      icon: "🎮",
      color: "from-purple-500 to-pink-600",
      available: true,
    },
    // Unlock more games later
    {
      id: "word_jungle",
      title: "Word Jungle",
      description: "Unscramble words and climb the jungle leaderboard!",
      icon: "🌴",
      color: "from-green-500 to-teal-600",
      available: false,
    },
    {
      id: "math_sprint",
      title: "Math Sprint",
      description: "Solve problems in a flash and boost your speed!",
      icon: "🏃‍♂️",
      color: "from-blue-500 to-indigo-600",
      available: false,
    },
  ];

  useEffect(() => {
    if (!isAuthenticated || !user) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch leaderboard
        const {  leaderboardData } = await supabase
          .from("leaderboard")
          .select("total_points, rank")
          .eq("user_id", user.id)
          .single();

        setTotalPoints(leaderboardData?.total_points || 0);
        setRank(leaderboardData?.rank || 0);

        // Check if played Gem Quest today
        const today = new Date().toISOString().split("T")[0];
        const { data } = await supabase
          .from("user_game_stats")
          .select("id")
          .eq("user_id", user.id)
          .eq("game_type", "gem_quest")
          .gte("completed_at", `${today}T00:00:00Z`)
          .lt("completed_at", `${today}T23:59:59Z`)
          .limit(1);

        setPlayedToday(!!data?.length);
      } catch (error) {
        console.error("Error loading game hub:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <TestMancerLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(-1)}
              className="text-gray-700 hover:text-teal-700 transition"
            >
              <FiArrowLeft className="text-xl" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">🎮 Games</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-teal-100 px-3 py-1 rounded-full text-teal-800">
              <FiStar className="text-yellow-500" />
              <span className="font-bold">{totalPoints} gems</span>
              <span className="text-xl">💎</span>
            </div>
            <div className="flex items-center gap-2 bg-pink-100 px-3 py-1 rounded-full text-pink-800">
              <FiStar className="text-pink-600" />
              <span className="font-bold">#{rank}</span>
            </div>
          </div>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Earn Gems by Playing!
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Challenge yourself with fun mini-games. Each win = more gems and better rank!
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`${
                  game.available ? "bg-white" : "bg-gray-50"
                } rounded-2xl shadow-lg p-6 border border-gray-200 relative overflow-hidden`}
              >
                {/* Lock Overlay */}
                {!game.available && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
                    <div className="text-white text-center">
                      <FiLock className="text-4xl mx-auto mb-2" />
                      <p className="font-bold">Coming Soon</p>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className={`relative z-10 ${!game.available ? "blur-sm" : ""}`}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${game.color} flex items-center justify-center text-2xl mb-4`}
                  >
                    {game.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{game.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{game.description}</p>

                  {game.id === "gem_quest" && (
                    <div className="text-xs text-teal-700 mb-4">
                      {playedToday ? (
                        <span>🎯 Played today! Come back tomorrow</span>
                      ) : (
                        <span>✅ 1 free play per day</span>
                      )}
                    </div>
                  )}

                  {game.available ? (
                    <button
                      onClick={() =>
                        game.id === "gem_quest"
                          ? navigate("/games/gem-quest")
                          : alert("Coming soon!")
                      }
                      disabled={game.id === "gem_quest" && playedToday}
                      className={`w-full py-2 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition ${
                        game.id === "gem_quest" && playedToday
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-teal-500 to-teal-700 text-white hover:shadow-lg"
                      }`}
                    >
                      <FiPlay />
                      {game.id === "gem_quest" && playedToday
                        ? "Played Today"
                        : "Play Now"}
                    </button>
                  ) : (
                    <button className="w-full py-2 bg-gray-300 text-gray-500 rounded-xl cursor-not-allowed">
                      Locked
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          💡 New games unlock as you earn more gems and complete modules!
        </motion.div>
      </div>
    </div>
  );
};

export default GamesHub;