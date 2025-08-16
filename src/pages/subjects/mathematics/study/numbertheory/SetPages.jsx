import { FiBook,FiStar,
  FiMessageSquare,FiHeart,
  FiZap,FiThumbsUp,
  FiEdit,FiAward,
  FiAlertCircle,FiList,FiCheckCircle
} from "react-icons/fi";
import { motion } from "framer-motion";

export const SetsAndVennDiagramsPage = [
  {
    title: "🧐 What is a Set? Grouping Data Like a Pro!",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Imagine a set as a well-organized basket! 🧺 It's a collection of unique items or "elements." These items can be anything—numbers, letters, or even your favourite Naija songs. Knowing how to work with sets is key for logic and problem-solving, especially in your post-UTME! 🇳🇬
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-bold">💡 Pro Tip:</span> Think of a set like a squad! Your squad is a set, and each friend is an element. You can't have the same person twice in the squad (distinct objects), and you know who is in and who is not (well-defined). 👯‍♀️
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { icon: "🔢", title: "Finite Set", desc: "A set with a countable number of elements, like the months in a year." },
            { icon: "♾️", title: "Infinite Set", desc: "A set with a countless number of elements, like the set of all whole numbers." },
            { icon: "👻", title: "Empty Set", desc: "A set with no elements, represented by ∅. The set of all Nigerians who have walked on the moon." },
            { icon: "👤", title: "Singleton Set", desc: "A set with just one element. The set of even prime numbers: {2}." }
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
    title: "🧩 Venn Diagrams: The Ultimate Set Visualizer",
    icon: <FiEdit className="text-purple-600" />,
    content: (
      <div className="space-y-8">
        <p className="text-lg">
          Venn diagrams are the coolest way to see how sets relate! 🤩 A rectangle represents everything (the Universal Set, U), and circles show the individual sets. Where the circles overlap is where the magic happens!
        </p>
        
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🤝</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              Intersection (A ∩ B)
            </h3>
          </div>
          <p>
            This is the "and" part! It's the set of elements found in <span className="font-bold">both</span> A and B. It's the common ground. 
          </p>
          <div className="mt-4 bg-purple-50 p-3 rounded-lg">
            <p className="font-medium text-purple-700"><strong>Example:</strong></p>
            <p className="mt-2 text-sm">
              If A = {'{2, 4, 6}'} and B = {'{4, 8, 12}'}, then <span className="font-mono">A ∩ B = {'{4}'}</span>.
            </p>
          </div>
        </div>
        
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🤲</span>
            <h3 className="font-bold text-xl flex items-center gap-2">
              Union (A ∪ B)
            </h3>
          </div>
          <p>
            This is the "or" part! It's the set of <span className="font-bold">all</span> elements from either A, or B, or both. Think of it as a combined party! 🎉
          </p>
          <div className="mt-4 bg-purple-50 p-3 rounded-lg">
            <p className="font-medium text-purple-700"><strong>Example:</strong></p>
            <p className="mt-2 text-sm">
              If A = {'{2, 4, 6}'} and B = {'{4, 8, 12}'}, then <span className="font-mono">A ∪ B = {'{2, 4, 6, 8, 12}'}</span>.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🧠 The Cardinality & Inclusion-Exclusion Principle",
    icon: <FiZap className="text-pink-600" />,
    content: (
      <div className="space-y-8">
        <div className="bg-pink-50 p-4 rounded-xl shadow-sm border border-pink-100">
          <h3 className="font-bold text-lg text-pink-800">Cardinality (n(A))</h3>
          <p className="mt-2">
            The cardinality is just the <span className="font-bold">number of elements</span> in a set. Easy! 🔢
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong></p>
            <p className="font-mono text-xs mt-1">
              If A = {'{Green, White}'} (the colours of the Nigerian flag), then <span className="font-mono">n(A) = 2</span>.
            </p>
          </div>
        </div>
        
        <div className="bg-pink-50 p-4 rounded-xl shadow-sm border border-pink-100">
          <h3 className="font-bold text-lg text-pink-800">The Inclusion-Exclusion Principle</h3>
          <p className="mt-2">
            This formula is your best friend for solving word problems! It helps you count total elements without double-counting.
          </p>
          <p className="font-mono text-sm bg-gray-100 p-2 rounded block mt-2">
            n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
          </p>
          <div className="mt-3 bg-white p-3 rounded-lg">
            <p className="font-medium text-gray-600"><strong>Example:</strong></p>
            <p className="font-mono text-xs mt-1">
              In a class, 20 like Football (F), 15 like Basketball (B), and 8 like both. How many like at least one sport?
              <br />
              <span className="font-mono">n(F ∪ B) = 20 + 15 - 8 = 27</span>. ⚽🏀
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "🏆 Conquer Word Problems with Venn Diagrams!",
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
          Become a Set Theory Oga! 🧙‍♀️
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Sets and Venn diagrams are guaranteed questions in your post-UTME. Mastering them is a major step towards acing your maths!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Start Your Set Theory Drills!
        </motion.button>
      </div>
    )
  }
];