import React, { useState, useEffect } from 'react';
import { wordPairs } from './spellingQuest';
import { motion, AnimatePresence } from 'framer-motion';

const LANES = 3; // changed to 3
const LANE_WIDTH = 140; // wider to fit long words
const GAME_WIDTH = LANES * LANE_WIDTH;
const GAME_HEIGHT = 600;
const TILE_HEIGHT = 50;
const SPAWN_INTERVAL_MS = 800;
const SPEED_INCREASE_INTERVAL_MS = 10000;
const FRAME_RATE_MS = 16;

const SpellingTiles = () => {
  const [tiles, setTiles] = useState([]);
  const [speed, setSpeed] = useState(2);
  const [score, setScore] = useState(0);
  const [gems, setGems] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [lastGems, setLastGems] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  // Spawn tiles
  useEffect(() => {
    if (gameOver || !gameStarted) return;
    const spawnInterval = setInterval(() => {
      const lane = Math.floor(Math.random() * LANES);
      const isCorrect = Math.random() > 0.5;
      const pair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
      const word = isCorrect ? pair.correct : pair.wrong;
      const newTile = {
        id: Date.now(),
        lane,
        y: -TILE_HEIGHT,
        word,
        isCorrect,
      };
      setTiles((prev) => [...prev, newTile]);
    }, SPAWN_INTERVAL_MS);

    return () => clearInterval(spawnInterval);
  }, [gameOver, gameStarted]);

  // Move tiles
  useEffect(() => {
    if (gameOver || !gameStarted) return;
    const moveInterval = setInterval(() => {
      setTiles((prev) => {
        const newTiles = prev.map((t) => ({ ...t, y: t.y + speed }));
        newTiles.forEach((t) => {
          if (t.y > GAME_HEIGHT && t.isCorrect) {
            setGameOver(true); // only if correct word falls
          }
        });
        return newTiles.filter((t) => t.y < GAME_HEIGHT + TILE_HEIGHT);
      });
    }, FRAME_RATE_MS);

    return () => clearInterval(moveInterval);
  }, [speed, gameOver, gameStarted]);

  // Increase speed
  useEffect(() => {
    if (gameOver || !gameStarted) return;
    const speedInterval = setInterval(() => {
      setSpeed((prev) => prev + 0.5);
    }, SPEED_INCREASE_INTERVAL_MS);

    return () => clearInterval(speedInterval);
  }, [gameOver, gameStarted]);

  const handleClick = (tile) => {
    if (gameOver) return;
    if (!tile.isCorrect) {
      setGameOver(true); // wrong word clicked
      return;
    }
    setScore((prev) => prev + 1);
    setTiles((prev) => prev.filter((t) => t.id !== tile.id));
  };

  const restartGame = () => {
    setLastScore(score);
    setLastGems(score); // gems earned this round
    setGems((prev) => prev + score); // add to total gems
    setTiles([]);
    setSpeed(2);
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  const startGame = () => {
    setShowInstructions(false);
    setGameStarted(true);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1>✨ Testmancer Spelling Tiles ✨</h1>
      <div>Score: {score}</div>
      <div>Total Gems: 💎 {gems}</div>

      {/* Game Area */}
      <div
        style={{
          position: 'relative',
          width: GAME_WIDTH,
          height: GAME_HEIGHT,
          margin: '20px auto',
          background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)', // gradient bg
          border: '2px solid black',
          overflow: 'hidden',
          borderRadius: '12px',
        }}
      >
        <AnimatePresence>
          {tiles.map((tile) => (
            <motion.div
              key={tile.id}
              onClick={() => handleClick(tile)}
              initial={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, rotate: 180 }}
              transition={{ duration: 0.4 }}
              style={{
                position: 'absolute',
                left: tile.lane * LANE_WIDTH,
                top: tile.y,
                width: LANE_WIDTH,
                height: TILE_HEIGHT,
                background: 'black',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                userSelect: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              }}
            >
              {tile.word}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Game Over Modal */}
      {gameOver && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 200,
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'center',
              width: '300px',
            }}
          >
            <h2>💀 Game Over!</h2>
            <p>You earned 💎 {score} gems</p>
            <button
              onClick={restartGame}
              style={{
                marginTop: '15px',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                background: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Restart
            </button>
          </div>
        </div>
      )}

      {/* Instructions Modal */}
      {showInstructions && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 100,
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              maxWidth: '500px',
              textAlign: 'center',
            }}
          >
            <h2>📖 How to Play</h2>
            <p>Click on the <b>correctly spelled words</b> to earn gems.</p>
            <p>If you click a wrong word → <b>Game Over</b>.</p>
            <p>If a correct word reaches the bottom → <b>Game Over</b>.</p>
            <p>Each correct word gives you 💎 1 gem.</p>
            <button
              onClick={startGame}
              style={{
                marginTop: '15px',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                background: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Start Game
            </button>
          </div>
        </div>
      )}

      {/* Last Score & Gems at bottom */}
      <div style={{ marginTop: 'auto', padding: '15px', fontSize: '14px' }}>
        <p>Last Score: {lastScore} | Last Gems Earned: 💎 {lastGems}</p>
      </div>
    </div>
  );
};

export default SpellingTiles;
