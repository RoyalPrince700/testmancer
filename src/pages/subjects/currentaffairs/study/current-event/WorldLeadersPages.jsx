import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const WorldLeadersPage = [
  {
    title: "🌍 Who Are World Leaders?",
    icon: <FiBook className="text-pink-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          World leaders are the heads of states and governments who shape global events. From presidents and prime ministers to monarchs, knowing who they are and what they do is crucial for your Post-UTME. It shows you're aware of the world around you, not just Nigeria! 🌐
        </p>
        
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">Did you know?</span> 
            The titles of world leaders vary. A country might have a <span className="font-bold text-purple-700">President</span>, a <span className="font-bold text-purple-700">Prime Minister</span>, or even a <span className="font-bold text-purple-700">Chancellor</span>! 👑
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: "🤝", skill: "Diplomacy", meaning: "They negotiate with other countries to maintain peace.", desc: "Keeping the world calm" },
            { icon: "📈", skill: "Economic Policy", meaning: "They make decisions that affect their country's wealth.", desc: "Managing the money" }
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
        
        <div className="mt-8 bg-pink-50 p-4 rounded-xl">
          <p className="font-medium text-pink-700 flex items-center gap-2">
            <FiStar className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Stay updated with current affairs! Who the leaders are changes often, so what's true today might not be tomorrow. Follow the news like you follow your favorite TV show! 📺
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Leaders from Key Countries",
    icon: <FiList className="text-pink-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🏛️</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiMessageSquare />
              Meet the Global Players
            </h3>
          </div>
          <p>
            Let's get to know some of the most influential leaders from around the world. These are the faces you're likely to see in your exams. 🗺️
          </p>
          
          <div className="mt-4 space-y-4">
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-blue-50 p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-bold text-blue-800 flex items-center gap-2">United States 🇺🇸</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                <li><span className="font-bold">Head of State:</span> President.</li>
                <li><span className="font-bold">Key Figure:</span> The President of the United States.</li>
                <li><span className="font-bold">Fun Fact:</span> The US President is also the Commander-in-Chief of the armed forces! 🫡</li>
              </ul>
            </motion.div>
            
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-purple-50 p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-bold text-purple-800 flex items-center gap-2">United Kingdom 🇬🇧</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                <li><span className="font-bold">Head of Government:</span> Prime Minister.</li>
                <li><span className="font-bold">Key Figure:</span> The Prime Minister of the UK.</li>
                <li><span className="font-bold">Fun Fact:</span> The UK also has a monarch who is the Head of State, but with limited political power. 👑</li>
              </ul>
            </motion.div>
            
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-green-50 p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-bold text-green-800 flex items-center gap-2">Germany 🇩🇪</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                <li><span className="font-bold">Head of Government:</span> Chancellor.</li>
                <li><span className="font-bold">Key Figure:</span> The Chancellor of Germany.</li>
                <li><span className="font-bold">Fun Fact:</span> The Chancellor is often considered one of the most powerful people in the European Union. 🇪🇺</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Regional and Continental Leaders",
    icon: <FiZap className="text-pink-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-orange-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🤝</span>
            <h3 className="font-bold text-xl">
              Leaders in Africa and Beyond
            </h3>
          </div>
          <p>
            Don't forget the leaders closer to home! Post-UTME questions love to focus on African and other key global players. 🌍
          </p>
          
          <div className="mt-4 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-orange-800">South Africa 🇿🇦</h4>
              <p className="text-sm text-gray-600 mt-1">The head of government is the President. South Africa is a key player in the African economy. 💰</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-orange-800">France 🇫🇷</h4>
              <p className="text-sm text-gray-600 mt-1">They have a President and a Prime Minister. The President holds a lot of power in their "semi-presidential" system. 🗼</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-orange-800">China 🇨🇳</h4>
              <p className="text-sm text-gray-600 mt-1">The leader is often referred to as the President or General Secretary. China's leader is highly influential in global politics and trade. 🐉</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Quiz Time! 🧠",
    icon: <FiThumbsUp className="text-pink-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-4 mb-6"
        >
          <FiEdit className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Test Your Global Knowledge!
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Ready to prove you're a global citizen? Try these questions! 🧐
        </p>
        
        <div className="bg-pink-50 p-4 rounded-xl mt-6 space-y-4">
          {[
            { 
              question: "The head of government in the United Kingdom is called a...", 
              answer: "Prime Minister 🇬🇧" 
            },
            { 
              question: "Which country's leader is known as the Chancellor?", 
              answer: "Germany 🇩🇪" 
            },
            { 
              question: "In what year did Nigeria's current democratic era begin?", 
              answer: "1999 🇳🇬" 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium">Question #{i+1}:</p>
              <p className="font-mono bg-gray-100 p-2 rounded mt-1">{item.question}</p>
              <details className="mt-2">
                <summary className="text-purple-600 cursor-pointer">Show Answer</summary>
                <p className="mt-1 font-mono bg-green-100 p-2 rounded">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Take Full World Leaders Quiz
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Knowing the world leaders is a sign of a sharp mind. You got this! ✨
        </p>
      </div>
    )
  }
];