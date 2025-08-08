// src/pages/subject/concord/Concord.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import LearningModule from "../../../components/LearningModule";
import { PunctuationPages as pages } from '../../../data/PunctuationPage';

const Punctuation = () => (
  <LearningModule
    moduleId="punctuation"
    subject="English"
    topic="grammatical"
    subtopic="Punctuation"
    pages={pages}
    points={3}
    quizPath="/quiz-hub/english/quiz-punctuation"
    backPath="/post-utme/english"
    badges={[
      { name: "Punctuation Champion", color: "from-indigo-500 to-indigo-700" },
      { name: "Grammar Expert", color: "from-purple-500 to-purple-700" },
      { name: "Verb Master", color: "from-blue-500 to-blue-700" }
    ]}
  />
);

export default Punctuation;