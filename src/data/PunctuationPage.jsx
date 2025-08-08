// src/pages/subject/punctuation/PunctuationPage.jsx
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

export const PunctuationPages = [
  {
    title: "🚦 Punctuation: Traffic Rules for Writing!",
    icon: <FiStopCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Punctuation marks are like <span className="font-bold text-indigo-700">road signs</span> - 
          they tell readers when to stop, pause, or get excited! Nigerian writers often miss them, 
          causing "grammar accidents" 🚨
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"She said bring the money"</span> → 
            <span className="font-bold">✅ "She said, 'Bring the money.'"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { icon: "🛑", name: "Period", symbol: ".", desc: "Full stop" },
            { icon: "⏸️", name: "Comma", symbol: ",", desc: "Pause" },
            { icon: "❓", name: "Question", symbol: "?", desc: "Inquiry" },
            { icon: "💥", name: "Exclamation", symbol: "!", desc: "Emotion" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-3xl font-mono">{item.symbol}</p>
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
            Think of punctuation as <span className="font-bold">emoji for sentences</span> - 
            😲 for exclamations, 🤔 for questions, and 😐 for periods!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "The Essential 5",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Period */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🛑</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiStopCircle />
              Period (.) - The Full Stop
            </h3>
          </div>
          <p>Ends sentences like a red traffic light. Without it, thoughts crash!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Correct:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "The bus arrived late.",
                  "Dr. Adeola works at LUTH.",
                  "Jollof rice tastes best on Fridays."
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
                  "Bring the money (missing period)",
                  "We dey go school everyday",
                  "The food don done"
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

        {/* Comma */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⏸️</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiPause />
              Comma (,) - The Pause Master
            </h3>
          </div>
          <p>Creates breathing space in sentences, like a speed bump!</p>
          
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-medium text-blue-700">When to Use:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { title: "Lists", example: "Buy rice, beans, and oil" },
                { title: "Intro Phrases", example: "After church, we ate" },
                { title: "Extra Info", example: "Lagos, Nigeria's largest city, is busy" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded shadow-xs">
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs mt-1">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question Mark */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">❓</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiHelpCircle />
              Question Mark (?) - The Curiosity Hook
            </h3>
          </div>
          <p>For direct questions only! Not needed in reported speech.</p>
          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-purple-50 p-3 rounded-lg">
              <p className="font-medium text-purple-700">✅ Direct Question:</p>
              <p className="mt-2 p-2 bg-white rounded">"Are you writing JAMB?" she asked.</p>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-700">🚫 Indirect Question:</p>
              <p className="mt-2 p-2 bg-white rounded">She asked if you're writing JAMB.</p>
            </div>
          </div>
        </div>

        {/* Exclamation */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">💥</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiVolume2 />
              Exclamation Mark (!) - The Drama Queen
            </h3>
          </div>
          <p>For strong emotions - but don't overuse like Nollywood sound effects!</p>
          
          <div className="mt-4 bg-gradient-to-r from-red-50 to-yellow-50 p-4 rounded-lg">
            <p className="font-bold text-red-700">Nigerian Examples:</p>
            <ul className="mt-3 space-y-3">
              {[
                { text: "Omo! See traffic!", emoji: "🚗💨" },
                { text: "Goal!!!", emoji: "⚽" },
                { text: "Waiter! The soup sweet die!", emoji: "🍲" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="font-mono">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apostrophe */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔑</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiEdit />
              Apostrophe (') - The Owner Marker
            </h3>
          </div>
          <p>Shows possession or squashes words together.</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-medium">Possession:</p>
              <div className="mt-2 bg-white p-3 rounded-lg border border-green-200">
                <p>Bola<span className="text-red-500 font-bold">'s</span> phone</p>
                <p className="text-xs text-gray-500 mt-1">(One Bola owns the phone)</p>
              </div>
            </div>
            <div>
              <p className="font-medium">Contractions:</p>
              <div className="mt-2 bg-white p-3 rounded-lg border border-blue-200">
                <p>Don<span className="text-red-500 font-bold">'t</span> = do not</p>
                <p className="text-xs text-gray-500 mt-1">(Squeezed words)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Advanced Marks",
    icon: <FiCode className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Semicolon */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔗</span>
            <h3 className="font-bold text-xl">
              Semicolon (;) - The Sophisticated Connector
            </h3>
          </div>
          <p>Links related independent clauses without FANBOYS.</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg border border-indigo-200">
            <p className="font-mono text-center">
              [Complete sentence]<span className="text-purple-600 font-bold">;</span> [related sentence]
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "The generator failed; we used candles.",
                "Abuja is planned; Lagos is organic."
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

        {/* Colon */}
        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">👇</span>
            <h3 className="font-bold text-xl">
              Colon (:) - The Anticipation Builder
            </h3>
          </div>
          <p>Introduces lists, explanations, or dramatic reveals.</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                type: "List",
                example: "Bring these: pencils, eraser, and calculator."
              },
              {
                type: "Quote",
                example: "Fela said: 'Music is the weapon.'"
              },
              {
                type: "Explanation",
                example: "The solution was simple: study harder."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                <p className="font-medium text-green-700">{item.type}:</p>
                <p className="mt-1">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quotation Marks */}
        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🗨️</span>
            <h3 className="font-bold text-xl">
              Quotation Marks (" ") - The Dialogue Wrappers
            </h3>
          </div>
          <p>Capture spoken words, titles, or special terms.</p>
          
          <div className="mt-4 space-y-3">
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Direct Speech:</p>
              <p className="mt-2 font-mono">She said, <span className="text-red-500">"</span>I aced JAMB<span className="text-red-500">!"</span></p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Nigerian Slang:</p>
              <p className="mt-2">The word <span className="text-red-500">"</span>ginger<span className="text-red-500">"</span> means motivation.</p>
            </div>
          </div>
        </div>

        {/* Hyphen vs Dash */}
        <div className="bg-red-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">➖</span>
            <h3 className="font-bold text-xl">
              Hyphen (-) vs Dash (—) - The Length Matters!
            </h3>
          </div>
          <p>Hyphen connects words, dash creates drama—like this!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg border border-red-200">
              <p className="font-medium text-red-700">Hyphen Examples:</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>state-of-the-art</li>
                <li>ex-President Obasanjo</li>
                <li>twenty-two naira</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg border border-red-200">
              <p className="font-medium text-red-700">Dash Examples:</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>The answer—when we got it—was obvious.</li>
                <li>She wanted one thing—revenge.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Avoid These Crimes!",
    icon: <FiAlertCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Comma Splice */}
        <div className="bg-red-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🚨</span>
            <h3 className="font-bold text-xl">
              Comma Splice - Grammar Accident!
            </h3>
          </div>
          <p>Joining two independent clauses with just a comma is illegal in Grammar Police state!</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg">
            <p className="font-medium text-red-700">❌ Crime Scene:</p>
            <p className="font-mono bg-red-50 p-3 rounded">Fuel is costly<span className="text-red-500 font-bold">,</span> we use buses.</p>
            
            <p className="font-medium text-green-700 mt-4">✅ Fix Options:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { fix: "Use period", example: "Fuel is costly. We use buses." },
                { fix: "Use semicolon", example: "Fuel is costly; we use buses." },
                { fix: "Add FANBOYS", example: "Fuel is costly, so we use buses." }
              ].map((item, i) => (
                <div key={i} className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-xs">{item.fix}:</p>
                  <p className="text-sm mt-1">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Apostrophe Errors */}
        <div className="bg-purple-100 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔍</span>
            <h3 className="font-bold text-xl">
              Apostrophe Crimes - Spot the Difference!
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                wrong: "Its raining",
                right: "It's raining (it is)",
                tip: "Contraction needs apostrophe"
              },
              {
                wrong: "The girls's hostel",
                right: "The girls' hostel",
                tip: "Plural nouns get apostrophe after 's'"
              },
              {
                wrong: "1980's music",
                right: "1980s music",
                tip: "No apostrophe for decades"
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

        {/* Punctuation Quiz */}
        <div className="bg-blue-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              Punctuation Police Quiz
            </h3>
          </div>
          <p>Fix these common Nigerian errors:</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                question: "She said bring the money",
                answer: "She said, 'Bring the money.'"
              },
              {
                question: "The mens shoes",
                answer: "The men's shoes"
              },
              {
                question: "We ate rice stew and chicken",
                answer: "We ate rice, stew, and chicken"
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
    title: "Punctuation Master",
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
          Become a Punctuation Superhero! 🦸
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Take our challenge to fix real Nigerian writing samples and earn your "Grammar Oga" badge!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { 
              title: "Levels", 
              value: "5", 
              icon: "📶", 
              color: "text-purple-600",
              desc: "From JAMB to PhD level" 
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
              desc: "Real Naija contexts" 
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
          Start Punctuation Drill
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features real-life examples like market signs, Nollywood subtitles, and social media posts!
        </p>
      </div>
    )
  }
];