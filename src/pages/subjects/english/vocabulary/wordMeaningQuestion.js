const questions = [
  {
    id: 1,
    text: "What is the denotative meaning of 'home'?",
    options: [
      { id: 'a', text: "A feeling of warmth and security" },
      { id: 'b', text: "A place where one lives", correct: true },
      { id: 'c', text: "A comfortable environment" },
      { id: 'd', text: "A family gathering place" }
    ],
    correctAnswer: "A place where one lives",
    explanation: "Denotation refers to the dictionary definition, which for 'home' is primarily a dwelling place.",
    hint: "Think of the most basic, literal definition."
  },
  {
    id: 2,
    text: "Which word is a synonym for 'enormous'?",
    options: [
      { id: 'a', text: "Tiny" },
      { id: 'b', text: "Huge", correct: true },
      { id: 'c', text: "Average" },
      { id: 'd', text: "Minimal" }
    ],
    correctAnswer: "Huge",
    explanation: "Synonyms are words with similar meanings, and 'huge' closely matches 'enormous' in meaning.",
    hint: "Look for a word that means very large in size."
  },
  {
    id: 3,
    text: "In Nigerian slang, what does 'sick' typically mean?",
    options: [
      { id: 'a', text: "Illness" },
      { id: 'b', text: "Cool or excellent", correct: true },
      { id: 'c', text: "Dirty" },
      { id: 'd', text: "Old" }
    ],
    correctAnswer: "Cool or excellent",
    explanation: "In Nigerian slang, 'sick' often means something is impressive or cool, opposite of its standard meaning.",
    hint: "Think about how Nigerian youth use this word positively."
  },
  {
    id: 4,
    text: "What is the connotative meaning of 'mother'?",
    options: [
      { id: 'a', text: "A female parent" },
      { id: 'b', text: "Love, care and nurturing", correct: true },
      { id: 'c', text: "An authority figure" },
      { id: 'd', text: "A household manager" }
    ],
    correctAnswer: "Love, care and nurturing",
    explanation: "Connotation refers to the emotional associations, and 'mother' typically evokes feelings of love and care.",
    hint: "Think about the feelings and ideas the word suggests beyond its literal meaning."
  },
  {
    id: 5,
    text: "Which pair are homophones?",
    options: [
      { id: 'a', text: "Bank (river) and Bank (financial)" },
      { id: 'b', text: "To, too and two", correct: true },
      { id: 'c', text: "Hot and cold" },
      { id: 'd', text: "Run and sprint" }
    ],
    correctAnswer: "To, too and two",
    explanation: "Homophones are words that sound the same but have different meanings and spellings.",
    hint: "Look for words that sound identical but are spelled differently."
  },
  {
    id: 6,
    text: "What does the metaphor 'He's a shining light' suggest?",
    options: [
      { id: 'a', text: "He is literally glowing" },
      { id: 'b', text: "He provides guidance or hope", correct: true },
      { id: 'c', text: "He works with electricity" },
      { id: 'd', text: "He is very intelligent" }
    ],
    correctAnswer: "He provides guidance or hope",
    explanation: "Metaphors make implicit comparisons, here suggesting someone provides guidance like a light in darkness.",
    hint: "Think about what light symbolizes in difficult situations."
  },
  {
    id: 7,
    text: "Which option shows the correct contextual meaning of 'break' in: 'Let's take a break'?",
    options: [
      { id: 'a', text: "To separate into pieces" },
      { id: 'b', text: "A pause or rest period", correct: true },
      { id: 'c', text: "To violate a rule" },
      { id: 'd', text: "A fortunate opportunity" }
    ],
    correctAnswer: "A pause or rest period",
    explanation: "Context determines meaning - here 'break' refers to a pause in activity, not physical breaking.",
    hint: "Consider how 'break' is used in work/study contexts."
  },
  {
    id: 8,
    text: "What is the antonym of 'hot'?",
    options: [
      { id: 'a', text: "Warm" },
      { id: 'b', text: "Cold", correct: true },
      { id: 'c', text: "Spicy" },
      { id: 'd', text: "Boiling" }
    ],
    correctAnswer: "Cold",
    explanation: "Antonyms are opposites, and 'cold' is the direct opposite of 'hot' in temperature terms.",
    hint: "Think of the opposite temperature extreme."
  },
  {
    id: 9,
    text: "Which word is a homograph?",
    options: [
      { id: 'a', text: "Right (correct) and Right (direction)", correct: true },
      { id: 'b', text: "See and sea" },
      { id: 'c', text: "Happy and joyful" },
      { id: 'd', text: "Run and walk" }
    ],
    correctAnswer: "Right (correct) and Right (direction)",
    explanation: "Homographs are spelled the same but have different meanings, like the two meanings of 'right'.",
    hint: "Look for a word with the same spelling but different meanings."
  },
  {
    id: 10,
    text: "What does the simile 'He runs like a cheetah' emphasize?",
    options: [
      { id: 'a', text: "His spots" },
      { id: 'b', text: "His speed", correct: true },
      { id: 'c', text: "His hunting skills" },
      { id: 'd', text: "His African origin" }
    ],
    correctAnswer: "His speed",
    explanation: "Similes compare using 'like' or 'as' - cheetahs are fastest land animals, emphasizing speed.",
    hint: "Think about what cheetahs are most known for."
  },
  {
    id: 11,
    text: "Which option shows denotation?",
    options: [
      { id: 'a', text: "Winter is the coldest season", correct: true },
      { id: 'b', text: "Winter brings feelings of loneliness" },
      { id: 'c', text: "Winter is a time for reflection" },
      { id: 'd', text: "Winter symbolizes death" }
    ],
    correctAnswer: "Winter is the coldest season",
    explanation: "Denotation is the literal, factual meaning - winter being coldest season is factual.",
    hint: "Look for the most objective, dictionary-like definition."
  },
  {
    id: 12,
    text: "What does 'It's raining cats and dogs' mean?",
    options: [
      { id: 'a', text: "Animals are falling from sky" },
      { id: 'b', text: "Raining heavily", correct: true },
      { id: 'c', text: "A strange occurrence" },
      { id: 'd', text: "A light drizzle" }
    ],
    correctAnswer: "Raining heavily",
    explanation: "This idiom means it's raining very heavily, not literally about animals.",
    hint: "It's a figurative expression about rain intensity."
  },
  {
    id: 13,
    text: "Which pair shows contextual meaning change?",
    options: [
      { id: 'a', text: "Bank (financial) vs Bank (river)", correct: true },
      { id: 'b', text: "Happy vs Joyful" },
      { id: 'c', text: "Big vs Large" },
      { id: 'd', text: "Hot vs Warm" }
    ],
    correctAnswer: "Bank (financial) vs Bank (river)",
    explanation: "The word 'bank' changes meaning completely based on context (financial vs geographical).",
    hint: "Look for a word that has entirely different meanings in different contexts."
  },
  {
    id: 14,
    text: "What is the connotation of 'snake'?",
    options: [
      { id: 'a', text: "A legless reptile" },
      { id: 'b', text: "Danger or deceit", correct: true },
      { id: 'c', text: "Wildlife" },
      { id: 'd', text: "Jungle habitat" }
    ],
    correctAnswer: "Danger or deceit",
    explanation: "Beyond its literal meaning, 'snake' often connotes danger or deceit in many cultures.",
    hint: "Think about how 'snake' is used metaphorically."
  },
  {
    id: 15,
    text: "Which is an example of figurative language?",
    options: [
      { id: 'a', text: "The room is 5 meters long" },
      { id: 'b', text: "Her smile was a ray of sunshine", correct: true },
      { id: 'c', text: "Water boils at 100°C" },
      { id: 'd', text: "The book has 300 pages" }
    ],
    correctAnswer: "Her smile was a ray of sunshine",
    explanation: "Figurative language uses non-literal expressions, like comparing a smile to sunshine.",
    hint: "Look for a non-literal, imaginative expression."
  },
  {
    id: 16,
    text: "What does 'cloud' mean in 'cloud storage'?",
    options: [
      { id: 'a', text: "Weather phenomenon" },
      { id: 'b', text: "Remote internet servers", correct: true },
      { id: 'c', text: "Foggy conditions" },
      { id: 'd', text: "Something unclear" }
    ],
    correctAnswer: "Remote internet servers",
    explanation: "In tech context, 'cloud' refers to remote servers accessed via internet, not weather clouds.",
    hint: "Think about modern computing terminology."
  },
  {
    id: 17,
    text: "Which word has positive connotation?",
    options: [
      { id: 'a', text: "Cheap" },
      { id: 'b', text: "Economical", correct: true },
      { id: 'c', text: "Stingy" },
      { id: 'd', text: "Miserly" }
    ],
    correctAnswer: "Economical",
    explanation: "'Economical' has positive connotation of being wisely frugal, while others suggest negativity.",
    hint: "Look for the term that would be taken as a compliment."
  },
  {
    id: 18,
    text: "What does 'run' mean in 'The play will run for two weeks'?",
    options: [
      { id: 'a', text: "Move quickly" },
      { id: 'b', text: "Continue for a period", correct: true },
      { id: 'c', text: "Operate" },
      { id: 'd', text: "Flow" }
    ],
    correctAnswer: "Continue for a period",
    explanation: "Here 'run' means the play will be performed/continue for two weeks, not physical running.",
    hint: "Think about theatrical usage."
  },
  {
    id: 19,
    text: "Which is an example of denotation?",
    options: [
      { id: 'a', text: "Home is where the heart is" },
      { id: 'b', text: "A home is a dwelling place", correct: true },
      { id: 'c', text: "Home feels cozy" },
      { id: 'd', text: "Home represents security" }
    ],
    correctAnswer: "A home is a dwelling place",
    explanation: "Denotation is the literal definition - a home as a dwelling place.",
    hint: "Look for the most factual, emotionless definition."
  },
  {
    id: 20,
    text: "What does 'The test was a breeze' mean?",
    options: [
      { id: 'a', text: "The test was windy" },
      { id: 'b', text: "The test was easy", correct: true },
      { id: 'c', text: "The test was outside" },
      { id: 'd', text: "The test was quick" }
    ],
    correctAnswer: "The test was easy",
    explanation: "This metaphor compares an easy test to a gentle, easy breeze.",
    hint: "Think what 'breeze' might represent figuratively."
  },
  {
    id: 21,
    text: "Which pair are antonyms?",
    options: [
      { id: 'a', text: "Happy, joyful" },
      { id: 'b', text: "Love, hate", correct: true },
      { id: 'c', text: "Big, large" },
      { id: 'd', text: "Run, sprint" }
    ],
    correctAnswer: "Love, hate",
    explanation: "Antonyms are opposites, and love/hate represent opposite emotions.",
    hint: "Look for words with opposite meanings."
  },
  {
    id: 22,
    text: "What does 'cool' mean in Nigerian slang?",
    options: [
      { id: 'a', text: "Low temperature" },
      { id: 'b', text: "Fashionable or excellent", correct: true },
      { id: 'c', text: "Unfriendly" },
      { id: 'd', text: "Calm" }
    ],
    correctAnswer: "Fashionable or excellent",
    explanation: "In Nigerian slang, 'cool' often means something is fashionable or really good.",
    hint: "Think how Nigerian youth might use this word positively."
  },
  {
    id: 23,
    text: "Which is an example of connotation?",
    options: [
      { id: 'a', text: "A dog is a canine animal" },
      { id: 'b', text: "Dogs represent loyalty", correct: true },
      { id: 'c', text: "Dogs have four legs" },
      { id: 'd', text: "Dogs can bark" }
    ],
    correctAnswer: "Dogs represent loyalty",
    explanation: "Connotation involves cultural/emotional associations - dogs often symbolize loyalty.",
    hint: "Look for the emotional/cultural meaning."
  },
  {
    id: 24,
    text: "What does 'The bank is by the river' mean?",
    options: [
      { id: 'a', text: "Financial institution near water" },
      { id: 'b', text: "River's edge", correct: true },
      { id: 'c', text: "Money stored outdoors" },
      { id: 'd', text: "A water-themed bank" }
    ],
    correctAnswer: "River's edge",
    explanation: "Here 'bank' refers to the land alongside a river, not a financial institution.",
    hint: "Consider the word 'river' as the key context clue."
  },
  {
    id: 25,
    text: "Which is NOT a homophone pair?",
    options: [
      { id: 'a', text: "Flour, flower" },
      { id: 'b', text: "Right, write" },
      { id: 'c', text: "Hot, cold", correct: true },
      { id: 'd', text: "Sea, see" }
    ],
    correctAnswer: "Hot, cold",
    explanation: "Homophones sound alike - hot/cold are opposites that don't sound alike.",
    hint: "Find the pair that doesn't sound identical."
  },
  {
    id: 26,
    text: "What does 'break' mean in 'She has a break in her voice'?",
    options: [
      { id: 'a', text: "A pause" },
      { id: 'b', text: "A crack or change", correct: true },
      { id: 'c', text: "A fracture" },
      { id: 'd', text: "An interruption" }
    ],
    correctAnswer: "A crack or change",
    explanation: "Here 'break' refers to an audible crack or change in someone's voice.",
    hint: "Think about vocal changes during puberty or emotion."
  },
  {
    id: 27,
    text: "Which word has negative connotation?",
    options: [
      { id: 'a', text: "Thrifty" },
      { id: 'b', text: "Frugal" },
      { id: 'c', text: "Stingy", correct: true },
      { id: 'd', text: "Economical" }
    ],
    correctAnswer: "Stingy",
    explanation: "'Stingy' suggests being ungenerous in a negative way, while others can be positive.",
    hint: "Look for the term that would be considered an insult."
  },
  {
    id: 28,
    text: "What does 'party' mean in 'This party is sick!'?",
    options: [
      { id: 'a', text: "Political group" },
      { id: 'b', text: "Celebration", correct: true },
      { id: 'c', text: "Legal team" },
      { id: 'd', text: "Diseased group" }
    ],
    correctAnswer: "Celebration",
    explanation: "In this slang usage, 'party' means a social celebration, and 'sick' means it's excellent.",
    hint: "Consider youth slang usage."
  },
  {
    id: 29,
    text: "Which is an example of figurative language?",
    options: [
      { id: 'a', text: "The sky is blue" },
      { id: 'b', text: "Time is a thief", correct: true },
      { id: 'c', text: "Water is wet" },
      { id: 'd', text: "Dogs bark" }
    ],
    correctAnswer: "Time is a thief",
    explanation: "This is a metaphor comparing time to a thief, suggesting it steals moments from us.",
    hint: "Look for a non-literal comparison."
  },
  {
    id: 30,
    text: "What does 'light' mean in 'light workload'?",
    options: [
      { id: 'a', text: "Not heavy", correct: true },
      { id: 'b', text: "Bright" },
      { id: 'c', text: "Pale colored" },
      { id: 'd', text: "Not serious" }
    ],
    correctAnswer: "Not heavy",
    explanation: "Here 'light' means not heavy or demanding, referring to the workload's intensity.",
    hint: "Think about how we describe work amounts."
  }
];

export default questions;