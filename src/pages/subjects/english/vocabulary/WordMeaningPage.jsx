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

export const WordMeaningPages = [
  {
    title: "🤔 What Are Word Meanings?",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Word meanings are like the <span className="font-bold text-indigo-700">suya spice</span> of language — 
          they give flavor to your communication! Understanding them is key to <span className="font-bold">nailing that JAMB essay</span> or vibing in a Naija convo! 🇳🇬
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"The place is sick."</span> → 
            <span className="font-bold">✅ "The place is cool!"</span> (Context matters!)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: "😊", word: "Happy", meaning: "Feeling joyful or content", desc: "Pure vibes" },
            { icon: "🏃‍♂️", word: "Run", meaning: "Move quickly or operate", desc: "Action word" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.word}</h3>
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
            Think of word meanings as <span className="font-bold">Nollywood dialogues</span> — 
            the right word can make your message pop like a blockbuster! 🎬
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Denotation & Connotation",
    icon: <FiEdit className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📝</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiMessageSquare />
              Denotation - The Literal Meaning
            </h3>
          </div>
          <p>Denotation is the <span className="font-bold">dictionary definition</span>, like the price tag on a market item. It’s the straight-up meaning!</p>
          
          <div className="mt-4 bg-green-50 p-3 rounded-lg">
            <p className="font-medium text-green-700">✅ Examples:</p>
            <ul className="mt-2 space-y-2">
              {[
                "Home: A place where one lives 🏠",
                "Run: To move quickly or operate 🏃‍♂️"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">❤</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiHeart />
              Connotation - The Emotional Vibe
            </h3>
          </div>
          <p>Connotation is the <span className="font-bold">feeling</span> a word gives, like the warmth of egusi soup! It’s about the vibes, not just the facts.</p>
          
          <div className="mt-4 bg-blue-50 p-3 rounded-lg">
            <p className="font-medium text-blue-700">✅ Examples:</p>
            <ul className="mt-2 space-y-2">
              {[
                "Home: Warmth, comfort, security 🏡",
                "Mother: Love, care, nurturing 🤱"
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
    )
  },
  {
    title: "Synonyms, Antonyms & More",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📚</span>
            <h3 className="font-bold text-xl">
              Synonyms & Antonyms
            </h3>
          </div>
          <p>Synonyms are like twins, antonyms are opposites — both make your writing <span className="font-bold">shine like Lagos at night</span>!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg border border-indigo-200">
              <p className="font-medium text-indigo-700">Synonyms:</p>
              <ul className="mt-2 space-y-2">
                {["Big: Large, Huge, Enormous 🤯"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-500">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg border border-indigo-200">
              <p className="font-medium text-indigo-700">Antonyms:</p>
              <ul className="mt-2 space-y-2">
                {["Hot vs. Cold ❄"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-500">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🗣️</span>
            <h3 className="font-bold text-xl">
              Homophones & Homographs
            </h3>
          </div>
          <p>Homophones sound the same, homographs look the same — but their meanings can trick you like a Lagos traffic jam!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Homophones:</p>
              <p className="mt-2">To, Too, Two 🤯</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Homographs:</p>
              <p className="mt-2">Bank (money) vs. Bank (river) 🏦</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Context & Figurative Language",
    icon: <FiZap className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📖</span>
            <h3 className="font-bold text-xl">
              Contextual Meaning
            </h3>
          </div>
          <p>Words change meaning like a chameleon, depending on the situation — just like "sick" in Naija slang!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { word: "Break", meaning: "Shatter or pause ⏸" },
              { word: "Cloud", meaning: "Weather or digital storage ☁" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-3 rounded-lg border border-blue-200"
              >
                <p className="font-bold">{item.word}</p>
                <p className="text-sm">{item.meaning}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🎨</span>
            <h3 className="font-bold text-xl">
              Figurative Language
            </h3>
          </div>
          <p>Add color to your writing with metaphors and similes, like a Nollywood scene!</p>
          
          <div className="mt-4 space-y-4">
            {[
              { type: "Metaphor", example: "He's a shining light in a dark room 💡" },
              { type: "Simile", example: "He runs like a cheetah 🐯" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-3 rounded-lg border border-green-200"
              >
                <p className="font-medium text-green-700">{item.type}:</p>
                <p className="mt-1">{item.example}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              Word Meaning Quiz
            </h3>
          </div>
          <p>Fix these common Nigerian mix-ups!</p>
          
          <div className="mt-4 space-y-4">
            {[
              { question: "It's raining cats and dogs", answer: "It's raining heavily ☔" },
              { question: "The bank is by the river", answer: "Riverbank, not financial bank 🏞️" },
              { question: "This party is sick!", answer: "This party is cool! 🎉" }
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
    title: "Word Meaning Master",
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
          Become a Word Meaning Wizard! 🧙‍♂️
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Take our challenge to decode tricky Nigerian phrases and earn your "Lexis Oga" badge! 🏅
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { title: "Levels", value: "5", icon: "📶", color: "text-purple-600", desc: "From SSCE to Masters level" },
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
          Start Word Meaning Drill
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features real-life examples like market slang, WAEC questions, and social media vibes!
        </p>
      </div>
    )
  }
];