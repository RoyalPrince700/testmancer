// src/pages/subjects/currentaffairs/study/nigerian-history/StateCapital.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import LearningModule from "../../CurrentLearningModule";
import { NigeriaStatesPage as pages } from './StateCapitalPages';

const StateCapital = () => (
  <LearningModule
    moduleId="Current-Events"     // ✅ matches Supabase topic
    subject="Current-Affairs"      // ✅ consistent
    topic="currentevents"        // ✅ matches Supabase topic
    subtopic="State-And-Capital"        // ✅ exact match with Supabase
    pages={pages}
    points={3}
    quizPath="/quiz-hub/current-affairs/state-and-capital-quiz" // ✅ updated quiz path
    backPath="/post-utme/current-affairs"
    badges={[
      { name: "History Champion", color: "from-indigo-500 to-indigo-700" },
      { name: "Current Affairs Expert", color: "from-purple-500 to-purple-700" },
      { name: "Master", color: "from-blue-500 to-blue-700" }
    ]}
  />
);

export default StateCapital;
