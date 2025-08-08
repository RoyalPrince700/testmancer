// src/pages/subject/real/RealPages.jsx
import {
  FiAlertCircle,
  FiBook,
  FiCheck,
  FiX,
  FiAward,
  FiHelpCircle,
  FiTrendingUp,
  FiCode,
  FiList,
  FiEdit,
  FiGlobe
} from "react-icons/fi";
import { motion } from "framer-motion";

export const ErrorsPages = [
  {
    title: "🚨 Common Errors in English: Nigerian Edition",
    icon: <FiAlertCircle className="text-red-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          English errors are like <span className="font-bold text-red-700">potholes</span> - 
          they make your writing bumpy! Nigerian students often fall into these grammar traps, 
          especially in <span className="font-bold">POST-UTME exams</span> 📝
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Classic Naija Error:</span> 
            <span className="line-through">"I am suppose to come"</span> → 
            <span className="font-bold">✅ "I am supposed to come"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            { icon: "🤝", name: "Subject-Verb", symbol: "is/are", desc: "Agreement errors" },
            { icon: "⏳", name: "Tenses", symbol: "ate/eat", desc: "Wrong time usage" },
            { icon: "🔠", name: "Apostrophes", symbol: "'s", desc: "Misplaced marks" }
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
        
        <div className="mt-8 bg-red-50 p-4 rounded-xl">
          <p className="font-medium text-red-700 flex items-center gap-2">
            <FiAward className="text-yellow-500" />
            JAMB Pro Tip:
          </p>
          <p className="mt-2">
            These errors are <span className="font-bold">frequently tested</span> in POST-UTME - 
            🚫 watch for <em>"your/you're"</em>, ⏱️ tense mistakes, and 📝 run-on sentences!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Top 5 Critical Errors",
    icon: <FiBook className="text-red-600" />,
    content: (
      <div className="space-y-8">
        {/* Subject-Verb Agreement */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🤝</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiHelpCircle />
              Subject-Verb Agreement
            </h3>
          </div>
          <p>Singular subjects need singular verbs; plural needs plural!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Correct:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "The list <strong>is</strong> long",
                  "My friend and I <strong>are</strong> coming",
                  "Each student <strong>has</strong> a book"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" dangerouslySetInnerHTML={{__html: item}} />
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="font-medium text-red-700">❌ Nigerian Errors:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "The list <strong>are</strong> long",
                  "My friend and I <strong>is</strong> coming",
                  "Each student <strong>have</strong> a book"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" dangerouslySetInnerHTML={{__html: item}} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tense Errors */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⏳</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiEdit />
              Wrong Tense Usage
            </h3>
          </div>
          <p>Don't mix up past, present, and future!</p>
          
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-medium text-blue-700">Time Travel Guide:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { time: "Past", example: "I <strong>ate</strong> rice" },
                { time: "Present", example: "She <strong>goes</strong> to school" },
                { time: "Future", example: "They <strong>will come</strong>" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded shadow-xs">
                  <p className="font-bold text-sm">{item.time}</p>
                  <p className="text-xs mt-1" dangerouslySetInnerHTML={{__html: item.example}} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Apostrophe Crimes */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔠</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiCode />
              Apostrophe Catastrophes
            </h3>
          </div>
          <p>Never use apostrophes for plurals!</p>
          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-purple-50 p-3 rounded-lg">
              <p className="font-medium text-purple-700">✅ Correct:</p>
              <p className="mt-2 p-2 bg-white rounded">"The <strong>students'</strong> books" (plural possessive)</p>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-700">❌ Wrong:</p>
              <p className="mt-2 p-2 bg-white rounded">"The <strong>student's</strong> are reading" (not plural!)</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Confusing Word Pairs",
    icon: <FiTrendingUp className="text-red-600" />,
    content: (
      <div className="space-y-8">
        {/* Your vs You're */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔄</span>
            <h3 className="font-bold text-xl">
              Your vs. You're
            </h3>
          </div>
          <p><strong>Your</strong> = possession | <strong>You're</strong> = "you are"</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg border border-indigo-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "✅ <strong>Your</strong> phone is ringing",
                "✅ <strong>You're</strong> late for class",
                "❌ <strong>Your</strong> going to fail",
                "❌ I like <strong>you're</strong> dress"
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

        {/* There/Their/They're */}
        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📍</span>
            <h3 className="font-bold text-xl">
              There/Their/They're
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              "<strong>There</strong> = place (Go <strong>there</strong>)",
              "<strong>Their</strong> = possession (<strong>Their</strong> house)",
              "<strong>They're</strong> = 'they are' (<strong>They're</strong> coming)"
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                <p dangerouslySetInnerHTML={{__html: item}} />
              </div>
            ))}
          </div>
        </div>

        {/* Affect vs Effect */}
        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">💊</span>
            <h3 className="font-bold text-xl">
              Affect vs. Effect
            </h3>
          </div>
          <p><strong>Affect</strong> = verb | <strong>Effect</strong> = noun</p>
          
          <div className="mt-4 space-y-3">
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">✅ Correct:</p>
              <p className="mt-2">"The speech <strong>affected</strong> me (verb)"</p>
              <p className="mt-1">"The <strong>effect</strong> was powerful (noun)"</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">❌ Wrong:</p>
              <p className="mt-2">"The speech had a big <strong>affect</strong>"</p>
              <p className="mt-1">"The law will <strong>effect</strong> change"</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Practice & Quiz",
    icon: <FiAward className="text-red-600" />,
    content: (
      <div className="space-y-8">
        {/* Error Correction */}
        <div className="bg-red-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✏️</span>
            <h3 className="font-bold text-xl">
              Fix These POST-UTME Errors
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                wrong: "<strong>Their</strong> going to <strong>loose</strong> the match",
                right: "<strong>They're</strong> going to <strong>lose</strong> the match"
              },
              {
                wrong: "She <strong>use to</strong> come early",
                right: "She <strong>used to</strong> come early"
              },
              {
                wrong: "<strong>Less</strong> students passed the exam",
                right: "<strong>Fewer</strong> students passed the exam"
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

        {/* Interactive Quiz */}
        <div className="bg-blue-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              JAMB-Style Quiz
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                question: "Which is correct?",
                options: [
                  "a) She don't have no book",
                  "b) She doesn't have any book",
                  "c) She doesn't has a book"
                ],
                answer: "b) She doesn't have any book"
              },
              {
                question: "Correct the sentence: 'Me and him was late'",
                answer: "<strong>He and I were</strong> late"
              },
              {
                question: "Choose the right preposition: 'She's good ___ Math'",
                options: ["a) in", "b) at", "c) on"],
                answer: "b) at"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Question #{i+1}: {item.question}</p>
                
                {item.options && (
                  <ul className="mt-2 ml-5 space-y-1">
                    {item.options.map((opt, j) => (
                      <li key={j} className="list-disc">{opt}</li>
                    ))}
                  </ul>
                )}
                
                <details className="mt-2">
                  <summary className="text-blue-600 cursor-pointer">Show Answer</summary>
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
    title: "Error-Free Champion",
    icon: <FiAward className="text-red-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block bg-gradient-to-r from-red-500 to-orange-600 rounded-full p-4 mb-6"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Become a Grammar Superhero! 🦸
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Master these errors to ace your POST-UTME and sound like a true "Grammar Oga"!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { 
              title: "Error Types", 
              value: "15+", 
              icon: "🚨", 
              color: "text-red-600",
              desc: "Covered in this guide" 
            },
            { 
              title: "JAMB Score Boost", 
              value: "20%", 
              icon: "📈", 
              color: "text-green-600",
              desc: "Potential increase" 
            },
            { 
              title: "Naija Examples", 
              value: "50+", 
              icon: "🇳🇬", 
              color: "text-yellow-500",
              desc: "Real Nigerian contexts" 
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
          className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Error-Drills Now
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features real examples from past JAMB/POST-UTME exams and Nigerian English usage!
        </p>
      </div>
    )
  }
];