import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const CultureTraditionPage = [
  {
    title: "🎨 What is Nigerian Culture?",
    icon: <FiBook className="text-orange-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Nigerian culture is like a vibrant Aso-Oke fabric—rich, diverse, and woven with many different threads! 🇳🇬 It's the unique blend of traditions, languages, food, and social norms from over 250 ethnic groups. For your Post-UTME, understanding this diversity is key to acing questions on social studies and current affairs. 💯
        </p>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">Did you know?</span> 
            Nigeria is home to major ethnic groups like the <span className="font-bold text-green-700">Hausa-Fulani</span> (North), <span className="font-bold text-green-700">Yoruba</span> (South-West), and <span className="font-bold text-green-700">Igbo</span> (South-East), each with their own distinct traditions!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: "🗣️", skill: "Languages", meaning: "Over 500 indigenous languages spoken.", desc: "A Tower of Babel!" },
            { icon: "🍲", skill: "Cuisine", meaning: "From Jollof Rice to Suya, food unites us!", desc: "Food is life!" }
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
        
        <div className="mt-8 bg-orange-50 p-4 rounded-xl">
          <p className="font-medium text-orange-700 flex items-center gap-2">
            <FiStar className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            When studying for your exam, don't just memorize facts; try to understand the **significance** of each tradition. Why is it important? What does it represent? 🤔
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Major Ethnic Groups & Their Traditions",
    icon: <FiList className="text-orange-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🌍</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiMessageSquare />
              A Quick Tour of Nigeria's Cultures
            </h3>
          </div>
          <p>
            Let's take a quick journey through the cultural hotspots of Nigeria. Knowing these details can give you a huge advantage! 🗺️
          </p>
          
          <div className="mt-4 space-y-4">
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-blue-50 p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-bold text-blue-800 flex items-center gap-2">Hausa-Fulani (Northern Nigeria) 🐫</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                <li><span className="font-bold">Traditional Attire:</span> <span className="font-italic">Babanriga</span> (for men) and <span className="font-italic">Abaya</span> (for women).</li>
                <li><span className="font-bold">Art & Craft:</span> Leatherwork, weaving, and pottery.</li>
                <li><span className="font-bold">Festival:</span> <span className="font-italic">Durbar Festival</span>, a grand display of horsemanship. 🐎</li>
              </ul>
            </motion.div>
            
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-purple-50 p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-bold text-purple-800 flex items-center gap-2">Yoruba (South-Western Nigeria) 👑</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                <li><span className="font-bold">Traditional Attire:</span> <span className="font-italic">Agbada</span> and <span className="font-italic">Iro and Buba</span>, often made with Aso-Oke.</li>
                <li><span className="font-bold">Art & Craft:</span> Carving, bronze casting (like the famous Ife art), and beadwork.</li>
                <li><span className="font-bold">Festival:</span> <span className="font-italic">Eyo Festival</span> and <span className="font-italic">Osun-Osogbo Festival</span>. 🎭</li>
              </ul>
            </motion.div>
            
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-red-50 p-4 rounded-lg shadow-sm"
            >
              <h4 className="font-bold text-red-800 flex items-center gap-2">Igbo (South-Eastern Nigeria) 🌳</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                <li><span className="font-bold">Traditional Attire:</span> <span className="font-italic">Isiagu</span> for men and wrappers with elaborate blouses for women.</li>
                <li><span className="font-bold">Art & Craft:</span> Masquerade art, bronze works, and pottery.</li>
                <li><span className="font-bold">Festival:</span> <span className="font-italic">Iri Ji</span> (New Yam Festival), a celebration of harvest. 🍠</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Common Traditional Practices",
    icon: <FiZap className="text-orange-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-purple-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🤝</span>
            <h3 className="font-bold text-xl">
              Social Norms & Ceremonies
            </h3>
          </div>
          <p>
            Beyond major ethnic groups, there are many shared traditional practices that are important for your exam. 📜
          </p>
          
          <div className="mt-4 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-purple-800">Marriage Rites 💍</h4>
              <p className="text-sm text-gray-600 mt-1">Traditional marriage involves paying a bride price and a series of ceremonies unique to each tribe. It is a coming together of two families, not just two people. 👨‍👩‍👧‍👦</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-purple-800">Naming Ceremonies 👶</h4>
              <p className="text-sm text-gray-600 mt-1">Babies are given names in a special ceremony, often with prayers, blessings, and sometimes symbolic food items to represent their future. 🍲</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-purple-800">Traditional Rulers & Chiefs 👑</h4>
              <p className="text-sm text-gray-600 mt-1">Chiefs and kings (like the <span className="font-italic">Oba</span>, <span className="font-italic">Emir</span>, and <span className="font-italic">Igwe</span>) still hold significant influence in their communities as custodians of tradition.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Quiz Time! 🧠",
    icon: <FiThumbsUp className="text-orange-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block bg-gradient-to-r from-orange-500 to-red-600 rounded-full p-4 mb-6"
        >
          <FiEdit className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Test Your Cultural Knowledge!
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Ready to show off your understanding of Nigeria's rich culture? Try these questions! 🧐
        </p>
        
        <div className="bg-orange-50 p-4 rounded-xl mt-6 space-y-4">
          {[
            { 
              question: "The traditional attire 'Agbada' is famously worn by which ethnic group?", 
              answer: "The Yoruba people. 👑" 
            },
            { 
              question: "The 'Iri Ji' or New Yam Festival is a major celebration of harvest for which group?", 
              answer: "The Igbo people. 🍠" 
            },
            { 
              question: "What is the traditional festival of horsemanship in Northern Nigeria called?", 
              answer: "The Durbar Festival. 🐎" 
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
          className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Take Full Culture Quiz
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Embrace the diversity and ace your exam! You're almost there! 🚀
        </p>
      </div>
    )
  }
];