import { FiBook, FiStar, FiMessageSquare, FiHeart, FiZap, FiThumbsUp, FiEdit, FiAward, FiAlertCircle, FiList, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export const PreColonialEraPage = [
  {
    title: "🇳🇬 Nigeria Before the Oyinbo Crashed the Party 🎉",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Yo, post-UTME champs! Before the British rolled in and sketched Nigeria on a map, our land was a vibe – a colorful mix of epic kingdoms, empires, and communities, each with its own swag. Think of it like a massive festival with different squads running their own stages! 🥁🌍 Let’s dive into this history like it’s the hottest Netflix series for your exam prep! 📺
        </p>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <p className="text-gray-700">
            <span className="font-bold">Fun Fact Alert! 🚨</span> 
            The Nok civilization was dropping fire terracotta sculptures as early as 500 BC! They were basically Nigeria’s first art influencers. 🗿✨
          </p>
        </div>
        
        <p className="text-xl font-semibold mt-6">The Big Names in the Pre-Colonial Squad:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li className="font-medium">Hausa-Fulani States in the North – Islamic vibes with epic trade game! 🕌💰</li>
          <li className="font-medium">Yoruba Kingdoms in the Southwest – Oyo and Ife were like the Lagos of their time! 👑🌟</li>
          <li className="font-medium">Igbo Communities in the Southeast – No kings, just group chat democracy! 🗣️🤝</li>
          <li className="font-medium">Benin Kingdom – Oba’s squad with bronze art that screamed royalty! 🖼️⚔️</li>
        </ul>
      </div>
    )
  },
  {
    title: "👑 How They Ran the Show 🎭",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Every region had its own style of keeping things tight – like choosing between a solo DJ or a full band for a party! From mighty kings to squad councils, here’s how they kept the vibes in check. 🎶
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-purple-50 p-6 rounded-xl shadow-sm border border-purple-100"
          >
            <h3 className="font-bold text-xl flex items-center gap-2 text-purple-800">
              <FiMessageSquare /> Centralized States (North & Southwest) 🏰
            </h3>
            <p className="mt-2 text-gray-700">
              Think of these as the ultimate CEO vibes! Emirs in the North and Obas/Alaafins in Yoruba land were calling the shots. They had armies, collected tribute like modern-day taxes, and ran tight ships. In the Oyo Empire, the Alaafin had the Oyo Mesi council to keep him in check – like a board of directors with veto power! 🛡️💼
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 p-6 rounded-xl shadow-sm border border-yellow-100"
          >
            <h3 className="font-bold text-xl flex items-center gap-2 text-yellow-800">
              <FiThumbsUp /> Decentralized Systems (Southeast) 🤝
            </h3>
            <p className="mt-2 text-gray-700">
              The Igbo said, “No king, no stress!” 😎 Power was shared like a group project – councils of elders, Ozo title holders, and age grades made decisions together. It was like a WhatsApp group where everyone gets a say. Pure democratic vibes that were ahead of their time! 🗳️🔥
            </p>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    title: "💼 Hustle and Culture Vibes 🎨",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Our ancestors were the ultimate hustlers! They weren’t just farming – they were trading, crafting, and connecting across continents like OG entrepreneurs. 💪🌍
        </p>
        
        <div className="bg-blue-50 p-4 rounded-xl">
          <h3 className="font-bold text-lg text-blue-800 flex items-center gap-2">
            <FiZap /> From Local Markets to Global Glow-Up! 🌐
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Agriculture was the main hustle – yams, millet, palm oil were the cash crops! 🌾💸</li>
            <li>Local crafts like weaving, pottery, and blacksmithing were popping like Etsy shops! 🧵⚒️</li>
            <li>Trade routes were the highways of the day. The North linked to trans-Saharan trade, while coastal cities like Benin and Calabar vibed with European traders for pepper, ivory, and later, sadly, enslaved people. 🛤️😔</li>
          </ul>
        </div>
        
        <p className="text-lg font-semibold mt-8">What About the Culture Scene? 🎉</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Family was the squad you rolled with – extended families were the ultimate support system! 👨‍👩‍👧‍👦❤️</li>
          <li>Religion was life’s soundtrack. Yoruba had Olodumare, Igbo had Chukwu, and the North rocked Islam from the 10th century. Spiritual vibes were strong! 🕌🙏</li>
        </ul>
      </div>
    )
  },
  {
    title: "🚀 Your Exam Cheat Code! 🧠",
    icon: <FiCheckCircle className="text-indigo-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block bg-gradient-to-r from-green-500 to-teal-600 rounded-full p-4 mb-6"
        >
          <FiZap className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          You’re Ready to Slay This! 💥
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          The pre-colonial era was a whole vibe – advanced systems, booming trade, and cultures that lit up Africa! This isn’t just history; it’s the root of Naija’s greatness. Ace your post-UTME by connecting these stories to the Nigeria you know today! 🇳🇬🔥
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Smash Those Practice Questions! 🚀
        </motion.button>
      </div>
    )
  }
];