import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const SequencesAndSeriesPage = [
  {
    title: "🎢 Sequences & Series: Unraveling Number Patterns!",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Ever wondered if numbers have a secret code? That's what sequences and series are all about! They're like number trains following specific, predictable rules. Master these, and you'll be a math detective! 🕵️‍♂️
        </p>
        
        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm border border-yellow-100">
          <h3 className="text-xl font-bold text-yellow-800 flex items-center gap-2">
            <FiThumbsUp /> What's a Sequence?
          </h3>
          <p className="mt-2">
            A sequence is just a list of numbers that follow a pattern. Each number in the list is called a "term." It's like finding the next song on a playlist! 🎶
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-medium text-gray-700"><strong>Examples:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><span className="font-mono">1, 3, 5, 7, ...</span> (Rule: Add 2)</li>
              <li><span className="font-mono">1, 4, 9, 16, ...</span> (Rule: Square the position number)</li>
              <li><span className="font-mono">100, 50, 25, ...</span> (Rule: Divide by 2)</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🚶‍♂️ Arithmetic Progression (AP)",
    icon: <FiZap className="text-blue-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-100">
          <h3 className="font-bold text-lg text-blue-800">The Constant-Add Rule</h3>
          <p className="mt-2">
            An AP is a sequence where you add or subtract the same number to get the next term. This fixed number is called the <strong>common difference (d)</strong>. Think of it as a steady journey! 🛣️
          </p>
          <div className="mt-3">
            <p className="font-medium text-gray-600"><strong>Examples:</strong></p>
            <ul className="list-disc list-inside text-sm">
              <li><span className="font-mono">5, 8, 11, 14, ...</span> (d=3)</li>
              <li><span className="font-mono">20, 15, 10, 5, ...</span> (d=−5)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
          <h4 className="font-bold text-lg text-blue-700">Finding the nᵗʰ Term of an AP</h4>
          <p className="mt-2">
            Use this formula to find any term you want without listing them all out. It's a lifesaver! 🚑
          </p>
          <p className="font-mono text-sm bg-gray-100 p-2 rounded mt-2">
            Tₙ = a + (n-1)d
          </p>
          <p className="mt-2 text-sm text-gray-600">
            (a = first term, d = common difference, n = term position)
          </p>
          <div className="mt-3">
            <p className="font-medium text-gray-600"><strong>Example:</strong> Find the 10ᵗʰ term of 2, 5, 8, ...</p>
            <p className="font-mono text-xs bg-gray-50 p-2 rounded mt-1">
              a=2, d=3, n=10. T₁₀ = 2 + (10-1)×3 = 29.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "📈 Geometric Progression (GP)",
    icon: <FiStar className="text-green-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-green-50 p-4 rounded-xl shadow-sm border border-green-100">
          <h3 className="font-bold text-lg text-green-800">The Constant-Multiply Rule</h3>
          <p className="mt-2">
            A GP is a sequence where you multiply or divide by the same number to get the next term. This number is the <strong>common ratio (r)</strong>. It's like your money growing in a savings account! 💰
          </p>
          <div className="mt-3">
            <p className="font-medium text-gray-600"><strong>Examples:</strong></p>
            <ul className="list-disc list-inside text-sm">
              <li><span className="font-mono">3, 6, 12, 24, ...</span> (r=2)</li>
              <li><span className="font-mono">81, 27, 9, 3, ...</span> (r=1/3)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
          <h4 className="font-bold text-lg text-green-700">Finding the nᵗʰ Term of a GP</h4>
          <p className="mt-2">
            Got a geometric sequence? This formula is your best friend! 👯‍♀️
          </p>
          <p className="font-mono text-sm bg-gray-100 p-2 rounded mt-2">
            Tₙ = arⁿ⁻¹
          </p>
          <p className="mt-2 text-sm text-gray-600">
            (a = first term, r = common ratio, n = term position)
          </p>
          <div className="mt-3">
            <p className="font-medium text-gray-600"><strong>Example:</strong> Find the 5ᵗʰ term of 2, 6, 18, ...</p>
            <p className="font-mono text-xs bg-gray-50 p-2 rounded mt-1">
              a=2, r=3, n=5. T₅ = 2 × 3⁽⁵⁻¹⁾ = 2 × 3⁴ = 162.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "➕ What's a Series?",
    icon: <FiCheckCircle className="text-purple-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          A series is simply the <strong>sum</strong> of the terms in a sequence. If you have the sequence <span className="font-mono">2, 4, 6, 8</span>, the series is <span className="font-mono">2+4+6+8 = 20</span>. It's like adding up all the money in your piggy bank! 🐷
        </p>

        <div className="bg-purple-50 p-4 rounded-xl shadow-sm border border-purple-100">
          <h3 className="font-bold text-lg text-purple-800">Sums of AP and GP</h3>
          <p className="mt-2">
            You don't need to add everything one by one! These formulas are a shortcut to finding the sum of the first 'n' terms.
          </p>
          <ul className="mt-4 space-y-4">
            <li>
              <h4 className="font-bold text-purple-700">Sum of AP (Sₙ)</h4>
              <p className="font-mono text-sm bg-gray-100 p-2 rounded mt-1">
                Sₙ = n/2 (2a + (n-1)d)
              </p>
              <p className="font-mono text-sm bg-gray-100 p-2 rounded mt-1">
                or Sₙ = n/2 (a + l)  (if you know the last term, l)
              </p>
            </li>
            <li>
              <h4 className="font-bold text-purple-700">Sum of GP (Sₙ)</h4>
              <p className="mt-1">
                If |r| &lt; 1: <span className="font-mono text-sm bg-gray-100 p-2 rounded block mt-1">Sₙ = a(1-rⁿ) / (1-r)</span>
              </p>
              <p className="mt-1">
                If |r| &gt; 1: <span className="font-mono text-sm bg-gray-100 p-2 rounded block mt-1">Sₙ = a(rⁿ-1) / (r-1)</span>
              </p>
            </li>
            <li>
              <h4 className="font-bold text-purple-700">Sum to Infinity (S∞) for GP</h4>
              <p className="mt-1">
                For |r| &lt; 1, the sum goes to a specific number! This is magical! ✨
              </p>
              <p className="font-mono text-sm bg-gray-100 p-2 rounded mt-1">
                S∞ = a / (1-r)
              </p>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "🧐 AP vs. GP: Know the Difference!",
    icon: <FiAlertCircle className="text-red-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          This is a common POST-UTME trap! Don't fall for it. Check the rule before you start calculating. 🤔
        </p>
        <ul className="list-disc list-inside space-y-4 font-bold text-gray-700">
          <li><strong>AP:</strong> You ADD or SUBTRACT a constant value (d). Think of a steady walk. 🚶‍♀️</li>
          <li><strong>GP:</strong> You MULTIPLY or DIVIDE by a constant value (r). Think of an explosion! 💥</li>
        </ul>
        <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100">
          <p className="font-medium text-red-800 flex items-center gap-2">
            <FiAlertCircle /> Quick Test!
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            <li><span className="font-mono">-3, 0, 3, 6, ...</span> ➡️ This is an AP (d=3)</li>
            <li><span className="font-mono">-3, 6, -12, 24, ...</span> ➡️ This is a GP (r=−2)</li>
            <li><span className="font-mono">1, 4, 9, 16, ...</span> ➡️ Neither! It's just a sequence of squares.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "🏅 Arithmetic & Geometric Means",
    icon: <FiAward className="text-yellow-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm border border-yellow-100">
          <h3 className="font-bold text-lg text-yellow-800">The "Middle Man" Numbers</h3>
          <p className="mt-2">
            These are the special numbers that fit perfectly between two other numbers to form an AP or GP.
          </p>
          <ul className="mt-4 space-y-4">
            <li>
              <h4 className="font-bold text-yellow-700">Arithmetic Mean</h4>
              <p className="mt-1">
                The average! <span className="font-mono text-sm bg-gray-100 p-2 rounded block">x = (a+b)/2</span>
              </p>
              <p className="mt-2 text-sm">Example: The arithmetic mean of 5 and 15 is <span className="font-mono">(5+15)/2 = 10</span>.</p>
            </li>
            <li>
              <h4 className="font-bold text-yellow-700">Geometric Mean</h4>
              <p className="mt-1">
                The square root of their product! <span className="font-mono text-sm bg-gray-100 p-2 rounded block">x = √(ab)</span></p>
              <p className="mt-2 text-sm">Example: The geometric mean of 4 and 16 is <span className="font-mono">√(4×16) = 8</span>.</p>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "🌍 Sequences & Series in Real Life",
    icon: <FiHeart className="text-pink-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          These aren't just for exams! They're used for everything from money to population growth. 💸📈
        </p>
        <ul className="list-disc list-inside space-y-4 font-medium text-gray-700">
          <li><strong>AP:</strong> Used for things with a fixed increase, like simple interest or a salary that goes up by a fixed amount each year.</li>
          <li><strong>GP:</strong> Used for things with a percentage increase, like compound interest or how a population grows.</li>
        </ul>
        <div className="bg-pink-50 p-4 rounded-xl text-center">
          <p className="font-bold text-pink-800 text-lg">You’ve Got This! 💪</p>
          <p className="mt-2 text-sm text-gray-700">
            Practice applying these formulas to real problems to ace your POST-UTME. You are a math genius in the making! 🚀
          </p>
        </div>
      </div>
    )
  }
];