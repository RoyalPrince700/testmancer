// src/pages/subjects/currentaffairs/study/nigerian-history/PreColo.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import LearningModule from "../../CurrentLearningModule";
import { PreColonialEraPage as pages } from './PreColonialPages';

const PreColo = () => (
  <LearningModule
  moduleId="Nigeria-History"   // must match Supabase `topic`
  subject="Current-Affairs"    // must match Supabase `subject` if you store it
  topic="nigeriahistory"      // same here
  subtopic="Pre-Colonial-Era"  // must match Supabase `subtopic`
    pages={pages}
    points={3}
    quizPath="/quiz-hub/current-affairs/pre-colonial-quiz"
    backPath="/post-utme/current-affairs"
    badges={[
      { name: "History Champion", color: "from-indigo-500 to-indigo-700" },
      { name: "Current Affairs Expert", color: "from-purple-500 to-purple-700" },
      { name: "Master", color: "from-blue-500 to-blue-700" }
    ]}
  />
);

export default PreColo;