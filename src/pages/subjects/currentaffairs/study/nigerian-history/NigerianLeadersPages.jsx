import { FiBook, FiStar, FiMessageSquare, FiHeart, FiZap, FiThumbsUp, FiEdit, FiAward, FiAlertCircle, FiList, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export const NigerianLeadersPage = [
  {
    title: "🇳🇬 The Leaders Who Shaped Our Nation",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Hey future uni stars! 🌟 Nigeria's post-independence history is like a blockbuster movie – full of drama, heroes, plot twists, and lessons that hit home. From the OG founding dads to military bosses and democracy champs, these leaders shaped Naija into what it is today. Buckle up, let's make history fun and sticky for your post-UTME prep! 🚀🧠
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
          <p className="text-gray-700">
            <span className="font-bold">Pro Tip: </span> 
            Don't just cram names – think about their vibes and impacts like your fave celebs. It'll stick like glue during exams! 📚💡
          </p>
        </div>
      </div>
    )
  },
  {
    title: "👨‍💼 Democratic Leaders of the First Republic (1960-1966)",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <p className="text-lg font-semibold">Picture this: Fresh out of independence, these guys were like the squad trying to keep a new group chat from falling apart. Regional drama was real, but they laid the foundation! 😎</p>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-gray-100 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            <FiStar className="text-yellow-500" /> Sir Abubakar Tafawa Balewa
          </h3>
          <p className="text-sm font-medium text-gray-600 mb-4">First and only Prime Minister of Nigeria</p>
          <p className="text-gray-700">
            The "Golden Voice of the North" was like that chill friend who keeps everyone calm in a heated argument. He united the regions in a shaky federation, but political beef led to the 1966 coup where he tragically lost his life. Remember him as the quiet hero holding it all together! 🇳🇬❤️
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-gray-100 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            <FiStar className="text-yellow-500" /> Dr. Nnamdi Azikiwe
          </h3>
          <p className="text-sm font-medium text-gray-600 mb-4">First President of Nigeria</p>
          <p className="text-gray-700">
            "Zik of Africa" was the ultimate hype man for independence and pan-African vibes! 🌍 As ceremonial prez, he traveled and dropped unity speeches like motivational TED talks. Powers were limited, but his swag made him a legend. Imagine him as Naija's original influencer! 📣😄
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-gray-100 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            <FiStar className="text-yellow-500" /> Chief Obafemi Awolowo
          </h3>
          <p className="text-sm font-medium text-gray-600 mb-4">Premier of the Western Region</p>
          <p className="text-gray-700">
            Awo was the visionary boss pushing free education and welfare like a modern-day startup CEO! 📚💼 His ideas built strong foundations in the West, but rivalries sparked drama. Think of him as the federalist champ advocating for his squad – his legacy still inspires! 🔥👏
          </p>
        </motion.div>
      </div>
    )
  },
  {
    title: "🎖️ Military Leaders (1966-1979 & 1983-1999)",
    icon: <FiZap className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <p className="text-lg font-semibold">Coup season was like a never-ending plot twist in a Naija series! Some brought gains, others pains – but hey, they taught us resilience. 💪😅</p>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-teal-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-teal-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-teal-700" /> General Aguiyi-Ironsi
          </h3>
          <p className="text-sm font-medium text-teal-600 mb-4">Head of State (1966)</p>
          <p className="text-gray-700">
            First military boss after the coup, Ironsi tried switching to a unitary system like merging all group chats into one – but it backfired big time in the North. Overthrown in months, his story shows how fragile unity can be. Short but spicy! ⚡😬
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-teal-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-teal-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-teal-700" /> General Yakubu Gowon
          </h3>
          <p className="text-sm font-medium text-teal-600 mb-4">Head of State (1966-1975)</p>
          <p className="text-gray-700">
            Gowon navigated the Civil War like a pro gamer in a boss level! 🎮 His "No Victor, No Vanquished" reunited us, plus oil boom cash and 12 new states. Boom era, but overthrown later – classic Naija twist! 🛢️✌️
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-orange-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-orange-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-orange-700" /> General Murtala Muhammed
          </h3>
          <p className="text-sm font-medium text-orange-600 mb-4">Head of State (1975-1976)</p>
          <p className="text-gray-700">
            Short reign, massive vibes! Murtala was the anti-corruption warrior cleaning house like a boss. 🧹 Created states, planned democracy – hero status after his tragic coup death. Legend! 🦸‍♂️💥
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-orange-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-orange-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-orange-700" /> General Olusegun Obasanjo
          </h3>
          <p className="text-sm font-medium text-orange-600 mb-4">Head of State (1976-1979)</p>
          <p className="text-gray-700">
            OBJ picked up where Murtala left, handing power to civilians like passing the baton in a relay. Stabilized things – first military to civvy switch! 🏃‍♂️➡️🗳️
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-red-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-red-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-red-700" /> General Muhammadu Buhari
          </h3>
          <p className="text-sm font-medium text-red-600 mb-4">Head of State (1983-1985)</p>
          <p className="text-gray-700">
            Buhari's "War Against Indiscipline" was like strict school rules to fight corruption. 📏 Tough love, but economy struggles led to his oust. Relatable strict uncle vibes! 😅
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-red-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-red-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-red-700" /> General Ibrahim Babangida
          </h3>
          <p className="text-sm font-medium text-red-600 mb-4">Head of State (1985-1993)</p>
          <p className="text-gray-700">
            "Maradona" for his political dribbles! ⚽ SAP reforms mixed bag, but annulling 1993 elections? Major drama bomb. Crisis mode activated! 💣😩
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-red-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-red-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-red-700" /> General Sani Abacha
          </h3>
          <p className="text-sm font-medium text-red-600 mb-4">Head of State (1993-1998)</p>
          <p className="text-gray-700">
            Dark times alert! Abacha's iron fist crushed opposition, human rights nightmare. Executing Ken Saro-Wiwa? Heartbreaker. 💔 Remember the struggles! ⚠️
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-teal-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-teal-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-teal-700" /> General Abdulsalami Abubakar
          </h3>
          <p className="text-sm font-medium text-teal-600 mb-4">Head of State (1998-1999)</p>
          <p className="text-gray-700">
            Quick hero move: Freed prisoners, set up elections – boom, democracy back! Short but sweet, restoring hope like a plot resolution. 🌈🗳️
          </p>
        </motion.div>
      </div>
    )
  },
  {
    title: "🗳️ The Presidents of the Fourth Republic (1999-Present)",
    icon: <FiCheckCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <p className="text-lg font-semibold">Democracy comeback! Like binge-watching a series without interruptions since '99. These prezs dealt with real-life issues we all feel. 📺🇳🇬</p>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-green-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-green-800 flex items-center gap-2 mb-2">
            <FiThumbsUp className="text-green-700" /> Chief Olusegun Obasanjo
          </h3>
          <p className="text-sm font-medium text-green-600 mb-4">President (1999-2007)</p>
          <p className="text-gray-700">
            Daddy of modern democracy! OBJ wiped debts, started EFCC anti-graft squad, economic glow-up. From military to elected – ultimate comeback king! 👑💼
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-green-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-green-800 flex items-center gap-2 mb-2">
            <FiThumbsUp className="text-green-700" /> Alhaji Umaru Musa Yar’Adua
          </h3>
          <p className="text-sm font-medium text-green-600 mb-4">President (2007-2010)</p>
          <p className="text-gray-700">
            Humble guy with 7-point agenda: Power, roads, education vibes. Amnesty for militants calmed Niger Delta. Short life, big respect! 🙏🌟
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-purple-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-800 flex items-center gap-2 mb-2">
            <FiThumbsUp className="text-purple-700" /> Dr. Goodluck Ebele Jonathan
          </h3>
          <p className="text-sm font-medium text-purple-600 mb-4">President (2010-2015)</p>
          <p className="text-gray-700">
            GEJ's peaceful handover in 2015? Democracy level up! Revived trains, farm boosts – like upgrading Naija's infrastructure game. 🤝🚆
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-purple-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-purple-800 flex items-center gap-2 mb-2">
            <FiThumbsUp className="text-purple-700" /> Muhammadu Buhari
          </h3>
          <p className="text-sm font-medium text-purple-600 mb-4">President (2015-2023)</p>
          <p className="text-gray-700">
            Back as civvy prez, fought corruption and Boko Haram like a warrior. Infrastructure wins like 2nd Niger Bridge, but economy dips were tough. Polarizing but impactful! ⚔️🏗️
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-green-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-green-800 flex items-center gap-2 mb-2">
            <FiThumbsUp className="text-green-700" /> Bola Ahmed Tinubu
          </h3>
          <p className="text-sm font-medium text-green-600 mb-4">President (2023-Present)</p>
          <p className="text-gray-700">
            BAT's bold moves: Ditched fuel subsidies, floated naira for econ fix. "Renewed Hope" on jobs and industry – debates raging, but aiming high! 💡📈
          </p>
        </motion.div>
      </div>
    )
  },
  {
    title: "🌟 The Legacy of Leadership",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block bg-gradient-to-r from-green-500 to-teal-600 rounded-full p-4 mb-6"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Every Leader's Story is a Lesson (and a Meme Waiting to Happen!) 😂
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Wins, fails, drama – these stories molded Naija. Relate them to your life for post-UTME domination: Impacts on politics, society, economy. You've got this! 🏆📈
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Smash Those Practice Questions! 💥
        </motion.button>
      </div>
    )
  }
];
