
 const questions = [
  {
    id: 1,
    text: "The boy ___ in the garden is my younger brother.",
    options: [
      { id: 'a', text: "play", correct: false },
      { id: 'b', text: "played", correct: false },
      { id: 'c', text: "playing", correct: true },
      { id: 'd', text: "plays" }
    ],
    correctAnswer: "playing",
    explanation: "'Playing' is a present participle describing the boy.",
    hint: "Use present participle (-ing) for ongoing action."
  },
  {
    id: 2,
    text: "Having ___ the assignment, she went to bed.",
    options: [
      { id: 'a', text: "finished", correct: true },
      { id: 'b', text: "finishing", correct: false },
      { id: 'c', text: "finish", correct: false },
      { id: 'd', text: "finishes" }
    ],
    correctAnswer: "finished",
    explanation: "Perfect participle: 'Having + past participle' shows completed action.",
    hint: "Use 'Having + V3' for sequence of actions."
  },
  {
    id: 3,
    text: "The ___ window let in cold air.",
    options: [
      { id: 'a', text: "break", correct: false },
      { id: 'b', text: "breaking", correct: false },
      { id: 'c', text: "broken", correct: true },
      { id: 'd', text: "broke" }
    ],
    correctAnswer: "broken",
    explanation: "'Broken' is a past participle used as an adjective.",
    hint: "Use past participle (-ed/-en) for completed action as adjective."
  },
  {
    id: 4,
    text: "___ the instructions, he started the engine.",
    options: [
      { id: 'a', text: "Read", correct: false },
      { id: 'b', text: "Reading", correct: true },
      { id: 'c', text: "Reads", correct: false },
      { id: 'd', text: "Has read" }
    ],
    correctAnswer: "Reading",
    explanation: "Present participle shows simultaneous action.",
    hint: "Start with -ing when describing an ongoing action."
  },
  {
    id: 5,
    text: "The movie was so ___ that everyone cried.",
    options: [
      { id: 'a', text: "move", correct: false },
      { id: 'b', text: "moved", correct: true },
      { id: 'c', text: "moving", correct: false },
      { id: 'd', text: "moves" }
    ],
    correctAnswer: "moved",
    explanation: "'Moved' describes people's feelings (past participle).",
    hint: "People are 'moved', not 'moving'."
  },
  {
    id: 6,
    text: "She left the pot ___ on the stove.",
    options: [
      { id: 'a', text: "boil", correct: false },
      { id: 'b', text: "boiled", correct: false },
      { id: 'c', text: "boiling", correct: true },
      { id: 'd', text: "boils" }
    ],
    correctAnswer: "boiling",
    explanation: "Ongoing action — use present participle.",
    hint: "Something still boiling? Use -ing."
  },
  {
    id: 7,
    text: "___ by the news, he fainted.",
    options: [
      { id: 'a', text: "Shocked", correct: true },
      { id: 'b', text: "Shocking", correct: false },
      { id: 'c', text: "Shock", correct: false },
      { id: 'd', text: "Shocks" }
    ],
    correctAnswer: "Shocked",
    explanation: "Past participle describes how he felt.",
    hint: "Use past participle for emotional reactions."
  },
  {
    id: 8,
    text: "The ___ birds flew south for winter.",
    options: [
      { id: 'a', text: "migration", correct: false },
      { id: 'b', text: "migrating", correct: true },
      { id: 'c', text: "migrated", correct: false },
      { id: 'd', text: "migrate" }
    ],
    correctAnswer: "migrating",
    explanation: "Present participle describes active birds.",
    hint: "Ongoing movement? Use -ing."
  },
  {
    id: 9,
    text: "___ the door unlocked, the thief entered easily.",
    options: [
      { id: 'a', text: "Leaving", correct: false },
      { id: 'b', text: "Left", correct: false },
      { id: 'c', text: "Having left", correct: true },
      { id: 'd', text: "Leave" }
    ],
    correctAnswer: "Having left",
    explanation: "Perfect participle shows action done before another.",
    hint: "Two actions in order? Use 'Having + V3'."
  },
  {
    id: 10,
    text: "The ___ story made the children laugh.",
    options: [
      { id: 'a', text: "amuse", correct: false },
      { id: 'b', text: "amused", correct: false },
      { id: 'c', text: "amusing", correct: true },
      { id: 'd', text: "amuses" }
    ],
    correctAnswer: "amusing",
    explanation: "'Amusing' describes the story (cause of laughter).",
    hint: "Things are 'amusing', people are 'amused'."
  },
  {
    id: 11,
    text: "___ the letter, she posted it.",
    options: [
      { id: 'a', text: "Writing", correct: false },
      { id: 'b', text: "Written", correct: false },
      { id: 'c', text: "Having written", correct: true },
      { id: 'd', text: "Wrote" }
    ],
    correctAnswer: "Having written",
    explanation: "Action completed before posting — perfect participle.",
    hint: "Sequence of actions? Use 'Having + V3'."
  },
  {
    id: 12,
    text: "The ___ student answered all questions.",
    options: [
      { id: 'a', text: "excite", correct: false },
      { id: 'b', text: "excited", correct: true },
      { id: 'c', text: "exciting", correct: false },
      { id: 'd', text: "excites" }
    ],
    correctAnswer: "excited",
    explanation: "'Excited' describes the student's feeling.",
    hint: "How does the person feel? Use past participle."
  },
  {
    id: 13,
    text: "___ through the market, she lost her bag.",
    options: [
      { id: 'a', text: "Walk", correct: false },
      { id: 'b', text: "Walked", correct: false },
      { id: 'c', text: "Walking", correct: true },
      { id: 'd', text: "Walks" }
    ],
    correctAnswer: "Walking",
    explanation: "Present participle shows simultaneous action.",
    hint: "Doing two things at once? Use -ing."
  },
  {
    id: 14,
    text: "The ___ cake was eaten quickly.",
    options: [
      { id: 'a', text: "bake", correct: false },
      { id: 'b', text: "baking", correct: false },
      { id: 'c', text: "baked", correct: true },
      { id: 'd', text: "bakes" }
    ],
    correctAnswer: "baked",
    explanation: "Past participle as adjective for completed action.",
    hint: "Already baked? Use V3."
  },
  {
    id: 15,
    text: "___ the results, the teacher smiled.",
    options: [
      { id: 'a', text: "See", correct: false },
      { id: 'b', text: "Seeing", correct: true },
      { id: 'c', text: "Seen", correct: false },
      { id: 'd', text: "Saw" }
    ],
    correctAnswer: "Seeing",
    explanation: "Present participle shows reason for smiling.",
    hint: "Cause of action? Use -ing."
  },
  {
    id: 16,
    text: "The ___ noise came from the generator.",
    options: [
      { id: 'a', text: "annoy", correct: false },
      { id: 'b', text: "annoying", correct: true },
      { id: 'c', text: "annoyed", correct: false },
      { id: 'd', text: "annoys" }
    ],
    correctAnswer: "annoying",
    explanation: "'Annoying' describes the noise (source of irritation).",
    hint: "What causes annoyance? Use -ing."
  },
  {
    id: 17,
    text: "___ the match, they celebrated wildly.",
    options: [
      { id: 'a', text: "Win", correct: false },
      { id: 'b', text: "Winning", correct: false },
      { id: 'c', text: "Having won", correct: true },
      { id: 'd', text: "Won" }
    ],
    correctAnswer: "Having won",
    explanation: "Perfect participle shows action before celebration.",
    hint: "First win, then celebrate? Use 'Having + V3'."
  },
  {
    id: 18,
    text: "The ___ children enjoyed the party.",
    options: [
      { id: 'a', text: "excite", correct: false },
      { id: 'b', text: "excited", correct: true },
      { id: 'c', text: "exciting", correct: false },
      { id: 'd', text: "excites" }
    ],
    correctAnswer: "excited",
    explanation: "'Excited' describes the children's state.",
    hint: "Emotion of people? Use past participle."
  },
  {
    id: 19,
    text: "___ from the roof, the tiles fell.",
    options: [
      { id: 'a', text: "Loosened", correct: true },
      { id: 'b', text: "Loosening", correct: false },
      { id: 'c', text: "Loose", correct: false },
      { id: 'd', text: "Loses" }
    ],
    correctAnswer: "Loosened",
    explanation: "Past participle modifies 'tiles' — passive meaning.",
    hint: "If the subject receives the action, use past participle."
  },
  {
    id: 20,
    text: "___ TV, he fell asleep.",
    options: [
      { id: 'a', text: "Watch", correct: false },
      { id: 'b', text: "Watching", correct: true },
      { id: 'c', text: "Watched", correct: false },
      { id: 'd', text: "Watches" }
    ],
    correctAnswer: "Watching",
    explanation: "Ongoing action before falling asleep.",
    hint: "Use -ing for background action."
  },
  {
    id: 21,
    text: "The ___ announcement shocked everyone.",
    options: [
      { id: 'a', text: "surprise", correct: false },
      { id: 'b', text: "surprising", correct: true },
      { id: 'c', text: "surprised", correct: false },
      { id: 'd', text: "surprises" }
    ],
    correctAnswer: "surprising",
    explanation: "'Surprising' describes the announcement (cause).",
    hint: "What causes surprise? Use -ing."
  },
  {
    id: 22,
    text: "___ the door, he went out.",
    options: [
      { id: 'a', text: "Closing", correct: true },
      { id: 'b', text: "Closed", correct: false },
      { id: 'c', text: "Close", correct: false },
      { id: 'd', text: "Closes" }
    ],
    correctAnswer: "Closing",
    explanation: "Present participle shows action before going out.",
    hint: "Two actions in time order? Use -ing."
  },
  {
    id: 23,
    text: "The ___ man was taken to the hospital.",
    options: [
      { id: 'a', text: "injure", correct: false },
      { id: 'b', text: "injured", correct: true },
      { id: 'c', text: "injuring", correct: false },
      { id: 'd', text: "injures" }
    ],
    correctAnswer: "injured",
    explanation: "Past participle as adjective for someone hurt.",
    hint: "Use V3 for passive or emotional state."
  },
  {
    id: 24,
    text: "___ the homework, the students relaxed.",
    options: [
      { id: 'a', text: "Finish", correct: false },
      { id: 'b', text: "Finishing", correct: false },
      { id: 'c', text: "Having finished", correct: true },
      { id: 'd', text: "Finished" }
    ],
    correctAnswer: "Having finished",
    explanation: "Perfect participle shows completed action before relaxing.",
    hint: "Before relaxing? Use 'Having + V3'."
  },
  {
    id: 25,
    text: "The ___ teacher explained clearly.",
    options: [
      { id: 'a', text: "tire", correct: false },
      { id: 'b', text: "tired", correct: true },
      { id: 'c', text: "tiring", correct: false },
      { id: 'd', text: "tires" }
    ],
    correctAnswer: "tired",
    explanation: "'Tired' describes how the teacher feels.",
    hint: "Feeling tired? Use past participle."
  },
  {
    id: 26,
    text: "___ the alarm, she woke up.",
    options: [
      { id: 'a', text: "Hear", correct: false },
      { id: 'b', text: "Hearing", correct: true },
      { id: 'c', text: "Heard", correct: false },
      { id: 'd', text: "Hears" }
    ],
    correctAnswer: "Hearing",
    explanation: "Present participle shows cause of waking.",
    hint: "Trigger of action? Use -ing."
  },
  {
    id: 27,
    text: "The ___ flowers looked beautiful.",
    options: [
      { id: 'a', text: "pick", correct: false },
      { id: 'b', text: "picking", correct: false },
      { id: 'c', text: "picked", correct: true },
      { id: 'd', text: "picks" }
    ],
    correctAnswer: "picked",
    explanation: "Past participle as adjective for flowers that were picked.",
    hint: "Done to the flowers? Use V3."
  },
  {
    id: 28,
    text: "___ his mistake, he apologized.",
    options: [
      { id: 'a', text: "Realize", correct: false },
      { id: 'b', text: "Realizing", correct: true },
      { id: 'c', text: "Realized", correct: false },
      { id: 'd', text: "Realizes" }
    ],
    correctAnswer: "Realizing",
    explanation: "Present participle shows reason for apology.",
    hint: "Awareness leading to action? Use -ing."
  },
  {
    id: 29,
    text: "___ the project, they submitted it.",
    options: [
      { id: 'a', text: "Complete", correct: false },
      { id: 'b', text: "Completing", correct: false },
      { id: 'c', text: "Having completed", correct: true },
      { id: 'd', text: "Completed" }
    ],
    correctAnswer: "Having completed",
    explanation: "Perfect participle for action before submission.",
    hint: "First complete, then submit? Use 'Having + V3'."
  },
  {
    id: 30,
    text: "The ___ dog barked at strangers.",
    options: [
      { id: 'a', text: "frighten", correct: false },
      { id: 'b', text: "frightened", correct: false },
      { id: 'c', text: "frightening", correct: true },
      { id: 'd', text: "frightens" }
    ],
    correctAnswer: "frightening",
    explanation: "'Frightening' describes the dog (cause of fear).",
    hint: "Causing fear? Use -ing."
  }
];

export default questions;
