import { motion } from 'framer-motion';
import { FaSmileBeam, FaRegClock, FaGraduationCap } from 'react-icons/fa';

const moodMap = {
  idle: {
    icon: <FaRegClock className="text-4xl text-brand-funBlue" />,
    message: "Ready to learn something new?",
  },
  inProgress: {
    icon: <FaGraduationCap className="text-4xl text-brand-accent" />,
    message: "Keep going, you're doing great!",
  },
  completed: {
    icon: <FaSmileBeam className="text-4xl text-brand-funGreen" />,
    message: "Awesome! You've completed a topic!",
  },
};

const Mascot = ({ status = "idle" }) => {
  const { icon, message } = moodMap[status] || moodMap.idle;

  return (
    <motion.div
      className="bg-white shadow-lg rounded-2xl p-4 flex items-center gap-4 max-w-md mx-auto border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {icon}
      <p className="text-lg font-semibold text-gray-800">{message}</p>
    </motion.div>
  );
};

export default Mascot;
