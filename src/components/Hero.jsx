import React from "react";
import avatar from "../assets/avatars/avatar_1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white min-h-[90vh] py-12 px-4 sm:px-8 md:px-16">
      {/* Welcome Banner */}
      <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center shadow-sm mb-10">
        <div className="flex items-center space-x-4">
          <img
            src={avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-white"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-800 flex items-center">
              Welcome to Testmancer! <span className="ml-2 text-xl">🎉</span>
            </h2>
            <p className="text-sm text-gray-600">
              Your gamified learning journey starts here.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 md:mt-0">
          <Link to="/post-utme">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold px-6 py-3 rounded-xl shadow transition-all duration-300">
              🚀 Start Your Post-UTME Journey
            </button>
          </Link>
        </div>
      </div>

      {/* Title & Subtext */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block bg-yellow-100 text-yellow-800 font-semibold px-4 py-1 rounded-full mb-4 text-sm">
          ⚡ Make Learning Fun & Rewarding!
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Learn. Play. Level Up. 🎮
        </h1>
        <p className="text-lg text-gray-600">
          Get ready to conquer JAMB & Post-UTME with quizzes, badges, and a leaderboard that keeps you motivated.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { label: "Daily Streak", value: "1 day", icon: "🔥" },
          { label: "Badges Earned", value: "0", icon: "🎖️" },
          { label: "Leaderboard Rank", value: "#24", icon: "📊" },
          { label: "Topics Mastered", value: "10 / 56", icon: "✅" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 text-center"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
