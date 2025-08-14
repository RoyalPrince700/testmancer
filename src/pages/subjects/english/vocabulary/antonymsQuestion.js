const AntonymQuestions = [
  {
    id: 1,
    text: "What is the antonym of 'hot'?",
    options: [
      { id: 'a', text: "Warm" },
      { id: 'b', text: "Cold", correct: true },
      { id: 'c', text: "Spicy" },
      { id: 'd', text: "Boiling" }
    ],
    correctAnswer: "Cold",
    explanation: "'Hot' and 'cold' are gradable antonyms with degrees between them.",
    hint: "Think of temperature opposites"
  },
  {
    id: 2,
    text: "Which word means the opposite of 'like'?",
    options: [
      { id: 'a', text: "Love" },
      { id: 'b', text: "Dislike", correct: true },
      { id: 'c', text: "Enjoy" },
      { id: 'd', text: "Prefer" }
    ],
    correctAnswer: "Dislike",
    explanation: "'Like' and 'dislike' are complementary antonyms with no middle ground.",
    hint: "Look for a word with the 'dis-' prefix"
  },
  {
    id: 3,
    text: "What type of antonym pair is 'alive/dead'?",
    options: [
      { id: 'a', text: "Gradable" },
      { id: 'b', text: "Complementary", correct: true },
      { id: 'c', text: "Relational" },
      { id: 'd', text: "Reversed" }
    ],
    correctAnswer: "Complementary",
    explanation: "These are complementary antonyms because there's no middle state - you're either alive or dead.",
    hint: "Think of NEPA light - it's either on or off"
  },
  {
    id: 4,
    text: "Which prefix creates the opposite of 'happy'?",
    options: [
      { id: 'a', text: "re-" },
      { id: 'b', text: "un-", correct: true },
      { id: 'c', text: "pre-" },
      { id: 'd', text: "mis-" }
    ],
    correctAnswer: "un-",
    explanation: "The 'un-' prefix transforms 'happy' to 'unhappy', creating an opposite meaning.",
    hint: "This prefix works with many adjectives"
  },
  {
    id: 5,
    text: "What is the opposite of 'buy' in market transactions?",
    options: [
      { id: 'a', text: "Give" },
      { id: 'b', text: "Take" },
      { id: 'c', text: "Sell", correct: true },
      { id: 'd', text: "Lose" }
    ],
    correctAnswer: "Sell",
    explanation: "'Buy' and 'sell' are relational antonyms - opposite roles in the same transaction.",
    hint: "Think of the two parties in a market deal"
  },
  {
    id: 6,
    text: "Which suffix creates the opposite meaning of 'hope'?",
    options: [
      { id: 'a', text: "-ful" },
      { id: 'b', text: "-less", correct: true },
      { id: 'c', text: "-ing" },
      { id: 'd', text: "-ness" }
    ],
    correctAnswer: "-less",
    explanation: "Adding '-less' to 'hope' creates 'hopeless', meaning without hope.",
    hint: "This suffix means 'without'"
  },
  {
    id: 7,
    text: "What is the antonym of 'fast' in Nigerian traffic context?",
    options: [
      { id: 'a', text: "Quick" },
      { id: 'b', text: "Slow", correct: true },
      { id: 'c', text: "Steady" },
      { id: 'd', text: "Moving" }
    ],
    correctAnswer: "Slow",
    explanation: "'Fast' and 'slow' are gradable antonyms common in Lagos traffic descriptions.",
    hint: "Think of danfo speeds during rush hour"
  },
  {
    id: 8,
    text: "Which prefix would correctly create the opposite of 'possible'?",
    options: [
      { id: 'a', text: "un-" },
      { id: 'b', text: "in-" },
      { id: 'c', text: "im-", correct: true },
      { id: 'd', text: "dis-" }
    ],
    correctAnswer: "im-",
    explanation: "Before words starting with 'p', we use 'im-' prefix: 'impossible'.",
    hint: "The word starts with 'p' - which prefix changes before p/m/b?"
  },
  {
    id: 9,
    text: "What is the opposite of 'sweet' in Nigerian food context?",
    options: [
      { id: 'a', text: "Sour" },
      { id: 'b', text: "Bitter", correct: true },
      { id: 'c', text: "Spicy" },
      { id: 'd', text: "Tasteless" }
    ],
    correctAnswer: "Bitter",
    explanation: "In Nigerian English, we say 'bitter' rather than 'not sweet' for proper antonym use.",
    hint: "Think of herbal mixtures or bitter leaf soup"
  },
  {
    id: 10,
    text: "Which pair represents relational antonyms?",
    options: [
      { id: 'a', text: "Hot/Cold" },
      { id: 'b', text: "Teacher/Student", correct: true },
      { id: 'c', text: "Alive/Dead" },
      { id: 'd', text: "Happy/Unhappy" }
    ],
    correctAnswer: "Teacher/Student",
    explanation: "These are relational antonyms because they describe opposite roles in the same relationship.",
    hint: "Think of pairs that need each other to exist"
  },
  {
    id: 11,
    text: "What is the correct opposite of 'tie' using a prefix?",
    options: [
      { id: 'a', text: "Retie" },
      { id: 'b', text: "Untie", correct: true },
      { id: 'c', text: "Distie" },
      { id: 'd', text: "Mistie" }
    ],
    correctAnswer: "Untie",
    explanation: "The 'un-' prefix reverses the action of 'tie' to create its opposite.",
    hint: "Think of what you do with your agbada after wearing it"
  },
  {
    id: 12,
    text: "Which suffix would make 'power' mean 'full of power'?",
    options: [
      { id: 'a', text: "-less" },
      { id: 'b', text: "-ful", correct: true },
      { id: 'c', text: "-ness" },
      { id: 'd', text: "-ment" }
    ],
    correctAnswer: "-ful",
    explanation: "Adding '-ful' to 'power' creates 'powerful', meaning full of power.",
    hint: "This suffix adds meaning rather than removing it"
  },
  {
    id: 13,
    text: "What is the opposite of 'appear' in the context of NEPA light?",
    options: [
      { id: 'a', text: "Vanish" },
      { id: 'b', text: "Disappear", correct: true },
      { id: 'c', text: "Fade" },
      { id: 'd', text: "Darken" }
    ],
    correctAnswer: "Disappear",
    explanation: "The 'dis-' prefix reverses the meaning of 'appear', common with NEPA power situations.",
    hint: "Think of what happens when light goes off suddenly"
  },
  {
    id: 14,
    text: "Which prefix would correctly create the opposite of 'regular'?",
    options: [
      { id: 'a', text: "un-" },
      { id: 'b', text: "ir-", correct: true },
      { id: 'c', text: "in-" },
      { id: 'd', text: "dis-" }
    ],
    correctAnswer: "ir-",
    explanation: "Before words starting with 'r', we use 'ir-' prefix: 'irregular'.",
    hint: "The word starts with 'r' - which prefix changes before r?"
  },
  {
    id: 15,
    text: "What is the antonym of 'rich' in Nigerian economic context?",
    options: [
      { id: 'a', text: "Broke" },
      { id: 'b', text: "Poor", correct: true },
      { id: 'c', text: "Hungry" },
      { id: 'd', text: "Simple" }
    ],
    correctAnswer: "Poor",
    explanation: "'Rich' and 'poor' are gradable antonyms describing economic status.",
    hint: "Think of the opposite financial condition"
  },
  {
    id: 16,
    text: "Which pair represents complementary antonyms?",
    options: [
      { id: 'a', text: "Big/Small" },
      { id: 'b', text: "Buy/Sell" },
      { id: 'c', text: "Win/Lose", correct: true },
      { id: 'd', text: "Teacher/Student" }
    ],
    correctAnswer: "Win/Lose",
    explanation: "These are complementary antonyms because there's no middle ground in a competition.",
    hint: "Think of either/or situations with no between state"
  },
  {
    id: 17,
    text: "What is the opposite of 'connect' in generator usage context?",
    options: [
      { id: 'a', text: "Attach" },
      { id: 'b', text: "Disconnect", correct: true },
      { id: 'c', text: "Unconnect" },
      { id: 'd', text: "Misconnect" }
    ],
    correctAnswer: "Disconnect",
    explanation: "The 'dis-' prefix reverses the action of 'connect', important for electrical safety.",
    hint: "What do you do to cables when rain starts?"
  },
  {
    id: 18,
    text: "Which suffix would make 'thought' mean 'without thought'?",
    options: [
      { id: 'a', text: "-ful" },
      { id: 'b', text: "-less", correct: true },
      { id: 'c', text: "-ing" },
      { id: 'd', text: "-ness" }
    ],
    correctAnswer: "-less",
    explanation: "Adding '-less' creates 'thoughtless', meaning without thought.",
    hint: "This suffix removes or negates the meaning"
  },
  {
    id: 19,
    text: "What is the opposite of 'agree' in Nigerian debate context?",
    options: [
      { id: 'a', text: "Argue" },
      { id: 'b', text: "Disagree", correct: true },
      { id: 'c', text: "Unagree" },
      { id: 'd', text: "Misagree" }
    ],
    correctAnswer: "Disagree",
    explanation: "The 'dis-' prefix creates the opposite meaning, common in jollof rice debates.",
    hint: "Think of what happens when Nigerians discuss who makes better jollof"
  },
  {
    id: 20,
    text: "Which prefix would correctly create the opposite of 'complete'?",
    options: [
      { id: 'a', text: "un-" },
      { id: 'b', text: "in-", correct: true },
      { id: 'c', text: "im-" },
      { id: 'd', text: "ir-" }
    ],
    correctAnswer: "in-",
    explanation: "For most words starting with consonants (not m,p,b,r), we use 'in-': 'incomplete'.",
    hint: "This is the default prefix for most words"
  },
  {
    id: 21,
    text: "What is the antonym of 'light' (weight) in market context?",
    options: [
      { id: 'a', text: "Dark" },
      { id: 'b', text: "Heavy", correct: true },
      { id: 'c', text: "Big" },
      { id: 'd', text: "Full" }
    ],
    correctAnswer: "Heavy",
    explanation: "'Light' and 'heavy' are gradable antonyms describing weight at markets.",
    hint: "Think of how you'd describe a full bag of rice"
  },
  {
    id: 22,
    text: "Which pair represents gradable antonyms?",
    options: [
      { id: 'a', text: "Alive/Dead" },
      { id: 'b', text: "Buy/Sell" },
      { id: 'c', text: "Hot/Cold", correct: true },
      { id: 'd', text: "Win/Lose" }
    ],
    correctAnswer: "Hot/Cold",
    explanation: "These are gradable antonyms because there are degrees between them (warm, cool).",
    hint: "Think of opposites that have intermediate states"
  },
  {
    id: 23,
    text: "What is the opposite of 'end' using a suffix?",
    options: [
      { id: 'a', text: "Ending" },
      { id: 'b', text: "Endless", correct: true },
      { id: 'c', text: "Endful" },
      { id: 'd', text: "Endness" }
    ],
    correctAnswer: "Endless",
    explanation: "Adding '-less' creates 'endless', meaning without end.",
    hint: "Think of something that continues forever"
  },
  {
    id: 24,
    text: "Which prefix would correctly create the opposite of 'available'?",
    options: [
      { id: 'a', text: "un-", correct: true },
      { id: 'b', text: "in-" },
      { id: 'c', text: "im-" },
      { id: 'd', text: "dis-" }
    ],
    correctAnswer: "un-",
    explanation: "The 'un-' prefix transforms 'available' to 'unavailable'.",
    hint: "This is a common prefix for adjectives"
  },
  {
    id: 25,
    text: "What is the antonym of 'modern' in Nigerian cultural context?",
    options: [
      { id: 'a', text: "Old" },
      { id: 'b', text: "Ancient", correct: true },
      { id: 'c', text: "Past" },
      { id: 'd', text: "Traditional" }
    ],
    correctAnswer: "Ancient",
    explanation: "'Modern' and 'ancient' are strong opposites when discussing Nigerian traditions.",
    hint: "Think of the most distant past"
  },
  {
    id: 26,
    text: "Which suffix would make 'success' mean 'full of success'?",
    options: [
      { id: 'a', text: "-less" },
      { id: 'b', text: "-ful", correct: true },
      { id: 'c', text: "-ing" },
      { id: 'd', text: "-ness" }
    ],
    correctAnswer: "-ful",
    explanation: "Adding '-ful' creates 'successful', meaning full of success.",
    hint: "This suffix adds positive quality"
  },
  {
    id: 27,
    text: "What is the opposite of 'stable' in Nigerian building context?",
    options: [
      { id: 'a', text: "Unstable", correct: true },
      { id: 'b', text: "Distable" },
      { id: 'c', text: "Instable" },
      { id: 'd', text: "Misstable" }
    ],
    correctAnswer: "Unstable",
    explanation: "The 'un-' prefix creates the opposite meaning, important for construction safety.",
    hint: "Think of poorly built structures"
  },
  {
    id: 28,
    text: "Which prefix would correctly create the opposite of 'honest'?",
    options: [
      { id: 'a', text: "un-" },
      { id: 'b', text: "dis-" },
      { id: 'c', text: "in-", correct: true },
      { id: 'd', text: "im-" }
    ],
    correctAnswer: "in-",
    explanation: "We use 'in-' before 'h' to create 'dishonest' (though note the spelling change).",
    hint: "This is an exception where spelling changes"
  },
  {
    id: 29,
    text: "What is the antonym of 'fear' using a suffix?",
    options: [
      { id: 'a', text: "Fearful" },
      { id: 'b', text: "Fearless", correct: true },
      { id: 'c', text: "Fearing" },
      { id: 'd', text: "Fearness" }
    ],
    correctAnswer: "Fearless",
    explanation: "Adding '-less' creates 'fearless', meaning without fear.",
    hint: "Think of a brave person's quality"
  },
  {
    id: 30,
    text: "Which pair shows the correct prefix transformation to create an opposite?",
    options: [
      { id: 'a', text: "like → unlike" },
      { id: 'b', text: "agree → disagree", correct: true },
      { id: 'c', text: "possible → unpossible" },
      { id: 'd', text: "regular → unregular" }
    ],
    correctAnswer: "agree → disagree",
    explanation: "'Dis-' is the correct prefix for 'agree' to make its opposite.",
    hint: "Only one option shows the proper prefix usage"
  }
];

export default AntonymQuestions;