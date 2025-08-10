import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import { useAuth } from "../../provider/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import LOGO from "../assets/snaptest-logo.png";

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

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

  // Sidebar animation
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
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
          >
            <FiMenu className="w-6 h-6" />
          </button>
          
          {/* Quick Links */}
          <div className="flex items-center gap-4">
            <Link to="/post-utme" className="text-sm font-medium text-black">
              PostUtme
            </Link>
            <Link to="/quiz-hub" className="text-sm font-medium text-black">
              Quiz Hub
            </Link>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={LOGO} alt="SnapTest" className="h-6 w-6" />
          </Link>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-10">
                <Link to="/" className="flex items-center gap-2">
                  <img src={LOGO} alt="SnapTest" className="h-5 w-18" />
                </Link>
                <nav className="flex gap-6 text-gray-600 items-center">
                 
                  <Link to="/post-utme" className="hover:text-teal-600">
                    PostUtme
                  </Link>
                  <Link to="/quiz-hub" className="hover:text-teal-600">
                    Quiz Hub
                  </Link>
                   <Link to="/how-it-works" className="hover:text-teal-600">
                    How It Works
                  </Link>
                  <Link to="/about-us" className="hover:text-teal-600">
                    About Us
                  </Link>
                
                  {isAuthenticated && isAdmin && (
                    <Link to="/admin" className="hover:text-teal-600 flex gap-1">
                      <span>Admin</span>
                      <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    </Link>
                  )}
                </nav>
              </div>
              <div className="flex gap-3">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="bg-teal-600 px-4 py-1.5 rounded-lg text-white font-medium hover:shadow-md"
                  >
                    Logout
                  </button>
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
              <div className="flex justify-between items-center mb-6">
                <Link to="/" onClick={() => setSidebarOpen(false)}>
                  <img src={LOGO} alt="SnapTest" className="h-6 w-6" />
                </Link>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-teal-600"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 text-gray-700">
                <Link
                  to="/how-it-works"
                  onClick={() => setSidebarOpen(false)}
                  className="hover:text-teal-600"
                >
                  How It Works
                </Link>
                <Link
                  to="/about-us"
                  onClick={() => setSidebarOpen(false)}
                  className="hover:text-teal-600"
                >
                  About Us
                </Link>
                {isAuthenticated && (
                  <div className="flex flex-col gap-4">
                   <Link
                    to="/profile"
                    onClick={() => setSidebarOpen(false)}
                    className="hover:text-teal-600"
                  >
                    Profile
                  </Link>
                  </div>
                 
                  
                )}
                {isAuthenticated && isAdmin && (
                  <Link
                    to="/admin"
                    onClick={() => setSidebarOpen(false)}
                    className="hover:text-teal-600 flex gap-2"
                  >
                    Admin Dashboard
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  </Link>
                )}
              </nav>

              {/* Auth Button */}
              <div className="mt-auto pt-6">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                  >
                    Logout
                  </button>
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

            {/* Overlay (click to close) */}
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
