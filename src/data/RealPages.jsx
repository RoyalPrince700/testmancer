// src/pages/subject/realfuture/RealFuturePage.jsx
import {
  FiClock,
  FiCalendar,
  FiCheckCircle,
  FiAlertTriangle,
  FiAward,
  FiHelpCircle,
  FiTrendingUp,
  FiCode,
  FiList,
  FiEye,
  FiGlobe
} from "react-icons/fi";
import { motion } from "framer-motion";

export const RealFuturePages = [
  {
    title: "⏳ Real vs. Unreal Future: Time Travel Grammar!",
    icon: <FiClock className="text-blue-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Talking about the future is like <span className="font-bold text-blue-700">predicting the weather</span> - 
          sometimes it's certain (🌞 real future), sometimes imaginary (🌈 unreal future). Nigerian students often mix these in <span className="font-bold">JAMB essays</span>!
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"If I will see him, I will tell him"</span> → 
            <span className="font-bold">✅ "If I see him, I will tell him"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            { icon: "🔄", name: "Real Future", symbol: "will", desc: "Certain plans" },
            { icon: "🎭", name: "Unreal Future", symbol: "would", desc: "Hypotheticals" },
            { icon: "⚖️", name: "Difference", symbol: "if", desc: "Conditionals" }
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
        
        <div className="mt-8 bg-blue-50 p-4 rounded-xl">
          <p className="font-medium text-blue-700 flex items-center gap-2">
            <FiAward className="text-yellow-500" />
            JAMB Pro Tip:
          </p>
          <p className="mt-2">
            Conditionals are <span className="font-bold">frequently tested</span> - 
            🌟 remember: <em>"will"</em> for real future, <em>"would"</em> for dreams, and ❌ never "will" after "if"!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Real Future Forms",
    icon: <FiCalendar className="text-blue-600" />,
    content: (
      <div className="space-y-8">
        {/* Simple Future */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🚀</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiCheckCircle />
              Simple Future (Will/Shall)
            </h3>
          </div>
          <p>For <strong>certain plans, promises, or predictions</strong></p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Correct:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "I <strong>will pass</strong> POST-UTME! (Promise)",
                  "We <strong>shall discuss</strong> it tomorrow (Formal)",
                  "The sun <strong>will rise</strong> at 6:30 AM (Fact)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" dangerouslySetInnerHTML={{__html: item}} />
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="font-medium text-red-700">❌ Nigerian Errors:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "I <strong>will be going</strong> to UNILAG (Should be present continuous)",
                  "We <strong>shall to</strong> meet soon (Extra 'to')",
                  "You <strong>will can</strong> do it (Double modal)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" dangerouslySetInnerHTML={{__html: item}} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Going To */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📝</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiList />
              Going To (Planned Future)
            </h3>
          </div>
          <p>For <strong>pre-arranged plans or evidence-based predictions</strong></p>
          
          <div className="mt-4 bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <p className="font-medium text-purple-700">When to Use:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              {[
                { type: "Plans", example: "I <strong>am going to study</strong> medicine" },
                { type: "Evidence", example: "Look! It <strong>is going to rain</strong>" },
                { type: "Intentions", example: "She <strong>is going to start</strong> a business" },
                { type: "Avoid", example: "❌ Not for spontaneous decisions" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded shadow-xs">
                  <p className="font-bold text-sm">{item.type}</p>
                  <p className="text-xs mt-1" dangerouslySetInnerHTML={{__html: item.example}} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Present Continuous */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🗓️</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiEye />
              Present Continuous for Future
            </h3>
          </div>
          <p>For <strong>fixed arrangements with specific times</strong></p>
          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-blue-50 p-3 rounded-lg">
              <p className="font-medium text-blue-700">✅ Correct:</p>
              <p className="mt-2 p-2 bg-white rounded">"I <strong>am meeting</strong> the VC at 3 PM (Scheduled)"</p>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-700">🚫 Wrong Usage:</p>
              <p className="mt-2 p-2 bg-white rounded">"I <strong>am going to meet</strong> the VC at 3 PM (Should be present continuous)"</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Unreal Future Forms",
    icon: <FiGlobe className="text-blue-600" />,
    content: (
      <div className="space-y-8">
        {/* Second Conditional */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🎭</span>
            <h3 className="font-bold text-xl">
              Second Conditional (Would)
            </h3>
          </div>
          <p>For <strong>imaginary/unlikely present/future situations</strong></p>
          
          <div className="mt-4 bg-white p-4 rounded-lg border border-indigo-200">
            <p className="font-mono text-center mb-3">
              If + <span className="text-purple-600">past simple</span>, would + <span className="text-purple-600">base verb</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "If I <strong>had</strong> money, I <strong>would buy</strong> a car",
                "She <strong>would travel</strong> if she <strong>got</strong> a visa",
                "If Nigerians <strong>spoke</strong> Latin, we <strong>would be</strong> unique!"
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

        {/* Third Conditional */}
        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🕰️</span>
            <h3 className="font-bold text-xl">
              Third Conditional (Past Unreal)
            </h3>
          </div>
          <p>For <strong>imaginary past situations with present consequences</strong></p>
          
          <div className="mt-4 space-y-4">
            {[
              "If you <strong>had studied</strong>, you <strong>would have passed</strong>",
              "She <strong>would have called</strong> if she <strong>had known</strong>",
              "We <strong>would have traveled</strong> if it <strong>had been</strong> safe"
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                <p dangerouslySetInnerHTML={{__html: item}} />
              </div>
            ))}
          </div>
        </div>

        {/* Mixed Conditionals */}
        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔄</span>
            <h3 className="font-bold text-xl">
              Mixed Conditionals
            </h3>
          </div>
          <p>When <strong>time frames mix</strong> (past condition + present result or vice versa)</p>
          
          <div className="mt-4 space-y-3">
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Past → Present:</p>
              <p className="mt-2">"If I <strong>had saved</strong> money (past), I <strong>would own</strong> a house now (present)"</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Present → Past:</p>
              <p className="mt-2">"If she <strong>were</strong> taller (present), she <strong>would have joined</strong> the team (past)"</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Practice & Quiz",
    icon: <FiAward className="text-blue-600" />,
    content: (
      <div className="space-y-8">
        {/* Error Correction */}
        <div className="bg-red-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✏️</span>
            <h3 className="font-bold text-xl">
              Fix These JAMB Errors
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                wrong: "If I <strong>will see</strong> him, I <strong>will tell</strong> him",
                right: "If I <strong>see</strong> him, I <strong>will tell</strong> him"
              },
              {
                wrong: "She <strong>would has</strong> a car if she <strong>saved</strong> money",
                right: "She <strong>would have</strong> a car if she <strong>saved</strong> money"
              },
              {
                wrong: "We <strong>are going to attend</strong> the meeting at 3 PM (fixed time)",
                right: "We <strong>are attending</strong> the meeting at 3 PM"
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
              Future Tense Quiz
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                question: "Which is correct for a spontaneous decision?",
                options: [
                  "a) I'm going to help you",
                  "b) I'll help you",
                  "c) I'm helping you tomorrow"
                ],
                answer: "b) I'll help you"
              },
              {
                question: "Complete: 'If I ___ (be) president, I ___ (build) more schools'",
                answer: "<strong>were, would build</strong> (Unreal future)"
              },
              {
                question: "Choose the right form: 'By 2025, I ___ (graduate)'",
                options: ["a) will graduate", "b) will be graduating", "c) will have graduated"],
                answer: "c) will have graduated"
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
    title: "Future Tense Master",
    icon: <FiAward className="text-blue-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-4 mb-6"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Become a Future Tense Pro! 🔮
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Master real and unreal futures to ace your JAMB essays and sound like a grammar expert!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { 
              title: "Future Forms", 
              value: "6+", 
              icon: "⏳", 
              color: "text-blue-600",
              desc: "Covered in this guide" 
            },
            { 
              title: "JAMB Score Boost", 
              value: "25%", 
              icon: "📈", 
              color: "text-green-600",
              desc: "Potential increase" 
            },
            { 
              title: "Naija Examples", 
              value: "40+", 
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
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Future Tense Drills
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features real examples from past JAMB essays and Nigerian English usage!
        </p>
      </div>
    )
  }
];