import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import { useAuth } from "../../provider/AuthContext";
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCheckCircle, FiZap } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleGoogleSignup = async () => {
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });

      if (error) throw error;

      // Success handling is managed by Supabase redirect
    } catch (err) {
      console.error("Google signup error:", err);
      setError(err.message || "Failed to sign in with Google. Please try again.");
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password || password.length < 6) {
      setError("Please provide a valid email and a password of at least 6 characters.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (signupError) throw signupError;

      setSuccess({
        title: "Confirm Your Email",
        message: `A confirmation link has been sent to ${email}. Get ready to join the TestMancer quest!`,
        instructions: [
          "Open your email inbox.",
          "Find the message from TestMancer.",
          "Click the confirmation link to activate your account.",
          "Note: It may take a few minutes to arrive."
        ],
        note: "Check your Spam or Promotions folder if you don’t see the email. Your adventure awaits!"
      });
    } catch (err) {
      console.error("Signup error caught:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } }
  };

  const buttonVariants = {
    initial: { scale: 1, boxShadow: "0 0 0 rgba(45, 212, 191, 0)" },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 0 15px rgba(45, 212, 191, 0.5)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 px-4">
      <motion.div
        className="max-w-4xl w-full flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white/30 backdrop-blur-md border border-teal-200/20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Side Panel */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-teal-600 to-teal-800 p-10 flex flex-col justify-between relative overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-24 h-24 rounded-full bg-teal-400/20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-teal-300/20"
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-yellow-300/30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          
          <div className="relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-teal-100 hover:text-white mb-10 text-lg font-semibold"
            >
              <FiArrowLeft className="text-sm" />
              Back to Home
            </Link>
            <motion.h2
              className="text-4xl font-extrabold text-white mb-4 flex items-center gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FiZap className="text-yellow-300 animate-pulse" />
              Join TestMancer!
            </motion.h2>
            <p className="text-teal-100 max-w-xs text-lg">
              Create your account to start crushing quizzes, earning badges, and leveling up your skills! 🚀
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
              <p className="text-teal-100 text-lg">Already a TestMancer?</p>
            </div>
            <Link 
              to="/login" 
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full px-6 py-3 transition-all duration-300 backdrop-blur-md transform hover:scale-105"
            >
              Login Now
              <FiArrowLeft className="text-sm transform rotate-180" />
            </Link>
          </div>
        </div>
        
        {/* Signup Form */}
        <div className="w-full md:w-3/5 bg-white backdrop-blur-md p-10 border border-teal-200/20">
          <div className="text-center mb-10">
            <motion.div
              className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-4 inline-flex items-center justify-center"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <FiUser className="text-white text-3xl" />
            </motion.div>
            <motion.h2
              className="text-3xl font-extrabold text-gray-800 mt-6 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Sign Up for TestMancer
            </motion.h2>
            <p className="text-gray-600">Start your learning adventure!</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              className="mb-6 p-4 bg-red-50/90 text-red-700 rounded-lg text-center backdrop-blur-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}

          {/* Success Message */}
          {success ? (
            <motion.div
              className="bg-white/40 rounded-2xl p-8 mb-6 border border-teal-200/30 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-16 h-16 rounded-full bg-teal-100/50 flex items-center justify-center mb-4"
                  variants={iconVariants}
                  initial="initial"
                  animate="hover"
                >
                  <FiCheckCircle className="text-teal-600 text-3xl" />
                </motion.div>
                <h3 className="text-xl font-bold text-teal-800 mb-2">{success.title}</h3>
                <p className="text-teal-700 mb-4">{success.message}</p>

                <div className="bg-white/30 p-5 rounded-xl w-full max-w-md mb-5 backdrop-blur-md">
                  <ul className="space-y-3">
                    {success.instructions.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-teal-100/50 flex items-center justify-center">
                            <span className="text-teal-600 text-sm font-bold">{index + 1}</span>
                          </div>
                        </div>
                        <p className="ml-3 text-left text-teal-700">{step}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-teal-600 mb-6">{success.note}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={() => window.location.reload()}
                    className="px-5 py-2.5 text-teal-600 font-medium bg-white/50 rounded-full hover:bg-white/70 transition backdrop-blur-md"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Return to Signup
                  </motion.button>
                  <motion.button
                    onClick={async () => {
                      console.log("Resend confirmation for:", email);
                      const { error: resendError } = await supabase.auth.resend({
                        type: "signup",
                        email
                      });
                      if (resendError) {
                        console.error("Resend error:", resendError);
                        setError(resendError.message);
                      }
                    }}
                    className="px-5 py-2.5 text-white font-medium bg-teal-500 rounded-full hover:bg-teal-600 transition backdrop-blur-md"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Resend Confirmation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {/* Google Sign-In Button */}
              <motion.button
                onClick={handleGoogleSignup}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-md disabled:bg-gray-200 disabled:cursor-not-allowed"
                variants={buttonVariants}
                initial="initial"
                whileHover={!loading ? "hover" : ""}
                whileTap={!loading ? "tap" : ""}
              >
                <FcGoogle className="text-xl" />
                Sign up with Google
              </motion.button>

              <div className="flex items-center justify-center">
                <div className="h-px bg-gray-300 w-full"></div>
                <span className="px-4 text-gray-500">or</span>
                <div className="h-px bg-gray-300 w-full"></div>
              </div>

              {/* Email/Password Form */}
              <form onSubmit={handleSignup} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                      <FiMail className="text-teal-500 text-xl" />
                    </motion.div>
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/20 border border-teal-300/30 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded-lg transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                      <FiLock className="text-teal-400 text-xl" />
                    </motion.div>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/20 border border-teal-300/30 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded-lg transition-all duration-300"
                    placeholder="Create a password"
                    required
                    minLength={6}
                  />
                </div>
                <p className="text-xs text-gray-500 -mt-4">Minimum 6 characters</p>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-md disabled:bg-teal-300 disabled:cursor-not-allowed"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover={!loading ? "hover" : ""}
                  whileTap={!loading ? "tap" : ""}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-100" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <FiZap className="text-yellow-300" />
                      Join the Quest
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          )}

          {!success && (
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                By signing up, you agree to our <a href="/terms-policy" className="text-teal-400 hover:underline">Terms</a> and <a href="/terms-policy" className="text-teal-400 hover:underline">Privacy Policy</a>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Signup;