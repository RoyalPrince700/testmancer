import React, { useState, useEffect, useCallback, Suspense } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import { useAuth } from "../../provider/AuthContext";
import { FiLock } from "react-icons/fi";

const GoogleLogin = React.lazy(() => import('@react-oauth/google').then(module => ({ default: module.GoogleLogin })));

export const Login = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      checkProfile(user.id);
    }
  }, [user, navigate]);

  const checkProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error || !data) {
        navigate("/profile-setup", { state: { from } });
      } else {
        navigate(from, { replace: true });
      }
    } catch (err) {
      setError("Failed to check profile. Please try again.");
      console.error("Profile check error:", err);
    }
  };

  const handleGoogleSuccess = useCallback(async (credentialResponse) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: credentialResponse.credential,
      });

      if (error) throw error;

      const { user } = data;

      const { data: existingProfile, error: profileError } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", user.id)
        .single();

      if (profileError && profileError.code !== "PGRST116") {
        throw profileError;
      }

      if (!existingProfile) {
        const { error: insertError } = await supabase
          .from("profiles")
          .insert({
            id: user.id,
            email: user.email,
          });

        if (insertError) throw insertError;

        navigate("/profile-setup", { state: { from } });
      } else {
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error("Google login error:", err);
      setError(err.message || "Failed to log in with Google. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 border border-gray-200 rounded-lg">
        <div className="text-center mb-6">
          <div className="bg-teal-500 rounded-lg p-3 inline-flex items-center justify-center">
            <FiLock className="text-white text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
            Login for TestMancer
          </h2>
          <p className="text-gray-600">Resume your learning adventure!</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-center">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <div className="w-full flex items-center justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => setError("Google login failed. Please try again.")}
                shape="pill"
                size="large"
                text="signin_with"
                disabled={loading}
              />
            </div>
          </Suspense>

          <div className="text-center">
            <Link
              to="/signup"
              className="text-teal-500 hover:text-teal-700 text-sm font-medium"
            >
              Don't have an account? Signup
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;