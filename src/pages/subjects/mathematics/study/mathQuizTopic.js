// This file contains the Mathematics topics and their subtopics for educational purposes.
export const mathQuizTopics = [
  {
    id: "algebra",
    title: "Algebra",
    icon: "FiBarChart2",
    description: "Master expressions, equations, and algebraic manipulation",
    color: "white",
    progressColor: "bg-blue-500",
    subtopics: [
      { name: "Indices-and-Logarithms", path: "/post-utme/mathematics/indices-logarithms", quizId: "indices_quiz" },
      { name: "Sequences-Series", path: "/post-utme/mathematics/sequences-series", quizId: "sequence_quiz" },
      { name: "Equations-Inequalities", path: "/post-utme/mathematics/equations-inequalities", quizId: "equation_quiz" },
      { name: "Variation", path: "/post-utme/mathematics/variation", quizId: "variation_quiz" },
    ]
  },
  {
    id: "calculus",
    title: "Calculus",
    icon: "FiTrendingUp",
    description: "Understand change and motion through differentiation and integration",
    color: "white",
    subtopics: [
      { name: "Differentiation", path: "/post-utme/mathematics/differentiation", quizId: "differentiation_quiz" },
      { name: "Integration", path: "/post-utme/mathematics/integration", quizId: "integration_quiz" },
      { name: "Application-of-Calculus", path: "/post-utme/mathematics/application-calculus", quizId: "calculus_quiz" }
    ]
  },
  {
    id: "number-theory",
    title: "Number Theory and Sets",
    icon: "FiHash",
    description: "Master properties of numbers and set operations",
    color: "white",
    subtopics: [
      { name: "Sets-and-Venn-Diagrams", path: "/post-utme/mathematics/sets-venn-diagrams", quizId: "sets_quiz" },
      { name: "Number-Bases", path: "/post-utme/mathematics/number-bases", quizId: "number_quiz" },
      { name: "Modular-Arithmetic", path: "/post-utme/mathematics/modular-arithmetic", quizId: "modular_quiz" }
    ]
  }
];
