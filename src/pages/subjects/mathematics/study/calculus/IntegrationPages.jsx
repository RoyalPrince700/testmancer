import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const IntegrationPage = [
  {
    title: "🌊 Integration: The Anti-Derivative & Area Under a Curve",
    icon: <FiBook className="text-blue-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Welcome to the reverse of differentiation! If differentiation is about finding the slope at a point, integration is about finding the original function and the <span className="font-bold text-blue-700">area under a curve</span>. It's like re-tracing your steps to find out where you started! 🗺️
        </p>
        
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 flex items-center gap-2">
            <FiThumbsUp /> Indefinite Integrals: The Reverse Power Rule
          </h3>
          <p className="mt-2">
            This is your first and most important tool. For a term like <span className="font-mono">xⁿ</span>, you add 1 to the power and divide by the new power. Don't forget the famous <span className="font-bold">+C</span>! It's the constant of integration, because any number becomes zero when you differentiate it.
          </p>
          <p className="font-mono text-sm bg-gray-100 p-2 rounded block mt-2">
            ∫xⁿdx = xⁿ⁺¹ / (n+1) + C
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> ∫x³dx</p>
            <p className="font-mono text-xs mt-1">
              Add 1 to the power (3+1=4) and divide by 4. <br />
              Answer: <span className="font-mono">x⁴/4 + C</span>
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "📏 Definite Integrals: Finding the Area",
    icon: <FiEdit className="text-green-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-green-50 p-4 rounded-xl shadow-sm border border-green-100">
          <h3 className="font-bold text-lg text-green-800">The Area Under the Curve</h3>
          <p className="mt-2">
            A definite integral has limits (like from a to b) and gives you a number, representing the exact area under the curve between those limits. The <span className="font-bold">+C</span> is not needed because it cancels out!
          </p>
          <p className="font-mono text-sm bg-gray-100 p-2 rounded block mt-2">
            ∫ₐᵇf(x)dx = [F(x)]ₐᵇ = F(b) - F(a)
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> Find the area under y=x² from x=1 to x=3.</p>
            <p className="font-mono text-xs mt-1">
              ∫₁³x²dx = [x³/3]₁³ = (3³/3) - (1³/3) = 9 - 1/3 = 8.67
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-xl shadow-sm border border-green-100">
          <h3 className="font-bold text-lg text-green-800">Area Between Two Curves</h3>
          <p className="mt-2">
            To find the area between two curves, you subtract the bottom curve from the top curve and integrate. Simple!
            <span className="font-mono text-sm bg-gray-100 p-2 rounded block mt-2">Area = ∫(y_top - y_bottom)dx</span>
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> Area between y=6x-x² and y=x²-2x.</p>
            <p className="font-mono text-xs mt-1">
              First, find where they meet (x=0, 4).<br />
              Then, integrate: ∫₀⁴[(6x-x²) - (x²-2x)]dx = 64/3.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🧮 Important Integration Rules",
    icon: <FiList className="text-purple-600" />,
    content: (
      <div className="space-y-8">
        {[
          {
            title: "Trigonometric Functions",
            rules: ["∫cosxdx = sinx + C", "∫sinxdx = -cosx + C"],
            tip: "Remember that the sign flips for sine! 🔄"
          },
          {
            title: "Exponential and Reciprocal Functions",
            rules: ["∫eˣdx = eˣ + C", "∫(1/x)dx = ln|x| + C"],
            tip: "These are special cases you should memorize. 🧠"
          },
          {
            title: "Integration by Substitution",
            rules: ["This is the reverse of the Chain Rule."],
            tip: "It's a way to simplify complicated integrals. Just let 'u' be a part of the function and substitute! 💡"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-purple-50 p-4 rounded-xl shadow-sm border border-purple-100"
          >
            <h4 className="font-bold text-lg text-purple-800">{item.title}</h4>
            <p className="mt-2 text-gray-700">{item.tip}</p>
            {item.rules && (
              <ul className="mt-3 list-disc list-inside text-sm">
                {item.rules.map((rule, i) => <li key={i}>{rule}</li>)}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    )
  },
  {
    title: "🏆 Don't Make These Mistakes!",
    icon: <FiAlertCircle className="text-red-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Avoid these common errors to secure your marks! 💯
        </p>
        <ul className="list-disc list-inside space-y-2 font-bold text-gray-700">
          <li><strong>Forgetting the +C:</strong> This is a classic! For indefinite integrals, always, always, always add it. ✍️</li>
          <li><strong>Incorrectly applying the power rule:</strong> It's +1 to the power, not -1.</li>
          <li><strong>Mixing up integration and differentiation rules:</strong> The integral of <span className="font-mono">sinx</span> is <span className="font-mono">-cosx</span>, not <span className="font-mono">cosx</span>.</li>
          <li><strong>Wrongly applying limits:</strong> Always do <span className="font-mono">F(b) - F(a)</span>, not the other way around.</li>
        </ul>
      </div>
    )
  },
  {
    title: "🎉 You're Ready!",
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
          Mastering Integration for POST-UTME!
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Practice solving different types of integrals and you'll be able to find areas and volumes like a pro!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Your Integration Drills!
        </motion.button>
      </div>
    )
  }
];