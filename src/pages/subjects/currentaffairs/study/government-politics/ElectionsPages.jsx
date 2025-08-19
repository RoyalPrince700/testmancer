import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const ElectionsPage = [
  {
    title: "🗳️ What are Elections in Nigeria?",
    icon: <FiBook className="text-blue-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Elections in Nigeria are the major way citizens choose their leaders, from the President down to local government officials. They are the backbone of Nigeria's democracy, giving power to the people! 🇳🇬 Your knowledge of this topic is crucial for acing that Post-UTME exam. 💯
        </p>
        
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">Did you know?</span> 
            Since the return to democracy in 1999, Nigeria has held general elections every four years for various offices. The 2015 election was a landmark because it was the first time a sitting president lost an election! 🎉
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: "📜", skill: "Legitimacy", meaning: "Elections give leaders the right to rule.", desc: "The people's mandate" },
            { icon: " accountability", skill: "Accountability", meaning: "Elections allow citizens to vote out bad leaders.", desc: "Holding them responsible" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.skill}</h3>
              <p className="text-sm font-mono">{item.meaning}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 p-4 rounded-xl">
          <p className="font-medium text-blue-700 flex items-center gap-2">
            <FiStar className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Think of the election process as a major football tournament! Each team (party) goes through qualifiers (primaries) and then the main competition (general election) to win the cup (the office). ⚽
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Types of Elections",
    icon: <FiList className="text-blue-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🗳️</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiMessageSquare />
              Different Kinds of Polls
            </h3>
          </div>
          <p>
            Nigeria has different types of elections for various positions. It's not just about the President! 🏛️
          </p>
          
          <div className="mt-4 space-y-3">
            {[
              { icon: "✍️", type: "Primary Elections", detail: "Parties choose their candidates internally before the general election." },
              { icon: "🥇", type: "General Elections", detail: "The main election where citizens vote for their leaders (President, Governors, etc.)." },
              { icon: "🔁", type: "Run-off Elections", detail: "A second election held if no candidate meets the winning criteria in the first round (especially for presidential polls)." },
              { icon: "🔄", type: "Re-run & Supplementary Elections", detail: "Held in specific polling units where results were canceled due to issues like violence or over-voting." }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="bg-green-50 p-3 rounded-lg flex items-start gap-3"
              >
                <span className="text-xl mt-1">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-green-800">{item.type}</h4>
                  <p className="text-sm text-gray-700">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Electoral Body: INEC",
    icon: <FiAward className="text-blue-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-purple-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">👩‍⚖️</span>
            <h3 className="font-bold text-xl">
              INEC: The Referee of the Game
            </h3>
          </div>
          <p>
            The **Independent National Electoral Commission (INEC)** is the body responsible for organizing and conducting elections in Nigeria. They are the referees of the electoral game! 📜
          </p>
          
          <div className="mt-4 space-y-4">
            {[
              { function: "Voter Registration", detail: "They register all eligible citizens who want to vote.", emoji: "📝" },
              { function: "Party Regulation", detail: "They register and monitor the activities of political parties.", emoji: "📊" },
              { function: "Conducting Elections", detail: "They organize, supervise, and announce the results of all elections.", emoji: "📋" },
              { function: "Voter Education", detail: "They educate the public on the voting process and their rights.", emoji: "🗣️" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3"
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h4 className="font-bold text-gray-800">{item.function}</h4>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "The Electoral Process",
    icon: <FiZap className="text-blue-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-red-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⏰</span>
            <h3 className="font-bold text-xl">
              From A to Z
            </h3>
          </div>
          <p>
            The Nigerian electoral process follows a clear set of steps as laid out by the law. It’s like a recipe for a democratic government! 👨‍🍳
          </p>
          
          <div className="mt-4 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-red-800">1. Pre-election Activities</h4>
              <p className="text-sm text-gray-600 mt-1">This includes voter registration, party primaries, and campaigns. It's when candidates woo voters with their manifestos. 📢</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-red-800">2. Election Day</h4>
              <p className="text-sm text-gray-600 mt-1">Voters show up at polling units to get accredited (often with the **BVAS** device) and cast their votes. It's the D-Day! 📅</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-red-800">3. Post-election Activities</h4>
              <p className="text-sm text-gray-600 mt-1">Votes are counted, results are announced, and a winner is declared. Losers can challenge the results in a tribunal or court. 🏛️</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Quiz Time! 🧠",
    icon: <FiThumbsUp className="text-blue-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-4 mb-6"
        >
          <FiEdit className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Test Your Election Knowledge!
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Ready to prove you're an election pro? Answer these questions! 🧐
        </p>
        
        <div className="bg-blue-50 p-4 rounded-xl mt-6 space-y-4">
          {[
            { 
              question: "What does the acronym INEC stand for?", 
              answer: "Independent National Electoral Commission 🧑‍💼" 
            },
            { 
              question: "What kind of election is held if a winner isn't declared in the first round of a presidential poll?", 
              answer: "A run-off election 🏃‍♀️" 
            },
            { 
              question: "Which landmark year did a sitting president lose an election for the first time in Nigeria?", 
              answer: "2015 🏆" 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium">Question #{i+1}:</p>
              <p className="font-mono bg-gray-100 p-2 rounded mt-1">{item.question}</p>
              <details className="mt-2">
                <summary className="text-purple-600 cursor-pointer">Show Answer</summary>
                <p className="mt-1 font-mono bg-green-100 p-2 rounded">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Take Full Election Quiz
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Master the electoral process and get ready to cast your vote for success in your Post-UTME! 🚀
        </p>
      </div>
    )
  }
];