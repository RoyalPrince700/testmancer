import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const VariationPage = [
  {
    title: "🔗 Variation: Unlocking Proportional Relationships",
    icon: <FiList className="text-purple-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Variation is all about how one quantity changes when another one does. It's like a special kind of relationship between variables. In POST-UTME, you'll meet four main characters: Direct, Inverse, Joint, and Partial variation. Let's get to know them! 🤝
        </p>
        <div className="bg-purple-50 p-4 rounded-xl shadow-sm border border-purple-100">
          <h3 className="text-xl font-bold text-purple-800 flex items-center gap-2">
            <FiThumbsUp /> What's a Variation?
          </h3>
          <p className="mt-2">
            Think of it as cause and effect in math. If buying more garri makes your pocket lighter, that's a variation! We use a <span className="font-bold">constant of proportionality (k)</span> to find the exact rule.
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-medium text-gray-700"><strong>Examples:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><span className="font-bold">Direct:</span> The more fuel you buy, the more you pay. ⛽️↗️</li>
              <li><span className="font-bold">Inverse:</span> The faster you drive, the less time it takes. 🚗↙️</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "↗️ Direct Variation: The 'As One Goes Up...' Rule",
    icon: <FiZap className="text-green-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-green-50 p-4 rounded-xl shadow-sm border border-green-100">
          <h3 className="font-bold text-lg text-green-800">The Constant Multiple</h3>
          <p className="mt-2">
            When two variables are in direct variation, they move in the same direction. If one doubles, the other one doubles too! The formula is:
            <span className="font-mono text-sm bg-gray-100 p-2 rounded block mt-2">y = kx</span>
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> If y=12 when x=3, find the equation.</p>
            <p className="font-mono text-xs mt-1">
              <span className="font-mono">k = y/x = 12/3 = 4</span><br />
              The equation is <span className="font-mono">y = 4x</span>.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "↙️ Inverse Variation: The 'Opposite' Rule",
    icon: <FiEdit className="text-blue-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-100">
          <h3 className="font-bold text-lg text-blue-800">The Constant Product</h3>
          <p className="mt-2">
            Here, as one variable increases, the other decreases. It's a proper 'see-finish-go' relationship! The product of the two variables is always constant. The formula is:
            <span className="font-mono text-sm bg-gray-100 p-2 rounded block mt-2">y = k/x  or  xy = k</span>
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> 10 workers take 6 hours. How long for 15 workers?</p>
            <p className="font-mono text-xs mt-1">
              <span className="font-mono">k = 10 workers × 6 hours = 60</span><br />
              <span className="font-mono">15 workers × T = 60</span><br />
              <span className="font-mono">T = 4 hours</span>. More hands, less time! 🤝
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🧩 Joint & Partial Variation",
    icon: <FiStar className="text-yellow-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm border border-yellow-100">
          <h3 className="font-bold text-lg text-yellow-800">Joint Variation: The Group Chat 🗣️</h3>
          <p className="mt-2">
            One variable depends directly on two or more other variables multiplied together. The formula is:
            <span className="font-mono text-sm bg-gray-100 p-2 rounded block mt-2">z = kxy</span>
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> z=24 when x=2, y=3. Find z when x=5, y=4.</p>
            <p className="font-mono text-xs mt-1">
              <span className="font-mono">24 = k(2)(3) ➡️ k = 4</span><br />
              <span className="font-mono">z = 4(5)(4) = 80</span>.
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm border border-yellow-100">
          <h3 className="font-bold text-lg text-yellow-800">Partial Variation: The Fixed & Variable ⚖️</h3>
          <p className="mt-2">
            This is a mix! One variable depends on a fixed amount plus a direct variation part. It's like paying a "call-out fee" plus an hourly rate. The formula is:
            <span className="font-mono text-sm bg-gray-100 p-2 rounded block mt-2">y = a + bx</span>
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong> y=12 when x=1, and y=21 when x=4. Find the equation.</p>
            <p className="font-mono text-xs mt-1">
              This gives you two equations: <span className="font-mono">12 = a + b</span> and <span className="font-mono">21 = a + 4b</span>.<br />
              Solve them to get <span className="font-mono">a = 9</span> and <span className="font-mono">b = 3</span>.<br />
              The equation is <span className="font-mono">y = 9 + 3x</span>.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🤯 The POST-UTME Combo",
    icon: <FiAward className="text-red-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          POST-UTME questions love to mix things up! You might see direct and inverse variation in the same problem. Don't panic, just break it down!
        </p>
        <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100">
          <p className="font-medium text-red-800 flex items-center gap-2">
            <FiAlertCircle /> Combined Variation: The Ultimate Challenge
          </p>
          <p className="mt-2">
            If P varies directly as Q and inversely as the square of R, the equation is:
            <span className="font-mono text-sm bg-gray-100 p-2 rounded block mt-2">P = kQ / R²</span>
          </p>
          <p className="mt-2 font-bold text-red-700">Always find 'k' first!</p>
          <p className="mt-1 text-sm">
            Example: P=10 when Q=4, R=2. Find k.<br />
            <span className="font-mono">10 = k(4) / 2² ➡️ 10 = k(4)/4 ➡️ k = 10</span>.<br />
            Now you can solve any problem with that equation!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "📊 Variation and Graphs",
    icon: <FiMessageSquare className="text-teal-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Graphs can tell you the type of variation at a glance. Just like reading facial expressions! 😄
        </p>
        <ul className="list-disc list-inside space-y-4 font-bold text-gray-700">
          <li><strong>Direct (y=kx):</strong> A straight line through the center (0,0).</li>
          <li><strong>Partial (y=a+bx):</strong> A straight line that starts somewhere else.</li>
          <li><strong>Inverse (y=k/x):</strong> A curved line that never touches the axes (a hyperbola).</li>
        </ul>
        <div className="bg-teal-50 p-4 rounded-xl text-center">
          <p className="font-bold text-teal-800 text-lg">You're Ready to Go! 🚀</p>
          <p className="mt-2 text-sm text-gray-700">
            Practice translating word problems and solving for the constant (k). You've got this!
          </p>
        </div>
      </div>
    )
  }
];