// Quiz questions for Equations and Inequalities (matching EquationPages.jsx content)
const questions = [
  {
    id: 1,
    text: "Solve for x: 3x - 4 = 14",
    options: [
      { id: 'a', text: "x = 4" },
      { id: 'b', text: "x = 5" },
      { id: 'c', text: "x = 6", correct: true },
      { id: 'd', text: "x = 7" }
    ],
    correctAnswer: "x = 6",
    explanation: "Add 4 to both sides: 3x = 18, then divide by 3: x = 6",
    hint: "Use opposite operations to isolate x"
  },
  {
    id: 2,
    text: "Solve the quadratic: x² - 5x + 6 = 0",
    options: [
      { id: 'a', text: "x = 2, x = 3", correct: true },
      { id: 'b', text: "x = 1, x = 6" },
      { id: 'c', text: "x = -2, x = -3" },
      { id: 'd', text: "x = 5, x = 6" }
    ],
    correctAnswer: "x = 2, x = 3",
    explanation: "Factor: (x-2)(x-3) = 0, so x = 2 or x = 3",
    hint: "Look for two numbers that multiply to 6 and add to -5"
  },
  {
    id: 3,
    text: "Solve the simultaneous equations: x + y = 5, x - y = 1",
    options: [
      { id: 'a', text: "x = 3, y = 2", correct: true },
      { id: 'b', text: "x = 2, y = 3" },
      { id: 'c', text: "x = 4, y = 1" },
      { id: 'd', text: "x = 1, y = 4" }
    ],
    correctAnswer: "x = 3, y = 2",
    explanation: "Add the equations: 2x = 6, so x = 3. Substitute: 3 + y = 5, so y = 2",
    hint: "Try adding the two equations to eliminate y"
  },
  {
    id: 4,
    text: "Solve the inequality: 2x + 3 > 9",
    options: [
      { id: 'a', text: "x > 3", correct: true },
      { id: 'b', text: "x < 3" },
      { id: 'c', text: "x > 6" },
      { id: 'd', text: "x < 6" }
    ],
    correctAnswer: "x > 3",
    explanation: "Subtract 3: 2x > 6, then divide by 2: x > 3",
    hint: "Treat like an equation, but keep the inequality sign"
  },
  {
    id: 5,
    text: "What is the discriminant of x² + 4x + 4 = 0?",
    options: [
      { id: 'a', text: "0", correct: true },
      { id: 'b', text: "4" },
      { id: 'c', text: "16" },
      { id: 'd', text: "8" }
    ],
    correctAnswer: "0",
    explanation: "Discriminant = b² - 4ac = 16 - 16 = 0",
    hint: "Use the formula: discriminant = b² - 4ac"
  },
  {
    id: 6,
    text: "Solve for y: 2y + 7 = 15",
    options: [
      { id: 'a', text: "y = 3" },
      { id: 'b', text: "y = 4", correct: true },
      { id: 'c', text: "y = 5" },
      { id: 'd', text: "y = 8" }
    ],
    correctAnswer: "y = 4",
    explanation: "Subtract 7: 2y = 8, then divide by 2: y = 4",
    hint: "Isolate the variable using opposite operations"
  },
  {
    id: 7,
    text: "Factor: x² + 7x + 12",
    options: [
      { id: 'a', text: "(x + 3)(x + 4)", correct: true },
      { id: 'b', text: "(x + 2)(x + 6)" },
      { id: 'c', text: "(x + 1)(x + 12)" },
      { id: 'd', text: "(x - 3)(x - 4)" }
    ],
    correctAnswer: "(x + 3)(x + 4)",
    explanation: "Find two numbers that multiply to 12 and add to 7: 3 and 4",
    hint: "Look for factors of 12 that add to 7"
  },
  {
    id: 8,
    text: "Solve: 4x - 1 = 3x + 5",
    options: [
      { id: 'a', text: "x = 5" },
      { id: 'b', text: "x = 6", correct: true },
      { id: 'c', text: "x = 4" },
      { id: 'd', text: "x = 7" }
    ],
    correctAnswer: "x = 6",
    explanation: "Subtract 3x from both sides: x - 1 = 5, then add 1: x = 6",
    hint: "Collect like terms on each side"
  },
  {
    id: 9,
    text: "Solve the inequality: -2x + 4 ≤ 10",
    options: [
      { id: 'a', text: "x ≥ -3", correct: true },
      { id: 'b', text: "x ≤ -3" },
      { id: 'c', text: "x ≥ 3" },
      { id: 'd', text: "x ≤ 3" }
    ],
    correctAnswer: "x ≥ -3",
    explanation: "Subtract 4: -2x ≤ 6, divide by -2 (flip the sign): x ≥ -3",
    hint: "Remember to flip the inequality when dividing by a negative"
  },
  {
    id: 10,
    text: "Find x using the quadratic formula: x² - 4x + 3 = 0",
    options: [
      { id: 'a', text: "x = 1, x = 3", correct: true },
      { id: 'b', text: "x = -1, x = -3" },
      { id: 'c', text: "x = 2, x = 2" },
      { id: 'd', text: "x = 0, x = 4" }
    ],
    correctAnswer: "x = 1, x = 3",
    explanation: "Using x = [-b ± √(b²-4ac)]/2a: x = [4 ± √(16-12)]/2 = [4 ± 2]/2 = 3 or 1",
    hint: "Use the quadratic formula with a=1, b=-4, c=3"
  },
  {
    id: 11,
    text: "Solve simultaneously: 2x + y = 8, x - y = 1",
    options: [
      { id: 'a', text: "x = 2, y = 4" },
      { id: 'b', text: "x = 3, y = 2", correct: true },
      { id: 'c', text: "x = 4, y = 0" },
      { id: 'd', text: "x = 1, y = 6" }
    ],
    correctAnswer: "x = 3, y = 2",
    explanation: "Add equations: 3x = 9, so x = 3. Substitute: 2(3) + y = 8, so y = 2",
    hint: "Add the equations to eliminate y"
  },
  {
    id: 12,
    text: "Solve: (x + 2)/3 = 4",
    options: [
      { id: 'a', text: "x = 8" },
      { id: 'b', text: "x = 10", correct: true },
      { id: 'c', text: "x = 12" },
      { id: 'd', text: "x = 14" }
    ],
    correctAnswer: "x = 10",
    explanation: "Multiply both sides by 3: x + 2 = 12, then subtract 2: x = 10",
    hint: "Clear the fraction first by multiplying both sides by 3"
  },
  {
    id: 13,
    text: "What type of roots does x² + 2x + 1 = 0 have?",
    options: [
      { id: 'a', text: "Two distinct real roots" },
      { id: 'b', text: "One repeated real root", correct: true },
      { id: 'c', text: "Two complex roots" },
      { id: 'd', text: "No real roots" }
    ],
    correctAnswer: "One repeated real root",
    explanation: "Discriminant = 4 - 4 = 0, which means one repeated real root",
    hint: "Check the discriminant: b² - 4ac"
  },
  {
    id: 14,
    text: "Solve: 3(x - 2) = 15",
    options: [
      { id: 'a', text: "x = 5" },
      { id: 'b', text: "x = 7", correct: true },
      { id: 'c', text: "x = 9" },
      { id: 'd', text: "x = 11" }
    ],
    correctAnswer: "x = 7",
    explanation: "Divide by 3: x - 2 = 5, then add 2: x = 7",
    hint: "Divide both sides by 3 first"
  },
  {
    id: 15,
    text: "Solve the inequality: 3x - 2 < 7",
    options: [
      { id: 'a', text: "x < 3", correct: true },
      { id: 'b', text: "x > 3" },
      { id: 'c', text: "x < 5" },
      { id: 'd', text: "x > 5" }
    ],
    correctAnswer: "x < 3",
    explanation: "Add 2: 3x < 9, then divide by 3: x < 3",
    hint: "Solve like an equation, keeping the inequality direction"
  },
  {
    id: 16,
    text: "Complete the square: x² + 6x + ?",
    options: [
      { id: 'a', text: "9", correct: true },
      { id: 'b', text: "6" },
      { id: 'c', text: "3" },
      { id: 'd', text: "36" }
    ],
    correctAnswer: "9",
    explanation: "Take half of the coefficient of x and square it: (6/2)² = 9",
    hint: "Use the formula: (b/2)² where b is the coefficient of x"
  },
  {
    id: 17,
    text: "Solve simultaneously: 3x + 2y = 12, x + y = 5",
    options: [
      { id: 'a', text: "x = 1, y = 4" },
      { id: 'b', text: "x = 2, y = 3", correct: true },
      { id: 'c', text: "x = 3, y = 2" },
      { id: 'd', text: "x = 4, y = 1" }
    ],
    correctAnswer: "x = 2, y = 3",
    explanation: "From second equation: y = 5 - x. Substitute: 3x + 2(5-x) = 12, solve to get x = 2, y = 3",
    hint: "Use substitution method"
  },
  {
    id: 18,
    text: "Solve: |x - 3| = 5",
    options: [
      { id: 'a', text: "x = 8 or x = -2", correct: true },
      { id: 'b', text: "x = 8 only" },
      { id: 'c', text: "x = -2 only" },
      { id: 'd', text: "x = 2 or x = 8" }
    ],
    correctAnswer: "x = 8 or x = -2",
    explanation: "Absolute value equation gives: x - 3 = 5 or x - 3 = -5, so x = 8 or x = -2",
    hint: "Absolute value equations have two solutions"
  },
  {
    id: 19,
    text: "Factor: x² - 9",
    options: [
      { id: 'a', text: "(x - 3)(x + 3)", correct: true },
      { id: 'b', text: "(x - 9)(x + 1)" },
      { id: 'c', text: "(x - 1)(x + 9)" },
      { id: 'd', text: "Cannot be factored" }
    ],
    correctAnswer: "(x - 3)(x + 3)",
    explanation: "This is a difference of squares: x² - 9 = x² - 3² = (x - 3)(x + 3)",
    hint: "Recognize the difference of squares pattern: a² - b²"
  },
  {
    id: 20,
    text: "Solve: 2x/3 + 1 = 5",
    options: [
      { id: 'a', text: "x = 4" },
      { id: 'b', text: "x = 6", correct: true },
      { id: 'c', text: "x = 8" },
      { id: 'd', text: "x = 9" }
    ],
    correctAnswer: "x = 6",
    explanation: "Subtract 1: 2x/3 = 4, multiply by 3: 2x = 12, divide by 2: x = 6",
    hint: "Work step by step to clear the fraction"
  },
  {
    id: 21,
    text: "Which inequality represents 'x is between -2 and 5'?",
    options: [
      { id: 'a', text: "-2 < x < 5", correct: true },
      { id: 'b', text: "x < -2 or x > 5" },
      { id: 'c', text: "-2 ≤ x ≤ 5" },
      { id: 'd', text: "x ≤ -2 or x ≥ 5" }
    ],
    correctAnswer: "-2 < x < 5",
    explanation: "'Between' typically means strictly between, not including endpoints",
    hint: "Between means greater than the smaller number and less than the larger"
  },
  {
    id: 22,
    text: "Solve: x² = 16",
    options: [
      { id: 'a', text: "x = 4" },
      { id: 'b', text: "x = ±4", correct: true },
      { id: 'c', text: "x = 16" },
      { id: 'd', text: "x = 8" }
    ],
    correctAnswer: "x = ±4",
    explanation: "Taking square root of both sides: x = ±√16 = ±4",
    hint: "Remember both positive and negative square roots"
  },
  {
    id: 23,
    text: "Solve: 5x + 3 = 2x + 18",
    options: [
      { id: 'a', text: "x = 4" },
      { id: 'b', text: "x = 5", correct: true },
      { id: 'c', text: "x = 6" },
      { id: 'd', text: "x = 7" }
    ],
    correctAnswer: "x = 5",
    explanation: "Subtract 2x and 3 from both sides: 3x = 15, so x = 5",
    hint: "Collect like terms on opposite sides"
  },
  {
    id: 24,
    text: "What is the vertex of the parabola y = x² - 4x + 3?",
    options: [
      { id: 'a', text: "(2, -1)", correct: true },
      { id: 'b', text: "(-2, 1)" },
      { id: 'c', text: "(4, 3)" },
      { id: 'd', text: "(0, 3)" }
    ],
    correctAnswer: "(2, -1)",
    explanation: "Using x = -b/2a: x = 4/2 = 2. Substitute: y = 4 - 8 + 3 = -1",
    hint: "Use the vertex formula: x = -b/2a"
  },
  {
    id: 25,
    text: "Solve the inequality: x² - 4 > 0",
    options: [
      { id: 'a', text: "x > 2 or x < -2", correct: true },
      { id: 'b', text: "-2 < x < 2" },
      { id: 'c', text: "x > 4" },
      { id: 'd', text: "x < -4" }
    ],
    correctAnswer: "x > 2 or x < -2",
    explanation: "Factor: (x-2)(x+2) > 0. This is positive when both factors have same sign",
    hint: "Factor first, then determine when the product is positive"
  },
  {
    id: 26,
    text: "Solve: √(x + 1) = 3",
    options: [
      { id: 'a', text: "x = 8", correct: true },
      { id: 'b', text: "x = 9" },
      { id: 'c', text: "x = 2" },
      { id: 'd', text: "x = 10" }
    ],
    correctAnswer: "x = 8",
    explanation: "Square both sides: x + 1 = 9, so x = 8",
    hint: "Square both sides to eliminate the square root"
  },
  {
    id: 27,
    text: "Factor: 2x² + 7x + 3",
    options: [
      { id: 'a', text: "(2x + 1)(x + 3)", correct: true },
      { id: 'b', text: "(2x + 3)(x + 1)" },
      { id: 'c', text: "(x + 1)(x + 3)" },
      { id: 'd', text: "Cannot be factored" }
    ],
    correctAnswer: "(2x + 1)(x + 3)",
    explanation: "Look for factors of 2×3=6 that add to 7: 6 and 1. Then factor by grouping",
    hint: "Use the ac method: find factors of ac that add to b"
  },
  {
    id: 28,
    text: "Solve simultaneously: x + 2y = 10, 3x - y = 5",
    options: [
      { id: 'a', text: "x = 2, y = 4" },
      { id: 'b', text: "x = 4, y = 3" },
      { id: 'c', text: "x = 4, y = 7" },
      { id: 'd', text: "x = 20/7, y = 25/7", correct: true }
    ],
    correctAnswer: "x = 20/7, y = 25/7",
    explanation: "Multiply first by 1, second by 2: x + 2y = 10, 6x - 2y = 10. Add: 7x = 20, so x = 20/7",
    hint: "Eliminate one variable by making coefficients equal"
  },
  {
    id: 29,
    text: "Solve: |2x - 1| < 5",
    options: [
      { id: 'a', text: "-2 < x < 3", correct: true },
      { id: 'b', text: "x < -2 or x > 3" },
      { id: 'c', text: "-3 < x < 2" },
      { id: 'd', text: "x > 3" }
    ],
    correctAnswer: "-2 < x < 3",
    explanation: "Absolute value inequality: -5 < 2x - 1 < 5. Add 1: -4 < 2x < 6. Divide by 2: -2 < x < 3",
    hint: "For |expression| < number, write -number < expression < number"
  },
  {
    id: 30,
    text: "Find the sum and product of roots of x² - 5x + 6 = 0",
    options: [
      { id: 'a', text: "Sum = 5, Product = 6", correct: true },
      { id: 'b', text: "Sum = -5, Product = 6" },
      { id: 'c', text: "Sum = 5, Product = -6" },
      { id: 'd', text: "Sum = -5, Product = -6" }
    ],
    correctAnswer: "Sum = 5, Product = 6",
    explanation: "For ax² + bx + c = 0: sum of roots = -b/a = 5, product = c/a = 6",
    hint: "Use the formulas: sum = -b/a, product = c/a"
  }
];

export default questions;
