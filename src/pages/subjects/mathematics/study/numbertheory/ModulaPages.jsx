import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const ModularArithmeticPage = [
  {
    title: "⏰ Modular Arithmetic: Telling Time & Remainders",
    icon: <FiBook className="text-blue-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Ever wondered why 9 am plus 6 hours is 3 pm, not 15 pm? That's modular arithmetic! It's "clock arithmetic," where numbers wrap around after a certain value called the <span className="font-bold">modulus</span>. It's all about the remainder after division. Get ready to master this simple but powerful concept. ⏱️
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">💡 The Main Idea:</span> <span className="font-mono">a ≡ b (mod n)</span> means 'a' and 'b' have the same remainder when divided by 'n'.
          </p>
          <p className="mt-2 text-sm">
            <span className="font-mono">15 ≡ 3 (mod 12)</span> because 15 divided by 12 leaves a remainder of 3. Just like your 12-hour clock! 🕰️
          </p>
        </div>
      </div>
    )
  },
  {
    title: "➕➖ Solving Modular Equations",
    icon: <FiEdit className="text-purple-600" />,
    content: (
      <div className="space-y-8">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">➕</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              Addition & Subtraction
            </h3>
          </div>
          <p>
            Just add or subtract the numbers, then find the remainder when you divide by the modulus.
          </p>
          <div className="mt-4 bg-purple-50 p-3 rounded-lg">
            <p className="font-medium text-purple-700"><strong>Example:</strong> Find the value of <span className="font-mono">7 + 9 (mod 10)</span>.</p>
            <p className="mt-2 text-sm font-mono">
              <span className="font-mono">7 + 9 = 16.</span><br />
              <span className="font-mono">16 ÷ 10 = 1 R 6.</span><br />
              So, <span className="font-bold">7 + 9 ≡ 6 (mod 10)</span>.
            </p>
          </div>
        </div>
        
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✖️</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              Multiplication
            </h3>
          </div>
          <p>
            Multiply the numbers first, then take the remainder.
          </p>
          <div className="mt-4 bg-purple-50 p-3 rounded-lg">
            <p className="font-medium text-purple-700"><strong>Example:</strong> Find the value of <span className="font-mono">4 × 5 (mod 6)</span>.</p>
            <p className="mt-2 text-sm font-mono">
              <span className="font-mono">4 × 5 = 20.</span><br />
              <span className="font-mono">20 ÷ 6 = 3 R 2.</span><br />
              So, <span className="font-bold">4 × 5 ≡ 2 (mod 6)</span>.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🔑 Modular Inverses & Congruences",
    icon: <FiZap className="text-red-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100">
          <h3 className="font-bold text-lg text-red-800">What is a Modular Inverse?</h3>
          <p className="mt-2">
            The inverse of 'a' (mod n) is a number 'x' that makes <span className="font-mono">ax ≡ 1 (mod n)</span>. Think of it as the opposite of 'a'. An inverse only exists if 'a' and 'n' don't have a common factor greater than 1.
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> Find the inverse of <span className="font-mono">3 (mod 5)</span>.</p>
            <p className="font-mono text-xs mt-1">
              We need <span className="font-mono">3x ≡ 1 (mod 5)</span>.<br />
              Try x=2: <span className="font-mono">3 × 2 = 6 ≡ 1 (mod 5)</span>. The inverse is <span className="font-bold">2</span>.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🌟 Real-World Applications",
    icon: <FiAward className="text-green-600" />,
    content: (
      <div className="space-y-6 text-center py-8">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block bg-gradient-to-r from-green-500 to-teal-600 rounded-full p-4 mb-4"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Master the Modulo! 🎓
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Modular arithmetic isn't just for tests; it's used in cryptography, computer science, and even the calendar on your phone. It's a key part of your post-UTME!
        </p>
        <div className="bg-green-50 p-4 rounded-xl">
          <p className="font-medium text-green-700">🗓️ Calendar Example:</p>
          <p className="mt-2 text-sm">
            If a 40-day course starts on a Tuesday, on which day will it end?
            <br />
            There are 7 days in a week, so we use <span className="font-mono">mod 7</span>.
            <br />
            <span className="font-mono">40 ÷ 7 = 5 R 5</span>.
            <br />
            Count 5 days after Tuesday: Wednesday, Thursday, Friday, Saturday, <span className="font-bold">Sunday</span>.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Start Your Modular Drills!
        </motion.button>
      </div>
    )
  }
];