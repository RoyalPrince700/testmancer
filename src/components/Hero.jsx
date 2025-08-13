import React from "react";
import avatar from "../assets/avatars/avatar_1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white min-h-[90vh] py-12 px-4 sm:px-8 md:px-16">      

      {/* Title & Subtext */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block bg-yellow-100 text-yellow-800 font-semibold px-4 py-1 rounded-full mb-4 text-sm">
          ⚡ Make Learning Fun & Rewarding!
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Study. Play. Win. 🎮
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Get ready to conquer Post-UTME with quizzes, badges, and a leaderboard that keeps you motivated.
        </p>
        {/* CTA Button */}
        <Link
          to="/post-utme"
          className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full text-lg hover:bg-yellow-600 transition duration-300"
        >
         🚀 Start Studying Now
        </Link>
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