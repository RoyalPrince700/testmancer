import { FiBook, FiStar, FiMessageSquare, FiHeart, FiZap, FiThumbsUp, FiEdit, FiAward, FiAlertCircle, FiList, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export const NigeriaStatesPage = [
  {
    title: "📍 A Tour of Nigeria: States & Capitals",
    icon: <FiBook className="text-green-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Nigeria is a vibrant, bustling country, split into 36 states and a Federal Capital Territory (FCT). Knowing each state and its capital is like knowing your favorite Nollywood stars—you can’t call yourself a true fan without it! 🎬🇳🇬
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">Did you know?</span> 
            Nigeria started with just three regions in 1960, but like a growing jollof rice pot, it expanded to 12, 19, 21, and now 36 states! 🍲🗺️
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: "🌐", skill: "Geography", meaning: "Helps you navigate Nigeria's colorful political map.", desc: "Map it like a pro!" },
            { icon: "🎓", skill: "General Knowledge", meaning: "A must-know for every proud Nigerian student.", desc: "Brainy vibes only! 🧠" }
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
        
        <div className="mt-8 bg-green-50 p-4 rounded-xl">
          <p className="font-medium text-green-700 flex items-center gap-2">
            <FiStar className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Don’t just memorize! Link each state with its capital and a fun fact—like Lagos being the "Centre of Excellence" or the home of afrobeats! 🎶⭐
          </p>
        </div>
      </div>
    )
  },
  {
    title: "States & Their Capitals (Alphabetical Order)",
    icon: <FiList className="text-green-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📋</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiCheckCircle />
              The Full List!
            </h3>
          </div>
          <p>
            Check out the complete lineup of Nigeria’s 36 states and their capitals—think of it as the ultimate Naija playlist! 🎵🏆
          </p>
          
          <div className="mt-4 bg-gray-50 p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { state: "Abia", capital: "Umuahia" },
              { state: "Adamawa", capital: "Yola" },
              { state: "Akwa Ibom", capital: "Uyo" },
              { state: "Anambra", capital: "Awka" },
              { state: "Bauchi", capital: "Bauchi" },
              { state: "Bayelsa", capital: "Yenagoa" },
              { state: "Benue", capital: "Makurdi" },
              { state: "Borno", capital: "Maiduguri" },
              { state: "Cross River", capital: "Calabar" },
              { state: "Delta", capital: "Asaba" },
              { state: "Ebonyi", capital: "Abakaliki" },
              { state: "Edo", capital: "Benin City" },
              { state: "Ekiti", capital: "Ado-Ekiti" },
              { state: "Enugu", capital: "Enugu" },
              { state: "Gombe", capital: "Gombe" },
              { state: "Imo", capital: "Owerri" },
              { state: "Jigawa", capital: "Dutse" },
              { state: "Kaduna", capital: "Kaduna" },
              { state: "Kano", capital: "Kano" },
              { state: "Katsina", capital: "Katsina" },
              { state: "Kebbi", capital: "Birnin Kebbi" },
              { state: "Kogi", capital: "Lokoja" },
              { state: "Kwara", capital: "Ilorin" },
              { state: "Lagos", capital: "Ikeja" },
              { state: "Nasarawa", capital: "Lafia" },
              { state: "Niger", capital: "Minna" },
              { state: "Ogun", capital: "Abeokuta" },
              { state: "Ondo", capital: "Akure" },
              { state: "Osun", capital: "Osogbo" },
              { state: "Oyo", capital: "Ibadan" },
              { state: "Plateau", capital: "Jos" },
              { state: "Rivers", capital: "Port Harcourt" },
              { state: "Sokoto", capital: "Sokoto" },
              { state: "Taraba", capital: "Jalingo" },
              { state: "Yobe", capital: "Damaturu" },
              { state: "Zamfara", capital: "Gusau" },
              { state: "FCT", capital: "Abuja" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-3 rounded-lg shadow-sm text-center"
              >
                <h4 className="font-bold text-green-800">{item.state}</h4>
                <p className="text-sm font-mono text-gray-700">{item.capital}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "States Slogans, Unique Features & Famous Foods 🍲",
    icon: <FiAward className="text-green-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-orange-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⭐</span>
            <h3 className="font-bold text-xl">
              More Than Just a Name! 😎
            </h3>
          </div>
          <p>
            Every state in Nigeria has its own vibe, from catchy slogans to unique features and mouthwatering dishes that’ll make your taste buds dance! 🕺 Knowing these will spice up your Post-UTME prep! 🌶️
          </p>
          
          <div className="mt-4 space-y-4">
            {[
              { 
                state: "Abia", 
                slogan: "God's Own State", 
                feature: "Known for commerce and the bustling Ariaria International Market.", 
                food: "Ugba (oil bean salad) - a spicy, fermented delight! 🥗" 
              },
              { 
                state: "Lagos", 
                slogan: "Centre of Excellence", 
                feature: "The commercial hub of Nigeria and birthplace of afrobeats.", 
                food: "Ewa Agoyin - mashed beans with a fiery stew that’s pure Lagos! 🌮" 
              },
              { 
                state: "Oyo", 
                slogan: "Pacesetter State", 
                feature: "Home to the first university in Nigeria, the University of Ibadan.", 
                food: "Amala and Gbegiri - a soul-warming combo you can’t resist! 🍲" 
              },
              { 
                state: "Kano", 
                slogan: "Centre of Commerce", 
                feature: "A historic city and major trade center in Northern Nigeria.", 
                food: "Suya - spicy, skewered meat that’s a Northern classic! 🍡" 
              },
              { 
                state: "Plateau", 
                slogan: "Home of Peace and Tourism", 
                feature: "Famous for its cool weather and stunning rock formations.", 
                food: "Pounded Yam with Egusi - a hearty meal with a view! 🥣" 
              },
              { 
                state: "Rivers", 
                slogan: "Treasure Base of the Nation", 
                feature: "A major hub for Nigeria’s oil and gas industry.", 
                food: "Banga Soup - a rich, palm nut stew with seafood vibes! 🦐" 
              },
              { 
                state: "Osun", 
                slogan: "State of the Living Spring", 
                feature: "Known for the Osun-Osogbo Sacred Grove, a UNESCO World Heritage Site.", 
                food: "Iyan (pounded yam) with Vegetable Soup - a Yoruba staple! 🍠" 
              },
              { 
                state: "Cross River", 
                slogan: "The People's Paradise", 
                feature: "Home to the Obudu Cattle Ranch and Tinapa Resort.", 
                food: "Edikang Ikong - a veggie-packed soup that’s pure comfort! 🥬" 
              },
              { 
                state: "Anambra", 
                slogan: "Light of the Nation", 
                feature: "Known for its entrepreneurial spirit and Onitsha Main Market.", 
                food: "Ofe Nsala - a spicy, white soup that’s an Igbo favorite! 🍜" 
              },
              { 
                state: "Edo", 
                slogan: "Heart Beat of Nigeria", 
                feature: "Home to the ancient Benin Kingdom and its iconic bronze artworks.", 
                food: "Ukodo - a yam and plantain pepper soup that’s pure bliss! 🍠🌶️" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <h4 className="font-bold text-orange-800 flex items-center gap-2">
                  {item.state} <FiHeart className="text-pink-500" />
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold">Slogan:</span> "{item.slogan}"
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold">Unique Feature:</span> {item.feature}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold">Famous Food:</span> {item.food}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Quiz Time! 🧠",
    icon: <FiThumbsUp className="text-green-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block bg-gradient-to-r from-green-500 to-indigo-600 rounded-full p-4 mb-6"
        >
          <FiEdit className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Test Your Naija Knowledge! 🇳🇬
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Ready to show you’re the ultimate Naija geography guru? Tackle these questions and flex your brain! 🧐💪
        </p>
        
        <div className="bg-green-50 p-4 rounded-xl mt-6 space-y-4">
          {[
            { 
              question: "What is the capital of Osun State?", 
              answer: "Osogbo 🌳" 
            },
            { 
              question: "What is the slogan of Lagos State?", 
              answer: "Centre of Excellence ⭐" 
            },
            { 
              question: "Which state is famous for Edikang Ikong soup?", 
              answer: "Cross River State 🥬" 
            },
            { 
              question: "Which state is known as the 'Heart Beat of Nigeria'?", 
              answer: "Edo State ❤️" 
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
          className="bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Take Full States, Foods & Capitals Quiz
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Nail this list, and you’re ready to shine in your Post-UTME like a true Naija star! 🌟🚀
        </p>
      </div>
    )
  }
];