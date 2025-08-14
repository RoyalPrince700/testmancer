// src/pages/subject/oralEnglish/OralEnglishPages.jsx
import { 
  FiAlertCircle,
  FiMic,
  FiHelpCircle,
  FiVolume2,
  FiLink,
  FiList,
  FiEdit,
  FiMessageSquare,
  FiMinus,
  FiCode,
  FiMoreHorizontal,
  FiAward
} from "react-icons/fi";
import { motion } from "framer-motion";

export const OralEnglishPages = [
  {
    title: "🎤 Oral English: Your Speaking Superpower!",
    icon: <FiMic className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Oral English is your <span className="font-bold text-indigo-700">secret weapon</span> for post-UTME success - 
          it's not just about passing but speaking like a pro! Many Nigerian students struggle with pronunciation, 
          making "grammar police" cringe 🚨
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">❌ Common Naija Error:</span> 
            <span className="line-through">"I dey go skuul"</span> → 
            <span className="font-bold">✅ "I am going to school"</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { icon: "🗣️", name: "Pronunciation", symbol: "/prəˌnʌnsiˈeɪʃn/", desc: "Correct word sounds" },
            { icon: "🎭", name: "Intonation", symbol: "↗️↘️", desc: "Voice pitch changes" },
            { icon: "⏱️", name: "Stress", symbol: "COM-puter", desc: "Emphasized syllables" },
            { icon: "🧠", name: "Fluency", symbol: "Smooth flow", desc: "Natural speech" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm font-mono">{item.symbol}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 bg-indigo-50 p-4 rounded-xl">
          <p className="font-medium text-indigo-700 flex items-center gap-2">
            <FiAward className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Think of Oral English like <span className="font-bold">Afrobeats rhythm</span> - 
            correct stress is like the drum pattern, intonation is like the melody, 
            and fluency is like Burna Boy's smooth delivery!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "The 4 Pillars of Speaking Well",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Pronunciation */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🗣️</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiVolume2 />
              Pronunciation - Sound Like a Pro
            </h3>
          </div>
          <p>Nigerians often mispronounce words due to mother tongue influence. Fix these common errors:</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-medium text-green-700">✅ Correct:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Chair /tʃɛː/ (not 'sha')",
                  "Very /ˈvɛri/ (not 'bery')",
                  "Six /sɪks/ (not 'siks')"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="font-medium text-red-700">❌ Nigerian Errors:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Fork as 'fok' (missing /r/)",
                  "Girl as 'gel'",
                  "Thirty as 'toti'"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500">✖</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Intonation */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🎭</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiMessageSquare />
              Intonation - The Music of Speech
            </h3>
          </div>
          <p>Your voice should rise and fall like Fuji music, not flat like stale puff-puff!</p>
          
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-medium text-blue-700">Patterns to Master:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { title: "Questions", example: "Are you ↗coming?" },
                { title: "Statements", example: "I'm going ↘home." },
                { title: "Lists", example: "I need books, ↗pens, and ↘paper." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded shadow-xs">
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs mt-1">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stress */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⏱️</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiAlertCircle />
              Word Stress - The Rhythm Key
            </h3>
          </div>
          <p>English is stress-timed, unlike Nigerian languages which are syllable-timed.</p>
          
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-purple-50 p-3 rounded-lg">
              <p className="font-medium text-purple-700">✅ Correct Stress:</p>
              <div className="mt-2 p-2 bg-white rounded">
                <p>• <span className="font-bold">COM</span>puter (not comPUTer)</p>
                <p>• <span className="font-bold">PHO</span>tograph (not phoTOgraph)</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-700">🚫 Nigerian Errors:</p>
              <div className="mt-2 p-2 bg-white rounded">
                <p>• "MainTAIN" (should be mainTAIN)</p>
                <p>• "SUNday" (should be SUNday)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fluency */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧠</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiMic />
              Fluency - Speak Like Flowing Omi
            </h3>
          </div>
          <p>Connect words naturally without unnecessary pauses or "ehn", "abi", "you know"</p>
          
          <div className="mt-4 bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
            <p className="font-bold text-green-700">Fluency Boosters:</p>
            <ul className="mt-3 space-y-3">
              {[
                { tip: "Practice tongue twisters", example: "She sells seashells" },
                { tip: "Record yourself speaking", example: "Listen for breaks" },
                { tip: "Shadow news anchors", example: "Repeat after Channels TV" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-xl">💡</span>
                  <div>
                    <p className="font-medium">{item.tip}</p>
                    <p className="text-xs text-gray-600">{item.example}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Common Nigerian Errors",
    icon: <FiAlertCircle className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        {/* Consonant Clusters */}
        <div className="bg-red-100 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🚨</span>
            <h3 className="font-bold text-xl">
              Consonant Cluster Crimes!
            </h3>
          </div>
          <p>Nigerian languages avoid consonant clusters, leading to "grammar robbery" in English!</p>
          
          <div className="mt-4 bg-white p-4 rounded-lg">
            <p className="font-medium text-red-700">❌ Common Errors:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              {[
                { word: "Street", error: "Sitrit" },
                { word: "Plumber", error: "Pomber" },
                { word: "Script", error: "Sikrit" }
              ].map((item, i) => (
                <div key={i} className="bg-red-50 p-3 rounded">
                  <p className="font-bold">Correct: <span className="text-green-600">{item.word}</span></p>
                  <p className="text-sm mt-1">Nigerian: {item.error}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vowel Problems */}
        <div className="bg-purple-100 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔊</span>
            <h3 className="font-bold text-xl">
              Vowel Sound Battles
            </h3>
          </div>
          
          <div className="mt-4 space-y-4">
            {[
              {
                sound: "/æ/ as in 'cat'",
                error: "Pronounced as /a/ like 'cart'",
                example: "Bad → 'bard'"
              },
              {
                sound: "/ɪ/ as in 'sit'",
                error: "Pronounced as /i/ like 'seat'",
                example: "Ship → 'sheep'"
              },
              {
                sound: "/ʌ/ as in 'cup'",
                error: "Pronounced as /ɔ/ like 'cop'",
                example: "Cut → 'cot'"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-3 rounded-lg border border-purple-200"
              >
                <div className="flex gap-4">
                  <div className="text-red-500 font-bold">❌ {item.error}</div>
                  <div className="text-green-500 font-bold">✅ {item.sound}</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Example: {item.example}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silent Letters */}
        <div className="bg-blue-50 p-4 rounded-xl mt-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🤫</span>
            <h3 className="font-bold text-xl">
              Silent Letter Surprises
            </h3>
          </div>
          <p>English loves hiding letters - don't pronounce what you see!</p>
          
          <div className="mt-4 space-y-4">
            {[
              {
                word: "Wednesday",
                tip: "Pronounced 'Wenz-day'"
              },
              {
                word: "Debt",
                tip: "Pronounced 'det' (silent b)"
              },
              {
                word: "Honest",
                tip: "Pronounced 'on-est' (silent h)"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium">Word:</p>
                <p className="font-mono bg-gray-100 p-2 rounded mt-1">{item.word}</p>
                <p className="mt-2 text-sm text-blue-600">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Post-UTME Oral Drills",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full p-4 mb-6"
        >
          <FiMic className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ace Your Oral English Test! 🎤
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Practice with these post-UTME focused exercises to sound like a BBC newsreader!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {[
            { 
              title: "Tongue Twisters", 
              value: "10+", 
              icon: "🌀", 
              color: "text-purple-600",
              desc: "Improve articulation" 
            },
            { 
              title: "Minimal Pairs", 
              value: "50+", 
              icon: "👂", 
              color: "text-yellow-500",
              desc: "Distinguish similar sounds" 
            },
            { 
              title: "Exam Samples", 
              value: "UNILAG, UI, OAU", 
              icon: "🏫", 
              color: "text-green-600",
              desc: "Real school patterns" 
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
        
        <div className="bg-indigo-50 p-6 rounded-xl max-w-3xl mx-auto text-left">
          <h3 className="font-bold text-xl mb-4">🎯 Post-UTME Oral Exam Format:</h3>
          <ul className="space-y-3">
            {[
              "Reading passage aloud (assessed on pronunciation)",
              "Answering comprehension questions (fluency & grammar)",
              "Word pronunciation test (vowel/consonant sounds)",
              "Conversational English (natural speech)"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="bg-indigo-600 text-white rounded-full p-1">
                  <FiVolume2 className="text-xs" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Start Speaking Drill
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Features common words from past post-UTME exams across Nigerian universities!
        </p>
      </div>
    )
  }
];