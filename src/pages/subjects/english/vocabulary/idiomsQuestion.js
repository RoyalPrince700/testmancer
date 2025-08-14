const IdiomQuestions = [
  {
    id: 1,
    text: "What does 'hit the sack' mean?",
    options: [
      { id: 'a', text: "Go to sleep", correct: true },
      { id: 'b', text: "Punch a bag" },
      { id: 'c', text: "Exercise vigorously" },
      { id: 'd', text: "Store something away" }
    ],
    correctAnswer: "Go to sleep",
    explanation: "This idiom means to go to bed, not literally hitting anything.",
    hint: "Think about what you do when you're very tired"
  },
  {
    id: 2,
    text: "In Nigerian context, what does 'long legs' mean?",
    options: [
      { id: 'a', text: "Tall person" },
      { id: 'b', text: "Influential connections", correct: true },
      { id: 'c', text: "Good runner" },
      { id: 'd', text: "Fashionable trousers" }
    ],
    correctAnswer: "Influential connections",
    explanation: "In Nigerian English, 'long legs' refers to having powerful contacts who can help you.",
    hint: "Think about what might help you 'reach' further in society"
  },
  {
    id: 3,
    text: "What does 'bite the bullet' mean?",
    options: [
      { id: 'a', text: "Chew something hard" },
      { id: 'b', text: "Make a bad decision" },
      { id: 'c', text: "Endure a painful situation", correct: true },
      { id: 'd', text: "Get dental treatment" }
    ],
    correctAnswer: "Endure a painful situation",
    explanation: "This idiom means to endure a painful or difficult situation bravely.",
    hint: "Historically, soldiers bit bullets during surgery without anesthesia"
  },
  {
    id: 4,
    text: "What is the meaning of the Nigerian idiom 'monkey dey work, baboon dey chop'?",
    options: [
      { id: 'a', text: "Animals working together" },
      { id: 'b', text: "Zoo management" },
      { id: 'c', text: "Unfair labor distribution", correct: true },
      { id: 'd', text: "Jungle hierarchy" }
    ],
    correctAnswer: "Unfair labor distribution",
    explanation: "This Nigerian idiom describes situations where some work hard while others benefit unfairly.",
    hint: "Think about workplace inequality"
  },
  {
    id: 5,
    text: "What does 'cost an arm and a leg' mean?",
    options: [
      { id: 'a', text: "Be very expensive", correct: true },
      { id: 'b', text: "Require surgery" },
      { id: 'c', text: "Cause physical harm" },
      { id: 'd', text: "Need great effort" }
    ],
    correctAnswer: "Be very expensive",
    explanation: "This idiom means something is extremely costly, not literally about limbs.",
    hint: "Think about what you'd say about iPhone prices in Nigeria"
  },
  {
    id: 6,
    text: "What does the Yoruba proverb 'Àgbà kì í wà lọ́jà k'órí omo tuntun ó wọ' mean?",
    options: [
      { id: 'a', text: "Elders should shop daily" },
      { id: 'b', text: "Elders' presence prevents chaos", correct: true },
      { id: 'c', text: "Markets are for young people" },
      { id: 'd', text: "New leaders emerge in markets" }
    ],
    correctAnswer: "Elders' presence prevents chaos",
    explanation: "This proverb means that the presence of elders maintains order (literally 'An elder doesn't stay in the market for a child's head to be broken').",
    hint: "Think about the role of elders in Nigerian society"
  },
  {
    id: 7,
    text: "What does 'japa' mean in Nigerian pidgin?",
    options: [
      { id: 'a', text: "Dance style" },
      { id: 'b', text: "Celebrate loudly" },
      { id: 'c', text: "Escape quickly", correct: true },
      { id: 'd', text: "Work hard" }
    ],
    correctAnswer: "Escape quickly",
    explanation: "Derived from 'jump apart', it means to flee or leave quickly, especially from trouble.",
    hint: "Think what someone might do when police arrive"
  },
  {
    id: 8,
    text: "What does 'let the cat out of the bag' mean?",
    options: [
      { id: 'a', text: "Release an animal" },
      { id: 'b', text: "Prepare for travel" },
      { id: 'c', text: "Be careless" },
      { id: 'd', text: "Reveal a secret", correct: true }
    ],
    correctAnswer: "Reveal a secret",
    explanation: "This idiom means to accidentally disclose secret information.",
    hint: "Think about what happens when a secret is no longer hidden"
  },
  {
    id: 9,
    text: "What does 'kill two birds with one stone' mean?",
    options: [
      { id: 'a', text: "Achieve two goals at once", correct: true },
      { id: 'b', text: "Be violent" },
      { id: 'c', text: "Hunt efficiently" },
      { id: 'd', text: "Waste resources" }
    ],
    correctAnswer: "Achieve two goals at once",
    explanation: "This means to accomplish two objectives with a single action.",
    hint: "Think about efficiency in solving problems"
  },
  {
    id: 10,
    text: "In Nigerian context, what does 'when the goat is full, it dances on the rope' mean?",
    options: [
      { id: 'a', text: "People misbehave when comfortable", correct: true },
      { id: 'b', text: "Animals enjoy music" },
      { id: 'c', text: "Hunger causes disobedience" },
      { id: 'd', text: "Ropes are dangerous" }
    ],
    correctAnswer: "People misbehave when comfortable",
    explanation: "This Nigerian idiom means people often act recklessly when they feel secure or satisfied.",
    hint: "Think about how behavior changes when needs are met"
  },
  {
    id: 11,
    text: "What does 'black sheep' mean?",
    options: [
      { id: 'a', text: "Rare animal" },
      { id: 'b', text: "Night worker" },
      { id: 'c', text: "Family outcast", correct: true },
      { id: 'd', text: "Dangerous person" }
    ],
    correctAnswer: "Family outcast",
    explanation: "This refers to someone who is different or disapproved of in a family/group.",
    hint: "Think about standing out negatively in a group"
  },
  {
    id: 12,
    text: "What does 'hold your horses' mean?",
    options: [
      { id: 'a', text: "Care for animals" },
      { id: 'b', text: "Stand strong" },
      { id: 'c', text: "Be patient", correct: true },
      { id: 'd', text: "Prepare for battle" }
    ],
    correctAnswer: "Be patient",
    explanation: "This means to wait or slow down, originating from controlling horse-drawn carriages.",
    hint: "Think about what you'd say to someone rushing"
  },
  {
    id: 13,
    text: "What does 'spill the beans' mean?",
    options: [
      { id: 'a', text: "Make a mess" },
      { id: 'b', text: "Reveal secret information", correct: true },
      { id: 'c', text: "Cook improperly" },
      { id: 'd', text: "Waste resources" }
    ],
    correctAnswer: "Reveal secret information",
    explanation: "This means to accidentally disclose confidential information.",
    hint: "Think about what happens when secrets come out"
  },
  {
    id: 14,
    text: "What does 'piece of cake' mean?",
    options: [
      { id: 'a', text: "Delicious food" },
      { id: 'b', text: "Celebration" },
      { id: 'c', text: "Small portion" },
      { id: 'd', text: "Easy task", correct: true }
    ],
    correctAnswer: "Easy task",
    explanation: "This means something is very easy to accomplish.",
    hint: "Think about how you'd describe a very simple exam"
  },
  {
    id: 15,
    text: "What does 'bring home the bacon' mean?",
    options: [
      { id: 'a', text: "Buy groceries" },
      { id: 'b', text: "Cook breakfast" },
      { id: 'c', text: "Earn income for family", correct: true },
      { id: 'd', text: "Win a prize" }
    ],
    correctAnswer: "Earn income for family",
    explanation: "This means to earn money to support one's family.",
    hint: "Think about the main provider in a household"
  },
  {
    id: 16,
    text: "What does 'read between the lines' mean?",
    options: [
      { id: 'a', text: "Find hidden meaning", correct: true },
      { id: 'b', text: "Have good eyesight" },
      { id: 'c', text: "Study intensely" },
      { id: 'd', text: "Skip unimportant text" }
    ],
    correctAnswer: "Find hidden meaning",
    explanation: "This means to understand the implied meaning beyond the literal words.",
    hint: "Think about decoding subtle messages"
  },
  {
    id: 17,
    text: "What does 'a dime a dozen' mean?",
    options: [
      { id: 'a', text: "Very cheap" },
      { id: 'b', text: "American currency" },
      { id: 'c', text: "Very common", correct: true },
      { id: 'd', text: "Small quantity" }
    ],
    correctAnswer: "Very common",
    explanation: "This means something is extremely common and therefore not special.",
    hint: "Think about how you'd describe something everywhere"
  },
  {
    id: 18,
    text: "What does 'on the same page' mean?",
    options: [
      { id: 'a', text: "Studying together" },
      { id: 'b', text: "Sharing resources" },
      { id: 'c', text: "Reading the same book" },
      { id: 'd', text: "In agreement", correct: true }
    ],
    correctAnswer: "In agreement",
    explanation: "This means people share the same understanding or opinion about something.",
    hint: "Think about team coordination"
  },
  {
    id: 19,
    text: "What does 'chicken change' mean in Nigerian context?",
    options: [
      { id: 'a', text: "Small amount of money", correct: true },
      { id: 'b', text: "Poultry farming" },
      { id: 'c', text: "Bird behavior" },
      { id: 'd', text: "Fast food" }
    ],
    correctAnswer: "Small amount of money",
    explanation: "In Nigerian English, this refers to an insignificant amount of money.",
    hint: "Think about what rich people might call N500"
  },
  {
    id: 20,
    text: "What does 'God dey' mean in Nigerian pidgin?",
    options: [
      { id: 'a', text: "Church is open" },
      { id: 'b', text: "Have hope", correct: true },
      { id: 'c', text: "God exists" },
      { id: 'd', text: "Divine intervention" }
    ],
    correctAnswer: "Have hope",
    explanation: "This Nigerian pidgin phrase means 'have faith' or 'don't worry, God is in control'.",
    hint: "Think what you'd say to encourage someone"
  },
  {
    id: 21,
    text: "What does 'kick the bucket' mean?",
    options: [
      { id: 'a', text: "Show anger" },
      { id: 'b', text: "Die", correct: true },
      { id: 'c', text: "Start a game" },
      { id: 'd', text: "Clean vigorously" }
    ],
    correctAnswer: "Die",
    explanation: "This humorous idiom means to die, with uncertain origins.",
    hint: "Think about what you wouldn't want to do literally"
  },
  {
    id: 22,
    text: "What does 'na so so so?' express in Nigerian pidgin?",
    options: [
      { id: 'a', text: "Dismissive reaction", correct: true },
      { id: 'b', text: "Great excitement" },
      { id: 'c', text: "Mathematical equation" },
      { id: 'd', text: "Musical rhythm" }
    ],
    correctAnswer: "Dismissive reaction",
    explanation: "This Nigerian expression shows indifference or dismissal of something unimportant.",
    hint: "Think how you'd react to unimpressive news"
  },
  {
    id: 23,
    text: "What does the Yoruba proverb 'Ọmọdé gbọ́n, àgbà gbọ́n, la fi dá Ilé-Ifẹ̀' mean?",
    options: [
      { id: 'a', text: "Only elders are wise" },
      { id: 'b', text: "Children should be silent" },
      { id: 'c', text: "Ancient cities were better" },
      { id: 'd', text: "Wisdom comes from both young and old", correct: true }
    ],
    correctAnswer: "Wisdom comes from both young and old",
    explanation: "Literally 'The child is wise, the elder is wise, thus was Ile-Ife founded' - meaning both generations contribute wisdom.",
    hint: "Think about intergenerational knowledge"
  },
  {
    id: 24,
    text: "What does 'padi' mean in Nigerian pidgin?",
    options: [
      { id: 'a', text: "Father" },
      { id: 'b', text: "Money" },
      { id: 'c', text: "Friend", correct: true },
      { id: 'd', text: "Problem" }
    ],
    correctAnswer: "Friend",
    explanation: "Derived from 'partner', this Nigerian pidgin term means close friend.",
    hint: "Think how you'd refer to your best buddy"
  },
  {
    id: 25,
    text: "What does 'wahala' mean in Nigerian pidgin?",
    options: [
      { id: 'a', text: "Trouble", correct: true },
      { id: 'b', text: "Celebration" },
      { id: 'c', text: "Money" },
      { id: 'd', text: "Food" }
    ],
    correctAnswer: "Trouble",
    explanation: "This Nigerian pidgin term (from Hausa) means problems or difficulties.",
    hint: "Think what you'd say when things go wrong"
  },
  {
    id: 26,
    text: "What does 'jagajaga' mean in Nigerian pidgin?",
    options: [
      { id: 'a', text: "Dancing style" },
      { id: 'b', text: "New clothes" },
      { id: 'c', text: "Excellent" },
      { id: 'd', text: "Worn out/tired", correct: true }
    ],
    correctAnswer: "Worn out/tired",
    explanation: "This Nigerian slang describes something in disarray or a person exhausted.",
    hint: "Think how you'd describe a broken-down car"
  },
  {
    id: 27,
    text: "What does 'kpakando' mean in Nigerian slang?",
    options: [
      { id: 'a', text: "Foolish" },
      { id: 'b', text: "Hungry" },
      { id: 'c', text: "Excellent", correct: true },
      { id: 'd', text: "Slow" }
    ],
    correctAnswer: "Excellent",
    explanation: "This Nigerian slang term means something is top-quality or outstanding.",
    hint: "Think how you'd describe a perfect performance"
  },
  {
    id: 28,
    text: "What does 'kolo' mean in Nigerian slang?",
    options: [
      { id: 'a', text: "Rich" },
      { id: 'b', text: "Crazy", correct: true },
      { id: 'c', text: "Intelligent" },
      { id: 'd', text: "Lazy" }
    ],
    correctAnswer: "Crazy",
    explanation: "This Nigerian slang describes someone as mentally unstable or acting irrationally.",
    hint: "Think what you'd say about outrageous behavior"
  },
  {
    id: 29,
    text: "What does 'chop' mean in Nigerian pidgin?",
    options: [
      { id: 'a', text: "Cut" },
      { id: 'b', text: "Run" },
      { id: 'c', text: "Work" },
      { id: 'd', text: "Eat/food", correct: true }
    ],
    correctAnswer: "Eat/food",
    explanation: "This Nigerian pidgin term means to eat or refers to food generally.",
    hint: "Think what you'd say at meal time"
  },
  {
    id: 30,
    text: "What does 'jor' mean in Nigerian pidgin expressions?",
    options: [
      { id: 'a', text: "Please" },
      { id: 'b', text: "Hurry up" },
      { id: 'c', text: "Thank you" },
      { id: 'd', text: "Go away/leave me alone", correct: true }
    ],
    correctAnswer: "Go away/leave me alone",
    explanation: "This Nigerian pidgin term is used to dismiss someone or ask them to leave.",
    hint: "Think what you'd say when annoyed with someone"
  }
];

export default IdiomQuestions;