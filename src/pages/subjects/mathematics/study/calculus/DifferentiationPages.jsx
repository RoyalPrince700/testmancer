import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const DifferentiationPage = [
  {
    title: "📈 Differentiation: Finding the Slope of a Curve",
    icon: <FiZap className="text-purple-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Differentiation is a core part of calculus and a must-know for your POST-UTME! It's simply the process of finding the <span className="font-bold text-purple-700">rate of change</span> of a function. Think of it as finding the slope of a curve at a single, exact point. This new function is called the <span className="font-bold">derivative</span>. It's like finding a car's speed at a specific moment, not just its average speed. 🚗💨
        </p>
        
        <div className="bg-purple-50 p-4 rounded-xl shadow-sm border border-purple-100">
          <h3 className="font-bold text-lg text-purple-800 flex items-center gap-2">
            <FiThumbsUp /> The Power Rule: Your Secret Weapon
          </h3>
          <p className="mt-2">
            This is the king of all differentiation rules! For any term like <span className="font-mono">axⁿ</span>, you just multiply the power by the coefficient and subtract one from the power.
          </p>
          <p className="font-mono text-sm bg-gray-100 p-2 rounded block mt-2">
            If y = axⁿ, then dy/dx = n·axⁿ⁻¹
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> Differentiate <span className="font-mono">y = 3x²</span></p>
            <p className="font-mono text-xs mt-1">
              dy/dx = 2·3x²⁻¹ = 6x¹ = 6x. Simple! 😊
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "📐 Essential Differentiation Rules",
    icon: <FiList className="text-blue-600" />,
    content: (
      <div className="space-y-8">
        {[
          {
            title: "Constant Rule",
            rule: "If y = c, then dy/dx = 0",
            explanation: "The derivative of any constant is zero. A flat line has no slope! 📏",
            examples: ["If y = 10, dy/dx = 0", "If y = -2.5, dy/dx = 0"]
          },
          {
            title: "Sum and Difference Rule",
            rule: "If y = f(x) ± g(x), then dy/dx = f'(x) ± g'(x)",
            explanation: "Differentiate each term separately and then add or subtract them. It's like doing a math chore, one piece at a time. 🧹",
            examples: ["If y = x³ + 2x² - 5, dy/dx = 3x² + 4x"]
          },
          {
            title: "Product Rule",
            rule: "If y = uv, then dy/dx = u(dv/dx) + v(du/dx)",
            explanation: "For a product of two functions, remember 'u dv plus v du'. 🤝",
            examples: ["Differentiate y = (x²)(x+1) ➡️ dy/dx = 3x² + 2x"]
          },
          {
            title: "Quotient Rule",
            rule: "If y = u/v, then dy/dx = [v(du/dx) - u(dv/dx)] / v²",
            explanation: "For a fraction, remember 'v du minus u dv, all over v squared'. Don't forget the minus! 😱",
            examples: ["Differentiate y = x/(x+1) ➡️ dy/dx = 1/(x+1)²"]
          },
          {
            title: "Chain Rule",
            rule: "If y = f(g(x)), then dy/dx = f'(g(x)) · g'(x)",
            explanation: "For a function inside a function, differentiate the 'outside' first, then multiply by the derivative of the 'inside'. It's a chain reaction! 🔗",
            examples: ["Differentiate y = (2x+1)³ ➡️ dy/dx = 6(2x+1)²"]
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl shadow-md border border-gray-100"
          >
            <h4 className="font-bold text-lg text-blue-700">{item.title}</h4>
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
    title: "🎢 Advanced Differentiation & Applications",
    icon: <FiStar className="text-yellow-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm border border-yellow-100">
          <h3 className="font-bold text-lg text-yellow-800">Second-Order Derivatives</h3>
          <p className="mt-2">
            This is the derivative of the derivative! It's written as <span className="font-mono">d²y/dx²</span> and is a powerful tool for finding maximum and minimum points.
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> If y = x³ + 2x² - 5</p>
            <p className="font-mono text-xs mt-1">
              First derivative: <span className="font-mono">dy/dx = 3x² + 4x</span><br />
              Second derivative: <span className="font-mono">d²y/dx² = 6x + 4</span>
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm border border-yellow-100">
          <h3 className="font-bold text-lg text-yellow-800">Finding Max and Min Points</h3>
          <p className="mt-2">
            At a turning point (max/min), the slope is zero!
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            <li><strong>Step 1:</strong> Find dy/dx and set it to 0.</li>
            <li><strong>Step 2:</strong> Solve for x.</li>
            <li><strong>Step 3:</strong> Use the second derivative test to know if it's a max or min.</li>
          </ul>
          <p className="mt-2 font-bold text-yellow-700">Test:</p>
          <ul className="list-disc list-inside text-sm">
            <li><span className="font-mono">d²y/dx² {'>'} 0</span> ➡️ It's a minimum point. 😄</li>
            <li><span className="font-mono">d²y/dx² {'<'} 0</span> ➡️ It's a maximum point. 😟</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "🎯 Real-World Applications",
    icon: <FiAward className="text-green-600" />,
    content: (
      <div className="space-y-6 text-center py-8">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block bg-gradient-to-r from-green-500 to-teal-600 rounded-full p-4 mb-4"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Become a Calculus Pro! 🧠
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Differentiation is used in physics, engineering, and economics to solve problems about rates of change and optimization. It's a true power skill!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Your Practice Drill!
        </motion.button>
      </div>
    )
  }
];