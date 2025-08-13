const questions = [
  {
    id: 1,
    text: "Which is a complete sentence?",
    options: [
      { id: 'a', text: "Running to catch the bus." },
      { id: 'b', text: "Because the rain started." },
      { id: 'c', text: "The students passed.", correct: true },
      { id: 'd', text: "In the market yesterday." }
    ],
    correctAnswer: "The students passed.",
    explanation: "Has subject ('students') and predicate ('passed').",
    hint: "Check for both a subject and a predicate to form a complete thought."
  },
  {
    id: 2,
    text: "Lagos ___ bustling.",
    options: [
      { id: 'a', text: "am" },
      { id: 'b', text: "is", correct: true },
      { id: 'c', text: "are" },
      { id: 'd', text: "be" }
    ],
    correctAnswer: "is",
    explanation: "'Lagos' is a singular subject, so it takes 'is.'",
    hint: "Determine if the subject 'Lagos' is singular or plural."
  },
  {
    id: 3,
    text: "Identify the compound sentence:",
    options: [
      { id: 'a', text: "I bought bread." },
      { id: 'b', text: "She slept while he read." },
      { id: 'c', text: "He laughed, and I cried.", correct: true },
      { id: 'd', text: "If you come early." }
    ],
    correctAnswer: "He laughed, and I cried.",
    explanation: "Uses FANBOYS ('and') to join two independent clauses.",
    hint: "Look for a sentence with two complete thoughts joined by a FANBOYS conjunction."
  },
  {
    id: 4,
    text: "___ you going to Abuja?",
    options: [
      { id: 'a', text: "Is" },
      { id: 'b', text: "Are", correct: true },
      { id: 'c', text: "Am" },
      { id: 'd', text: "Be" }
    ],
    correctAnswer: "Are",
    explanation: "'You' is a plural or singular second-person subject, takes 'are.'",
    hint: "Check the correct verb form for the pronoun 'you' in a question."
  },
  {
    id: 5,
    text: "Which is a fragment?",
    options: [
      { id: 'a', text: "Go away!" },
      { id: 'b', text: "Although he tried.", correct: true },
      { id: 'c', text: "They won the match." },
      { id: 'd', text: "Birds fly." }
    ],
    correctAnswer: "Although he tried.",
    explanation: "Dependent clause alone is incomplete.",
    hint: "Identify the option that cannot stand alone as a complete thought."
  },
  {
    id: 6,
    text: "The team ___ playing well.",
    options: [
      { id: 'a', text: "is", correct: true },
      { id: 'b', text: "are" },
      { id: 'c', text: "am" },
      { id: 'd', text: "be" }
    ],
    correctAnswer: "is",
    explanation: "'Team' is a singular collective noun, takes 'is.'",
    hint: "Consider whether 'team' is treated as a single unit."
  },
  {
    id: 7,
    text: "Active to passive: 'Bola wrote the book.'",
    options: [
      { id: 'a', text: "The book wrote Bola." },
      { id: 'b', text: "The book was wrote by Bola." },
      { id: 'c', text: "The book was written by Bola.", correct: true },
      { id: 'd', text: "Bola was written the book." }
    ],
    correctAnswer: "The book was written by Bola.",
    explanation: "Correct passive structure: subject receives action, uses 'was written.'",
    hint: "Look for the correct form where the book receives the action of writing."
  },
  {
    id: 8,
    text: "Jide likes swimming, hiking, ___.",
    options: [
      { id: 'a', text: "and to camp" },
      { id: 'b', text: "and camping", correct: true },
      { id: 'c', text: "camping" },
      { id: 'd', text: "camped" }
    ],
    correctAnswer: "and camping",
    explanation: "Parallel structure requires consistent -ing form.",
    hint: "Ensure all items in the list follow the same grammatical pattern."
  },
  {
    id: 9,
    text: "Which is imperative?",
    options: [
      { id: 'a', text: "Are you serious?" },
      { id: 'b', text: "Wow, amazing goal!" },
      { id: 'c', text: "Submit your assignment.", correct: true },
      { id: 'd', text: "The sun sets." }
    ],
    correctAnswer: "Submit your assignment.",
    explanation: "Imperative sentences give commands.",
    hint: "Look for a sentence that gives a direct order."
  },
  {
    id: 10,
    text: "Fix the run-on: She cooks he washes.",
    options: [
      { id: 'a', text: "She cooks he washes." },
      { id: 'b', text: "She cooks, he washes." },
      { id: 'c', text: "She cooks and he washes." },
      { id: 'd', text: "B or C", correct: true }
    ],
    correctAnswer: "B or C",
    explanation: "Comma + FANBOYS ('and') or just FANBOYS corrects run-on.",
    hint: "Check for proper ways to join two independent clauses."
  },
  {
    id: 11,
    text: "Which is a simple sentence?",
    options: [
      { id: 'a', text: "Amaka sings, and Tunde dances." },
      { id: 'b', text: "Amaka sings beautifully.", correct: true },
      { id: 'c', text: "Because Amaka sings, we listen." },
      { id: 'd', text: "Amaka sings while Tunde dances." }
    ],
    correctAnswer: "Amaka sings beautifully.",
    explanation: "Simple sentence has one subject and one predicate.",
    hint: "Look for a sentence with only one complete thought."
  },
  {
    id: 12,
    text: "Identify the complex sentence:",
    options: [
      { id: 'a', text: "I ate fufu and soup." },
      { id: 'b', text: "I ate fufu, and she ate rice." },
      { id: 'c', text: "When I ate fufu, she left.", correct: true },
      { id: 'd', text: "Eat fufu now!" }
    ],
    correctAnswer: "When I ate fufu, she left.",
    explanation: "Complex sentence has an independent clause and a dependent clause ('when...').",
    hint: "Check for a sentence with a dependent clause starting with words like 'when'."
  },
  {
    id: 13,
    text: "The children ___ in the park.",
    options: [
      { id: 'a', text: "plays" },
      { id: 'b', text: "play", correct: true },
      { id: 'c', text: "is playing" },
      { id: 'd', text: "playing" }
    ],
    correctAnswer: "play",
    explanation: "'Children' is plural, so it takes 'play.'",
    hint: "Determine if 'children' is singular or plural for verb agreement."
  },
  {
    id: 14,
    text: "Which is an exclamatory sentence?",
    options: [
      { id: 'a', text: "What a great performance!" , correct: true },
      { id: 'b', text: "Is it raining?" },
      { id: 'c', text: "Close the gate." },
      { id: 'd', text: "The gate is closed." }
    ],
    correctAnswer: "What a great performance!",
    explanation: "Exclamatory sentences express strong emotion with '!'.",
    hint: "Look for a sentence that shows excitement or emotion."
  },
  {
    id: 15,
    text: "Fix the fragment: Because the exam was tough.",
    options: [
      { id: 'a', text: "Because the exam was tough." },
      { id: 'b', text: "Because the exam was tough, we studied.", correct: true },
      { id: 'c', text: "Because the exam was tough, studied." },
      { id: 'd', text: "The exam was tough because." }
    ],
    correctAnswer: "Because the exam was tough, we studied.",
    explanation: "Add an independent clause to complete the thought.",
    hint: "Check how to make a dependent clause complete."
  },
  {
    id: 16,
    text: "Which sentence has parallel structure?",
    options: [
      { id: 'a', text: "She likes to read, write, and dancing." },
      { id: 'b', text: "She likes reading, writing, and dancing.", correct: true },
      { id: 'c', text: "She likes to read, writing, and dance." },
      { id: 'd', text: "She likes reading, to write, and danced." }
    ],
    correctAnswer: "She likes reading, writing, and dancing.",
    explanation: "Parallel structure uses consistent -ing forms.",
    hint: "Ensure all items in the list follow the same verb form."
  },
  {
    id: 17,
    text: "Active to passive: 'The chef prepares the meal.'",
    options: [
      { id: 'a', text: "The meal prepares the chef." },
      { id: 'b', text: "The meal was prepared by the chef.", correct: true },
      { id: 'c', text: "The chef was prepared the meal." },
      { id: 'd', text: "The meal is preparing by the chef." }
    ],
    correctAnswer: "The meal was prepared by the chef.",
    explanation: "Passive voice: subject ('meal') receives action, uses 'was prepared.'",
    hint: "Look for the subject receiving the action in passive voice."
  },
  {
    id: 18,
    text: "Which is a run-on sentence?",
    options: [
      { id: 'a', text: "I study hard, so I pass exams." },
      { id: 'b', text: "I study hard I pass exams.", correct: true },
      { id: 'c', text: "I study hard; I pass exams." },
      { id: 'd', text: "I study hard." }
    ],
    correctAnswer: "I study hard I pass exams.",
    explanation: "Two clauses without punctuation or conjunction is a run-on.",
    hint: "Check for two clauses improperly joined without punctuation."
  },
  {
    id: 19,
    text: "The dog ___ the bone.",
    options: [
      { id: 'a', text: "chew" },
      { id: 'b', text: "chews", correct: true },
      { id: 'c', text: "chewing" },
      { id: 'd', text: "chewed" }
    ],
    correctAnswer: "chews",
    explanation: "'Dog' is singular, takes 'chews.'",
    hint: "Determine if 'dog' is singular or plural for verb agreement."
  },
  {
    id: 20,
    text: "Which is a declarative sentence?",
    options: [
      { id: 'a', text: "What a goal!" },
      { id: 'b', text: "Kick the ball!" },
      { id: 'c', text: "The team won the match.", correct: true },
      { id: 'd', text: "Did the team win?" }
    ],
    correctAnswer: "The team won the match.",
    explanation: "Declarative sentences state facts.",
    hint: "Look for a sentence that provides information or a fact."
  },
  {
    id: 21,
    text: "Fix the run-on: Tunde reads books Amaka writes poems.",
    options: [
      { id: 'a', text: "Tunde reads books Amaka writes poems." },
      { id: 'b', text: "Tunde reads books, Amaka writes poems." },
      { id: 'c', text: "Tunde reads books; Amaka writes poems.", correct: true },
      { id: 'd', text: "Tunde reads books Amaka writes, poems." }
    ],
    correctAnswer: "Tunde reads books; Amaka writes poems.",
    explanation: "Semicolon joins two related independent clauses.",
    hint: "Check the correct punctuation to join two independent clauses."
  },
  {
    id: 22,
    text: "Which is a complex sentence?",
    options: [
      { id: 'a', text: "She danced and sang." },
      { id: 'b', text: "She danced, but he watched." },
      { id: 'c', text: "Because she danced, he clapped.", correct: true },
      { id: 'd', text: "Dance now!" }
    ],
    correctAnswer: "Because she danced, he clapped.",
    explanation: "Complex sentence has a dependent clause ('because...') and an independent clause.",
    hint: "Look for a sentence with a clause starting with 'because' or similar."
  },
  {
    id: 23,
    text: "The books ___ on the shelf.",
    options: [
      { id: 'a', text: "is" },
      { id: 'b', text: "are", correct: true },
      { id: 'c', text: "be" },
      { id: 'd', text: "was" }
    ],
    correctAnswer: "are",
    explanation: "'Books' is plural, takes 'are.'",
    hint: "Check if 'books' is singular or plural for verb agreement."
  },
  {
    id: 24,
    text: "Which sentence uses correct punctuation?",
    options: [
      { id: 'a', text: "Let’s eat Grandma!" },
      { id: 'b', text: "Let’s eat, Grandma!", correct: true },
      { id: 'c', text: "Lets eat Grandma." },
      { id: 'd', text: "Let’s eat Grandma." }
    ],
    correctAnswer: "Let’s eat, Grandma!",
    explanation: "Comma clarifies 'Grandma' is being addressed, not eaten.",
    hint: "Look for the sentence with a comma to avoid misinterpretation."
  },
  {
    id: 25,
    text: "Which is a fragment?",
    options: [
      { id: 'a', text: "The sun shines brightly." },
      { id: 'b', text: "Under the tree in Lagos.", correct: true },
      { id: 'c', text: "Bring your books!" },
      { id: 'd', text: "Is it sunny?" }
    ],
    correctAnswer: "Under the tree in Lagos.",
    explanation: "Lacks a predicate, making it incomplete.",
    hint: "Check for a sentence missing a subject or predicate."
  },
  {
    id: 26,
    text: "Passive to active: 'The song was sung by the choir.'",
    options: [
      { id: 'a', text: "The choir sung the song." },
      { id: 'b', text: "The choir sang the song.", correct: true },
      { id: 'c', text: "The song sang the choir." },
      { id: 'd', text: "The choir was sung the song." }
    ],
    correctAnswer: "The choir sang the song.",
    explanation: "Active voice: subject ('choir') performs action ('sang').",
    hint: "Identify the subject performing the action in active voice."
  },
  {
    id: 27,
    text: "She enjoys reading, jogging, ___.",
    options: [
      { id: 'a', text: "and to swim" },
      { id: 'b', text: "and swimming", correct: true },
      { id: 'c', text: "swim" },
      { id: 'd', text: "swam" }
    ],
    correctAnswer: "and swimming",
    explanation: "Parallel structure uses consistent -ing forms.",
    hint: "Ensure all items in the list match the -ing form."
  },
  {
    id: 28,
    text: "Which is interrogative?",
    options: [
      { id: 'a', text: "The rain stopped." },
      { id: 'b', text: "Stop the rain!" },
      { id: 'c', text: "Is it raining?", correct: true },
      { id: 'd', text: "Wow, it’s raining!" }
    ],
    correctAnswer: "Is it raining?",
    explanation: "Interrogative sentences ask questions with '?'",
    hint: "Look for a sentence that asks a question."
  },
  {
    id: 29,
    text: "Fix the run-on: I love music I dance daily.",
    options: [
      { id: 'a', text: "I love music I dance daily." },
      { id: 'b', text: "I love music, I dance daily." },
      { id: 'c', text: "I love music, and I dance daily.", correct: true },
      { id: 'd', text: "I love music dance daily." }
    ],
    correctAnswer: "I love music, and I dance daily.",
    explanation: "Comma + FANBOYS ('and') corrects the run-on.",
    hint: "Check how to properly join two clauses with a conjunction."
  },
  {
    id: 30,
    text: "The committee ___ a meeting tomorrow.",
    options: [
      { id: 'a', text: "hold" },
      { id: 'b', text: "holds", correct: true },
      { id: 'c', text: "holding" },
      { id: 'd', text: "held" }
    ],
    correctAnswer: "holds",
    explanation: "'Committee' is singular, takes 'holds.'",
    hint: "Determine if 'committee' is singular or plural for verb agreement."
  }
];

export default questions;