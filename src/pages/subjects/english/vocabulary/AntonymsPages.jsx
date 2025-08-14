import { 
  FiArrowUp,
  FiArrowDown,
  FiSun,
  FiMoon,
  FiPlus,
  FiMinus,
  FiThumbsUp,
  FiThumbsDown,
  FiZap,
  FiClock,
  FiVolume2,
  FiVolumeX,
  FiEye,
  FiEyeOff,
  FiHeart,FiEdit,FiAward ,
  FiCheck,
  FiX,
  FiSmile,
  FiFrown,
  FiFlag
} from "react-icons/fi";
import { motion } from "framer-motion";

export const AntonymsPages = [
  {
    title: "🔄 Antonyms: The Magic of Opposites!",
    icon: <FiArrowUp className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Antonyms are <span className="font-bold text-indigo-700">word twins with opposite meanings</span> - 
          like yin and yang in language! Nigerians often mix them up in writing. 
          Mastering them makes your English <span className="font-bold">sharper than suya spice</span> 🌶️
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"The food was not sweet"</span> → 
            <span className="font-bold">✅ "The food was bitter"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            { icon: <FiSun className="text-2xl text-yellow-500" />, word: "Hot", antonym: "Cold", emoji: "❄️" },
            { icon: <FiThumbsUp className="text-2xl text-green-500" />, word: "Like", antonym: "Dislike", emoji: "👎" },
            { icon: <FiZap className="text-2xl text-blue-500" />, word: "Fast", antonym: "Slow", emoji: "🐢" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-2">{item.icon}</div>
              <h3 className="font-bold">{item.word}</h3>
              <p className="text-xl font-mono flex items-center justify-center gap-2">
                <FiArrowDown className="text-gray-400" /> 
                <span>{item.antonym}</span>
                <span className="text-xl">{item.emoji}</span>
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiFlag className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Think of antonyms as <span className="font-bold">Nollywood hero/villain pairs</span> - 
            for every "Jenifa" there's a "Aunty Biola"! 🎬
          </p>
        </div>
      </div>
    )
  },
  {
    title: "The Antonym Family",
    icon: <FiPlus className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Gradable Antonyms */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📊</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiArrowUp />
              Gradable Antonyms
            </h3>
          </div>
          <p>Opposites with degrees between them - like pepper soup spice levels!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Examples:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Rich ↔ Poor (💰➖)",
                  "Big ↔ Small (🐘🐭)",
                  "Hot ↔ Cold (🌶️❄️)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="font-medium text-blue-700">🔍 Naija Context:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Lagos traffic: 'Moving' vs 'Standstill'",
                  "Jollof rice: 'Spicy' vs 'Mild'",
                  "Generator sound: 'Loud' vs 'Quiet'"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Complementary Antonyms */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⚖️</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiCheck />
              Complementary Antonyms
            </h3>
          </div>
          <p>Either/or pairs with no middle ground - like NEPA light!</p>
          
          <div className="mt-4 bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { example: "Alive ↔ Dead", icon: "💀" },
                { example: "On ↔ Off", icon: "🔌" },
                { example: "Win ↔ Lose", icon: "🏆" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-3 rounded shadow-xs text-center"
                >
                  <p className="font-bold">{item.example}</p>
                  <p className="text-2xl mt-1">{item.icon}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Relational Antonyms */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🤝</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiArrowUp />
              Relational Antonyms
            </h3>
          </div>
          <p>Opposites that depend on perspective - like market transactions!</p>
          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-orange-50 p-3 rounded-lg">
              <p className="font-medium text-orange-700">✅ Pairs:</p>
              <div className="mt-2 space-y-3">
                {[
                  "Buy ↔ Sell (🛒💰)",
                  "Teacher ↔ Student (👩🏫📚)",
                  "Doctor ↔ Patient (👨⚕️🤒)"
                ].map((item, i) => (
                  <div key={i} className="bg-white p-2 rounded flex items-center gap-3">
                    <span className="text-orange-500">↔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">🇳🇬 Examples:</p>
              <p className="mt-2 p-2 bg-white rounded">
                "The <span className="font-bold">seller</span> collected money from the <span className="font-bold">buyer</span>"
              </p>
              <p className="mt-2 text-sm text-gray-600">
                (Same transaction, opposite roles)
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Prefix Power",
    icon: <FiEdit className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Un- Prefix */}
        <div className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔁</span>
            <h3 className="font-bold text-xl">
              The "Un-" Transformer
            </h3>
          </div>
          <p>Add "un-" to flip meanings - like turning "available" to "unavailable" during Lagos traffic!</p>
          
          <div className="mt-4 bg-white p-4 rounded-xl border border-indigo-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { word: "Happy", antonym: "Unhappy", emoji: "😊→😞" },
                { word: "Tie", antonym: "Untie", emoji: "👔→🔓" },
                { word: "Stable", antonym: "Unstable", emoji: "🏠→💥" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-indigo-100 p-3 rounded-lg text-center"
                >
                  <p className="font-bold">{item.word}</p>
                  <p className="text-xl">↓</p>
                  <p className="font-mono text-red-600">un{item.word.toLowerCase()}</p>
                  <p className="text-sm mt-1">{item.emoji}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dis- Prefix */}
        <div className="bg-green-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔄</span>
            <h3 className="font-bold text-xl">
              The "Dis-" Destroyer
            </h3>
          </div>
          <p>"Dis-" reverses actions - like disconnecting your generator when NEPA brings light!</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                word: "Agree",
                antonym: "Disagree",
                example: "We <span className='line-through'>agree</span> → We <span className='text-green-600 font-bold'>disagree</span> on who makes better jollof"
              },
              {
                word: "Appear",
                antonym: "Disappear",
                example: "The light <span className='line-through'>appears</span> → <span className='text-green-600 font-bold'>disappears</span> every 5 minutes"
              },
              {
                word: "Connect",
                antonym: "Disconnect",
                example: "<span className='line-through'>Connect</span> → <span className='text-green-600 font-bold'>Disconnect</span> the cable during rain"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-green-200">
                <p className="font-medium text-green-700">{item.word} → dis{item.word.toLowerCase()}</p>
                <p className="mt-1 text-sm" dangerouslySetInnerHTML={{__html: item.example}}></p>
              </div>
            ))}
          </div>
        </div>

        {/* In-/Im-/Ir- Prefixes */}
        <div className="bg-yellow-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🚫</span>
            <h3 className="font-bold text-xl">
              The "In-" Family
            </h3>
          </div>
          <p>Changes based on the starting letter - like adapting to Nigerian fuel queues!</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-lg border border-yellow-200 text-center">
              <p className="font-bold">Before most letters:</p>
              <p className="text-2xl mt-2">in + complete</p>
              <p className="text-red-600 font-mono">= incomplete</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-yellow-200 text-center">
              <p className="font-bold">Before m/p/b:</p>
              <p className="text-2xl mt-2">im + possible</p>
              <p className="text-red-600 font-mono">= impossible</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-yellow-200 text-center">
              <p className="font-bold">Before r:</p>
              <p className="text-2xl mt-2">ir + regular</p>
              <p className="text-red-600 font-mono">= irregular</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Suffix Secrets",
    icon: <FiEdit className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* -less suffix */}
        <div className="bg-red-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">➖</span>
            <h3 className="font-bold text-xl">
              The "-less" Remover
            </h3>
          </div>
          <p>Takes away meaning - like a "lightless" room during power outage!</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg">
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { word: "Hope", antonym: "Hopeless", emoji: "🌈→😶" },
                { word: "Fear", antonym: "Fearless", emoji: "😨→🦁" },
                { word: "End", antonym: "Endless", emoji: "🔚→∞" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-100 p-3 rounded-lg text-center min-w-[120px]"
                >
                  <p className="font-bold">{item.word}</p>
                  <p className="text-sm">+ less</p>
                  <p className="text-red-600">{item.antonym}</p>
                  <p className="text-xl mt-1">{item.emoji}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* -ful suffix */}
        <div className="bg-purple-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">➕</span>
            <h3 className="font-bold text-xl">
              The "-ful" Booster
            </h3>
          </div>
          <p>Adds meaning - like turning "hand" to "handful" of naira notes!</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                word: "Power",
                antonym: "Powerful",
                example: "The generator is <span className='text-purple-600 font-bold'>powerful</span> (not just power)"
              },
              {
                word: "Beauty",
                antonym: "Beautiful",
                example: "The Ankara dress is <span className='text-purple-600 font-bold'>beautiful</span>"
              },
              {
                word: "Care",
                antonym: "Careful",
                example: "Be <span className='text-purple-600 font-bold'>careful</span> crossing Lagos roads"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-purple-200">
                <p className="font-medium text-purple-700">{item.word} + ful = {item.antonym}</p>
                <p className="mt-1 text-sm" dangerouslySetInnerHTML={{__html: item.example}}></p>
              </div>
            ))}
          </div>
        </div>

        {/* Quiz */}
        <div className="bg-blue-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl">
              Suffix Challenge
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                question: "What's the opposite of 'harm' using a suffix?",
                answer: "Harmless"
              },
              {
                question: "Change 'thought' to mean 'without thought'",
                answer: "Thoughtless"
              },
              {
                question: "Make 'success' mean 'full of success'",
                answer: "Successful"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Question #{i+1}:</p>
                <p className="font-mono bg-gray-100 p-2 rounded mt-1">{item.question}</p>
                <details className="mt-2">
                  <summary className="text-blue-600 cursor-pointer">Reveal Answer</summary>
                  <p className="mt-1 font-mono bg-green-100 p-2 rounded">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Antonym Mastery",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full p-4 mb-6"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Become an Antonym Champion! 🏆
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Master word opposites with real Nigerian examples from markets to Nollywood!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { 
              title: "Levels", 
              value: "5", 
              icon: "📶", 
              color: "text-purple-600",
              desc: "From Primary to Professor level" 
            },
            { 
              title: "Badges", 
              value: "3", 
              icon: "🏅", 
              color: "text-yellow-500",
              desc: "Earn 'Word Oga' titles" 
            },
            { 
              title: "Examples", 
              value: "150+", 
              icon: "🇳🇬", 
              color: "text-green-600",
              desc: "Real Naija contexts" 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <span className={`text-3xl mb-2 block ${item.color}`}>{item.icon}</span>
              <h3 className="font-bold text-gray-900 text-2xl">{item.value}</h3>
              <p className="text-gray-600 font-medium">{item.title}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Antonym Drills
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features Lagos market signs, pidgin contrasts, and JAMB past questions!
        </p>
      </div>
    )
  },
  // Additional 10 pages continue below...
  {
    title: "Adjective Antonyms",
    icon: <FiSun className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">🌡️ Describing Word Opposites</h2>
        <p>Adjectives make your writing colorful. Their antonyms add contrast!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            { word: "Light", antonym: "Heavy", example: "The bag is too <span class='text-red-500'>heavy</span> (not light) for travel" },
            { word: "Brave", antonym: "Cowardly", example: "The area boys acted <span class='text-red-500'>cowardly</span> when police came" },
            { word: "Modern", antonym: "Ancient", example: "Our <span class='text-red-500'>ancient</span> traditions matter" },
            { word: "Sweet", antonym: "Bitter", example: "The herbal mixture tasted <span class='text-red-500'>bitter</span>" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg">{item.word} ↔ {item.antonym}</h3>
              <p className="mt-2 text-sm" dangerouslySetInnerHTML={{__html: item.example}}></p>
            </div>
          ))}
        </div>
      </div>
    )
  },
];