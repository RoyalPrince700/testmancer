// Quiz questions for Sequences and Series (matching SequencePages.jsx content)
const questions = [
  {
    id: 1,
    text: "What is the next term in the sequence: 2, 5, 8, 11, ...?",
    options: [
      { id: 'a', text: "13" },
      { id: 'b', text: "14", correct: true },
      { id: 'c', text: "15" },
      { id: 'd', text: "16" }
    ],
    correctAnswer: "14",
    explanation: "This is an arithmetic sequence with common difference d = 3. Next term: 11 + 3 = 14",
    hint: "Find the common difference by subtracting consecutive terms"
  },
  {
    id: 2,
    text: "In the AP 5, 8, 11, ..., what is the 10th term?",
    options: [
      { id: 'a', text: "32", correct: true },
      { id: 'b', text: "29" },
      { id: 'c', text: "35" },
      { id: 'd', text: "38" }
    ],
    correctAnswer: "32",
    explanation: "Using Tₙ = a + (n-1)d: T₁₀ = 5 + (10-1)×3 = 5 + 27 = 32",
    hint: "Use the formula: Tₙ = a + (n-1)d"
  },
  {
    id: 3,
    text: "What is the common difference in the AP: 20, 15, 10, 5, ...?",
    options: [
      { id: 'a', text: "5" },
      { id: 'b', text: "-5", correct: true },
      { id: 'c', text: "10" },
      { id: 'd', text: "-10" }
    ],
    correctAnswer: "-5",
    explanation: "Common difference d = 15 - 20 = -5 (or any consecutive term minus previous)",
    hint: "Subtract the first term from the second term"
  },
  {
    id: 4,
    text: "Find the sum of the first 5 terms of AP: 3, 7, 11, ...",
    options: [
      { id: 'a', text: "55", correct: true },
      { id: 'b', text: "50" },
      { id: 'c', text: "60" },
      { id: 'd', text: "45" }
    ],
    correctAnswer: "55",
    explanation: "Using Sₙ = n/2[2a + (n-1)d]: S₅ = 5/2[2(3) + (5-1)×4] = 5/2[6 + 16] = 55",
    hint: "Use the sum formula: Sₙ = n/2[2a + (n-1)d]"
  },
  {
    id: 5,
    text: "What is the next term in the GP: 2, 6, 18, ...?",
    options: [
      { id: 'a', text: "36" },
      { id: 'b', text: "54", correct: true },
      { id: 'c', text: "72" },
      { id: 'd', text: "24" }
    ],
    correctAnswer: "54",
    explanation: "This is a geometric sequence with common ratio r = 3. Next term: 18 × 3 = 54",
    hint: "Find the common ratio by dividing consecutive terms"
  },
  {
    id: 6,
    text: "In the GP 4, 12, 36, ..., what is the 6th term?",
    options: [
      { id: 'a', text: "972", correct: true },
      { id: 'b', text: "324" },
      { id: 'c', text: "1296" },
      { id: 'd', text: "648" }
    ],
    correctAnswer: "972",
    explanation: "Using Tₙ = arⁿ⁻¹: T₆ = 4 × 3⁶⁻¹ = 4 × 3⁵ = 4 × 243 = 972",
    hint: "Use the formula: Tₙ = arⁿ⁻¹"
  },
  {
    id: 7,
    text: "What is the common ratio of the GP: 32, 16, 8, 4, ...?",
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "1/2", correct: true },
      { id: 'c', text: "-2" },
      { id: 'd', text: "4" }
    ],
    correctAnswer: "1/2",
    explanation: "Common ratio r = 16/32 = 1/2 (or any term divided by previous term)",
    hint: "Divide the second term by the first term"
  },
  {
    id: 8,
    text: "Find the sum of the first 4 terms of GP: 1, 3, 9, ...",
    options: [
      { id: 'a', text: "40", correct: true },
      { id: 'b', text: "39" },
      { id: 'c', text: "41" },
      { id: 'd', text: "38" }
    ],
    correctAnswer: "40",
    explanation: "Using Sₙ = a(rⁿ-1)/(r-1): S₄ = 1(3⁴-1)/(3-1) = (81-1)/2 = 40",
    hint: "Use the sum formula: Sₙ = a(rⁿ-1)/(r-1)"
  },
  {
    id: 9,
    text: "Which of these is an arithmetic sequence?",
    options: [
      { id: 'a', text: "1, 4, 9, 16, ..." },
      { id: 'b', text: "2, 4, 8, 16, ..." },
      { id: 'c', text: "5, 10, 15, 20, ...", correct: true },
      { id: 'd', text: "1, 1, 2, 3, 5, ..." }
    ],
    correctAnswer: "5, 10, 15, 20, ...",
    explanation: "This has a constant difference of 5 between consecutive terms",
    hint: "Check which sequence has a constant difference between terms"
  },
  {
    id: 10,
    text: "If the 3rd term of an AP is 17 and the 7th term is 37, find the first term",
    options: [
      { id: 'a', text: "7", correct: true },
      { id: 'b', text: "5" },
      { id: 'c', text: "9" },
      { id: 'd', text: "3" }
    ],
    correctAnswer: "7",
    explanation: "T₃ = a + 2d = 17, T₇ = a + 6d = 37. Subtracting: 4d = 20, so d = 5. Then a = 17 - 2(5) = 7",
    hint: "Use two equations with the given terms to find a and d"
  },
  {
    id: 11,
    text: "What is the 8th term of the sequence: 1, 1, 2, 3, 5, 8, ...?",
    options: [
      { id: 'a', text: "13" },
      { id: 'b', text: "21", correct: true },
      { id: 'c', text: "34" },
      { id: 'd', text: "16" }
    ],
    correctAnswer: "21",
    explanation: "This is the Fibonacci sequence where each term is the sum of the two preceding terms: 8 + 13 = 21",
    hint: "Each term is the sum of the two previous terms"
  },
  {
    id: 12,
    text: "Find the sum to infinity of the GP: 1, 1/2, 1/4, ...",
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "2", correct: true },
      { id: 'c', text: "1/2" },
      { id: 'd', text: "∞" }
    ],
    correctAnswer: "2",
    explanation: "Using S∞ = a/(1-r): S∞ = 1/(1-1/2) = 1/(1/2) = 2",
    hint: "Use the formula: S∞ = a/(1-r) when |r| < 1"
  },
  {
    id: 13,
    text: "In an AP, if a = 2 and d = 3, what is the 15th term?",
    options: [
      { id: 'a', text: "44", correct: true },
      { id: 'b', text: "41" },
      { id: 'c', text: "47" },
      { id: 'd', text: "38" }
    ],
    correctAnswer: "44",
    explanation: "Using Tₙ = a + (n-1)d: T₁₅ = 2 + (15-1)×3 = 2 + 42 = 44",
    hint: "Apply the nth term formula directly"
  },
  {
    id: 14,
    text: "What type of sequence is: 1, 4, 9, 16, 25, ...?",
    options: [
      { id: 'a', text: "Arithmetic" },
      { id: 'b', text: "Geometric" },
      { id: 'c', text: "Square numbers", correct: true },
      { id: 'd', text: "Fibonacci" }
    ],
    correctAnswer: "Square numbers",
    explanation: "These are perfect squares: 1², 2², 3², 4², 5², ...",
    hint: "Look at the pattern: what operation produces these numbers?"
  },
  {
    id: 15,
    text: "If the sum of first n terms of an AP is n² + 2n, find the first term",
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "3", correct: true },
      { id: 'c', text: "1" },
      { id: 'd', text: "4" }
    ],
    correctAnswer: "3",
    explanation: "First term = S₁ = 1² + 2(1) = 1 + 2 = 3",
    hint: "The first term equals S₁"
  },
  {
    id: 16,
    text: "In a GP, if the first term is 3 and the common ratio is 2, what is the 5th term?",
    options: [
      { id: 'a', text: "24" },
      { id: 'b', text: "48", correct: true },
      { id: 'c', text: "96" },
      { id: 'd', text: "12" }
    ],
    correctAnswer: "48",
    explanation: "Using Tₙ = arⁿ⁻¹: T₅ = 3 × 2⁵⁻¹ = 3 × 2⁴ = 3 × 16 = 48",
    hint: "Use the GP nth term formula"
  },
  {
    id: 17,
    text: "What is the middle term of the AP: 7, 10, 13, ..., 43?",
    options: [
      { id: 'a', text: "22" },
      { id: 'b', text: "25", correct: true },
      { id: 'c', text: "28" },
      { id: 'd', text: "19" }
    ],
    correctAnswer: "25",
    explanation: "The middle term of an AP is the average of first and last terms: (7 + 43)/2 = 25",
    hint: "Middle term = (first term + last term)/2"
  },
  {
    id: 18,
    text: "How many terms are in the AP: 5, 8, 11, ..., 50?",
    options: [
      { id: 'a', text: "15" },
      { id: 'b', text: "16", correct: true },
      { id: 'c', text: "17" },
      { id: 'd', text: "14" }
    ],
    correctAnswer: "16",
    explanation: "Using Tₙ = a + (n-1)d: 50 = 5 + (n-1)×3, solving: n = 16",
    hint: "Use the nth term formula and solve for n"
  },
  {
    id: 19,
    text: "What is the sum of first 10 natural numbers?",
    options: [
      { id: 'a', text: "45" },
      { id: 'b', text: "55", correct: true },
      { id: 'c', text: "50" },
      { id: 'd', text: "60" }
    ],
    correctAnswer: "55",
    explanation: "Using Sₙ = n(n+1)/2: S₁₀ = 10(11)/2 = 55",
    hint: "Use the formula for sum of first n natural numbers"
  },
  {
    id: 20,
    text: "In a GP, if the 2nd term is 6 and the 5th term is 48, find the common ratio",
    options: [
      { id: 'a', text: "2", correct: true },
      { id: 'b', text: "3" },
      { id: 'c', text: "4" },
      { id: 'd', text: "1/2" }
    ],
    correctAnswer: "2",
    explanation: "T₅/T₂ = r³, so 48/6 = r³, therefore r³ = 8, and r = 2",
    hint: "Use the relationship between terms in a GP"
  },
  {
    id: 21,
    text: "What is the sum of the arithmetic series: 1 + 4 + 7 + ... + 28?",
    options: [
      { id: 'a', text: "135" },
      { id: 'b', text: "145", correct: true },
      { id: 'c', text: "155" },
      { id: 'd', text: "125" }
    ],
    correctAnswer: "145",
    explanation: "First find n: 28 = 1 + (n-1)×3, so n = 10. Then S₁₀ = 10/2 × (1 + 28) = 145",
    hint: "Find the number of terms first, then use the sum formula"
  },
  {
    id: 22,
    text: "Which sequence has a common ratio of -1/2?",
    options: [
      { id: 'a', text: "8, -4, 2, -1, ...", correct: true },
      { id: 'b', text: "8, 4, 2, 1, ..." },
      { id: 'c', text: "2, -4, 8, -16, ..." },
      { id: 'd', text: "-8, 4, -2, 1, ..." }
    ],
    correctAnswer: "8, -4, 2, -1, ...",
    explanation: "Check: -4/8 = -1/2, 2/(-4) = -1/2, (-1)/2 = -1/2",
    hint: "Divide consecutive terms to find the common ratio"
  },
  {
    id: 23,
    text: "If three numbers are in AP and their sum is 15, what is the middle number?",
    options: [
      { id: 'a', text: "4" },
      { id: 'b', text: "5", correct: true },
      { id: 'c', text: "6" },
      { id: 'd', text: "7" }
    ],
    correctAnswer: "5",
    explanation: "Let the numbers be a-d, a, a+d. Sum = 3a = 15, so a = 5",
    hint: "In an AP, the middle term is the average of all terms"
  },
  {
    id: 24,
    text: "What is the sum of the infinite GP: 1 + 1/3 + 1/9 + ...?",
    options: [
      { id: 'a', text: "3/2", correct: true },
      { id: 'b', text: "3/4" },
      { id: 'c', text: "2" },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "3/2",
    explanation: "Using S∞ = a/(1-r): S∞ = 1/(1-1/3) = 1/(2/3) = 3/2",
    hint: "Use the infinite sum formula when |r| < 1"
  },
  {
    id: 25,
    text: "In an AP, if the 5th term is 14 and the 9th term is 22, find the common difference",
    options: [
      { id: 'a', text: "2", correct: true },
      { id: 'b', text: "3" },
      { id: 'c', text: "4" },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "2",
    explanation: "T₉ - T₅ = 4d, so 22 - 14 = 4d, therefore d = 2",
    hint: "The difference between terms equals (difference in positions) × d"
  },
  {
    id: 26,
    text: "What is the next term in: 2, 6, 18, 54, ...?",
    options: [
      { id: 'a', text: "108" },
      { id: 'b', text: "162", correct: true },
      { id: 'c', text: "216" },
      { id: 'd', text: "144" }
    ],
    correctAnswer: "162",
    explanation: "This is a GP with r = 3. Next term: 54 × 3 = 162",
    hint: "Find the common ratio and multiply"
  },
  {
    id: 27,
    text: "Find the 20th term of the AP: -3, 1, 5, 9, ...",
    options: [
      { id: 'a', text: "73", correct: true },
      { id: 'b', text: "77" },
      { id: 'c', text: "69" },
      { id: 'd', text: "81" }
    ],
    correctAnswer: "73",
    explanation: "Using Tₙ = a + (n-1)d: T₂₀ = -3 + (20-1)×4 = -3 + 76 = 73",
    hint: "Identify a = -3 and d = 4, then use the formula"
  },
  {
    id: 28,
    text: "What is the sum of the first 6 terms of GP: 2, 6, 18, ...?",
    options: [
      { id: 'a', text: "728", correct: true },
      { id: 'b', text: "364" },
      { id: 'c', text: "1092" },
      { id: 'd', text: "546" }
    ],
    correctAnswer: "728",
    explanation: "Using Sₙ = a(rⁿ-1)/(r-1): S₆ = 2(3⁶-1)/(3-1) = 2(729-1)/2 = 728",
    hint: "Use the GP sum formula with a = 2, r = 3, n = 6"
  },
  {
    id: 29,
    text: "If the sum of an infinite GP is 8 and the first term is 4, find the common ratio",
    options: [
      { id: 'a', text: "1/2", correct: true },
      { id: 'b', text: "1/3" },
      { id: 'c', text: "2/3" },
      { id: 'd', text: "1/4" }
    ],
    correctAnswer: "1/2",
    explanation: "Using S∞ = a/(1-r): 8 = 4/(1-r), so 1-r = 1/2, therefore r = 1/2",
    hint: "Use S∞ = a/(1-r) and solve for r"
  },
  {
    id: 30,
    text: "How many terms of the AP 3, 7, 11, ... must be taken so that their sum is 120?",
    options: [
      { id: 'a', text: "8", correct: true },
      { id: 'b', text: "6" },
      { id: 'c', text: "10" },
      { id: 'd', text: "12" }
    ],
    correctAnswer: "8",
    explanation: "Using Sₙ = n/2[2a + (n-1)d]: 120 = n/2[6 + 4(n-1)] = n[3 + 2n - 2] = n(2n + 1). So 2n² + n - 120 = 0. Solving: n = 8",
    hint: "Set up the sum formula equal to 120 and solve the quadratic equation"
  }
];

export default questions;
