// src/pages/subject/concord/Concord.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import LearningModule from "../../../../components/LearningModule";
import { AntonymsPages as pages } from './AntonymsPages';

const Antonyms = () => (
  <LearningModule
    moduleId="antonyms"
    subject="English"
    topic="vocabulary"
    subtopic="Antonyms"
    pages={pages}
    points={3}
    quizPath="/quiz-hub/english-quiz/antonyms-quiz"
    backPath="/post-utme/english"
   badges={[
  { name: "Vocabulary Champion", color: "bg-gradient-to-r from-indigo-500 to-indigo-700", emoji: "🏆", points: 50 },
  { name: "Grammar Expert", color: "bg-gradient-to-r from-purple-500 to-purple-700", emoji: "📚", points: 30 },
  { name: "Verb Master", color: "bg-gradient-to-r from-blue-500 to-blue-700", emoji: "✍️", points: 20 }
]}

  />
);

export default Antonyms;