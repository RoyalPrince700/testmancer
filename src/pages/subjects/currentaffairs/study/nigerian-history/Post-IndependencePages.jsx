import { FiBook, FiStar, FiMessageSquare, FiHeart, FiZap, FiThumbsUp, FiEdit, FiAward, FiAlertCircle, FiList, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export const PostIndependencePage = [
  {
    title: "🇳🇬 Nigeria’s Big Independence Party! 🎉",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Yo, post-UTME legends! On October 1, 1960, Nigeria said “Peace out!” to Britain and threw the biggest independence bash ever! 🎈 The green-white-green flag went up, and the vibes were pure hope and hype. Let’s dive into this epic chapter like it’s a blockbuster movie for your exam prep! 🍿🧠
        </p>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <p className="text-gray-700">
            <span className="font-bold">Vibe Check! 🌱</span> 
            Nigeria kicked off as a parliamentary democracy with Abubakar Tafawa Balewa as the Prime Minister running the show and Nnamdi Azikiwe as the ceremonial Head of State. We were a federation of three regions – Northern, Western, and Eastern – like a squad with different flavors! 🌍
          </p>
        </div>
        
        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiStar className="text-yellow-500" />
            The OG Squad:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li className="font-medium">Abubakar Tafawa Balewa: Nigeria’s first Prime Minister, the chill leader. 🧑‍💼</li>
            <li className="font-medium">Nnamdi Azikiwe: First Governor-General, then President, the unity hype man! 🌟</li>
            <li className="font-medium">Obafemi Awolowo: Western Region’s boss and opposition star. 📚🔥</li>
            <li className="font-medium">Ahmadu Bello: Northern Region’s Premier, a powerhouse in the North! 🦁</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "💔 Drama and Plot Twists! 😱",
    icon: <FiAlertCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          The independence party vibes didn’t last long. Ethnic and political drama, stirred up by colonial shenanigans, turned the group chat toxic. Let’s break down the chaos that shook Naija! 😬
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-red-50 p-6 rounded-xl shadow-sm border border-red-100"
          >
            <h3 className="font-bold text-xl flex items-center gap-2 text-red-800">
              <FiMessageSquare /> The First Coup (1966) 💥
            </h3>
            <p className="mt-2 text-gray-700">
              On January 15, 1966, some young army majors flipped the script with a wild coup. They took out big names like Balewa and Bello, ending the First Republic. Military rule crashed the party, and it was a whole new game! 🪖😵
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="font-bold text-xl flex items-center gap-2 text-gray-800">
              <FiZap /> The Civil War (1967-1970) ⚔️
            </h3>
            <p className="mt-2 text-gray-700">
              More drama! After another coup and ethnic riots, the Eastern Region, led by Chukwuemeka Ojukwu, said “We’re out!” and became Biafra. A brutal three-year war followed, but Nigeria reunited with Yakubu Gowon’s “No Victor, No Vanquished” peace vibe. 🕊️💪
            </p>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    title: "🔄 Military Rule Rollercoaster! 🎢",
    icon: <FiThumbsUp className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Post-war Nigeria was like a series of military takeovers – each leader brought their own sauce to the table, some sweet, some spicy! 🌶️ Let’s meet the key players who ran the show.
        </p>
        
        <div className="bg-yellow-50 p-4 rounded-xl">
          <h3 className="font-bold text-lg text-yellow-800 flex items-center gap-2">
            <FiEdit /> The Military MVPs
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            <li>Yakubu Gowon: Civil War hero and oil boom boss, creating 12 states! 🛢️✌️</li>
            <li>Murtala Muhammed: Anti-corruption warrior with a “get it done” vibe! 🧹💥</li>
            <li>Olusegun Obasanjo: Handed power to civilians in ’79 – Second Republic unlocked! 🗳️🙌</li>
            <li>Ibrahim Babangida: Economic reforms but annulled elections? Drama king! ⚽😩</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "🚀 Democracy’s Big Comeback! 🎉",
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
          Fourth Republic, Let’s Go! 🥳
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          After years of military vibes, Nigeria dropped the mic on May 29, 1999, with Olusegun Obasanjo as the first president of the Fourth Republic. Democracy was back, and it’s been the longest party yet! Let’s keep it lit for your exams! 🇳🇬🔥
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Ready to Smash the Next Topic? 🚀
        </motion.button>
      </div>
    )
  }
];