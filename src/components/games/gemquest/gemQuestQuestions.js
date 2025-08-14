// src/pages/games/gemQuestWords.js
const gemQuestWords = {
  targetWords: [
    { word: "Happy", correctSynonyms: ["Joyful", "Cheerful", "Delighted"] },
    { word: "Angry", correctSynonyms: ["Furious", "Enraged", "Livid"] },
    { word: "Fast", correctSynonyms: ["Quick", "Rapid", "Swift"] },
    { word: "Smart", correctSynonyms: ["Intelligent", "Clever", "Brilliant"] },
    { word: "Brave", correctSynonyms: ["Courageous", "Bold", "Fearless"] }
  ],
  allOptions: [
    "Joyful", "Cheerful", "Delighted", "Furious", "Enraged", 
    "Livid", "Quick", "Rapid", "Swift", "Intelligent", 
    "Clever", "Brilliant", "Courageous", "Bold", "Fearless",
    "Sad", "Slow", "Dumb", "Cowardly" // Distractors
  ]
};

export default gemQuestWords;