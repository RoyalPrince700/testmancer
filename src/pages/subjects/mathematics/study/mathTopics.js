// This file contains the Mathematics topics and their subtopics for educational purposes.
export const MATHEMATICS_TOPICS = [
  {
    id: "algebra",
    title: "Algebra",
    icon: "FiBarChart2",
    description: "Master expressions, equations, and algebraic manipulation",
    color: "from-green-500 to-green-700",
    subtopics: [
      { name: "Indices-and-Logarithms", path: "/post-utme/mathematics/indices-logarithms" },
      { name: "Sequences-Series", path: "/post-utme/mathematics/sequences-series" },
      { name: "Equations-Inequalities", path: "/post-utme/mathematics/equations-inequalities" },
      { name: "Variation", path: "/post-utme/mathematics/variation" },
    ]
  },
  {
    id: "calculus",
    title: "Calculus",
    icon: "FiTrendingUp",
    description: "Understand change and motion through differentiation and integration",
    color: "from-blue-600 to-teal-500",
    subtopics: [
      { name: "Differentiation", path: "/post-utme/mathematics/differentiation" },
      { name: "Integration", path: "/post-utme/mathematics/integration" },
      { name: "Application-of-Calculus", path: "/post-utme/mathematics/application-calculus" }
    ]
  },
  {
    id: "number-theory",
    title: "Number Theory and Sets",
    icon: "FiHash",
    description: "Master properties of numbers and set operations",
    color: "from-yellow-500 to-orange-700",
    subtopics: [
      { name: "Sets-and-Venn-Diagrams", path: "/post-utme/mathematics/sets-venn-diagrams" },
      { name: "Number-Bases", path: "/post-utme/mathematics/number-bases" },
      { name: "Modular-Arithmetic", path: "/post-utme/mathematics/modular-arithmetic" }
    ]
  }
];
