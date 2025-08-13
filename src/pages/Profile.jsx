import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiLogOut, FiEdit, FiUser, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import { avatarList } from "../components/avatarList";
import TestMancerLoader from "../components/TestMancer";

export const Profile = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [isAvatarPickerOpen, setIsAvatarPickerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
  const usernamePattern = /^[a-zA-Z0-9_-]+$/; // only letters, numbers, _ and -

  // Capitalize first letter for display
  const formatDisplayName = (name) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // Fetch user profile data from Supabase
  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      setError(null);

      try {
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("User fetch timed out")), 10000)
        );

        let { data: { user }, error: authError } = await Promise.race([
          supabase.auth.getUser(),
          timeoutPromise,
        ]);

        if (authError || !user) {
          const { data: sessionData, error: refreshError } = await supabase.auth.refreshSession();
          if (refreshError || !sessionData.user) {
            console.error("Auth error or no user:", authError || refreshError);
            if (authError?.message?.includes("User from sub claim in JWT does not exist")) {
              document.cookie.split(";").forEach((c) => {
                document.cookie = c
                  .replace(/^ +/, "")
                  .replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/");
              });
              navigate("/login");
              return;
            }
            throw authError || refreshError || new Error("No user found");
          }
          user = sessionData.user;
        }

        setUserId(user.id);

        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("email, full_name, avatar_url")
          .eq("id", user.id)
          .single();

        if (profileError) {
          if (profileError.code === "PGRST116") {
            navigate("/profile-setup");
            return;
          }
          throw profileError;
        }

        // Store lowercase but display with capital letter
        setDisplayName(formatDisplayName(profile?.full_name || ""));
        setAvatar(profile?.avatar_url || null);
      } catch (err) {
        console.error("Profile fetch error:", err);
        setError(err.message || "Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  // Save changes to Supabase
  const handleSave = async () => {
  if (!userId) {
    setError("Missing user ID. Please re-login.");
    return;
  }

  if (!displayName.trim()) {
    setError("Please enter a username.");
    return;
  }

  if (!usernamePattern.test(displayName)) {
    setError(
      "Username can only contain letters, numbers, underscores (_) and hyphens (-)."
    );
    return;
  }

  setError(null);
  setLoading(true);

  try {
    const lowerUsername = displayName.trim().toLowerCase();

    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        full_name: lowerUsername,
        avatar_url: avatar,
      })
      .eq("id", userId);

    setLoading(false);

    if (updateError) {
      // Handle uniqueness violation from Supabase/Postgres
      if (
        updateError.code === "23505" || // Postgres unique violation
        updateError.message?.toLowerCase().includes("duplicate key")
      ) {
        setError("This username is already taken. Please choose another.");
      } else {
        console.error("Supabase update error:", updateError);
        setError("An error occurred while updating your profile.");
      }
      return;
    }

    // Success
    alert("Profile updated successfully!");
    setDisplayName(formatDisplayName(lowerUsername));
  } catch (err) {
    console.error("Error updating profile:", err);
    setError("An unexpected error occurred.");
    setLoading(false);
  }
};


  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/login");
      } catch (err) {
        console.error("Logout error:", err);
        setError("Failed to log out. Please try again.");
      }
    }
  };

  if (loading) {
    return (
      <TestMancerLoader/>
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

      {/* Error Message */}
      {error && (
        <div className="mx-4 mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-center">
          {error}
        </div>
      )}

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
          <p className="text-xs text-gray-500 mb-1">USERNAME</p>
          <div className="flex items-center">
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="flex-1 outline-none bg-transparent text-base"
              placeholder="Enter your username"
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
