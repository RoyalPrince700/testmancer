// Quiz questions for Indices and Logarithms (matching IndicesPages.jsx content)
const questions = [
  {
    id: 1,
    text: "Simplify: 2³ × 2²",
    options: [
      { id: 'a', text: "2⁵", correct: true },
      { id: 'b', text: "2⁶" },
      { id: 'c', text: "4⁵" },
      { id: 'd', text: "4⁶" }
    ],
    correctAnswer: "2⁵",
    explanation: "Rule 1: When multiplying with the same base, add the powers: 2³ × 2² = 2³⁺² = 2⁵",
    hint: "Use the rule: aᵐ × aⁿ = aᵐ⁺ⁿ"
  },
  {
    id: 2,
    text: "Evaluate: 5⁴ ÷ 5²",
    options: [
      { id: 'a', text: "5¹" },
      { id: 'b', text: "5²", correct: true },
      { id: 'c', text: "5⁶" },
      { id: 'd', text: "25²" }
    ],
    correctAnswer: "5²",
    explanation: "Rule 2: When dividing with the same base, subtract the powers: 5⁴ ÷ 5² = 5⁴⁻² = 5²",
    hint: "Use the rule: aᵐ ÷ aⁿ = aᵐ⁻ⁿ"
  },
  {
    id: 3,
    text: "Simplify: (3²)³",
    options: [
      { id: 'a', text: "3⁵" },
      { id: 'b', text: "3⁶", correct: true },
      { id: 'c', text: "9³" },
      { id: 'd', text: "27" }
    ],
    correctAnswer: "3⁶",
    explanation: "Rule 3: Power of a power - multiply the powers: (3²)³ = 3²×³ = 3⁶",
    hint: "Use the rule: (aᵐ)ⁿ = aᵐ×ⁿ"
  },
  {
    id: 4,
    text: "Expand: (2x)³",
    options: [
      { id: 'a', text: "6x³" },
      { id: 'b', text: "2x³" },
      { id: 'c', text: "8x³", correct: true },
      { id: 'd', text: "8x" }
    ],
    correctAnswer: "8x³",
    explanation: "Rule 4: Power of a product: (2x)³ = 2³ × x³ = 8x³",
    hint: "Use the rule: (ab)ⁿ = aⁿ × bⁿ"
  },
  {
    id: 5,
    text: "Simplify: (2/3)²",
    options: [
      { id: 'a', text: "4/9", correct: true },
      { id: 'b', text: "2/9" },
      { id: 'c', text: "4/6" },
      { id: 'd', text: "2/3" }
    ],
    correctAnswer: "4/9",
    explanation: "Rule 5: Power of a fraction: (2/3)² = 2²/3² = 4/9",
    hint: "Use the rule: (a/b)ⁿ = aⁿ/bⁿ"
  },
  {
    id: 6,
    text: "What is the value of 7⁰?",
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "1", correct: true },
      { id: 'c', text: "7" },
      { id: 'd', text: "undefined" }
    ],
    correctAnswer: "1",
    explanation: "Rule 6: Any number (except 0) to the power of 0 equals 1: 7⁰ = 1",
    hint: "Remember: a⁰ = 1 (where a ≠ 0)"
  },
  {
    id: 7,
    text: "Simplify: 2⁻³",
    options: [
      { id: 'a', text: "-8" },
      { id: 'b', text: "1/8", correct: true },
      { id: 'c', text: "-1/8" },
      { id: 'd', text: "8" }
    ],
    correctAnswer: "1/8",
    explanation: "Rule 7: Negative power means reciprocal: 2⁻³ = 1/2³ = 1/8",
    hint: "Use the rule: a⁻ⁿ = 1/aⁿ"
  },
  {
    id: 8,
    text: "What is 8^(1/3)?",
    options: [
      { id: 'a', text: "1/8" },
      { id: 'b', text: "2", correct: true },
      { id: 'c', text: "3" },
      { id: 'd', text: "8/3" }
    ],
    correctAnswer: "2",
    explanation: "Fractional power: 8^(1/3) = ³√8 = 2, because 2³ = 8",
    hint: "a^(1/n) = ⁿ√a"
  },
  {
    id: 9,
    text: "If log₂8 = x, what is x?",
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "3", correct: true },
      { id: 'c', text: "4" },
      { id: 'd', text: "8" }
    ],
    correctAnswer: "3",
    explanation: "Since 2³ = 8, therefore log₂8 = 3",
    hint: "Logarithm asks: 'What power gives us 8 when base is 2?'"
  },
  {
    id: 10,
    text: "Simplify: log₃(9 × 27)",
    options: [
      { id: 'a', text: "4" },
      { id: 'b', text: "5", correct: true },
      { id: 'c', text: "6" },
      { id: 'd', text: "243" }
    ],
    correctAnswer: "5",
    explanation: "Product rule: log₃(9 × 27) = log₃9 + log₃27 = 2 + 3 = 5",
    hint: "Use: logᵦ(M × N) = logᵦM + logᵦN"
  },
  {
    id: 11,
    text: "What is x² × x³?",
    options: [
      { id: 'a', text: "x⁵", correct: true },
      { id: 'b', text: "x⁶" },
      { id: 'c', text: "2x⁵" },
      { id: 'd', text: "x²³" }
    ],
    correctAnswer: "x⁵",
    explanation: "Add the powers when multiplying with same base: x² × x³ = x²⁺³ = x⁵",
    hint: "Use the multiplication rule for indices"
  },
  {
    id: 12,
    text: "Evaluate: 9^(1/2)",
    options: [
      { id: 'a', text: "3", correct: true },
      { id: 'b', text: "4.5" },
      { id: 'c', text: "1/9" },
      { id: 'd', text: "81" }
    ],
    correctAnswer: "3",
    explanation: "9^(1/2) = √9 = 3",
    hint: "Fractional power 1/2 means square root"
  },
  {
    id: 13,
    text: "Simplify: (4x²)⁰",
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "1", correct: true },
      { id: 'c', text: "4x²" },
      { id: 'd', text: "4" }
    ],
    correctAnswer: "1",
    explanation: "Any non-zero expression to the power of 0 equals 1: (4x²)⁰ = 1",
    hint: "Remember the zero power rule"
  },
  {
    id: 14,
    text: "What is log₁₀100?",
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "2", correct: true },
      { id: 'c', text: "10" },
      { id: 'd', text: "100" }
    ],
    correctAnswer: "2",
    explanation: "Since 10² = 100, therefore log₁₀100 = 2",
    hint: "What power of 10 gives 100?"
  },
  {
    id: 15,
    text: "Simplify: 6⁵ ÷ 6³",
    options: [
      { id: 'a', text: "6¹" },
      { id: 'b', text: "6²", correct: true },
      { id: 'c', text: "6⁸" },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "6²",
    explanation: "Subtract powers when dividing: 6⁵ ÷ 6³ = 6⁵⁻³ = 6²",
    hint: "Use the division rule for indices"
  },
  {
    id: 16,
    text: "What is log₅(25/5)?",
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "1", correct: true },
      { id: 'c', text: "2" },
      { id: 'd', text: "5" }
    ],
    correctAnswer: "1",
    explanation: "Quotient rule: log₅(25/5) = log₅25 - log₅5 = 2 - 1 = 1",
    hint: "Use: logᵦ(M/N) = logᵦM - logᵦN"
  },
  {
    id: 17,
    text: "Evaluate: (5²)⁻¹",
    options: [
      { id: 'a', text: "1/25", correct: true },
      { id: 'b', text: "-25" },
      { id: 'c', text: "25" },
      { id: 'd', text: "-1/25" }
    ],
    correctAnswer: "1/25",
    explanation: "(5²)⁻¹ = 5⁻² = 1/5² = 1/25",
    hint: "Negative power means reciprocal"
  },
  {
    id: 18,
    text: "What is log₂(2⁴)?",
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "4", correct: true },
      { id: 'c', text: "8" },
      { id: 'd', text: "16" }
    ],
    correctAnswer: "4",
    explanation: "Power rule: log₂(2⁴) = 4 × log₂2 = 4 × 1 = 4",
    hint: "Use: logᵦ(Mᵖ) = p × logᵦM"
  },
  {
    id: 19,
    text: "Simplify: 3⁴ × 3⁻²",
    options: [
      { id: 'a', text: "3²", correct: true },
      { id: 'b', text: "3⁶" },
      { id: 'c', text: "3⁻⁸" },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "3²",
    explanation: "Add the powers: 3⁴ × 3⁻² = 3⁴⁺⁽⁻²⁾ = 3² = 9",
    hint: "Remember to add positive and negative powers"
  },
  {
    id: 20,
    text: "What is 16^(1/4)?",
    options: [
      { id: 'a', text: "2", correct: true },
      { id: 'b', text: "4" },
      { id: 'c', text: "8" },
      { id: 'd', text: "1/16" }
    ],
    correctAnswer: "2",
    explanation: "16^(1/4) = ⁴√16 = 2, because 2⁴ = 16",
    hint: "Fractional power 1/4 means fourth root"
  },
  {
    id: 21,
    text: "Evaluate: log₃1",
    options: [
      { id: 'a', text: "0", correct: true },
      { id: 'b', text: "1" },
      { id: 'c', text: "3" },
      { id: 'd', text: "undefined" }
    ],
    correctAnswer: "0",
    explanation: "Logarithm of 1 to any base is 0: log₃1 = 0, because 3⁰ = 1",
    hint: "logᵦ1 = 0 for any positive base b"
  },
  {
    id: 22,
    text: "Simplify: (3y)²",
    options: [
      { id: 'a', text: "6y²" },
      { id: 'b', text: "3y²" },
      { id: 'c', text: "9y²", correct: true },
      { id: 'd', text: "9y" }
    ],
    correctAnswer: "9y²",
    explanation: "Power of a product: (3y)² = 3² × y² = 9y²",
    hint: "Apply the power to each factor"
  },
  {
    id: 23,
    text: "What is log₅5?",
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "1", correct: true },
      { id: 'c', text: "5" },
      { id: 'd', text: "25" }
    ],
    correctAnswer: "1",
    explanation: "Log of base to itself is 1: log₅5 = 1, because 5¹ = 5",
    hint: "logᵦb = 1 for any positive base b"
  },
  {
    id: 24,
    text: "Evaluate: 27^(1/3)",
    options: [
      { id: 'a', text: "3", correct: true },
      { id: 'b', text: "9" },
      { id: 'c', text: "1/27" },
      { id: 'd', text: "81" }
    ],
    correctAnswer: "3",
    explanation: "27^(1/3) = ³√27 = 3, because 3³ = 27",
    hint: "Cube root of 27"
  },
  {
    id: 25,
    text: "Simplify: a⁶ ÷ a²",
    options: [
      { id: 'a', text: "a³" },
      { id: 'b', text: "a⁴", correct: true },
      { id: 'c', text: "a⁸" },
      { id: 'd', text: "a¹²" }
    ],
    correctAnswer: "a⁴",
    explanation: "Subtract powers when dividing: a⁶ ÷ a² = a⁶⁻² = a⁴",
    hint: "Use the division rule"
  },
  {
    id: 26,
    text: "What is (1/2)⁻³?",
    options: [
      { id: 'a', text: "1/8" },
      { id: 'b', text: "8", correct: true },
      { id: 'c', text: "-8" },
      { id: 'd', text: "-1/8" }
    ],
    correctAnswer: "8",
    explanation: "(1/2)⁻³ = (2/1)³ = 2³ = 8",
    hint: "Negative power of a fraction flips it"
  },
  {
    id: 27,
    text: "Evaluate: log₄64",
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "3", correct: true },
      { id: 'c', text: "4" },
      { id: 'd', text: "16" }
    ],
    correctAnswer: "3",
    explanation: "Since 4³ = 64, therefore log₄64 = 3",
    hint: "What power of 4 gives 64?"
  },
  {
    id: 28,
    text: "Simplify: (x³)⁴",
    options: [
      { id: 'a', text: "x⁷" },
      { id: 'b', text: "x¹²", correct: true },
      { id: 'c', text: "x⁸¹" },
      { id: 'd', text: "4x³" }
    ],
    correctAnswer: "x¹²",
    explanation: "Power of a power: (x³)⁴ = x³×⁴ = x¹²",
    hint: "Multiply the powers"
  },
  {
    id: 29,
    text: "What is 100⁰?",
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "1", correct: true },
      { id: 'c', text: "100" },
      { id: 'd', text: "10000" }
    ],
    correctAnswer: "1",
    explanation: "Any non-zero number to the power of 0 equals 1: 100⁰ = 1",
    hint: "Zero power rule"
  },
  {
    id: 30,
    text: "Evaluate: log₇(49 × 7)",
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "3", correct: true },
      { id: 'c', text: "4" },
      { id: 'd', text: "343" }
    ],
    correctAnswer: "3",
    explanation: "Product rule: log₇(49 × 7) = log₇49 + log₇7 = 2 + 1 = 3",
    hint: "Use the logarithm product rule"
  }
];

export default questions;
