// src/pages/subjects/mathematics/study/numbertheory/SetsVennDiagrams.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import MathLearningModule from "../../MathLearningModule";
import { SetsAndVennDiagramsPage as pages } from './SetPages';

const SetsVennDiagrams = () => (
  <MathLearningModule
    moduleId="sets-venn-diagrams"
    subject="Mathematics"
    topic="numbertheory"
    subtopic="Sets-and-Venn-Diagrams"
    pages={pages}
    points={3}
    quizPath="/quiz-hub/mathematics/sets-venn-diagrams-quiz"
    backPath="/post-utme/mathematics"
    badges={[
      { name: "Set Theory Master", color: "from-yellow-500 to-yellow-700" },
      { name: "Math Expert", color: "from-purple-500 to-purple-700" },
      { name: "Logic Champion", color: "from-orange-500 to-orange-700" }
    ]}
  />
);

export default SetsVennDiagrams;
