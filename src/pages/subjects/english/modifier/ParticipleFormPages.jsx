// src/pages/subject/participle/ParticiplePages.jsx
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

export const ParticiplePages = [
  {
    title: "🔥 Participle Power: The Action Heroes of English!",
    icon: <FiVolume2 className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Participles are like <span className="font-bold text-indigo-700">Nollywood action stars</span> - 
          they bring drama to sentences! Nigerian students often confuse them, causing "grammar wahala" 🤦‍♂️
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"I saw him danced"</span> → 
            <span className="font-bold">✅ "I saw him dancing"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            { icon: "🏃", name: "Present Participle", symbol: "-ing", desc: "Ongoing action" },
            { icon: "🏁", name: "Past Participle", symbol: "-ed/-en", desc: "Completed action" },
            { icon: "🔄", name: "Perfect Participle", symbol: "Having + V3", desc: "Sequence of actions" }
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
            Think of participles as <span className="font-bold">"half-verbs"</span> - 
            they look like verbs but work as adjectives ("a crying baby") or to form tenses ("is going")!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Participle Types Explained",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Present Participle */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🏃</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiVolume2 />
              Present Participle (-ing)
            </h3>
          </div>
          <p>Shows ongoing action, like a Lagos danfo in traffic!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Correct Uses:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "The baby is crying.",
                  "I saw him crossing the road.",
                  "A barking dog scared the thief."
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
                  "She is cook rice (→ cooking)",
                  "I hear him sang (→ singing)",
                  "A bore student (→ boring)"
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

        {/* Past Participle */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🏁</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiStopCircle />
              Past Participle (-ed/-en)
            </h3>
          </div>
          <p>For completed actions, like finished jollof rice!</p>
          
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-medium text-blue-700">Key Uses:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { title: "Perfect Tenses", example: "She has eaten" },
                { title: "Passive Voice", example: "The phone was stolen" },
                { title: "Adjectives", example: "A broken chair" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded shadow-xs">
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs mt-1">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Perfect Participle */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔄</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiLink />
              Perfect Participle
            </h3>
          </div>
          <p>Shows action sequence, like "after I don chop, I sleep"</p>
          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-purple-50 p-3 rounded-lg">
              <p className="font-medium text-purple-700">Structure:</p>
              <p className="mt-2 p-2 bg-white rounded">Having + past participle (V3)</p>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-700">Nigerian Example:</p>
              <p className="mt-2 p-2 bg-white rounded">"Having finished my WAEC, I celebrated with puff-puff"</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Participle vs Other Forms",
    icon: <FiAlertCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Participle vs Gerund */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🤔</span>
            <h3 className="font-bold text-xl">
              -ing Form: Participle or Gerund?
            </h3>
          </div>
          <p>Same look, different jobs - like agbada vs danshiki!</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg border border-indigo-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-indigo-700">Participle (Adjective):</p>
                <p className="mt-2 bg-indigo-100 p-3 rounded-lg">
                  "The <span className="font-bold">boring</span> lecture made students sleep"
                </p>
                <p className="text-xs mt-1">(Describes 'lecture')</p>
              </div>
              <div>
                <p className="font-medium text-purple-700">Gerund (Noun):</p>
                <p className="mt-2 bg-purple-100 p-3 rounded-lg">
                  "<span className="font-bold">Boring</span> students is wrong"
                </p>
                <p className="text-xs mt-1">(Activity as subject)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dangling Participle */}
        <div className="bg-red-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⚠️</span>
            <h3 className="font-bold text-xl">
              Dangling Participle - Grammar Crime!
            </h3>
          </div>
          <p>When the participle has no clear subject - common in Nigerian English!</p>
          
          <div className="mt-4 space-y-4">
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <p className="font-medium text-red-700">❌ Crime Scene:</p>
              <p className="font-mono bg-red-100 p-3 rounded">
                "<span className="font-bold">Running</span> down the road, the bus left him"
              </p>
              <p className="text-xs mt-1">(Was the bus running? No!)</p>
              
              <p className="font-medium text-green-700 mt-3">✅ Correction:</p>
              <p className="font-mono bg-green-100 p-3 rounded">
                "<span className="font-bold">Running</span> down the road, <span className="font-bold">he</span> missed the bus"
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <p className="font-medium text-red-700">Nigerian Example:</p>
              <p className="font-mono bg-red-100 p-3 rounded">
                "<span className="font-bold">After eating</span>, the plate was washed"
              </p>
              <p className="text-green-700 font-mono bg-green-100 p-3 rounded mt-2">
                "<span className="font-bold">After eating</span>, <span className="font-bold">she</span> washed the plate"
              </p>
            </div>
          </div>
        </div>

        {/* Participle Phrases */}
        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧩</span>
            <h3 className="font-bold text-xl">
              Participle Phrases - The Sentence Decorators
            </h3>
          </div>
          <p>Add style to your writing like Ankara fabric!</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                type: "Descriptive",
                example: "The man, wearing agbada, entered the palace."
              },
              {
                type: "Cause-Effect",
                example: "Having missed BRT, she took okada."
              },
              {
                type: "Time",
                example: "Seeing the lecturer, students stopped chatting."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                <p className="font-medium text-green-700">{item.type}:</p>
                <p className="mt-1">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Participle Drills",
    icon: <FiEdit className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Fix the Errors */}
        <div className="bg-yellow-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✍️</span>
            <h3 className="font-bold text-xl">
              Fix These Naija Errors
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                wrong: "I enjoy to dance",
                right: "I enjoy dancing",
                tip: "After 'enjoy' use -ing form"
              },
              {
                wrong: "The broke bottle cut him",
                right: "The broken bottle cut him",
                tip: "Past participle as adjective"
              },
              {
                wrong: "She left the cook food",
                right: "She left the cooking food",
                tip: "Present participle for ongoing action"
              }
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

        {/* Multiple Choice */}
        <div className="bg-blue-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔘</span>
            <h3 className="font-bold text-xl">
              JAMB-Style Questions
            </h3>
          </div>
          
          <div className="mt-4 space-y-6">
            {[
              {
                question: "Choose the correct sentence:",
                options: [
                  "I saw him danced",
                  "I saw him dancing",
                  "I saw him to dance",
                  "I saw him dance"
                ],
                answer: 1
              },
              {
                question: "The ___ child was crying loudly",
                options: [
                  "frighten",
                  "frightening",
                  "frightened",
                  "frightenly"
                ],
                answer: 2
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Question {i+1}: {item.question}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  {item.options.map((opt, j) => (
                    <div key={j} className={`p-2 rounded border ${j === item.answer ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                      {String.fromCharCode(97 + j)}) {opt}
                    </div>
                  ))}
                </div>
                <details className="mt-3">
                  <summary className="text-blue-600 cursor-pointer">Show Answer</summary>
                  <p className="mt-1 font-mono bg-green-100 p-2 rounded">
                    Correct: {String.fromCharCode(97 + item.answer)}) {item.options[item.answer]}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Life Application */}
        <div className="bg-purple-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🇳🇬</span>
            <h3 className="font-bold text-xl">
              Nigerian Context Practice
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            <p>Complete these everyday Nigerian expressions correctly:</p>
            
            {[
              {
                sentence: "___ (see) the police checkpoint, the driver made a U-turn",
                answer: "Seeing"
              },
              {
                sentence: "The ___ (fry) akara smelled delicious",
                answer: "fried"
              },
              {
                sentence: "___ (complete) his NYSC, he started job hunting",
                answer: "Having completed"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-purple-200">
                <p className="font-mono">{item.sentence}</p>
                <details className="mt-2">
                  <summary className="text-purple-600 cursor-pointer">Show Answer</summary>
                  <p className="mt-1 font-mono bg-purple-100 p-2 rounded">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Participle Master",
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
          Participle Pro Unlocked! 🎓
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Now you can identify and use participles better than a grammar teacher at Queens College!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { 
              title: "Concepts", 
              value: "Mastered", 
              icon: "🧠", 
              color: "text-purple-600",
              desc: "All participle types" 
            },
            { 
              title: "Errors", 
              value: "Fixed", 
              icon: "🔧", 
              color: "text-yellow-500",
              desc: "Common Naija mistakes" 
            },
            { 
              title: "Questions", 
              value: "Ready", 
              icon: "📝", 
              color: "text-green-600",
              desc: "For any post-UTME" 
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
          Take Final Challenge
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Contains real post-UTME questions from UNILAG, UI, and FUTA past papers!
        </p>
      </div>
    )
  }
];