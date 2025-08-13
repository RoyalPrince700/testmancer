const questions = [
  {
    id: 1,
    text: "Which is correct?",
    options: [
      { id: 'a', text: "She write letters every day." },
      { id: 'b', text: "She writes letters every day.", correct: true },
      { id: 'c', text: "She is write letters every day." },
      { id: 'd', text: "She writing letters every day." }
    ],
    correctAnswer: "She writes letters every day.",
    explanation: "Present Simple (routine) needs -s for she",
    hint: "Look for the verb form used for daily habits with third-person singular subjects."
  },
  {
    id: 2,
    text: "I ______ Jollof rice when you called.",
    options: [
      { id: 'a', text: "cook" },
      { id: 'b', text: "am cooking" },
      { id: 'c', text: "was cooking", correct: true },
      { id: 'd', text: "cooked" }
    ],
    correctAnswer: "was cooking",
    explanation: "Past Continuous (interrupted action)",
    hint: "The action was ongoing when another event happened in the past."
  },
  {
    id: 3,
    text: "By 2025, he ______ his degree.",
    options: [
      { id: 'a', text: "completes" },
      { id: 'b', text: "will complete" },
      { id: 'c', text: "will have completed", correct: true },
      { id: 'd', text: "completed" }
    ],
    correctAnswer: "will have completed",
    explanation: "Future Perfect (action finished before a future time)",
    hint: "The action will be fully completed before a specific future point."
  },
  {
    id: 4,
    text: "They ______ in Lagos since 2020.",
    options: [
      { id: 'a', text: "live" },
      { id: 'b', text: "lived" },
      { id: 'c', text: "have lived", correct: true },
      { id: 'd', text: "are living" }
    ],
    correctAnswer: "have lived",
    explanation: "Present Perfect (action started in past, continues now)",
    hint: "The action started in the past and is still relevant today."
  },
  {
    id: 5,
    text: "Choose the correct sentence:",
    options: [
      { id: 'a', text: "I am understanding the lesson." },
      { id: 'b', text: "I understand the lesson.", correct: true },
      { id: 'c', text: "I will understanding the lesson." },
      { id: 'd', text: "I understood the lesson." }
    ],
    correctAnswer: "I understand the lesson.",
    explanation: "\"Understand\" is a state verb – use Present Simple",
    hint: "State verbs like 'understand' typically don't use continuous forms."
  },
  {
    id: 6,
    text: "While I ______, the phone rang.",
    options: [
      { id: 'a', text: "sleep" },
      { id: 'b', text: "was sleeping", correct: true },
      { id: 'c', text: "slept" },
      { id: 'd', text: "am sleeping" }
    ],
    correctAnswer: "was sleeping",
    explanation: "Past Continuous (background action)",
    hint: "The action was in progress when another past event occurred."
  },
  {
    id: 7,
    text: "She ______ her keys before she left home.",
    options: [
      { id: 'a', text: "loses" },
      { id: 'b', text: "had lost", correct: true },
      { id: 'c', text: "has lost" },
      { id: 'd', text: "lost" }
    ],
    correctAnswer: "had lost",
    explanation: "Past Perfect (action completed before another past action)",
    hint: "The action happened before another event in the past."
  },
  {
    id: 8,
    text: "Next week, we ______ a POST-UTME workshop.",
    options: [
      { id: 'a', text: "attend" },
      { id: 'b', text: "will attend", correct: true },
      { id: 'c', text: "attended" },
      { id: 'd', text: "are attend" }
    ],
    correctAnswer: "will attend",
    explanation: "Future Simple (future decision)",
    hint: "Look for the verb form that indicates a future plan."
  },
  {
    id: 9,
    text: "Water ______ at 100°C.",
    options: [
      { id: 'a', text: "boils", correct: true },
      { id: 'b', text: "is boiling" },
      { id: 'c', text: "boiled" },
      { id: 'd', text: "will boil" }
    ],
    correctAnswer: "boils",
    explanation: "Present Simple (scientific fact)",
    hint: "Scientific facts use a tense for general truths."
  },
  {
    id: 10,
    text: "I ______ the movie three times already.",
    options: [
      { id: 'a', text: "see" },
      { id: 'b', text: "saw" },
      { id: 'c', text: "have seen", correct: true },
      { id: 'd', text: "seen" }
    ],
    correctAnswer: "have seen",
    explanation: "Present Perfect (past action with present relevance)",
    hint: "The action has a connection to the present moment."
  },
  {
    id: 11,
    text: "At 6 PM yesterday, I ______ dinner.",
    options: [
      { id: 'a', text: "prepare" },
      { id: 'b', text: "prepared" },
      { id: 'c', text: "was preparing", correct: true },
      { id: 'd', text: "am preparing" }
    ],
    correctAnswer: "was preparing",
    explanation: "Past Continuous (action at specific past time)",
    hint: "The action was ongoing at a specific time in the past."
  },
  {
    id: 12,
    text: "After he ______ breakfast, he went to school.",
    options: [
      { id: 'a', text: "has had" },
      { id: 'b', text: "had had", correct: true },
      { id: 'c', text: "have" },
      { id: 'd', text: "has" }
    ],
    correctAnswer: "had had",
    explanation: "Past Perfect (sequence of past actions)",
    hint: "The action occurred before another past event."
  },
  {
    id: 13,
    text: "______ you ______ to Abuja before?",
    options: [
      { id: 'a', text: "Did / go" },
      { id: 'b', text: "Have / been", correct: true },
      { id: 'c', text: "Do / go" },
      { id: 'd', text: "Are / going" }
    ],
    correctAnswer: "Have / been",
    explanation: "Present Perfect (life experience)",
    hint: "This tense is used for experiences up to the present."
  },
  {
    id: 14,
    text: "Look! The baby ______.",
    options: [
      { id: 'a', text: "walks" },
      { id: 'b', text: "walked" },
      { id: 'c', text: "is walking", correct: true },
      { id: 'd', text: "has walked" }
    ],
    correctAnswer: "is walking",
    explanation: "Present Continuous (action happening now)",
    hint: "The action is happening right now."
  },
  {
    id: 15,
    text: "They ______ football when it started raining.",
    options: [
      { id: 'a', text: "play" },
      { id: 'b', text: "were playing", correct: true },
      { id: 'c', text: "played" },
      { id: 'd', text: "have played" }
    ],
    correctAnswer: "were playing",
    explanation: "Past Continuous (interrupted action)",
    hint: "The action was in progress when another event happened."
  },
  {
    id: 16,
    text: "I ______ my exam by next Friday.",
    options: [
      { id: 'a', text: "finish" },
      { id: 'b', text: "will finish" },
      { id: 'c', text: "will have finished", correct: true },
      { id: 'd', text: "finished" }
    ],
    correctAnswer: "will have finished",
    explanation: "Future Perfect (action completed before a future time)",
    hint: "The action will be completed before a specific future moment."
  },
  {
    id: 17,
    text: "He ______ to church every Sunday.",
    options: [
      { id: 'a', text: "go" },
      { id: 'b', text: "goes", correct: true },
      { id: 'c', text: "is going" },
      { id: 'd', text: "has gone" }
    ],
    correctAnswer: "goes",
    explanation: "Present Simple (habit)",
    hint: "Habits use a tense for regular actions."
  },
  {
    id: 18,
    text: "By the time we arrived, the bus ______.",
    options: [
      { id: 'a', text: "leaves" },
      { id: 'b', text: "left" },
      { id: 'c', text: "had left", correct: true },
      { id: 'd', text: "has left" }
    ],
    correctAnswer: "had left",
    explanation: "Past Perfect (\"past before the past\")",
    hint: "The action happened before another past event."
  },
  {
    id: 19,
    text: "She ______ for the test all morning.",
    options: [
      { id: 'a', text: "studies" },
      { id: 'b', text: "studied" },
      { id: 'c', text: "has been studying", correct: true },
      { id: 'd', text: "will study" }
    ],
    correctAnswer: "has been studying",
    explanation: "Present Perfect Continuous (recent ongoing action)",
    hint: "The action started in the past and is still ongoing."
  },
  {
    id: 20,
    text: "I promise I ______ you tomorrow.",
    options: [
      { id: 'a', text: "call" },
      { id: 'b', text: "will call", correct: true },
      { id: 'c', text: "am calling" },
      { id: 'd', text: "called" }
    ],
    correctAnswer: "will call",
    explanation: "Future Simple (promise)",
    hint: "Promises about the future use a specific tense."
  },
  {
    id: 21,
    text: "When I was young, I ______ in Kano.",
    options: [
      { id: 'a', text: "live" },
      { id: 'b', text: "lived", correct: true },
      { id: 'c', text: "have lived" },
      { id: 'd', text: "am living" }
    ],
    correctAnswer: "lived",
    explanation: "Past Simple (completed past action)",
    hint: "The action is fully completed in the past."
  },
  {
    id: 22,
    text: "______ she ______ dinner now?",
    options: [
      { id: 'a', text: "Is / cooking", correct: true },
      { id: 'b', text: "Does / cook" },
      { id: 'c', text: "Did / cook" },
      { id: 'd', text: "Has / cooked" }
    ],
    correctAnswer: "Is / cooking",
    explanation: "Present Continuous (action happening now)",
    hint: "The question asks about an action happening at this moment."
  },
  {
    id: 23,
    text: "We ______ the new mall before it closed.",
    options: [
      { id: 'a', text: "visit" },
      { id: 'b', text: "visited" },
      { id: 'c', text: "had visited", correct: true },
      { id: 'd', text: "have visited" }
    ],
    correctAnswer: "had visited",
    explanation: "Past Perfect (action before another past action)",
    hint: "The action occurred before another event in the past."
  },
  {
    id: 24,
    text: "By 2030, Nigeria ______ major reforms.",
    options: [
      { id: 'a', text: "implements" },
      { id: 'b', text: "will implement" },
      { id: 'c', text: "will have implemented", correct: true },
      { id: 'd', text: "implemented" }
    ],
    correctAnswer: "will have implemented",
    explanation: "Future Perfect (completed action before future time)",
    hint: "The action will be completed before a future date."
  },
  {
    id: 25,
    text: "He ______ his phone because he dropped it.",
    options: [
      { id: 'a', text: "breaks" },
      { id: 'b', text: "broke", correct: true },
      { id: 'c', text: "has broken" },
      { id: 'd', text: "had broken" }
    ],
    correctAnswer: "broke",
    explanation: "Past Simple (completed past action)",
    hint: "The action happened at a specific moment in the past."
  },
  {
    id: 26,
    text: "They ______ for hours when the rain stopped.",
    options: [
      { id: 'a', text: "play" },
      { id: 'b', text: "played" },
      { id: 'c', text: "had been playing", correct: true },
      { id: 'd', text: "have played" }
    ],
    correctAnswer: "had been playing",
    explanation: "Past Perfect Continuous (duration before past event)",
    hint: "The action was ongoing for a duration before another past event."
  },
  {
    id: 27,
    text: "She ______ in the library all afternoon.",
    options: [
      { id: 'a', text: "studies" },
      { id: 'b', text: "is studying" },
      { id: 'c', text: "has been studying", correct: true },
      { id: 'd', text: "was studying" }
    ],
    correctAnswer: "has been studying",
    explanation: "Present Perfect Continuous (recent ongoing action)",
    hint: "The action started earlier and is still relevant now."
  },
  {
    id: 28,
    text: "I ______ to the market if it rains.",
    options: [
      { id: 'a', text: "don't go" },
      { id: 'b', text: "didn't go" },
      { id: 'c', text: "won't go", correct: true },
      { id: 'd', text: "haven't gone" }
    ],
    correctAnswer: "won't go",
    explanation: "Future Simple (future conditional)",
    hint: "The action depends on a future condition."
  },
  {
    id: 29,
    text: "Choose the correct question:",
    options: [
      { id: 'a', text: "Did you ate breakfast?" },
      { id: 'b', text: "Have you eaten breakfast?", correct: true },
      { id: 'c', text: "Do you eaten breakfast?" },
      { id: 'd', text: "Are you eat breakfast?" }
    ],
    correctAnswer: "Have you eaten breakfast?",
    explanation: "Present Perfect (action relevant to now)",
    hint: "The question is about an action with present relevance."
  },
  {
    id: 30,
    text: "This time tomorrow, I ______ on the beach.",
    options: [
      { id: 'a', text: "relax" },
      { id: 'b', text: "will relax" },
      { id: 'c', text: "will be relaxing", correct: true },
      { id: 'd', text: "am relaxing" }
    ],
    correctAnswer: "will be relaxing",
    explanation: "Future Continuous (action in progress at future time)",
    hint: "The action will be in progress at a specific future time."
  }
];

export default questions;