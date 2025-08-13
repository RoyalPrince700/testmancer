const questions = [
  {
    id: 1,
    text: "Which sentence is correctly punctuated?",
    options: [
      { id: 'a', text: "The students bags were stolen." },
      { id: 'b', text: "The student’s bags were stolen." },
      { id: 'c', text: "The students’ bags were stolen.", correct: true },
      { id: 'd', text: "The students bags’ were stolen." }
    ],
    correctAnswer: "The students’ bags were stolen.",
    explanation: "Students’ = plural possessive apostrophe after 's'.",
    hint: "Check the placement of the apostrophe for plural possessive nouns."
  },
  {
    id: 2,
    text: "We need ___ rice ___ beans ___ and pepper.",
    options: [
      { id: 'a', text: ", , ," },
      { id: 'b', text: ", , and", correct: true },
      { id: 'c', text: ", , ," },
      { id: 'd', text: ", and ," }
    ],
    correctAnswer: ", , and",
    explanation: "Commas between items + 'and' before last item.",
    hint: "Consider the standard punctuation for items in a list."
  },
  {
    id: 3,
    text: "___ did you score in POST-UTME?",
    options: [
      { id: 'a', text: "?", correct: true },
      { id: 'b', text: "." },
      { id: 'c', text: "!" },
      { id: 'd', text: "," }
    ],
    correctAnswer: "?",
    explanation: "Question mark ends direct questions.",
    hint: "Determine the type of sentence to choose the correct end punctuation."
  },
  {
    id: 4,
    text: "Correct apostrophe use for Lagos's population:",
    options: [
      { id: 'a', text: "Lagoss population" },
      { id: 'b', text: "Lagos’ population", correct: true },
      { id: 'c', text: "Lagoses population" },
      { id: 'd', text: "Lagos’s population" }
    ],
    correctAnswer: "Lagos’ population",
    explanation: "Singular nouns ending in 's': apostrophe only.",
    hint: "Check the rule for possessive forms of singular nouns ending in 's'."
  },
  {
    id: 5,
    text: "She shouted ___ I passed ___",
    options: [
      { id: 'a', text: ", !" },
      { id: 'b', text: "“ !”" },
      { id: 'c', text: "“ ,”" },
      { id: 'd', text: "“ !”", correct: true }
    ],
    correctAnswer: "“ !”",
    explanation: "Exclamation mark inside quotes for direct speech.",
    hint: "Consider where punctuation goes in quoted direct speech."
  },
  {
    id: 6,
    text: "Proper semicolon use:",
    options: [
      { id: 'a', text: "Although tired; he studied." },
      { id: 'b', text: "He was tired; he studied.", correct: true },
      { id: 'c', text: "He was tired; but studied." },
      { id: 'd', text: "Tired; he studied." }
    ],
    correctAnswer: "He was tired; he studied.",
    explanation: "Semicolon joins two related independent clauses.",
    hint: "Look for two complete sentences that can be joined by a semicolon."
  },
  {
    id: 7,
    text: "Bring these: pens notebooks calculators → Punctuate:",
    options: [
      { id: 'a', text: "Bring these: pens, notebooks, calculators.", correct: true },
      { id: 'b', text: "Bring these pens, notebooks, calculators." },
      { id: 'c', text: "Bring these; pens, notebooks, calculators." },
      { id: 'd', text: "Bring these, pens, notebooks, calculators." }
    ],
    correctAnswer: "Bring these: pens, notebooks, calculators.",
    explanation: "Colon introduces list + commas separate items.",
    hint: "Determine the correct punctuation to introduce a list."
  },
  {
    id: 8,
    text: "NEPA ___ took light ___ we used candles.",
    options: [
      { id: 'a', text: ", ," },
      { id: 'b', text: ", ;" },
      { id: 'c', text: "; ," },
      { id: 'd', text: ", so", correct: true }
    ],
    correctAnswer: ", so",
    explanation: "Comma + FANBOYS 'so' joins clauses.",
    hint: "Check how coordinating conjunctions join two clauses."
  },
  {
    id: 9,
    text: "___ Hurry ___ the bus is leaving!",
    options: [
      { id: 'a', text: "“ ?”" },
      { id: 'b', text: "“ !”", correct: true },
      { id: 'c', text: "! “" },
      { id: 'd', text: "“ ” !" }
    ],
    correctAnswer: "“ !”",
    explanation: "Exclamation mark inside quotation marks.",
    hint: "Focus on punctuation placement for quoted exclamations."
  },
  {
    id: 10,
    text: "The womens hostel → Correct:",
    options: [
      { id: 'a', text: "womens’ hostel" },
      { id: 'b', text: "women’s hostel", correct: true },
      { id: 'c', text: "womens hostel" },
      { id: 'd', text: "womens’s hostel" }
    ],
    correctAnswer: "women’s hostel",
    explanation: "Irregular plural: women’s.",
    hint: "Consider the correct possessive form for irregular plurals."
  },
  {
    id: 11,
    text: "Which sentence uses a dash correctly?",
    options: [
      { id: 'a', text: "She bought—plantain, yam and rice." },
      { id: 'b', text: "The answer—was obvious—to everyone." },
      { id: 'c', text: "Lagos—Nigeria’s largest city—is chaotic.", correct: true },
      { id: 'd', text: "We need—books pens—and calculators." }
    ],
    correctAnswer: "Lagos—Nigeria’s largest city—is chaotic.",
    explanation: "Dashes set off non-essential info.",
    hint: "Look for dashes used to insert extra information."
  },
  {
    id: 12,
    text: "JAMB results (release yesterday) shocked students. → Fix parentheses:",
    options: [
      { id: 'a', text: "(released yesterday)", correct: true },
      { id: 'b', text: "(released yesterday)," },
      { id: 'c', text: "(Released yesterday)" },
      { id: 'd', text: "(release yesterday)," }
    ],
    correctAnswer: "(released yesterday)",
    explanation: "Parentheses enclose grammatically complete phrases.",
    hint: "Ensure the phrase inside parentheses is grammatically correct."
  },
  {
    id: 13,
    text: "Its raining... grab umbrellas → Correct apostrophe:",
    options: [
      { id: 'a', text: "Its’" },
      { id: 'b', text: "It’s", correct: true },
      { id: 'c', text: "Its" },
      { id: 'd', text: "It is" }
    ],
    correctAnswer: "It’s",
    explanation: "It’s = contraction for 'it is'.",
    hint: "Distinguish between possessive 'its' and the contraction 'it’s'."
  },
  {
    id: 14,
    text: "The novel ___ Things Fall Apart ___ won awards.",
    options: [
      { id: 'a', text: ": “ ”" },
      { id: 'b', text: ", “ ”", correct: true },
      { id: 'c', text: "“ ” ," },
      { id: 'd', text: "; “ ”" }
    ],
    correctAnswer: ", “ ”",
    explanation: "Comma before quotes for titles.",
    hint: "Check punctuation used before quoted titles."
  },
  {
    id: 15,
    text: "Twenty five naira → Hyphenate:",
    options: [
      { id: 'a', text: "twenty five-naira" },
      { id: 'b', text: "twenty-five naira", correct: true },
      { id: 'c', text: "twenty five naira" },
      { id: 'd', text: "twenty-five-naira" }
    ],
    correctAnswer: "twenty-five naira",
    explanation: "Hyphen in compound numbers: twenty-five.",
    hint: "Look for the correct hyphenation in compound numbers."
  },
  {
    id: 16,
    text: "Did she ask ___ when is the exam ___",
    options: [
      { id: 'a', text: ", ?" },
      { id: 'b', text: "“ ?”", correct: true },
      { id: 'c', text: "“ ” ?" },
      { id: 'd', text: ", “ ” ?" }
    ],
    correctAnswer: "“ ?”",
    explanation: "Question mark inside quotes for direct questions.",
    hint: "Determine where the question mark goes in quoted questions."
  },
  {
    id: 17,
    text: "Comma splice fix: Fuel is costly, we use buses.",
    options: [
      { id: 'a', text: "Fuel is costly; we use buses.", correct: true },
      { id: 'b', text: "Fuel is costly, we use buses." },
      { id: 'c', text: "Fuel is costly we use buses." },
      { id: 'd', text: "Fuel is costly: we use buses." }
    ],
    correctAnswer: "Fuel is costly; we use buses.",
    explanation: "Semicolon replaces comma splice.",
    hint: "Identify how to fix a comma splice between two independent clauses."
  },
  {
    id: 18,
    text: "The Ogas car → Correct possessive:",
    options: [
      { id: 'a', text: "Ogas’ car" },
      { id: 'b', text: "Oga’s car", correct: true },
      { id: 'c', text: "Ogas car" },
      { id: 'd', text: "Ogas’s car" }
    ],
    correctAnswer: "Oga’s car",
    explanation: "Singular noun: Oga’s.",
    hint: "Check the possessive form for singular nouns."
  },
  {
    id: 19,
    text: "Ellipsis usage: The story was long ___ we skipped parts.",
    options: [
      { id: 'a', text: "(...)" },
      { id: 'b', text: "(…)" },
      { id: 'c', text: "...", correct: true },
      { id: 'd', text: "—" }
    ],
    correctAnswer: "...",
    explanation: "Ellipsis for omitted text: three dots.",
    hint: "Look for the correct symbol for omitting text."
  },
  {
    id: 20,
    text: "Bring: ID card, pen, water. → Error?",
    options: [
      { id: 'a', text: "No error" },
      { id: 'b', text: "Remove colon after 'bring'", correct: true },
      { id: 'c', text: "Replace colon with comma" },
      { id: 'd', text: "Add semicolon after 'pen'" }
    ],
    correctAnswer: "Remove colon after 'bring'",
    explanation: "Colon cannot follow a verb directly.",
    hint: "Check if a colon is appropriate after a verb."
  },
  {
    id: 21,
    text: "___ The protest was peaceful ___ no arrests.",
    options: [
      { id: 'a', text: "However, ;" },
      { id: 'b', text: "However; ," },
      { id: 'c', text: "However, ,", correct: true },
      { id: 'd', text: "However;" }
    ],
    correctAnswer: "However, ,",
    explanation: "Conjunctive adverb 'however' needs comma.",
    hint: "Consider punctuation for conjunctive adverbs."
  },
  {
    id: 22,
    text: "MTNs network is down → Correct apostrophe:",
    options: [
      { id: 'a', text: "MTN’s", correct: true },
      { id: 'b', text: "MTNs’" },
      { id: 'c', text: "MTNs" },
      { id: 'd', text: "MTN’" }
    ],
    correctAnswer: "MTN’s",
    explanation: "Singular company name: MTN’s.",
    hint: "Check the possessive form for singular proper nouns."
  },
  {
    id: 23,
    text: "She said ___ study early ___ results improve ___",
    options: [
      { id: 'a', text: "“ , ” ." },
      { id: 'b', text: "“ , , ” ." },
      { id: 'c', text: "“ , ” , ." },
      { id: 'd', text: "“ , ” .", correct: true }
    ],
    correctAnswer: "“ , ” .",
    explanation: "Comma inside quotes, period outside.",
    hint: "Focus on punctuation placement for quoted statements."
  },
  {
    id: 24,
    text: "The event starts at 3 30 pm → Hyphenate:",
    options: [
      { id: 'a', text: "3-30 pm" },
      { id: 'b', text: "3:30 pm", correct: true },
      { id: 'c', text: "3–30 pm" },
      { id: 'd', text: "3,30 pm" }
    ],
    correctAnswer: "3:30 pm",
    explanation: "Use colon in time: 3:30 pm.",
    hint: "Determine the correct punctuation for time notation."
  },
  {
    id: 25,
    text: "Unilag (University of Lagos) ___ is competitive.",
    options: [
      { id: 'a', text: "," },
      { id: 'b', text: ";" },
      { id: 'c', text: ":" },
      { id: 'd', text: "(no punctuation)", correct: true }
    ],
    correctAnswer: "(no punctuation)",
    explanation: "No comma after closing parenthesis.",
    hint: "Check if punctuation is needed after parentheses."
  },
  {
    id: 26,
    text: "The childrens toys → Correct:",
    options: [
      { id: 'a', text: "childrens’" },
      { id: 'b', text: "children’s", correct: true },
      { id: 'c', text: "childrens" },
      { id: 'd', text: "childrens’s" }
    ],
    correctAnswer: "children’s",
    explanation: "Irregular plural: children’s.",
    hint: "Consider the possessive form for irregular plural nouns."
  },
  {
    id: 27,
    text: "Wow ___ That goal was amazing ___",
    options: [
      { id: 'a', text: "! !" },
      { id: 'b', text: ", !", correct: true },
      { id: 'c', text: "! ," },
      { id: 'd', text: ", ," }
    ],
    correctAnswer: ", !",
    explanation: "Comma after interjection + exclamation.",
    hint: "Check punctuation for interjections and exclamations."
  },
  {
    id: 28,
    text: "He asked ___ Are you from Benin ___",
    options: [
      { id: 'a', text: ", ?" },
      { id: 'b', text: "“ ?”", correct: true },
      { id: 'c', text: "“ ” ?" },
      { id: 'd', text: ", “ ” ?" }
    ],
    correctAnswer: "“ ?”",
    explanation: "Question mark inside quotes.",
    hint: "Focus on where the question mark goes in quoted questions."
  },
  {
    id: 29,
    text: "The committee — five professors — approved it. → Dash type:",
    options: [
      { id: 'a', text: "- (hyphen)" },
      { id: 'b', text: "— (em dash)", correct: true },
      { id: 'c', text: "– (en dash)" },
      { id: 'd', text: "-- (double hyphen)" }
    ],
    correctAnswer: "— (em dash)",
    explanation: "Em dash for interruptions.",
    hint: "Identify the correct dash for setting off parenthetical information."
  },
  {
    id: 30,
    text: "I love abuja ___ lagos ___ and port harcourt.",
    options: [
      { id: 'a', text: ", ,", correct: true },
      { id: 'b', text: ", , ," },
      { id: 'c', text: "; ;" },
      { id: 'd', text: ": :" }
    ],
    correctAnswer: ", ,",
    explanation: "Commas separate items in a list.",
    hint: "Check the standard punctuation for a series of items."
  }
];

export default questions;