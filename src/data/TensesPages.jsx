// src/pages/subject/tenses/TensesPages.js
import { 
  FiArrowLeft, 
  FiArrowRight, 
  FiAward, 
  FiBook, 
  FiClock, 
  FiCoffee, 
  FiCheck, 
  FiZap
} from "react-icons/fi";
import { motion } from "framer-motion";

export const TensesPages = [
  {
    title: "Mastering Time in English!",
    icon: <FiClock className="text-indigo-600" />,
    content: (
      <div className="space-y-4">
        <p className="text-lg">
          Tenses tell us <span className="font-bold text-indigo-700">when</span> an action happens – 
          past, present, or future! Think of them as time machines for verbs.
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            Nigerian students often mix them up (e.g., <span className="line-through">"I am going to school yesterday"</span> ❌). 
            Don't worry! We'll make it simple:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            { title: "Past", desc: "Finished actions (yesterday, last year)", icon: <FiArrowLeft />, color: "bg-purple-100 text-purple-700" },
            { title: "Present", desc: "Happening now or regularly", icon: <FiCoffee />, color: "bg-indigo-100 text-indigo-700" },
            { title: "Future", desc: "Yet to happen (tomorrow, next week)", icon: <FiArrowRight />, color: "bg-blue-100 text-blue-700" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${item.color} p-4 rounded-xl`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-xl">{item.icon}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiZap className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Time words like <span className="font-bold">since, every day, yesterday</span> are your clues! 
            They help identify which tense to use.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Present Tenses",
    icon: <FiCoffee className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Present Simple
          </h3>
          <p>For habits, routines, and facts! Use base verb (I eat), but add <span className="font-bold">-s/-es</span> for he/she/it (She teaches).</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>Ade <span className="font-bold">drinks</span> tea every morning. (Routine)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>Rivers <span className="font-bold">flow</span> into the ocean. (Fact)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Present Continuous
          </h3>
          <p>Actions happening <span className="font-bold">right now</span> or temporarily. Use <span className="font-bold">am/is/are + -ing</span> (We are studying).</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>The kids <span className="font-bold">are playing</span> football now.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>I <span className="font-bold">am learning</span> French this term.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Present Perfect
          </h3>
          <p>Past actions linked to <span className="font-bold">now</span> or life experiences. Use <span className="font-bold">has/have + past participle</span> (He has eaten).</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>She <span className="font-bold">has visited</span> Abuja three times. (Life experience)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>They <span className="font-bold">have just finished</span> the test. (Recent past)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Past Tenses",
    icon: <FiArrowLeft className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Past Simple
          </h3>
          <p>Completed actions at a <span className="font-bold">specific past time</span>. Use <span className="font-bold">-ed</span> for regular verbs (I walked), or irregulars (She wrote).</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>We <span className="font-bold">watched</span> Nollywood films last night.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>Olamide <span className="font-bold">released</span> a new song in 2023.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Past Continuous
          </h3>
          <p>Actions <span className="font-bold">in progress</span> at a past moment. Use <span className="font-bold">was/were + -ing</span> (They were dancing).</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>I <span className="font-bold">was cooking</span> when the power went out.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>At 8 PM, he <span className="font-bold">was driving</span> home.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Past Perfect
          </h3>
          <p>The "<span className="font-bold">past before the past</span>"! Shows which action happened first. Use <span className="font-bold">had + past participle</span> (She had left).</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>The bus <span className="font-bold">had departed</span> before I arrived.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>After Tunde <span className="font-bold">had finished</span> work, he slept.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Future Tenses",
    icon: <FiArrowRight className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Future Simple
          </h3>
          <p>Promises, predictions, or instant decisions. Use <span className="font-bold">will + base verb</span> (I will call you).</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>It <span className="font-bold">will rain</span> tomorrow. (Prediction)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>I <span className="font-bold">will help</span> you with UTME prep! (Promise)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Future Continuous
          </h3>
          <p>Actions <span className="font-bold">in progress</span> at a future time. Use <span className="font-bold">will be + -ing</span> (They will be sleeping).</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>At 9 AM, I <span className="font-bold">will be writing</span> my exam.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>Next Sunday, she <span className="font-bold">will be celebrating</span> her birthday.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiZap className="text-yellow-500" />
            Quick Tip:
          </p>
          <p className="mt-2">
            Remember that Future Continuous emphasizes the <span className="font-bold">duration</span> of an action at a specific future time, 
            while Future Simple focuses on the <span className="font-bold">decision or prediction</span>.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Ready for the Challenge?",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full p-4 mb-6">
          <FiAward className="text-white text-4xl" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Test Your Tense Knowledge!
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Take our 30-question quiz to master English tenses and earn badges!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { title: "Questions", value: "30", icon: <FiBook />, color: "text-indigo-600" },
            { title: "Badges to Earn", value: "3", icon: <FiAward />, color: "text-yellow-500" },
            { title: "Time Limit", value: "15 min", icon: <FiClock />, color: "text-green-500" }
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
          Challenge yourself with questions covering all tense forms. Earn points for correct answers and climb the leaderboard!
        </p>
      </div>
    )
  }
];