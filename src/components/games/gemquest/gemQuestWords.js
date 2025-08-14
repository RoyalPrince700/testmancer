// src/pages/games/gemQuestWords.js
const gemQuestWords = {
  targetWords: [
    {
      word: "good",
      correctSynonyms: ["excellent", "great", "superb", "fine", "positive"]
    },
    {
      word: "bad",
      correctSynonyms: ["poor", "awful", "terrible", "negative", "substandard"]
    },
    {
      word: "happy",
      correctSynonyms: ["joyful", "cheerful", "delighted", "content", "pleased"]
    },
    {
      word: "sad",
      correctSynonyms: ["unhappy", "depressed", "gloomy", "melancholy", "sorrowful"]
    },
    {
      word: "angry",
      correctSynonyms: ["mad", "furious", "irate", "enraged", "annoyed"]
    },
    {
      word: "beautiful",
      correctSynonyms: ["pretty", "attractive", "gorgeous", "lovely", "stunning"]
    },
    {
      word: "ugly",
      correctSynonyms: ["unattractive", "hideous", "repulsive", "grotesque", "unsightly"]
    },
    {
      word: "smart",
      correctSynonyms: ["intelligent", "clever", "bright", "brilliant", "sharp"]
    },
    {
      word: "stupid",
      correctSynonyms: ["dumb", "foolish", "unintelligent", "idiotic", "senseless"]
    },
    {
      word: "big",
      correctSynonyms: ["large", "huge", "enormous", "gigantic", "massive"]
    },
    {
      word: "small",
      correctSynonyms: ["little", "tiny", "petite", "miniature", "compact"]
    },
    {
      word: "fast",
      correctSynonyms: ["quick", "rapid", "speedy", "swift", "brisk"]
    },
    {
      word: "slow",
      correctSynonyms: ["sluggish", "leisurely", "gradual", "unhurried", "delayed"]
    },
    {
      word: "rich",
      correctSynonyms: ["wealthy", "affluent", "prosperous", "moneyed", "opulent"]
    },
    {
      word: "poor",
      correctSynonyms: ["impoverished", "needy", "destitute", "broke", "penniless"]
    },
    {
      word: "brave",
      correctSynonyms: ["courageous", "fearless", "bold", "valiant", "heroic"]
    },
    {
      word: "cowardly",
      correctSynonyms: ["fearful", "timid", "spineless", "pusillanimous", "craven"]
    },
    {
      word: "funny",
      correctSynonyms: ["humorous", "hilarious", "amusing", "comical", "witty"]
    },
    {
      word: "serious",
      correctSynonyms: ["solemn", "grave", "earnest", "sober", "stern"]
    },
    {
      word: "difficult",
      correctSynonyms: ["hard", "challenging", "tough", "arduous", "demanding"]
    }
  ],

  allOptions: [
    // Positive words
    "excellent", "great", "superb", "fine", "positive",
    "joyful", "cheerful", "delighted", "content", "pleased",
    "pretty", "attractive", "gorgeous", "lovely", "stunning",
    "intelligent", "clever", "bright", "brilliant", "sharp",
    "large", "huge", "enormous", "gigantic", "massive",
    "quick", "rapid", "speedy", "swift", "brisk",
    "wealthy", "affluent", "prosperous", "moneyed", "opulent",
    "courageous", "fearless", "bold", "valiant", "heroic",
    "humorous", "hilarious", "amusing", "comical", "witty",
    
    // Negative words
    "poor", "awful", "terrible", "negative", "substandard",
    "unhappy", "depressed", "gloomy", "melancholy", "sorrowful",
    "mad", "furious", "irate", "enraged", "annoyed",
    "unattractive", "hideous", "repulsive", "grotesque", "unsightly",
    "dumb", "foolish", "unintelligent", "idiotic", "senseless",
    "little", "tiny", "petite", "miniature", "compact",
    "sluggish", "leisurely", "gradual", "unhurried", "delayed",
    "impoverished", "needy", "destitute", "broke", "penniless",
    "fearful", "timid", "spineless", "pusillanimous", "craven",
    
    // Neutral/distractor words
    "average", "ordinary", "common", "usual", "regular",
    "calm", "peaceful", "quiet", "still", "tranquil",
    "complex", "complicated", "involved", "intricate", "convoluted",
    "simple", "easy", "basic", "straightforward", "effortless",
    "strange", "odd", "peculiar", "weird", "bizarre",
    "normal", "typical", "standard", "conventional", "routine",
    "important", "significant", "crucial", "vital", "essential",
    "unimportant", "trivial", "minor", "insignificant", "negligible"
  ]
};

export default gemQuestWords;