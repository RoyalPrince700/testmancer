import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import { useAuth } from "../../provider/AuthContext";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";

const AuthPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: credentialResponse.credential,
      });

      if (error) throw error;
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Google auth error:", err);
      setError(err.message || "Failed to authenticate with Google. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    initial: { scale: 1, boxShadow: "0 0 0 rgba(45, 212, 191, 0)" },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(45, 212, 191, 0.5)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-teal-50 px-4">
      <motion.div
        className="max-w-4xl w-full rounded-2xl flex justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
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
              Welcome to TestMancer
            </motion.h2>
            <p className="text-gray-500">Sign in or sign up instantly with Google.</p>
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

          <motion.div
            className="w-full flex flex-col items-center gap-4"
            variants={buttonVariants}
            initial="initial"
            whileHover={!loading ? "hover" : ""}
            whileTap={!loading ? "tap" : ""}
          >
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError("Google authentication failed. Please try again.")}
              shape="pill"
              size="large"
              text="continue_with"
            />
            <p className="text-sm text-gray-500">
              Secure, fast, and password-free.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AuthPage;
