import { motion } from 'framer-motion';
import { FiZap } from 'react-icons/fi';

const GamifiedButton = ({ children, onClick, icon: Icon = FiZap }) => {
  return (
  <motion.button
  onClick={onClick}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-2 bg-green-200 text-black px-6 py-3 rounded-full font-bold shadow-md hover:shadow-xl transition duration-300"
>
  {Icon && <Icon className="text-xl" />}
  {children}
</motion.button>
  );
};

export default GamifiedButton;
