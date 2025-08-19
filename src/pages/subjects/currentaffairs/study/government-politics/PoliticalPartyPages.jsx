import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const PoliticalPartiesPage = [
  {
    title: "🎉 What are Political Parties?",
    icon: <FiBook className="text-red-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Political parties are like teams competing for power to run the country! 🇳🇬 They are groups of people with similar ideas about how to govern. They nominate candidates to contest in elections, aiming to win and form the government. Understanding them is key for your Post-UTME! 🗳️
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">Did you know?</span> 
            Nigeria has had many political parties, but the most prominent ones usually dominate the political landscape. Think of the <span className="font-bold text-yellow-700">APC</span> and <span className="font-bold text-yellow-700">PDP</span> in recent times.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: "🤝", skill: "Unity & Mobilization", meaning: "They bring people together for a common goal.", desc: "Strength in numbers!" },
            { icon: "📣", skill: "Public Education", meaning: "They inform citizens about their policies.", desc: "Telling their story" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.skill}</h3>
              <p className="text-sm font-mono">{item.meaning}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 bg-red-50 p-4 rounded-xl">
          <p className="font-medium text-red-700 flex items-center gap-2">
            <FiStar className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Political parties are like football clubs in the EPL - they have different strategies and fan bases, but they are all playing for the same trophy: Aso Rock! 🏆
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Functions of Political Parties",
    icon: <FiList className="text-red-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📝</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiCheckCircle />
              What Do They Do?
            </h3>
          </div>
          <p>
            Political parties don't just win elections; they have other important roles in a democracy. 🗳️
          </p>
          
          <div className="mt-4 space-y-3">
            {[
              { icon: "🧑‍🏫", function: "Recruiting and Training Candidates", detail: "They find and prepare people to run for office." },
              { icon: "📈", function: "Formulating Policies", detail: "They develop plans and ideas for how to run the government." },
              { icon: "🗣️", function: "Mobilizing Voters", detail: "They encourage people to register and vote." },
              { icon: "🔍", function: "Providing Opposition", detail: "The losing party keeps the ruling party in check. They are the 'shadow government'!" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="bg-green-50 p-3 rounded-lg flex items-start gap-3"
              >
                <span className="text-xl mt-1">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-green-800">{item.function}</h4>
                  <p className="text-sm text-gray-700">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Historical Parties of Nigeria",
    icon: <FiZap className="text-red-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🕰️</span>
            <h3 className="font-bold text-xl">
              From the First Republic to Today
            </h3>
          </div>
          <p>
            Nigeria's political history is a journey through different parties. Knowing the key players from each era can score you points in your exam. 📜
          </p>
          
          <div className="mt-4 space-y-4">
            <div className="p-4 rounded-lg bg-white shadow-md">
              <h4 className="font-bold text-blue-800 mb-2">First Republic (1960-1966)</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><span className="font-bold">NPC</span> (Northern People’s Congress) - Led by Tafawa Balewa.</li>
                <li><span className="font-bold">NCNC</span> (National Council of Nigeria and the Cameroons) - Led by Nnamdi Azikiwe.</li>
                <li><span className="font-bold">AG</span> (Action Group) - Led by Obafemi Awolowo.</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-md">
              <h4 className="font-bold text-blue-800 mb-2">Second Republic (1979-1983)</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><span className="font-bold">NPN</span> (National Party of Nigeria) - Led by Shehu Shagari.</li>
                <li><span className="font-bold">UPN</span> (Unity Party of Nigeria) - Led by Obafemi Awolowo.</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-md">
              <h4 className="font-bold text-blue-800 mb-2">Fourth Republic (1999 - Present)</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><span className="font-bold">PDP</span> (Peoples Democratic Party) - Ruled for 16 years.</li>
                <li><span className="font-bold">APC</span> (All Progressives Congress) - The current ruling party.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Party Systems in Nigeria",
    icon: <FiHeart className="text-red-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-pink-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔢</span>
            <h3 className="font-bold text-xl">
              One-Party, Two-Party, or Multi-Party?
            </h3>
          </div>
          <p>
            The number of major political parties in a country determines its party system. Nigeria has evolved over time. 📈
          </p>
          
          <div className="mt-4 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-pink-800">Multi-Party System</h4>
              <p className="text-sm text-gray-600 mt-1">This is what Nigeria has! 🌍 Multiple parties exist and compete for power. This gives voters more options but can sometimes make it hard to get a clear majority.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-pink-800">Two-Party System</h4>
              <p className="text-sm text-gray-600 mt-1">Only two major parties dominate politics, like in the USA (Democrats and Republicans). It makes voting simpler but offers less choice.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Quiz Time! 🧠",
    icon: <FiThumbsUp className="text-red-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block bg-gradient-to-r from-red-500 to-purple-600 rounded-full p-4 mb-6"
        >
          <FiZap className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Test Your Knowledge!
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Ready to prove you're a political wizard? Try these questions! 🧙‍♂️
        </p>
        
        <div className="bg-red-50 p-4 rounded-xl mt-6 space-y-4">
          {[
            { 
              question: "What is the primary function of a political party?", 
              answer: "To win elections and form the government. 🗳️" 
            },
            { 
              question: "Which political party was led by Obafemi Awolowo in the First Republic?", 
              answer: "Action Group (AG) ✊" 
            },
            { 
              question: "What type of party system does Nigeria currently operate?", 
              answer: "A multi-party system. 🌍" 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium">Question #{i+1}:</p>
              <p className="font-mono bg-gray-100 p-2 rounded mt-1">{item.question}</p>
              <details className="mt-2">
                <summary className="text-blue-600 cursor-pointer">Show Answer</summary>
                <p className="mt-1 font-mono bg-green-100 p-2 rounded">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Take Full Political Parties Quiz
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          You're on your way to becoming a political science pro! Keep it up! 💯
        </p>
      </div>
    )
  }
];