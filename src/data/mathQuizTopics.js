export const mathQuizTopics = [
  {
    id: "algebra",
    title: "Algebra",
    icon: "FiBarChart2",
    description: "Master expressions, equations, and algebraic manipulation",
    color: "white",
    subtopics: [
      { name: "Indices-and-Logarithms", path: "/quiz-hub/mathematics/indices-quiz", quizId: "indices_quiz" },
      { name: "Sequences-Series", path: "/quiz-hub/mathematics/sequences-quiz", quizId: "sequences_quiz" },
      { name: "Equations-Inequalities", path: "/quiz-hub/mathematics/equations-quiz", quizId: "equations_quiz" },
      { name: "Variation", path: "/quiz-hub/mathematics/variation-quiz", quizId: "variation_quiz" },
    ],
  },
  {
    id: "calculus",
    title: "Calculus",
    icon: "FiTrendingUp",
    description: "Understand change and motion through differentiation and integration",
    color: "white",
    subtopics: [
      { name: "Differentiation", path: "/quiz-hub/mathematics/differentiation-quiz", quizId: "differentiation_quiz" },
      { name: "Integration", path: "/quiz-hub/mathematics/integration-quiz", quizId: "integration_quiz" },
      { name: "Application-of-Calculus", path: "/quiz-hub/mathematics/application-calculus-quiz", quizId: "application_calculus_quiz" }
    ]
  },
  {
    id: "numbertheory",
    title: "Number Theory and Sets",
    icon: "FiHash",
    description: "Master properties of numbers and set operations",
    color: "white",
    subtopics: [
      { name: "Sets-and-Venn-Diagrams", path: "/quiz-hub/mathematics/sets-venn-diagrams-quiz", quizId: "sets_venn_diagrams_quiz" },
      { name: "Number-Bases", path: "/quiz-hub/mathematics/number-bases-quiz", quizId: "number_bases_quiz" },
      { name: "Modular-Arithmetic", path: "/quiz-hub/mathematics/modular-arithmetic-quiz", quizId: "modular_arithmetic_quiz" }
    ]
  }
];