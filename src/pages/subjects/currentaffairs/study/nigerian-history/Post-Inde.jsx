// src/pages/subjects/currentaffairs/study/nigerian-history/Post-Inde.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiBook } from "react-icons/fi";
import LearningModule from "../../CurrentLearningModule";
import { PostIndependencePage as pages } from './Post-IndependencePages';

const PostIndependence = () => (
  <LearningModule
    moduleId="Nigeria-History"   // ✅ matches Supabase topic
    subject="Current-Affairs"    // ✅ keep consistent with DB
    topic="nigeriahistory"      // ✅ matches Supabase topic
    subtopic="Post-Independence" // ✅ matches Supabase subtopic
    pages={pages}
    points={3}
    quizPath="/quiz-hub/current-affairs/post-independence-quiz" // 🔧 fixed quiz name
    backPath="/post-utme/current-affairs"
    badges={[
      { name: "History Champion", color: "from-indigo-500 to-indigo-700" },
      { name: "Current Affairs Expert", color: "from-purple-500 to-purple-700" },
      { name: "Master", color: "from-blue-500 to-blue-700" }
    ]}
  />
);

export default PostIndependence;
