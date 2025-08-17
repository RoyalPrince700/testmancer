const questions = [
  {
    id: 1,
    text: "What is ∫x dx?",
    options: [
      { id: 'a', text: "x² + C" },
      { id: 'b', text: "x²/2 + C", correct: true },
      { id: 'c', text: "x + C" },
      { id: 'd', text: "1 + C" }
    ],
    correctAnswer: "x²/2 + C",
    explanation: "Using the power rule for integration: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. For x¹: x²/2 + C",
    hint: "Add 1 to the power, then divide by the new power."
  },
  {
    id: 2,
    text: "What is ∫5 dx?",
    options: [
      { id: 'a', text: "5 + C" },
      { id: 'b', text: "0" },
      { id: 'c', text: "5x + C", correct: true },
      { id: 'd', text: "x + C" }
    ],
    correctAnswer: "5x + C",
    explanation: "The integral of a constant k is kx + C. So ∫5 dx = 5x + C",
    hint: "A constant integrates to the constant times x plus C."
  },
  {
    id: 3,
    text: "What is ∫(3x² + 2x) dx?",
    options: [
      { id: 'a', text: "6x + 2 + C" },
      { id: 'b', text: "3x³ + 2x² + C" },
      { id: 'c', text: "x² + x + C" },
      { id: 'd', text: "x³ + x² + C", correct: true }
    ],
    correctAnswer: "x³ + x² + C",
    explanation: "Integrate term by term: ∫3x² dx + ∫2x dx = 3(x³/3) + 2(x²/2) + C = x³ + x² + C",
    hint: "Use the sum rule and integrate each term separately."
  },
  {
    id: 4,
    text: "What is the constant of integration represented by?",
    options: [
      { id: 'a', text: "k" },
      { id: 'b', text: "C", correct: true },
      { id: 'c', text: "A" },
      { id: 'd', text: "B" }
    ],
    correctAnswer: "C",
    explanation: "The constant of integration is traditionally represented by C, added because integration is the reverse of differentiation.",
    hint: "This constant accounts for all possible antiderivatives."
  },
  {
    id: 5,
    text: "What is ∫x³ dx?",
    options: [
      { id: 'a', text: "3x² + C" },
      { id: 'b', text: "x⁴ + C" },
      { id: 'c', text: "x⁴/4 + C", correct: true },
      { id: 'd', text: "4x³ + C" }
    ],
    correctAnswer: "x⁴/4 + C",
    explanation: "Using the power rule: ∫x³ dx = x³⁺¹/(3+1) + C = x⁴/4 + C",
    hint: "Add 1 to the power (3+1=4), then divide by the new power."
  },
  {
    id: 6,
    text: "What is the relationship between differentiation and integration?",
    options: [
      { id: 'a', text: "They are the same operation" },
      { id: 'b', text: "They are inverse operations", correct: true },
      { id: 'c', text: "They are unrelated" },
      { id: 'd', text: "Integration is twice differentiation" }
    ],
    correctAnswer: "They are inverse operations",
    explanation: "Integration and differentiation are inverse operations - they undo each other. If you differentiate an integral, you get back the original function.",
    hint: "One operation undoes the other."
  },
  {
    id: 7,
    text: "What is ∫(2x + 3) dx?",
    options: [
      { id: 'a', text: "2x² + 3x + C" },
      { id: 'b', text: "2 + C" },
      { id: 'c', text: "x + 3 + C" },
      { id: 'd', text: "x² + 3x + C", correct: true }
    ],
    correctAnswer: "x² + 3x + C",
    explanation: "∫2x dx + ∫3 dx = 2(x²/2) + 3x + C = x² + 3x + C",
    hint: "Integrate each term separately and combine."
  },
  {
    id: 8,
    text: "What is ∫0 dx?",
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "x + C" },
      { id: 'c', text: "C", correct: true },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "C",
    explanation: "The integral of zero is just the constant of integration C, since the derivative of any constant is zero.",
    hint: "What function has a derivative of zero?"
  },
  {
    id: 9,
    text: "What is ∫(x² - 4x + 1) dx?",
    options: [
      { id: 'a', text: "2x - 4 + C" },
      { id: 'b', text: "x³/3 - 2x² + x + C", correct: true },
      { id: 'c', text: "x³ - 4x² + x + C" },
      { id: 'd', text: "x³/3 - 4x² + C" }
    ],
    correctAnswer: "x³/3 - 2x² + x + C",
    explanation: "∫x² dx - ∫4x dx + ∫1 dx = x³/3 - 4(x²/2) + x + C = x³/3 - 2x² + x + C",
    hint: "Apply the power rule to each term separately."
  },
  {
    id: 10,
    text: "What does the '+C' represent in indefinite integrals?",
    options: [
      { id: 'a', text: "The area under the curve" },
      { id: 'b', text: "The slope of the function" },
      { id: 'c', text: "All possible vertical shifts of the antiderivative", correct: true },
      { id: 'd', text: "A specific number" }
    ],
    correctAnswer: "All possible vertical shifts of the antiderivative",
    explanation: "Since the derivative of any constant is zero, there are infinitely many antiderivatives differing by a constant. +C represents all of them.",
    hint: "Think about families of curves that differ only by vertical position."
  },
  {
    id: 11,
    text: "What is ∫5x⁴ dx?",
    options: [
      { id: 'a', text: "5x⁵ + C" },
      { id: 'b', text: "x⁵ + C", correct: true },
      { id: 'c', text: "20x³ + C" },
      { id: 'd', text: "x⁵/5 + C" }
    ],
    correctAnswer: "x⁵ + C",
    explanation: "∫5x⁴ dx = 5∫x⁴ dx = 5(x⁵/5) + C = x⁵ + C",
    hint: "Factor out the constant 5, then apply the power rule."
  },
  {
    id: 12,
    text: "What is the power rule for integration?",
    options: [
      { id: 'a', text: "∫xⁿ dx = nxⁿ⁻¹ + C" },
      { id: 'b', text: "∫xⁿ dx = xⁿ + C" },
      { id: 'c', text: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)", correct: true },
      { id: 'd', text: "∫xⁿ dx = xⁿ⁻¹/n + C" }
    ],
    correctAnswer: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)",
    explanation: "The power rule for integration: increase the power by 1, then divide by the new power. Exception: n ≠ -1.",
    hint: "This is the reverse of the power rule for differentiation."
  },
  {
    id: 13,
    text: "What is ∫(x + 1)² dx? (Expand first)",
    options: [
      { id: 'a', text: "(x + 1)³/3 + C" },
      { id: 'b', text: "x³/3 + x² + x + C", correct: true },
      { id: 'c', text: "x² + 2x + 1 + C" },
      { id: 'd', text: "x³ + x² + x + C" }
    ],
    correctAnswer: "x³/3 + x² + x + C",
    explanation: "(x + 1)² = x² + 2x + 1. Then ∫(x² + 2x + 1) dx = x³/3 + x² + x + C",
    hint: "First expand the square, then integrate term by term."
  },
  {
    id: 14,
    text: "What is the difference between definite and indefinite integrals?",
    options: [
      { id: 'a', text: "Definite integrals are harder to calculate" },
      { id: 'b', text: "Indefinite integrals don't exist" },
      { id: 'c', text: "There is no difference" },
      { id: 'd', text: "Definite integrals have limits and give numbers; indefinite integrals give functions", correct: true }
    ],
    correctAnswer: "Definite integrals have limits and give numbers; indefinite integrals give functions",
    explanation: "Indefinite integrals ∫f(x)dx give antiderivative functions with +C. Definite integrals ∫ₐᵇf(x)dx give specific numerical values.",
    hint: "Look for the presence or absence of limits of integration."
  },
  {
    id: 15,
    text: "What is ∫₀² x dx?",
    options: [
      { id: 'a', text: "4" },
      { id: 'b', text: "x²/2" },
      { id: 'c', text: "2", correct: true },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "2",
    explanation: "∫₀² x dx = [x²/2]₀² = (2²/2) - (0²/2) = 2 - 0 = 2",
    hint: "This is a definite integral - evaluate the antiderivative at the limits."
  },
  {
    id: 16,
    text: "What does integration help us find in geometry?",
    options: [
      { id: 'a', text: "Slopes of tangent lines" },
      { id: 'b', text: "Areas under curves", correct: true },
      { id: 'c', text: "Maximum and minimum points" },
      { id: 'd', text: "Vertex of parabolas" }
    ],
    correctAnswer: "Areas under curves",
    explanation: "Integration is fundamentally about finding areas under curves and accumulated quantities over intervals.",
    hint: "Think about what happens when you add up infinite small rectangles under a curve."
  },
  {
    id: 17,
    text: "What is ∫(3x² - 6x + 2) dx?",
    options: [
      { id: 'a', text: "6x - 6 + C" },
      { id: 'b', text: "3x³ - 6x² + 2x + C" },
      { id: 'c', text: "x³ - 3x² + 2x + C", correct: true },
      { id: 'd', text: "x³ - 6x² + 2x + C" }
    ],
    correctAnswer: "x³ - 3x² + 2x + C",
    explanation: "∫3x² dx - ∫6x dx + ∫2 dx = 3(x³/3) - 6(x²/2) + 2x + C = x³ - 3x² + 2x + C",
    hint: "Integrate each term separately using the power rule."
  },
  {
    id: 18,
    text: "What is ∫x⁻² dx (where x > 0)?",
    options: [
      { id: 'a', text: "x⁻¹ + C" },
      { id: 'b', text: "-2x⁻³ + C" },
      { id: 'c', text: "ln|x| + C" },
      { id: 'd', text: "-x⁻¹ + C", correct: true }
    ],
    correctAnswer: "-x⁻¹ + C",
    explanation: "∫x⁻² dx = x⁻²⁺¹/(-2+1) + C = x⁻¹/(-1) + C = -x⁻¹ + C = -1/x + C",
    hint: "Apply the power rule: add 1 to the power, then divide by the new power."
  },
  {
    id: 19,
    text: "In physics, if velocity is v(t) = 3t², what is the position function s(t)?",
    options: [
      { id: 'a', text: "s(t) = 6t + C" },
      { id: 'b', text: "s(t) = t³ + C", correct: true },
      { id: 'c', text: "s(t) = 3t² + C" },
      { id: 'd', text: "s(t) = 9t + C" }
    ],
    correctAnswer: "s(t) = t³ + C",
    explanation: "Position is the integral of velocity: s(t) = ∫v(t) dt = ∫3t² dt = t³ + C",
    hint: "Position is the antiderivative of velocity."
  },
  {
    id: 20,
    text: "What is ∫₁³ 2x dx?",
    options: [
      { id: 'a', text: "9" },
      { id: 'b', text: "4" },
      { id: 'c', text: "8", correct: true },
      { id: 'd', text: "6" }
    ],
    correctAnswer: "8",
    explanation: "∫₁³ 2x dx = [x²]₁³ = 3² - 1² = 9 - 1 = 8",
    hint: "Find the antiderivative first, then evaluate at the limits."
  },
  {
    id: 21,
    text: "Why do we need the constant C in indefinite integrals?",
    options: [
      { id: 'a', text: "To make the answer look complete" },
      { id: 'b', text: "Because there are infinitely many antiderivatives", correct: true },
      { id: 'c', text: "It's a mathematical tradition" },
      { id: 'd', text: "To avoid negative answers" }
    ],
    correctAnswer: "Because there are infinitely many antiderivatives",
    explanation: "Since d/dx(f(x) + C) = f'(x) for any constant C, every function has infinitely many antiderivatives differing by constants.",
    hint: "The derivative of any constant is zero."
  },
  {
    id: 22,
    text: "What is ∫(4x³ - 2x + 5) dx?",
    options: [
      { id: 'a', text: "12x² - 2 + C" },
      { id: 'b', text: "4x⁴ - 2x² + 5x + C" },
      { id: 'c', text: "x⁴ - x² + 5x + C", correct: true },
      { id: 'd', text: "x⁴ - 2x² + 5x + C" }
    ],
    correctAnswer: "x⁴ - x² + 5x + C",
    explanation: "∫4x³ dx - ∫2x dx + ∫5 dx = 4(x⁴/4) - 2(x²/2) + 5x + C = x⁴ - x² + 5x + C",
    hint: "Apply the power rule to each term and simplify the coefficients."
  },
  {
    id: 23,
    text: "What is the geometric interpretation of ∫ₐᵇ f(x) dx when f(x) ≥ 0?",
    options: [
      { id: 'a', text: "The slope of the curve at x = b" },
      { id: 'b', text: "The maximum value of f(x)" },
      { id: 'c', text: "The length of the curve" },
      { id: 'd', text: "The area between the curve and the x-axis from x = a to x = b", correct: true }
    ],
    correctAnswer: "The area between the curve and the x-axis from x = a to x = b",
    explanation: "When f(x) ≥ 0, the definite integral represents the area under the curve between the specified limits.",
    hint: "Definite integrals measure accumulated quantities - in this case, area."
  },
  {
    id: 24,
    text: "What is ∫√x dx?",
    options: [
      { id: 'a', text: "(1/2)x^(1/2) + C" },
      { id: 'b', text: "(2/3)x^(3/2) + C", correct: true },
      { id: 'c', text: "x^(3/2) + C" },
      { id: 'd', text: "(1/3)x^(3/2) + C" }
    ],
    correctAnswer: "(2/3)x^(3/2) + C",
    explanation: "√x = x^(1/2). Using power rule: ∫x^(1/2) dx = x^(1/2+1)/(1/2+1) = x^(3/2)/(3/2) = (2/3)x^(3/2) + C",
    hint: "First rewrite the square root as a fractional power."
  },
  {
    id: 25,
    text: "What is ∫(x - 1)(x + 2) dx? (Expand first)",
    options: [
      { id: 'a', text: "x² + x - 2 + C" },
      { id: 'b', text: "(x - 1)(x + 2) + C" },
      { id: 'c', text: "x³/3 + x²/2 - 2x + C", correct: true },
      { id: 'd', text: "x³ + x² - 2x + C" }
    ],
    correctAnswer: "x³/3 + x²/2 - 2x + C",
    explanation: "(x - 1)(x + 2) = x² + x - 2. Then ∫(x² + x - 2) dx = x³/3 + x²/2 - 2x + C",
    hint: "First expand the product, then integrate term by term."
  },
  {
    id: 26,
    text: "What fundamental theorem connects differentiation and integration?",
    options: [
      { id: 'a', text: "The Mean Value Theorem" },
      { id: 'b', text: "L'Hôpital's Rule" },
      { id: 'c', text: "The Fundamental Theorem of Calculus", correct: true },
      { id: 'd', text: "The Chain Rule" }
    ],
    correctAnswer: "The Fundamental Theorem of Calculus",
    explanation: "The Fundamental Theorem of Calculus establishes the relationship between differentiation and integration as inverse operations.",
    hint: "This theorem is fundamental to all of calculus."
  },
  {
    id: 27,
    text: "What is ∫₀¹ (2x + 1) dx?",
    options: [
      { id: 'a', text: "3" },
      { id: 'b', text: "2", correct: true },
      { id: 'c', text: "1" },
      { id: 'd', text: "4" }
    ],
    correctAnswer: "2",
    explanation: "∫₀¹ (2x + 1) dx = [x² + x]₀¹ = (1² + 1) - (0² + 0) = 2 - 0 = 2",
    hint: "Find the antiderivative, then evaluate at the upper limit minus the lower limit."
  },
  {
    id: 28,
    text: "In economics, if marginal cost is MC(x) = 6x + 5, what is the total cost function?",
    options: [
      { id: 'a', text: "C(x) = 6x + 5 + K" },
      { id: 'b', text: "C(x) = 3x² + 5x + K", correct: true },
      { id: 'c', text: "C(x) = 6 + K" },
      { id: 'd', text: "C(x) = 6x² + 5x + K" }
    ],
    correctAnswer: "C(x) = 3x² + 5x + K",
    explanation: "Total cost is the integral of marginal cost: C(x) = ∫(6x + 5) dx = 3x² + 5x + K, where K is the fixed cost.",
    hint: "Marginal cost is the derivative of total cost."
  },
  {
    id: 29,
    text: "What happens to the constant C when we evaluate a definite integral?",
    options: [
      { id: 'a', text: "It doubles" },
      { id: 'b', text: "It becomes zero" },
      { id: 'c', text: "It cancels out", correct: true },
      { id: 'd', text: "It remains in the answer" }
    ],
    correctAnswer: "It cancels out",
    explanation: "In definite integrals, we compute F(b) - F(a), so [F(x) + C]ᵇₐ = [F(b) + C] - [F(a) + C] = F(b) - F(a). The +C cancels.",
    hint: "When you subtract the same constant from itself, what happens?"
  },
  {
    id: 30,
    text: "Why is integration important in calculus and real-world applications?",
    options: [
      { id: 'a', text: "It makes calculations more complex" },
      { id: 'b', text: "It's only useful for abstract mathematics" },
      { id: 'c', text: "It helps find areas, volumes, total accumulated quantities, and solve differential equations", correct: true },
      { id: 'd', text: "It's the same as addition" }
    ],
    correctAnswer: "It helps find areas, volumes, total accumulated quantities, and solve differential equations",
    explanation: "Integration is essential for calculating areas, volumes, work, probability, finding original functions from rates of change, and solving many real-world problems.",
    hint: "Integration is about accumulation and finding totals from rates of change."
  }
];

export default questions;