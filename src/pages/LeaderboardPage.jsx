import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAward, FiArrowLeft, FiBarChart2 } from "react-icons/fi";
import Leaderboard from "../components/Leaderboard";
import { useAuth } from "../../provider/AuthContext";

const LeaderboardPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overall");
  const [timeRange, setTimeRange] = useState("all-time");

  const tabs = [
    { id: "overall", label: "Overall" },
    { id: "english", label: "English" },
    { id: "mathematics", label: "Mathematics" },
    { id: "current-affairs", label: "Current Affairs" },
  ];

  const timeRanges = [
    { id: "all-time", label: "All Time" },
    { id: "monthly", label: "This Month" },
    { id: "weekly", label: "This Week" },
  ];

  const userRank = user ? 24 : null;

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
              <p className="text-2xl font-bold">#{userRank || "Not Ranked"}</p>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all shadow-sm ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-teal-400 to-pink-400 text-white scale-105"
                  : "bg-teal-100 text-teal-700 hover:bg-teal-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
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
            title={`${tabs.find((t) => t.id === activeTab)?.label} Leaderboard`}
            className="mb-8"
          />

          {user && (
            <div className="bg-gradient-to-r from-teal-400 via-pink-400 to-orange-400 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Progress</h3>
                  <p>
                    You're currently ranked #{userRank} in the overall
                    leaderboard. Keep going to reach the top!
                  </p>
                </div>
                <FiBarChart2 className="text-3xl opacity-80" />
              </div>
              <div className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(100, 100 - (userRank || 100))}%`,
                  }}
                ></div>
              </div>
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
