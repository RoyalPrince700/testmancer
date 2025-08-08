// src/pages/subject/sentence/SentencePages.js
import { 
  FiBook, FiAward ,FiClock ,
  FiCheck, 
  FiX,
  FiAlertCircle,
  FiCode,
  FiList,
  FiType,
  FiMic,
  FiVolume2,
  FiLink2,
  FiDivideCircle,
  FiHash
} from "react-icons/fi";
import { motion } from "framer-motion";

export const SentencePages = [
  {
    title: "The Building Blocks of Language",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
          <FiType />
          What's a Sentence?
        </h2>
        
        <div className="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500">
          <p className="font-medium">
            A sentence is a complete thought with a <span className="font-bold text-indigo-700">subject</span> (who/what) 
            and a <span className="font-bold text-indigo-700">predicate</span> (action/state).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="font-bold text-green-700 flex items-center gap-2">
              <FiCheck />
              Good Examples:
            </h3>
            <ul className="mt-2 space-y-2">
              <li>"Birds <span className="font-bold">sing</span>."</li>
              <li>"Lagos <span className="font-bold">is busy</span>."</li>
              <li>"She <span className="font-bold">studies medicine</span>."</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-xl">
            <h3 className="font-bold text-red-700 flex items-center gap-2">
              <FiX />
              Fragments:
            </h3>
            <ul className="mt-2 space-y-2">
              <li>"Running down the street."</li>
              <li>"Because jamb result came out."</li>
              <li>"The tall man in Abuja."</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 p-4 rounded-xl">
          <p className="font-medium text-yellow-700 flex items-center gap-2">
            <FiAlertCircle />
            Nigerian English Tip:
          </p>
          <p className="mt-2">
            Many Nigerian students omit helping verbs (e.g., "She going to school" ❌). 
            Always include them: "She <span className="font-bold">is</span> going to school" ✔️
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Sentence",
    icon: <FiCode className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-indigo-700 flex items-center gap-2 mb-3">
            <FiDivideCircle />
            Subject + Predicate
          </h3>
          <p>The <span className="font-bold">subject</span> is the star; the <span className="font-bold">predicate</span> tells what the star does/is.</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { subject: "Chinedu", predicate: "plays football", color: "bg-purple-100" },
              { subject: "The moon", predicate: "shines brightly", color: "bg-blue-100" },
              { subject: "Jollof rice", predicate: "tastes delicious", color: "bg-orange-100" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${item.color} p-4 rounded-xl`}
              >
                <p className="font-bold">{item.subject}</p>
                <p>{item.predicate}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-indigo-700 flex items-center gap-2 mb-3">
            <FiList />
            Sentence Types
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                type: "Declarative", 
                desc: "States facts", 
                example: "It is raining.", 
                icon: <FiType className="text-green-500" /> 
              },
              { 
                type: "Interrogative", 
                desc: "Asks questions", 
                example: "Are you coming?", 
                icon: <FiMic className="text-blue-500" /> 
              },
              { 
                type: "Imperative", 
                desc: "Gives orders", 
                example: "Close the door.", 
                icon: <FiVolume2 className="text-yellow-500" /> 
              },
              { 
                type: "Exclamatory", 
                desc: "Shows emotion", 
                example: "Wow, we won!", 
                icon: <FiAlertCircle className="text-red-500" /> 
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-xl">{item.icon}</div>
                  <h4 className="font-bold">{item.type}</h4>
                </div>
                <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                <p className="font-medium">"{item.example}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Sentence Patterns",
    icon: <FiLink2 className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-indigo-700 flex items-center gap-2 mb-3">
            <FiHash />
            Simple Sentences
          </h3>
          <p>One subject + one predicate = one complete thought.</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>Goats eat grass.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>The car broke down.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>Fela Kuti composed music.</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-indigo-700 flex items-center gap-2 mb-3">
            <FiLink2 />
            Compound Sentences
          </h3>
          <p>Join two simple sentences with <span className="font-bold">FANBOYS</span> (For, And, Nor, But, Or, Yet, So).</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { conjunction: "and", example: "I love plantain, <strong>and</strong> she loves yam." },
              { conjunction: "but", example: "He ran fast, <strong>but</strong> he missed the bus." },
              { conjunction: "or", example: "Study hard, <strong>or</strong> you'll fail." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <p className="font-bold text-indigo-600">{item.conjunction}</p>
                <p dangerouslySetInnerHTML={{ __html: item.example }} className="mt-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Common Errors",
    icon: <FiAlertCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-indigo-700 flex items-center gap-2 mb-3">
            <FiX />
            Run-on Sentences
          </h3>
          <p>Two sentences glued without punctuation/FANBOYS = train wreck!</p>
          
          <div className="mt-6 space-y-4">
            {[
              { 
                bad: "I cook she cleans.", 
                good: "I cook, and she cleans.",
                fix: "Added comma + conjunction"
              },
              { 
                bad: "He sings well he dances badly.", 
                good: "He sings well, but he dances badly.",
                fix: "Added comma + contrast word"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <div className="text-red-500 mt-1">
                    <FiX />
                  </div>
                  <div>
                    <p className="font-medium text-red-600 line-through">{item.bad}</p>
                    <p className="text-sm text-gray-500 mt-1">Problem: Run-on sentence</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 mt-3 pt-3 border-t border-gray-100">
                  <div className="text-green-500 mt-1">
                    <FiCheck />
                  </div>
                  <div>
                    <p className="font-medium text-green-600">{item.good}</p>
                    <p className="text-sm text-gray-500 mt-1">Fix: {item.fix}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-indigo-700 flex items-center gap-2 mb-3">
            <FiAlertCircle />
            Subject-Verb Agreement
          </h3>
          <p>Singular subjects need singular verbs; plural subjects need plural verbs.</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl">
              <h4 className="font-bold text-green-700">Correct:</h4>
              <ul className="mt-2 space-y-2">
                <li>She <span className="font-bold">writes</span> letters.</li>
                <li>They <span className="font-bold">write</span> letters.</li>
                <li>The boy <span className="font-bold">runs</span> fast.</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-xl">
              <h4 className="font-bold text-red-700">Incorrect:</h4>
              <ul className="mt-2 space-y-2">
                <li>She <span className="line-through">write</span> letters. ❌</li>
                <li>They <span className="line-through">writes</span> letters. ❌</li>
                <li>The boy <span className="line-through">run</span> fast. ❌</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Ready to Master Sentences?",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full p-4 mb-6">
          <FiAward className="text-white text-4xl" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Test Your Sentence Skills!
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Take our 25-question quiz to master sentence structure and avoid common errors.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { title: "Question Types", value: "Identify & Fix", icon: <FiBook />, color: "text-indigo-600" },
            { title: "Common Errors", value: "10+ Covered", icon: <FiAlertCircle />, color: "text-red-500" },
            { title: "Time Limit", value: "12 min", icon: <FiClock />, color: "text-green-500" }
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
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Challenge yourself with questions covering fragments, run-ons, and agreement errors. Earn points for each correction!
        </p>
      </div>
    )
  }
];