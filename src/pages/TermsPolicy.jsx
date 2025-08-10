import React, { useState } from 'react';
import { FiShield, FiFileText,FiArrowRight , FiLock, FiUser, FiDatabase, FiMail, FiCheck, FiAward, FiBook, FiBarChart2 } from 'react-icons/fi';
import { motion } from 'framer-motion';

const TermsPolicy = () => {
  const [activeSection, setActiveSection] = useState('terms');
  
  const sections = [
    { id: 'terms', label: 'Terms of Service', icon: <FiFileText /> },
    { id: 'privacy', label: 'Privacy Policy', icon: <FiLock /> },
    { id: 'cookies', label: 'Cookie Policy', icon: <FiShield /> }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-teal-400/30"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-blue-400/20"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            TestMancer Policies
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Your trust is our top priority. Learn how we protect your data and govern our learning platform.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="w-20 h-1 bg-teal-300 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Side Navigation */}
            <div className="lg:w-1/4">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-6 sticky top-6 border border-teal-100/50"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-2 rounded-xl">
                    <FiShield className="text-white" />
                  </div>
                  <span>Your Policy Guide</span>
                </h2>
                
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 font-medium border border-teal-200 shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:shadow-sm'
                      }`}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className={`text-lg ${activeSection === section.id ? 'text-teal-600' : 'text-gray-500'}`}>
                        {section.icon}
                      </span>
                      {section.label}
                    </motion.button>
                  ))}
                </nav>
                
                <div className="mt-8 p-4 bg-teal-50/50 rounded-xl border border-teal-100">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FiAward className="text-teal-600" />
                    Last Updated
                  </h3>
                  <p className="text-gray-600">August 10, 2025</p>
                  <p className="text-sm text-gray-500 mt-2">Version 2.1</p>
                </div>
              </motion.div>
            </div>
            
            {/* Content Area */}
            <div className="lg:w-3/4">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-100/50"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                {/* Terms of Service */}
                {activeSection === 'terms' && (
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-4 shadow-md">
                        <FiFileText className="text-white text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Terms of Service</h2>
                        <p className="text-gray-600">Effective: August 10, 2025</p>
                      </div>
                    </div>
                    
                    <div className="prose max-w-none">
                      <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                            <span className="text-teal-600 font-bold">1</span>
                          </div>
                          Acceptance of Terms
                        </h3>
                        <p className="text-gray-700 mb-4">
                          By accessing or using TestMancer ("Platform"), you agree to be bound by these Terms. 
                          If you don't agree, you may not use our gamified learning platform.
                        </p>
                      </div>
                      
                      <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-bold">2</span>
                          </div>
                          Platform Description
                        </h3>
                        <p className="text-gray-700 mb-4">
                          TestMancer provides an interactive learning platform where users can:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <li className="flex items-start gap-3 bg-teal-50/50 p-3 rounded-lg">
                            <FiBook className="text-teal-600 mt-1 flex-shrink-0" />
                            <span>Create and take knowledge tests</span>
                          </li>
                          <li className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg">
                            <FiAward className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Earn badges and achievements</span>
                          </li>
                          <li className="flex items-start gap-3 bg-teal-50/50 p-3 rounded-lg">
                            <FiBarChart2 className="text-teal-600 mt-1 flex-shrink-0" />
                            <span>Track learning progress</span>
                          </li>
                          <li className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg">
                            <FiUser className="text-blue-600 mt-1 flex-shrink-0" />
                            <span>Compete with other learners</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                            <span className="text-teal-600 font-bold">3</span>
                          </div>
                          User Accounts
                        </h3>
                        <p className="text-gray-700 mb-4">
                          To access all features, you must create an account. Keep your credentials secure!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-teal-50/50 p-4 rounded-lg border border-teal-100">
                            <div className="flex items-center gap-3 mb-2">
                              <FiCheck className="text-teal-600" />
                              <h4 className="font-bold text-gray-900">Age Requirement</h4>
                            </div>
                            <p className="text-gray-600">Must be at least 13 years old to use our Platform</p>
                          </div>
                          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                            <div className="flex items-center gap-3 mb-2">
                              <FiCheck className="text-blue-600" />
                              <h4 className="font-bold text-gray-900">Account Security</h4>
                            </div>
                            <p className="text-gray-600">You're responsible for all activities under your account</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-bold">4</span>
                          </div>
                          Prohibited Conduct
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Keep TestMancer a positive learning environment by avoiding:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-red-50/50 p-4 rounded-lg border border-red-100">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                <span className="text-red-600 text-xs font-bold">!</span>
                              </div>
                              <h4 className="font-bold text-gray-900">Cheating</h4>
                            </div>
                            <p className="text-gray-600">No automated bots or unfair advantages</p>
                          </div>
                          <div className="bg-red-50/50 p-4 rounded-lg border border-red-100">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                <span className="text-red-600 text-xs font-bold">!</span>
                              </div>
                              <h4 className="font-bold text-gray-900">Harassment</h4>
                            </div>
                            <p className="text-gray-600">Respect all community members</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Privacy Policy */}
                {activeSection === 'privacy' && (
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-4 shadow-md">
                        <FiLock className="text-white text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
                        <p className="text-gray-600">Effective: August 10, 2025</p>
                      </div>
                    </div>
                    
                    <div className="prose max-w-none">
                      <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                            <span className="text-teal-600 font-bold">1</span>
                          </div>
                          Information We Collect
                        </h3>
                        <p className="text-gray-700 mb-4">
                          We collect data to enhance your learning experience:
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-teal-50/50 rounded-xl p-5 border border-teal-100">
                            <div className="flex items-center gap-3 mb-3">
                              <FiUser className="text-teal-600 text-xl" />
                              <h4 className="font-bold text-gray-900">Profile Data</h4>
                            </div>
                            <p className="text-gray-600">
                              Username, avatar, and learning preferences
                            </p>
                          </div>
                          
                          <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                            <div className="flex items-center gap-3 mb-3">
                              <FiDatabase className="text-blue-600 text-xl" />
                              <h4 className="font-bold text-gray-900">Progress Data</h4>
                            </div>
                            <p className="text-gray-600">
                              Test results, badges earned, and skill levels
                            </p>
                          </div>
                          
                          <div className="bg-teal-50/50 rounded-xl p-5 border border-teal-100">
                            <div className="flex items-center gap-3 mb-3">
                              <FiMail className="text-teal-600 text-xl" />
                              <h4 className="font-bold text-gray-900">Contact Info</h4>
                            </div>
                            <p className="text-gray-600">
                              Email for account verification and notifications
                            </p>
                          </div>
                          
                          <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                            <div className="flex items-center gap-3 mb-3">
                              <FiAward className="text-blue-600 text-xl" />
                              <h4 className="font-bold text-gray-900">Achievements</h4>
                            </div>
                            <p className="text-gray-600">
                              Badges, streaks, and leaderboard positions
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-bold">2</span>
                          </div>
                          How We Use Information
                        </h3>
                        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 mb-6">
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <li className="flex items-start gap-3">
                              <FiCheck className="text-teal-600 mt-1 flex-shrink-0" />
                              <span>Personalize your learning journey</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <FiCheck className="text-blue-600 mt-1 flex-shrink-0" />
                              <span>Track and visualize your progress</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <FiCheck className="text-teal-600 mt-1 flex-shrink-0" />
                              <span>Award achievements and badges</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <FiCheck className="text-blue-600 mt-1 flex-shrink-0" />
                              <span>Improve our educational content</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                            <span className="text-teal-600 font-bold">3</span>
                          </div>
                          Data Security
                        </h3>
                        <div className="bg-white rounded-xl p-6 border border-teal-100 shadow-sm">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex flex-col items-center text-center">
                              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-2">
                                <FiLock className="text-teal-600" />
                              </div>
                              <span className="text-sm font-medium">Encryption</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-2">
                                <FiShield className="text-blue-600" />
                              </div>
                              <span className="text-sm font-medium">Access Controls</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-2">
                                <FiDatabase className="text-teal-600" />
                              </div>
                              <span className="text-sm font-medium">Secure Storage</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-2">
                                <FiUser className="text-blue-600" />
                              </div>
                              <span className="text-sm font-medium">Privacy Training</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Cookie Policy */}
                {activeSection === 'cookies' && (
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-4 shadow-md">
                        <FiShield className="text-white text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">Cookie Policy</h2>
                        <p className="text-gray-600">Effective: August 10, 2025</p>
                      </div>
                    </div>
                    
                    <div className="prose max-w-none">
                      <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-bold">1</span>
                          </div>
                          Essential Cookies
                        </h3>
                        <div className="bg-blue-50/50 rounded-xl p-5 mb-6">
                          <p className="text-gray-700 mb-4">
                            These cookies are necessary for TestMancer to function:
                          </p>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <span className="text-blue-600 text-xs font-bold">S</span>
                              </div>
                              <span>Session management for your learning progress</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <span className="text-blue-600 text-xs font-bold">L</span>
                              </div>
                              <span>Remembering your login state</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                            <span className="text-teal-600 font-bold">2</span>
                          </div>
                          Learning Experience Cookies
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full border border-teal-100">
                            <thead>
                              <tr className="bg-teal-50">
                                <th className="py-3 px-4 text-left text-gray-700 font-bold">Cookie Type</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-bold">Purpose</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-bold">Example</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-teal-100">
                                <td className="py-3 px-4 font-medium">Preferences</td>
                                <td className="py-3 px-4">Enhance your learning</td>
                                <td className="py-3 px-4">Theme, font size</td>
                              </tr>
                              <tr className="border-b border-teal-100 bg-white">
                                <td className="py-3 px-4 font-medium">Performance</td>
                                <td className="py-3 px-4">Track progress</td>
                                <td className="py-3 px-4">Test attempts, time spent</td>
                              </tr>
                              <tr className="border-b border-teal-100">
                                <td className="py-3 px-4 font-medium">Gamification</td>
                                <td className="py-3 px-4">Reward achievements</td>
                                <td className="py-3 px-4">Streaks, badges</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
              
              {/* Contact Card */}
              <motion.div 
                className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 mt-10 text-white shadow-xl"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Need help with our policies?</h3>
                    <p className="text-teal-100">
                      Our support team is ready to answer any questions about your data or account.
                    </p>
                  </div>
                  <div>
                    <motion.a 
                      href="mailto:support@testmancer.com" 
                      className="px-8 py-3 bg-white text-teal-700 font-bold rounded-full hover:bg-teal-50 transition flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Support
                      <FiArrowRight />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPolicy;