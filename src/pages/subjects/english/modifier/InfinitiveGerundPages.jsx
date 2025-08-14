// src/pages/subject/verbforms/InfinitiveGerundPages.jsx
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

export const InfinitiveGerundPages = [
  {
    title: "🏃‍♂️ Infinitives & Gerunds: The Action Heroes of English!",
    icon: <FiEdit className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Infinitives and gerunds are like the <span className="font-bold text-indigo-700">superheroes of verbs</span> - 
          they show action or states in special ways! Nigerian students often mix them up in Post-UTME essays, 
          causing "grammar jollof" to lose flavor 🚨
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"I enjoy to write exams"</span> → 
            <span className="font-bold">✅ "I enjoy writing exams"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { icon: "🏃", name: "Infinitive", word: "To + verb", desc: "Purpose or intent" },
            { icon: "🎬", name: "Gerund", word: "Verb + ing", desc: "Noun-like action" },
            { icon: "❓", name: "Verb Choice", word: "Depends on verb", desc: "Tricky rules" },
            { icon: "💡", name: "Mastery", word: "Practice!", desc: "Ace Post-UTME" }
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
            Think of infinitives as <span className="font-bold">"to-do lists"</span> (to study) and gerunds as 
            <span className="font-bold">"hobbies"</span> (studying). Learn which verbs pair with each for Post-UTME success!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "The Essential Rules",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Infinitive Basics */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🏃</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiEdit />
              Infinitives - The "To + Verb" Stars
            </h3>
          </div>
          <p>Infinitives (to + verb) show purpose, intention, or future action, like planning to eat jollof!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Correct:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "I want to pass Post-UTME.",
                  "She plans to study medicine.",
                  "We need to hustle for success."
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
                  "I enjoy to study (use gerund)",
                  "She wants studying (use infinitive)",
                  "He plans passing (use infinitive)"
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

        {/* Gerund Basics */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🎬</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiCode />
              Gerunds - The "Verb + ing" Champions
            </h3>
          </div>
          <p>Gerunds (verb + ing) act like nouns, describing actions as things, like "cooking egusi soup."</p>
          
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-medium text-blue-700">When to Use:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { title: "Subject", example: "Reading improves your mind" },
                { title: "After Prepositions", example: "Good at dancing owambe" },
                { title: "After Certain Verbs", example: "Enjoy cooking jollof" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded shadow-xs">
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs mt-1">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verbs Followed by Infinitives */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📋</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiList />
              Verbs Followed by Infinitives
            </h3>
          </div>
          <p>Some verbs demand infinitives, like a teacher assigning homework!</p>
          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-purple-50 p-3 rounded-lg">
              <p className="font-medium text-purple-700">✅ Examples:</p>
              <p className="mt-2 p-2 bg-white rounded">"I hope to attend UNILAG."</p>
              <p className="mt-2 p-2 bg-white rounded">"They agreed to help."</p>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-700">🚫 Common Errors:</p>
              <p className="mt-2 p-2 bg-white rounded">"I hope attending (wrong)"</p>
              <p className="mt-2 p-2 bg-white rounded">"They agreed helping (wrong)"</p>
            </div>
          </div>
        </div>

        {/* Verbs Followed by Gerunds */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🎯</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiMessageSquare />
              Verbs Followed by Gerunds
            </h3>
          </div>
          <p>Other verbs love gerunds, like Nigerians love party jollof!</p>
          
          <div classMcName="mt-4 bg-gradient-to-r from-red-50 to-yellow-50 p-4 rounded-lg">
            <p className="font-bold text-red-700">Nigerian Examples:</p>
            <ul className="mt-3 space-y-3">
              {[
                { text: "I enjoy dancing to afrobeat!", emoji: "💃" },
                { text: "She avoids writing essays.", emoji: "📝" },
                { text: "We discussed studying together.", emoji: "📚" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="font-mono">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Advanced Infinitive & Gerund Rules",
    icon: <FiCode className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Infinitives After Adjectives */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🌟</span>
            <h3 className="font-bold text-xl">
              Infinitives After Adjectives
            </h3>
          </div>
          <p>Adjectives like "happy" or "eager" often pair with infinitives to show purpose.</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg border border-indigo-200">
            <p className="font-mono text-center">
              [Adjective] + <span className="text-purple-600 font-bold">to + verb</span>
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Happy to learn English.",
                "Eager to pass Post-UTME."
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

        {/* Gerunds After Prepositions */}
        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔗</span>
            <h3 className="font-bold text-xl">
              Gerunds After Prepositions
            </h3>
          </div>
          <p>Prepositions (in, at, about) are always followed by gerunds, not infinitives.</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                type: "Preposition",
                example: "Interested in studying biology."
              },
              {
                type: "Preposition Phrase",
                example: "Good at writing essays."
              },
              {
                type: "After Verb + Preposition",
                example: "Dream about passing JAMB."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                <p className="font-medium text-green-700">{item.type}:</p>
                <p className="mt-1">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Verbs Allowing Both */}
        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔄</span>
            <h3 className="font-bold text-xl">
              Verbs Allowing Both - Meaning Changes!
            </h3>
          </div>
          <p>Some verbs like "stop" or "remember" change meaning with infinitives vs. gerunds.</p>
          
          <div className="mt-4 space-y-3">
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Stop + Gerund:</p>
              <p className="mt-2 font-mono">"Stop talking (cease the action)"</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Stop + Infinitive:</p>
              <p className="mt-2">"Stop to talk (pause to do something)"</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Avoid These Verb Form Crimes!",
    icon: <FiAlertCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Wrong Verb Form */}
        <div className="bg-red-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🚨</span>
            <h3 className="font-bold text-xl">
              Wrong Verb Form - Grammar Wahala!
            </h3>
          </div>
          <p>Using the wrong form after a verb is a common Post-UTME mistake!</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg">
            <p className="font-medium text-red-700">❌ Crime Scene:</p>
            <p className="font-mono bg-red- insoluble p-3 rounded">I enjoy to read novels<span className="text-red-500 font-bold">.</span></p>
            
            <p className="font-medium text-green-700 mt-4">✅ Fix:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              {[
                { fix: "Use Gerund", example: "I enjoy reading novels." },
                { fix: "Correct Verb", example: "I want to read novels." }
              ].map((item, i) => (
                <div key={i} className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-xs">{item.fix}:</p>
                  <p className="text-sm mt-1">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preposition Errors */}
        <div className="bg-purple-100 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔍</span>
            <h3 className="font-bold text-xl">
              Preposition + Infinitive Errors
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                wrong: "Interested in to study",
                right: "Interested in studying",
                tip: "Prepositions take gerunds"
              },
              {
                wrong: "Afraid of to fail",
                right: "Afraid of failing",
                tip: "Always gerund after 'of'"
              },
              {
                wrong: "Dream to become",
                right: "Dream of becoming",
                tip: "Use 'of' with gerund"
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

        {/* Verb Form Quiz */}
        <div className="bg-blue-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              Verb Form Police Quiz
            </h3>
          </div>
          <p>Fix these common Nigerian errors:</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                question: "I avoid to write essays",
                answer: "I avoid writing essays"
              },
              {
                question: "She wants studying medicine",
                answer: "She wants to study medicine"
              },
              {
                question: "Good at to dance",
                answer: "Good at dancing"
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
    title: "Verb Form Master",
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
          Become a Verb Form Superstar! 🦸
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Take our Post-UTME verb form challenge to master infinitives and gerunds and earn your "Grammar Oga" badge!
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
          Start Verb Form Drill
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features real-life Nigerian examples like WAEC questions, Nollywood scripts, and social media posts!
        </p>
      </div>
    )
  }
];