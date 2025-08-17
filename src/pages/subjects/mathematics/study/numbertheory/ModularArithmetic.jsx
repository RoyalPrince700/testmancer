// src/pages/subjects/mathematics/study/numbertheory/ModularArithmetic.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import MathLearningModule from "../../MathLearningModule";
import { ModularArithmeticPage as pages } from './ModulaPages';

const ModularArithmetic = () => (
  <MathLearningModule
    moduleId="modular-arithmetic"
    subject="Mathematics"
    topic="numbertheory"
    subtopic="Modular-Arithmetic"
    pages={pages}
    points={3}
    quizPath="/quiz-hub/mathematics/modular-arithmetic-quiz"
    backPath="/post-utme/mathematics"
    badges={[
      { name: "Clock Arithmetic Master", color: "from-yellow-500 to-yellow-700" },
      { name: "Math Expert", color: "from-purple-500 to-purple-700" },
      { name: "Modular Champion", color: "from-red-500 to-red-700" }
    ]}
  />
);

export default ModularArithmetic;
