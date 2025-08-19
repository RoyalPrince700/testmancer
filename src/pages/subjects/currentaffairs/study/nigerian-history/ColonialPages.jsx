import { FiBook, FiStar, FiMessageSquare, FiHeart, FiZap, FiThumbsUp, FiEdit, FiAward, FiAlertCircle, FiList, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export const ColonialEraPage = [
  {
    title: "🇬🇧 When the British Crashed Naija’s Party! 🎩",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Yo, post-UTME superstars! In 1861, the British rolled into Lagos like uninvited guests and kicked off the colonial era. 🏰 This wasn’t a chill hangout – they came to stop the slave trade, push their goods, and grab resources. Let’s break it down like a TikTok history recap for your exam prep! 📱🔥
        </p>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <p className="text-gray-700">
            <span className="font-bold">Tea Spill! ☕</span> 
            The name "Nigeria" was dropped by Flora Shaw, a British journalist and Lord Lugard’s wife, in 1897. She got inspo from the Niger River. Talk about branding! 🗺️✨
          </p>
        </div>
        
        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiStar className="text-yellow-500" />
            Major Plot Points:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li className="font-medium">1861: Lagos got annexed – British said, “This is ours now!” 🏴󠁧󠁢󠁥󠁮󠁧󠁿</li>
            <li className="font-medium">1900: Northern and Southern Protectorates formed, splitting the squad. 🗳️</li>
            <li className="font-medium">1914: Amalgamation alert! Lord Lugard mashed North and South into one Nigeria. One big, messy group chat! 📡</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "👑 How the British Ran the Show 🎮",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          The British didn’t have enough squad members to rule every village, so they played it smart with Indirect Rule – like outsourcing the admin work! 🧠 Let’s see how it went down.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-purple-50 p-6 rounded-xl shadow-sm border border-purple-100"
          >
            <h3 className="font-bold text-xl flex items-center gap-2 text-purple-800">
              <FiMessageSquare /> Indirect Rule in the North 🕌
            </h3>
            <p className="mt-2 text-gray-700">
              The North was a vibe! The British kept the Emirs and their Islamic system, just adding a British filter. It was like letting the local DJ keep spinning while they controlled the playlist. Worked like a charm! 🎶👑
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 p-6 rounded-xl shadow-sm border border-yellow-100"
          >
            <h3 className="font-bold text-xl flex items-center gap-2 text-yellow-800">
              <FiThumbsUp /> South: A Total Mess! 😅
            </h3>
            <p className="mt-2 text-gray-700">
              The South, especially Igbo land, had no central kings, so the British invented “warrant chiefs.” Big oops! It caused chaos, and the Aba Women’s Riot of 1929 was the ultimate clapback! Women said, “Not today!” 💪🔥
            </p>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    title: "📈 The Good, the Bad, and the Colonial Vibes 😎",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Colonial rule was like a double-edged sword – some wins, some major Ls. Let’s unpack how it changed Naija forever! 🗡️
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-teal-50 p-6 rounded-xl shadow-sm border border-teal-100"
          >
            <h3 className="font-bold text-xl flex items-center gap-2 text-teal-800">
              <FiZap /> The Cool Stuff (Kinda) 🚂
            </h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Railways and roads popped up to ship out cocoa and palm oil. Infrastructure glow-up! 🛤️🌴</li>
              <li>Missionaries brought schools and hospitals, dropping Western education and medicine like hot mixtapes. 📚🏥</li>
            </ul>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-orange-50 p-6 rounded-xl shadow-sm border border-orange-100"
          >
            <h3 className="font-bold text-xl flex items-center gap-2 text-orange-800">
              <FiAlertCircle /> The Not-So-Cool Stuff 😬
            </h3>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Economy was all about Britain’s bag – we were just the raw material plug. 💰🙅‍♂️</li>
              <li>Forcing diverse groups together? Recipe for ethnic and political drama we’re still untangling. 💔😩</li>
            </ul>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    title: "🏁 Road to Freedom! 🦅",
    icon: <FiCheckCircle className="text-indigo-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full p-4 mb-6"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Nationalism on Fleek! 💪
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Nigerians got tired of the British running the show and started clapping back! Legends like Nnamdi Azikiwe, Obafemi Awolowo, and Ahmadu Bello formed political parties and fought for freedom. Their hustle led to the ultimate glow-up: Independence Day! 🇳🇬🎉
        </p>
        
        <p className="text-4xl font-extrabold text-green-700">
          October 1, 1960: Naija’s Free! 🥳
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Test Your Knowledge, Champ! 🚀
        </motion.button>
      </div>
    )
  }
];