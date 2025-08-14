import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiStar, FiPlay, FiAward, FiRepeat } from "react-icons/fi";
import synonymData from "./synonymData";

const SynonymsSprint = () => {
  const navigate = useNavigate();
  const [currentWord, setCurrentWord] = useState(null);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [gameTime, setGameTime] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);

  // Start new round
  const startNewRound = () => {
    const randomWord = synonymData.targetWords[
      Math.floor(Math.random() * synonymData.targetWords.length)
    ];
    setCurrentWord(randomWord);
    setSelected([]);
    setTimeLeft(5);

    const shuffled = [...synonymData.allOptions].sort(() => Math.random() - 0.5);
    setOptions(shuffled.slice(0, 8)); // Reduced to 8 options
  };

  // Handle answer selection
  const handleSelect = (option) => {
    if (!gameStarted || selected.includes(option)) return;
    const newSelected = [...selected, option];
    setSelected(newSelected);

    const isCorrect = currentWord.correctSynonyms.includes(option);
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  // Consolidated timer logic
  useEffect(() => {
    if (!gameStarted) return;

    if (gameTime <= 0) {
      navigate("/games-hub/synonyms-sprint/score", { state: { score, streak } });
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          startNewRound();
          return 5;
        }
        return prev - 1;
      });
      setGameTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStarted, gameTime, navigate, score, streak]);

  const startGame = () => {
    setGameStarted(true);
    setGameTime(60);
    startNewRound();
  };

  if (!gameStarted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl"
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
            Synonyms Sprint 🚀
          </h2>
          <p className="mb-4">
            <strong>How to play:</strong> Select <strong>ALL synonyms</strong> of the given word before time runs out!
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">💡</span>
              <strong>5 seconds</strong> per word
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">🔥</span>
              <strong>Streaks</strong> earn bonus points
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">⏱️</span>
              <strong>60 seconds</strong> total game time
            </li>
          </ul>
          <button
            onClick={startGame}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <FiPlay /> Start Game
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-red-600 font-bold">
          <FiClock /> {gameTime}s
        </div>
        <div className="flex items-center gap-2 text-indigo-700 font-bold">
          <FiStar className="text-yellow-500" /> {score}
        </div>
      </div>

      {/* Current Word */}
      <motion.div
        key={currentWord?.word}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-indigo-800 mb-2">
          {currentWord?.word}
        </h2>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 transition-all duration-1000 ease-linear"
            style={{ width: `${(timeLeft / 5) * 100}%` }}
          />
        </div>
      </motion.div>

      {/* Options Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`p-3 rounded-xl border-2 transition-all ${
              selected.includes(option)
                ? "border-indigo-500 bg-indigo-100"
                : "border-gray-300 hover:border-indigo-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// ScoreScreen.jsx (Separate Component)
export const ScoreScreen = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { score, streak } = state || { score: 0, streak: 0 };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-indigo-800 mb-8">🏆 Game Over! 🏆</h1>
      
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-md w-40 text-center">
          <FiAward className="text-indigo-600 text-2xl mx-auto mb-2" />
          <h2 className="font-semibold text-gray-700">Score</h2>
          <p className="text-3xl font-bold text-indigo-600">{score}</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md w-40 text-center">
          <FiRepeat className="text-indigo-600 text-2xl mx-auto mb-2" />
          <h2 className="font-semibold text-gray-700">Best Streak</h2>
          <p className="text-3xl font-bold text-indigo-600">{streak}</p>
        </div>
      </div>

      <button
        onClick={() => navigate("/games-hub/synonyms-sprint")}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
      >
        Play Again
      </button>
    </div>
  );
};

export default SynonymsSprint;