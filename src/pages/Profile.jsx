// src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiLogOut, FiEdit, FiUser, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient"; // adjust path if needed
import { avatarList } from "../components/avatarList"; // import your avatar list array

export const Profile = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [isAvatarPickerOpen, setIsAvatarPickerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  // Fetch user profile data from Supabase
  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);

      // Get the logged-in user
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) {
        console.error("Auth error or no user:", authError);
        setLoading(false);
        return;
      }
      setUserId(user.id);

      // Fetch the profile from "profiles" table
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

  // Save changes to Supabase
  const handleSave = async () => {
    if (!userId) {
      alert("Missing user ID. Please re-login.");
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: displayName,
        avatar_url: avatar
      })
      .eq("id", userId);

    if (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    } else {
      alert("Profile updated successfully!");
    }
  };

  // Logout logic
  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout error:", error);
        alert("Failed to log out. Please try again.");
      } else {
        navigate("/login"); // Redirect to login page
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
        <button onClick={() => navigate(-1)} className="text-xl mr-3 text-gray-900">
          <FiArrowLeft />
        </button>
        <h1 className="text-lg font-medium">Profile</h1>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg mx-4 mt-4 mb-3 overflow-hidden">
        <div
          className="flex items-center p-4 border-b border-gray-100 cursor-pointer"
          onClick={() => setIsAvatarPickerOpen(true)}
        >
          {avatar ? (
            <img
              src={avatar}
              alt="Avatar"
              className="w-12 h-12 rounded-full border-2 border-gray-200"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <FiUser className="text-gray-500 text-xl" />
            </div>
          )}
          <div className="ml-4 flex-1">
            <p className="text-xs text-gray-500">Tap to change</p>
            <p className="font-medium">Profile Photo</p>
          </div>
          <FiChevronRight className="text-gray-400" />
        </div>

        <div className="p-4 border-b border-gray-100">
          <p className="text-xs text-gray-500 mb-1">DISPLAY NAME</p>
          <div className="flex items-center">
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="flex-1 outline-none bg-transparent text-base"
              placeholder="Enter your name"
            />
            <FiEdit className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Save & Logout Buttons */}
      <div className="p-4 bg-white border-t border-gray-200 mt-4 space-y-3">
        <button
          onClick={handleSave}
          className="w-full bg-black text-white py-3 rounded-lg font-medium"
        >
          Save Changes
        </button>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg font-medium"
        >
          <FiLogOut className="text-lg" />
          Logout
        </button>
      </div>

      {/* Avatar Picker Modal */}
      {isAvatarPickerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-80 max-w-sm">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-center font-medium">Choose Profile Photo</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4">
              {avatarList.map((av, idx) => (
                <img
                  key={idx}
                  src={av}
                  alt="Avatar option"
                  className={`w-20 h-20 rounded-full cursor-pointer object-cover ${
                    avatar === av ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => {
                    setAvatar(av);
                    setIsAvatarPickerOpen(false);
                  }}
                />
              ))}
            </div>
            <div className="p-2 border-t border-gray-200">
              <button
                onClick={() => setIsAvatarPickerOpen(false)}
                className="w-full py-3 text-gray-900 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
