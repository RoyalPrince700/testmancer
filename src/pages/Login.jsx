import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import { useAuth } from "../../provider/AuthContext";
import { FiLock, FiMail, FiUser, FiArrowRight, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // Determine redirect destination
  const from = location.state?.from?.pathname || "/";

  // If already authenticated, redirect to homepage
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password });

      if (loginError) {
        console.log('Login error:', loginError);
        setError(loginError.message);
      } else if (data.user) {
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error('Unexpected login error:', err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Animation variants for vibrant effects
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-200 px-4">
      <motion.div
        className="max-w-4xl w-full flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg border border-teal-200/30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Side Panel */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-teal-500 to-teal-700 p-10 flex flex-col justify-between relative overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-24 h-24 rounded-full bg-teal-400/30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-teal-300/20"
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          
          <div className="relative z-10">
            <motion.h2
              className="text-4xl font-extrabold text-white mb-4 flex items-center gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FiZap className="text-yellow-300 animate-pulse" />
              Welcome Back!
            </motion.h2>
            <p className="text-teal-100 max-w-xs text-lg">
              Jump into TestMancer! Crush quizzes, earn badges, and level up your skills! 🚀
            </p>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 rounded-full bg-teal-400/40 flex items-center justify-center"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <FiUser className="text-white text-2xl" />
              </motion.div>
              <p className="text-teal-100 text-lg">New to TestMancer?</p>
            </div>
            <Link 
              to="/signup" 
              className="inline-flex items-center gap-2 bg-teal-600/80 hover:bg-teal-700 text-white font-semibold rounded-full px-6 py-3 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
            >
              Join the Quest
              <FiArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
        
        {/* Login Form with Glass Effect */}
        <div className="w-full md:w-3/5 bg-white/10 backdrop-blur-lg p-10 border border-teal-200/20">
          <div className="text-center mb-10">
            <motion.div
              className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-4 inline-flex items-center justify-center"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <FiLock className="text-white text-3xl" />
            </motion.div>
            <motion.h2
              className="text-3xl font-extrabold text-gray-900 mt-6 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Login to TestMancer
            </motion.h2>
            <p className="text-gray-500">Unlock your learning adventure!</p>
          </div>

          {error && (
            <motion.div
              className="mb-6 p-4 bg-red-50/80 text-red-700 rounded-lg text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                  <FiMail className="text-teal-300 text-xl" />
                </motion.div>
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/20 border border-teal-300/50 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded-lg backdrop-blur-sm transition-all duration-300"
                placeholder="Your email"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                  <FiLock className="text-teal-300 text-xl" />
                </motion.div>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/20 border border-teal-300/50 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded-lg backdrop-blur-sm transition-all duration-300"
                placeholder="Your password"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:bg-teal-300 disabled:transform-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging In...
                </>
              ) : (
                <>
                  Start Quest
                  <FiArrowRight className="text-sm" />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <Link 
              to="/password-reset" 
              className="text-teal-400 hover:text-teal-600 text-sm font-semibold"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Login;