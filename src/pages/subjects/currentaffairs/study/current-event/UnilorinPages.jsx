import { FiBook, FiStar, FiMessageSquare, FiHeart, FiZap, FiThumbsUp, FiEdit, FiAward, FiAlertCircle, FiList, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export const UniversityOfIlorinHistoryPage = [
  {
    title: "🇳🇬 Better by Far: The University of Ilorin Story! 🎓",
    icon: <FiBook className="text-indigo-600" />,
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Hey, Unilorin aspirants! 🌟 As you gear up for post-UTME, let's dive into the epic tale of your dream school – the University of Ilorin (UNILORIN). Nicknamed "Better by Far," this powerhouse started small but grew into one of Nigeria's top unis. Founded in 1975, it's all about stability, innovation, and churning out stars. Buckle up for a fun history ride that'll stick for your exams and beyond! 🚀🧠
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
          <p className="text-gray-700">
            <span className="font-bold">Fun Fact: </span> 
            Unilorin has the longest uninterrupted academic calendar in Nigeria – no strikes since 2001! That's why it's a fave for serious students like you. 📅💪
          </p>
        </div>
      </div>
    )
  },
  {
    title: "📜 The Origin Story: From College to Giant! 🏛️",
    icon: <FiAward className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <p className="text-lg font-semibold">Picture this: In the mid-70s, Nigeria needed more brainpower for development. Enter Unilorin – born in August 1975 as a university college under the University of Ibadan! 😎</p>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-gray-100 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            <FiStar className="text-yellow-500" /> The Early Days
          </h3>
          <p className="text-gray-700">
            Started with just 200 students in October 1976, kicking off with three faculties: Arts, Science, and Education. It was like a startup – small but ambitious! By October 1977, it went full uni mode with autonomy. Thanks to leaders like Dr. T.N. Tamuno (first principal) and Prof. O.O. Akinkugbe (first VC), it got land from Kwara State Polytechnic and built up fast. 🏗️📈
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-gray-100 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            <FiStar className="text-yellow-500" /> Growth Spurt
          </h3>
          <p className="text-gray-700">
            Moved to the permanent site in 1982. Added faculties like Law (1993), Engineering, Medicine, and more – now 15 faculties and over 60 departments! Offers 103 programs, from undergrad to PhD. It's a hub for research, with institutes like the Sugar Research Institute. Plus, it's famous for producing VCs for other unis – over 33! 🌍🧑‍🏫
          </p>
        </motion.div>
      </div>
    )
  },
  {
    title: "🎖️ The Bosses: Vice-Chancellors Who Shaped Unilorin! 👑",
    icon: <FiZap className="text-indigo-600" />,
    content: (
      <div className="space-y-8">
        <p className="text-lg font-semibold">These VCs were the captains steering the ship through calm and stormy waters. Each brought unique vibes – from building foundations to modern reforms! 💼</p>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-teal-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-teal-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-teal-700" /> 1. Prof. O.O. Akinkugbe (1977-1978)
          </h3>
          <p className="text-gray-700">
            The pioneer! As first VC, he set the tone for autonomy and early growth. Former Dean at UIbadan, he was the visionary who got things rolling. 🚀
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-teal-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-teal-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-teal-700" /> 2. Prof. A.O. Adesola (1979-1981)
          </h3>
          <p className="text-gray-700">
            Built on the foundation, focusing on academic expansion. A medical prof, he pushed for health sciences growth. 🩺
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-orange-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-orange-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-orange-700" /> 3. Prof. S.A. Toye (1981-1985)
          </h3>
          <p className="text-gray-700">
            Oversaw the move to the permanent site and infrastructure boom. His era was all about physical development! 🏗️
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-orange-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-orange-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-orange-700" /> 4. Prof. A.B.O. Oyediran (1985-1992)
          </h3>
          <p className="text-gray-700">
            Long tenure! Expanded faculties and student numbers. Known for stabilizing the uni during national challenges. 📈
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-red-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-red-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-red-700" /> 5. Prof. J.O. Oyinloye (1992-1997)
          </h3>
          <p className="text-gray-700">
            Introduced more programs and research focus. His era saw the birth of Law Faculty! ⚖️
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-red-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-red-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-red-700" /> 6. Prof. S. O. AbdulRaheem (1997-2002)
          </h3>
          <p className="text-gray-700">
            Dealt with ASUU crises but kept Unilorin strike-free. Boosted international ties. 🌐
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-teal-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-teal-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-teal-700" /> 7. Prof. Shamsudeen O.O. Amali (2002-2007)
          </h3>
          <p className="text-gray-700">
            Modernized admin and facilities. His leadership strengthened the "Better by Far" brand! ✨
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-teal-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-teal-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-teal-700" /> 8. Prof. Is-haq O. Oloyede (2007-2012)
          </h3>
          <p className="text-gray-700">
            First alumnus VC! Digitized everything, improved rankings, and made Unilorin a tech hub. Later JAMB boss – legend! 📱
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-orange-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-orange-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-orange-700" /> 9. Prof. AbdulGaniyu Ambali (2012-2017)
          </h3>
          <p className="text-gray-700">
            Focused on research and infrastructure. Advocated for single 5-year VC tenure. 🏆
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-orange-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-orange-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-orange-700" /> 10. Prof. Sulyman Age Abdulkareem (2017-2022)
          </h3>
          <p className="text-gray-700">
            Emphasized STEM and community impact. Kept the stable calendar going! 🔬
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="bg-green-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-green-800 flex items-center gap-2 mb-2">
            <FiEdit className="text-green-700" /> 11. Prof. Wahab Olasupo Egbewole (2022-Present)
          </h3>
          <p className="text-gray-700">
            Current boss! A SAN and international law expert, he's pushing for global partnerships and student welfare. Your potential VC! 🤝
          </p>
        </motion.div>
      </div>
    )
  },
  {
    title: "🌟 Legacy: Why Unilorin Rocks! 🏆",
    icon: <FiList className="text-indigo-600" />,
    content: (
      <div className="text-center py-8">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block bg-gradient-to-r from-green-500 to-teal-600 rounded-full p-4 mb-6"
        >
          <FiAward className="text-white text-4xl" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          From Humble Beginnings to Naija's Pride! 🔥
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Unilorin isn't just a uni – it's a launchpad! With stable academics, top rankings, and a knack for producing leaders (including VCs for other schools), it's perfect for aspirants like you. Remember these stories for your post-UTME – they'll make you stand out! 📈❤️
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mt-8"
        >
          Ace Your Post-UTME Now! 💥
        </motion.button>
      </div>
    )
  }
];