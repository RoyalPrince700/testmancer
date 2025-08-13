const questions = [
  {
    id: 1,
    text: "Neither the manager nor the employees _____ happy about the change.",
    options: [
      { id: 'a', text: "is" },
      { id: 'b', text: "are", correct: true },
      { id: 'c', text: "was" },
      { id: 'd', text: "were" }
    ],
    correctAnswer: "are",
    explanation: "Verb agrees with closest subject 'employees' - plural.",
    hint: "In 'neither...nor' constructions, the verb agrees with the subject closest to it."
  },
  {
    id: 2,
    text: "The news about the accident _____ shocking.",
    options: [
      { id: 'a', text: "is", correct: true },
      { id: 'b', text: "are" },
      { id: 'c', text: "were" },
      { id: 'd', text: "have been" }
    ],
    correctAnswer: "is",
    explanation: "'News' is always singular.",
    hint: "Check if the subject is an uncountable noun."
  },
  {
    id: 3,
    text: "Each of the participants _____ a certificate.",
    options: [
      { id: 'a', text: "receive" },
      { id: 'b', text: "receives", correct: true },
      { id: 'c', text: "are receiving" },
      { id: 'd', text: "have received" }
    ],
    correctAnswer: "receives",
    explanation: "'Each' is always singular.",
    hint: "Focus on the word 'each' and its effect on verb agreement."
  },
  {
    id: 4,
    text: "A number of students _____ for the trip.",
    options: [
      { id: 'a', text: "has signed up" },
      { id: 'b', text: "have signed up", correct: true },
      { id: 'c', text: "was signing up" },
      { id: 'd', text: "is signing up" }
    ],
    correctAnswer: "have signed up",
    explanation: "'A number of' means 'many' - plural.",
    hint: "Consider whether the phrase implies a singular or plural subject."
  },
  {
    id: 5,
    text: "The committee _____ its decision tomorrow.",
    options: [
      { id: 'a', text: "announce" },
      { id: 'b', text: "announces", correct: true },
      { id: 'c', text: "are announcing" },
      { id: 'd', text: "have announced" }
    ],
    correctAnswer: "announces",
    explanation: "Committee acting as one unit - singular.",
    hint: "Determine if the group is acting as one entity."
  },
  {
    id: 6,
    text: "Physics _____ a challenging subject for many.",
    options: [
      { id: 'a', text: "are" },
      { id: 'b', text: "is", correct: true },
      { id: 'c', text: "were" },
      { id: 'd', text: "have been" }
    ],
    correctAnswer: "is",
    explanation: "Subjects ending in -ics are singular.",
    hint: "Some subjects ending in -s are still singular."
  },
  {
    id: 7,
    text: "There _____ several reasons for his success.",
    options: [
      { id: 'a', text: "is" },
      { id: 'b', text: "are", correct: true },
      { id: 'c', text: "was" },
      { id: 'd', text: "were" }
    ],
    correctAnswer: "are",
    explanation: "True subject 'reasons' is plural.",
    hint: "Identify the true subject after 'there'."
  },
  {
    id: 8,
    text: "Ten thousand naira _____ the price of the phone.",
    options: [
      { id: 'a', text: "are" },
      { id: 'b', text: "is", correct: true },
      { id: 'c', text: "were" },
      { id: 'd', text: "have been" }
    ],
    correctAnswer: "is",
    explanation: "Amount of money = singular unit.",
    hint: "Treat amounts as a single unit."
  },
  {
    id: 9,
    text: "Either the cat or the dogs _____ the food last night.",
    options: [
      { id: 'a', text: "eats" },
      { id: 'b', text: "eat" },
      { id: 'c', text: "ate", correct: true },
      { id: 'd', text: "eaten" }
    ],
    correctAnswer: "ate",
    explanation: "Past tense verb. Agrees with closest subject 'dogs' - plural.",
    hint: "Check the closest subject in 'either...or' and the tense."
  },
  {
    id: 10,
    text: "My glasses _____ on the table. Where _____ they?",
    options: [
      { id: 'a', text: "is, is" },
      { id: 'b', text: "are, are", correct: true },
      { id: 'c', text: "is, are" },
      { id: 'd', text: "are, is" }
    ],
    correctAnswer: "are, are",
    explanation: "'Glasses' (spectacles) is plural despite ending in -s.",
    hint: "Consider if the subject is inherently plural."
  },
  {
    id: 11,
    text: "Nobody _____ what happened yet.",
    options: [
      { id: 'a', text: "know" },
      { id: 'b', text: "knows", correct: true },
      { id: 'c', text: "are knowing" },
      { id: 'd', text: "have known" }
    ],
    correctAnswer: "knows",
    explanation: "'Nobody' is singular.",
    hint: "Indefinite pronouns like 'nobody' are usually singular."
  },
  {
    id: 12,
    text: "The long and winding road _____ to the beach.",
    options: [
      { id: 'a', text: "lead" },
      { id: 'b', text: "leads", correct: true },
      { id: 'c', text: "are leading" },
      { id: 'd', text: "have led" }
    ],
    correctAnswer: "leads",
    explanation: "Refers to one single road - singular.",
    hint: "Check if the subject refers to a single entity."
  },
  {
    id: 13,
    text: "One of my friends _____ a doctor.",
    options: [
      { id: 'a', text: "is", correct: true },
      { id: 'b', text: "are" },
      { id: 'c', text: "were" },
      { id: 'd', text: "have been" }
    ],
    correctAnswer: "is",
    explanation: "Subject is 'One' - singular.",
    hint: "Focus on 'one' as the main subject."
  },
  {
    id: 14,
    text: "Bread and butter _____ my usual breakfast.",
    options: [
      { id: 'a', text: "is", correct: true },
      { id: 'b', text: "are" },
      { id: 'c', text: "was" },
      { id: 'd', text: "were" }
    ],
    correctAnswer: "is",
    explanation: "Treated as one single food item - singular.",
    hint: "Some compound subjects are treated as a single unit."
  },
  {
    id: 15,
    text: "The team _____ new jerseys for the tournament.",
    options: [
      { id: 'a', text: "needs", correct: true },
      { id: 'b', text: "need" },
      { id: 'c', text: "are needing" },
      { id: 'd', text: "have needed" }
    ],
    correctAnswer: "needs",
    explanation: "Team acting as one unit - singular.",
    hint: "Determine if the team is acting collectively."
  },
  {
    id: 16,
    text: "More than one house _____ damaged in the storm.",
    options: [
      { id: 'a', text: "were" },
      { id: 'b', text: "was", correct: true },
      { id: 'c', text: "are" },
      { id: 'd', text: "have been" }
    ],
    correctAnswer: "was",
    explanation: "'More than one' + singular noun = singular verb.",
    hint: "'More than one' takes a singular verb despite implying plurality."
  },
  {
    id: 17,
    text: "Here _____ the documents you requested.",
    options: [
      { id: 'a', text: "is" },
      { id: 'b', text: "are", correct: true },
      { id: 'c', text: "was" },
      { id: 'd', text: "were" }
    ],
    correctAnswer: "are",
    explanation: "True subject 'documents' is plural.",
    hint: "Identify the true subject after 'here'."
  },
  {
    id: 18,
    text: "Neither the children nor their mother _____ home.",
    options: [
      { id: 'a', text: "is", correct: true },
      { id: 'b', text: "are" },
      { id: 'c', text: "was" },
      { id: 'd', text: "were" }
    ],
    correctAnswer: "is",
    explanation: "Verb agrees with closest subject 'mother' - singular.",
    hint: "In 'neither...nor,' the verb agrees with the closest subject."
  },
  {
    id: 19,
    text: "The number of accidents on this road _____ alarming.",
    options: [
      { id: 'a', text: "is", correct: true },
      { id: 'b', text: "are" },
      { id: 'c', text: "were" },
      { id: 'd', text: "have been" }
    ],
    correctAnswer: "is",
    explanation: "'The number' refers to a count - singular.",
    hint: "'The number' focuses on a single quantity."
  },
  {
    id: 20,
    text: "Everybody _____ finished their assignment.",
    options: [
      { id: 'a', text: "has", correct: true },
      { id: 'b', text: "have" },
      { id: 'c', text: "are having" },
      { id: 'd', text: "is having" }
    ],
    correctAnswer: "has",
    explanation: "'Everybody' is singular.",
    hint: "Indefinite pronouns like 'everybody' are singular."
  },
  {
    id: 21,
    text: "Measles _____ a contagious disease.",
    options: [
      { id: 'a', text: "are" },
      { id: 'b', text: "is", correct: true },
      { id: 'c', text: "were" },
      { id: 'd', text: "have been" }
    ],
    correctAnswer: "is",
    explanation: "Disease name ending in -s = singular.",
    hint: "Some nouns ending in -s are singular."
  },
  {
    id: 22,
    text: "Some of the water _____ spilled.",
    options: [
      { id: 'a', text: "was", correct: true },
      { id: 'b', text: "were" },
      { id: 'c', text: "are" },
      { id: 'd', text: "have been" }
    ],
    correctAnswer: "was",
    explanation: "'Water' is uncountable - singular.",
    hint: "Uncountable nouns take singular verbs."
  },
  {
    id: 23,
    text: "Some of the books _____ missing.",
    options: [
      { id: 'a', text: "is" },
      { id: 'b', text: "are", correct: true },
      { id: 'c', text: "was" },
      { id: 'd', text: "has been" }
    ],
    correctAnswer: "are",
    explanation: "'Books' are countable - plural.",
    hint: "Countable nouns in plural form take plural verbs."
  },
  {
    id: 24,
    text: "The government _____ announced new policies.",
    options: [
      { id: 'a', text: "have" },
      { id: 'b', text: "has", correct: true },
      { id: 'c', text: "are" },
      { id: 'd', text: "were" }
    ],
    correctAnswer: "has",
    explanation: "Often treated as singular unit in this context.",
    hint: "Consider if the collective noun is acting as one unit."
  },
  {
    id: 25,
    text: "Where _____ my keys and wallet?",
    options: [
      { id: 'a', text: "is" },
      { id: 'b', text: "are", correct: true },
      { id: 'c', text: "was" },
      { id: 'd', text: "were" }
    ],
    correctAnswer: "are",
    explanation: "Compound subject 'keys and wallet' = plural.",
    hint: "Compound subjects joined by 'and' are plural."
  },
  {
    id: 26,
    text: "Five years _____ a long time to wait.",
    options: [
      { id: 'a', text: "seem" },
      { id: 'b', text: "seems", correct: true },
      { id: 'c', text: "are seeming" },
      { id: 'd', text: "have seemed" }
    ],
    correctAnswer: "seems",
    explanation: "Period of time = singular unit.",
    hint: "Treat periods of time as a single unit."
  },
  {
    id: 27,
    text: "The staff _____ disagreeing among themselves.",
    options: [
      { id: 'a', text: "is" },
      { id: 'b', text: "are", correct: true },
      { id: 'c', text: "was" },
      { id: 'd', text: "were" }
    ],
    correctAnswer: "are",
    explanation: "Members acting individually - plural.",
    hint: "Check if the collective noun implies individual actions."
  },
  {
    id: 28,
    text: "None of the cake _____ left.",
    options: [
      { id: 'a', text: "is", correct: true },
      { id: 'b', text: "are" },
      { id: 'c', text: "were" },
      { id: 'd', text: "have been" }
    ],
    correctAnswer: "is",
    explanation: "'None' meaning 'not any' of uncountable cake - singular.",
    hint: "'None' with uncountable nouns takes a singular verb."
  },
  {
    id: 29,
    text: "\"Things Fall Apart\" _____ by Chinua Achebe.",
    options: [
      { id: 'a', text: "are written" },
      { id: 'b', text: "is written", correct: true },
      { id: 'c', text: "were written" },
      { id: 'd', text: "have been written" }
    ],
    correctAnswer: "is written",
    explanation: "Title of a single book = singular.",
    hint: "Book titles are treated as singular."
  },
  {
    id: 30,
    text: "She is one of those people who _____ always punctual.",
    options: [
      { id: 'a', text: "is" },
      { id: 'b', text: "are", correct: true },
      { id: 'c', text: "was" },
      { id: 'd', text: "were" }
    ],
    correctAnswer: "are",
    explanation: "'Who' refers to 'people' = plural.",
    hint: "Look at what 'who' refers to in the sentence."
  }
];

export default questions;