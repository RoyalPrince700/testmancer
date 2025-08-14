// src/pages/subject/spelling/SpellingPages.jsx
import { 
  FiAlertCircle,
  FiPause,
  FiHelpCircle,
  FiVolume2,
  FiLink,
  FiList,
  FiEdit,
  FiMessageSquare,
  FiMinus,
  FiCode,
  FiMoreHorizontal,
  FiStopCircle,
  FiAward
} from "react-icons/fi";
import { motion } from "framer-motion";

export const SpellingPages = [
  {
    title: "📝 Spelling: The Building Blocks of Naija English!",
    icon: <FiEdit className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Spelling is like the <span className="font-bold text-indigo-700">foundation of a house</span> - 
          get it wrong, and your writing collapses! In Nigeria, we mix British and American spellings, 
          causing plenty "wahala" in exams like Post-UTME 🚨
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"I am truely greatful"</span> → 
            <span className="font-bold">✅ "I am truly grateful"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { icon: "🇬🇧", name: "British", word: "Colour", desc: "UK style" },
            { icon: "🇺🇸", name: "American", word: "Color", desc: "US style" },
            { icon: "❓", name: "Confusion", word: "Organise", desc: "British or American?" },
            { icon: "💡", name: "Consistency", word: "Stick to one!", desc: "Don't mix" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-xl font-mono">{item.word}</p>
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
            Think of spelling as <span className="font-bold">your JAMB score</span> - 
            one small mistake can cost you marks! Stick to one spelling style (British or American) throughout your Post-UTME.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "The Essential Spelling Rules",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* I before E */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔠</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiEdit />
              I before E, Except after C
            </h3>
          </div>
          <p>A classic rule to avoid spelling disasters in words like "believe" or "receive."</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Correct:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Believe (I before E)",
                  "Receive (E after C)",
                  "Chief (I before E)"
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
                  "Beleive (wrong order)",
                  "Recieve (wrong after C)",
                  "Cheif (wrong order)"
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

        {/* Double Consonants */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔄</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiCode />
              Double Consonants - When to Double
            </h3>
          </div>
          <p>Double letters like "tt" or "ll" trip up many Nigerian students.</p>
          
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-medium text-blue-700">When to Double:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { title: "Adding Suffix", example: "Run → Running" },
                { title: "Short Vowel", example: "Shop → Shopping" },
                { title: "Stress on Last Syllable", example: "Refer → Referred" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded shadow-xs">
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs mt-1">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Silent Letters */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🤫</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiVolume2 />
              Silent Letters - The Hidden Traps
            </h3>
          </div>
          <p>Letters that are written but not pronounced, like in "doubt" or "knight."</p>
          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-purple-50 p-3 rounded-lg">
              <p className="font-medium text-purple-700">✅ Examples:</p>
              <p className="mt-2 p-2 bg-white rounded">"Doubt (silent b)"</p>
              <p className="mt-2 p-2 bg-white rounded">"Knight (silent k)"</p>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-700">🚫 Common Errors:</p>
              <p className="mt-2 p-2 bg-white rounded">"Dout (missing b)"</p>
              <p className="mt-2 p-2 bg-white rounded">"Night (missing k)"</p>
            </div>
          </div>
        </div>

        {/* Homophones */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔊</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiMessageSquare />
              Homophones - Sound Same, Spell Different
            </h3>
          </div>
          <p>Words that sound alike but have different spellings and meanings.</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-medium">Examples:</p>
              <div className="mt-2 bg-white p-3 rounded-lg border border-green-200">
                <p>Their (possession) vs There (place) vs They're (they are)</p>
                <p className="text-xs text-gray-500 mt-1">"Their jollof is there, and they're eating."</p>
              </div>
            </div>
            <div>
              <p className="font-medium">Common Mistake:</p>
              <div className="mt-2 bg-white p-3 rounded-lg border border-blue-200">
                <p><span className="line-through">"Your going to school"</span> → You're (you are)</p>
                <p className="text-xs text-gray-500 mt-1">"You're going to ace Post-UTME!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Advanced Spelling Challenges",
    icon: <FiCode className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* British vs American Spelling */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🌍</span>
            <h3 className="font-bold text-xl">
              British vs American Spelling
            </h3>
          </div>
          <p>Nigerians often mix these styles, but Post-UTME expects consistency.</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg border border-indigo-200">
            <p className="font-mono text-center">
              <span className="text-purple-600 font-bold">British</span> vs <span className="text-blue-600 font-bold">American</span>
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Colour vs Color",
                "Organise vs Organize",
                "Travelling vs Traveling"
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
        </div>

        {/* Commonly Misspelled Words */}
        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🚫</span>
            <h3 className="font-bold text-xl">
              Commonly Misspelled Words
            </h3>
          </div>
          <p>Words that trip up Nigerian students in Post-UTME exams.</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                word: "Separate",
                wrong: "Seperate",
                tip: "Remember 'par' in the middle"
              },
              {
                word: "Necessary",
                wrong: "Neccessary",
                tip: "One c, two s's"
              },
              {
                word: "Accommodation",
                wrong: "Accomodation",
                tip: "Double c, double m"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                <p className="font-medium text-green-700">Correct: {item.word}</p>
                <p className="mt-1 text-red-500">Wrong: {item.wrong}</p>
                <p className="text-xs text-gray-500 mt-1">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prefixes and Suffixes */}
        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧩</span>
            <h3 className="font-bold text-xl">
              Prefixes and Suffixes
            </h3>
          </div>
          <p>Adding these can change spelling rules, so watch out!</p>
          
          <div className="mt-4 space-y-3">
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Prefix Example:</p>
              <p className="mt-2 font-mono">"Un + necessary = Unnecessary"</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Suffix Example:</p>
              <p className="mt-2">"Happy + ness = Happiness (y to i)"</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Avoid These Spelling Crimes!",
    icon: <FiAlertCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Mixing British and American */}
        <div className="bg-red-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🚨</span>
            <h3 className="font-bold text-xl">
              Mixing British and American Spellings
            </h3>
          </div>
          <p>Using "colour" and "organize" in the same essay is a Post-UTME crime!</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg">
            <p className="font-medium text-red-700">❌ Crime Scene:</p>
            <p className="font-mono bg-red-50 p-3 rounded">I like the colour but I organize my books.</p>
            
            <p className="font-medium text-green-700 mt-4">✅ Fix:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              {[
                { fix: "British", example: "I like the colour and organise my books." },
                { fix: "American", example: "I like the color and organize my books." }
              ].map((item, i) => (
                <div key={i} className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-xs">{item.fix}:</p>
                  <p className="text-sm mt-1">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Homophone Errors */}
        <div className="bg-purple-100 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔍</span>
            <h3 className="font-bold text-xl">
              Homophone Errors - Sound-Alike Traps
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                wrong: "Your late",
                right: "You're late",
                tip: "You're = you are"
              },
              {
                wrong: "Their coming",
                right: "They're coming",
                tip: "They're = they are"
              },
              {
                wrong: "Its a dog",
                right: "It's a dog",
                tip: "It's = it is"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-3 rounded-lg border border-purple-200"
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

        {/* Spelling Quiz */}
        <div className="bg-blue-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              Spelling Police Quiz
            </h3>
          </div>
          <p>Fix these common Nigerian spelling errors:</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                question: "I am greatful for your help",
                answer: "I am grateful for your help"
              },
              {
                question: "Seperate the items",
                answer: "Separate the items"
              },
              {
                question: "Your writing post-utme",
                answer: "You're writing Post-UTME"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Error #{i+1}:</p>
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
    title: "Spelling Master",
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
          Become a Spelling Champion! 🏆
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Take our Post-UTME spelling challenge and earn your "Naija Spelling Oga" badge!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { 
              title: "Levels", 
              value: "5", 
              icon: "📶", 
              color: "text-purple-600",
              desc: "From JAMB to Post-UTME" 
            },
            { 
              title: "Badges", 
              value: "3", 
              icon: "🏆", 
              color: "text-yellow-500",
              desc: "Earn shiny rewards" 
            },
            { 
              title: "Examples", 
              value: "100+", 
              icon: "🇳🇬", 
              color: "text-green-600",
              desc: "Real Naija words" 
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
          Start Spelling Drill
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features real-life Nigerian examples like WAEC questions, market signs, and social media posts!
        </p>
      </div>
    )
  }
];