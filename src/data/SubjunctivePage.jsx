// src/pages/subject/subjunctive/SubjunctivePage.jsx
import {
  FiBook,
  FiCheckCircle,
  FiAlertTriangle,
  FiAward,
  FiGlobe,
  FiHelpCircle,
  FiTrendingUp,
  FiCode,
  FiList,
  FiEdit,
  FiVolume2
} from "react-icons/fi";
import { motion } from "framer-motion";

export const SubjunctivePages = [
  {
    title: "✨ The Subjunctive Mood: Grammar's Secret Sauce!",
    icon: <FiBook className="text-purple-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          The subjunctive mood is like a <span className="font-bold text-purple-700">magic wand</span> - 
          it transforms verbs to express wishes, demands, and imaginary situations! Nigerians often 
          forget it, causing "grammar police" to frown 😠
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"I wish I was rich"</span> → 
            <span className="font-bold">✅ "I wish I <u>were</u> rich"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            { icon: "🧞", name: "Wishes", symbol: "were", desc: "I wish I were..." },
            { icon: "⚖️", name: "Demands", symbol: "be", desc: "We demand he be..." },
            { icon: "🌌", name: "Hypothetical", symbol: "if", desc: "If I were..." }
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
        
        <div className="mt-8 bg-purple-50 p-4 rounded-xl">
          <p className="font-medium text-purple-700 flex items-center gap-2">
            <FiAward className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Think of subjunctive as <span className="font-bold">Nollywood magic</span> - 
            🧙‍♂️ for wishes ("If I were..."), 👮‍♂️ for demands ("She insists he go"), 
            and ✨ for fixed phrases ("God bless you")
          </p>
        </div>
      </div>
    )
  },
  {
    title: "When to Use Subjunctive",
    icon: <FiCheckCircle className="text-purple-600" />,
    content: (
      <div className="space-y-8">
        {/* Wishes */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧞</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiHelpCircle />
              Wishes & Desires
            </h3>
          </div>
          <p>For unreal or wished-for situations (always use <strong>"were"</strong>)</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Correct:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "I wish I <strong>were</strong> taller",
                  "She wishes she <strong>had</strong> a car",
                  "We wish today <strong>were</strong> holiday"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" dangerouslySetInnerHTML={{__html: item}} />
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="font-medium text-red-700">❌ Nigerian Errors:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "I wish I <strong>was</strong> rich",
                  "She wish she <strong>has</strong> money",
                  "We wish today <strong>was</strong> holiday"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" dangerouslySetInnerHTML={{__html: item}} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Demands */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">👮‍♂️</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiVolume2 />
              Demands & Suggestions
            </h3>
          </div>
          <p>After verbs like <em>demand, suggest, insist</em> (use base verb)</p>
          
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-medium text-blue-700">Key Verbs:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
              {[
                { verb: "demand", example: "demand that he <strong>go</strong>" },
                { verb: "suggest", example: "suggest she <strong>study</strong>" },
                { verb: "insist", example: "insist they <strong>be</strong>" },
                { verb: "require", example: "require that you <strong>come</strong>" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded shadow-xs">
                  <p className="font-bold text-sm">{item.verb}</p>
                  <p className="text-xs mt-1" dangerouslySetInnerHTML={{__html: item.example}} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hypothetical */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🌌</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiCode />
              Hypothetical "If" Clauses
            </h3>
          </div>
          <p>For imaginary situations (use <strong>"were"</strong> for all subjects)</p>
          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-purple-50 p-3 rounded-lg">
              <p className="font-medium text-purple-700">✅ Correct:</p>
              <p className="mt-2 p-2 bg-white rounded">"If I <strong>were</strong> you, I'd buy land in Lekki"</p>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-700">❌ Wrong:</p>
              <p className="mt-2 p-2 bg-white rounded">"If I <strong>was</strong> you, I'd buy land in Lekki"</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Advanced Subjunctive",
    icon: <FiTrendingUp className="text-purple-600" />,
    content: (
      <div className="space-y-8">
        {/* Fixed Expressions */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✨</span>
            <h3 className="font-bold text-xl">
              Fixed Expressions
            </h3>
          </div>
          <p>Some phrases always use subjunctive (even in Naija!)</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg border border-indigo-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "God <strong>bless</strong> Nigeria!",
                "Long <strong>live</strong> the King!",
                "<strong>Be</strong> that as it may...",
                "<strong>Suffice</strong> it to say"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-indigo-100 p-3 rounded-lg"
                  dangerouslySetInnerHTML={{__html: item}}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Negative Form */}
        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🚫</span>
            <h3 className="font-bold text-xl">
              Negative Subjunctive
            </h3>
          </div>
          <p>Place <strong>"not"</strong> before the base verb</p>
          
          <div className="mt-4 space-y-4">
            {[
              "It's vital that he <strong>not be</strong> late",
              "She demanded they <strong>not leave</strong>",
              "We insisted she <strong>not go</strong> alone"
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                <p dangerouslySetInnerHTML={{__html: item}} />
              </div>
            ))}
          </div>
        </div>

        {/* US vs UK */}
        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🇺🇸🇬🇧</span>
            <h3 className="font-bold text-xl">
              American vs British English
            </h3>
          </div>
          <p>Americans use subjunctive more strictly than Brits</p>
          
          <div className="mt-4 space-y-3">
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">🇺🇸 American:</p>
              <p className="mt-2">"It's essential she <strong>be</strong> here"</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">🇬🇧 British:</p>
              <p className="mt-2">"It's essential she <strong>is</strong> here" (less formal)</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Practice & Quiz",
    icon: <FiAlertTriangle className="text-purple-600" />,
    content: (
      <div className="space-y-8">
        {/* Common Mistakes */}
        <div className="bg-red-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🚨</span>
            <h3 className="font-bold text-xl">
              Common Naija Mistakes
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                wrong: "She suggests that he <strong>is</strong> careful",
                right: "She suggests that he <strong>be</strong> careful"
              },
              {
                wrong: "I wish I <strong>was</strong> there",
                right: "I wish I <strong>were</strong> there"
              },
              {
                wrong: "It's important that she <strong>studies</strong>",
                right: "It's important that she <strong>study</strong>"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-3 rounded-lg border border-red-200"
              >
                <div className="flex gap-4">
                  <div className="text-red-500 font-bold">❌ <span dangerouslySetInnerHTML={{__html: item.wrong}} /></div>
                  <div className="text-green-500 font-bold">✅ <span dangerouslySetInnerHTML={{__html: item.right}} /></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quiz */}
        <div className="bg-blue-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              Subjunctive Challenge
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                question: "Fix: 'The boss demands that she is punctual'",
                answer: "The boss demands that she <strong>be</strong> punctual"
              },
              {
                question: "Fix: 'If I was you, I'd buy Bitcoin'",
                answer: "If I <strong>were</strong> you, I'd buy Bitcoin"
              },
              {
                question: "Fix: 'We suggest that he goes home'",
                answer: "We suggest that he <strong>go</strong> home"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Question #{i+1}:</p>
                <p className="font-mono bg-gray-100 p-2 rounded mt-1" dangerouslySetInnerHTML={{__html: item.question}} />
                <details className="mt-2">
                  <summary className="text-blue-600 cursor-pointer">Reveal Answer</summary>
                  <p className="mt-1 font-mono bg-green-100 p-2 rounded" dangerouslySetInnerHTML={{__html: item.answer}} />
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Subjunctive Master",
    icon: <FiAward className="text-purple-600" />,
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
          Become a Subjunctive Superstar! 🌟
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Master this advanced grammar to sound like a true "Grammar Oga" in formal writing!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { 
              title: "Key Rules", 
              value: "5", 
              icon: "🗝️", 
              color: "text-purple-600",
              desc: "Wishes, demands, hypotheticals" 
            },
            { 
              title: "Nigerian Examples", 
              value: "50+", 
              icon: "🇳🇬", 
              color: "text-green-600",
              desc: "JAMB, Lekki, Naija slang" 
            },
            { 
              title: "Pro Level", 
              value: "Advanced", 
              icon: "🎓", 
              color: "text-yellow-500",
              desc: "Impress professors & bosses" 
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
          Start Subjunctive Drills
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features real-life examples from Nigerian exams, formal letters, and professional settings!
        </p>
      </div>
    )
  }
];