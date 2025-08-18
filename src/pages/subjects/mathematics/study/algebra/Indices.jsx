// src/pages/subject/concord/Concord.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import MathLearningModule from "../../MathLearningModule";
import { IndicesAndLogarithmsPage as pages } from './IndicesPages';

const Indices = () => (
  <MathLearningModule
    moduleId="indices"
    subject="Mathematics"
    topic="algebra"
    subtopic="Indices-and-Logarithms"
    pages={pages}
    points={3}
    quizPath="/quiz-hub/mathematics/indices-quiz"
    backPath="/post-utme/mathematics"
    badges={[
      { name: "Algebra Champion", color: "from-indigo-500 to-indigo-700" },
      { name: "Math Expert", color: "from-purple-500 to-purple-700" },
      { name: "Calculation Master", color: "from-blue-500 to-blue-700" }
    ]}
  />
);

export default Indices;