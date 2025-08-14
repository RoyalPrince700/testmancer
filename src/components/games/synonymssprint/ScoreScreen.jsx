import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiAward, FiRepeat } from "react-icons/fi";

const ScoreScreen = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { score, streak } = state || { score: 0, streak: 0 };

  return (
    <div className="score-screen">
      <h1>🏆 Game Over! 🏆</h1>
      
      <div className="stats">
        <div className="stat-card">
          <FiAward />
          <h2>Score</h2>
          <p>{score}</p>
        </div>
        <div className="stat-card">
          <FiRepeat />
          <h2>Best Streak</h2>
          <p>{streak}</p>
        </div>
      </div>

      <button 
        onClick={() => navigate("/games-hub/synonyms-sprint")} 
        className="play-again-btn"
      >
        Play Again
      </button>
    </div>
  );
};

export default ScoreScreen;