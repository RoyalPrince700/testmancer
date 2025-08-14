import { 
  FiAlertCircle,
  FiBook,
  FiHelpCircle,
  FiStar,
  FiEdit,
  FiMessageSquare,
  FiAward,
  FiSmile,
  FiBookOpen,
  FiPenTool
} from "react-icons/fi";
import { motion } from "framer-motion";

export const HomonymsPages = [
  {
    title: "🎵 Homonyms: Same Sound, Different Vibes!",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Homonyms are like <span className="font-bold text-indigo-700">Afrobeats remixes</span>—same sound, different meanings! 
          They can trip up even the sharpest Nigerian writers. Let’s break it down! 🚀
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"I deposited money at the river bank."</span> → 
            <span className="font-bold">✅ "I deposited money at the financial bank."</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { icon: "🌊", name: "Bank", symbol: "River", desc: "Where water flows" },
            { icon: "💰", name: "Bank", symbol: "Financial", desc: "Where money stays" },
            { icon: "🦇", name: "Bat", symbol: "Animal", desc: "Night flyer" },
            { icon: "🏏", name: "Bat", symbol: "Cricket", desc: "Sports gear" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-xl font-mono">{item.symbol}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiAward className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Think of homonyms as <span className="font-bold">jollof rice recipes</span>—same name, but Lagos and Accra versions taste different! 🍲
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Homophones vs. Homographs",
    icon: <FiHelpCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Homophones */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🎵</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiBookOpen />
              Homophones - Same Sound, Different Spellings
            </h3>
          </div>
          <p>Homophones sound the same but have different meanings and spellings, like twins with different outfits!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Correct Usage:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "I can *see* the *sea* from my window.",
                  "They're going *there* with *their* books.",
                  "I need *two* eggs, *too*."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="font-medium text-red-700">❌ Nigerian Errors:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "I went to the see (should be sea).",
                  "Their coming to there house (should be They're, their).",
                  "Give me to eggs (should be two)."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500">✖</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Homographs */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📝</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiPenTool />
              Homographs - Same Spelling, Different Meanings
            </h3>
          </div>
          <p>Homographs are spelled the same but mean different things—sometimes even sound different!</p>
          
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-medium text-blue-700">When to Watch Out:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { title: "Bow", example: "Tie a ribbon 🎀 or bow down 🙇‍♂" },
                { title: "Lead", example: "Lead the team 🚶‍♂ or lead metal ⚙" },
                { title: "Wind", example: "Wind blows 💨 or wind a toy 🔄" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded shadow-xs">
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs mt-1">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Naija Homonyms & Exam Tips",
    icon: <FiStar className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Nigerian Pidgin Homonyms */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🇳🇬</span>
            <h3 className="font-bold text-xl">
              Nigerian Pidgin Homonyms - Naija Style!
            </h3>
          </div>
          <p>Even in Pidgin, homonyms dey cause wahala! Check these out:</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Fine: Beautiful 😍 or Penalty 💰",
              "Match: Football ⚽ or Firestick 🔥",
              "Yam: Food 🍠 or 'I yam' (I am) 😄"
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-indigo-100 p-3 rounded-lg"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* POST-UTME Exam Tips */}
        <div className="bg-green-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📚</span>
            <h3 className="font-bold text-xl">
              Homonyms in POST-UTME Exams
            </h3>
          </div>
          <p>Examiners love testing homonyms—don’t fall for their trap!</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                question: "The ___ of the story was interesting.",
                options: ["Tale (Story)", "Tail (Animal part)"],
                answer: "Tale"
              },
              {
                question: "I need a ___ to fix this.",
                options: ["Ruler (Measurement)", "Ruler (Leader)"],
                answer: "Ruler (Measurement)"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border border-green-200">
                <p className="font-medium text-green-700">Question #{i+1}:</p>
                <p className="mt-1">{item.question}</p>
                <ul className="mt-2 space-y-1">
                  {item.options.map((opt, j) => (
                    <li key={j} className="text-sm">{opt}</li>
                  ))}
                </ul>
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
    title: "Avoid Homonym Wahala!",
    icon: <FiAlertCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Common Homonym Errors */}
        <div className="bg-red-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🚨</span>
            <h3 className="font-bold text-xl">
              Homonym Crimes - Avoid These Mistakes!
            </h3>
          </div>
          <p>Mixing up homonyms is a common wahala in Nigerian writing!</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                wrong: "Their going to there house",
                right: "They're going to their house",
                tip: "They're = they are, their = possession"
              },
              {
                wrong: "I saw a bear foot",
                right: "I saw a bare foot",
                tip: "Bare = uncovered, bear = animal"
              },
              {
                wrong: "Buy flower for the cake",
                right: "Buy flour for the cake",
                tip: "Flour = baking, flower = plant"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-3 rounded-lg border border-red-200"
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

        {/* Homonym Jokes */}
        <div className="bg-yellow-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">😂</span>
            <h3 className="font-bold text-xl">
              Homonym Jokes - Laugh and Learn!
            </h3>
          </div>
          <p>Make learning fun with these homonym jokes!</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                joke: "Why did the golfer bring two pairs of pants?",
                punchline: "In case he got a *hole in one*! (⛳ vs. 👖)"
              },
              {
                joke: "Why was the math book sad?",
                punchline: "Too many *problems*! (➗ vs. 😭)"
              },
              {
                joke: "Why did the tomato turn red?",
                punchline: "It saw the salad *dressing*! (🥗 vs. 👗)"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Joke #{i+1}:</p>
                <p className="font-mono bg-gray-100 p-2 rounded mt-1">{item.joke}</p>
                <details className="mt-2">
                  <summary className="text-blue-600 cursor-pointer">Reveal Punchline</summary>
                  <p className="mt-1 font-mono bg-yellow-100 p-2 rounded">{item.punchline}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Homonym Master Challenge",
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
          Become a Homonym Hero! 🦸
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Take our challenge to fix real Nigerian homonym errors and earn your "Grammar Juju" badge!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { 
              title: "Levels", 
              value: "6", 
              icon: "📶", 
              color: "text-purple-600",
              desc: "From WAEC to IELTS level" 
            },
            { 
              title: "Badges", 
              value: "4", 
              icon: "🏆", 
              color: "text-yellow-500",
              desc: "Earn epic rewards" 
            },
            { 
              title: "Examples", 
              value: "150+", 
              icon: "🇳🇬", 
              color: "text-green-600",
              desc: "Naija slang & exam contexts" 
            }
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
          Start Homonym Drill
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features real-life Naija examples like WAEC questions, market signs, and social media posts!
        </p>
      </div>
    )
  }
];