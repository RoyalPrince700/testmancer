// This file contains the Current Affairs topics and their subtopics for educational purposes.
export const CURRENT_AFFAIRS_TOPICS = [
  {
    id: "nigeriahistory",
    title: "Nigeria-History",
    icon: "FiFlag",
    description: "Nigeria's historical events and leaders",
    color: "from-red-500 to-red-700",
    subtopics: [
      { name: "Pre-Colonial-Era", path: "/post-utme/current-affairs/pre-colonial" },
      { name: "Colonial-Era", path: "/post-utme/current-affairs/colonial" },
      { name: "Post-Independence", path: "/post-utme/current-affairs/post-independence" },
      { name: "Nigerian-Leaders", path: "/post-utme/current-affairs/nigerian-leaders" },
    ]
  },
  {
    id: "governmentpolitics",
    title: "Government-And-Politics",
    icon: "FiEdit",
    description: "Nigeria's government, constitution, and politics",
    color: "from-blue-500 to-indigo-700",
    subtopics: [
      { name: "Constitution-Law", path: "/post-utme/current-affairs/constitution" },
      { name: "Political-Parties", path: "/post-utme/current-affairs/political-parties" },
      { name: "Elections", path: "/post-utme/current-affairs/elections" },
    ]
  },
  {
    id: "currentevents",
    title: "Current-Events",
    icon: "FiBookOpen",
    description: "Keep up with recent happenings in Nigeria",
    color: "from-green-500 to-teal-700",
    subtopics: [
      { name: "University-of-ilorin", path: "/post-utme/current-affairs/economy-development" },
      { name: "Science-and-Technology", path: "/post-utme/current-affairs/science-technology" },
      { name: "Sports-and-Awards", path: "/post-utme/current-affairs/sports-awards" },
      { name: "Culture-and-Tradition", path: "/post-utme/current-affairs/culture-tradition" },
    ]
  }
];
