// src/pages/subject/adverbialAdjectival/AdverbialAdjectivalPages.jsx
import {
  FiAlertCircle,
  FiList,
  FiHelpCircle,
  FiCode,
  FiLink,
  FiEdit,
  FiMessageSquare,
  FiMinus,
  FiShuffle,
  FiMoreHorizontal,
  FiAward
} from "react-icons/fi";
import { motion } from "framer-motion";

export const AdverbialAdjectivalPages = [
  {
    title: "🔠 Word Order: The Grammar Positioning System!",
    icon: <FiShuffle className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Arranging adjectives and adverbs is like <span className="font-bold text-indigo-700">organizing your pot of soup</span> - 
          ingredients must go in the right order! Nigerian speakers often mix these up, creating "grammar pepper soup" 🍲
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"I want big red a car"</span> → 
            <span className="font-bold">✅ "I want a big red car"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { icon: "👕", name: "Opinion", example: "Beautiful", desc: "What you think" },
            { icon: "📏", name: "Size", example: "Small", desc: "How big" },
            { icon: "🎨", name: "Color", example: "Blue", desc: "What shade" },
            { icon: "📍", name: "Origin", example: "Nigerian", desc: "Where from" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm">{item.example}</p>
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
            Remember adjective order like <span className="font-bold">"OSAShCOMP"</span>: 
            Opinion-Size-Age-Shape-Color-Origin-Material-Purpose. Just like arranging your Nigerian outfit - 
            first jewelry (opinion), then wrapper size, color, and finally gele (purpose)!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Adjective Order Rules",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Opinion */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">👀</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiEdit />
              Opinion Adjectives - First Position
            </h3>
          </div>
          <p>These express what you think about something. They always come first.</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Correct Order:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "A <span class='font-bold text-green-600'>lovely</span> small garden",
                  "An <span class='font-bold text-green-600'>ugly</span> old building",
                  "The <span class='font-bold text-green-600'>delicious</span> hot soup"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" dangerouslySetInnerHTML={{__html: item}}></li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="font-medium text-red-700">❌ Nigerian Errors:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "A small <span class='line-through'>lovely</span> garden",
                  "An old <span class='line-through'>ugly</span> building",
                  "The hot <span class='line-through'>delicious</span> soup"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2" dangerouslySetInnerHTML={{__html: item}}></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Size and Age */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📏</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiMinus />
              Size & Age - The Measurement Duo
            </h3>
          </div>
          <p>Size comes before age, just like you'd describe a person's height before their age!</p>
          
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-medium text-blue-700">Correct Sequence:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { example: "Big old tree", rule: "Size → Age" },
                { example: "Tiny new phone", rule: "Size → Age" },
                { example: "Huge ancient pyramid", rule: "Size → Age" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded shadow-xs">
                  <p className="font-bold text-sm">{item.rule}</p>
                  <p className="text-xs mt-1">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Color, Origin, Material */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🎨</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiCode />
              Color → Origin → Material
            </h3>
          </div>
          <p>The "COM" rule for remembering what comes after size and age.</p>
          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-purple-50 p-3 rounded-lg">
              <p className="font-medium text-purple-700">✅ Correct:</p>
              <div className="mt-2 p-2 bg-white rounded">
                <p>A <span className="font-bold">red</span> <span className="font-bold">Nigerian</span> <span className="font-bold">leather</span> bag</p>
                <p className="text-xs text-gray-500 mt-1">(Color → Origin → Material)</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-700">🚫 Wrong Order:</p>
              <div className="mt-2 p-2 bg-white rounded">
                <p>A <span className="line-through">leather</span> <span className="line-through">Nigerian</span> <span className="line-through">red</span> bag</p>
                <p className="text-xs text-gray-500 mt-1">(Material → Origin → Color)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Purpose */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🎯</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiHelpCircle />
              Purpose - Always Last
            </h3>
          </div>
          <p>Purpose adjectives (usually ending with -ing) come at the end, like the final touch to your outfit.</p>
          
          <div className="mt-4 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
            <p className="font-bold text-green-700">Examples:</p>
            <ul className="mt-3 space-y-3">
              {[
                { item: "A <span class='font-bold'>sleeping</span> bag", desc: "Purpose: for sleeping" },
                { item: "<span class='font-bold'>Running</span> shoes", desc: "Purpose: for running" },
                { item: "A <span class='font-bold'>frying</span> pan", desc: "Purpose: for frying" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-xl">🔹</span>
                  <div dangerouslySetInnerHTML={{__html: `<p class="font-medium">${item.item}</p><p class="text-xs text-gray-600">${item.desc}</p>`}}></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Adverb Order Rules",
    icon: <FiCode className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Manner, Place, Time */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔄</span>
            <h3 className="font-bold text-xl">
              MPT Rule: Manner → Place → Time
            </h3>
          </div>
          <p>Adverbs follow "MPT" order - How? Where? When? Like describing a journey.</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg border border-indigo-200">
            <p className="font-mono text-center">
              [Subject] [verb] <span className="text-purple-600 font-bold">manner</span>, <span className="text-purple-600 font-bold">place</span>, <span className="text-purple-600 font-bold">time</span>
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "She sang <span class='font-bold'>beautifully</span> <span class='font-bold'>at the party</span> <span class='font-bold'>last night</span>",
                "We drove <span class='font-bold'>quickly</span> <span class='font-bold'>to Lagos</span> <span class='font-bold'>yesterday</span>"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-indigo-100 p-3 rounded-lg"
                  dangerouslySetInnerHTML={{__html: item}}
                ></motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Frequency */}
        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⏱️</span>
            <h3 className="font-bold text-xl">
              Frequency Adverbs - Mid Position
            </h3>
          </div>
          <p>Words like always, never, often go before main verbs but after 'be' verbs.</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                type: "With normal verbs",
                example: "She <span class='font-bold'>always cooks</span> jollof rice"
              },
              {
                type: "With 'be' verbs",
                example: "He <span class='font-bold'>is never</span> late"
              },
              {
                type: "Nigerian Error",
                example: "<span class='line-through'>He never is late</span>"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                <p className="font-medium text-green-700">{item.type}:</p>
                <p className="mt-1" dangerouslySetInnerHTML={{__html: item.example}}></p>
              </div>
            ))}
          </div>
        </div>

        {/* Degree Adverbs */}
        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📊</span>
            <h3 className="font-bold text-xl">
              Degree Adverbs - Right Before!
            </h3>
          </div>
          <p>Very, really, extremely go immediately before the words they modify.</p>
          
          <div className="mt-4 space-y-3">
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Correct Placement:</p>
              <p className="mt-2 font-mono">The soup is <span className="text-red-500 font-bold">very</span> hot</p>
              <p className="mt-2 font-mono">She's <span className="text-red-500 font-bold">extremely</span> beautiful</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-700">Nigerian Errors:</p>
              <p className="mt-2"><span className="line-through">Very the soup is hot</span></p>
              <p className="mt-2"><span className="line-through">She beautiful is extremely</span></p>
            </div>
          </div>
        </div>

        {/* Focus Adverbs */}
        <div className="bg-red-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔍</span>
            <h3 className="font-bold text-xl">
              Focus Adverbs - Flexible Position
            </h3>
          </div>
          <p>Only, just, even can move around to change emphasis.</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg border border-red-200">
              <p className="font-medium text-red-700">Different Positions:</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li><span class="font-bold">Only</span> I ate rice (no one else)</li>
                <li>I <span class="font-bold">only</span> ate rice (nothing else)</li>
                <li>I ate <span class="font-bold">only</span> rice (not other foods)</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg border border-red-200">
              <p className="font-medium text-red-700">Nigerian Confusion:</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li><span class="line-through">I only rice ate</span></li>
                <li><span class="line-through">Rice only I ate</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Common Nigerian Errors",
    icon: <FiAlertCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Adjective Order Errors */}
        <div className="bg-red-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🚨</span>
            <h3 className="font-bold text-xl">
              Adjective Order Crimes
            </h3>
          </div>
          <p>Nigerians often mix up adjective order due to direct translation from local languages.</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg">
            <p className="font-medium text-red-700">❌ Error Samples:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { error: "Yoruba beautiful a girl", correct: "A beautiful Yoruba girl" },
                { error: "Plastic big blue a chair", correct: "A big blue plastic chair" },
                { error: "Eating small a bowl", correct: "A small eating bowl" }
              ].map((item, i) => (
                <div key={i} className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-xs text-red-700">Error: {item.error}</p>
                  <p className="text-xs mt-1 text-green-700">Correct: {item.correct}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Adverb Placement Errors */}
        <div className="bg-purple-100 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔀</span>
            <h3 className="font-bold text-xl">
              Adverb Placement Mix-ups
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                error: "I yesterday went to market",
                correct: "I went to market yesterday",
                reason: "Time adverbs usually go last"
              },
              {
                error: "She very is beautiful",
                correct: "She is very beautiful",
                reason: "Degree adverbs before adjectives"
              },
              {
                error: "He runs fast very",
                correct: "He runs very fast",
                reason: "Very modifies fast, so must come before it"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-3 rounded-lg border border-purple-200"
              >
                <div className="flex gap-4">
                  <div className="text-red-500 font-bold">❌ {item.error}</div>
                  <div className="text-green-500 font-bold">✅ {item.correct}</div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Reason: {item.reason}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Order Quiz */}
        <div className="bg-blue-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              Word Order Challenge
            </h3>
          </div>
          <p>Rearrange these common Nigerian errors:</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                question: "bought I a leather Italian beautiful bag",
                answer: "I bought a beautiful Italian leather bag"
              },
              {
                question: "she in sings beautifully church always",
                answer: "She always sings beautifully in church"
              },
              {
                question: "we ate plate a rice steaming of hot",
                answer: "We ate a plate of hot steaming rice"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Jumbled #{i+1}:</p>
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
    title: "Order Mastery",
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
          Master Word Order Like a Grammar Chef! 👨‍🍳
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Take our post-UTME word arrangement challenge to cook perfect sentences!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { 
              title: "Adjective Types", 
              value: "8", 
              icon: "🔤", 
              color: "text-purple-600",
              desc: "Opinion to purpose" 
            },
            { 
              title: "Adverb Rules", 
              value: "5", 
              icon: "🔄", 
              color: "text-yellow-500",
              desc: "MPT and more" 
            },
            { 
              title: "Nigerian Examples", 
              value: "50+", 
              icon: "🇳🇬", 
              color: "text-green-600",
              desc: "Market, school, home" 
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
        
        <div className="bg-indigo-50 p-6 rounded-xl max-w-3xl mx-auto text-left mb-8">
          <h3 className="font-bold text-xl mb-4">🎯 Post-UTME Test Focus Areas:</h3>
          <ul className="space-y-3">
            {[
              "Sentence rearrangement questions",
              "Error spotting in adjective/adverb order",
              "Correct positioning of frequency adverbs",
              "Choosing the best ordered phrase"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="bg-indigo-600 text-white rounded-full p-1">
                  <FiList className="text-xs" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Arrangement Drill
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Includes past questions from UNILAG, UI, FUTA and other top Nigerian universities!
        </p>
      </div>
    )
  }
];