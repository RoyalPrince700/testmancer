import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const ApplicationsOfCalculusPage = [
  {
    title: "🛠️ Applications of Calculus: Solving Real-World Problems",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Calculus isn't just theory; it's a powerful toolkit for solving real-world problems. 
          Differentiation focuses on <strong>rates of change</strong> (how fast or slow something is happening),
          while integration is about <strong>accumulation</strong> (how much has been added up over time).
        </p>
        <p className="text-gray-700">
          Think of differentiation as a “speedometer” 📉 — it tells you how fast something is changing at a moment.  
          Integration, on the other hand, is like an “odometer” 📈 — it tells you the total distance (or total amount) after some time.
        </p>
        <p className="italic text-gray-600">
          Example: A car’s speed at a moment is found by differentiation.  
          The total distance it has traveled is found by integration.
        </p>
      </div>
    )
  },
  {
    title: "📈 Optimization: Finding the Best Value",
    icon: <FiStar className="text-yellow-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm border border-yellow-100">
          <h3 className="font-bold text-lg text-yellow-800">Maximize or Minimize!</h3>
          <p className="mt-2">
            Optimization is about using calculus to find the <strong>best possible outcome</strong>.
            “Best” here might mean the <strong>biggest area</strong>, the <strong>smallest cost</strong>,
            or the <strong>most efficient design</strong>. 
          </p>
          <p className="text-gray-700">
            The trick is: when a function (like area or cost) reaches its maximum or minimum, 
            the slope of the curve (its derivative) becomes <strong>zero</strong>.  
            That’s why we set <span className="font-mono">dA/dx = 0</span> or <span className="font-mono">dC/dx = 0</span>.
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600">
              <strong>Example:</strong> What’s the max area of a rectangular field with 40m of fencing?
            </p>
            <p className="font-mono text-sm mt-1">
              Perimeter: 2x+2y=40 → x+y=20 → y=20-x.  
              Area A=xy = x(20-x) = 20x - x².  
              Differentiate: dA/dx = 20 - 2x.  
              Set to 0 → x=10 → y=10.  
              Max Area = 10 × 10 = <span className="font-bold">100 m²</span>.
            </p>
            <p className="text-gray-600 mt-2">
              👉 The maximum happens when the field is a square.  
              This shows that for the same perimeter, a square always gives the largest area.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Tangent & Normal Lines",
    icon: <FiMessageSquare className="text-blue-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          A tangent is a line that just <strong>touches</strong> a curve at one point, 
          while a normal is a line <strong>perpendicular</strong> to that tangent.  
          The slope of the tangent comes directly from the derivative.
        </p>
        <p className="text-gray-700">
          Why is this important?  
          Engineers use tangents to know the <strong>instantaneous direction</strong> of a road curve,  
          and physicists use it to know the <strong>direction of motion</strong> of an object.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-100">
          <p className="font-medium text-blue-800 flex items-center gap-2">
            <FiCheckCircle /> Example: Finding a Tangent
          </p>
          <p className="mt-2 text-sm">
            Curve: y = x³ - x + 2, at x=1.  
            - Step 1: Point = (1, 2).  
            - Step 2: Derivative = 3x² - 1.  
            - Step 3: At x=1, slope = 2.  
            - Step 4: Equation → y - 2 = 2(x - 1) → y = 2x.  
            👉 The tangent line is y = 2x.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "📊 Finding Area & Volume with Integration",
    icon: <FiBook className="text-green-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-green-50 p-4 rounded-xl shadow-sm border border-green-100">
          <h3 className="font-bold text-lg text-green-800">Area Under a Curve</h3>
          <p className="mt-2">
            Integration lets us find the <strong>total area</strong> between a curve and the x-axis.  
            Instead of counting tiny rectangles under the curve, integration adds them all up in one formula.
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600">
              <strong>Example:</strong> Area under y = x²+1 from x=0 to x=2.
            </p>
            <p className="font-mono text-sm mt-1">
              Area = ∫₀²(x²+1)dx = [x³/3 + x]₀²  
              = (8/3 + 2) - 0 = <span className="font-bold">14/3</span> units².
            </p>
            <p className="text-gray-600 mt-2">
              👉 Instead of manually calculating small slices, integration gives the exact total area.
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-xl shadow-sm border border-green-100">
          <h3 className="font-bold text-lg text-green-800">Volume of Revolution</h3>
          <p className="mt-2">
            If you rotate a 2D shape around an axis, integration helps find the <strong>3D volume</strong> formed.
            This is called the <em>volume of revolution</em>.  
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600">
              <strong>Example:</strong> Rotate y=x (from x=0 to 3) about the x-axis.
            </p>
            <p className="font-mono text-sm mt-1">
              V = π∫₀³(x)²dx = π[x³/3]₀³  
              = π(27/3 - 0) = <span className="font-bold">9π</span> cubic units.  
              👉 This is the formula for a cone.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🚀 Practice Makes Perfect",
    icon: <FiHeart className="text-pink-600" />,
    content: (
      <div className="space-y-6 text-center py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Ace Your Exams? 💯
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          The best way to master calculus applications is to <strong>practice regularly</strong>.  
          Try solving problems without looking at the solution, then check your steps carefully.  
          Remember: every tough question you solve makes you sharper for the exam!
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
