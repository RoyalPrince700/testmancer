import { 
  FiBook,
  FiFlag,
  FiZap,
  FiCoffee,
  FiEye,
  FiCloud,
  FiDollarSign,
  FiClock,
  FiAward,
  FiHeart,
  FiBriefcase,
  FiShield,
  FiNavigation,
  FiMeh,
  FiEdit
} from "react-icons/fi";
import { motion } from "framer-motion";

export const IdiomsPages = [
  {
    title: "🌈 Idioms: The Spice of English!",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Idioms are <span className="font-bold text-indigo-700">phrases that don't mean what they say</span> - 
          like Nigerian proverbs with hidden meanings! They make English 
          <span className="font-bold"> sweeter than puff-puff</span> 🍩
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Mistake:</span> 
            <span className="line-through">"He literally kicked the bucket"</span> → 
            <span className="font-bold">✅ "He kicked the bucket (died)"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            { icon: "💤", idiom: "Hit the sack", meaning: "Go to sleep" },
            { icon: "💪", idiom: "Bite the bullet", meaning: "Endure pain" },
            { icon: "💰", idiom: "Cost an arm...", meaning: "Very expensive" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.idiom}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.meaning}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiFlag className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Nigerian idioms often mix <span className="font-bold">Pidgin and proverbs</span> - 
            like "God dey" meaning "Have hope!" 🙏
          </p>
        </div>
      </div>
    )
  },
  {
    title: "🇳🇬 Naija Idioms",
    icon: <FiFlag className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Cultural Idioms */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🌍</span>
            <h3 className="font-bold text-xl">
              Cultural Gems
            </h3>
          </div>
          <p>Unique Nigerian expressions you won't find in textbooks!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Examples:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Long legs = Influential connections 👟",
                  "Monkey dey work... = Unfair labor 🐒",
                  "Na so so so? = Dismissive reaction 🙄"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="font-medium text-blue-700">📖 Usage:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "My uncle has long legs at NNPC",
                  "This company is monkey dey work...",
                  "You only scored 50%? Na so so so?"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pidgin Mix */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🤝</span>
            <h3 className="font-bold text-xl">
              Pidgin Blend
            </h3>
          </div>
          <p>When English idioms get Nigerian seasoning!</p>
          
          <div className="mt-4 bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { 
                  idiom: "Japa", 
                  meaning: "Escape quickly (from 'jump apart')",
                  example: "The thief japad when police came" 
                },
                { 
                  idiom: "Sef", 
                  meaning: "Emphasis (from 'self')",
                  example: "You dey craze sef!" 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-3 rounded shadow-xs"
                >
                  <p className="font-bold">{item.idiom}</p>
                  <p className="text-sm text-gray-600">{item.meaning}</p>
                  <p className="text-xs mt-2 bg-gray-100 p-1 rounded">{item.example}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Proverbs */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧓</span>
            <h3 className="font-bold text-xl">
              Yoruba Wisdom
            </h3>
          </div>
          <p>Ancient proverbs that function like idioms:</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                proverb: "Àgbà kì í wà lọ́jà...",
                meaning: "Elders' presence prevents chaos",
                literal: "An elder doesn't stay in the market..."
              },
              {
                proverb: "Ọmọdé gbọ́n, àgbà gbọ́n...",
                meaning: "Wisdom comes from both young/old",
                literal: "Child wise, elder wise..."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-yellow-200">
                <p className="font-medium text-yellow-700">{item.proverb}</p>
                <p className="mt-1">{item.meaning}</p>
                <p className="text-xs text-gray-500 mt-2">{item.literal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🐾 Animal Idioms",
    icon: <FiZap className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Common Animal Idioms */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🦁</span>
            <h3 className="font-bold text-xl">
              Creature Comparisons
            </h3>
          </div>
          <p>Animals describe human behavior in hilarious ways!</p>
          
          <div className="mt-4 bg-white p-4 rounded-xl border border-indigo-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { 
                  idiom: "Let the cat out", 
                  meaning: "Reveal secret", 
                  emoji: "🐱🎒" 
                },
                { 
                  idiom: "Kill two birds", 
                  meaning: "Two goals at once", 
                  emoji: "🐦🐦💎" 
                },
                { 
                  idiom: "Black sheep", 
                  meaning: "Family outcast", 
                  emoji: "🐑⚫" 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-indigo-100 p-3 rounded-lg text-center"
                >
                  <p className="font-bold">{item.idiom}</p>
                  <p className="text-sm">{item.meaning}</p>
                  <p className="text-xl mt-1">{item.emoji}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Nigerian Animal Sayings */}
        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🐒</span>
            <h3 className="font-bold text-xl">
              Naija Wildlife
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                idiom: "When the goat is full...",
                meaning: "People misbehave when comfortable",
                example: "See how he's acting - goat don chop!"
              },
              {
                idiom: "Chicken change",
                meaning: "Small money",
                example: "N500 is chicken change for him"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                <p className="font-medium text-green-700">"{item.idiom}"</p>
                <p className="mt-1">{item.meaning}</p>
                <p className="text-sm mt-2 bg-gray-100 p-1 rounded">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quiz */}
        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              Animal Idiom Quiz
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                question: "What does 'hold your horses' mean?",
                options: ["Feed horses", "Be patient", "Go fast"],
                answer: 1
              },
              {
                question: "If someone is 'a snake', they are:",
                options: ["Slim", "Dangerous", "Good at medicine"],
                answer: 1
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Q{i+1}: {item.question}</p>
                <div className="mt-2 space-y-2">
                  {item.options.map((opt, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <input type="radio" name={`q${i}`} id={`q${i}o${j}`} />
                      <label htmlFor={`q${i}o${j}`}>{opt}</label>
                    </div>
                  ))}
                </div>
                <details className="mt-2">
                  <summary className="text-blue-600 cursor-pointer">Show Answer</summary>
                  <p className="mt-1 font-mono bg-green-100 p-2 rounded">
                    Answer: {item.options[item.answer]}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  // Additional 12 pages continue below...
  {
    title: "🍲 Food Idioms",
    icon: <FiCoffee className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">🍜 Delicious Expressions</h2>
        <p>Food idioms make language tastier than jollof rice!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            { 
              idiom: "Piece of cake", 
              meaning: "Very easy", 
              example: "The exam was a piece of cake" 
            },
            { 
              idiom: "Spill the beans", 
              meaning: "Reveal secret", 
              example: "Don't spill the beans about the party!" 
            },
            { 
              idiom: "Bring home bacon", 
              meaning: "Earn income", 
              example: "My dad brings home the bacon" 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="font-bold">"{item.idiom}"</h3>
              <p className="text-sm mt-1">{item.meaning}</p>
              <p className="text-xs mt-2 bg-gray-100 p-1 rounded">{item.example}</p>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  // Continue with remaining pages (Body, Weather, Money, Time, etc.)...
  {
    title: "📝 Exam Idioms",
    icon: <FiEdit className="text-indigo-600" />,
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
          Master POST-UTME Idioms! 🎯
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          These idioms frequently appear in university entrance exams
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { 
              idiom: "Read between lines", 
              meaning: "Find hidden meaning",
              emoji: "📖🔍" 
            },
            { 
              idiom: "Dime a dozen", 
              meaning: "Very common",
              emoji: "💲12" 
            },
            { 
              idiom: "On same page", 
              meaning: "In agreement",
              emoji: "📄✅" 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <p className="text-2xl mb-2">{item.emoji}</p>
              <h3 className="font-bold text-gray-900">"{item.idiom}"</h3>
              <p className="text-gray-600">{item.meaning}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Take Idiom Challenge
        </motion.button>
      </div>
    )
  }
];