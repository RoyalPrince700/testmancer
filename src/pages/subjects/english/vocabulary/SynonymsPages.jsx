import { 
  FiBook,
  FiStar,
  FiAlertCircle,
  FiEdit,
  FiAward,
  FiHeart,
  FiZap,
  FiSmile,
  FiFrown,
  FiAlertTriangle,
  FiList,
  FiCheckCircle,
  FiMessageSquare,
  FiThumbsUp
} from "react-icons/fi";
import { motion } from "framer-motion";

export const SynonymsPages = [
  {
    title: "📖 What Are Synonyms?",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Synonyms are like <span className="font-bold text-indigo-700">different jollof recipes</span> — 
          same vibe, different flavors! They make your writing <span className="font-bold">less repetitive</span> and more exciting, like adding extra spice to your stew! 🌶️
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"The party was good, good, good."</span> → 
            <span className="font-bold">✅ "The party was fantastic, superb, awesome!"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            { icon: "😊", word: "Happy", synonyms: "Joyful, Glad, Cheerful", desc: "Expresses joy" },
            { icon: "🏢", word: "Big", synonyms: "Large, Huge, Enormous", desc: "Size matters" },
            { icon: "🧠", word: "Smart", synonyms: "Intelligent, Clever, Bright", desc: "Brain power" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.word}</h3>
              <p className="text-sm font-mono">{item.synonyms}</p>
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
            Use synonyms to <span className="font-bold">ginger up</span> your writing, like choosing "sprint" over "run" to sound sharper! 💨
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Why Synonyms Matter",
    icon: <FiThumbsUp className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📝</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiEdit />
              Synonyms - The Spice of Writing
            </h3>
          </div>
          <p>Like choosing between "jollof" and "fried rice," synonyms make your writing <span className="font-bold">more interesting</span> and avoid repetition. They’re your key to sounding like a Grammar Oga! 😎</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Benefits:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Makes writing more interesting",
                  "Avoids boring repetition",
                  "Improves communication skills"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="font-medium text-blue-700">✅ Examples:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Bad → Terrible, Awful, Poor 😞",
                  "Run → Sprint, Dash, Jog 🏃‍♂️",
                  "Say → Whisper, Shout, Explain 🗣️"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Common & Tricky Synonyms",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔗</span>
            <h3 className="font-bold text-xl">
              Common Synonym Pairs
            </h3>
          </div>
          <p>Memorize these like your favorite Wizkid lyrics to ace your writing! 🎶</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { word: "Begin", synonyms: "Start, Commence, Initiate 🚀" },
              { word: "End", synonyms: "Finish, Conclude, Terminate 🏁" },
              { word: "Help", synonyms: "Assist, Aid, Support 🤝" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-3 rounded-lg border border-indigo-200"
              >
                <p className="font-bold">{item.word}</p>
                <p className="text-sm">{item.synonyms}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⚠️</span>
            <h3 className="font-bold text-xl">
              Tricky Synonyms - Watch Out!
            </h3>
          </div>
          <p>Some synonyms are like twins with different vibes—don’t mix them up!</p>
          
          <div className="mt-4 space-y-4">
            {[
              { wrong: "Famous (well-known)", right: "Infamous (bad rep) 🎤", tip: "Famous is good; infamous is notorious!" },
              { wrong: "Economical (saves money)", right: "Cheap (low quality) 💰", tip: "Economical is smart; cheap is tacky!" },
              { wrong: "Young (age)", right: "Youthful (vibe) 👶", tip: "Young is years; youthful is energy!" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-3 rounded-lg border border-yellow-200"
              >
                <div className="flex gap-4">
                  <div className="text-red-500 font-bold">❌ {item.wrong}</div>
                  <div className="text-green-500 font-bold">✅ {item.right}</div>
                </div>
                <p className="text-xs text-gray-500 mt-2">{item.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Synonyms in Action",
    icon: <FiMessageSquare className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✍️</span>
            <h3 className="font-bold text-xl">
              Synonyms in Sentences
            </h3>
          </div>
          <p>Switch synonyms to change the vibe, like picking the right gele for an owambe! 👗</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { original: "She was happy", synonym: "She was joyful 😄" },
              { original: "The test was hard", synonym: "The test was difficult 📚" },
              { original: "He ran fast", synonym: "He sprinted fast ⚡" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-blue-200">
                <p className="font-medium text-gray-700">Original:</p>
                <p className="mt-1">{item.original}</p>
                <p className="font-medium text-green-700 mt-2">Synonym:</p>
                <p className="mt-1">{item.synonym}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              Synonym Quiz
            </h3>
          </div>
          <p>Fix these boring sentences with better synonyms!</p>
          
          <div className="mt-4 space-y-4">
            {[
              { question: "The food was good", answer: "The food was delicious" },
              { question: "The market is big", answer: "The market is enormous" },
              { question: "She is sad", answer: "She is heartbroken" }
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
      </div>
    )
  },
  {
    title: "Synonym Superstar",
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
          Become a Synonym Superstar! 🌟
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Take our challenge to spice up boring Nigerian sentences and earn your "Vocabulary Oga" badge! 🏆
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { title: "Levels", value: "5", icon: "📶", color: "text-purple-600", desc: "From WAEC to PhD level" },
            { title: "Badges", value: "3", icon: "🏆", color: "text-yellow-500", desc: "Earn shiny rewards" },
            { title: "Examples", value: "100+", icon: "🇳🇬", color: "text-green-600", desc: "Real Naija contexts" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <span className={`text-3xl mb-2 block ${item.color}`}>{item.icon}</span>
              <h3 className="font-bold text-gray-900 text-2xl">{item.value}</h3>
              <p className="text-gray-600 font-medium">{item.title}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Synonym Challenge
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features real-life examples like market banter, Nollywood dialogues, and X posts!
        </p>
      </div>
    )
  }
];