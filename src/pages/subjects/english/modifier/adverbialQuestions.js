 const questions = [
  {
    id: 1,
    text: "She bought a _____ red dress from the market.",
    options: [
      { id: 'a', text: "beautiful", correct: true },
      { id: 'b', text: "red beautiful" },
      { id: 'c', text: "dress beautiful" },
      { id: 'd', text: "red and beautiful" }
    ],
    correctAnswer: "beautiful",
    explanation: "Opinion adjectives like 'beautiful' come before color.",
    hint: "Remember: Opinion → Color"
  },
  {
    id: 2,
    text: "We saw a _____ old building in Lagos.",
    options: [
      { id: 'a', text: "tall", correct: true },
      { id: 'b', text: "old tall" },
      { id: 'c', text: "building tall" },
      { id: 'd', text: "old and tall" }
    ],
    correctAnswer: "tall",
    explanation: "Size (tall) comes before age (old).",
    hint: "Size → Age in adjective order."
  },
  {
    id: 3,
    text: "He drives _____ to work every morning.",
    options: [
      { id: 'a', text: "quick" },
      { id: 'b', text: "fastly" },
      { id: 'c', text: "quickly", correct: true },
      { id: 'd', text: "more quick" }
    ],
    correctAnswer: "quickly",
    explanation: "Adverbs of manner end in -ly and modify verbs.",
    hint: "Use -ly adverbs to describe how an action is done."
  },
  {
    id: 4,
    text: "The _____ Nigerian footballer scored a goal.",
    options: [
      { id: 'a', text: "young tall" },
      { id: 'b', text: "tall young", correct: true },
      { id: 'c', text: "footballer young" },
      { id: 'd', text: "Nigerian young" }
    ],
    correctAnswer: "tall young",
    explanation: "Size (tall) comes before age (young).",
    hint: "Order: Size → Age"
  },
  {
    id: 5,
    text: "She sings _____ at the church choir.",
    options: [
      { id: 'a', text: "beautiful", },
      { id: 'b', text: "beautifuly" },
      { id: 'c', text: "beautifully", correct: true },
      { id: 'd', text: "more beautiful" }
    ],
    correctAnswer: "beautifully",
    explanation: "Adverbs ending in -ly describe how she sings.",
    hint: "Verbs are modified by adverbs, not adjectives."
  },
  {
    id: 6,
    text: "I need a _____ bag for school.",
    options: [
      { id: 'a', text: "plastic big blue" },
      { id: 'b', text: "big blue plastic", correct: true },
      { id: 'c', text: "blue big plastic" },
      { id: 'd', text: "plastic blue big" }
    ],
    correctAnswer: "big blue plastic",
    explanation: "Correct order: Size → Color → Material.",
    hint: "Think: big (size), blue (color), plastic (material)."
  },
  {
    id: 7,
    text: "They arrived _____ at the party.",
    options: [
      { id: 'a', text: "late", correct: true },
      { id: 'b', text: "lately" },
      { id: 'c', text: "lated" },
      { id: 'd', text: "more late" }
    ],
    correctAnswer: "late",
    explanation: "'Late' is an adverb of time; 'lately' means recently.",
    hint: "Late = not on time; Lately = recently"
  },
  {
    id: 8,
    text: "This is a _____ wooden carving from Benin.",
    options: [
      { id: 'a', text: "beautiful old large", correct: true },
      { id: 'b', text: "old beautiful large" },
      { id: 'c', text: "large old beautiful" },
      { id: 'd', text: "wooden beautiful old" }
    ],
    correctAnswer: "beautiful old large",
    explanation: "Order: Opinion → Age → Size → Material",
    hint: "OSAShCOMP: Opinion, Size, Age, Color, Origin, Material, Purpose"
  },
  {
    id: 9,
    text: "She speaks English _____ than her brother.",
    options: [
      { id: 'a', text: "fluent" },
      { id: 'b', text: "more fluent" },
      { id: 'c', text: "fluenter" },
      { id: 'd', text: "more fluently", correct: true }
    ],
    correctAnswer: "more fluently",
    explanation: "Adverb needed to modify 'speaks'.",
    hint: "Use adverbs, not adjectives, to modify verbs."
  },
  {
    id: 10,
    text: "He is _____ late for class.",
    options: [
      { id: 'a', text: "never", correct: true },
      { id: 'b', text: "ever" },
      { id: 'c', text: "always not" },
      { id: 'd', text: "late never" }
    ],
    correctAnswer: "never",
    explanation: "Frequency adverbs go before main verbs.",
    hint: "Never, always, often go before action verbs."
  },
  {
    id: 11,
    text: "The _____ metal gate was rusted.",
    options: [
      { id: 'a', text: "iron big black" },
      { id: 'b', text: "black big iron" },
      { id: 'c', text: "big black iron", correct: true },
      { id: 'd', text: "iron black big" }
    ],
    correctAnswer: "big black iron",
    explanation: "Size → Color → Material",
    hint: "Follow COM: Color, Origin, Material"
  },
  {
    id: 12,
    text: "She completed her assignment _____.",
    options: [
      { id: 'a', text: "quick" },
      { id: 'b', text: "quicker" },
      { id: 'c', text: "quickly", correct: true },
      { id: 'd', text: "more quick" }
    ],
    correctAnswer: "quickly",
    explanation: "Adverb needed to describe how she completed it.",
    hint: "How? → Use an adverb."
  },
  {
    id: 13,
    text: "It's a _____ Italian sports car.",
    options: [
      { id: 'a', text: "new fast red" },
      { id: 'b', text: "red new fast" },
      { id: 'c', text: "fast red new" },
      { id: 'd', text: "fast new red", correct: true }
    ],
    correctAnswer: "fast new red",
    explanation: "Speed (opinion) → Age → Color → Purpose (sports)",
    hint: "Sports is a purpose adjective, goes last."
  },
  {
    id: 14,
    text: "He is _____ happy with the result.",
    options: [
      { id: 'a', text: "very", correct: true },
      { id: 'b', text: "much" },
      { id: 'c', text: "too much" },
      { id: 'd', text: "real" }
    ],
    correctAnswer: "very",
    explanation: "Degree adverbs like 'very' go before adjectives.",
    hint: "Very + adjective (not 'much happy')."
  },
  {
    id: 15,
    text: "She danced _____ at the owambe.",
    options: [
      { id: 'a', text: "graceful" },
      { id: 'b', text: "gracefull" },
      { id: 'c', text: "gracefully", correct: true },
      { id: 'd', text: "more graceful" }
    ],
    correctAnswer: "gracefully",
    explanation: "Adverb modifies the verb 'danced'.",
    hint: "Danced how? → Gracefully"
  },
  {
    id: 16,
    text: "We ate _____ rice last night.",
    options: [
      { id: 'a', text: "hot steaming", correct: true },
      { id: 'b', text: "steaming hot" },
      { id: 'c', text: "rice hot steaming" },
      { id: 'd', text: "hot and steaming" }
    ],
    correctAnswer: "hot steaming",
    explanation: "Heat (hot) before purpose (steaming for eating).",
    hint: "Purpose adjectives like 'steaming' often come last."
  },
  {
    id: 17,
    text: "He speaks slowly and _____.",
    options: [
      { id: 'a', text: "clear" },
      { id: 'b', text: "clearly", correct: true },
      { id: 'c', text: "clearer" },
      { id: 'd', text: "more clear" }
    ],
    correctAnswer: "clearly",
    explanation: "Adverb needed to match 'slowly'.",
    hint: "Parallel structure: slowly and clearly"
  },
  {
    id: 18,
    text: "The _____ round table is made of glass.",
    options: [
      { id: 'a', text: "wooden large brown" },
      { id: 'b', text: "large brown wooden", correct: true },
      { id: 'c', text: "brown large wooden" },
      { id: 'd', text: "wooden brown large" }
    ],
    correctAnswer: "large brown wooden",
    explanation: "Size → Color → Material",
    hint: "Brown is color, wooden is material."
  },
  {
    id: 19,
    text: "She is _____ excited about the trip.",
    options: [
      { id: 'a', text: "too much" },
      { id: 'b', text: "very", correct: true },
      { id: 'c', text: "much" },
      { id: 'd', text: "real" }
    ],
    correctAnswer: "very",
    explanation: "Use 'very' before adjectives like 'excited'.",
    hint: "Avoid 'too much excited' — incorrect."
  },
  {
    id: 20,
    text: "They played the match _____ and fairly.",
    options: [
      { id: 'a', text: "good" },
      { id: 'b', text: "well", correct: true },
      { id: 'c', text: "better" },
      { id: 'd', text: "best" }
    ],
    correctAnswer: "well",
    explanation: "Adverb 'well' modifies 'played'.",
    hint: "Play well, not play good (in formal English)."
  },
  {
    id: 21,
    text: "He arrived _____ than expected.",
    options: [
      { id: 'a', text: "early", correct: true },
      { id: 'b', text: "earlierly" },
      { id: 'c', text: "earlyer" },
      { id: 'd', text: "more early" }
    ],
    correctAnswer: "early",
    explanation: "'Early' is both adjective and adverb.",
    hint: "No -ly needed for 'early'."
  },
  {
    id: 22,
    text: "It was a _____ wedding ceremony.",
    options: [
      { id: 'a', text: "traditional big Yoruba" },
      { id: 'b', text: "big Yoruba traditional", correct: true },
      { id: 'c', text: "Yoruba big traditional" },
      { id: 'd', text: "traditional Yoruba big" }
    ],
    correctAnswer: "big Yoruba traditional",
    explanation: "Size → Origin → Purpose (traditional).",
    hint: "Traditional is a purpose adjective."
  },
  {
    id: 23,
    text: "She works _____ at the hospital.",
    options: [
      { id: 'a', text: "hard", correct: true },
      { id: 'b', text: "hardly" },
      { id: 'c', text: "harder" },
      { id: 'd', text: "hardly ever" }
    ],
    correctAnswer: "hard",
    explanation: "'Hard' (adverb) = with effort. 'Hardly' = almost not.",
    hint: "Hard ≠ Hardly! Hardly means 'barely'."
  },
  {
    id: 24,
    text: "The soup is _____ hot to eat.",
    options: [
      { id: 'a', text: "very" },
      { id: 'b', text: "too", correct: true },
      { id: 'c', text: "much" },
      { id: 'd', text: "so much" }
    ],
    correctAnswer: "too",
    explanation: "'Too hot' means excessively hot.",
    hint: "Too + adjective + to-infinitive"
  },
  {
    id: 25,
    text: "He is _____ to pass the exam.",
    options: [
      { id: 'a', text: "very likely", correct: true },
      { id: 'b', text: "likely very" },
      { id: 'c', text: "much likely" },
      { id: 'd', text: "likely much" }
    ],
    correctAnswer: "very likely",
    explanation: "Degree adverb 'very' comes before the adjective.",
    hint: "Very likely, not likely very."
  },
  {
    id: 26,
    text: "She sings _____ and clearly.",
    options: [
      { id: 'a', text: "beautiful" },
      { id: 'b', text: "beautifuly" },
      { id: 'c', text: "beautifully", correct: true },
      { id: 'd', text: "more beautiful" }
    ],
    correctAnswer: "beautifully",
    explanation: "Adverb needed to match 'clearly'.",
    hint: "And connects two adverbs."
  },
  {
    id: 27,
    text: "I saw a _____ green bicycle.",
    options: [
      { id: 'a', text: "small old", correct: true },
      { id: 'b', text: "old small" },
      { id: 'c', text: "green small" },
      { id: 'd', text: "bicycle old" }
    ],
    correctAnswer: "small old",
    explanation: "Size → Age → Color",
    hint: "Small (size), old (age), green (color)"
  },
  {
    id: 28,
    text: "She is _____ late for work.",
    options: [
      { id: 'a', text: "is never" },
      { id: 'b', text: "never", correct: true },
      { id: 'c', text: "never is" },
      { id: 'd', text: "sometimes not" }
    ],
    correctAnswer: "never",
    explanation: "Frequency adverb 'never' goes before main verb.",
    hint: "With normal verbs, frequency adverb comes before."
  },
  {
    id: 29,
    text: "They left the party _____.",
    options: [
      { id: 'a', text: "early", correct: true },
      { id: 'b', text: "earlier" },
      { id: 'c', text: "earlierly" },
      { id: 'd', text: "more early" }
    ],
    correctAnswer: "early",
    explanation: "'Early' is the correct adverb form.",
    hint: "Early is both adjective and adverb."
  },
  {
    id: 30,
    text: "He spoke _____ during the meeting.",
    options: [
      { id: 'a', text: "quiet" },
      { id: 'b', text: "quietly", correct: true },
      { id: 'c', text: "more quiet" },
      { id: 'd', text: "quieter" }
    ],
    correctAnswer: "quietly",
    explanation: "Adverb modifies 'spoke'.",
    hint: "Quietly = in a quiet manner."
  }
];

export default questions;
