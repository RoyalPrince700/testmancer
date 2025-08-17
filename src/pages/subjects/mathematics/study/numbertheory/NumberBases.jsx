// src/pages/subjects/mathematics/study/numbertheory/NumberBases.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import MathLearningModule from "../../MathLearningModule";
import { NumberBasesPage as pages } from './NumberBasesPages';

const NumberBases = () => (
  <MathLearningModule
    moduleId="number-bases"
    subject="Mathematics"
    topic="numbertheory"
    subtopic="Number-Bases"
    pages={pages}
    points={3}
    quizPath="/quiz-hub/mathematics/number-bases-quiz"
    backPath="/post-utme/mathematics"
    badges={[
      { name: "Number System Expert", color: "from-yellow-500 to-yellow-700" },
      { name: "Math Expert", color: "from-purple-500 to-purple-700" },
      { name: "Binary Master", color: "from-green-500 to-green-700" }
    ]}
  />
);

export default NumberBases;
