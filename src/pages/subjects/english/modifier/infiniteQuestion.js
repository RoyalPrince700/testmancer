
 const questions = [
  {
    id: 1,
    text: "I really enjoy _____ Nigerian movies.",
    options: [
      { id: 'a', text: "to watch" },
      { id: 'b', text: "watch" },
      { id: 'c', text: "watching", correct: true },
      { id: 'd', text: "watches" }
    ],
    correctAnswer: "watching",
    explanation: "'Enjoy' must be followed by a gerund (verb + ing).",
    hint: "Verbs like 'enjoy', 'avoid', 'mind' take gerunds."
  },
  {
    id: 2,
    text: "She wants _____ a doctor when she grows up.",
    options: [
      { id: 'a', text: "being" },
      { id: 'b', text: "to be", correct: true },
      { id: 'c', text: "be" },
      { id: 'd', text: "is" }
    ],
    correctAnswer: "to be",
    explanation: "'Want' is followed by an infinitive (to + verb).",
    hint: "Think: want + to do something."
  },
  {
    id: 3,
    text: "We are good at _____ jollof rice.",
    options: [
      { id: 'a', text: "cooking", correct: true },
      { id: 'b', text: "to cook" },
      { id: 'c', text: "cook" },
      { id: 'd', text: "cooked" }
    ],
    correctAnswer: "cooking",
    explanation: "After prepositions like 'at', use a gerund.",
    hint: "Preposition + verb → always gerund."
  },
  {
    id: 4,
    text: "He promised _____ me with my assignment.",
    options: [
      { id: 'a', text: "help" },
      { id: 'b', text: "helping" },
      { id: 'c', text: "to help", correct: true },
      { id: 'd', text: "helps" }
    ],
    correctAnswer: "to help",
    explanation: "'Promise' is followed by an infinitive.",
    hint: "Certain verbs like 'promise', 'agree', 'plan' take infinitives."
  },
  {
    id: 5,
    text: "They avoided _____ the teacher in the corridor.",
    options: [
      { id: 'a', text: "see" },
      { id: 'b', text: "seeing", correct: true },
      { id: 'c', text: "to see" },
      { id: 'd', text: "saw" }
    ],
    correctAnswer: "seeing",
    explanation: "'Avoid' must be followed by a gerund.",
    hint: "You avoid doing something, not to do it."
  },
  {
    id: 6,
    text: "I am eager _____ the Post-UTME exam.",
    options: [
      { id: 'a', text: "passing" },
      { id: 'b', text: "pass" },
      { id: 'c', text: "passed" },
      { id: 'd', text: "to pass", correct: true }
    ],
    correctAnswer: "to pass",
    explanation: "Adjectives like 'eager' are followed by infinitives.",
    hint: "Adjective + to + verb pattern."
  },
  {
    id: 7,
    text: "She gave up _____ sugar in her tea.",
    options: [
      { id: 'a', text: "eating", correct: true },
      { id: 'b', text: "to eat" },
      { id: 'c', text: "eat" },
      { id: 'd', text: "eaten" }
    ],
    correctAnswer: "eating",
    explanation: "'Gave up' means 'stopped' — requires a gerund.",
    hint: "Phrasal verb 'give up' takes a gerund."
  },
  {
    id: 8,
    text: "We plan _____ to UNILAG next year.",
    options: [
      { id: 'a', text: "go" },
      { id: 'b', text: "going" },
      { id: 'c', text: "to go", correct: true },
      { id: 'd', text: "gone" }
    ],
    correctAnswer: "to go",
    explanation: "'Plan' is followed by an infinitive.",
    hint: "Plan to do something, not plan doing."
  },
  {
    id: 9,
    text: "He is interested in _____ engineering.",
    options: [
      { id: 'a', text: "studying", correct: true },
      { id: 'b', text: "study" },
      { id: 'c', text: "to study" },
      { id: 'd', text: "studies" }
    ],
    correctAnswer: "studying",
    explanation: "After 'interested in', use a gerund (prepositional phrase).",
    hint: "'In' is a preposition — always followed by gerund."
  },
  {
    id: 10,
    text: "They decided _____ the meeting to Friday.",
    options: [
      { id: 'a', text: "postponing" },
      { id: 'b', text: "to postpone", correct: true },
      { id: 'c', text: "postpone" },
      { id: 'd', text: "postponed" }
    ],
    correctAnswer: "to postpone",
    explanation: "'Decide' requires an infinitive.",
    hint: "Decide what? To do something."
  },
  {
    id: 11,
    text: "I can't stand _____ in long queues.",
    options: [
      { id: 'a', text: "waits" },
      { id: 'b', text: "waiting", correct: true },
      { id: 'c', text: "to wait" },
      { id: 'd', text: "wait" }
    ],
    correctAnswer: "waiting",
    explanation: "'Can't stand' means 'hate' — takes a gerund.",
    hint: "Negative emotion verbs often take gerunds."
  },
  {
    id: 12,
    text: "She hopes _____ admitted to UI.",
    options: [
      { id: 'a', text: "getting" },
      { id: 'b', text: "gets" },
      { id: 'c', text: "to get", correct: true },
      { id: 'd', text: "get" }
    ],
    correctAnswer: "to get",
    explanation: "'Hope' is followed by an infinitive.",
    hint: "Hope to do something — never 'hope doing'."
  },
  {
    id: 13,
    text: "He dreams of _____ a billionaire one day.",
    options: [
      { id: 'a', text: "become" },
      { id: 'b', text: "to become" },
      { id: 'c', text: "becoming", correct: true },
      { id: 'd', text: "becomes" }
    ],
    correctAnswer: "becoming",
    explanation: "'Dream of' is a prepositional phrase — requires gerund.",
    hint: "Always use gerund after 'of'."
  },
  {
    id: 14,
    text: "We need _____ harder for JAMB.",
    options: [
      { id: 'a', text: "study" },
      { id: 'b', text: "studying" },
      { id: 'c', text: "to study", correct: true },
      { id: 'd', text: "studies" }
    ],
    correctAnswer: "to study",
    explanation: "'Need' is followed by an infinitive when it means 'must'.",
    hint: "When 'need' expresses necessity, use infinitive."
  },
  {
    id: 15,
    text: "It's no use _____ over spilled milk.",
    options: [
      { id: 'a', text: "cry" },
      { id: 'b', text: "cried" },
      { id: 'c', text: "crying", correct: true },
      { id: 'd', text: "to cry" }
    ],
    correctAnswer: "crying",
    explanation: "Fixed expression: 'It's no use' + gerund.",
    hint: "Idiomatic expressions often require gerunds."
  },
  {
    id: 16,
    text: "I forgot _____ my phone at home.",
    options: [
      { id: 'a', text: "leaving", correct: true },
      { id: 'b', text: "leave" },
      { id: 'c', text: "left" },
      { id: 'd', text: "to leave" }
    ],
    correctAnswer: "leaving",
    explanation: "Forgot + gerund = forgot that you already did it.",
    hint: "If you forgot doing something, use gerund."
  },
  {
    id: 17,
    text: "Don't forget _____ your form before the deadline.",
    options: [
      { id: 'a', text: "submitting" },
      { id: 'b', text: "to submit", correct: true },
      { id: 'c', text: "submit" },
      { id: 'd', text: "submits" }
    ],
    correctAnswer: "to submit",
    explanation: "Forget + infinitive = fail to do something.",
    hint: "If you must remember to do it, use infinitive."
  },
  {
    id: 18,
    text: "She stopped _____ to answer the call.",
    options: [
      { id: 'a', text: "run" },
      { id: 'b', text: "running", correct: true },
      { id: 'c', text: "to run" },
      { id: 'd', text: "runs" }
    ],
    correctAnswer: "running",
    explanation: "Stop + gerund = cease an action (she was running).",
    hint: "Stop doing something = quit the action."
  },
  {
    id: 19,
    text: "He stopped _____ his friend on the way to school.",
    options: [
      { id: 'a', text: "talk" },
      { id: 'b', text: "talking" },
      { id: 'c', text: "to talk", correct: true },
      { id: 'd', text: "talks" }
    ],
    correctAnswer: "to talk",
    explanation: "Stop + infinitive = pause in order to do something.",
    hint: "Stop to do something = pause for a purpose."
  },
  {
    id: 20,
    text: "I remember _____ my first WAEC exam.",
    options: [
      { id: 'a', text: "taken" },
      { id: 'b', text: "taking", correct: true },
      { id: 'c', text: "to take" },
      { id: 'd', text: "take" }
    ],
    correctAnswer: "taking",
    explanation: "Remember + gerund = recall a past event.",
    hint: "Use gerund for memories."
  },
  {
    id: 21,
    text: "Remember _____ your ID card tomorrow.",
    options: [
      { id: 'a', text: "bring" },
      { id: 'b', text: "bringing" },
      { id: 'c', text: "to bring", correct: true },
      { id: 'd', text: "brings" }
    ],
    correctAnswer: "to bring",
    explanation: "Remember + infinitive = don’t forget to do something.",
    hint: "Use infinitive for future reminders."
  },
  {
    id: 22,
    text: "He tried _____ the door, but it was locked.",
    options: [
      { id: 'a', text: "opened" },
      { id: 'b', text: "opening", correct: true },
      { id: 'c', text: "to open" },
      { id: 'd', text: "open" }
    ],
    correctAnswer: "opening",
    explanation: "Try + gerund = experiment with an action.",
    hint: "Used when testing a method."
  },
  {
    id: 23,
    text: "She tried _____ early to avoid traffic.",
    options: [
      { id: 'a', text: "leaving" },
      { id: 'b', text: "to leave", correct: true },
      { id: 'c', text: "leave" },
      { id: 'd', text: "leaves" }
    ],
    correctAnswer: "to leave",
    explanation: "Try + infinitive = make an effort to do something.",
    hint: "Use infinitive for purposeful effort."
  },
  {
    id: 24,
    text: "My parents don't approve of me _____ late.",
    options: [
      { id: 'a', text: "come" },
      { id: 'b', text: "coming home", correct: true },
      { id: 'c', text: "to come" },
      { id: 'd', text: "comes" }
    ],
    correctAnswer: "coming home",
    explanation: "'Approve of' is a prepositional verb — requires gerund.",
    hint: "All 'verb + preposition' combinations take gerunds."
  },
  {
    id: 25,
    text: "She insisted on _____ with the manager.",
    options: [
      { id: 'a', text: "speaking", correct: true },
      { id: 'b', text: "to speak" },
      { id: 'c', text: "speak" },
      { id: 'd', text: "speaks" }
    ],
    correctAnswer: "speaking",
    explanation: "'Insist on' requires a gerund after the preposition 'on'.",
    hint: "After 'on', always use gerund."
  },
  {
    id: 26,
    text: "It's important _____ on time for exams.",
    options: [
      { id: 'a', text: "arrive" },
      { id: 'b', text: "arriving" },
      { id: 'c', text: "to arrive", correct: true },
      { id: 'd', text: "arrives" }
    ],
    correctAnswer: "to arrive",
    explanation: "Adjective + infinitive structure: 'important to do'.",
    hint: "Important, necessary, good — all take infinitives."
  },
  {
    id: 27,
    text: "He risked _____ his job by complaining.",
    options: [
      { id: 'a', text: "lose" },
      { id: 'b', text: "losing", correct: true },
      { id: 'c', text: "to lose" },
      { id: 'd', text: "loses" }
    ],
    correctAnswer: "losing",
    explanation: "'Risk' is always followed by a gerund.",
    hint: "No exceptions — 'risk' takes gerund only."
  },
  {
    id: 28,
    text: "They offered _____ us to the airport.",
    options: [
      { id: 'a', text: "driving" },
      { id: 'b', text: "drive" },
      { id: 'c', text: "to drive", correct: true },
      { id: 'd', text: "drives" }
    ],
    correctAnswer: "to drive",
    explanation: "'Offer' is followed by an infinitive.",
    hint: "Offer to do something — standard pattern."
  },
  {
    id: 29,
    text: "I hate _____ up early on Sundays.",
    options: [
      { id: 'a', text: "gets" },
      { id: 'b', text: "getting", correct: true },
      { id: 'c', text: "to get" },
      { id: 'd', text: "get" }
    ],
    correctAnswer: "getting",
    explanation: "'Hate' can take both, but gerund is more natural for general dislikes.",
    hint: "Use gerund for habitual actions you dislike."
  },
  {
    id: 30,
    text: "After _____ for hours, we finally got help.",
    options: [
      { id: 'a', text: "waits" },
      { id: 'b', text: "waiting", correct: true },
      { id: 'c', text: "to wait" },
      { id: 'd', text: "wait" }
    ],
    correctAnswer: "waiting",
    explanation: "After a preposition (even in time expressions), use a gerund.",
    hint: "'After' is a preposition here — needs gerund."
  }
];

export default questions;

