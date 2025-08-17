// Quiz questions for Variation (matching learning content)
const questions = [
  {
    id: 1,
    text: "If y varies directly with x, and y = 20 when x = 4, what is y when x = 6?",
    options: [
      { id: 'a', text: "30", correct: true },
      { id: 'b', text: "24" },
      { id: 'c', text: "26" },
      { id: 'd', text: "32" }
    ],
    correctAnswer: "30",
    explanation: "Direct variation: y = kx. Find k: 20 = k(4), so k = 5. Then y = 5(6) = 30",
    hint: "First find the constant of variation k, then use it to find the new value."
  },
  {
    id: 2,
    text: "What is the general form of direct variation?",
    options: [
      { id: 'a', text: "y = kx", correct: true },
      { id: 'b', text: "y = k/x" },
      { id: 'c', text: "y = kx²" },
      { id: 'd', text: "xy = k" }
    ],
    correctAnswer: "y = kx",
    explanation: "Direct variation means y is directly proportional to x, written as y = kx where k is the constant of variation.",
    hint: "In direct variation, as one variable increases, the other increases proportionally."
  },
  {
    id: 3,
    text: "If y varies inversely with x, and y = 12 when x = 3, what is y when x = 9?",
    options: [
      { id: 'a', text: "4", correct: true },
      { id: 'b', text: "36" },
      { id: 'c', text: "27" },
      { id: 'd', text: "6" }
    ],
    correctAnswer: "4",
    explanation: "Inverse variation: y = k/x. Find k: 12 = k/3, so k = 36. Then y = 36/9 = 4",
    hint: "In inverse variation, the product xy remains constant."
  },
  {
    id: 4,
    text: "What is the general form of inverse variation?",
    options: [
      { id: 'a', text: "y = k/x", correct: true },
      { id: 'b', text: "y = kx" },
      { id: 'c', text: "y = kx²" },
      { id: 'd', text: "y = k + x" }
    ],
    correctAnswer: "y = k/x",
    explanation: "Inverse variation means y is inversely proportional to x, written as y = k/x or xy = k.",
    hint: "In inverse variation, as one variable increases, the other decreases."
  },
  {
    id: 5,
    text: "If y varies jointly with x and z, and y = 24 when x = 2 and z = 3, what is y when x = 4 and z = 5?",
    options: [
      { id: 'a', text: "80", correct: true },
      { id: 'b', text: "40" },
      { id: 'c', text: "60" },
      { id: 'd', text: "120" }
    ],
    correctAnswer: "80",
    explanation: "Joint variation: y = kxz. Find k: 24 = k(2)(3), so k = 4. Then y = 4(4)(5) = 80",
    hint: "Joint variation means y varies directly with the product of two or more variables."
  },
  {
    id: 6,
    text: "What is the general form of joint variation?",
    options: [
      { id: 'a', text: "y = kxz", correct: true },
      { id: 'b', text: "y = k(x + z)" },
      { id: 'c', text: "y = kx/z" },
      { id: 'd', text: "y = k/xz" }
    ],
    correctAnswer: "y = kxz",
    explanation: "Joint variation means y varies directly with the product of two or more variables: y = kxz.",
    hint: "The word 'joint' suggests multiplication or product."
  },
  {
    id: 7,
    text: "If y varies directly with x², and y = 32 when x = 4, what is y when x = 6?",
    options: [
      { id: 'a', text: "72", correct: true },
      { id: 'b', text: "48" },
      { id: 'c', text: "54" },
      { id: 'd', text: "96" }
    ],
    correctAnswer: "72",
    explanation: "y = kx². Find k: 32 = k(4²) = 16k, so k = 2. Then y = 2(6²) = 2(36) = 72",
    hint: "When y varies with x², substitute the square of x into the equation."
  },
  {
    id: 8,
    text: "If y varies inversely with x², and y = 8 when x = 2, what is y when x = 4?",
    options: [
      { id: 'a', text: "2", correct: true },
      { id: 'b', text: "4" },
      { id: 'c', text: "16" },
      { id: 'd', text: "32" }
    ],
    correctAnswer: "2",
    explanation: "y = k/x². Find k: 8 = k/2² = k/4, so k = 32. Then y = 32/4² = 32/16 = 2",
    hint: "Use the square of x in the denominator for inverse square variation."
  },
  {
    id: 9,
    text: "What happens to y in direct variation when x is doubled?",
    options: [
      { id: 'a', text: "y is doubled", correct: true },
      { id: 'b', text: "y is halved" },
      { id: 'c', text: "y is quadrupled" },
      { id: 'd', text: "y remains the same" }
    ],
    correctAnswer: "y is doubled",
    explanation: "In direct variation y = kx, if x becomes 2x, then y becomes k(2x) = 2(kx) = 2y.",
    hint: "Direct variation means they change proportionally in the same direction."
  },
  {
    id: 10,
    text: "What happens to y in inverse variation when x is doubled?",
    options: [
      { id: 'a', text: "y is halved", correct: true },
      { id: 'b', text: "y is doubled" },
      { id: 'c', text: "y is quadrupled" },
      { id: 'd', text: "y remains the same" }
    ],
    correctAnswer: "y is halved",
    explanation: "In inverse variation y = k/x, if x becomes 2x, then y becomes k/(2x) = (1/2)(k/x) = y/2.",
    hint: "Inverse variation means they change in opposite directions."
  },
  {
    id: 11,
    text: "If p varies directly with q and inversely with r, what is the general form?",
    options: [
      { id: 'a', text: "p = kq/r", correct: true },
      { id: 'b', text: "p = kr/q" },
      { id: 'c', text: "p = kqr" },
      { id: 'd', text: "p = k/(qr)" }
    ],
    correctAnswer: "p = kq/r",
    explanation: "Combined variation: direct with q means multiply by q, inverse with r means divide by r.",
    hint: "Direct variation goes in the numerator, inverse variation goes in the denominator."
  },
  {
    id: 12,
    text: "If the area of a circle varies directly with the square of its radius, and A = 50 when r = 5, what is A when r = 10?",
    options: [
      { id: 'a', text: "200", correct: true },
      { id: 'b', text: "100" },
      { id: 'c', text: "400" },
      { id: 'd', text: "500" }
    ],
    correctAnswer: "200",
    explanation: "A = kr². Find k: 50 = k(5²) = 25k, so k = 2. Then A = 2(10²) = 2(100) = 200",
    hint: "The radius is squared in the variation equation."
  },
  {
    id: 13,
    text: "What is the constant of variation in the relationship y = 6x?",
    options: [
      { id: 'a', text: "6", correct: true },
      { id: 'b', text: "x" },
      { id: 'c', text: "y" },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "6",
    explanation: "In y = kx, the constant of variation k is the coefficient of x, which is 6.",
    hint: "The constant of variation is the number that doesn't change in the relationship."
  },
  {
    id: 14,
    text: "If y varies directly with x, what is the graph of this relationship?",
    options: [
      { id: 'a', text: "A straight line through the origin", correct: true },
      { id: 'b', text: "A parabola" },
      { id: 'c', text: "A hyperbola" },
      { id: 'd', text: "A circle" }
    ],
    correctAnswer: "A straight line through the origin",
    explanation: "y = kx is a linear equation with no y-intercept, so it passes through the origin (0,0).",
    hint: "The equation y = kx represents a linear relationship starting at the origin."
  },
  {
    id: 15,
    text: "If xy = 24 (constant), what type of variation is this?",
    options: [
      { id: 'a', text: "Inverse variation", correct: true },
      { id: 'b', text: "Direct variation" },
      { id: 'c', text: "Joint variation" },
      { id: 'd', text: "No variation" }
    ],
    correctAnswer: "Inverse variation",
    explanation: "xy = k (constant) is the same as y = k/x, which is inverse variation.",
    hint: "When the product of two variables is constant, they vary inversely."
  },
  {
    id: 16,
    text: "If z varies jointly with x and y, and z = 60 when x = 3 and y = 4, find k.",
    options: [
      { id: 'a', text: "5", correct: true },
      { id: 'b', text: "15" },
      { id: 'c', text: "20" },
      { id: 'd', text: "12" }
    ],
    correctAnswer: "5",
    explanation: "z = kxy. Substitute: 60 = k(3)(4) = 12k, so k = 60/12 = 5",
    hint: "Substitute the given values into the joint variation equation to find k."
  },
  {
    id: 17,
    text: "If w varies directly with u and inversely with v², and w = 12 when u = 8 and v = 2, what is w when u = 6 and v = 3?",
    options: [
      { id: 'a', text: "4", correct: true },
      { id: 'b', text: "8" },
      { id: 'c', text: "6" },
      { id: 'd', text: "12" }
    ],
    correctAnswer: "4",
    explanation: "w = ku/v². Find k: 12 = k(8)/(2²) = 8k/4 = 2k, so k = 6. Then w = 6(6)/(3²) = 36/9 = 4",
    hint: "Set up the combined variation equation and solve for k first."
  },
  {
    id: 18,
    text: "In the relationship F = kma (Newton's second law), what type of variation is this?",
    options: [
      { id: 'a', text: "Joint variation", correct: true },
      { id: 'b', text: "Direct variation" },
      { id: 'c', text: "Inverse variation" },
      { id: 'd', text: "Combined variation" }
    ],
    correctAnswer: "Joint variation",
    explanation: "F varies jointly with m and a because F = k(ma), where k is constant (k = 1 in SI units).",
    hint: "Force depends on both mass and acceleration multiplied together."
  },
  {
    id: 19,
    text: "If y varies inversely with x, what happens to y when x is tripled?",
    options: [
      { id: 'a', text: "y becomes one-third", correct: true },
      { id: 'b', text: "y is tripled" },
      { id: 'c', text: "y becomes nine times larger" },
      { id: 'd', text: "y remains the same" }
    ],
    correctAnswer: "y becomes one-third",
    explanation: "If x becomes 3x, then y = k/(3x) = (1/3)(k/x) = y/3, so y becomes one-third of its original value.",
    hint: "In inverse variation, multiplication in one variable causes division in the other."
  },
  {
    id: 20,
    text: "What is the key difference between direct and inverse variation?",
    options: [
      { id: 'a', text: "Direct: variables increase together; Inverse: one increases as other decreases", correct: true },
      { id: 'b', text: "Direct uses addition; Inverse uses subtraction" },
      { id: 'c', text: "Direct is linear; Inverse is always quadratic" },
      { id: 'd', text: "There is no difference" }
    ],
    correctAnswer: "Direct: variables increase together; Inverse: one increases as other decreases",
    explanation: "Direct variation means proportional change in the same direction; inverse means proportional change in opposite directions.",
    hint: "Think about the word 'inverse' meaning opposite."
  },
  {
    id: 21,
    text: "If the volume of a gas varies inversely with pressure (Boyle's Law), and V = 20 liters when P = 3 atm, what is V when P = 5 atm?",
    options: [
      { id: 'a', text: "12 liters", correct: true },
      { id: 'b', text: "15 liters" },
      { id: 'c', text: "25 liters" },
      { id: 'd', text: "33.3 liters" }
    ],
    correctAnswer: "12 liters",
    explanation: "V = k/P. Find k: 20 = k/3, so k = 60. Then V = 60/5 = 12 liters",
    hint: "This is a real-world example of inverse variation in physics."
  },
  {
    id: 22,
    text: "If s varies directly with t², and s = 144 when t = 6, what is s when t = 8?",
    options: [
      { id: 'a', text: "256", correct: true },
      { id: 'b', text: "192" },
      { id: 'c', text: "128" },
      { id: 'd', text: "216" }
    ],
    correctAnswer: "256",
    explanation: "s = kt². Find k: 144 = k(6²) = 36k, so k = 4. Then s = 4(8²) = 4(64) = 256",
    hint: "Don't forget to square the value of t in the equation."
  },
  {
    id: 23,
    text: "What does it mean when we say 'y is proportional to x'?",
    options: [
      { id: 'a', text: "y varies directly with x", correct: true },
      { id: 'b', text: "y varies inversely with x" },
      { id: 'c', text: "y and x are equal" },
      { id: 'd', text: "y and x are unrelated" }
    ],
    correctAnswer: "y varies directly with x",
    explanation: "'Proportional to' means direct variation. If y is proportional to x, then y = kx for some constant k.",
    hint: "Proportional means the ratio y/x is constant."
  },
  {
    id: 24,
    text: "If A varies jointly with l and w, representing the area of a rectangle, what is the constant k?",
    options: [
      { id: 'a', text: "1", correct: true },
      { id: 'b', text: "2" },
      { id: 'c', text: "π" },
      { id: 'd', text: "4" }
    ],
    correctAnswer: "1",
    explanation: "For a rectangle, A = lw, so A = 1×l×w. The constant of variation k = 1.",
    hint: "The area of a rectangle is simply length times width."
  },
  {
    id: 25,
    text: "If y varies as the square root of x, and y = 10 when x = 25, what is y when x = 100?",
    options: [
      { id: 'a', text: "20", correct: true },
      { id: 'b', text: "40" },
      { id: 'c', text: "50" },
      { id: 'd', text: "25" }
    ],
    correctAnswer: "20",
    explanation: "y = k√x. Find k: 10 = k√25 = 5k, so k = 2. Then y = 2√100 = 2(10) = 20",
    hint: "Remember to take the square root of x, not square it."
  },
  {
    id: 26,
    text: "What type of variation is represented by xy² = k?",
    options: [
      { id: 'a', text: "x varies inversely with y²", correct: true },
      { id: 'b', text: "x varies directly with y²" },
      { id: 'c', text: "x varies jointly with y²" },
      { id: 'd', text: "No variation" }
    ],
    correctAnswer: "x varies inversely with y²",
    explanation: "xy² = k can be written as x = k/y², which shows x varies inversely with y².",
    hint: "Rearrange the equation to solve for one variable in terms of the other."
  },
  {
    id: 27,
    text: "If the gravitational force varies inversely with the square of distance, and F = 100 N when d = 2 m, what is F when d = 4 m?",
    options: [
      { id: 'a', text: "25 N", correct: true },
      { id: 'b', text: "50 N" },
      { id: 'c', text: "200 N" },
      { id: 'd', text: "400 N" }
    ],
    correctAnswer: "25 N",
    explanation: "F = k/d². Find k: 100 = k/2² = k/4, so k = 400. Then F = 400/4² = 400/16 = 25 N",
    hint: "This is Newton's law of universal gravitation - force decreases rapidly with distance."
  },
  {
    id: 28,
    text: "In the equation y = 3x⁴, what type of variation is this?",
    options: [
      { id: 'a', text: "y varies directly with x⁴", correct: true },
      { id: 'b', text: "y varies inversely with x⁴" },
      { id: 'c', text: "y varies jointly with x⁴" },
      { id: 'd', text: "No variation" }
    ],
    correctAnswer: "y varies directly with x⁴",
    explanation: "y = 3x⁴ shows y varies directly with the fourth power of x, with k = 3.",
    hint: "The variable x is in the numerator with a positive power."
  },
  {
    id: 29,
    text: "What happens to the area of a square when its side length is doubled?",
    options: [
      { id: 'a', text: "Area becomes 4 times larger", correct: true },
      { id: 'b', text: "Area becomes 2 times larger" },
      { id: 'c', text: "Area becomes 8 times larger" },
      { id: 'd', text: "Area remains the same" }
    ],
    correctAnswer: "Area becomes 4 times larger",
    explanation: "A = s². If s becomes 2s, then A = (2s)² = 4s² = 4A. The area varies directly with s².",
    hint: "Area varies with the square of the side length."
  },
  {
    id: 30,
    text: "Why is variation important in mathematics and science?",
    options: [
      { id: 'a', text: "It describes how quantities change in relation to each other", correct: true },
      { id: 'b', text: "It makes calculations more difficult" },
      { id: 'c', text: "It only applies to abstract concepts" },
      { id: 'd', text: "It's not actually important" }
    ],
    correctAnswer: "It describes how quantities change in relation to each other",
    explanation: "Variation helps us understand and predict how one quantity changes when another changes, essential in science and real-world applications.",
    hint: "Think about how variation helps us model real-world relationships."
  }
];

export default questions;
