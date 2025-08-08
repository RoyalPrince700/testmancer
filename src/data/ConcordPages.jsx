// src/pages/subject/concord/ConcordPages.js
import { 
  FiBook, 
  FiCheck, 
  FiAlertTriangle,
  FiUsers,
  FiUser,
  FiFlag,
  FiDollarSign,
  FiClock,
  FiAward
} from "react-icons/fi";
import { motion } from "framer-motion";

export const ConcordPages = [
  {
    title: "Mastering Subject-Verb Agreement!",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-4">
        <p className="text-lg">
          Concord means making your <span className="font-bold text-indigo-700">verbs match</span> their subjects in number (singular/plural). 
          It's the golden rule of English grammar!
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700 flex items-start gap-2">
            <FiAlertTriangle className="text-yellow-500 mt-1 flex-shrink-0" />
            <span>
              Nigerian students often struggle with concord (e.g., <span className="line-through">"The students was late"</span> ❌). 
              We'll make it simple with clear rules and Nigerian examples.
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { 
              title: "Singular Subjects", 
              desc: "Take singular verbs (ends with -s)", 
              icon: <FiUser />, 
              color: "bg-purple-100 text-purple-700",
              example: "The boy <strong>plays</strong> football."
            },
            { 
              title: "Plural Subjects", 
              desc: "Take plural verbs (no -s)", 
              icon: <FiUsers />, 
              color: "bg-indigo-100 text-indigo-700",
              example: "The boys <strong>play</strong> football."
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
                <div className="text-xl">{item.icon}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
              <p className="mb-2">{item.desc}</p>
              <p dangerouslySetInnerHTML={{ __html: item.example }} className="font-medium"></p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiFlag className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Always identify the <span className="font-bold">true subject</span> before choosing your verb. 
            Watch out for prepositional phrases that can trick you!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Basic Concord Rules",
    icon: <FiCheck className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Rule 1 */}
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            The Golden Rule of Concord
          </h3>
          <p>The verb MUST agree with its subject in NUMBER (singular/plural). Find the TRUE subject first!</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>The <span className="font-bold">dog barks</span> loudly. (One dog = barks)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span>The <span className="font-bold">dogs bark</span> loudly. (Many dogs = bark)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">She writes</span> notes every day. (One person = writes)</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Rule 2 */}
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Singular Subjects Need Singular Verbs
          </h3>
          <p>Singular subjects (he, she, it, one dog, a book, Amina) take singular verbs (usually ending in -s, -es: <em>is, has, goes, writes</em>).</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">Water is</span> essential.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">My brother plays</span> football.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">That book belongs</span> to Chinedu.</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Rule 3 */}
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Plural Subjects Need Plural Verbs
          </h3>
          <p>Plural subjects (they, we, dogs, books, people, Amina and Sade) take plural verbs (usually NO -s, -es: <em>are, have, go, write</em>).</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">Students study</span> hard for POST-UTME.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">These mangoes taste</span> sweet.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">We have</span> classes tomorrow.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  // Additional pages would continue with the other rules...
  // I'll show one more example page and then you can follow the pattern for the rest
  {
    title: "Special Cases in Concord",
    icon: <FiAlertTriangle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Rule about Collective Nouns */}
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Teamwork! Collective Nouns (Part 1)
          </h3>
          <p>Collective nouns (team, class, family, committee, government) are SINGULAR if acting as one unit. Use a SINGULAR verb.</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">The team is</span> playing well this season. (One unit)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">Our class has</span> 50 students. (One group)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">The committee meets</span> every Tuesday. (One body)</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Rule about Money/Time/Distance */}
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            Money, Time, Distance = SINGLE Unit
          </h3>
          <p>Amounts of money, periods of time, or distances are treated as a SINGLE UNIT. Use a SINGULAR verb.</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">Fifty thousand naira is</span> a lot of money. (One sum)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">Ten years is</span> a long time to wait. (One period)</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">Five kilometers seems</span> far to walk. (One distance)</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Rule about Tricky Plural-looking Nouns */}
        <div>
          <h3 className="font-bold text-xl text-indigo-700 flex items-center gap-2 mb-3">
            <FiBook />
            "Trousers", "Scissors", "News" – Looks Plural, Acts Singular!
          </h3>
          <p>Nouns that look plural (end in -s) but refer to ONE THING (trousers, scissors, news, mathematics, physics, measles) take a SINGULAR verb.</p>
          
          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-medium text-green-700">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">The news is</span> on at 9 pm.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">Mathematics requires</span> practice.</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-bold">This pair of scissors is</span> sharp.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  // Continue with other rules following the same pattern...
  // Final quiz page
  {
    title: "Ready for the Challenge?",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="text-center py-8">
        <div className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full p-4 mb-6">
          <FiAward className="text-white text-4xl" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Test Your Concord Knowledge!
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Take our 30-question quiz to master subject-verb agreement and earn badges!
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
          Challenge yourself with questions covering all concord rules. Earn points for correct answers and climb the leaderboard!
        </p>
      </div>
    )
  }
];