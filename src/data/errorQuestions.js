const questions = [
  {
    id: 1,
    text: "Which sentence is correct?",
    options: [
      { id: 'a', text: "The team are playing well." },
      { id: 'b', text: "The team is playing well.", correct: true },
      { id: 'c', text: "The team be playing well." },
      { id: 'd', text: "The team were playing well." }
    ],
    correctAnswer: "The team is playing well.",
    explanation: "'Team' is a singular collective noun, so it takes 'is.'",
    hint: "Consider whether 'team' is treated as singular or plural."
  },
  {
    id: 2,
    text: "Identify the error:",
    options: [
      { id: 'a', text: "Each of the students have a book." },
      { id: 'b', text: "Each of the students has a book.", correct: true },
      { id: 'c', text: "Each of the students having a book." },
      { id: 'd', text: "Each of the students had a book." }
    ],
    correctAnswer: "Each of the students has a book.",
    explanation: "'Each' is singular, so the verb must be 'has.'",
    hint: "Check the subject 'each' and its effect on verb agreement."
  },
  {
    id: 3,
    text: "Correct the sentence: She will went to the market.",
    options: [
      { id: 'a', text: "She will goes to the market." },
      { id: 'b', text: "She will go to the market.", correct: true },
      { id: 'c', text: "She will gone to the market." },
      { id: 'd', text: "She will going to the market." }
    ],
    correctAnswer: "She will go to the market.",
    explanation: "'Will' must be followed by the base verb 'go.'",
    hint: "Focus on the verb form that follows 'will'."
  },
  {
    id: 4,
    text: "Which is correct?",
    options: [
      { id: 'a', text: "Yesterday, I eat rice." },
      { id: 'b', text: "Yesterday, I eaten rice." },
      { id: 'c', text: "Yesterday, I ate rice.", correct: true },
      { id: 'd', text: "Yesterday, I eating rice." }
    ],
    correctAnswer: "Yesterday, I ate rice.",
    explanation: "Past actions require the past tense 'ate.'",
    hint: "Determine the correct past tense form of 'eat'."
  },
  {
    id: 5,
    text: "Choose the correct sentence:",
    options: [
      { id: 'a', text: "The student’s are studying." },
      { id: 'b', text: "The students are studying.", correct: true },
      { id: 'c', text: "The students’s are studying." },
      { id: 'd', text: "The student are studying." }
    ],
    correctAnswer: "The students are studying.",
    explanation: "Apostrophes aren’t used for plurals.",
    hint: "Check if an apostrophe is needed for a simple plural."
  },
  {
    id: 6,
    text: "Fix the error: This book is her’s.",
    options: [
      { id: 'a', text: "This book is hers.", correct: true },
      { id: 'b', text: "This book is her." },
      { id: 'c', text: "This book is her’s book." },
      { id: 'd', text: "This book is she’s." }
    ],
    correctAnswer: "This book is hers.",
    explanation: "'Hers' is the correct possessive pronoun.",
    hint: "Identify the correct possessive pronoun for 'her'."
  },
  {
    id: 7,
    text: "Which is correct?",
    options: [
      { id: 'a', text: "Your welcome!" },
      { id: 'b', text: "You’re welcome!", correct: true },
      { id: 'c', text: "You welcome!" },
      { id: 'd', text: "Yours welcome!" }
    ],
    correctAnswer: "You’re welcome!",
    explanation: "'You’re' is the contraction of 'you are.'",
    hint: "Distinguish between the contraction 'you’re' and possessive 'your'."
  },
  {
    id: 8,
    text: "Identify the error:",
    options: [
      { id: 'a', text: "I like you’re dress." },
      { id: 'b', text: "I like your dress.", correct: true },
      { id: 'c', text: "I like yours dress." },
      { id: 'd', text: "I like you dress." }
    ],
    correctAnswer: "I like your dress.",
    explanation: "'Your' shows possession.",
    hint: "Check which word correctly shows possession of the dress."
  },
  {
    id: 9,
    text: "Correct the sentence: I don’t have no problem.",
    options: [
      { id: 'a', text: "I don’t have any problem.", correct: true },
      { id: 'b', text: "I don’t have none problem." },
      { id: 'c', text: "I don’t have not problem." },
      { id: 'd', text: "I don’t have no problems." }
    ],
    correctAnswer: "I don’t have any problem.",
    explanation: "'Any' replaces the double negative 'no.'",
    hint: "Look for the word that avoids a double negative."
  },
  {
    id: 10,
    text: "Which is grammatically correct?",
    options: [
      { id: 'a', text: "She didn’t see nothing." },
      { id: 'b', text: "She didn’t see anything.", correct: true },
      { id: 'c', text: "She didn’t see none." },
      { id: 'd', text: "She didn’t see not anything." }
    ],
    correctAnswer: "She didn’t see anything.",
    explanation: "'Anything' avoids the double negative.",
    hint: "Identify the word that corrects the double negative."
  },
  {
    id: 11,
    text: "Choose the correct option:",
    options: [
      { id: 'a', text: "Their going to the party." },
      { id: 'b', text: "They’re going to the party.", correct: true },
      { id: 'c', text: "There going to the party." },
      { id: 'd', text: "They going to the party." }
    ],
    correctAnswer: "They’re going to the party.",
    explanation: "'They’re' means 'they are.'",
    hint: "Determine which word means 'they are'."
  },
  {
    id: 12,
    text: "Fix the error: There house is beautiful.",
    options: [
      { id: 'a', text: "Their house is beautiful.", correct: true },
      { id: 'b', text: "They’re house is beautiful." },
      { id: 'c', text: "There house is beautiful." },
      { id: 'd', text: "The’re house is beautiful." }
    ],
    correctAnswer: "Their house is beautiful.",
    explanation: "'Their' shows possession.",
    hint: "Check which word correctly indicates possession of the house."
  },
  {
    id: 13,
    text: "Which is correct?",
    options: [
      { id: 'a', text: "She is good in Mathematics." },
      { id: 'b', text: "She is good at Mathematics.", correct: true },
      { id: 'c', text: "She is good on Mathematics." },
      { id: 'd', text: "She is good with Mathematics." }
    ],
    correctAnswer: "She is good at Mathematics.",
    explanation: "'Good at' is the correct preposition.",
    hint: "Identify the correct preposition for skills like Mathematics."
  },
  {
    id: 14,
    text: "Correct the sentence: He lives on Lagos.",
    options: [
      { id: 'a', text: "He lives in Lagos.", correct: true },
      { id: 'b', text: "He lives at Lagos." },
      { id: 'c', text: "He lives to Lagos." },
      { id: 'd', text: "He lives by Lagos." }
    ],
    correctAnswer: "He lives in Lagos.",
    explanation: "Cities use 'in,' not 'on.'",
    hint: "Check the preposition used for living in a city."
  },
  {
    id: 15,
    text: "Identify the properly punctuated sentence:",
    options: [
      { id: 'a', text: "I woke up late I missed the bus." },
      { id: 'b', text: "I woke up late, I missed the bus." },
      { id: 'c', text: "I woke up late; I missed the bus.", correct: true },
      { id: 'd', text: "I woke up late so I missed the bus." }
    ],
    correctAnswer: "I woke up late; I missed the bus.",
    explanation: "A semicolon joins two related clauses.",
    hint: "Look for the correct punctuation to join two independent clauses."
  },
  {
    id: 16,
    text: "Fix the comma splice: She loves reading, she buys books often.",
    options: [
      { id: 'a', text: "She loves reading; she buys books often.", correct: true },
      { id: 'b', text: "She loves reading, she buys books often." },
      { id: 'c', text: "She loves reading she buys books often." },
      { id: 'd', text: "She loves reading. She buys books often." }
    ],
    correctAnswer: "She loves reading; she buys books often.",
    explanation: "A semicolon replaces the comma splice.",
    hint: "Determine how to fix a comma splice between two clauses."
  },
  {
    id: 17,
    text: "Which is correct?",
    options: [
      { id: 'a', text: "Less students passed the exam." },
      { id: 'b', text: "Fewer students passed the exam.", correct: true },
      { id: 'c', text: "Lesser students passed the exam." },
      { id: 'd', text: "Few students passed the exam." }
    ],
    correctAnswer: "Fewer students passed the exam.",
    explanation: "'Fewer' is used for countable nouns like 'students.'",
    hint: "Check whether 'students' is countable or uncountable."
  },
  {
    id: 18,
    text: "Correct the error: She drank fewer water.",
    options: [
      { id: 'a', text: "She drank less water.", correct: true },
      { id: 'b', text: "She drank fewer water." },
      { id: 'c', text: "She drank few water." },
      { id: 'd', text: "She drank lesser water." }
    ],
    correctAnswer: "She drank less water.",
    explanation: "'Less' is used for uncountable nouns like 'water.'",
    hint: "Determine if 'water' is countable or uncountable."
  },
  {
    id: 19,
    text: "Choose the correct sentence:",
    options: [
      { id: 'a', text: "Me and Tunde went shopping." },
      { id: 'b', text: "Tunde and I went shopping.", correct: true },
      { id: 'c', text: "Tunde and me went shopping." },
      { id: 'd', text: "I and Tunde went shopping." }
    ],
    correctAnswer: "Tunde and I went shopping.",
    explanation: "'I' is the subject pronoun.",
    hint: "Identify the correct pronoun for the subject of the sentence."
  },
  {
    id: 20,
    text: "Fix the error: She gave the gift to I.",
    options: [
      { id: 'a', text: "She gave the gift to me.", correct: true },
      { id: 'b', text: "She gave the gift to I." },
      { id: 'c', text: "She gave the gift to myself." },
      { id: 'd', text: "She gave the gift to mine." }
    ],
    correctAnswer: "She gave the gift to me.",
    explanation: "'Me' is the object pronoun.",
    hint: "Check the correct pronoun for the object of the preposition."
  },
  {
    id: 21,
    text: "Which is correct?",
    options: [
      { id: 'a', text: "Whom is at the door?" },
      { id: 'b', text: "Who is at the door?", correct: true },
      { id: 'c', text: "Who’s at the door?" },
      { id: 'd', text: "Whom’s at the door?" }
    ],
    correctAnswer: "Who is at the door?",
    explanation: "'Who' is the subject of the sentence.",
    hint: "Determine if the pronoun is the subject or object of the sentence."
  },
  {
    id: 22,
    text: "Correct the sentence: Who did you give it to?",
    options: [
      { id: 'a', text: "To whom did you give it?", correct: true },
      { id: 'b', text: "Whom did you give it to?" },
      { id: 'c', text: "Who did you give it to?" },
      { id: 'd', text: "To who did you give it?" }
    ],
    correctAnswer: "To whom did you give it?",
    explanation: "'Whom' is the object of the preposition 'to.'",
    hint: "Check the pronoun used with the preposition 'to'."
  },
  {
    id: 23,
    text: "Identify the correct sentence:",
    options: [
      { id: 'a', text: "The cat licked it’s paw." },
      { id: 'b', text: "The cat licked its paw.", correct: true },
      { id: 'c', text: "The cat licked its’ paw." },
      { id: 'd', text: "The cat licked it paw." }
    ],
    correctAnswer: "The cat licked its paw.",
    explanation: "'Its' is the possessive form.",
    hint: "Distinguish between the possessive 'its' and contraction 'it’s'."
  },
  {
    id: 24,
    text: "Fix the error: Its raining outside.",
    options: [
      { id: 'a', text: "It’s raining outside.", correct: true },
      { id: 'b', text: "Its raining outside." },
      { id: 'c', text: "Its’ raining outside." },
      { id: 'd', text: "It raining outside." }
    ],
    correctAnswer: "It’s raining outside.",
    explanation: "'It’s' is the contraction of 'it is.'",
    hint: "Check if the sentence needs a contraction or possessive form."
  },
  {
    id: 25,
    text: "Which is correct?",
    options: [
      { id: 'a', text: "The medicine had a good affect." },
      { id: 'b', text: "The medicine had a good effect.", correct: true },
      { id: 'c', text: "The medicine had a good affecting." },
      { id: 'd', text: "The medicine had a good effected." }
    ],
    correctAnswer: "The medicine had a good effect.",
    explanation: "'Effect' is the noun meaning 'result.'",
    hint: "Determine if the sentence needs a noun or a verb."
  },
  {
    id: 26,
    text: "Correct the sentence: Her speech effected me deeply.",
    options: [
      { id: 'a', text: "Her speech affected me deeply.", correct: true },
      { id: 'b', text: "Her speech effected me deeply." },
      { id: 'c', text: "Her speech affect me deeply." },
      { id: 'd', text: "Her speech effect me deeply." }
    ],
    correctAnswer: "Her speech affected me deeply.",
    explanation: "'Affect' is the verb meaning 'to influence.'",
    hint: "Check if the sentence requires a verb or a noun."
  },
  {
    id: 27,
    text: "Identify the error: We never go nowhere.",
    options: [
      { id: 'a', text: "We never go nowhere." },
      { id: 'b', text: "We never go anywhere.", correct: true },
      { id: 'c', text: "We don’t go nowhere." },
      { id: 'd', text: "We go never nowhere." }
    ],
    correctAnswer: "We never go anywhere.",
    explanation: "'Anywhere' avoids the double negative.",
    hint: "Look for the word that corrects the double negative."
  },
  {
    id: 28,
    text: "Correct the sentence: Less people came than expected.",
    options: [
      { id: 'a', text: "Fewer people came than expected.", correct: true },
      { id: 'b', text: "Less people came than expected." },
      { id: 'c', text: "Lesser people came than expected." },
      { id: 'd', text: "Few people came than expected." }
    ],
    correctAnswer: "Fewer people came than expected.",
    explanation: "'Fewer' is used for countable nouns like 'people.'",
    hint: "Check whether 'people' is countable or uncountable."
  },
  {
    id: 29,
    text: "Which is grammatically correct?",
    options: [
      { id: 'a', text: "Between you and I, it’s secret." },
      { id: 'b', text: "Between you and me, it’s secret.", correct: true },
      { id: 'c', text: "Between you and myself, it’s secret." },
      { id: 'd', text: "Between you and mine, it’s secret." }
    ],
    correctAnswer: "Between you and me, it’s secret.",
    explanation: "'Me' is the object pronoun.",
    hint: "Identify the correct pronoun for the object of a preposition."
  },
  {
    id: 30,
    text: "Fix the error: The sun will rose tomorrow.",
    options: [
      { id: 'a', text: "The sun will rise tomorrow.", correct: true },
      { id: 'b', text: "The sun will rose tomorrow." },
      { id: 'c', text: "The sun will rises tomorrow." },
      { id: 'd', text: "The sun will rising tomorrow." }
    ],
    correctAnswer: "The sun will rise tomorrow.",
    explanation: "'Will' must be followed by the base verb 'rise.'",
    hint: "Check the verb form that follows 'will'."
  }
];

export default questions;