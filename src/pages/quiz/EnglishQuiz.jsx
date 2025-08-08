import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiEdit,
  FiBookOpen,
  FiMessageSquare,
  FiVolume2,
  FiBook,
  FiChevronDown,
  FiChevronUp,
  FiAward,
  FiBarChart2,
  FiUser,
  FiArrowRight,
  FiBookmark,
  FiLoader,
  FiZap,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../../provider/AuthContext";
import { supabase } from "../../../supabase/supabaseClient";

export const EnglishQuiz = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [userStats, setUserStats] = useState({
    points: 0,
    rank: 0,
    streak: 0,
    completedQuizzes: 0,
  });
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");

  // Define static topics structure with quiz IDs
  const initialTopics = [
    {
      id: "grammatical",
      title: "Grammatical Rules and Usage",
      icon: FiEdit,
      description: "Master structure, correctness, and clarity in writing and speaking",
      color: "from-indigo-500 to-indigo-700",
      subtopics: [
        { name: "Tenses", path: "/quiz-hub/english/quiz-tenses", quizId: "tenses_quiz" },
        { name: "Concord (subject-verb agreement)", path: "/quiz-hub/english-quiz/concord-quiz", quizId: "concord_quiz" },
        { name: "Sentence Structure", path: "/quiz-hub/english-quiz/sentence-structure-quiz", quizId: "sentence_structure_quiz" },
        { name: "Types of Sentences", path: "/quiz-hub/english-quiz/sentence-types-quiz", quizId: "sentence_types_quiz" },
        { name: "Punctuation", path: "/quiz-hub/english-quiz/punctuation-quiz", quizId: "punctuation_quiz" },
        { name: "Subjunctive Mood", path: "/quiz-hub/english-quiz/subjunctive-quiz", quizId: "subjunctive_quiz" },
        { name: "Real and Unreal Future", path: "/quiz-hub/english-quiz/future-quiz", quizId: "future_quiz" },
        { name: "Errors in English Language", path: "/quiz-hub/english-quiz/errors-quiz", quizId: "errors_quiz" },
        { name: "Question Tags", path: "/quiz-hub/english-quiz/question-tags-quiz", quizId: "question_tags_quiz" },
      ],
    },
    {
      id: "vocabulary",
      title: "Vocabulary and Word Meaning",
      icon: FiBookOpen,
      description: "Enhance your word knowledge and usage accuracy",
      color: "from-indigo-600 to-purple-600",
      subtopics: [
        { name: "Synonyms", path: "/quiz-hub/english-quiz/synonyms-quiz", quizId: "synonyms_quiz" },
        { name: "Antonyms", path: "/quiz-hub/english-quiz/antonyms-quiz", quizId: "antonyms_quiz" },
        { name: "Word Meanings", path: "/quiz-hub/english-quiz/word-meanings-quiz", quizId: "word_meanings_quiz" },
        { name: "Idioms", path: "/quiz-hub/english-quiz/idioms-quiz", quizId: "idioms_quiz" },
        { name: "Homonyms", path: "/quiz-hub/english-quiz/homonyms-quiz", quizId: "homonyms_quiz" },
      ],
    },
    {
      id: "comprehension",
      title: "Comprehension and Summary",
      icon: FiMessageSquare,
      description: "Develop skills in understanding and summarizing texts",
      color: "from-indigo-700 to-blue-600",
      subtopics: [
        { name: "Comprehension Passages", path: "/quiz-hub/english-quiz/comprehension-quiz", quizId: "comprehension_quiz" },
        { name: "Summary Skills", path: "/quiz-hub/english-quiz/summary-quiz", quizId: "summary_quiz" },
      ],
    },
    {
      id: "oral",
      title: "Oral and Written English",
      icon: FiVolume2,
      description: "Improve speaking and spelling conventions",
      color: "from-purple-500 to-indigo-600",
      subtopics: [
        { name: "Spelling", path: "/quiz-hub/english-quiz/spelling-quiz", quizId: "spelling_quiz" },
        { name: "Oral English", path: "/quiz-hub/english-quiz/oral-quiz", quizId: "oral_quiz" },
      ],
    },
    {
      id: "modifiers",
      title: "Modifiers and Sentence Elements",
      icon: FiBook,
      description: "Master sentence expansion and detail clarity",
      color: "from-blue-600 to-indigo-700",
      subtopics: [
        { name: "Adverbial and Adjectival Order", path: "/quiz-hub/english-quiz/modifiers-quiz", quizId: "modifiers_quiz" },
        { name: "Participial Forms", path: "/quiz-hub/english-quiz/participial-quiz", quizId: "participial_quiz" },
        { name: "Infinitive and Gerund Forms", path: "/quiz-hub/english-quiz/infinitive-gerund-quiz", quizId: "infinitive_gerund_quiz" },
      ],
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Initialize userStats to avoid stale data
        let updatedStats = {
          points: 0,
          rank: 0,
          streak: 0,
          completedQuizzes: 0,
        };

        // Fetch user profile for first name
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("full_name")
          .eq("id", user.id)
          .single();

        if (profileError) {
          console.error("Error fetching profile:", profileError);
        } else if (profileData?.full_name) {
          setFirstName(profileData.full_name.split(" ")[0]);
        }

        // Fetch user stats from leaderboard
        const { data: leaderboardData, error: lbError } = await supabase
          .from("leaderboard")
          .select("total_points, rank")
          .eq("user_id", user.id)
          .single();

        if (lbError) {
          console.error("Error fetching leaderboard:", lbError);
        } else {
          updatedStats.points = leaderboardData?.total_points || 0;
          updatedStats.rank = leaderboardData?.rank || 0;
        }

        // Fetch streak from user_activity
        const { data: activityData, error: activityError } = await supabase
          .from("user_activity")
          .select("streak")
          .eq("user_id", user.id)
          .single();

        if (activityError) {
          console.error("Error fetching activity:", activityError);
        } else {
          updatedStats.streak = activityData?.streak || 0;
        }

        // Fetch quiz progress from the new table
        const { data: quizProgressData, error: progressError } = await supabase
          .from("postutme_quiz_progress")
          .select("quiz_id, completed, best_score, attempts")
          .eq("user_id", user.id);

        if (progressError) {
          console.error("Error fetching quiz progress:", progressError);
        }

        // Create a map of quiz progress for quick lookup
        const quizProgressMap = {};
        if (quizProgressData) {
          quizProgressData.forEach(progress => {
            quizProgressMap[progress.quiz_id] = progress;
          });
          
          // Count completed quizzes
          updatedStats.completedQuizzes = quizProgressData.filter(p => p.completed).length;
        }

        // Process topics with progress
        const topicsWithProgress = initialTopics.map((topic) => {
          const completedSubtopics = topic.subtopics.filter(
            subtopic => quizProgressMap[subtopic.quizId]?.completed
          );
          
          const subtopicsWithStatus = topic.subtopics.map((subtopic) => {
            const progress = quizProgressMap[subtopic.quizId];
            return {
              ...subtopic,
              completed: progress?.completed || false,
              bestScore: progress?.best_score || 0,
              attempts: progress?.attempts || 0
            };
          });

          return {
            ...topic,
            completed: completedSubtopics.length,
            total: topic.subtopics.length,
            subtopics: subtopicsWithStatus,
          };
        });

        // Update state
        setUserStats(updatedStats);
        setTopics(topicsWithProgress);
      } catch (error) {
        console.error("Unexpected error fetching data:", error);
        // Fallback to initial topics with zero progress
        setTopics(
          initialTopics.map((t) => ({
            ...t,
            completed: 0,
            total: t.subtopics.length,
            subtopics: t.subtopics.map((s) => ({ 
              ...s, 
              completed: false,
              bestScore: 0,
              attempts: 0
            })),
          }))
        );
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated && user) {
      fetchData();
    } else {
      // Fallback for unauthenticated users
      setTopics(
        initialTopics.map((t) => ({
          ...t,
          completed: 0,
          total: t.subtopics.length,
          subtopics: t.subtopics.map((s) => ({ 
            ...s, 
            completed: false,
            bestScore: 0,
            attempts: 0
          })),
        }))
      );
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  const toggleTopic = (index) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  const calculatePercentage = (completed, total) => {
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="text-center">
          <FiLoader className="animate-spin text-3xl text-indigo-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your English quiz progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <FiBookmark className="text-indigo-600" />
              English Quiz Hub
            </h1>
            <p className="text-lg text-gray-600">
              Select a topic and subtopic to begin your English language quiz
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm mt-4 md:mt-0">
            <div className="bg-indigo-100 border-2 border-dashed rounded-full w-12 h-12 flex items-center justify-center">
              <FiUser className="text-indigo-500 text-xl" />
            </div>
            <div>
              <h2 className="font-bold text-gray-800">
                {firstName ? `${firstName}'s Progress` : "English Learner"}
              </h2>
              <p className="text-sm text-gray-600">
                {isAuthenticated ? `Rank #${userStats.rank}` : "Log in to track progress"}
              </p>
            </div>
          </div>
        </div>

        {/* Personalized Motivation */}
        {firstName && isAuthenticated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl p-6 text-white text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <FiZap className="text-yellow-300 animate-pulse text-xl" />
              <h2 className="text-xl font-bold">
                Go for it, {firstName}! Your progress is amazing! 🔥
              </h2>
            </div>
            <p className="text-indigo-100">
              Keep mastering quizzes to climb higher on the leaderboard
            </p>
          </motion.div>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            {
              title: "Total Points",
              value: isAuthenticated ? userStats.points : "-",
              icon: <FiAward className="text-yellow-500 text-xl" />,
              color: "bg-yellow-100 text-yellow-800",
            },
            {
              title: "Current Rank",
              value: isAuthenticated ? `#${userStats.rank}` : "-",
              icon: <FiBarChart2 className="text-indigo-500 text-xl" />,
              color: "bg-indigo-100 text-indigo-800",
            },
            {
              title: "Streak",
              value: isAuthenticated ? `${userStats.streak} days` : "-",
              icon: <FiBarChart2 className="text-green-500 text-xl" />,
              color: "bg-green-100 text-green-800",
            },
            {
              title: "Quizzes Completed",
              value: isAuthenticated ? userStats.completedQuizzes : "-",
              icon: <FiBookmark className="text-purple-500 text-xl" />,
              color: "bg-purple-100 text-purple-800",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${stat.color} p-4 rounded-xl`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{stat.title}</p>
                  <p className="text-xl font-bold mt-1">{stat.value}</p>
                </div>
                <div>{stat.icon}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Topics Section */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">English Quiz Topics</h2>

          {topics.map((topic, index) => {
            const completionPercentage = calculatePercentage(topic.completed, topic.total);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-indigo-100"
              >
                <div className="p-6 cursor-pointer" onClick={() => toggleTopic(index)}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${topic.color} rounded-xl p-4`}>
                        <topic.icon className="text-white text-2xl" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{topic.title}</h3>
                        <p className="text-gray-600 mt-1">{topic.description}</p>

                        <div className="mt-3 flex items-center gap-4">
                          <div className="flex items-center gap-2 text-sm">
                            <FiAward className="text-indigo-600" />
                            <span>
                              {topic.completed}/{topic.total} quizzes
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-sm">
                            <FiBarChart2 className="text-indigo-600" />
                            <span>{completionPercentage}% complete</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="p-2 rounded-full hover:bg-indigo-50">
                      {expandedTopic === index ? (
                        <FiChevronUp className="text-indigo-600 text-xl" />
                      ) : (
                        <FiChevronDown className="text-indigo-600 text-xl" />
                      )}
                    </button>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-2.5 rounded-full"
                        style={{ width: `${completionPercentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-indigo-700">{completionPercentage}%</span>
                  </div>
                </div>

                {/* Subtopic List */}
                {expandedTopic === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100"
                  >
                    <div className="p-6">
                      <h4 className="font-medium text-gray-900 mb-4">
                        Subtopics ({topic.completed}/{topic.total} completed)
                      </h4>

                      <div className="space-y-3">
                        {topic.subtopics.map((subtopic, subIndex) => (
                          <div
                            key={subIndex}
                            className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg transition-colors ${
                              subtopic.completed
                                ? "bg-green-50 hover:bg-green-100"
                                : "bg-indigo-50 hover:bg-indigo-100"
                            }`}
                          >
                            <div className="mb-2 sm:mb-0">
                              <div className="font-medium text-gray-700">{subtopic.name}</div>
                              {subtopic.completed && (
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                    Completed
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    Best score: {subtopic.bestScore}%
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    Attempts: {subtopic.attempts}
                                  </span>
                                </div>
                              )}
                            </div>

                            <button
                              onClick={() => navigate(subtopic.path)}
                              className="self-end sm:self-auto text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
                            >
                              {subtopic.attempts > 0 ? "Retake Quiz" : "Start Quiz"}
                              <FiArrowRight />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Practice Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl p-6 text-white mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">English Quiz Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Read questions carefully before answering",
              "Manage your time wisely during the quiz",
              "Review grammar rules before attempting grammatical quizzes",
              "Build your vocabulary with daily practice",
              "Pay attention to context in comprehension quizzes",
              "Practice identifying errors in sentences",
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-white/20 rounded-full p-1 mt-1">
                  <FiBookmark className="text-white text-sm" />
                </div>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Badges Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Earn English Quiz Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Grammar Guru",
                description: "Complete all grammatical quizzes with 90%+ score",
                icon: <FiEdit className="text-indigo-500 text-3xl" />,
                color: "bg-indigo-100",
              },
              {
                name: "Vocabulary Master",
                description: "Score 100% on all vocabulary quizzes",
                icon: <FiBookOpen className="text-purple-500 text-3xl" />,
                color: "bg-purple-100",
              },
              {
                name: "Comprehension Expert",
                description: "Complete comprehension quizzes in record time",
                icon: <FiMessageSquare className="text-blue-500 text-3xl" />,
                color: "bg-blue-100",
              },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`${badge.color} p-6 rounded-xl flex flex-col items-center text-center`}
              >
                <div className="mb-4">{badge.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{badge.name}</h3>
                <p className="text-gray-700">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishQuiz;