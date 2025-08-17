// Quiz questions for Applications of Calculus
const questions = [
  {
    id: 1,
    text: "What is optimization in calculus used for?",
    options: [
      { id: 'a', text: "Finding the best possible outcome (maximum or minimum)", correct: true },
      { id: 'b', text: "Finding the area under curves" },
      { id: 'c', text: "Solving algebraic equations" },
      { id: 'd', text: "Converting number bases" }
    ],
    correctAnswer: "Finding the best possible outcome (maximum or minimum)",
    explanation: "Optimization uses calculus to find the best outcome - like maximum area, minimum cost, or most efficient design.",
    hint: "Think about finding the 'peak' or 'valley' of a function."
  },
  {
    id: 2,
    text: "A rectangular field has 40m of fencing. What dimensions give the maximum area?",
    options: [
      { id: 'a', text: "10m × 10m (a square)", correct: true },
      { id: 'b', text: "15m × 5m" },
      { id: 'c', text: "20m × 0m" },
      { id: 'd', text: "12m × 8m" }
    ],
    correctAnswer: "10m × 10m (a square)",
    explanation: "Let perimeter 2x+2y=40 → y=20-x. Area A=xy=x(20-x)=20x-x². dA/dx=20-2x=0 → x=10, y=10. Maximum area = 100m².",
    hint: "Use the perimeter to express one side in terms of the other, then find the derivative of the area function."
  },
  {
    id: 3,
    text: "What does differentiation represent in terms of speed and distance?",
    options: [
      { id: 'a', text: "It's like a speedometer - showing rate of change at a moment", correct: true },
      { id: 'b', text: "It's like an odometer - showing total distance traveled" },
      { id: 'c', text: "It shows the starting position" },
      { id: 'd', text: "It shows the final destination" }
    ],
    correctAnswer: "It's like a speedometer - showing rate of change at a moment",
    explanation: "Differentiation gives instantaneous rate of change, like a speedometer showing speed at one moment.",
    hint: "The derivative measures an instantaneous rate of change."
  },
  {
    id: 4,
    text: "What does integration represent in terms of speed and distance?",
    options: [
      { id: 'a', text: "It's like an odometer - showing total accumulated distance", correct: true },
      { id: 'b', text: "It's like a speedometer - showing speed at a moment" },
      { id: 'c', text: "It shows the acceleration" },
      { id: 'd', text: "It shows the direction of travel" }
    ],
    correctAnswer: "It's like an odometer - showing total accumulated distance",
    explanation: "Integration accumulates values over time, like an odometer showing total distance traveled.",
    hint: "Integration is the process of 'summing up' or 'accumulating'."
  },
  {
    id: 5,
    text: "How do you find the equation of a tangent line to a curve?",
    options: [
      { id: 'a', text: "Use the derivative to find the slope, then use point-slope form", correct: true },
      { id: 'b', text: "Use integration to find the area" },
      { id: 'c', text: "Set the function equal to zero" },
      { id: 'd', text: "Find the second derivative" }
    ],
    correctAnswer: "Use the derivative to find the slope, then use point-slope form",
    explanation: "The derivative gives the slope of the tangent. Then use y - y₁ = m(x - x₁) where m is the derivative value.",
    hint: "The derivative at a point is the slope of the tangent line at that point."
  },
  {
    id: 6,
    text: "For the curve y = x³ - x + 2 at x = 1, what is the slope of the tangent line?",
    options: [
      { id: 'a', text: "2", correct: true },
      { id: 'b', text: "1" },
      { id: 'c', text: "3" },
      { id: 'd', text: "0" }
    ],
    correctAnswer: "2",
    explanation: "dy/dx = 3x² - 1. At x = 1: slope = 3(1)² - 1 = 3 - 1 = 2.",
    hint: "First find the derivative of the function, then plug in the given x-value."
  },
  {
    id: 7,
    text: "What is a normal line?",
    options: [
      { id: 'a', text: "A line perpendicular to the tangent line", correct: true },
      { id: 'b', text: "A line parallel to the tangent line" },
      { id: 'c', text: "The same as the tangent line" },
      { id: 'd', text: "A horizontal line" }
    ],
    correctAnswer: "A line perpendicular to the tangent line",
    explanation: "A normal line is perpendicular to the tangent line at the point of contact.",
    hint: "Perpendicular lines have slopes that are negative reciprocals of each other."
  },
  {
    id: 8,
    text: "What is the area under y = x² + 1 from x = 0 to x = 2?",
    options: [
      { id: 'a', text: "14/3 square units", correct: true },
      { id: 'b', text: "8 square units" },
      { id: 'c', text: "6 square units" },
      { id: 'd', text: "10 square units" }
    ],
    correctAnswer: "14/3 square units",
    explanation: "∫₀²(x² + 1)dx = [x³/3 + x]₀² = (8/3 + 2) - 0 = 8/3 + 6/3 = 14/3.",
    hint: "Find the definite integral of the function over the given interval."
  },
  {
    id: 9,
    text: "What is a volume of revolution?",
    options: [
      { id: 'a', text: "The 3D volume formed when rotating a 2D shape around an axis", correct: true },
      { id: 'b', text: "The area between two curves" },
      { id: 'c', text: "The slope of a tangent line" },
      { id: 'd', text: "The maximum point of a function" }
    ],
    correctAnswer: "The 3D volume formed when rotating a 2D shape around an axis",
    explanation: "Volume of revolution is the 3D volume created when you rotate a 2D shape around an axis using integration.",
    hint: "This application uses integration to calculate a volume."
  },
  {
    id: 10,
    text: "In optimization problems, when does a function reach its maximum or minimum?",
    options: [
      { id: 'a', text: "When the derivative equals zero", correct: true },
      { id: 'b', text: "When the function equals zero" },
      { id: 'c', text: "When the second derivative equals zero" },
      { id: 'd', text: "When x equals zero" }
    ],
    correctAnswer: "When the derivative equals zero",
    explanation: "At max/min points, the slope (derivative) is zero because the tangent line is horizontal.",
    hint: "These points are also called 'critical points' or 'stationary points'."
  },
  {
    id: 11,
    text: "What is the main difference between definite and indefinite integrals in applications?",
    options: [
      { id: 'a', text: "Definite integrals give exact numerical answers, indefinite give general formulas", correct: true },
      { id: 'b', text: "Definite integrals are harder to calculate" },
      { id: 'c', text: "Indefinite integrals are more accurate" },
      { id: 'd', text: "There is no difference" }
    ],
    correctAnswer: "Definite integrals give exact numerical answers, indefinite give general formulas",
    explanation: "Definite integrals ∫ₐᵇf(x)dx give specific numerical values, while indefinite ∫f(x)dx give general functions with +C.",
    hint: "Definite integrals have a start and end point."
  },
  {
    id: 12,
    text: "In physics, if position is s(t) = t³ - 2t² + t, what is the velocity at t = 2?",
    options: [
      { id: 'a', text: "5 units/second", correct: true },
      { id: 'b', text: "3 units/second" },
      { id: 'c', text: "4 units/second" },
      { id: 'd', text: "6 units/second" }
    ],
    correctAnswer: "5 units/second",
    explanation: "Velocity = ds/dt = 3t² - 4t + 1. At t = 2: v = 3(4) - 4(2) + 1 = 12 - 8 + 1 = 5.",
    hint: "Velocity is the derivative of position with respect to time."
  },
  {
    id: 13,
    text: "What field uses calculus to find maximum profit and minimum cost?",
    options: [
      { id: 'a', text: "Economics", correct: true },
      { id: 'b', text: "Geography" },
      { id: 'c', text: "History" },
      { id: 'd', text: "Literature" }
    ],
    correctAnswer: "Economics",
    explanation: "Economics uses calculus optimization to maximize profit, minimize cost, and find optimal production levels.",
    hint: "This field deals with money, markets, and resource allocation."
  },
  {
    id: 14,
    text: "How do engineers use tangent lines in real applications?",
    options: [
      { id: 'a', text: "To know the instantaneous direction of road curves", correct: true },
      { id: 'b', text: "To calculate total distance" },
      { id: 'c', text: "To measure building heights" },
      { id: 'd', text: "To count materials needed" }
    ],
    correctAnswer: "To know the instantaneous direction of road curves",
    explanation: "Engineers use tangents to determine the instantaneous direction at any point on a curved road or path.",
    hint: "Think about how the tangent line's slope relates to the direction of a path."
  },
  {
    id: 15,
    text: "Instead of counting small rectangles manually, what does integration provide?",
    options: [
      { id: 'a', text: "An exact formula for the total area", correct: true },
      { id: 'b', text: "An approximate guess" },
      { id: 'c', text: "The slope at each point" },
      { id: 'd', text: "The maximum height" }
    ],
    correctAnswer: "An exact formula for the total area",
    explanation: "Integration adds up infinite small rectangles to give the exact total area under a curve.",
    hint: "Integration is the 'limit of a sum'."
  },
  {
    id: 16,
    text: "What is the volume when y = x (from x = 0 to 3) is rotated about the x-axis?",
    options: [
      { id: 'a', text: "9π cubic units", correct: true },
      { id: 'b', text: "9 cubic units" },
      { id: 'c', text: "27π cubic units" },
      { id: 'd', text: "3π cubic units" }
    ],
    correctAnswer: "9π cubic units",
    explanation: "V = π∫₀³(x)²dx = π∫₀³x²dx = π[x³/3]₀³ = π(27/3 - 0) = 9π. This forms a cone.",
    hint: "Use the disk method formula for volume of revolution: V = π∫[f(x)]²dx."
  },
  {
    id: 17,
    text: "Why is calculus important for solving real-world problems?",
    options: [
      { id: 'a', text: "It handles changing quantities and optimization", correct: true },
      { id: 'b', text: "It only works with constant values" },
      { id: 'c', text: "It's only useful for abstract mathematics" },
      { id: 'd', text: "It's too complex for practical use" }
    ],
    correctAnswer: "It handles changing quantities and optimization",
    explanation: "Calculus is powerful because it deals with rates of change and optimization, which are everywhere in real life.",
    hint: "Think about the core concepts of differentiation and integration."
  },
  {
    id: 18,
    text: "What happens at a turning point of a function?",
    options: [
      { id: 'a', text: "The slope becomes zero (horizontal tangent)", correct: true },
      { id: 'b', text: "The function becomes undefined" },
      { id: 'c', text: "The function crosses the x-axis" },
      { id: 'd', text: "The function becomes negative" }
    ],
    correctAnswer: "The slope becomes zero (horizontal tangent)",
    explanation: "At turning points (max/min), the derivative is zero, meaning the tangent line is horizontal.",
    hint: "A turning point is where the function changes direction from increasing to decreasing or vice-versa."
  },
  {
    id: 19,
    text: "How do physicists use calculus to understand motion?",
    options: [
      { id: 'a', text: "To find velocity and acceleration from position", correct: true },
      { id: 'b', text: "To count the number of objects" },
      { id: 'c', text: "To measure temperature" },
      { id: 'd', text: "To identify chemical elements" }
    ],
    correctAnswer: "To find velocity and acceleration from position",
    explanation: "Position → derivative → velocity → derivative → acceleration. Calculus connects these motion concepts.",
    hint: "The derivative is the rate of change."
  },
  {
    id: 20,
    text: "In optimization, what does 'constrained' mean?",
    options: [
      { id: 'a', text: "There are restrictions or limitations (like fixed perimeter)", correct: true },
      { id: 'b', text: "The problem has no solution" },
      { id: 'c', text: "The function is undefined" },
      { id: 'd', text: "The answer must be positive" }
    ],
    correctAnswer: "There are restrictions or limitations (like fixed perimeter)",
    explanation: "Constrained optimization means you're optimizing subject to certain restrictions, like fixed budget or materials.",
    hint: "Think about the word 'constraint' in everyday language."
  },
  {
    id: 21,
    text: "What is the practical use of finding critical points?",
    options: [
      { id: 'a', text: "To optimize real-world quantities like profit, cost, or efficiency", correct: true },
      { id: 'b', text: "To solve simple arithmetic" },
      { id: 'c', text: "To memorize formulas" },
      { id: 'd', text: "To practice algebra" }
    ],
    correctAnswer: "To optimize real-world quantities like profit, cost, or efficiency",
    explanation: "Critical points help find optimal solutions in business, engineering, science, and everyday problems.",
    hint: "Finding these points is the first step in solving optimization problems."
  },
  {
    id: 22,
    text: "How is calculus used in medicine?",
    options: [
      { id: 'a', text: "To model drug concentration changes in the body", correct: true },
      { id: 'b', text: "To count hospital beds" },
      { id: 'c', text: "To schedule appointments" },
      { id: 'd', text: "To design building layouts" }
    ],
    correctAnswer: "To model drug concentration changes in the body",
    explanation: "Calculus models how drug concentrations change over time, helping determine proper dosages and timing.",
    hint: "Think about how quantities change over time in a biological system."
  },
  {
    id: 23,
    text: "What does the second derivative tell us in optimization?",
    options: [
      { id: 'a', text: "Whether a critical point is a maximum or minimum", correct: true },
      { id: 'b', text: "The exact value of the function" },
      { id: 'c', text: "The x-intercept" },
      { id: 'd', text: "The domain of the function" }
    ],
    correctAnswer: "Whether a critical point is a maximum or minimum",
    explanation: "Second derivative test: if d²y/dx² > 0, it's a minimum; if d²y/dx² < 0, it's a maximum.",
    hint: "It helps you distinguish between a peak and a valley."
  },
  {
    id: 24,
    text: "In business, what might you optimize using calculus?",
    options: [
      { id: 'a', text: "Maximum revenue, minimum cost, optimal production levels", correct: true },
      { id: 'b', text: "Employee names and addresses" },
      { id: 'c', text: "Office furniture colors" },
      { id: 'd', text: "Meeting room numbers" }
    ],
    correctAnswer: "Maximum revenue, minimum cost, optimal production levels",
    explanation: "Calculus helps businesses find optimal strategies for profit maximization, cost minimization, and efficiency.",
    hint: "Think about business goals that involve maximizing or minimizing a value."
  },
  {
    id: 25,
    text: "Why is integration called 'accumulation'?",
    options: [
      { id: 'a', text: "It adds up all the small changes over an interval", correct: true },
      { id: 'b', text: "It subtracts values" },
      { id: 'c', text: "It finds the largest value" },
      { id: 'd', text: "It counts discrete objects" }
    ],
    correctAnswer: "It adds up all the small changes over an interval",
    explanation: "Integration accumulates (adds up) infinite small quantities over a continuous interval.",
    hint: "Integration is fundamentally about summing up tiny pieces."
  },
  {
    id: 26,
    text: "What real-world example illustrates the relationship between differentiation and integration?",
    options: [
      { id: 'a', text: "Speed and distance traveled", correct: true },
      { id: 'b', text: "Height and weight" },
      { id: 'c', text: "Age and shoe size" },
      { id: 'd', text: "Temperature and time of day" }
    ],
    correctAnswer: "Speed and distance traveled",
    explanation: "Speed is the derivative of distance; total distance is the integral of speed over time.",
    hint: "Think about how a car's speed and odometer are related."
  },
  {
    id: 27,
    text: "In architecture, how might calculus be applied?",
    options: [
      { id: 'a', text: "To optimize structural curves and minimize material usage", correct: true },
      { id: 'b', text: "To choose paint colors" },
      { id: 'c', text: "To schedule construction workers" },
      { id: 'd', text: "To count bricks" }
    ],
    correctAnswer: "To optimize structural curves and minimize material usage",
    explanation: "Architects use calculus to design optimal curves, minimize material costs, and maximize structural efficiency.",
    hint: "Calculus is useful for designing and optimizing shapes and structures."
  },
  {
    id: 28,
    text: "What is the key insight of the fundamental theorem of calculus?",
    options: [
      { id: 'a', text: "Differentiation and integration are inverse operations", correct: true },
      { id: 'b', text: "All functions are differentiable" },
      { id: 'c', text: "Integration is always harder than differentiation" },
      { id: 'd', text: "Calculus only works with polynomials" }
    ],
    correctAnswer: "Differentiation and integration are inverse operations",
    explanation: "The fundamental theorem shows that differentiation and integration 'undo' each other - they're inverse operations.",
    hint: "This theorem connects the two main branches of calculus."
  },
  {
    id: 29,
    text: "How do environmental scientists use calculus?",
    options: [
      { id: 'a', text: "To model population growth and pollution spread rates", correct: true },
      { id: 'b', text: "To name different species" },
      { id: 'c', text: "To count trees in a forest" },
      { id: 'd', text: "To identify rock types" }
    ],
    correctAnswer: "To model population growth and pollution spread rates",
    explanation: "Environmental scientists use calculus to model changing systems like population dynamics and pollution rates.",
    hint: "Calculus is essential for modeling systems that change over time."
  },
  {
    id: 30,
    text: "What makes calculus particularly powerful for problem-solving?",
    options: [
      { id: 'a', text: "It handles continuous change and finds optimal solutions", correct: true },
      { id: 'b', text: "It only works with whole numbers" },
      { id: 'c', text: "It avoids complex calculations" },
      { id: 'd', text: "It gives approximate answers only" }
    ],
    correctAnswer: "It handles continuous change and finds optimal solutions",
    explanation: "Calculus excels at modeling continuous change and finding precise optimal solutions to complex problems.",
    hint: "It provides a framework for understanding dynamic systems."
  }
];

export default questions;