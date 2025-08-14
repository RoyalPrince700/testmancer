const questions = [
  {
    id: 1,
    text: "Which spelling is correct in British English?",
    options: [
      { id: 'a', text: "Color" },
      { id: 'b', text: "Colour", correct: true },
      { id: 'c', text: "Collor" },
      { id: 'd', text: "Culler" }
    ],
    correctAnswer: "Colour",
    explanation: "British English uses 'our' endings in words like colour, favour, and honour.",
    hint: "Remember the UK flag in 'our' words."
  },
  {
    id: 2,
    text: "Choose the correct spelling:",
    options: [
      { id: 'a', text: "Seperate" },
      { id: 'b', text: "Separate", correct: true },
      { id: 'c', text: "Seperrate" },
      { id: 'd', text: "Separete" }
    ],
    correctAnswer: "Separate",
    explanation: "Remember 'par' in the middle of 'separate'.",
    hint: "Think of 'a rat' in the middle (sep-A-RAT-e)."
  },
  {
    id: 3,
    text: "Which is the American spelling?",
    options: [
      { id: 'a', text: "Organise" },
      { id: 'b', text: "Organize", correct: true },
      { id: 'c', text: "Organiese" },
      { id: 'd', text: "Organyse" }
    ],
    correctAnswer: "Organize",
    explanation: "American English uses 'z' instead of 's' in words like organize and realize.",
    hint: "Americans love 'z' sounds."
  },
  {
    id: 4,
    text: "Complete the word: BEL__VE",
    options: [
      { id: 'a', text: "IE", correct: true },
      { id: 'b', text: "EI" },
      { id: 'c', text: "EE" },
      { id: 'd', text: "IA" }
    ],
    correctAnswer: "IE",
    explanation: "Follows the rule 'I before E except after C'.",
    hint: "Remember the rhyme: I before E except after C."
  },
  {
    id: 5,
    text: "Which spelling is correct?",
    options: [
      { id: 'a', text: "Neccessary" },
      { id: 'b', text: "Necesary" },
      { id: 'c', text: "Necessary", correct: true },
      { id: 'd', text: "Nessecary" }
    ],
    correctAnswer: "Necessary",
    explanation: "Remember: one 'c' and two 's's in 'necessary'.",
    hint: "Think: one collar (c), two sleeves (ss)."
  },
  {
    id: 6,
    text: "Choose the correct homophone: ___ going to school.",
    options: [
      { id: 'a', text: "Your" },
      { id: 'b', text: "You're", correct: true },
      { id: 'c', text: "Yore" },
      { id: 'd', text: "Yor" }
    ],
    correctAnswer: "You're",
    explanation: "'You're' is the contraction for 'you are'.",
    hint: "If you can replace it with 'you are', use 'you're'."
  },
  {
    id: 7,
    text: "Which spelling follows British convention?",
    options: [
      { id: 'a', text: "Traveling" },
      { id: 'b', text: "Travelling", correct: true },
      { id: 'c', text: "Travelin" },
      { id: 'd', text: "Travveling" }
    ],
    correctAnswer: "Travelling",
    explanation: "British English doubles the consonant before adding -ing.",
    hint: "UK doubles the 'l' before -ing."
  },
  {
    id: 8,
    text: "Complete the word: REC__VE",
    options: [
      { id: 'a', text: "IE" },
      { id: 'b', text: "EI", correct: true },
      { id: 'c', text: "EE" },
      { id: 'd', text: "IA" }
    ],
    correctAnswer: "EI",
    explanation: "This is the exception to the rule - 'E before I after C'.",
    hint: "Remember 'except after C' in the rhyme."
  },
  {
    id: 9,
    text: "Which spelling is correct?",
    options: [
      { id: 'a', text: "Accomodation" },
      { id: 'b', text: "Acommodation" },
      { id: 'c', text: "Accommodation", correct: true },
      { id: 'd', text: "Acomodation" }
    ],
    correctAnswer: "Accommodation",
    explanation: "Remember double 'c' and double 'm' in accommodation.",
    hint: "Think: two cots (cc) and two mattresses (mm)."
  },
  {
    id: 10,
    text: "Choose the correct spelling:",
    options: [
      { id: 'a', text: "Definately" },
      { id: 'b', text: "Definitely", correct: true },
      { id: 'c', text: "Definately" },
      { id: 'd', text: "Definitaly" }
    ],
    correctAnswer: "Definitely",
    explanation: "Remember it comes from 'finite' - de-finite-ly.",
    hint: "Say it slowly: de-finite-ly."
  },
  {
    id: 11,
    text: "Which is the correct homophone? The book is over ___.",
    options: [
      { id: 'a', text: "their" },
      { id: 'b', text: "there", correct: true },
      { id: 'c', text: "they're" },
      { id: 'd', text: "theire" }
    ],
    correctAnswer: "there",
    explanation: "'There' refers to a place.",
    hint: "If you mean a place, use 'there'."
  },
  {
    id: 12,
    text: "Which spelling is correct?",
    options: [
      { id: 'a', text: "Occured" },
      { id: 'b', text: "Occurred", correct: true },
      { id: 'c', text: "Ocurred" },
      { id: 'd', text: "Ocured" }
    ],
    correctAnswer: "Occurred",
    explanation: "Double 'c' and double 'r' in occurred.",
    hint: "When adding -ed to a word ending with consonant-vowel-consonant, double the final consonant."
  },
  {
    id: 13,
    text: "Choose the correct spelling:",
    options: [
      { id: 'a', text: "Priviledge" },
      { id: 'b', text: "Privilege", correct: true },
      { id: 'c', text: "Privelege" },
      { id: 'd', text: "Priveledge" }
    ],
    correctAnswer: "Privilege",
    explanation: "Remember there's no 'd' in privilege.",
    hint: "Think 'leg' at the end, not 'ledge'."
  },
  {
    id: 14,
    text: "Which spelling is correct in American English?",
    options: [
      { id: 'a', text: "Defence" },
      { id: 'b', text: "Defense", correct: true },
      { id: 'c', text: "Defenze" },
      { id: 'd', text: "Defensse" }
    ],
    correctAnswer: "Defense",
    explanation: "American English uses 'se' endings where British uses 'ce'.",
    hint: "Americans prefer 's' to 'c' in these words."
  },
  {
    id: 15,
    text: "Complete the word: HAPP__NESS",
    options: [
      { id: 'a', text: "I", correct: true },
      { id: 'b', text: "Y" },
      { id: 'c', text: "IE" },
      { id: 'd', text: "EE" }
    ],
    correctAnswer: "I",
    explanation: "When adding -ness, change 'y' to 'i' in words like happy → happiness.",
    hint: "Change 'y' to 'i' before adding -ness."
  },
  {
    id: 16,
    text: "Which spelling is correct?",
    options: [
      { id: 'a', text: "Embarass" },
      { id: 'b', text: "Embarrass", correct: true },
      { id: 'c', text: "Embaras" },
      { id: 'd', text: "Embarras" }
    ],
    correctAnswer: "Embarrass",
    explanation: "Remember double 'r' and double 's' in embarrass.",
    hint: "It's so embarrassing you need two r's and two s's."
  },
  {
    id: 17,
    text: "Choose the correct homophone: ___ going to the party.",
    options: [
      { id: 'a', text: "Their" },
      { id: 'b', text: "There" },
      { id: 'c', text: "They're", correct: true },
      { id: 'd', text: "Theire" }
    ],
    correctAnswer: "They're",
    explanation: "'They're' is the contraction for 'they are'.",
    hint: "If you can replace it with 'they are', use 'they're'."
  },
  {
    id: 18,
    text: "Which spelling is correct?",
    options: [
      { id: 'a', text: "Mischievious" },
      { id: 'b', text: "Mischievous", correct: true },
      { id: 'c', text: "Mischevious" },
      { id: 'd', text: "Mischevous" }
    ],
    correctAnswer: "Mischievous",
    explanation: "Despite common mispronunciation, it's spelled 'mischievous'.",
    hint: "No extra 'i' - just mischie-vous."
  },
  {
    id: 19,
    text: "Complete the word: ACH__VE",
    options: [
      { id: 'a', text: "IE", correct: true },
      { id: 'b', text: "EI" },
      { id: 'c', text: "EE" },
      { id: 'd', text: "IA" }
    ],
    correctAnswer: "IE",
    explanation: "Follows the 'I before E' rule since there's no preceding 'c'.",
    hint: "No 'c' before, so I before E."
  },
  {
    id: 20,
    text: "Which spelling is correct?",
    options: [
      { id: 'a', text: "Perseverence" },
      { id: 'b', text: "Perseverance", correct: true },
      { id: 'c', text: "Perseverence" },
      { id: 'd', text: "Perseverrance" }
    ],
    correctAnswer: "Perseverance",
    explanation: "Remember '-ance' ending, not '-ence'.",
    hint: "Think 'persevere' + 'ance'."
  },
  {
    id: 21,
    text: "Choose the correct spelling:",
    options: [
      { id: 'a', text: "Conscious", correct: true },
      { id: 'b', text: "Concious" },
      { id: 'c', text: "Conscous" },
      { id: 'd', text: "Consious" }
    ],
    correctAnswer: "Conscious",
    explanation: "Remember the 'sci' in the middle of conscious.",
    hint: "Think 'science' - it has 'sci' in it too."
  },
  {
    id: 22,
    text: "Which spelling is correct in British English?",
    options: [
      { id: 'a', text: "Theater" },
      { id: 'b', text: "Theatre", correct: true },
      { id: 'c', text: "Theatere" },
      { id: 'd', text: "Theatr" }
    ],
    correctAnswer: "Theatre",
    explanation: "British English uses '-re' endings where American uses '-er'.",
    hint: "UK prefers 're' endings like centre, theatre."
  },
  {
    id: 23,
    text: "Complete the word: SUCC__D",
    options: [
      { id: 'a', text: "EE", correct: true },
      { id: 'b', text: "EA" },
      { id: 'c', text: "IE" },
      { id: 'd', text: "EI" }
    ],
    correctAnswer: "EE",
    explanation: "Remember double 'c' and double 'e' in succeed.",
    hint: "You need to 'ceed' (succeed) with double e's."
  },
  {
    id: 24,
    text: "Which spelling is correct?",
    options: [
      { id: 'a', text: "Truely" },
      { id: 'b', text: "Truly", correct: true },
      { id: 'c', text: "Trueley" },
      { id: 'd', text: "Truelye" }
    ],
    correctAnswer: "Truly",
    explanation: "Drop the 'e' from 'true' when adding '-ly'.",
    hint: "Most adverbs add '-ly' without keeping the base word's 'e'."
  },
  {
    id: 25,
    text: "Choose the correct homophone: The dog wagged ___ tail.",
    options: [
      { id: 'a', text: "it's" },
      { id: 'b', text: "its", correct: true },
      { id: 'c', text: "its'" },
      { id: 'd', text: "it" }
    ],
    correctAnswer: "its",
    explanation: "'Its' shows possession; 'it's' means 'it is'.",
    hint: "If you can't replace with 'it is', use 'its'."
  },
  {
    id: 26,
    text: "Which spelling is correct?",
    options: [
      { id: 'a', text: "Argument" },
      { id: 'b', text: "Arguement" },
      { id: 'c', text: "Arguemant" },
      { id: 'd', text: "Arguemint" }
    ],
    correctAnswer: "Argument",
    explanation: "No 'e' after the 'u' in argument.",
    hint: "Drop the 'e' from 'argue' when adding '-ment'."
  },
  {
    id: 27,
    text: "Complete the word: RECOMM__D",
    options: [
      { id: 'a', text: "EN", correct: true },
      { id: 'b', text: "AN" },
      { id: 'c', text: "ON" },
      { id: 'd', text: "IN" }
    ],
    correctAnswer: "EN",
    explanation: "Remember double 'm' and 'end' at the end.",
    hint: "Think 'recommend' ends with 'mend'."
  },
  {
    id: 28,
    text: "Which spelling is correct?",
    options: [
      { id: 'a', text: "Bizzare" },
      { id: 'b', text: "Bizarre", correct: true },
      { id: 'c', text: "Bizare" },
      { id: 'd', text: "Bizzarre" }
    ],
    correctAnswer: "Bizarre",
    explanation: "One 'z' and two 'r's in bizarre.",
    hint: "Think 'one z, two r's' pattern."
  },
  {
    id: 29,
    text: "Choose the correct spelling:",
    options: [
      { id: 'a', text: "Maintenance", correct: true },
      { id: 'b', text: "Maintainance" },
      { id: 'c', text: "Maintanance" },
      { id: 'd', text: "Maintenence" }
    ],
    correctAnswer: "Maintenance",
    explanation: "Despite 'maintain', the correct spelling is 'maintenance'.",
    hint: "Think 'main' + 'tenance' (not 'maintain' + 'ance')."
  },
  {
    id: 30,
    text: "Which is the correct homophone? ___ going to rain today.",
    options: [
      { id: 'a', text: "Its" },
      { id: 'b', text: "It's", correct: true },
      { id: 'c', text: "Its'" },
      { id: 'd', text: "Its's" }
    ],
    correctAnswer: "It's",
    explanation: "'It's' is the contraction for 'it is'.",
    hint: "If you can replace with 'it is', use 'it's'."
  }
];

export default questions;