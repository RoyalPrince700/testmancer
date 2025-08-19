import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const ConstitutionLawPage = [
  {
    title: "📜 What is the Nigerian Constitution?",
    icon: <FiBook className="text-purple-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          The Nigerian Constitution is like the ultimate rulebook for the country! 🇳🇬 It's the supreme law that tells everyone—from the President to the average citizen—what they can and can't do. Acing this topic for your Post-UTME shows you're a serious student and a knowledgeable future leader! 🚀
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">📚 Did you know?</span> 
            The current constitution is the <span className="font-bold text-blue-700">1999 Constitution of the Federal Republic of Nigeria</span>. Before this, Nigeria had other constitutions after independence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: "🏛️", skill: "Supreme Law", meaning: "No other law can override it.", desc: "The Boss of all laws!" },
            { icon: "🛡️", skill: "Protects Rights", meaning: "Guarantees your fundamental human rights.", desc: "Your personal shield!" }
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
        
        <div className="mt-8 bg-purple-50 p-4 rounded-xl">
          <p className="font-medium text-purple-700 flex items-center gap-2">
            <FiStar className="text-yellow-500" />
            Pro Tip:
          </p>
          <p className="mt-2">
            Think of the constitution as the <span className="font-bold">blueprint for Nigeria</span>. Knowing its key parts will help you answer tricky questions in your exam. 🧠
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Fundamental Human Rights",
    icon: <FiAward className="text-purple-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🛡️</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              <FiCheckCircle />
              Your Rights as a Citizen
            </h3>
          </div>
          <p>
            The constitution guarantees a bunch of rights for you! These are super important for your Post-UTME. Let's look at some of the most common ones. 🤝
          </p>
          
          <div className="mt-4 space-y-3">
            {[
              { icon: "🗣️", right: "Right to Freedom of Expression", detail: "You can share your thoughts freely (but no fake news! 😉)" },
              { icon: "🏃", right: "Right to Freedom of Movement", detail: "You can travel anywhere within Nigeria." },
              { icon: "❤️", right: "Right to Life", detail: "The most basic right. Everyone has a right to live." },
              { icon: "🤝", right: "Right to Fair Hearing", detail: "You have a right to a fair trial if you are accused of something." }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="bg-green-50 p-3 rounded-lg flex items-start gap-3"
              >
                <span className="text-xl mt-1">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-green-800">{item.right}</h4>
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
    title: "Separation of Powers",
    icon: <FiZap className="text-purple-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-yellow-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⚖️</span>
            <h3 className="font-bold text-xl">
              The Three Arms of Government
            </h3>
          </div>
          <p>
            Ever heard of the 'separation of powers'? It's like having three different teams in government, each with its own job so one team doesn't become too powerful. 💪
          </p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { arm: "Legislature", role: "Makes the laws. (e.g., National Assembly)", emoji: "📝" },
              { arm: "Executive", role: "Carries out the laws. (e.g., The President)", emoji: "💼" },
              { arm: "Judiciary", role: "Interprets and enforces the laws. (e.g., The Supreme Court)", emoji: "👩‍⚖️" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-md text-center"
              >
                <span className="text-3xl block mb-2">{item.emoji}</span>
                <h4 className="font-bold text-gray-800">{item.arm}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Citizenship in Nigeria",
    icon: <FiHeart className="text-purple-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-pink-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🌍</span>
            <h3 className="font-bold text-xl">
              Who is a Nigerian?
            </h3>
          </div>
          <p>
            The constitution explains different ways a person can become a Nigerian citizen. It's not just about being born here! 👣
          </p>
          
          <div className="mt-4 space-y-4">
            {[
              { type: "By Birth", detail: "If your parents or grandparents are Nigerian citizens.", icon: "👶" },
              { type: "By Registration", detail: "If you're a foreign woman married to a Nigerian man, or a person who has lived in Nigeria for 15+ years.", icon: "✍️" },
              { type: "By Naturalization", detail: "If you're a non-Nigerian who has met certain conditions, like living in Nigeria for a long time.", icon: "📜" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-800">{item.type}</h4>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Practice Makes Perfect! 🎯",
    icon: <FiThumbsUp className="text-purple-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full p-4 mb-6"
        >
          <FiZap className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Test Your Constitution Knowledge!
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Ready to be a constitutional guru? Try these practice questions! 🤔
        </p>
        
        <div className="bg-purple-50 p-4 rounded-xl mt-6 space-y-4">
          {[
            { 
              question: "Which document is the supreme law of Nigeria?", 
              answer: "The Constitution of the Federal Republic of Nigeria 📜" 
            },
            { 
              question: "What is the primary function of the Judiciary arm of government?", 
              answer: "To interpret and enforce the laws ⚖️" 
            },
            { 
              question: "The right to freedom of expression is an example of what type of right?", 
              answer: "A fundamental human right 🛡️" 
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
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Take Full Constitution Quiz
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Master this topic and get ready to smash your Post-UTME! You got this! 🎉
        </p>
      </div>
    )
  }
];