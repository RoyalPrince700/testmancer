// src/pages/subject/Sentence/Sentence.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import LearningModule from "../../../components/LearningModule";
import { SentencePages as pages } from '../../../data/SentencePages';

const Sentence = () => (
  <LearningModule
    moduleId="sentence"
    subject="English"
    topic="grammatical"
    subtopic="Sentence"
    pages={pages}
    points={3}
    quizPath="/quiz-hub/english/quiz-sentence"
    backPath="/post-utme/english"
    badges={[
      { name: "Sentence Champion", color: "from-indigo-500 to-indigo-700" },
      { name: "Grammar Expert", color: "from-purple-500 to-purple-700" },
      { name: "Verb Master", color: "from-blue-500 to-blue-700" }
    ]}
  />
);

export default Sentence;