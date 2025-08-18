// src/pages/subject/concord/Concord.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import MathLearningModule from "../../MathLearningModule";
import { EquationsAndInequalitiesPage as pages } from './EquationPages';

const Equations = () => (
  <MathLearningModule
    moduleId="equations-inequalities"
    subject="Mathematics"
    topic="algebra"
    subtopic="Equations-Inequalities"
    pages={pages}
    points={3}
    quizPath="/quiz-hub/mathematics/equations-quiz"
    backPath="/post-utme/mathematics"
    badges={[
      { name: "Algebra Champion", color: "from-indigo-500 to-indigo-700" },
      { name: "Math Expert", color: "from-purple-500 to-purple-700" },
      { name: "Calculation Master", color: "from-blue-500 to-blue-700" }
    ]}
  />
);

export default Equations;