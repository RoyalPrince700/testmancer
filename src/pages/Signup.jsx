import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import { useAuth } from "../../provider/AuthContext";
import { FiLock, FiMail, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  // Google popup signup success
 const handleGoogleSuccess = async (credentialResponse) => { 
  try {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: credentialResponse.credential,
    });

    if (error) throw error;

    const user = data?.user;
    if (user) {
      const fullName = user.user_metadata?.full_name || user.user_metadata?.name || "";
      const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture || "";

      // Update or insert profile info
      await supabase
        .from("profile")
        .upsert(
          {
            id: user.id, // your profile PK
            full_name: fullName,
            avatar_url: avatarUrl,
          },
          { onConflict: "id" }
        );

      console.log("Profile updated with Google info");
    }

    navigate(from, { replace: true });
  } catch (err) {
    console.error("Google signup error:", err);
    setError(err.message || "Failed to sign up with Google. Please try again.");
  } finally {
    setLoading(false);
  }
};


  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        setError(signUpError.message);
      } else if (data.user) {
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error("Unexpected signup error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
  <section className="min-h-screen flex items-center justify-center bg-teal-50 px-4">
    <motion.div
      className="max-w-4xl w-full rounded-2xl flex justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* SignUp Form */}
      <div className="w-full md:w-3/5 bg-white backdrop-blur-lg p-10 border border-teal-200/20 rounded-2xl">
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
            Sign Up for TestMancer
          </motion.h2>
          <p className="text-gray-500">Begin your learning adventure!</p>
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

        <div className="space-y-6">
          {/* Google SignUp Button */}
          <motion.div
            className="w-full flex items-center justify-center"
            variants={buttonVariants}
            initial="initial"
            whileHover={!loading ? "hover" : ""}
            whileTap={!loading ? "tap" : ""}
          >
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError("Google signup failed. Please try again.")}
              shape="pill"
              size="large"
              text="signup_with"
            />
          </motion.div>

          <div className="flex items-center justify-center">
            <div className="h-px bg-gray-300 w-full"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="h-px bg-gray-300 w-full"></div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSignUp} className="space-y-6">
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
                className="w-full pl-12 pr-4 py-3 bg-white/20 border border-teal-300/50 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded-lg transition-all duration-300"
                placeholder="Your email"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                  <FiLock className="text-teal-500 text-xl" />
                </motion.div>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/20 border border-teal-300/50 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded-lg transition-all duration-300"
                placeholder="Create a password"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:bg-teal-300 disabled:transform-none"
              variants={buttonVariants}
              initial="initial"
              whileHover={!loading ? "hover" : ""}
              whileTap={!loading ? "tap" : ""}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing Up...
                </>
              ) : (
                <>
                  Join Quest
                  <FiArrowRight className="text-sm" />
                </>
              )}
            </motion.button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <Link 
            to="/login" 
            className="text-teal-400 hover:text-teal-600 text-sm font-semibold"
          >
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </motion.div>
  </section>
);
};

export default Signup;