// src/pages/subject/sentence-types/SentenceTypePage.js
import { 
  FiBook,
  FiAlertTriangle,
  FiLink,
  FiCode,
  FiList,
  FiAward,
  FiCheck,
  FiZap
} from "react-icons/fi";
import { motion } from "framer-motion";

export const SentenceTypePages = [
  {
    title: "Sentence Structures Explained Like Jollof Rice!",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Sentences are like Nigerian meals - some simple (bread & tea), some complex (birthday jollof with all the sides)! 
          Learn 4 main types:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {[
            { 
              title: "Simple", 
              desc: "One complete thought", 
              icon: "🍞", 
              color: "bg-green-100 text-green-700",
              example: "Goats bleat."
            },
            { 
              title: "Compound", 
              desc: "FANBOYS join clauses", 
              icon: "🥘", 
              color: "bg-blue-100 text-blue-700",
              example: "It rained, so the match was cancelled."
            },
            { 
              title: "Complex", 
              desc: "Boss + Assistant clauses", 
              icon: "🍛", 
              color: "bg-purple-100 text-purple-700",
              example: "If you save, you'll buy a phone."
            },
            { 
              title: "Compound-Complex", 
              desc: "Big boy sentences!", 
              icon: "🎂", 
              color: "bg-yellow-100 text-yellow-700",
              example: "Bola cooked jollof, and we cheered because it was sweet."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${item.color} p-4 rounded-xl`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">{item.icon}</div>
                <h3 className="font-bold">{item.title}</h3>
              </div>
              <p className="text-sm mb-2">{item.desc}</p>
              <p className="text-xs bg-white/30 px-2 py-1 rounded">{item.example}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiZap className="text-yellow-500" />
            Naija Pro Tip:
          </p>
          <p className="mt-2">
            Look for <span className="font-bold">FANBOYS</span> (for, and, nor, but, or, yet, so) in compound sentences - 
            they're like the seasoning in your stew!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Simple & Compound Sentences",
    icon: <FiLink className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Simple Sentences */}
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Simple Sentences: One-Pot Meal
          </h3>
          <p>
            Just <span className="font-bold">ONE subject + ONE predicate</span>. Short and clear like "Indomie don done!"
          </p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Correct Examples:</p>
            <ul className="mt-2 space-y-2">
              {[
                "The generator exploded.",
                "Students protested.",
                "Mama put cooked rice."
              ].map((example, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compound Sentences */}
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiLink />
            Compound Sentences: FANBOYS Party
          </h3>
          <p>
            Join two simple sentences with <span className="font-bold">, + FANBOYS</span> (For, And, Nor, But, Or, Yet, So)
          </p>
          
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-medium text-blue-700">Structure:</p>
            <p className="mt-2 font-mono bg-white p-2 rounded">
              [Simple sentence]<span className="text-red-500">,</span> <span className="font-bold text-purple-600">[FANBOYS]</span> [Simple sentence]
            </p>
            
            <p className="font-medium text-blue-700 mt-4">Examples:</p>
            <ul className="mt-2 space-y-2">
              {[
                "Fuel prices increased, so drivers protested.",
                "I wanted puff-puff, but the seller had finished.",
                "Study hard, or you'll repeat the class."
              ].map((example, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FiCheck className="text-blue-500 mt-1 flex-shrink-0" />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Common Errors */}
        <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="font-medium text-red-700 flex items-center gap-2">
            <FiAlertTriangle />
            Common Nigerian Errors:
          </p>
          <ul className="mt-2 space-y-2">
            {[
              "❌ I like rice and beans is sweet. (Two predicates)",
              "❌ The rain fell we ran inside. (Missing FANBOYS)",
              "✅ Fix: The rain fell, so we ran inside."
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Complex Sentences",
    icon: <FiCode className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiCode />
            Complex Sentences: Boss + Assistant
          </h3>
          <p>
            <span className="font-bold">1 Independent Clause (boss)</span> + 
            <span className="font-bold"> 1 Dependent Clause (assistant)</span> starting with <em>because, if, when, although</em>, etc.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Structure */}
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">Structure:</p>
              <div className="space-y-2">
                <p className="bg-white p-2 rounded text-sm">
                  <span className="font-bold">[Dependent Clause]</span>, [Independent Clause]
                </p>
                <p className="text-xs text-gray-600">OR</p>
                <p className="bg-white p-2 rounded text-sm">
                  [Independent Clause] <span className="font-bold">[Dependent Clause]</span>
                </p>
              </div>
            </div>
            
            {/* Examples */}
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold text-green-700 mb-2">Examples:</p>
              <ul className="space-y-2">
                {[
                  "When NEPA took light, we brought out candles.",
                  "I'll call you if my phone has credit.",
                  "Although Lagos is expensive, people still hustle there."
                ].map((ex, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Clause Identification */}
        <div className="mt-8">
          <h4 className="font-bold text-lg flex items-center gap-2 mb-3">
            <FiList />
            Spot the Clause Type:
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                text: "Because the road was bad",
                type: "Dependent (can't stand alone)",
                hint: "Starts with 'Because'"
              },
              {
                text: "The bus arrived late",
                type: "Independent (complete thought)",
                hint: "Has subject + verb"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
              >
                <p className="font-medium">{item.text}</p>
                <p className="text-sm text-gray-600 mt-1">{item.type}</p>
                <p className="text-xs text-indigo-600 mt-1">{item.hint}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Compound-Complex & Common Errors",
    icon: <FiAlertTriangle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Compound-Complex */}
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiCode />
            Compound-Complex: The "Big Boy" Sentences
          </h3>
          <p>
            <span className="font-bold">2+ Independent Clauses</span> + 
            <span className="font-bold"> 1+ Dependent Clauses</span> - Like jollof rice with chicken, salad, and fried plantain!
          </p>
          
          <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="font-medium text-yellow-700">Examples:</p>
            <ul className="mt-2 space-y-3">
              {[
                "The strike ended; businesses reopened when unions agreed.",
                "If you save money, you can buy a phone, and your mates will envy you.",
                "Bola cooked jollof rice, and everyone cheered because it was delicious."
              ].map((ex, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="bg-yellow-100 text-yellow-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    {i+1}
                  </div>
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Fragments & Run-ons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Fragments */}
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold text-red-700 flex items-center gap-2 mb-2">
              <FiAlertTriangle />
              Fragment Errors
            </h4>
            <p className="text-sm">Incomplete thoughts pretending to be sentences:</p>
            <ul className="mt-3 space-y-2">
              {[
                "❌ Running late to church. (Missing subject)",
                "❌ Since last Tuesday. (No complete thought)",
                "✅ Fix: We're running late to church."
              ].map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Run-ons */}
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-bold text-orange-700 flex items-center gap-2 mb-2">
              <FiAlertTriangle />
              Run-on Sentences
            </h4>
            <p className="text-sm">Two sentences crashing without proper joining:</p>
            <ul className="mt-3 space-y-2">
              {[
                "❌ I read books she watches films. (No conjunction)",
                "❌ The food was hot we waited. (Missing comma + FANBOYS)",
                "✅ Fix: The food was hot, so we waited."
              ].map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Quick Quiz */}
        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiZap className="text-yellow-500" />
            Quick Quiz:
          </p>
          <p className="mt-2">
            Identify this sentence type: <span className="font-bold">"Although it rained, we went out, and we had fun."</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-3">
            {["Simple", "Compound", "Complex", "Compound-Complex"].map((opt, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-3 py-2 rounded-lg border border-indigo-200 text-sm"
              >
                {opt}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Mastery Challenge",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-green-500 to-green-700 rounded-full p-4 mb-6">
          <FiAward className="text-white text-4xl" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Prove Your Sentence Structure Skills!
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Can you identify all sentence types? Earn the "Grammar Oga" badge!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { title: "Question Types", value: "Identify & Fix", icon: <FiBook />, color: "text-green-600" },
            { title: "Levels", value: "Beginner to Pro", icon: <FiCode />, color: "text-blue-500" },
            { title: "Bonus", value: "Nigerian Examples", icon: <FiAward />, color: "text-yellow-500" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className={`text-3xl mb-3 ${item.color}`}>{item.icon}</div>
              <h3 className="font-bold text-gray-900 text-xl">{item.value}</h3>
              <p className="text-gray-600">{item.title}</p>
            </motion.div>
          ))}
        </div>
        
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all">
          Start Challenge Now
        </button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features real Naija examples like "NEPA took light" and "Mama put don close!"
        </p>
      </div>
    )
  }
];