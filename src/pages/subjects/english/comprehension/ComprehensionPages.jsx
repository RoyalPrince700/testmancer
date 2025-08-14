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

export const ComprehensionPassagesPage = [
  {
    title: "🤔 What Are Comprehension Passages?",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Comprehension passages are like solving a <span className="font-bold text-indigo-700">Naija puzzle</span> — you read a short story or text, then dig out answers like a detective in a Lagos market! They’re key to acing your post-UTME. 🇳🇬
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"I rushed and picked any option."</span> → 
            <span className="font-bold">✅ "I read the passage twice and checked the clues!"</span> (Patience wins!)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: "🕵️", skill: "Find the Main Idea", meaning: "What’s the passage about?", desc: "The big picture" },
            { icon: "🔍", skill: "Spot Details", meaning: "Locate specific facts", desc: "Hidden treasures" }
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
            Read passages like you’re following a <span className="font-bold">Nollywood gist</span> — catch the vibe, spot the clues, and answer like a pro! 🎬
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Finding Literal Answers",
    icon: <FiEdit className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📝</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiMessageSquare />
              Literal Questions - Find the Facts
            </h3>
          </div>
          <p>Literal questions are like picking yam from a market stall — the answer is right there in the passage!</p>
          
          <div className="mt-4 bg-green-50 p-3 rounded-lg">
            <p className="font-medium text-green-700">📖 Sample Passage:</p>
            <p className="mt-2 text-sm">
              In Lagos, the danfo bus is a popular means of transport. These yellow buses zoom through the city, carrying students, traders, and workers. Despite their speed, they often get stuck in traffic, especially on Third Mainland Bridge.
            </p>
            <p className="font-medium text-green-700 mt-4">Question:</p>
            <p className="mt-2">What is the popular means of transport in Lagos?</p>
            <p className="font-medium text-green-700 mt-2">How to Find the Answer:</p>
            <p className="mt-2 text-sm">Look for the key phrase in the passage: “the danfo bus is a popular means of transport.” The answer is <span className="font-bold">danfo bus</span>.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Inferential Questions",
    icon: <FiZap className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              Inferential Questions - Read Between the Lines
            </h3>
          </div>
          <p>Inferential questions are like decoding a friend’s WhatsApp status — you need to think beyond the words to find the hidden meaning!</p>
          
          <div className="mt-4 bg-blue-50 p-3 rounded-lg">
            <p className="font-medium text-blue-700">📖 Sample Passage:</p>
            <p className="mt-2 text-sm">
              Aisha, a final-year student, spent her evenings studying under a kerosene lamp in her village. Her dedication impressed her teachers, who often praised her focus despite the lack of electricity.
            </p>
            <p className="font-medium text-blue-700 mt-4">Question:</p>
            <p className="mt-2">Why did Aisha’s teachers praise her?</p>
            <p className="font-medium text-blue-700 mt-2">How to Find the Answer:</p>
            <p className="mt-2 text-sm">
              The passage doesn’t directly say why, but it mentions her “dedication” and studying despite “lack of electricity.” Infer the answer: <span className="font-bold">She was praised for her dedication despite challenges</span>.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Vocabulary in Context",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📚</span>
            <h3 className="font-bold text-xl">
              Using Context Clues
            </h3>
          </div>
          <p>Big words in passages? Use context clues to crack them like a <span className="font-bold">groundnut shell</span>!</p>
          
          <div className="mt-4 bg-indigo-50 p-3 rounded-lg">
            <p className="font-medium text-indigo-700">📖 Sample Passage:</p>
            <p className="mt-2 text-sm">
              The market was bustling with traders selling vibrant fabrics and spicy jollof rice. The lively atmosphere made it a favorite spot for visitors.
            </p>
            <p className="font-medium text-indigo-700 mt-4">Question:</p>
            <p className="mt-2">What does “bustling” mean in the passage?</p>
            <p className="font-medium text-indigo-700 mt-2">How to Find the Answer:</p>
            <p className="mt-2 text-sm">
              Look at the clues: “traders selling,” “vibrant fabrics,” “lively atmosphere.” These suggest “bustling” means <span className="font-bold">busy and lively</span>.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Comprehension Master",
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
          Become a Comprehension Oga! 🧙‍♂️
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Master post-UTME passages with our Naija-style drills and earn your “Comprehension Star” badge! 🏅
        </p>
        
        <div className="bg-purple-50 p-4 rounded-xl mt-6">
          <p className="font-medium text-purple-700">📖 Practice Passage:</p>
          <p className="mt-2 text-sm">
            Chinedu’s akara stall in Owerri was famous. Every morning, customers lined up for the crispy, golden balls. Despite the long queues, Chinedu always smiled, chatting with everyone.
          </p>
          <div className="mt-4 space-y-4">
            {[
              { question: "What was Chinedu’s stall famous for?", answer: "Crispy, golden akara balls 🍘" },
              { question: "What does ‘queues’ mean in the passage?", answer: "Lines of people waiting 🧑‍🤝‍🧑" },
              { question: "Why might Chinedu be well-liked?", answer: "He smiled and chatted with customers 😊" }
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
          Start Comprehension Drill
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Practice with passages on Nigerian markets, schools, and culture to ace your post-UTME!
        </p>
      </div>
    )
  }
];