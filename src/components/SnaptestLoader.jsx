import { motion } from "framer-motion";

const SnaptestLoader = () => {
  const circleVariants = {
    initial: { scale: 0.8, opacity: 0.5 },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.5, 1, 0.5],
      transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" }
    }
  };

  const letterVariants = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120 }
    })
  };

  const text = "Snaptest";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white" aria-live="polite" aria-label="Loading Snaptest progress">
      <div className="flex gap-3 mb-6">
        <motion.div
          variants={circleVariants}
          initial="initial"
          animate="animate"
          className="w-12 h-12 rounded-full bg-coral-500"
        />
        <motion.div
          variants={circleVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="w-12 h-12 rounded-full bg-teal-500"
        />
        <motion.div
          variants={circleVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="w-12 h-12 rounded-full bg-yellow-400"
        />
      </div>
      <div className="flex gap-1 mb-4">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="initial"
            animate="animate"
            className="text-3xl font-bold text-gray-800"
          >
            {char}
          </motion.span>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-gray-500 text-lg"
      >
        Snapping your progress into place! 📸
      </motion.p>
    </div>
  );
};

export default SnaptestLoader;
