// src/pages/games/GemQuest.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiClock, FiStar } from "react-icons/fi";
import gemQuestWords from "./gemQuestWords";

const GemQuest = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(null);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3);
  const [gameTime, setGameTime] = useState(60);
  const [isPlaying, setIsPlaying] = useState(true);

  // Initialize game
  useEffect(() => {
    startNewRound();
    const gameTimer = setInterval(() => {
      setGameTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(gameTimer);
  }, []);

  // Start a new 3-second round
  const startNewRound = () => {
    const randomWord = gemQuestWords.targetWords[
      Math.floor(Math.random() * gemQuestWords.targetWords.length)
    ];
    setCurrentWord(randomWord);
    setSelected([]);
    setTimeLeft(3);

    // Shuffle options
    const shuffled = [...gemQuestWords.allOptions].sort(() => Math.random() - 0.5);
    setOptions(shuffled.slice(0, 16)); // Show 16 options max
  };

  // Handle answer selection (auto-submits)
  const handleSelect = (option) => {
    if (selected.includes(option)) return;
    const newSelected = [...selected, option];
    setSelected(newSelected);

    // Check if correct
    const isCorrect = currentWord.correctSynonyms.includes(option);
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  // 3-second countdown per word
  useEffect(() => {
    if (timeLeft <= 0) {
      startNewRound();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // End game after 60s
  useEffect(() => {
    if (gameTime <= 0) {
      setIsPlaying(false);
      navigate("/game-over", { state: { score } });
    }
  }, [gameTime]);

  return (
    <div className="game-screen">
      {/* Top Bar: Timer + Score */}
      <div className="top-bar">
        <div className="timer">
          <FiClock /> {gameTime}s
        </div>
        <div className="score">
          <FiStar /> {score}
        </div>
      </div>

      {/* Current Word (Large & Centered) */}
      <motion.div 
        key={currentWord?.word}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="current-word"
      >
        {currentWord?.word}
        <div className="time-bar" style={{ width: `${(timeLeft / 3) * 100}%` }} />
      </motion.div>

      {/* Options Grid (4x4) */}
      <div className="options-grid">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`option-btn ${
              selected.includes(option) ? "selected" : ""
            } ${
              currentWord?.correctSynonyms.includes(option) ? "is-correct" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GemQuest;