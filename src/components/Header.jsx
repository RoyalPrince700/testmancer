import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import { useAuth } from "../../provider/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import LOGO from "../assets/testmancer-logo.png";

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileData, setProfileData] = useState(null);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
  }, [sidebarOpen]);

  // Check admin status
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (user) {
        try {
          const { data, error } = await supabase
            .from("profiles")
            .select("is_admin")
            .eq("id", user.id)
            .maybeSingle();

          if (error) throw error;
          setIsAdmin(!!data?.is_admin);
        } catch (err) {
          console.error("Failed to verify admin status:", err);
        }
      }
    };

    checkAdminStatus();
  }, [user]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSidebarOpen(false);
    setIsAdmin(false);
    navigate("/login");
  };

  useEffect(() => {
    if (!isAuthenticated || !user) {
      setProfileData(null);
      return;
    }

    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("full_name, avatar_url")
          .eq("id", user.id)
          .single();

        if (error) throw error;
        setProfileData(data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

    fetchProfile();
  }, [isAuthenticated, user]);

  // Sidebar animation variants
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  // Helper to detect active routes including subroutes
  const isActive = (basePath) =>
    location.pathname === basePath || location.pathname.startsWith(basePath + "/");

  // Underline animation props for reuse
  const underlineAnimation = {
    initial: { scaleX: 0, originX: 1 },
    animate: { scaleX: 1, originX: 0 },
    exit: { scaleX: 0, originX: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
    style: { transformOrigin: "right" },
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between py-4 px-4">
          {/* Hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-black focus:outline-none"
            aria-label="Open menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>

          {/* Quick Links */}
          <div className="flex items-center gap-4">
            <Link to="/post-utme" className="relative text-sm font-medium text-black">
              Post-UTME
              {isActive("/post-utme") && (
                <motion.span
                  className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-600 origin-right"
                  {...underlineAnimation}
                />
              )}
            </Link>
            <Link to="/quiz-hub" className="relative text-sm font-medium text-black">
              Quiz Hub
              {isActive("/quiz-hub") && (
                <motion.span
                  className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-600 origin-right"
                  {...underlineAnimation}
                />
              )}
            </Link>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            <img src={LOGO} alt="TestMancer" className="h-6 w-10" />
          </Link>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-10">
                <Link to="/" className="flex items-center gap-2" aria-label="Home">
                  <img src={LOGO} alt="TestMancer" className="h-5 w-18" />
                </Link>
                <nav className="flex gap-6 text-gray-600 items-center">
                  <Link to="/post-utme" className="relative hover:text-teal-600">
                    Post-UTME
                    {isActive("/post-utme") && (
                      <motion.span
                        className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-600 origin-right"
                        {...underlineAnimation}
                      />
                    )}
                  </Link>
                  <Link to="/quiz-hub" className="relative hover:text-teal-600">
                    Quiz Hub
                    {isActive("/quiz-hub") && (
                      <motion.span
                        className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-600 origin-right"
                        {...underlineAnimation}
                      />
                    )}
                  </Link>
                  <Link to="/how-it-works" className="relative hover:text-teal-600">
                    How It Works
                    {location.pathname === "/how-it-works" && (
                      <motion.span
                        className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-600 origin-right"
                        {...underlineAnimation}
                      />
                    )}
                  </Link>
                  <Link to="/about-us" className="relative hover:text-teal-600">
                    About Us
                    {location.pathname === "/about-us" && (
                      <motion.span
                        className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-600 origin-right"
                        {...underlineAnimation}
                      />
                    )}
                  </Link>
                  {isAuthenticated && isAdmin && (
                    <Link to="/admin" className="relative hover:text-teal-600 flex gap-1">
                      <span>Admin</span>
                      <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                      {location.pathname === "/admin" && (
                        <motion.span
                          className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-600 origin-right"
                          {...underlineAnimation}
                        />
                      )}
                    </Link>
                  )}
                </nav>
              </div>
              <div className="flex gap-3 items-center">
                {isAuthenticated ? (
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg"
                    aria-label="Profile"
                  >
                    {profileData?.avatar_url ? (
                      <img
                        src={profileData.avatar_url}
                        alt={profileData.full_name || "Profile"}
                        className="w-8 h-8 rounded-full object-cover border"
                      />
                    ) : (
                      <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center">
                        <FiUser className="text-gray-500 text-lg" />
                      </div>
                    )}
                    <span className="font-medium hidden xl:inline">
                      {profileData?.full_name || "Profile"}
                    </span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="px-4 py-1.5 rounded-lg border border-teal-600 text-teal-600 font-medium hover:bg-teal-50"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar (Mobile) */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Sidebar Panel */}
            <div className="w-64 bg-white shadow-lg p-6 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <Link to="/" onClick={() => setSidebarOpen(false)} aria-label="Home">
                  <img src={LOGO} alt="TestMancer" className="h-6 w-10" />
                </Link>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-teal-600"
                  aria-label="Close menu"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex flex-col gap-4 text-gray-700">
                <Link
                  to="/how-it-works"
                  onClick={() => setSidebarOpen(false)}
                  className="relative hover:text-teal-600"
                >
                  How It Works
                  {location.pathname === "/how-it-works" && (
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-600 origin-right"
                      {...underlineAnimation}
                    />
                  )}
                </Link>
                <Link
                  to="/about-us"
                  onClick={() => setSidebarOpen(false)}
                  className="relative hover:text-teal-600"
                >
                  About Us
                  {location.pathname === "/about-us" && (
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-600 origin-right"
                      {...underlineAnimation}
                    />
                  )}
                </Link>
                {isAuthenticated && isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setSidebarOpen(false)}
                    className="relative hover:text-teal-600 flex gap-2"
                  >
                    Admin Dashboard
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    {location.pathname === "/admin" && (
                      <motion.span
                        className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-600 origin-right"
                        {...underlineAnimation}
                      />
                    )}
                  </Link>
                )}
              </nav>

              {/* Profile/Login at Bottom */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                {isAuthenticated ? (
                  <Link
                    to="/profile"
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg"
                  >
                    {profileData?.avatar_url ? (
                      <img
                        src={profileData.avatar_url}
                        alt={profileData.full_name || "Profile"}
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                    ) : (
                      <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                        <FiUser className="text-gray-500 text-lg" />
                      </div>
                    )}
                    <span className="font-medium">
                      {profileData?.full_name || "Profile"}
                    </span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setSidebarOpen(false)}
                    className="block w-full text-center border border-teal-600 text-teal-600 py-2 rounded-lg hover:bg-teal-50"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>

            {/* Overlay */}
            <div
              className="flex-1 bg-black/40"
              onClick={() => setSidebarOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;