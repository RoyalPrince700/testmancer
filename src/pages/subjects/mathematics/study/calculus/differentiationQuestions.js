// Quiz questions for Differentiation
const questions = [
  {
    id: 1,
    text: "What is the derivative of y = 3x²?",
    options: [
      { id: 'a', text: "6x", correct: true },
      { id: 'b', text: "3x" },
      { id: 'c', text: "6x²" },
      { id: 'd', text: "3x²" }
    ],
    correctAnswer: "6x",
    explanation: "Using the power rule: dy/dx = 2·3x²⁻¹ = 6x¹ = 6x",
    hint: "Use the power rule: multiply by the power, then subtract 1 from the power."
  },
  {
    id: 2,
    text: "What is the derivative of any constant c?",
    options: [
      { id: 'a', text: "c" },
      { id: 'b', text: "1" },
      { id: 'c', text: "0", correct: true },
      { id: 'd', text: "∞" }
    ],
    correctAnswer: "0",
    explanation: "The derivative of any constant is zero. A flat line has no slope!",
    hint: "Think about the slope of a horizontal line."
  },
  {
    id: 3,
    text: "If y = x³ + 2x² - 5, what is dy/dx?",
    options: [
      { id: 'a', text: "3x² + 4x", correct: true },
      { id: 'b', text: "x² + 2x" },
      { id: 'c', text: "3x² + 2x - 5" },
      { id: 'd', text: "3x + 4" }
    ],
    correctAnswer: "3x² + 4x",
    explanation: "Using sum/difference rule: d/dx(x³) + d/dx(2x²) + d/dx(-5) = 3x² + 4x + 0 = 3x² + 4x",
    hint: "Apply the power rule to each term separately."
  },
  {
    id: 4,
    text: "Using the power rule, what is the derivative of y = x⁴?",
    options: [
      { id: 'a', text: "4x³", correct: true },
      { id: 'b', text: "x³" },
      { id: 'c', text: "4x⁴" },
      { id: 'd', text: "x⁴/4" }
    ],
    correctAnswer: "4x³",
    explanation: "Power rule: d/dx(axⁿ) = n·axⁿ⁻¹. So d/dx(x⁴) = 4x³",
    hint: "The exponent becomes the new coefficient, and the new exponent is one less."
  },
  {
    id: 5,
    text: "What is the product rule for differentiation?",
    options: [
      { id: 'a', text: "d/dx(uv) = u(dv/dx) + v(du/dx)", correct: true },
      { id: 'b', text: "d/dx(uv) = (du/dx)(dv/dx)" },
      { id: 'c', text: "d/dx(uv) = u(dv/dx) - v(du/dx)" },
      { id: 'd', text: "d/dx(uv) = (du/dx) + (dv/dx)" }
    ],
    correctAnswer: "d/dx(uv) = u(dv/dx) + v(du/dx)",
    explanation: "Product rule: 'u dv plus v du'. For a product of two functions, d/dx(uv) = u(dv/dx) + v(du/dx)",
    hint: "This rule is for multiplying two functions. Think of the phrase 'first times derivative of second plus second times derivative of first'."
  },
  {
    id: 6,
    text: "If y = (2x + 1)³, what is dy/dx using the chain rule?",
    options: [
      { id: 'a', text: "6(2x + 1)²", correct: true },
      { id: 'b', text: "3(2x + 1)²" },
      { id: 'c', text: "6(2x + 1)" },
      { id: 'd', text: "(2x + 1)²" }
    ],
    correctAnswer: "6(2x + 1)²",
    explanation: "Chain rule: dy/dx = 3(2x + 1)² × 2 = 6(2x + 1)². Differentiate outside first, then multiply by derivative of inside",
    hint: "The chain rule is for a function inside another function. Differentiate the outer function, then multiply by the derivative of the inner function."
  },
  {
    id: 7,
    text: "What is the quotient rule for differentiation?",
    options: [
      { id: 'a', text: "d/dx(u/v) = [v(du/dx) - u(dv/dx)] / v²", correct: true },
      { id: 'b', text: "d/dx(u/v) = [u(dv/dx) + v(du/dx)] / v²" },
      { id: 'c', text: "d/dx(u/v) = (du/dx) / (dv/dx)" },
      { id: 'd', text: "d/dx(u/v) = [u(du/dx) - v(dv/dx)] / v²" }
    ],
    correctAnswer: "d/dx(u/v) = [v(du/dx) - u(dv/dx)] / v²",
    explanation: "Quotient rule: 'v du minus u dv, all over v squared'. Remember the minus sign!",
    hint: "This rule is for dividing two functions. The numerator is 'v times derivative of u minus u times derivative of v'."
  },
  {
    id: 8,
    text: "If y = x³ + 2x² - 5, what is the second derivative d²y/dx²?",
    options: [
      { id: 'a', text: "6x + 4", correct: true },
      { id: 'b', text: "3x² + 4x" },
      { id: 'c', text: "6x² + 4" },
      { id: 'd', text: "6x + 2" }
    ],
    correctAnswer: "6x + 4",
    explanation: "First derivative: dy/dx = 3x² + 4x. Second derivative: d²y/dx² = 6x + 4",
    hint: "Take the derivative of the first derivative."
  },
  {
    id: 9,
    text: "At a maximum point, what is the value of the second derivative?",
    options: [
      { id: 'a', text: "Negative", correct: true },
      { id: 'b', text: "Positive" },
      { id: 'c', text: "Zero" },
      { id: 'd', text: "Undefined" }
    ],
    correctAnswer: "Negative",
    explanation: "If d²y/dx² < 0, it's a maximum point. If d²y/dx² > 0, it's a minimum point",
    hint: "A negative second derivative indicates a concave down shape, like a maximum."
  },
  {
    id: 10,
    text: "To find turning points (max/min), what do you set equal to zero?",
    options: [
      { id: 'a', text: "The first derivative dy/dx", correct: true },
      { id: 'b', text: "The second derivative d²y/dx²" },
      { id: 'c', text: "The original function y" },
      { id: 'd', text: "The variable x" }
    ],
    correctAnswer: "The first derivative dy/dx",
    explanation: "At turning points, the slope is zero, so we set dy/dx = 0 and solve for x",
    hint: "Turning points are where the slope of the curve is zero."
  },
  {
    id: 11,
    text: "What is the derivative of y = 5x³ - 2x + 7?",
    options: [
      { id: 'a', text: "15x² - 2", correct: true },
      { id: 'b', text: "15x² - 2x + 7" },
      { id: 'c', text: "5x² - 2" },
      { id: 'd', text: "15x² - 1" }
    ],
    correctAnswer: "15x² - 2",
    explanation: "d/dx(5x³) - d/dx(2x) + d/dx(7) = 15x² - 2 + 0 = 15x² - 2",
    hint: "The derivative of a constant term is zero."
  },
  {
    id: 12,
    text: "If f(x) = x², what is f'(3)?",
    options: [
      { id: 'a', text: "6", correct: true },
      { id: 'b', text: "9" },
      { id: 'c', text: "3" },
      { id: 'd', text: "2" }
    ],
    correctAnswer: "6",
    explanation: "f'(x) = 2x, so f'(3) = 2(3) = 6",
    hint: "First find the general derivative, then substitute the value."
  },
  {
    id: 13,
    text: "What does the derivative represent geometrically?",
    options: [
      { id: 'a', text: "The slope of the tangent line to the curve", correct: true },
      { id: 'b', text: "The area under the curve" },
      { id: 'c', text: "The x-intercept of the curve" },
      { id: 'd', text: "The maximum value of the function" }
    ],
    correctAnswer: "The slope of the tangent line to the curve",
    explanation: "The derivative at a point gives the slope of the tangent line to the curve at that point",
    hint: "The derivative is the instantaneous rate of change, which corresponds to the steepness of a line touching the curve at a single point."
  },
  {
    id: 14,
    text: "If y = 7, what is dy/dx?",
    options: [
      { id: 'a', text: "0", correct: true },
      { id: 'b', text: "7" },
      { id: 'c', text: "1" },
      { id: 'd', text: "x" }
    ],
    correctAnswer: "0",
    explanation: "The derivative of any constant is zero",
    hint: "Seven is a constant number. What's the derivative of a constant?"
  },
  {
    id: 15,
    text: "What is the chain rule used for?",
    options: [
      { id: 'a', text: "Differentiating composite functions (function within a function)", correct: true },
      { id: 'b', text: "Differentiating products of functions" },
      { id: 'c', text: "Differentiating quotients of functions" },
      { id: 'd', text: "Differentiating constant functions" }
    ],
    correctAnswer: "Differentiating composite functions (function within a function)",
    explanation: "Chain rule is for composite functions like f(g(x)). Differentiate the outside, then multiply by the derivative of the inside",
    hint: "Think of a 'chain' of functions, one inside the other."
  },
  {
    id: 16,
    text: "If y = x⁵, what is dy/dx?",
    options: [
      { id: 'a', text: "5x⁴", correct: true },
      { id: 'b', text: "x⁴" },
      { id: 'c', text: "5x⁵" },
      { id: 'd', text: "x⁵/5" }
    ],
    correctAnswer: "5x⁴",
    explanation: "Using power rule: d/dx(x⁵) = 5x⁴",
    hint: "This is a direct application of the power rule."
  },
  {
    id: 17,
    text: "What is the power rule for differentiation?",
    options: [
      { id: 'a', text: "d/dx(axⁿ) = n·axⁿ⁻¹", correct: true },
      { id: 'b', text: "d/dx(axⁿ) = axⁿ⁺¹" },
      { id: 'c', text: "d/dx(axⁿ) = n·axⁿ⁺¹" },
      { id: 'd', text: "d/dx(axⁿ) = a·xⁿ⁻¹" }
    ],
    correctAnswer: "d/dx(axⁿ) = n·axⁿ⁻¹",
    explanation: "Power rule: multiply by the power, then subtract one from the power",
    hint: "The rule describes how to differentiate a variable raised to a power."
  },
  {
    id: 18,
    text: "If y = 4x³ - 6x² + 2x - 1, what is dy/dx?",
    options: [
      { id: 'a', text: "12x² - 12x + 2", correct: true },
      { id: 'b', text: "4x² - 6x + 2" },
      { id: 'c', text: "12x² - 6x + 2 - 1" },
      { id: 'd', text: "12x³ - 12x² + 2x" }
    ],
    correctAnswer: "12x² - 12x + 2",
    explanation: "d/dx(4x³) - d/dx(6x²) + d/dx(2x) - d/dx(1) = 12x² - 12x + 2 - 0 = 12x² - 12x + 2",
    hint: "Apply the power rule to each term and the constant rule to the last term."
  },
  {
    id: 19,
    text: "At a minimum point, what is the sign of the second derivative?",
    options: [
      { id: 'a', text: "Positive", correct: true },
      { id: 'b', text: "Negative" },
      { id: 'c', text: "Zero" },
      { id: 'd', text: "Could be either" }
    ],
    correctAnswer: "Positive",
    explanation: "If d²y/dx² > 0, it's a minimum point (curve is concave up)",
    hint: "A positive second derivative indicates a concave up shape, like a minimum."
  },
  {
    id: 20,
    text: "What is the derivative of y = x + 5?",
    options: [
      { id: 'a', text: "1", correct: true },
      { id: 'b', text: "x" },
      { id: 'c', text: "5" },
      { id: 'd', text: "x + 5" }
    ],
    correctAnswer: "1",
    explanation: "d/dx(x) + d/dx(5) = 1 + 0 = 1",
    hint: "The derivative of x is 1."
  },
  {
    id: 21,
    text: "If a function has a horizontal tangent line, what is the value of its derivative at that point?",
    options: [
      { id: 'a', text: "0", correct: true },
      { id: 'b', text: "1" },
      { id: 'c', text: "∞" },
      { id: 'd', text: "Undefined" }
    ],
    correctAnswer: "0",
    explanation: "A horizontal tangent has zero slope, so the derivative equals zero",
    hint: "Think about the slope of a flat line."
  },
  {
    id: 22,
    text: "What is the derivative of y = -3x⁴?",
    options: [
      { id: 'a', text: "-12x³", correct: true },
      { id: 'b', text: "-3x³" },
      { id: 'c', text: "12x³" },
      { id: 'd', text: "-12x⁴" }
    ],
    correctAnswer: "-12x³",
    explanation: "Using power rule: d/dx(-3x⁴) = -3 × 4x³ = -12x³",
    hint: "Don't forget the negative sign."
  },
  {
    id: 23,
    text: "Which step comes first when finding maximum/minimum points?",
    options: [
      { id: 'a', text: "Find dy/dx and set it equal to 0", correct: true },
      { id: 'b', text: "Find d²y/dx²" },
      { id: 'c', text: "Substitute x values into original function" },
      { id: 'd', text: "Draw the graph" }
    ],
    correctAnswer: "Find dy/dx and set it equal to 0",
    explanation: "Step 1: Find dy/dx and set to 0. Step 2: Solve for x. Step 3: Use second derivative test",
    hint: "To find the location of a turning point, you first need to find where the slope is zero."
  },
  {
    id: 24,
    text: "What is the derivative of y = 2x³ + x²?",
    options: [
      { id: 'a', text: "6x² + 2x", correct: true },
      { id: 'b', text: "6x² + x" },
      { id: 'c', text: "2x² + 2x" },
      { id: 'd', text: "6x³ + 2x" }
    ],
    correctAnswer: "6x² + 2x",
    explanation: "d/dx(2x³) + d/dx(x²) = 6x² + 2x",
    hint: "Apply the power rule to both terms separately."
  },
  {
    id: 25,
    text: "What does differentiation help us find in real-world applications?",
    options: [
      { id: 'a', text: "Rates of change and optimization", correct: true },
      { id: 'b', text: "Total accumulated values" },
      { id: 'c', text: "Average values" },
      { id: 'd', text: "Exact numerical solutions" }
    ],
    correctAnswer: "Rates of change and optimization",
    explanation: "Differentiation is used to find how fast things change and to optimize (maximize/minimize) real-world quantities",
    hint: "Think about what the derivative represents. 'Rate of change' is a key concept."
  },
  {
    id: 26,
    text: "If y = x⁶ - 3x⁴, what is dy/dx?",
    options: [
      { id: 'a', text: "6x⁵ - 12x³", correct: true },
      { id: 'b', text: "6x⁵ - 3x³" },
      { id: 'c', text: "x⁵ - 12x³" },
      { id: 'd', text: "6x⁶ - 12x⁴" }
    ],
    correctAnswer: "6x⁵ - 12x³",
    explanation: "d/dx(x⁶) - d/dx(3x⁴) = 6x⁵ - 12x³",
    hint: "Apply the power rule to each term in the expression."
  },
  {
    id: 27,
    text: "What is the second derivative test used for?",
    options: [
      { id: 'a', text: "To determine if a critical point is a maximum or minimum", correct: true },
      { id: 'b', text: "To find the first derivative" },
      { id: 'c', text: "To find the original function" },
      { id: 'd', text: "To find the area under a curve" }
    ],
    correctAnswer: "To determine if a critical point is a maximum or minimum",
    explanation: "Second derivative test: if d²y/dx² > 0, it's a minimum; if d²y/dx² < 0, it's a maximum",
    hint: "The first derivative finds the critical points. This test helps classify them."
  },
  {
    id: 28,
    text: "What is the derivative of y = 8x² - 4x + 3?",
    options: [
      { id: 'a', text: "16x - 4", correct: true },
      { id: 'b', text: "8x - 4" },
      { id: 'c', text: "16x - 4 + 3" },
      { id: 'd', text: "8x² - 4" }
    ],
    correctAnswer: "16x - 4",
    explanation: "d/dx(8x²) - d/dx(4x) + d/dx(3) = 16x - 4 + 0 = 16x - 4",
    hint: "Differentiate each term separately using the power and constant rules."
  },
  {
    id: 29,
    text: "In physics, what does the derivative of position with respect to time represent?",
    options: [
      { id: 'a', text: "Velocity (speed)", correct: true },
      { id: 'b', text: "Acceleration" },
      { id: 'c', text: "Distance" },
      { id: 'd', text: "Force" }
    ],
    correctAnswer: "Velocity (speed)",
    explanation: "The derivative of position with respect to time gives velocity. The derivative of velocity gives acceleration",
    hint: "Think about the rate of change of an object's position."
  },
  {
    id: 30,
    text: "What is the derivative of y = x² + x + 1?",
    options: [
      { id: 'a', text: "2x + 1", correct: true },
      { id: 'b', text: "x + 1" },
      { id: 'c', text: "2x + x + 1" },
      { id: 'd', text: "2x" }
    ],
    correctAnswer: "2x + 1",
    explanation: "d/dx(x²) + d/dx(x) + d/dx(1) = 2x + 1 + 0 = 2x + 1",
    hint: "Apply the power rule and constant rule to each term."
  }
];

export default questions;