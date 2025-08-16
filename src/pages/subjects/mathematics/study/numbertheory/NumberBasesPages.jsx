import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const NumberBasesPage = [
  {
    title: "🧠 Number Bases: Counting Beyond Base 10",
    icon: <FiBook className="text-blue-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          You've been counting in base 10 your whole life without even thinking about it! 🤔 Number bases are just different ways of counting. The base tells you how many unique digits you have before you carry over to the next place value. Your phone, laptop, and most electronics work with base 2 (binary). So let's get into it! 💻
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">✨ Fun Fact:</span> In base 10, when you see the number 125, it's really <span className="font-mono">1×10² + 2×10¹ + 5×10⁰</span>. Every other base works exactly like this, just with a different power!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: "0️⃣1️⃣", title: "Base 2 (Binary)", desc: "Uses only two digits: 0 and 1. The language of computers!" },
            { icon: "0-7", title: "Base 8 (Octal)", desc: "Uses digits from 0 to 7." },
            { icon: "0-9,A-F", title: "Base 16 (Hexadecimal)", desc: "Uses digits 0-9 and letters A-F. A=10, B=11, and so on." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "🔄 Conversion: The A-B-C of Number Bases",
    icon: <FiZap className="text-green-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">➡️🔟</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              To Base 10 (Expansion Method)
            </h3>
          </div>
          <p>
            To convert any number to base 10, just expand it using powers of its base and add them all up. It's like deconstructing a number to see what it's truly made of.
          </p>
          <div className="mt-4 bg-green-50 p-3 rounded-lg">
            <p className="font-medium text-green-700"><strong>Example:</strong> Convert <span className="font-mono">1101₂</span> to base 10.</p>
            <p className="mt-2 text-sm font-mono">
              (1 × 2³) + (1 × 2²) + (0 × 2¹) + (1 × 2⁰) = 8 + 4 + 0 + 1 = <span className="font-bold">13₁₀</span>.
            </p>
          </div>
        </div>
        
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔟➡️</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              From Base 10 (Repeated Division)
            </h3>
          </div>
          <p>
            To convert from base 10 to any other base, you repeatedly divide the number by the new base and write down the remainders from bottom to top. It's like a reverse puzzle! 🧩
          </p>
          <div className="mt-4 bg-green-50 p-3 rounded-lg">
            <p className="font-medium text-green-700"><strong>Example:</strong> Convert <span className="font-mono">25₁₀</span> to base 2.</p>
            <p className="mt-2 text-sm font-mono">
              25 ÷ 2 = 12 R 1<br />
              12 ÷ 2 = 6 R 0<br />
              6 ÷ 2 = 3 R 0<br />
              3 ÷ 2 = 1 R 1<br />
              1 ÷ 2 = 0 R 1<br />
              Read from bottom-up: <span className="font-bold">11001₂</span>. ✅
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🧮 Operations in Other Bases",
    icon: <FiList className="text-purple-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-purple-50 p-4 rounded-xl shadow-sm border border-purple-100">
          <h3 className="font-bold text-lg text-purple-800">Addition & Subtraction</h3>
          <p className="mt-2">
            The rules are the same as base 10, but you carry over or borrow in multiples of the base you're in. For example, in base 2, 1+1 = 10₂ (a two, or "one-zero").
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> Add <span className="font-mono">1011₂ + 110₂</span></p>
            <p className="font-mono text-xs mt-1">
              &nbsp;&nbsp;1011₂<br />
              +&nbsp;&nbsp;110₂<br />
              -------<br />
              <span className="font-bold">&nbsp;10001₂</span> 
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🚀 Conquer Number Base Questions!",
    icon: <FiAward className="text-yellow-600" />,
    content: (
      <div className="space-y-6 text-center py-8">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full p-4 mb-4"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Become a Number Base Master! 🔢
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Number base questions are a sure bet in your post-UTME exams. Practice conversions and arithmetic to secure those easy marks!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Your Number Base Drills!
        </motion.button>
      </div>
    )
  }
];