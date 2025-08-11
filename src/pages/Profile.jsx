// src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiLogOut, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";

export const Profile = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        console.error("Auth error or no user:", authError);
        setLoading(false);
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.error("Profile fetch error:", profileError);
      } else {
        setDisplayName(profile?.full_name || "");
        setAvatar(profile?.avatar_url || null);
      }

      setLoading(false);
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout error:", error);
        alert("Failed to log out. Please try again.");
      } else {
        navigate("/login");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      {/* Header */}
      <div className="flex items-center p-4 bg-white border-b border-gray-200">
        <button
          onClick={() => navigate(-1)}
          className="text-xl mr-3 text-gray-900"
          aria-label="Go back"
        >
          <FiArrowLeft />
        </button>
        <h1 className="text-lg font-medium">Profile</h1>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg mx-4 mt-4 mb-3 overflow-hidden">
        <div className="flex items-center p-6 border-b border-gray-100">
          {avatar ? (
            <img
              src={avatar}
              alt="User Avatar"
              className="w-16 h-16 rounded-full border-2 border-gray-200"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <FiUser className="text-gray-400 text-3xl" />
            </div>
          )}
          <div className="ml-6">
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-xl font-semibold">{displayName || "No name available"}</p>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-4 bg-white border-t border-gray-200 mt-auto">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition"
        >
          <FiLogOut className="text-lg" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
