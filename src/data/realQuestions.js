const questions = [
  {
    id: 1,
    text: "Which sentence shows a definite future plan?",
    options: [
      { id: 'a', text: "If I were rich, I would travel" },
      { id: 'b', text: "I will attend the conference next week", correct: true },
      { id: 'c', text: "She would come if invited" },
      { id: 'd', text: "We would win if we practiced" }
    ],
    correctAnswer: "I will attend the conference next week",
    explanation: "'Will' expresses certain future actions",
    hint: "Look for a sentence with a specific future time reference"
  },
  {
    id: 2,
    text: "What is the formal way to suggest a future action?",
    options: [
      { id: 'a', text: "We will meet tomorrow" },
      { id: 'b', text: "We shall meet tomorrow", correct: true },
      { id: 'c', text: "We would meet tomorrow" },
      { id: 'd', text: "We should meet tomorrow" }
    ],
    correctAnswer: "We shall meet tomorrow",
    explanation: "'Shall' is formal for suggestions",
    hint: "British English often uses 'shall' for suggestions"
  },
  {
    id: 3,
    text: "Identify the real future sentence:",
    options: [
      { id: 'a', text: "If it rains, we would cancel" },
      { id: 'b', text: "The plane will land at 8 PM", correct: true },
      { id: 'c', text: "I would help if I could" },
      { id: 'd', text: "She would call if she knew" }
    ],
    correctAnswer: "The plane will land at 8 PM",
    explanation: "Scheduled events use 'will'",
    hint: "Look for a scheduled event with a specific time"
  },
  {
    id: 4,
    text: "Which sentence describes an imaginary situation?",
    options: [
      { id: 'a', text: "I will visit my grandparents" },
      { id: 'b', text: "If I were president, I would change policies", correct: true },
      { id: 'c', text: "They are arriving tomorrow" },
      { id: 'd', text: "We shall overcome" }
    ],
    correctAnswer: "If I were president, I would change policies",
    explanation: "'Would' shows hypothetical scenarios",
    hint: "Look for an impossible or unlikely situation"
  },
  {
    id: 5,
    text: "Choose the correct unreal future construction:",
    options: [
      { id: 'a', text: "If you study, you will pass" },
      { id: 'b', text: "If you studied, you would pass", correct: true },
      { id: 'c', text: "If you will study, you pass" },
      { id: 'd', text: "If you had studied, you would have passed" }
    ],
    correctAnswer: "If you studied, you would pass",
    explanation: "2nd conditional = If+past, would+verb",
    hint: "Second conditional uses past tense in the if-clause"
  },
  {
    id: 6,
    text: "An example of unreal future is:",
    options: [
      { id: 'a', text: "She will graduate next year" },
      { id: 'b', text: "If pigs could fly, we would see them", correct: true },
      { id: 'c', text: "I'm meeting the doctor at 3 PM" },
      { id: 'd', text: "They shall return by sunset" }
    ],
    correctAnswer: "If pigs could fly, we would see them",
    explanation: "Impossible scenarios use 'would'",
    hint: "Look for an impossible scenario"
  },
  {
    id: 7,
    text: "Which sentence combines real and unreal future?",
    options: [
      { id: 'a', text: "I will travel, but I would fly if it were cheaper", correct: true },
      { id: 'b', text: "If I were taller, I would play basketball" },
      { id: 'c', text: "They will arrive on time" },
      { id: 'd', text: "She would sing if she had confidence" }
    ],
    correctAnswer: "I will travel, but I would fly if it were cheaper",
    explanation: "Contrasts definite plan with hypothetical alternative",
    hint: "Look for a sentence with both 'will' and 'would'"
  },
  {
    id: 8,
    text: "Identify the mixed example:",
    options: [
      { id: 'a', text: "He will call, but he would visit if he could", correct: true },
      { id: 'b', text: "If it snowed, schools would close" },
      { id: 'c', text: "We shall proceed as planned" },
      { id: 'd', text: "You would win if you trained harder" }
    ],
    correctAnswer: "He will call, but he would visit if he could",
    explanation: "Combines definite future with hypothetical alternative",
    hint: "Look for a sentence with both 'will' and 'would'"
  },
  {
    id: 9,
    text: "For pre-arranged plans, we use:",
    options: [
      { id: 'a', text: "Will" },
      { id: 'b', text: "Would" },
      { id: 'c', text: "Going to" },
      { id: 'd', text: "Shall" }
    ],
    correctAnswer: "Going to",
    explanation: "'Going to' shows fixed intentions",
    hint: "Used for plans with clear evidence or preparation"
  },
  {
    id: 10,
    text: "Which shows a future action in progress?",
    options: [
      { id: 'a', text: "I will study tonight" },
      { id: 'b', text: "I will be studying at 8 PM" },
      { id: 'c', text: "I would study if I had time" },
      { id: 'd', text: "I shall study tomorrow" }
    ],
    correctAnswer: "I will be studying at 8 PM",
    explanation: "Future continuous = will be + -ing",
    hint: "Look for an action that will be ongoing at a specific time"
  },
  {
    id: 11,
    text: "'If it rains, we will cancel.' This is:",
    options: [
      { id: 'a', text: "Zero conditional" },
      { id: 'b', text: "First conditional" },
      { id: 'c', text: "Second conditional" },
      { id: 'd', text: "Third conditional" }
    ],
    correctAnswer: "First conditional",
    explanation: "Real possibility = 1st conditional",
    hint: "First conditional deals with real possibilities"
  },
  {
    id: 12,
    text: "'If I had money, I would donate.' This is:",
    options: [
      { id: 'a', text: "First conditional" },
      { id: 'b', text: "Second conditional" },
      { id: 'c', text: "Third conditional" },
      { id: 'd', text: "Mixed conditional" }
    ],
    correctAnswer: "Second conditional",
    explanation: "Unreal present = 2nd conditional",
    hint: "Second conditional deals with unreal present situations"
  },
  {
    id: 13,
    text: "Which sentence is incorrect?",
    options: [
      { id: 'a', text: "If I will see him, I will tell him" },
      { id: 'b', text: "If I see him, I will tell him" },
      { id: 'c', text: "I will call if I arrive early" },
      { id: 'd', text: "She will pass if she studies" }
    ],
    correctAnswer: "If I will see him, I will tell him",
    explanation: "'If' clauses don't use 'will'",
    hint: "Remember we don't use 'will' in the if-clause"
  },
  {
    id: 14,
    text: "Correct this sentence: 'If I would be rich, I will travel.'",
    options: [
      { id: 'a', text: "Change 'will travel' to 'would travel'" },
      { id: 'b', text: "Change 'would be' to 'am'" },
      { id: 'c', text: "Remove 'if'" },
      { id: 'd', text: "No change needed" }
    ],
    correctAnswer: "Change 'will travel' to 'would travel'",
    explanation: "Both clauses need 'would' for unreal future",
    hint: "Unreal conditionals need consistency in both clauses"
  },
  {
    id: 15,
    text: "'By 2025, I will have graduated.' This is:",
    options: [
      { id: 'a', text: "Future perfect" },
      { id: 'b', text: "Future continuous" },
      { id: 'c', text: "Real future" },
      { id: 'd', text: "Unreal future" }
    ],
    correctAnswer: "Future perfect",
    explanation: "'Will have + past participle' shows completion",
    hint: "Future perfect talks about completion before a future time"
  },
  {
    id: 16,
    text: "'If I had known, I would have come.' This is:",
    options: [
      { id: 'a', text: "Real future" },
      { id: 'b', text: "Unreal present" },
      { id: 'c', text: "Unreal past" },
      { id: 'd', text: "Mixed conditional" }
    ],
    correctAnswer: "Unreal past",
    explanation: "3rd conditional = past unreal",
    hint: "Third conditional deals with past hypotheticals"
  },
  {
    id: 17,
    text: "For weather predictions based on evidence, use:",
    options: [
      { id: 'a', text: "Will" },
      { id: 'b', text: "Would" },
      { id: 'c', text: "Going to" },
      { id: 'd', text: "Shall" }
    ],
    correctAnswer: "Going to",
    explanation: "'Going to' shows evidence-based forecasts",
    hint: "Used when there's visible evidence for the prediction"
  },
  {
    id: 18,
    text: "To make a polite future inquiry, say:",
    options: [
      { id: 'a', text: "Will you help me?" },
      { id: 'b', text: "Would you help me?" },
      { id: 'c', text: "Will you be helping me?" },
      { id: 'd', text: "Do you help me?" }
    ],
    correctAnswer: "Will you be helping me?",
    explanation: "'Will you be + -ing' is most polite",
    hint: "Future continuous is often more polite than simple future"
  },
  {
    id: 19,
    text: "Which is correct Nigerian English?",
    options: [
      { id: 'a', text: "I will be going to market tomorrow" },
      { id: 'b', text: "I am going to market tomorrow" },
      { id: 'c', text: "I would go to market if I have time" },
      { id: 'd', text: "I shall be going to market" }
    ],
    correctAnswer: "I am going to market tomorrow",
    explanation: "Present continuous for fixed plans",
    hint: "Nigerian English often uses present continuous for future"
  },
  {
    id: 20,
    text: "Correct this: 'If I will see am, I will greet am.'",
    options: [
      { id: 'a', text: "If I see am, I will greet am" },
      { id: 'b', text: "If I see him, I will greet him" },
      { id: 'c', text: "If I would see him, I greet him" },
      { id: 'd', text: "If I seen him, I greet him" }
    ],
    correctAnswer: "If I see him, I will greet him",
    explanation: "Remove 'will' in if-clause; use standard pronouns",
    hint: "Remember standard English pronouns and if-clause rules"
  },
  {
    id: 21,
    text: "Identify the real future:",
    options: [
      { id: 'a', text: "If wishes were horses, beggars would ride" },
      { id: 'b', text: "The UNILAG exams will start in May" },
      { id: 'c', text: "I would speak better if I practiced" },
      { id: 'd', text: "If I were you, I'd apologize" }
    ],
    correctAnswer: "The UNILAG exams will start in May",
    explanation: "Scheduled event uses 'will'",
    hint: "Look for a definite scheduled event"
  },
  {
    id: 22,
    text: "Choose the unreal future:",
    options: [
      { id: 'a', text: "Jollof rice will be served at the party" },
      { id: 'b', text: "If jollof rice were spicy, I would eat more" },
      { id: 'c', text: "The chef is going to prepare it" },
      { id: 'd', text: "We shall eat at 7 PM" }
    ],
    correctAnswer: "If jollof rice were spicy, I would eat more",
    explanation: "Hypothetical taste preference uses 'would'",
    hint: "Look for a hypothetical situation about taste"
  },
  {
    id: 23,
    text: "Which mixes real and unreal?",
    options: [
      { id: 'a', text: "I will study medicine, but I would choose law if art paid better" },
      { id: 'b', text: "If it rains, we will stay home" },
      { id: 'c', text: "She would visit if she had money" },
      { id: 'd', text: "They shall arrive by noon" }
    ],
    correctAnswer: "I will study medicine, but I would choose law if art paid better",
    explanation: "Contrasts real plan with hypothetical alternative",
    hint: "Look for a contrast between definite and hypothetical choices"
  },
  {
    id: 24,
    text: "Correct this error: 'If Buhari would be president again, Nigeria will change.'",
    options: [
      { id: 'a', text: "Change 'will change' to 'would change'" },
      { id: 'b', text: "Change 'would be' to 'is'" },
      { id: 'c', text: "Remove 'if'" },
      { id: 'd', text: "No error" }
    ],
    correctAnswer: "Change 'will change' to 'would change'",
    explanation: "Unreal condition needs 'would' in both clauses",
    hint: "Maintain consistency in unreal conditional sentences"
  },
  {
    id: 25,
    text: "'By next June, she ___ her NYSC.' Complete with:",
    options: [
      { id: 'a', text: "will complete" },
      { id: 'b', text: "will be completing" },
      { id: 'c', text: "will have completed" },
      { id: 'd', text: "would complete" }
    ],
    correctAnswer: "will have completed",
    explanation: "Future perfect for actions completed before a future time",
    hint: "Future perfect emphasizes completion before a future point"
  },
  {
    id: 26,
    text: "For an unlikely future possibility, use:",
    options: [
      { id: 'a', text: "Will" },
      { id: 'b', text: "Would" },
      { id: 'c', text: "Going to" },
      { id: 'd', text: "Shall" }
    ],
    correctAnswer: "Would",
    explanation: "'Would' expresses low probability",
    hint: "Used for things that probably won't happen"
  },
  {
    id: 27,
    text: "Which question is grammatically correct?",
    options: [
      { id: 'a', text: "Will you be needing accommodations?" },
      { id: 'b', text: "Would you need accommodations?" },
      { id: 'c', text: "Do you be needing accommodations?" },
      { id: 'd', text: "Are you needing accommodations?" }
    ],
    correctAnswer: "Will you be needing accommodations?",
    explanation: "'Will you be + -ing' is the correct polite form",
    hint: "Future continuous is often used for polite inquiries"
  },
  {
    id: 28,
    text: "Identify the future perfect continuous:",
    options: [
      { id: 'a', text: "I will work" },
      { id: 'b', text: "I will be working" },
      { id: 'c', text: "I will have worked" },
      { id: 'd', text: "I will have been working" }
    ],
    correctAnswer: "I will have been working",
    explanation: "'Will have been + -ing' shows duration until a future time",
    hint: "This tense emphasizes duration up to a future point"
  },
  {
    id: 29,
    text: "'If ___ late, I ___ you.' Complete correctly:",
    options: [
      { id: 'a', text: "I will be, will call" },
      { id: 'b', text: "I am, will call" },
      { id: 'c', text: "I would be, would call" },
      { id: 'd', text: "I were, would call" }
    ],
    correctAnswer: "I am, will call",
    explanation: "Real condition (1st conditional) structure",
    hint: "First conditional uses present simple in if-clause"
  },
  {
    id: 30,
    text: "The sentence 'If I had studied, I would have passed' refers to:",
    options: [
      { id: 'a', text: "Present unreal" },
      { id: 'b', text: "Past unreal" },
      { id: 'c', text: "Future unreal" },
      { id: 'd', text: "Real past" }
    ],
    correctAnswer: "Past unreal",
    explanation: "3rd conditional discusses missed past opportunities",
    hint: "This structure expresses regret about the past"
  }
];

export default questions;