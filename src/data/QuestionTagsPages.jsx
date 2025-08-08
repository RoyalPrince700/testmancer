// src/pages/subject/questiontag/QuestionTagPage.jsx
import {
  FiHelpCircle,
  FiCheck,
  FiX,
  FiAward,
  FiVolume2,
  FiTrendingUp,
  FiCode,
  FiList,
  FiEdit,
  FiUser
} from "react-icons/fi";
import { motion } from "framer-motion";

export const QuestionTagPages = [
  {
    title: "❓ Question Tags: The Nigerian Conversation Hack!",
    icon: <FiHelpCircle className="text-green-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Question tags are like <span className="font-bold text-green-700">spices in Nigerian stew</span> - 
          they turn plain statements into interactive conversations! 🇳🇬 Many Naija speakers struggle with 
          <span className="font-bold"> "isn't it?"</span> when it should be <span className="font-bold">"doesn't she?"</span> 😅
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"You like am, isn't it?"</span> → 
            <span className="font-bold">✅ "You like it, don't you?"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            { icon: "🔄", name: "Positive → Negative", symbol: "is → isn't", desc: "It's hot, isn't it?" },
            { icon: "🔀", name: "Negative → Positive", symbol: "aren't → are", desc: "You aren't tired, are you?" },
            { icon: "👑", name: "Special Case", symbol: "I am → aren't I", desc: "I'm late, aren't I?" }
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
        
        <div className="mt-8 bg-green-50 p-4 rounded-xl">
          <p className="font-medium text-green-700 flex items-center gap-2">
            <FiAward className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Think of tags like <span className="font-bold">Nigerian head nods</span> - 
            👆 "Abi?" for confirmation, 🤔 "I no lie?" for checking, and 🙆 "Okay?" for agreement!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Basic Tag Rules",
    icon: <FiCheck className="text-green-600" />,
    content: (
      <div className="space-y-8">
        {/* Positive/Negative */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔄</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiVolume2 />
              Positive → Negative
            </h3>
          </div>
          <p>Positive statements get negative tags (and vice versa)</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Correct:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "You <strong>are</strong> Nigerian, <strong>aren't</strong> you? 🇳🇬",
                  "She <strong>likes</strong> plantain, <strong>doesn't</strong> she? 🍌",
                  "They <strong>went</strong> home, <strong>didn't</strong> they? 🏠"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" dangerouslySetInnerHTML={{__html: item}} />
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="font-medium text-red-700">❌ Wrong:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "You are Nigerian, <strong>are</strong> you?",
                  "She likes plantain, <strong>likesn't</strong> she?",
                  "They went home, <strong>wentn't</strong> they?"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" dangerouslySetInnerHTML={{__html: item}} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Auxiliary Verbs */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔧</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiCode />
              Matching Auxiliary Verbs
            </h3>
          </div>
          <p>The tag must match the statement's helping verb</p>
          
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-medium text-blue-700">Verb Guide:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { verb: "is/are", tag: "isn't/aren't", example: "She <strong>is</strong> coming, <strong>isn't</strong> she? 👀" },
                { verb: "will", tag: "won't", example: "You <strong>will</strong> go, <strong>won't</strong> you? ✈️" },
                { verb: "no auxiliary", tag: "do/does/did", example: "They <strong>eat</strong> rice, <strong>don't</strong> they? 🍚" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded shadow-xs">
                  <p className="font-bold text-sm">{item.verb} → {item.tag}</p>
                  <p className="text-xs mt-1" dangerouslySetInnerHTML={{__html: item.example}} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Cases */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">👑</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiUser />
              Special Cases
            </h3>
          </div>
          <p>Some tags don't follow the normal rules!</p>
          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-purple-50 p-3 rounded-lg">
              <p className="font-medium text-purple-700">✅ Correct:</p>
              <p className="mt-2 p-2 bg-white rounded">"I <strong>am</strong> late, <strong>aren't</strong> I? ⏰ (Not 'amn't I')"</p>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-700">🚫 Wrong:</p>
              <p className="mt-2 p-2 bg-white rounded">"I am late, <strong>amn't</strong> I?"</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Advanced Tag Usage",
    icon: <FiTrendingUp className="text-green-600" />,
    content: (
      <div className="space-y-8">
        {/* Commands */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">👮‍♂️</span>
            <h3 className="font-bold text-xl">
              Commands & Suggestions
            </h3>
          </div>
          <p>Imperatives use special tags for politeness or emphasis</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg border border-indigo-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Close the door, <strong>will you?</strong> 🚪",
                "Let's go to the market, <strong>shall we?</strong> 🛒",
                "Don't shout, <strong>will you?</strong> 🔇"
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

        {/* Indefinite Pronouns */}
        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">👥</span>
            <h3 className="font-bold text-xl">
              Indefinite Pronouns
            </h3>
          </div>
          <p>Words like "somebody", "nobody" use "they" in tags</p>
          
          <div className="mt-4 space-y-4">
            {[
              "Nobody came, <strong>did they?</strong> 🕳️",
              "Somebody stole my phone, <strong>didn't they?</strong> 📱",
              "Everybody loves jollof, <strong>don't they?</strong> 🍛"
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                <p dangerouslySetInnerHTML={{__html: item}} />
              </div>
            ))}
          </div>
        </div>

        {/* Sarcastic Tags */}
        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">😏</span>
            <h3 className="font-bold text-xl">
              Sarcastic Tags
            </h3>
          </div>
          <p>When you're not really asking - you're making a point!</p>
          
          <div className="mt-4 space-y-3">
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Nigerian Examples:</p>
              <p className="mt-2">"Oh, you're the smart one, <strong>aren't you?</strong> 🤓 (eyeroll)"</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">More Sarcasm:</p>
              <p className="mt-2">"So you failed again, <strong>did you?</strong> 😒"</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Practice & Quiz",
    icon: <FiAward className="text-green-600" />,
    content: (
      <div className="space-y-8">
        {/* Error Correction */}
        <div className="bg-red-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✏️</span>
            <h3 className="font-bold text-xl">
              Fix These Naija Tag Errors
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                wrong: "You like am, <strong>isn't it?</strong>",
                right: "You like it, <strong>don't you?</strong>"
              },
              {
                wrong: "I'm your best friend, <strong>amn't I?</strong>",
                right: "I'm your best friend, <strong>aren't I?</strong>"
              },
              {
                wrong: "Make you no vex, <strong>is it?</strong>",
                right: "Don't be angry, <strong>will you?</strong>"
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
              Tag Master Quiz
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                question: "Complete: 'She sings well, ___?'",
                options: ["a) isn't she", "b) doesn't she", "c) singsn't she"],
                answer: "b) doesn't she"
              },
              {
                question: "Which tag fits? 'Let's go to the beach, ___?'",
                answer: "<strong>shall we</strong>"
              },
              {
                question: "Correct the error: 'Nobody came, came they?'",
                answer: "Nobody came, <strong>did they?</strong>"
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
    title: "Tag Champion",
    icon: <FiAward className="text-green-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 mb-6"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          You're Now a Tag Master, Abi? 😎
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Use these tags to sound more natural in English conversations and ace your exams!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { 
              title: "Tag Types", 
              value: "10+", 
              icon: "🏷️", 
              color: "text-green-600",
              desc: "Learned in this guide" 
            },
            { 
              title: "Conversation Boost", 
              value: "50%", 
              icon: "💬", 
              color: "text-blue-500",
              desc: "More natural chats" 
            },
            { 
              title: "Naija Examples", 
              value: "30+", 
              icon: "🇳🇬", 
              color: "text-yellow-500",
              desc: "Local context included" 
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
          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Tagging Like a Pro
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Now you'll never say "isn't it?" when you mean "don't you?" - no be so?
        </p>
      </div>
    )
  }
];