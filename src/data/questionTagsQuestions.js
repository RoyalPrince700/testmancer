const questions = [
  {
    id: 1,
    text: "She is coming, ______?",
    options: [
      { id: 'a', text: "isn’t she?", correct: true },
      { id: 'b', text: "is she?" },
      { id: 'c', text: "wasn’t she?" },
      { id: 'd', text: "aren’t she?" }
    ],
    correctAnswer: "isn’t she?",
    explanation: "Positive statement requires a negative tag with the same auxiliary ('is').",
    hint: "Check if the statement is positive and match the auxiliary verb."
  },
  {
    id: 2,
    text: "You don’t like pepper, ______?",
    options: [
      { id: 'a', text: "do you?", correct: true },
      { id: 'b', text: "don’t you?" },
      { id: 'c', text: "isn’t it?" },
      { id: 'd', text: "are you?" }
    ],
    correctAnswer: "do you?",
    explanation: "Negative statement requires a positive tag with the same auxiliary ('do').",
    hint: "Look for a positive tag to match a negative statement."
  },
  {
    id: 3,
    text: "Let’s go out, ______?",
    options: [
      { id: 'a', text: "will we?" },
      { id: 'b', text: "shall we?", correct: true },
      { id: 'c', text: "can we?" },
      { id: 'd', text: "do we?" }
    ],
    correctAnswer: "shall we?",
    explanation: "'Let’s' suggestions use 'shall we?' in the tag.",
    hint: "Check the special tag used for suggestions with 'let’s'."
  },
  {
    id: 4,
    text: "He likes football, ______?",
    options: [
      { id: 'a', text: "does he?" },
      { id: 'b', text: "doesn’t he?", correct: true },
      { id: 'c', text: "is he?" },
      { id: 'd', text: "did he?" }
    ],
    correctAnswer: "doesn’t he?",
    explanation: "Positive statement with no auxiliary uses 'doesn’t' in the tag.",
    hint: "Look for the correct auxiliary for a present simple positive statement."
  },
  {
    id: 5,
    text: "They didn’t attend, ______?",
    options: [
      { id: 'a', text: "did they?", correct: true },
      { id: 'b', text: "didn’t they?" },
      { id: 'c', text: "do they?" },
      { id: 'd', text: "were they?" }
    ],
    correctAnswer: "did they?",
    explanation: "Negative past simple statement uses positive 'did' tag.",
    hint: "Check the tense and polarity of the statement for the tag."
  },
  {
    id: 6,
    text: "I’m late, ______?",
    options: [
      { id: 'a', text: "am I?" },
      { id: 'b', text: "aren’t I?", correct: true },
      { id: 'c', text: "am not I?" },
      { id: 'd', text: "wasn’t I?" }
    ],
    correctAnswer: "aren’t I?",
    explanation: "'I am' takes 'aren’t I?' as the question tag.",
    hint: "Look for the special tag used with 'I am'."
  },
  {
    id: 7,
    text: "Close the door, ______?",
    options: [
      { id: 'a', text: "will you?", correct: true },
      { id: 'b', text: "shall we?" },
      { id: 'c', text: "do you?" },
      { id: 'd', text: "won’t you?" }
    ],
    correctAnswer: "will you?",
    explanation: "Imperative sentences use 'will you?' as the tag.",
    hint: "Check the tag used for commands."
  },
  {
    id: 8,
    text: "Nobody came, ______?",
    options: [
      { id: 'a', text: "did they?", correct: true },
      { id: 'b', text: "didn’t they?" },
      { id: 'c', text: "do they?" },
      { id: 'd', text: "were they?" }
    ],
    correctAnswer: "did they?",
    explanation: "Indefinite pronoun 'nobody' takes 'they' with positive tag for negative statement.",
    hint: "Look for the pronoun used with indefinite subjects like 'nobody'."
  },
  {
    id: 9,
    text: "She never lies, ______?",
    options: [
      { id: 'a', text: "does she?", correct: true },
      { id: 'b', text: "doesn’t she?" },
      { id: 'c', text: "is she?" },
      { id: 'd', text: "did she?" }
    ],
    correctAnswer: "does she?",
    explanation: "'Never' makes the statement negative, so the tag is positive ('does').",
    hint: "Consider how negative words like 'never' affect the tag."
  },
  {
    id: 10,
    text: "There is a problem, ______?",
    options: [
      { id: 'a', text: "is there?" },
      { id: 'b', text: "isn’t there?", correct: true },
      { id: 'c', text: "are there?" },
      { id: 'd', text: "was there?" }
    ],
    correctAnswer: "isn’t there?",
    explanation: "'There is' (positive) takes negative tag 'isn’t there.'",
    hint: "Check if the subject 'there' is repeated in the tag."
  },
  {
    id: 11,
    text: "This is yours, ______?",
    options: [
      { id: 'a', text: "is it?" },
      { id: 'b', text: "isn’t it?", correct: true },
      { id: 'c', text: "does it?" },
      { id: 'd', text: "did it?" }
    ],
    correctAnswer: "isn’t it?",
    explanation: "'This' (positive) uses 'it' with negative tag 'isn’t.'",
    hint: "Look for the pronoun used with 'this' in the tag."
  },
  {
    id: 12,
    text: "You will help, ______?",
    options: [
      { id: 'a', text: "will you?" },
      { id: 'b', text: "won’t you?", correct: true },
      { id: 'c', text: "do you?" },
      { id: 'd', text: "are you?" }
    ],
    correctAnswer: "won’t you?",
    explanation: "Positive future statement ('will') takes negative tag 'won’t.'",
    hint: "Match the auxiliary verb in the statement for the tag."
  },
  {
    id: 13,
    text: "They aren’t ready, ______?",
    options: [
      { id: 'a', text: "are they?", correct: true },
      { id: 'b', text: "aren’t they?" },
      { id: 'c', text: "do they?" },
      { id: 'd', text: "did they?" }
    ],
    correctAnswer: "are they?",
    explanation: "Negative statement ('aren’t') takes positive tag 'are.'",
    hint: "Check the polarity of the statement for the tag."
  },
  {
    id: 14,
    text: "Let’s study tonight, ______?",
    options: [
      { id: 'a', text: "will we?" },
      { id: 'b', text: "shall we?", correct: true },
      { id: 'c', text: "do we?" },
      { id: 'd', text: "are we?" }
    ],
    correctAnswer: "shall we?",
    explanation: "'Let’s' suggestions use 'shall we?' in the tag.",
    hint: "Look for the tag used with 'let’s' suggestions."
  },
  {
    id: 15,
    text: "He wrote the letter, ______?",
    options: [
      { id: 'a', text: "did he?" },
      { id: 'b', text: "didn’t he?", correct: true },
      { id: 'c', text: "does he?" },
      { id: 'd', text: "was he?" }
    ],
    correctAnswer: "didn’t he?",
    explanation: "Positive past simple statement uses negative 'didn’t' tag.",
    hint: "Check the tense of the statement for the correct auxiliary."
  },
  {
    id: 16,
    text: "She hardly studies, ______?",
    options: [
      { id: 'a', text: "does she?", correct: true },
      { id: 'b', text: "doesn’t she?" },
      { id: 'c', text: "is she?" },
      { id: 'd', text: "did she?" }
    ],
    correctAnswer: "does she?",
    explanation: "'Hardly' makes the statement negative, so the tag is positive ('does').",
    hint: "Consider how words like 'hardly' affect the tag’s polarity."
  },
  {
    id: 17,
    text: "Everybody was happy, ______?",
    options: [
      { id: 'a', text: "were they?" },
      { id: 'b', text: "weren’t they?", correct: true },
      { id: 'c', text: "did they?" },
      { id: 'd', text: "was they?" }
    ],
    correctAnswer: "weren’t they?",
    explanation: "Indefinite pronoun 'everybody' uses 'they' with negative tag for positive statement.",
    hint: "Look for the pronoun and tag for indefinite subjects like 'everybody'."
  },
  {
    id: 18,
    text: "Don’t run, ______?",
    options: [
      { id: 'a', text: "will you?", correct: true },
      { id: 'b', text: "shall you?" },
      { id: 'c', text: "do you?" },
      { id: 'd', text: "won’t you?" }
    ],
    correctAnswer: "will you?",
    explanation: "Negative imperatives use 'will you?' as the tag.",
    hint: "Check the tag used for negative commands."
  },
  {
    id: 19,
    text: "There are many books, ______?",
    options: [
      { id: 'a', text: "are there?" },
      { id: 'b', text: "aren’t there?", correct: true },
      { id: 'c', text: "is there?" },
      { id: 'd', text: "was there?" }
    ],
    correctAnswer: "aren’t there?",
    explanation: "'There are' (positive) takes negative tag 'aren’t there.'",
    hint: "Ensure the subject 'there' is repeated in the tag."
  },
  {
    id: 20,
    text: "That was fun, ______?",
    options: [
      { id: 'a', text: "was it?" },
      { id: 'b', text: "wasn’t it?", correct: true },
      { id: 'c', text: "did it?" },
      { id: 'd', text: "does it?" }
    ],
    correctAnswer: "wasn’t it?",
    explanation: "'That' (positive) uses 'it' with negative tag 'wasn’t.'",
    hint: "Check the pronoun used with 'that' in the tag."
  },
  {
    id: 21,
    text: "You’ve finished, ______?",
    options: [
      { id: 'a', text: "haven’t you?", correct: true },
      { id: 'b', text: "have you?" },
      { id: 'c', text: "did you?" },
      { id: 'd', text: "do you?" }
    ],
    correctAnswer: "haven’t you?",
    explanation: "Positive present perfect statement uses negative 'haven’t' tag.",
    hint: "Match the auxiliary verb in the present perfect statement."
  },
  {
    id: 22,
    text: "She won’t come, ______?",
    options: [
      { id: 'a', text: "will she?", correct: true },
      { id: 'b', text: "won’t she?" },
      { id: 'c', text: "does she?" },
      { id: 'd', text: "did she?" }
    ],
    correctAnswer: "will she?",
    explanation: "Negative future statement ('won’t') takes positive tag 'will.'",
    hint: "Check the polarity and auxiliary for a future tense statement."
  },
  {
    id: 23,
    text: "Someone took it, ______?",
    options: [
      { id: 'a', text: "did they?" },
      { id: 'b', text: "didn’t they?", correct: true },
      { id: 'c', text: "do they?" },
      { id: 'd', text: "were they?" }
    ],
    correctAnswer: "didn’t they?",
    explanation: "Indefinite pronoun 'someone' uses 'they' with negative tag for positive statement.",
    hint: "Look for the pronoun used with indefinite subjects like 'someone'."
  },
  {
    id: 24,
    text: "He rarely visits, ______?",
    options: [
      { id: 'a', text: "does he?", correct: true },
      { id: 'b', text: "doesn’t he?" },
      { id: 'c', text: "is he?" },
      { id: 'd', text: "did he?" }
    ],
    correctAnswer: "does he?",
    explanation: "'Rarely' makes the statement negative, so the tag is positive ('does').",
    hint: "Consider how negative words like 'rarely' affect the tag."
  },
  {
    id: 25,
    text: "I’m the best, ______?",
    options: [
      { id: 'a', text: "am I?" },
      { id: 'b', text: "aren’t I?", correct: true },
      { id: 'c', text: "was I?" },
      { id: 'd', text: "do I?" }
    ],
    correctAnswer: "aren’t I?",
    explanation: "'I am' takes 'aren’t I?' as the question tag.",
    hint: "Check the special tag for statements with 'I am'."
  },
  {
    id: 26,
    text: "Open the window, ______?",
    options: [
      { id: 'a', text: "will you?", correct: true },
      { id: 'b', text: "shall we?" },
      { id: 'c', text: "do you?" },
      { id: 'd', text: "won’t you?" }
    ],
    correctAnswer: "will you?",
    explanation: "Imperative sentences use 'will you?' as the tag.",
    hint: "Look for the tag used with direct commands."
  },
  {
    id: 27,
    text: "There was no issue, ______?",
    options: [
      { id: 'a', text: "was there?", correct: true },
      { id: 'b', text: "wasn’t there?" },
      { id: 'c', text: "is there?" },
      { id: 'd', text: "were there?" }
    ],
    correctAnswer: "was there?",
    explanation: "'There was' (negative) takes positive tag 'was there.'",
    hint: "Ensure the subject 'there' and tense are repeated in the tag."
  },
  {
    id: 28,
    text: "You’re joking, ______?",
    options: [
      { id: 'a', text: "aren’t you?", correct: true },
      { id: 'b', text: "are you?" },
      { id: 'c', text: "do you?" },
      { id: 'd', text: "did you?" }
    ],
    correctAnswer: "aren’t you?",
    explanation: "Positive statement ('you’re') takes negative tag 'aren’t.'",
    hint: "Match the auxiliary verb and polarity of the statement."
  },
  {
    id: 29,
    text: "She doesn’t know, ______?",
    options: [
      { id: 'a', text: "does she?", correct: true },
      { id: 'b', text: "doesn’t she?" },
      { id: 'c', text: "is she?" },
      { id: 'd', text: "did she?" }
    ],
    correctAnswer: "does she?",
    explanation: "Negative statement ('doesn’t') takes positive tag 'does.'",
    hint: "Check the polarity and auxiliary for a negative statement."
  },
  {
    id: 30,
    text: "Oh, you’re so smart, ______?",
    options: [
      { id: 'a', text: "aren’t you?", correct: true },
      { id: 'b', text: "are you?" },
      { id: 'c', text: "do you?" },
      { id: 'd', text: "were you?" }
    ],
    correctAnswer: "aren’t you?",
    explanation: "Sarcastic positive statement takes negative tag 'aren’t.'",
    hint: "Consider the tone and polarity for a sarcastic statement."
  }
];

export default questions;