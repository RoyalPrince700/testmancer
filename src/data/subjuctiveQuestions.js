const questions = [
  {
    id: 1,
    text: "Which sentence correctly uses the subjunctive mood?",
    options: [
      { id: 'a', text: "I suggest he goes now." },
      { id: 'b', text: "I suggest he go now.", correct: true },
      { id: 'c', text: "I suggest he will go now." },
      { id: 'd', text: "I suggest he went now." }
    ],
    correctAnswer: "I suggest he go now.",
    explanation: "'Suggest' requires the base verb form 'go' in subjunctive.",
    hint: "Check which verb form follows verbs like 'suggest' in subjunctive mood."
  },
  {
    id: 2,
    text: "Identify the subjunctive mood:",
    options: [
      { id: 'a', text: "She was happy yesterday." },
      { id: 'b', text: "If she were happy, she'd smile.", correct: true },
      { id: 'c', text: "She is happy today." },
      { id: 'd', text: "She will be happy tomorrow." }
    ],
    correctAnswer: "If she were happy, she'd smile.",
    explanation: "'Were' is used for hypothetical situations in subjunctive.",
    hint: "Look for a hypothetical situation signaled by 'if'."
  },
  {
    id: 3,
    text: "It's essential that he ___ on time.",
    options: [
      { id: 'a', text: "arrives" },
      { id: 'b', text: "arrive", correct: true },
      { id: 'c', text: "arrived" },
      { id: 'd', text: "will arrive" }
    ],
    correctAnswer: "arrive",
    explanation: "Subjunctive uses base verb after 'essential that.'",
    hint: "Consider the verb form after phrases like 'essential that'."
  },
  {
    id: 4,
    text: "Which sentence requires the subjunctive mood?",
    options: [
      { id: 'a', text: "She knows the answer." },
      { id: 'b', text: "The teacher demands that we be quiet.", correct: true },
      { id: 'c', text: "They went to school." },
      { id: 'd', text: "I have finished my work." }
    ],
    correctAnswer: "The teacher demands that we be quiet.",
    explanation: "'Demands that' triggers subjunctive 'be.'",
    hint: "Identify which sentence involves a demand or request."
  },
  {
    id: 5,
    text: "I wish I ___ taller, she said.",
    options: [
      { id: 'a', text: "am" },
      { id: 'b', text: "was" },
      { id: 'c', text: "were", correct: true },
      { id: 'd', text: "be" }
    ],
    correctAnswer: "were",
    explanation: "Wishes use 'were' in subjunctive mood.",
    hint: "Focus on the verb form used for wishes about the present."
  },
  {
    id: 6,
    text: "Select the subjunctive construction:",
    options: [
      { id: 'a', text: "If I was you, I'd apologize." },
      { id: 'b', text: "If I were you, I'd apologize.", correct: true },
      { id: 'c', text: "If I am you, I'd apologize." },
      { id: 'd', text: "If I will be you, I'd apologize." }
    ],
    correctAnswer: "If I were you, I'd apologize.",
    explanation: "Hypothetical 'if' clauses use 'were.'",
    hint: "Check the verb in hypothetical 'if' clauses."
  },
  {
    id: 7,
    text: "The rules require that each student ___ uniform.",
    options: [
      { id: 'a', text: "wears" },
      { id: 'b', text: "wear", correct: true },
      { id: 'c', text: "wore" },
      { id: 'd', text: "will wear" }
    ],
    correctAnswer: "wear",
    explanation: "'Require that' needs subjunctive base verb.",
    hint: "Look for the base verb form after 'require that'."
  },
  {
    id: 8,
    text: "Which is NOT subjunctive?",
    options: [
      { id: 'a', text: "It's vital that he come early." },
      { id: 'b', text: "She asked that he leave now." },
      { id: 'c', text: "I insist that they be honest." },
      { id: 'd', text: "He knows that she is honest.", correct: true }
    ],
    correctAnswer: "He knows that she is honest.",
    explanation: "This states a fact, not subjunctive.",
    hint: "Identify which option describes a factual statement."
  },
  {
    id: 9,
    text: "Had I known, I ___ helped you.",
    options: [
      { id: 'a', text: "would" },
      { id: 'b', text: "will" },
      { id: 'c', text: "would have", correct: true },
      { id: 'd', text: "had" }
    ],
    correctAnswer: "would have",
    explanation: "Past hypothetical uses 'would have.'",
    hint: "Consider the verb form for past hypothetical situations."
  },
  {
    id: 10,
    text: "She acts as though she ___ the boss.",
    options: [
      { id: 'a', text: "was" },
      { id: 'b', text: "were", correct: true },
      { id: 'c', text: "is" },
      { id: 'd', text: "be" }
    ],
    correctAnswer: "were",
    explanation: "Hypothetical comparison uses 'were.'",
    hint: "Check the verb for hypothetical comparisons like 'as though'."
  },
  {
    id: 11,
    text: "It's important that every applicant ___ the form.",
    options: [
      { id: 'a', text: "signs" },
      { id: 'b', text: "sign", correct: true },
      { id: 'c', text: "signed" },
      { id: 'd', text: "will sign" }
    ],
    correctAnswer: "sign",
    explanation: "'Important that' requires subjunctive base verb.",
    hint: "Look for the base verb after 'important that'."
  },
  {
    id: 12,
    text: "Which sentence shows correct subjunctive usage?",
    options: [
      { id: 'a', text: "I prefer that she is here." },
      { id: 'b', text: "I prefer that she be here.", correct: true },
      { id: 'c', text: "I prefer that she was here." },
      { id: 'd', text: "I prefer that she will be here." }
    ],
    correctAnswer: "I prefer that she be here.",
    explanation: "'Prefer that' takes subjunctive 'be.'",
    hint: "Check which verb follows 'prefer that' in subjunctive mood."
  },
  {
    id: 13,
    text: "The doctor recommended that he ___ smoking.",
    options: [
      { id: 'a', text: "stops" },
      { id: 'b', text: "stop", correct: true },
      { id: 'c', text: "stopped" },
      { id: 'd', text: "will stop" }
    ],
    correctAnswer: "stop",
    explanation: "'Recommended that' needs subjunctive base verb.",
    hint: "Focus on the verb form after 'recommended that'."
  },
  {
    id: 14,
    text: "Identify the subjunctive form:",
    options: [
      { id: 'a', text: "If I was rich" },
      { id: 'b', text: "If I am rich" },
      { id: 'c', text: "If I were rich", correct: true },
      { id: 'd', text: "If I will be rich" }
    ],
    correctAnswer: "If I were rich",
    explanation: "Hypothetical condition uses 'were.'",
    hint: "Look for the correct verb in hypothetical 'if' clauses."
  },
  {
    id: 15,
    text: "I demand that he ___ the truth.",
    options: [
      { id: 'a', text: "tells" },
      { id: 'b', text: "tell", correct: true },
      { id: 'c', text: "told" },
      { id: 'd', text: "will tell" }
    ],
    correctAnswer: "tell",
    explanation: "'Demand that' requires subjunctive base verb.",
    hint: "Check the verb form after 'demand that'."
  },
  {
    id: 16,
    text: "Which sentence is NOT in subjunctive?",
    options: [
      { id: 'a', text: "God save the Queen!" },
      { id: 'b', text: "Long live the King!" },
      { id: 'c', text: "So be it!" },
      { id: 'd', text: "She is coming tomorrow.", correct: true }
    ],
    correctAnswer: "She is coming tomorrow.",
    explanation: "This is a simple statement of fact.",
    hint: "Identify which option is a factual statement, not a wish or command."
  },
  {
    id: 17,
    text: "It's necessary that she ___ the meeting.",
    options: [
      { id: 'a', text: "attends" },
      { id: 'b', text: "attend", correct: true },
      { id: 'c', text: "attended" },
      { id: 'd', text: "will attend" }
    ],
    correctAnswer: "attend",
    explanation: "'Necessary that' takes subjunctive base verb.",
    hint: "Look for the base verb after 'necessary that'."
  },
  {
    id: 18,
    text: "If he ___ here, he would explain.",
    options: [
      { id: 'a', text: "was" },
      { id: 'b', text: "were", correct: true },
      { id: 'c', text: "is" },
      { id: 'd', text: "be" }
    ],
    correctAnswer: "were",
    explanation: "Hypothetical 'if' clause uses 'were.'",
    hint: "Check the verb for hypothetical conditions in 'if' clauses."
  },
  {
    id: 19,
    text: "The judge ordered that the witness ___.",
    options: [
      { id: 'a', text: "speaks" },
      { id: 'b', text: "speak", correct: true },
      { id: 'c', text: "spoke" },
      { id: 'd', text: "will speak" }
    ],
    correctAnswer: "speak",
    explanation: "'Ordered that' requires subjunctive base verb.",
    hint: "Focus on the verb form after 'ordered that'."
  },
  {
    id: 20,
    text: "Which shows correct negative subjunctive?",
    options: [
      { id: 'a', text: "It's vital that he not be late.", correct: true },
      { id: 'b', text: "It's vital that he isn't late." },
      { id: 'c', text: "It's vital that he won't be late." },
      { id: 'd', text: "It's vital that he wasn't late." }
    ],
    correctAnswer: "It's vital that he not be late.",
    explanation: "Negative subjunctive uses 'not + base verb.'",
    hint: "Check how negation is formed in subjunctive mood."
  },
  {
    id: 21,
    text: "I suggest that you ___ careful.",
    options: [
      { id: 'a', text: "are" },
      { id: 'b', text: "be", correct: true },
      { id: 'c', text: "were" },
      { id: 'd', text: "will be" }
    ],
    correctAnswer: "be",
    explanation: "'Suggest that' takes subjunctive base verb.",
    hint: "Look for the base verb after 'suggest that'."
  },
  {
    id: 22,
    text: "Had you arrived earlier, you ___ the show.",
    options: [
      { id: 'a', text: "would see" },
      { id: 'b', text: "would have seen", correct: true },
      { id: 'c', text: "saw" },
      { id: 'd', text: "had seen" }
    ],
    correctAnswer: "would have seen",
    explanation: "Past hypothetical uses 'would have.'",
    hint: "Consider the verb form for past hypothetical scenarios."
  },
  {
    id: 23,
    text: "She insisted that he ___ his homework.",
    options: [
      { id: 'a', text: "does" },
      { id: 'b', text: "do", correct: true },
      { id: 'c', text: "did" },
      { id: 'd', text: "will do" }
    ],
    correctAnswer: "do",
    explanation: "'Insisted that' requires subjunctive base verb.",
    hint: "Check the verb form after 'insisted that'."
  },
  {
    id: 24,
    text: "It's crucial that the information ___ accurate.",
    options: [
      { id: 'a', text: "is" },
      { id: 'b', text: "be", correct: true },
      { id: 'c', text: "was" },
      { id: 'd', text: "will be" }
    ],
    correctAnswer: "be",
    explanation: "'Crucial that' takes subjunctive 'be.'",
    hint: "Look for the base verb after 'crucial that'."
  },
  {
    id: 25,
    text: "Which sentence uses subjunctive incorrectly?",
    options: [
      { id: 'a', text: "I wish I was taller.", correct: true },
      { id: 'b', text: "I wish I were taller." },
      { id: 'c', text: "If I were you, I'd go." },
      { id: 'd', text: "It's important she be here." }
    ],
    correctAnswer: "I wish I was taller.",
    explanation: "'Was' should be 'were' in subjunctive wishes.",
    hint: "Check which option misuses the verb for a wish."
  },
  {
    id: 26,
    text: "The committee requests that everyone ___ on time.",
    options: [
      { id: 'a', text: "arrives" },
      { id: 'b', text: "arrive", correct: true },
      { id: 'c', text: "arrived" },
      { id: 'd', text: "will arrive" }
    ],
    correctAnswer: "arrive",
    explanation: "'Requests that' needs subjunctive base verb.",
    hint: "Focus on the verb form after 'requests that'."
  },
  {
    id: 27,
    text: "If only she ___ here now.",
    options: [
      { id: 'a', text: "was" },
      { id: 'b', text: "were", correct: true },
      { id: 'c', text: "is" },
      { id: 'd', text: "be" }
    ],
    correctAnswer: "were",
    explanation: "Wishes about present use 'were.'",
    hint: "Check the verb for present-tense wishes with 'if only'."
  },
  {
    id: 28,
    text: "The principal asked that the students ___ silent.",
    options: [
      { id: 'a', text: "are" },
      { id: 'b', text: "be", correct: true },
      { id: 'c', text: "were" },
      { id: 'd', text: "will be" }
    ],
    correctAnswer: "be",
    explanation: "'Asked that' requires subjunctive 'be.'",
    hint: "Look for the base verb after 'asked that'."
  },
  {
    id: 29,
    text: "Which is a fixed subjunctive expression?",
    options: [
      { id: 'a', text: "Come what may", correct: true },
      { id: 'b', text: "She comes daily" },
      { id: 'c', text: "He came yesterday" },
      { id: 'd', text: "They will come soon" }
    ],
    correctAnswer: "Come what may",
    explanation: "This is a fixed subjunctive phrase.",
    hint: "Identify which option is a traditional subjunctive expression."
  },
  {
    id: 30,
    text: "It's imperative that all members ___ present.",
    options: [
      { id: 'a', text: "are" },
      { id: 'b', text: "be", correct: true },
      { id: 'c', text: "were" },
      { id: 'd', text: "will be" }
    ],
    correctAnswer: "be",
    explanation: "'Imperative that' takes subjunctive 'be.'",
    hint: "Check the verb form after 'imperative that'."
  }
];

export default questions;