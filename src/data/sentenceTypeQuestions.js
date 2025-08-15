const questions = [
  {
    id: 1,
    text: "___ it rained, we played football.",
    options: [
      { id: 'a', text: "Although", correct: true },
      { id: 'b', text: "Because" },
      { id: 'c', text: "And" },
      { id: 'd', text: "So" }
    ],
    correctAnswer: "Although",
    explanation: "'Although' creates a complex sentence with a dependent clause",
    hint: "Look for a word that shows contrast between two ideas"
  },
  {
    id: 2,
    text: "Which is a COMPOUND sentence?",
    options: [
      { id: 'a', text: "Dogs bark." },
      { id: 'b', text: "After the concert." },
      { id: 'c', text: "Yemi cooked; Kemi cleaned.", correct: true },
      { id: 'd', text: "When the bell rings." }
    ],
    correctAnswer: "Yemi cooked; Kemi cleaned.",
    explanation: "Two independent clauses joined by semicolon",
    hint: "A compound sentence contains two complete thoughts joined properly"
  },
  {
    id: 3,
    text: "The teacher ___ gave notes ___ explained them. (Parallel)",
    options: [
      { id: 'a', text: "not only / but" },
      { id: 'b', text: "not only / but also", correct: true },
      { id: 'c', text: "neither / or" },
      { id: 'd', text: "either / also" }
    ],
    correctAnswer: "not only / but also",
    explanation: "'Not only/but also' maintains parallel structure",
    hint: "This correlative conjunction pair must be used together"
  },
  {
    id: 4,
    text: "Identify the FRAGMENT:",
    options: [
      { id: 'a', text: "Run!" },
      { id: 'b', text: "Go home." },
      { id: 'c', text: "While you slept.", correct: true },
      { id: 'd', text: "Birds fly." }
    ],
    correctAnswer: "While you slept.",
    explanation: "Dependent clause alone = incomplete thought",
    hint: "A fragment doesn't express a complete thought"
  },
  {
    id: 5,
    text: "She sells bags; ___, she repairs shoes.",
    options: [
      { id: 'a', text: "and" },
      { id: 'b', text: "however", correct: true },
      { id: 'c', text: "but" },
      { id: 'd', text: "because" }
    ],
    correctAnswer: "however",
    explanation: "Semicolon + conjunctive adverb like 'however'",
    hint: "After a semicolon, you often use a transitional word"
  },
  {
    id: 6,
    text: "Which is COMPOUND-COMPLEX?",
    options: [
      { id: 'a', text: "I came, I saw, I conquered." },
      { id: 'b', text: "After the party, we cleaned, and Mum praised us.", correct: true },
      { id: 'c', text: "Jide laughed." },
      { id: 'd', text: "Although tired, he smiled." }
    ],
    correctAnswer: "After the party, we cleaned, and Mum praised us.",
    explanation: "Dependent clause + two independent clauses",
    hint: "Look for a sentence with multiple clauses of different types"
  },
  {
    id: 7,
    text: "The woman ___ won the lottery is my aunt.",
    options: [
      { id: 'a', text: "which" },
      { id: 'b', text: "who", correct: true },
      { id: 'c', text: "where" },
      { id: 'd', text: "when" }
    ],
    correctAnswer: "who",
    explanation: "'Who' introduces adjective clauses for people",
    hint: "Use relative pronouns for people"
  },
  {
    id: 8,
    text: "Fix this run-on: 'He studied all night he passed.'",
    options: [
      { id: 'a', text: "He studied all night he passed." },
      { id: 'b', text: "He studied all night, he passed." },
      { id: 'c', text: "He studied all night; he passed.", correct: true },
      { id: 'd', text: "Studying all night he passed." }
    ],
    correctAnswer: "He studied all night; he passed.",
    explanation: "Semicolon correctly joins two independent clauses",
    hint: "Run-ons need proper punctuation between independent clauses"
  },
  {
    id: 9,
    text: "I'll visit Lagos ___ I save enough money.",
    options: [
      { id: 'a', text: "so" },
      { id: 'b', text: "unless" },
      { id: 'c', text: "if", correct: true },
      { id: 'd', text: "but" }
    ],
    correctAnswer: "if",
    explanation: "'If' starts a dependent adverb clause",
    hint: "This word introduces a condition"
  },
  {
    id: 10,
    text: "Which is SIMPLE?",
    options: [
      { id: 'a', text: "The bus broke down, and we walked." },
      { id: 'b', text: "When the rain stopped." },
      { id: 'c', text: "Goats ate the crops.", correct: true },
      { id: 'd', text: "Although she tried." }
    ],
    correctAnswer: "Goats ate the crops.",
    explanation: "One subject + one predicate",
    hint: "Simple sentences contain just one independent clause"
  },
  {
    id: 11,
    text: "The students protested ___ the fee hike was unfair.",
    options: [
      { id: 'a', text: "because", correct: true },
      { id: 'b', text: "so" },
      { id: 'c', text: "and" },
      { id: 'd', text: "yet" }
    ],
    correctAnswer: "because",
    explanation: "'Because' introduces a reason adverb clause",
    hint: "This word shows cause and effect"
  },
  {
    id: 12,
    text: "Identify the NOUN clause:",
    options: [
      { id: 'a', text: "When the exam starts" },
      { id: 'b', text: "That she passed", correct: true },
      { id: 'c', text: "Who stole the phone" },
      { id: 'd', text: "Near the market" }
    ],
    correctAnswer: "That she passed",
    explanation: "'That she passed' acts as a subject/object",
    hint: "Noun clauses function as nouns in sentences"
  },
  {
    id: 13,
    text: "___ Danfo buses are old, ___ they still run.",
    options: [
      { id: 'a', text: "Although / yet", correct: true },
      { id: 'b', text: "Because / so" },
      { id: 'c', text: "If / then" },
      { id: 'd', text: "Since / and" }
    ],
    correctAnswer: "Although / yet",
    explanation: "'Although/yet' shows contrast in compound-complex",
    hint: "These words show contrast between two ideas"
  },
  {
    id: 14,
    text: "Which is a RUN-ON?",
    options: [
      { id: 'a', text: "She cooks he cleans.", correct: true },
      { id: 'b', text: "He ran; she followed." },
      { id: 'c', text: "After class ended." },
      { id: 'd', text: "Birds sing." }
    ],
    correctAnswer: "She cooks he cleans.",
    explanation: "Two independent clauses without punctuation",
    hint: "Run-ons join independent clauses incorrectly"
  },
  {
    id: 15,
    text: "The book ___ I borrowed is overdue.",
    options: [
      { id: 'a', text: "who" },
      { id: 'b', text: "when" },
      { id: 'c', text: "where" },
      { id: 'd', text: "that", correct: true }
    ],
    correctAnswer: "that",
    explanation: "'That' introduces adjective clause for things",
    hint: "Use relative pronouns for objects/things"
  },
  {
    id: 16,
    text: "To pass POST-UTME, you must: study, ___, and revise.",
    options: [
      { id: 'a', text: "practicing" },
      { id: 'b', text: "practice", correct: true },
      { id: 'c', text: "to practice" },
      { id: 'd', text: "practiced" }
    ],
    correctAnswer: "practice",
    explanation: "Parallel structure: base verbs 'study, practice, revise'",
    hint: "Maintain consistent verb forms in lists"
  },
  {
    id: 17,
    text: "The team ___ celebrating ___ victory.",
    options: [
      { id: 'a', text: "is / their" },
      { id: 'b', text: "are / its" },
      { id: 'c', text: "is / its", correct: true },
      { id: 'd', text: "are / their" }
    ],
    correctAnswer: "is / its",
    explanation: "Singular 'team' takes 'is' and 'its'",
    hint: "Collective nouns can be singular"
  },
  {
    id: 18,
    text: "Which is IMPERATIVE?",
    options: [
      { id: 'a', text: "Are you leaving?" },
      { id: 'b', text: "What a goal!" },
      { id: 'c', text: "Submit your form.", correct: true },
      { id: 'd', text: "JAMB released results." }
    ],
    correctAnswer: "Submit your form.",
    explanation: "Gives a command",
    hint: "Imperative sentences give orders or instructions"
  },
  {
    id: 19,
    text: "___ raining, the match continued.",
    options: [
      { id: 'a', text: "Although" },
      { id: 'b', text: "Despite", correct: true },
      { id: 'c', text: "Because" },
      { id: 'd', text: "Yet" }
    ],
    correctAnswer: "Despite",
    explanation: "'Despite' starts dependent clause with -ing verb",
    hint: "This preposition shows contrast"
  },
  {
    id: 20,
    text: "The boy ___ won the race is my brother.",
    options: [
      { id: 'a', text: "which" },
      { id: 'b', text: "whom" },
      { id: 'c', text: "who", correct: true },
      { id: 'd', text: "whose" }
    ],
    correctAnswer: "who",
    explanation: "'Who' for people in adjective clauses",
    hint: "Use 'who' for subjects in relative clauses"
  },
  {
    id: 21,
    text: "She forgot her keys; ___, she waited outside.",
    options: [
      { id: 'a', text: "therefore", correct: true },
      { id: 'b', text: "so" },
      { id: 'c', text: "and" },
      { id: 'd', text: "because" }
    ],
    correctAnswer: "therefore",
    explanation: "'Therefore' is a conjunctive adverb after semicolon",
    hint: "Use transitional adverbs after semicolons"
  },
  {
    id: 22,
    text: "Which is COMPLEX?",
    options: [
      { id: 'a', text: "We ate rice and beans." },
      { id: 'b', text: "After she left, we ate.", correct: true },
      { id: 'c', text: "He smiled and laughed." },
      { id: 'd', text: "Lagos is busy; Abuja is calm." }
    ],
    correctAnswer: "After she left, we ate.",
    explanation: "Dependent clause + independent clause",
    hint: "Complex sentences have one independent and one dependent clause"
  },
  {
    id: 23,
    text: "Fix: 'Lola likes dancing, singing, and to act.'",
    options: [
      { id: 'a', text: "dancing, singing, and to act" },
      { id: 'b', text: "dancing, singing, and acting", correct: true },
      { id: 'c', text: "to dance, singing, and acting" },
      { id: 'd', text: "dance, sing, and to act" }
    ],
    correctAnswer: "dancing, singing, and acting",
    explanation: "Parallel: all -ing verbs",
    hint: "Keep verb forms consistent in lists"
  },
  {
    id: 24,
    text: "Neither the teacher nor the students ___ present.",
    options: [
      { id: 'a', text: "was" },
      { id: 'b', text: "were", correct: true },
      { id: 'c', text: "is" },
      { id: 'd', text: "are" }
    ],
    correctAnswer: "were",
    explanation: "Plural verb 'were' agrees with nearest plural 'students'",
    hint: "In 'neither/nor', the verb agrees with the closest subject"
  },
  {
    id: 25,
    text: "Give me ___ you borrowed. (Noun clause)",
    options: [
      { id: 'a', text: "what", correct: true },
      { id: 'b', text: "when" },
      { id: 'c', text: "where" },
      { id: 'd', text: "why" }
    ],
    correctAnswer: "what",
    explanation: "'What' introduces noun clause as object",
    hint: "Noun clauses often begin with 'what' or 'that'"
  },
  {
    id: 26,
    text: "The market ___ burned down was rebuilt.",
    options: [
      { id: 'a', text: "who" },
      { id: 'b', text: "which", correct: true },
      { id: 'c', text: "where" },
      { id: 'd', text: "when" }
    ],
    correctAnswer: "which",
    explanation: "'Which' for things in adjective clauses",
    hint: "Use 'which' for objects in relative clauses"
  },
  {
    id: 27,
    text: "We'll travel ___ holidays start.",
    options: [
      { id: 'a', text: "so" },
      { id: 'b', text: "and" },
      { id: 'c', text: "when", correct: true },
      { id: 'd', text: "but" }
    ],
    correctAnswer: "when",
    explanation: "'When' starts adverb clause of time",
    hint: "This word indicates timing"
  },
  {
    id: 28,
    text: "Which is EXCLAMATORY?",
    options: [
      { id: 'a', text: "Close the door." },
      { id: 'b', text: "Wow, amazing!", correct: true },
      { id: 'c', text: "Are you sure?" },
      { id: 'd', text: "She arrived early." }
    ],
    correctAnswer: "Wow, amazing!",
    explanation: "Expresses strong emotion",
    hint: "Exclamatory sentences show strong feeling"
  },
  {
    id: 29,
    text: "JAMB ___ released results; UTME ___ next month.",
    options: [
      { id: 'a', text: "has / is", correct: true },
      { id: 'b', text: "have / are" },
      { id: 'c', text: "has / are" },
      { id: 'd', text: "have / is" }
    ],
    correctAnswer: "has / is",
    explanation: "Singular 'JAMB' takes 'has'; singular 'UTME' takes 'is'",
    hint: "Treat acronyms as singular when they represent single entities"
  },
  {
    id: 30,
    text: "Jide passed ___ he studied hard.",
    options: [
      { id: 'a', text: "because", correct: true },
      { id: 'b', text: "so" },
      { id: 'c', text: "but" },
      { id: 'd', text: "although" }
    ],
    correctAnswer: "because",
    explanation: "'Because' shows cause-effect in complex sentence",
    hint: "This word explains the reason for something"
  }
];

export default questions;