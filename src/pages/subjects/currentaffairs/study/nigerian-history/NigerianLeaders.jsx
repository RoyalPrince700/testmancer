// src/pages/subjects/currentaffairs/study/nigerian-history/NigerianLeaders.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import LearningModule from "../../CurrentLearningModule";
import { NigerianLeadersPage as pages } from './NigerianLeadersPages';

const NigerianLeaders = () => (
  <LearningModule
    moduleId="Nigeria-History"     // ✅ matches Supabase topic
    subject="Current-Affairs"      // ✅ consistent with Supabase
    topic="nigeriahistory"        // ✅ matches Supabase topic
    subtopic="Nigerian-Leaders"    // ✅ matches Supabase subtopic
    pages={pages}
    points={3}
    quizPath="/quiz-hub/current-affairs/nigeria-leaders-quiz" // 🔧 updated quiz path
    backPath="/post-utme/current-affairs"
    badges={[
      { name: "History Champion", color: "from-indigo-500 to-indigo-700" },
      { name: "Current Affairs Expert", color: "from-purple-500 to-purple-700" },
      { name: "Master", color: "from-blue-500 to-blue-700" }
    ]}
  />
);

export default NigerianLeaders;
