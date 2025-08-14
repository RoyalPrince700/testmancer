import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../provider/AuthContext"; // Adjust path if necessary
import Welcome from "./WelcomeCard"; // Adjust path as needed
import Leaderboard from "./Leaderboard"; // Adjust path as needed

const Hero = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <div className="bg-white min-h-[90vh] py-12 px-4 sm:px-8 md:px-16">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <Welcome />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-10">
          <Link
            to="/post-utme"
            className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full text-lg hover:bg-yellow-600 transition duration-300 text-center shadow-md"
          >
            📚 Resume Learning
          </Link>
          <Link
            to="/quiz-hub"
            className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300 text-center shadow-md"
          >
            🧠 Take Quiz / Test Yourself
          </Link>
        </div>

        {/* Leaderboard */}
        <div className="mt-12">
          <Leaderboard />
        </div>
      </div>
    );
  }

  // === Guest View (Not Signed In) ===
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
          className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full text-lg hover:bg-yellow-600 transition duration-300 shadow-md"
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