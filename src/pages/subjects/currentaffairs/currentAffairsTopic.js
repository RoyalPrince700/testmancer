export const CURRENT_AFFAIRS_TOPICS = [
  {
    id: "nigeria_history",
    title: "Nigeria History",
    icon: "FiBook",
    description: "Test your knowledge of Nigeria's historical events and leaders",
    color: "from-green-500 to-green-700",
    subtopics: [
      { name: "Pre-Colonial Era", path: "/post-utme/currentAffairs/pre-colonial" },
      { name: "Colonial Era", path: "/post-utme/currentAffairs/colonial" },
      { name: "Post-Independence", path: "/post-utme/currentAffairs/post-independence" },
      { name: "Nigerian Leaders", path: "/post-utme/currentAffairs/leaders" },
    ],
  },
  {
    id: "government_politics",
    title: "Government & Politics",
    icon: "FiEdit",
    description: "Stay sharp on Nigeria's government, constitution, and politics",
     color: "from-blue-600 to-teal-500",
    subtopics: [
      { name: "Constitution & Law", path: "/post-utme/currentAffairs/constitution" },
      { name: "Political Parties", path: "/post-utme/currentAffairs/political-parties" },
      { name: "Elections", path: "/post-utme/currentAffairs/elections" },
    ],
  },
  {
    id: "current_events",
    title: "Current Events",
    icon: "FiGlobe",
    description: "Keep up with recent happenings in Nigeria",
    color: "from-yellow-500 to-orange-700",
    subtopics: [
      { name: "Recent News", path: "/post-utme/currentAffairs/recent-news"},
      { name: "Sports & Entertainment", path: "/post-utme/currentAffairs/sports-entertainment" },
      { name: "Economy & Development", path: "/post-utme/currentAffairs/economy-development" },
    ],
  },
];