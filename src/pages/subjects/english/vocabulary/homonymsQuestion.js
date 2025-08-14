const questions = [
  {
    id: 1,
    text: "I deposited money at the river ____.",
    options: [
      { id: 'a', text: "banque" },
      { id: 'b', text: "bank (side of a river)", correct: true },
      { id: 'c', text: "bank (financial institution)" },
      { id: 'd', text: "banc" }
    ],
    correctAnswer: "bank (side of a river)",
    explanation: "Here 'bank' refers to the land alongside a river, not a financial institution.",
    hint: "Consider the context - is this about money or geography?"
  },
  {
    id: 2,
    text: "The cricket player swung his ____.",
    options: [
      { id: 'a', text: "bat (sports equipment)", correct: true },
      { id: 'b', text: "racket" },
      { id: 'c', text: "bat (animal)" },
      { id: 'd', text: "stick" }
    ],
    correctAnswer: "bat (sports equipment)",
    explanation: "In cricket context, 'bat' refers to the sports equipment, not the flying mammal.",
    hint: "Think about the sport being mentioned."
  },
  {
    id: 3,
    text: "They're going to ____ house.",
    options: [
      { id: 'a', text: "they're" },
      { id: 'b', text: "there (location)" },
      { id: 'c', text: "their (possession)", correct: true },
      { id: 'd', text: "theire" }
    ],
    correctAnswer: "their (possession)",
    explanation: "The sentence shows possession (their house), not location (there).",
    hint: "Is this showing ownership or pointing to a place?"
  },
  {
    id: 4,
    text: "I need ____ eggs for the recipe.",
    options: [
      { id: 'a', text: "to (preposition)" },
      { id: 'b', text: "tow" },
      { id: 'c', text: "too (also)" },
      { id: 'd', text: "two (number)", correct: true }
    ],
    correctAnswer: "two (number)",
    explanation: "The sentence requires a number (two eggs), not 'to' or 'too'.",
    hint: "The blank should be filled with a quantity."
  },
  {
    id: 5,
    text: "She tied a ribbon in a pretty ____.",
    options: [
      { id: 'a', text: "bow (knot)", correct: true },
      { id: 'b', text: "bough" },
      { id: 'c', text: "bow (bend at waist)" },
      { id: 'd', text: "beau" }
    ],
    correctAnswer: "bow (knot)",
    explanation: "The context suggests the decorative knot, not the act of bending.",
    hint: "Think about what you do with ribbons."
  },
  {
    id: 6,
    text: "The ____ metal is toxic if ingested.",
    options: [
      { id: 'a', text: "leed" },
      { id: 'b', text: "lead (guide)" },
      { id: 'c', text: "led" },
      { id: 'd', text: "lead (metal)", correct: true }
    ],
    correctAnswer: "lead (metal)",
    explanation: "The context refers to the metallic element (Pb), not the verb meaning to guide.",
    hint: "Which version is a chemical element?"
  },
  {
    id: 7,
    text: "The strong ____ knocked over the trash cans.",
    options: [
      { id: 'a', text: "wined" },
      { id: 'b', text: "wind (air movement)", correct: true },
      { id: 'c', text: "wind (twist)" },
      { id: 'd', text: "whined" }
    ],
    correctAnswer: "wind (air movement)",
    explanation: "This refers to moving air, not the action of twisting something.",
    hint: "What natural force could knock over trash cans?"
  },
  {
    id: 8,
    text: "The ____ of the story was fascinating.",
    options: [
      { id: 'a', text: "teil" },
      { id: 'b', text: "tael" },
      { id: 'c', text: "tale (story)", correct: true },
      { id: 'd', text: "tail (animal appendage)" }
    ],
    correctAnswer: "tale (story)",
    explanation: "This refers to the narrative, not an animal's tail.",
    hint: "Which word means 'story'?"
  },
  {
    id: 9,
    text: "I need a ____ to measure this board.",
    options: [
      { id: 'a', text: "ruler (measuring tool)", correct: true },
      { id: 'b', text: "rule" },
      { id: 'c', text: "rollor" },
      { id: 'd', text: "ruler (monarch)" }
    ],
    correctAnswer: "ruler (measuring tool)",
    explanation: "The context requires the measuring instrument, not a king or queen.",
    hint: "What tool would you use to measure something?"
  },
  {
    id: 10,
    text: "The ____ foot was injured.",
    options: [
      { id: 'a', text: "bair" },
      { id: 'b', text: "bear (animal)" },
      { id: 'c', text: "behr" },
      { id: 'd', text: "bare (uncovered)", correct: true }
    ],
    correctAnswer: "bare (uncovered)",
    explanation: "This refers to an uncovered foot, not the animal.",
    hint: "Which word describes a foot without shoes?"
  },
  {
    id: 11,
    text: "We need ____ for baking the cake.",
    options: [
      { id: 'a', text: "flour (baking ingredient)", correct: true },
      { id: 'b', text: "flaur" },
      { id: 'c', text: "flor" },
      { id: 'd', text: "flower (plant)" }
    ],
    correctAnswer: "flour (baking ingredient)",
    explanation: "Baking requires flour, not flowers.",
    hint: "What baking ingredient sounds like 'flower'?"
  },
  {
    id: 12,
    text: "The golfer got a ____ in one.",
    options: [
      { id: 'a', text: "howl" },
      { id: 'b', text: "whole (entire)" },
      { id: 'c', text: "hole (opening)", correct: true },
      { id: 'd', text: "holl" }
    ],
    correctAnswer: "hole (opening)",
    explanation: "In golf, this refers to getting the ball in the hole in one stroke.",
    hint: "Think about golf terminology."
  },
  {
    id: 13,
    text: "The math book had too many ____.",
    options: [
      { id: 'a', text: "probblems" },
      { id: 'b', text: "problems (exercises)", correct: true },
      { id: 'c', text: "problums" },
      { id: 'd', text: "problems (difficulties)" }
    ],
    correctAnswer: "problems (exercises)",
    explanation: "Math books contain problem exercises, though the joke plays on both meanings.",
    hint: "What do math books contain that students solve?"
  },
  {
    id: 14,
    text: "She saw the salad ____.",
    options: [
      { id: 'a', text: "dressing (putting on clothes)" },
      { id: 'b', text: "dreseing" },
      { id: 'c', text: "dresing" },
      { id: 'd', text: "dressing (vinaigrette)", correct: true }
    ],
    correctAnswer: "dressing (vinaigrette)",
    explanation: "This refers to salad dressing, not the act of putting on clothes.",
    hint: "What goes on salad?"
  },
  {
    id: 15,
    text: "He received a ____ for speeding.",
    options: [
      { id: 'a', text: "fine (penalty)", correct: true },
      { id: 'b', text: "phine" },
      { id: 'c', text: "fien" },
      { id: 'd', text: "fine (good quality)" }
    ],
    correctAnswer: "fine (penalty)",
    explanation: "This refers to a monetary penalty, not something of good quality.",
    hint: "What punishment might you get for speeding?"
  },
  {
    id: 16,
    text: "Bring the ____ to start the fire.",
    options: [
      { id: 'a', text: "matche" },
      { id: 'b', text: "match (firestick)", correct: true },
      { id: 'c', text: "mach" },
      { id: 'd', text: "match (sports game)" }
    ],
    correctAnswer: "match (firestick)",
    explanation: "This refers to the small stick for lighting fires, not a sports competition.",
    hint: "What would you use to start a fire?"
  },
  {
    id: 17,
    text: "____ my favorite food.",
    options: [
      { id: 'a', text: "Yame" },
      { id: 'b', text: "Iam" },
      { id: 'c', text: "Yam (vegetable)", correct: true },
      { id: 'd', text: "I yam (I am)" }
    ],
    correctAnswer: "Yam (vegetable)",
    explanation: "This refers to the starchy tuber, not the playful 'I yam' construction.",
    hint: "Which is an actual food item?"
  },
  {
    id: 18,
    text: "The ____ was interesting.",
    options: [
      { id: 'a', text: "story (narrative)", correct: true },
      { id: 'b', text: "storay" },
      { id: 'c', text: "storie" },
      { id: 'd', text: "storey (floor level)" }
    ],
    correctAnswer: "story (narrative)",
    explanation: "This refers to a tale or account, not a building level.",
    hint: "Which word means a tale or narrative?"
  },
  {
    id: 19,
    text: "The ____ was delicious.",
    options: [
      { id: 'a', text: "paire" },
      { id: 'b', text: "pear (fruit)", correct: true },
      { id: 'c', text: "pere" },
      { id: 'd', text: "pair (two of something)" }
    ],
    correctAnswer: "pear (fruit)",
    explanation: "This refers to the edible fruit, not a set of two items.",
    hint: "Which word is a type of fruit?"
  },
  {
    id: 20,
    text: "She ____ the letter.",
    options: [
      { id: 'a', text: "reed" },
      { id: 'b', text: "red" },
      { id: 'c', text: "read (present tense)" },
      { id: 'd', text: "read (past tense)", correct: true }
    ],
    correctAnswer: "read (past tense)",
    explanation: "This is the past tense of 'read', pronounced like 'red'.",
    hint: "The sentence is in past tense."
  },
  {
    id: 21,
    text: "The ____ is shining brightly.",
    options: [
      { id: 'a', text: "sun (star)", correct: true },
      { id: 'b', text: "sunn" },
      { id: 'c', text: "sin" },
      { id: 'd', text: "son (male child)" }
    ],
    correctAnswer: "sun (star)",
    explanation: "This refers to our solar system's star, not a male child.",
    hint: "What shines in the sky during daytime?"
  },
  {
    id: 22,
    text: "He broke the ____ record.",
    options: [
      { id: 'a', text: "our (possessive)" },
      { id: 'b', text: "ower" },
      { id: 'c', text: "hour (time)", correct: true },
      { id: 'd', text: "are (verb)" }
    ],
    correctAnswer: "hour (time)",
    explanation: "This refers to a time measurement record, not the possessive pronoun.",
    hint: "Which word relates to time measurement?"
  },
  {
    id: 23,
    text: "The ____ is very loud.",
    options: [
      { id: 'a', text: "knite" },
      { id: 'b', text: "night (time period)", correct: true },
      { id: 'c', text: "nite" },
      { id: 'd', text: "knight (medieval warrior)" }
    ],
    correctAnswer: "night (time period)",
    explanation: "This refers to the evening period, not an armored warrior.",
    hint: "Which word refers to a time of day?"
  },
  {
    id: 24,
    text: "She bought a new ____ of shoes.",
    options: [
      { id: 'a', text: "pair (two items)", correct: true },
      { id: 'b', text: "paire" },
      { id: 'c', text: "pare" },
      { id: 'd', text: "pear (fruit)" }
    ],
    correctAnswer: "pair (two items)",
    explanation: "Shoes come in pairs (two), not the fruit pear.",
    hint: "How do we count shoes?"
  },
  {
    id: 25,
    text: "The ____ is very sweet.",
    options: [
      { id: 'a', text: "burry" },
      { id: 'b', text: "bery" },
      { id: 'c', text: "bury (inter)" },
      { id: 'd', text: "berry (fruit)", correct: true }
    ],
    correctAnswer: "berry (fruit)",
    explanation: "This refers to the sweet fruit, not the act of burying something.",
    hint: "Which word is a type of fruit?"
  },
  {
    id: 26,
    text: "He's the ____ of the team.",
    options: [
      { id: 'a', text: "sowl" },
      { id: 'b', text: "sole (only)", correct: true },
      { id: 'c', text: "soal" },
      { id: 'd', text: "soul (spirit)" }
    ],
    correctAnswer: "sole (only)",
    explanation: "This means he's the only leader, not referring to a spirit.",
    hint: "Which word means 'only'?"
  },
  {
    id: 27,
    text: "The ____ is very dry.",
    options: [
      { id: 'a', text: "air (atmosphere)", correct: true },
      { id: 'b', text: "eyre" },
      { id: 'c', text: "aire" },
      { id: 'd', text: "heir (inheritor)" }
    ],
    correctAnswer: "air (atmosphere)",
    explanation: "This refers to the atmospheric condition, not someone who inherits.",
    hint: "What can be dry in weather terms?"
  },
  {
    id: 28,
    text: "She has a ____ in her finger.",
    options: [
      { id: 'a', text: "ring (jewelry)" },
      { id: 'b', text: "male (gender)" },
      { id: 'c', text: "nail (finger)", correct: true },
      { id: 'd', text: "band (bracelet)" }
    ],
    correctAnswer: "nail (finger)",
    explanation: "This refers to a fingernail or possibly a splinter in the finger, a common injury context.",
    hint: "What part of the finger could be referenced in an injury context?"
  },
  {
    id: 29,
    text: "The ____ is very heavy.",
    options: [
      { id: 'a', text: "wate" },
      { id: 'b', text: "waite" },
      { id: 'c', text: "weight (mass)", correct: true },
      { id: 'd', text: "wait (time)" }
    ],
    correctAnswer: "weight (mass)",
    explanation: "This refers to how heavy something is, not the passage of time.",
    hint: "Which word relates to how heavy something is?"
  },
  {
    id: 30,
    text: "They ____ the competition.",
    options: [
      { id: 'a', text: "own" },
      { id: 'b', text: "won (past of win)", correct: true },
      { id: 'c', text: "wun" },
      { id: 'd', text: "one (number)" }
    ],
    correctAnswer: "won (past of win)",
    explanation: "This is the past tense of 'win', not the number one.",
    hint: "Which word means 'achieved victory'?"
  }
];

export default questions;