import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import { useAuth } from "../../provider/AuthContext";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";

export const Login = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      // Check if profile exists in Supabase
      checkProfile(user.id);
    }
  }, [user, navigate]);

  const checkProfile = async (userId) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error || !data) {
      // No profile exists, redirect to profile setup
      navigate("/profile-setup", { state: { from } });
    } else {
      // Profile exists, navigate to intended page
      navigate(from, { replace: true });
    }
  };

 const handleGoogleSuccess = async (credentialResponse) => {
  try {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: credentialResponse.credential,
    });

    if (error) throw error;

    const { user } = data;

    // Check if profile already exists
    const { data: existingProfile, error: profileError } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", user.id)
      .single();

    if (profileError && profileError.code !== "PGRST116") {
      // Real error from Supabase (not "no rows found")
      throw profileError;
    }

    if (!existingProfile) {
      // Insert new profile if doesn't exist
      const { error: insertError } = await supabase.from("profiles").insert({
        id: user.id,
        email: user.email,
      });
      if (insertError) throw insertError;

      // Redirect to profile setup for first-time users
      navigate("/profile-setup", { state: { from } });
    } else {
      // Existing user, go to intended page
      navigate(from, { replace: true });
    }
  } catch (err) {
    console.error("Google signup error:", err);
    setError(err.message || "Failed to sign up with Google. Please try again.");
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
              Login for TestMancer
            </motion.h2>
            <p className="text-gray-500">Resume your learning adventure!</p>
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

            <div className="mt-8 text-center">
              <Link 
                to="/signup" 
                className="text-teal-400 hover:text-teal-600 text-sm font-semibold"
              >
                Don't have an account? Signup
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Login;