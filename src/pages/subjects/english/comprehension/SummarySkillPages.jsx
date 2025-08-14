import { 
  FiBook,
  FiStar,
  FiMessageSquare,
  FiHeart,
  FiZap,
  FiThumbsUp,
  FiEdit,
  FiAward,
  FiAlertCircle,
  FiList,
  FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const SummarySkillPages = [
  {
    title: "🤔 What Are Summary Skills?",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Summary skills are like boiling down a big pot of egusi soup to its tastiest bits! You take a long passage and shrink it to the main points, perfect for nailing your post-UTME in Nigeria. 🇳🇬
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"I copied the whole passage."</span> → 
            <span className="font-bold">✅ "I picked only the key ideas!"</span> (Less is more!)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: "🕵️", skill: "Identify Main Idea", meaning: "What’s the passage really saying?", desc: "The heart of the story" },
            { icon: "🔍", skill: "Filter Out Fluff", meaning: "Skip examples and extras", desc: "Focus on the core" }
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
        
        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiStar className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Summarize like you’re explaining a Nollywood movie to your friend — keep it short, catchy, and on point! 🎬
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Finding the Main Idea",
    icon: <FiEdit className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📝</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiMessageSquare />
              Main Idea - The Core Message
            </h3>
          </div>
          <p>Finding the main idea is like spotting the star player in a Super Eagles match — it’s what drives the passage!</p>
          
          <div className="mt-4 bg-green-50 p-3 rounded-lg">
            <p className="font-medium text-green-700">📖 Sample Passage:</p>
            <p className="mt-2 text-sm">
              In Ibadan, the cocoa trade has boosted the local economy. Farmers work hard to grow quality beans, which are exported globally. Some farmers also face challenges like poor roads and low prices.
            </p>
            <p className="font-medium text-green-700 mt-4">Question:</p>
            <p className="mt-2">What is the main idea of the passage?</p>
            <p className="font-medium text-green-700 mt-2">How to Find the Answer:</p>
            <p className="mt-2 text-sm">Look for the key focus: “the cocoa trade has boosted the local economy.” The main idea is <span className="font-bold">the cocoa trade’s impact on Ibadan’s economy</span>.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Filtering Out Details",
    icon: <FiZap className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              Skip the Extras - Focus on the Core
            </h3>
          </div>
          <p>Filtering details is like picking the meat out of pepper soup — ignore the small bits and go for the main flavor!</p>
          
          <div className="mt-4 bg-blue-50 p-3 rounded-lg">
            <p className="font-medium text-blue-700">📖 Sample Passage:</p>
            <p className="mt-2 text-sm">
              Ada’s tailoring shop in Aba is thriving. She employs ten workers, designs trendy ankara dresses, and supplies boutiques in Lagos. Her shop is painted blue and opens at 8 AM daily.
            </p>
            <p className="font-medium text-blue-700 mt-4">Question:</p>
            <p className="mt-2">What is the main point of the passage?</p>
            <p className="font-medium text-blue-700 mt-2">How to Find the Answer:</p>
            <p className="mt-2 text-sm">
              Skip details like “ten workers,” “blue paint,” or “8 AM.” Focus on the core: <span className="font-bold">Ada’s tailoring shop is thriving</span>.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Using Concise Language",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📚</span>
            <h3 className="font-bold text-xl">
              Keep It Short and Sweet
            </h3>
          </div>
          <p>Writing a summary is like sending a quick WhatsApp message — say only what matters, no long stories!</p>
          
          <div className="mt-4 bg-indigo-50 p-3 rounded-lg">
            <p className="font-medium text-indigo-700">📖 Sample Passage:</p>
            <p className="mt-2 text-sm">
              The Oba’s palace in Benin City is a cultural landmark. It attracts tourists who admire its ancient architecture and artifacts. The palace also hosts festivals and traditional ceremonies every year.
            </p>
            <p className="font-medium text-indigo-700 mt-4">Task:</p>
            <p className="mt-2">Summarize the passage in one sentence.</p>
            <p className="font-medium text-indigo-700 mt-2">How to Summarize:</p>
            <p className="mt-2 text-sm">
              Focus on the core idea and keep it brief: <span className="font-bold">The Oba’s palace in Benin City is a cultural landmark that attracts tourists and hosts festivals</span>.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Summary Master",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full p-4 mb-6"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Become a Summary Champion! 🧙‍♂️
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Master post-UTME summaries with Naija-style practice and earn your “Summary Star” badge! 🏅
        </p>
        
        <div className="bg-purple-50 p-4 rounded-xl mt-6">
          <p className="font-medium text-purple-700">📖 Practice Passage:</p>
          <p className="mt-2 text-sm">
            In Kano, the groundnut pyramids were once a symbol of wealth. Farmers stacked bags of groundnuts into huge pyramids for export. Today, the pyramids are gone, but groundnut farming remains vital.
          </p>
          <div className="mt-4 space-y-4">
            {[
              { question: "What is the main idea of the passage?", answer: "Groundnut pyramids symbolized wealth in Kano, and farming remains vital 🥜" },
              { question: "Summarize the passage in one sentence.", answer: "Kano’s groundnut pyramids, once a symbol of wealth, are gone, but groundnut farming is still vital." },
              { question: "What details can you skip in a summary?", answer: "Details like ‘stacked bags’ or ‘huge pyramids’ can be skipped 🗑️" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Challenge #{i+1}:</p>
                <p className="font-mono bg-gray-100 p-2 rounded mt-1">{item.question}</p>
                <details className="mt-2">
                  <summary className="text-blue-600 cursor-pointer">Reveal Answer</summary>
                  <p className="mt-1 font-mono bg-green-100 p-2 rounded">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Start Summary Drill
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Practice with passages on Nigerian culture, markets, and history to ace your post-UTME!
        </p>
      </div>
    )
  }
];