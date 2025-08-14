const SynonymQuestions = [
  {
    id: 1,
    text: "Which word is a synonym for 'happy'?",
    options: [
      { id: 'a', text: "Sad" },
      { id: 'b', text: "Joyful", correct: true },
      { id: 'c', text: "Angry" },
      { id: 'd', text: "Tired" }
    ],
    correctAnswer: "Joyful",
    explanation: "'Joyful' is a synonym for 'happy' as both express positive emotions.",
    hint: "Think of words that express similar positive feelings"
  },
  {
    id: 2,
    text: "What is a better synonym for 'good' in the sentence: 'The party was good'?",
    options: [
      { id: 'a', text: "Bad" },
      { id: 'b', text: "Okay" },
      { id: 'c', text: "Fantastic", correct: true },
      { id: 'd', text: "Small" }
    ],
    correctAnswer: "Fantastic",
    explanation: "'Fantastic' is a stronger synonym that makes the sentence more exciting.",
    hint: "Look for a more expressive positive word"
  },
  {
    id: 3,
    text: "Which word is NOT a synonym for 'big'?",
    options: [
      { id: 'a', text: "Large" },
      { id: 'b', text: "Huge" },
      { id: 'c', text: "Enormous" },
      { id: 'd', text: "Tiny", correct: true }
    ],
    correctAnswer: "Tiny",
    explanation: "'Tiny' is actually an antonym of 'big', not a synonym.",
    hint: "Look for the word that means the opposite"
  },
  {
    id: 4,
    text: "What is a synonym for 'begin'?",
    options: [
      { id: 'a', text: "End" },
      { id: 'b', text: "Start", correct: true },
      { id: 'c', text: "Stop" },
      { id: 'd', text: "Pause" }
    ],
    correctAnswer: "Start",
    explanation: "'Start' means the same as 'begin' - to commence something.",
    hint: "Think of what you do at the beginning of an event"
  },
  {
    id: 5,
    text: "Which word is a synonym for 'smart'?",
    options: [
      { id: 'a', text: "Intelligent", correct: true },
      { id: 'b', text: "Slow" },
      { id: 'c', text: "Dull" },
      { id: 'd', text: "Simple" }
    ],
    correctAnswer: "Intelligent",
    explanation: "'Intelligent' is a direct synonym for 'smart', both describing mental ability.",
    hint: "Think of words describing brain power"
  },
  {
    id: 6,
    text: "What is a better synonym for 'run' in: 'He ran fast'?",
    options: [
      { id: 'a', text: "Walked" },
      { id: 'b', text: "Sprinted", correct: true },
      { id: 'c', text: "Stopped" },
      { id: 'd', text: "Sat" }
    ],
    correctAnswer: "Sprinted",
    explanation: "'Sprinted' is a more specific synonym that implies running very fast.",
    hint: "Look for a word that means running quickly"
  },
  {
    id: 7,
    text: "Which pair are synonyms?",
    options: [
      { id: 'a', text: "Happy - Sad" },
      { id: 'b', text: "Help - Assist", correct: true },
      { id: 'c', text: "Big - Small" },
      { id: 'd', text: "Hot - Cold" }
    ],
    correctAnswer: "Help - Assist",
    explanation: "'Help' and 'assist' mean the same thing - to give support.",
    hint: "Look for pair where both words have similar meaning"
  },
  {
    id: 8,
    text: "What is a synonym for 'end'?",
    options: [
      { id: 'a', text: "Begin" },
      { id: 'b', text: "Finish", correct: true },
      { id: 'c', text: "Start" },
      { id: 'd', text: "Continue" }
    ],
    correctAnswer: "Finish",
    explanation: "'Finish' is a synonym for 'end' - both mean to conclude something.",
    hint: "Think of what happens at the conclusion of something"
  },
  {
    id: 9,
    text: "Which word is NOT a synonym for 'say'?",
    options: [
      { id: 'a', text: "Whisper" },
      { id: 'b', text: "Shout" },
      { id: 'c', text: "Explain" },
      { id: 'd', text: "Eat", correct: true }
    ],
    correctAnswer: "Eat",
    explanation: "'Eat' is unrelated to speaking, while the others are ways of saying things.",
    hint: "Find the word that doesn't involve communication"
  },
  {
    id: 10,
    text: "What is a synonym for 'bad'?",
    options: [
      { id: 'a', text: "Good" },
      { id: 'b', text: "Terrible", correct: true },
      { id: 'c', text: "Nice" },
      { id: 'd', text: "Happy" }
    ],
    correctAnswer: "Terrible",
    explanation: "'Terrible' is a stronger synonym for 'bad', both describing negative quality.",
    hint: "Think of words expressing negative evaluation"
  },
  {
    id: 11,
    text: "Which word is a tricky synonym that actually means 'well-known for bad reasons'?",
    options: [
      { id: 'a', text: "Famous" },
      { id: 'b', text: "Infamous", correct: true },
      { id: 'c', text: "Popular" },
      { id: 'd', text: "Renowned" }
    ],
    correctAnswer: "Infamous",
    explanation: "'Infamous' looks like a synonym for 'famous' but specifically means famous for bad reasons.",
    hint: "Remember the warning about tricky synonyms"
  },
  {
    id: 12,
    text: "What is a better synonym for 'hard' in: 'The test was hard'?",
    options: [
      { id: 'a', text: "Easy" },
      { id: 'b', text: "Difficult", correct: true },
      { id: 'c', text: "Simple" },
      { id: 'd', text: "Soft" }
    ],
    correctAnswer: "Difficult",
    explanation: "'Difficult' is a more precise synonym for 'hard' when describing challenges.",
    hint: "Think of academic challenges"
  },
  {
    id: 13,
    text: "Which word is a synonym for 'help'?",
    options: [
      { id: 'a', text: "Hinder" },
      { id: 'b', text: "Aid", correct: true },
      { id: 'c', text: "Block" },
      { id: 'd', text: "Stop" }
    ],
    correctAnswer: "Aid",
    explanation: "'Aid' is a direct synonym for 'help', both meaning to assist someone.",
    hint: "Think of words meaning support or assistance"
  },
  {
    id: 14,
    text: "What is the difference between 'economical' and 'cheap'?",
    options: [
      { id: 'a', text: "They mean exactly the same" },
      { id: 'b', text: "Economical saves money, cheap is low quality", correct: true },
      { id: 'c', text: "Cheap saves money, economical is low quality" },
      { id: 'd', text: "Both mean low quality" }
    ],
    correctAnswer: "Economical saves money, cheap is low quality",
    explanation: "These tricky synonyms differ - 'economical' is positive (smart saving), while 'cheap' is negative (low quality).",
    hint: "Remember the warning about tricky synonyms"
  },
  {
    id: 15,
    text: "What is a better synonym for 'sad' in: 'She is sad'?",
    options: [
      { id: 'a', text: "Happy" },
      { id: 'b', text: "Heartbroken", correct: true },
      { id: 'c', text: "Joyful" },
      { id: 'd', text: "Excited" }
    ],
    correctAnswer: "Heartbroken",
    explanation: "'Heartbroken' is a stronger synonym that makes the sentence more expressive.",
    hint: "Look for a more intense emotional word"
  },
  {
    id: 16,
    text: "Which word is a synonym for 'fast'?",
    options: [
      { id: 'a', text: "Quick", correct: true },
      { id: 'b', text: "Slow" },
      { id: 'c', text: "Late" },
      { id: 'd', text: "Tardy" }
    ],
    correctAnswer: "Quick",
    explanation: "'Quick' is a direct synonym for 'fast', both describing speed.",
    hint: "Think of words describing speed"
  },
  {
    id: 17,
    text: "What is the difference between 'young' and 'youthful'?",
    options: [
      { id: 'a', text: "They mean exactly the same" },
      { id: 'b', text: "Young is age, youthful is vibe", correct: true },
      { id: 'c', text: "Youthful is age, young is vibe" },
      { id: 'd', text: "Both refer only to age" }
    ],
    correctAnswer: "Young is age, youthful is vibe",
    explanation: "These tricky synonyms differ - 'young' refers to actual age, while 'youthful' describes energy/attitude.",
    hint: "Remember the warning about tricky synonyms"
  },
  {
    id: 18,
    text: "What is a synonym for 'market' in Nigerian context?",
    options: [
      { id: 'a', text: "Mall" },
      { id: 'b', text: "Bazaar", correct: true },
      { id: 'c', text: "Office" },
      { id: 'd', text: "School" }
    ],
    correctAnswer: "Bazaar",
    explanation: "'Bazaar' is a synonym that captures the vibrant, open-air market culture in Nigeria.",
    hint: "Think of words describing traditional marketplaces"
  },
  {
    id: 19,
    text: "Which word is a synonym for 'delicious' in Nigerian food context?",
    options: [
      { id: 'a', text: "Tasty", correct: true },
      { id: 'b', text: "Bitter" },
      { id: 'c', text: "Bad" },
      { id: 'd', text: "Cold" }
    ],
    correctAnswer: "Tasty",
    explanation: "'Tasty' is a common Nigerian synonym for 'delicious' when describing food.",
    hint: "Think of how Nigerians describe good food"
  },
  {
    id: 20,
    text: "What is a synonym for 'money' in Nigerian slang?",
    options: [
      { id: 'a', text: "Water" },
      { id: 'b', text: "Mango" },
      { id: 'c', text: "Ginger" },
      { id: 'd', text: "Moolah", correct: true }
    ],
    correctAnswer: "Moolah",
    explanation: "'Moolah' is a slang synonym for money commonly used in Nigerian English.",
    hint: "Think of playful money terms"
  },
  {
    id: 21,
    text: "Which word is a synonym for 'party' in Nigerian context?",
    options: [
      { id: 'a', text: "Owambe", correct: true },
      { id: 'b', text: "Market" },
      { id: 'c', text: "Church" },
      { id: 'd', text: "School" }
    ],
    correctAnswer: "Owambe",
    explanation: "'Owambe' is a Nigerian term synonymous with lavish parties and celebrations.",
    hint: "Think of Nigerian party culture"
  },
  {
    id: 22,
    text: "What is a synonym for 'beautiful' in Nigerian context?",
    options: [
      { id: 'a', text: "Fine", correct: true },
      { id: 'b', text: "Ugly" },
      { id: 'c', text: "Bad" },
      { id: 'd', text: "Simple" }
    ],
    correctAnswer: "Fine",
    explanation: "In Nigerian English, 'fine' is commonly used as a synonym for 'beautiful'.",
    hint: "Think of how Nigerians compliment appearance"
  },
  {
    id: 23,
    text: "Which word is a synonym for 'friend' in Nigerian pidgin?",
    options: [
      { id: 'a', text: "Enemy" },
      { id: 'b', text: "Padi", correct: true },
      { id: 'c', text: "Stranger" },
      { id: 'd', text: "Teacher" }
    ],
    correctAnswer: "Padi",
    explanation: "'Padi' is Nigerian pidgin synonym for 'friend'.",
    hint: "Think of Nigerian pidgin terms"
  },
  {
    id: 24,
    text: "What is a synonym for 'tired' in Nigerian context?",
    options: [
      { id: 'a', text: "Strong" },
      { id: 'b', text: "Weak" },
      { id: 'c', text: "Jagajaga", correct: true },
      { id: 'd', text: "Fresh" }
    ],
    correctAnswer: "Jagajaga",
    explanation: "'Jagajaga' is Nigerian slang meaning worn out or tired.",
    hint: "Think of Nigerian slang for exhaustion"
  },
  {
    id: 25,
    text: "Which word is a synonym for 'food' in Nigerian pidgin?",
    options: [
      { id: 'a', text: "Chop", correct: true },
      { id: 'b', text: "Water" },
      { id: 'c', text: "Air" },
      { id: 'd', text: "Stone" }
    ],
    correctAnswer: "Chop",
    explanation: "'Chop' is Nigerian pidgin synonym for food or eating.",
    hint: "Think of Nigerian pidgin terms for eating"
  },
  {
    id: 26,
    text: "What is a synonym for 'child' in Nigerian context?",
    options: [
      { id: 'a', text: "Pikin", correct: true },
      { id: 'b', text: "Oga" },
      { id: 'c', text: "Madam" },
      { id: 'd', text: "Teacher" }
    ],
    correctAnswer: "Pikin",
    explanation: "'Pikin' is Nigerian pidgin synonym for child.",
    hint: "Think of Nigerian pidgin terms for children"
  },
  {
    id: 27,
    text: "Which word is a synonym for 'crazy' in Nigerian slang?",
    options: [
      { id: 'a', text: "Wahala" },
      { id: 'b', text: "Kolo", correct: true },
      { id: 'c', text: "Better" },
      { id: 'd', text: "Fine" }
    ],
    correctAnswer: "Kolo",
    explanation: "'Kolo' is Nigerian slang meaning crazy or mad.",
    hint: "Think of Nigerian slang for mental state"
  },
  {
    id: 28,
    text: "What is a synonym for 'trouble' in Nigerian pidgin?",
    options: [
      { id: 'a', text: "Wahala", correct: true },
      { id: 'b', text: "Joy" },
      { id: 'c', text: "Peace" },
      { id: 'd', text: "Money" }
    ],
    correctAnswer: "Wahala",
    explanation: "'Wahala' is Nigerian pidgin synonym for trouble or problems.",
    hint: "Think of Nigerian pidgin terms for problems"
  },
  {
    id: 29,
    text: "Which word is a synonym for 'excellent' in Nigerian context?",
    options: [
      { id: 'a', text: "Bad" },
      { id: 'b', text: "Kpakando", correct: true },
      { id: 'c', text: "Small" },
      { id: 'd', text: "Weak" }
    ],
    correctAnswer: "Kpakando",
    explanation: "'Kpakando' is Nigerian slang meaning excellent or top-notch.",
    hint: "Think of Nigerian slang for quality"
  },
  {
    id: 30,
    text: "What is a synonym for 'go away' in Nigerian pidgin?",
    options: [
      { id: 'a', text: "Come" },
      { id: 'b', text: "Jor", correct: true },
      { id: 'c', text: "Stay" },
      { id: 'd', text: "Sit" }
    ],
    correctAnswer: "Jor",
    explanation: "'Jor' is Nigerian pidgin expression meaning 'go away' or 'leave me alone'.",
    hint: "Think of Nigerian pidgin dismissal terms"
  }
];

export default SynonymQuestions;