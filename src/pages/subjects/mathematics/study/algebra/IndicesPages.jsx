import { FiBook, FiStar, FiMessageSquare, FiHeart, FiZap, FiThumbsUp, FiEdit, FiAward, FiAlertCircle, FiList, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export const IndicesAndLogarithmsPage = [
  {
    title: "🚀 Indices & Logarithms: Your Math Superpower!",
    icon: <FiZap className="text-purple-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Hey there! Welcome to Indices and Logarithms, your secret trick to make big numbers super easy! Think of it like a cheat code in a video game that helps you solve math problems fast. No stress, just fun! 😎
        </p>

        <div className="bg-green-50 p-4 rounded-xl shadow-sm border border-green-100">
          <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">
            <FiThumbsUp /> What Are Indices (Powers)?
          </h3>
          <p className="mt-2">
            Indices are like a shortcut for multiplying a number by itself. Instead of writing <span className="font-mono bg-gray-100 px-1 rounded">2 × 2 × 2</span>, you write <span className="font-mono bg-gray-100 px-1 rounded">2³</span>. The <strong>2</strong> is the base (the number you multiply), and the <strong>3</strong> is the index (how many times you multiply it). It’s like stacking blocks! 🧱
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-medium text-gray-700"><strong>Examples:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><span className="font-mono">2³ = 2 × 2 × 2 = 8</span> (like 3 stacks of 2 blocks)</li>
              <li><span className="font-mono">4² = 4 × 4 = 16</span> (like 2 stacks of 4 cookies)</li>
              <li><span className="font-mono">x³ = x × x × x</span> (x multiplied 3 times)</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "📚 The Seven Rules of Indices",
    icon: <FiList className="text-blue-600" />,
    content: (
      <div className="space-y-8">
        {[
          {
            title: "Rule 1: Multiplying (Add the Powers)",
            rule: "aᵐ × aⁿ = aᵐ⁺ⁿ",
            explanation: "When you multiply numbers with the same base, just add their powers. It’s like combining two teams of dancers! 💃",
            examples: ["2³ × 2² = 2⁵ = 32 (3 + 2 = 5)", "x² × x³ = x⁵", "5² × 5¹ = 5³ = 125"]
          },
          {
            title: "Rule 2: Dividing (Subtract the Powers)",
            rule: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
            explanation: "When dividing numbers with the same base, subtract the bottom power from the top. Like giving away some plates of jollof rice! 🍚",
            examples: ["5⁴ ÷ 5² = 5² = 25 (4 - 2 = 2)", "x⁵ ÷ x² = x³", "10⁶ ÷ 10³ = 10³ = 1000"]
          },
          {
            title: "Rule 3: Power of a Power (Multiply Powers)",
            rule: "(aᵐ)ⁿ = aᵐ×ⁿ",
            explanation: "If a number with a power gets another power, multiply the powers. Like doubling your candy stash! 🍬",
            examples: ["(2²)³ = 2⁶ = 64 (2 × 3 = 6)", "(x³)² = x⁶", "(3²)² = 3⁴ = 81"]
          },
          {
            title: "Rule 4: Power of a Product (Share the Power)",
            rule: "(ab)ⁿ = aⁿ × bⁿ",
            explanation: "If a product has a power, give that power to each part. Like sharing a dance move with everyone! 🕺",
            examples: ["(2x)² = 2² × x² = 4x²", "(3y)³ = 3³ × y³ = 27y³", "(2 × 5)² = 2² × 5² = 100"]
          },
          {
            title: "Rule 5: Power of a Fraction (Raise Both Parts)",
            rule: "(a/b)ⁿ = aⁿ / bⁿ",
            explanation: "If a fraction has a power, raise both the top and bottom to that power. Like splitting a pizza! 🍕",
            examples: ["(2/3)² = 2²/3² = 4/9", "(x/y)³ = x³/y³", "(1/2)³ = 1/8"]
          },
          {
            title: "Rule 6: Zero Power (Always 1)",
            rule: "a⁰ = 1 (a ≠ 0)",
            explanation: "Any number (except 0) to the power of 0 is 1. It’s a math rule, like saying ‘no moves, you still get 1!’ 😜",
            examples: ["3⁰ = 1", "50⁰ = 1", "(4x)⁰ = 1"]
          },
          {
            title: "Rule 7: Negative & Fractional Powers",
            rule: "a⁻ⁿ = 1/aⁿ and aᵐ/ⁿ = ⁿ√(aᵐ)",
            explanation: "Negative power? Flip it to the bottom! Fractional power? The bottom number is the root, the top is the power. Like flipping a pancake or growing a plant! 🥞🌱",
            examples: ["2⁻² = 1/2² = 1/4", "8^(1/3) = ³√8 = 2", "9^(1/2) = √9 = 3"]
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl shadow-md border border-gray-100"
          >
            <h4 className="font-bold text-lg text-indigo-700">{item.title}</h4>
            <p className="font-mono text-sm bg-gray-100 p-2 rounded mt-2">{item.rule}</p>
            <p className="mt-2 text-gray-700">{item.explanation}</p>
            <div className="mt-3">
              <p className="font-medium text-gray-600"><strong>Examples:</strong></p>
              <ul className="list-disc list-inside text-sm">
                {item.examples.map((ex, i) => <li key={i}>{ex}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    title: "📈 Logarithms: The Undo Button",
    icon: <FiStar className="text-yellow-500" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Logarithms are like the “undo” button for indices. They help you find the <span className="font-bold text-yellow-700">power</span> needed to get a number. For example, if 2³ = 8, then <span className="font-mono">log₂8 = 3</span>. It’s like asking, “How many times do I multiply 2 to get 8?” Answer: 3! 😄
        </p>

        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm border border-yellow-100">
          <h3 className="font-bold text-lg text-yellow-800">
            Logarithm Examples:
          </h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Since <span className="font-mono">2⁴ = 16</span>, then <span className="font-mono">log₂16 = 4</span></li>
            <li>Since <span className="font-mono">10³ = 1000</span>, then <span className="font-mono">log₁₀1000 = 3</span></li>
            <li>Since <span className="font-mono">3² = 9</span>, then <span className="font-mono">log₃9 = 2</span></li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "🧠 The Four Rules of Logarithms",
    icon: <FiAward className="text-green-600" />,
    content: (
      <div className="space-y-8">
        {[
          {
            title: "Rule 1: Product Rule (Add Logs)",
            rule: "logᵦ(M × N) = logᵦM + logᵦN",
            explanation: "The log of a product is the sum of the logs. Like adding two plates of jollof rice! 🍲",
            examples: ["log₂(4 × 8) = log₂4 + log₂8 = 2 + 3 = 5", "log₁₀(10 × 100) = log₁₀10 + log₁₀100 = 1 + 2 = 3"]
          },
          {
            title: "Rule 2: Quotient Rule (Subtract Logs)",
            rule: "logᵦ(M / N) = logᵦM - logᵦN",
            explanation: "The log of a division is the difference of the logs. Like taking away some chin-chin! 🍪",
            examples: ["log₂(16/4) = log₂16 - log₂4 = 4 - 2 = 2", "log₁₀(100/10) = log₁₀100 - log₁₀10 = 2 - 1 = 1"]
          },
          {
            title: "Rule 3: Power Rule (Multiply Log by Power)",
            rule: "logᵦ(Mᵖ) = p × logᵦM",
            explanation: "If a number has a power, multiply the log by that power. Like doubling your dance moves! 💃",
            examples: ["log₂(4²) = 2 × log₂4 = 2 × 2 = 4", "log₁₀(10³) = 3 × log₁₀10 = 3 × 1 = 3"]
          },
          {
            title: "Rule 4: Special Logs & Change of Base",
            rule: "logᵦb = 1, logᵦ1 = 0, logᵦa = logₐa / logₐb",
            explanation: "Log of the base is 1, log of 1 is 0. To change the base, divide the logs. It’s like switching your game controller! 🎮",
            examples: ["log₅5 = 1", "log₁₀1 = 0", "log₂10 ≈ log₁₀10 / log₁₀2 ≈ 3.32"]
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl shadow-md border border-gray-100"
          >
            <h4 className="font-bold text-lg text-green-700">{item.title}</h4>
            <p className="font-mono text-sm bg-gray-100 p-2 rounded mt-2">{item.rule}</p>
            <p className="mt-2 text-gray-700">{item.explanation}</p>
            <div className="mt-3">
              <p className="font-medium text-gray-600"><strong>Examples:</strong></p>
              <ul className="list-disc list-inside text-sm">
                {item.examples.map((ex, i) => <li key={i}>{ex}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    title: "🏆 Become a Math Star!",
    icon: <FiAward className="text-yellow-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full p-4 mb-6"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          You’re Ready to Shine! 🌟
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          You’ve got the rules down! Now practice like you’re training for a dance battle. You’ll ace those Post-UTME questions like a pro! No wahala! 💪
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Start Practice Now!
        </motion.button>
        
        <p className="text-gray-600 max-w-2xl mx-auto mt-8">
          Keep practicing, and you’ll solve these like eating jollof rice—easy and sweet! 😋
        </p>
      </div>
    )
  }
];