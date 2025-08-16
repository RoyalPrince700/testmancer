import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const EquationsAndInequalitiesPage = [
  {
    title: "⚖️ Equations & Inequalities: Balancing the Scales",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Welcome to the world of algebra! Think of equations and inequalities as two sides of a scale. Your goal is to keep them balanced while figuring out the missing number. Let's make you a master of this! 🎓
        </p>
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 flex items-center gap-2">
            <FiCheckCircle /> What Are Equations?
          </h3>
          <p className="mt-2">
            An equation is a math statement that says two things are exactly equal, using an <span className="font-bold text-blue-700">=</span> sign. It's like a balanced scale. Whatever you do to one side, you must do to the other to keep it level.
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-medium text-gray-700"><strong>Examples:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><span className="font-mono">2x + 5 = 11</span></li>
              <li><span className="font-mono">3y = 9</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🚀 Solving Different Kinds of Equations",
    icon: <FiZap className="text-purple-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
          <h4 className="font-bold text-lg text-purple-700">Linear Equations (One Variable)</h4>
          <p className="mt-2">
            These are the simplest! Just use opposite operations to get the variable all by itself. 🎯
          </p>
          <div className="mt-3 bg-gray-50 p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> Solve for x in <span className="font-mono">3x - 4 = 14</span></p>
            <p className="font-mono text-xs mt-1">
              Add 4 to both sides: <span className="font-mono">3x = 18</span><br />
              Divide by 3: <span className="font-mono">x = 6</span>
            </p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
          <h4 className="font-bold text-lg text-purple-700">Quadratic Equations (x²)</h4>
          <p className="mt-2">
            Got an 'x²'? You can factorize it like a pro, or use the almighty quadratic formula.
          </p>
          <div className="mt-3 space-y-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-600"><strong>Method 1: Factorization</strong></p>
              <p className="font-mono text-xs mt-1">
                Solve <span className="font-mono">x² - 5x + 6 = 0</span><br />
                <span className="font-mono">(x-2)(x-3) = 0</span><br />
                So, <span className="font-mono">x = 2</span> or <span className="font-mono">x = 3</span>
              </p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium text-gray-600"><strong>Method 2: Quadratic Formula</strong></p>
              <p className="font-mono text-xs mt-1">
                <span className="font-mono">x = [-b ± √(b²-4ac)] / 2a</span><br />
                The POST-UTME champ! 🏆
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
          <h4 className="font-bold text-lg text-purple-700">Simultaneous Equations</h4>
          <p className="mt-2">
            Two equations, two unknowns. Choose your fighter: substitution or elimination! 🥊
          </p>
          <div className="mt-3 bg-gray-50 p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong></p>
            <p className="font-mono text-xs mt-1">
              <span className="font-mono">2x + y = 8</span><br />
              <span className="font-mono">x - y = 1</span><br />
              Add them to eliminate 'y', and you get <span className="font-mono">3x = 9</span>, so <span className="font-mono">x = 3</span>. Easy!
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "⚠️ The World of Inequalities",
    icon: <FiAlertCircle className="text-red-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Inequalities are like equations, but for when things are not equal! They use signs like <span className="font-bold text-red-700">&gt;, &lt;, ≥, ≤</span>. The goal is to find a range of values, not just one number. 📈
        </p>

        <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100">
          <h3 className="font-bold text-lg text-red-800 flex items-center gap-2">
            <FiAlertCircle /> The Golden Rule of Inequalities
          </h3>
          <p className="mt-2">
            <strong>NEVER FORGET THIS!</strong> If you multiply or divide by a <span className="font-bold">negative number</span>, you MUST <span className="font-bold">FLIP THE SIGN!</span> It's a classic exam mistake. 🤯
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> Solve <span className="font-mono">-2x &gt; 6</span></p>
            <p className="font-mono text-xs mt-1">
              Divide by -2 and flip the sign: <span className="font-mono">x &lt; -3</span>
            </p>
          </div>
        </div>
        
        <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100">
          <h3 className="font-bold text-lg text-red-800 flex items-center gap-2">
            <FiAward /> Number Lines are Your Friends
          </h3>
          <p className="mt-2">
            Visualizing solutions on a number line makes it super clear.
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            <li><span className="font-mono">x &gt; 3</span> ➡️ Open circle at 3, arrow to the right. ⚪️➡️</li>
            <li><span className="font-mono">x ≤ 5</span> ➡️ Closed circle at 5, arrow to the left. ⚫️⬅️</li>
            <li><span className="font-mono">1 &lt; x ≤ 4</span> ➡️ Open circle at 1, closed at 4, line in between. ⚪️---⚫️</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "🧩 Quadratic Inequalities",
    icon: <FiEdit className="text-teal-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          These are a bit tricky, but don't worry! Just find the "critical points" where the equation equals zero, then test the zones to find the correct range. 🔍
        </p>
        <div className="bg-teal-50 p-4 rounded-xl shadow-sm border border-teal-100">
          <p className="font-medium text-teal-800"><strong>Example:</strong> Solve <span className="font-mono">x² - x - 6 &gt; 0</span></p>
          <p className="mt-2 text-sm">
            1. Solve <span className="font-mono">x² - x - 6 = 0</span> to get critical points <span className="font-mono">x = 3</span> and <span className="font-mono">x = -2</span>.
            <br />2. Test a number in each interval (e.g., -3, 0, 4) to find where the inequality is true.
            <br />3. Solution is <span className="font-mono">x &lt; -2</span> or <span className="font-mono">x &gt; 3</span>.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "🏆 The Discriminant: Your Root-Detector!",
    icon: <FiAward className="text-yellow-600" />,
    content: (
      <div className="space-y-6 text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full p-4 mb-4"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h3 className="font-bold text-xl text-yellow-800">Meet the Discriminant (Δ)</h3>
        <p className="text-lg">
          The discriminant, <span className="font-mono">Δ = b² - 4ac</span>, is the part of the quadratic formula under the square root. It's a secret spy that tells you about the types of solutions a quadratic equation has, without even solving it! 🕵️‍♀️
        </p>
        <ul className="mt-4 list-disc list-inside text-left mx-auto max-w-sm space-y-2">
          <li><strong>If Δ &gt; 0</strong> ➡️ Two different answers (roots).</li>
          <li><strong>If Δ = 0</strong> ➡️ One repeated answer (root).</li>
          <li><strong>If Δ &lt; 0</strong> ➡️ No real answers! The math goes on an adventure. 👽</li>
        </ul>
      </div>
    )
  },
  {
    title: "🎯 Practice Makes Perfect!",
    icon: <FiHeart className="text-pink-600" />,
    content: (
      <div className="space-y-6 text-center py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Ace Your POST-UTME? 💯
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Equations and inequalities are all about practice. The more you solve, the faster you'll become!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Your Practice Drill!
        </motion.button>
      </div>
    )
  }
];