import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthContext';
import { supabase } from '../../supabase/supabaseClient';
import { FiUsers, FiAward, FiBarChart2, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import TestMancerLoader from '../components/TestMancer';

const subjectConfig = [
  { title: 'English', totalSubtopics: 21 },
  { title: 'Mathematics', totalSubtopics: 20 },
  { title: 'Current Affairs', totalSubtopics: 15 },
];

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({ userCount: 0, activeUsers: 0, badgesAwarded: 0 });
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        navigate('/login');
        return;
      }
      try {
       const { data, error } = await supabase
              .from('profiles')
              .select('is_admin')
              .eq('id', user.id)
              .single();

            if (data?.is_admin) {
              setIsAdmin(true);
              fetchData();
        } else {
          navigate('/');
        }
      } catch (err) {
        console.error('Error verifying admin:', err.message);
      } finally {
        setLoading(false);
      }
    };
    checkAdminStatus();
  }, [user, navigate]);

  const fetchData = async () => {
    try {
      // Fetch user profiles
      const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('id, full_name, email, role, created_at');
      if (profileError) throw profileError;

      // Fetch progress
      const { data: progressData, error: progressError } = await supabase
        .from('postutme_progress')
        .select('user_id, subtopic')
        .eq('completed', true);
      if (progressError) throw progressError;

      // Fetch badges
      const { data: badgeData, error: badgeError } = await supabase
        .from('postutme_badges')
        .select('user_id');
      if (badgeError) throw badgeError;

      // Fetch streaks
      const { data: streakData, error: streakError } = await supabase
        .from('user_activity')
        .select('user_id, streak');
      if (streakError) throw streakError;

      // Process user data
      const totalSubtopics = subjectConfig.reduce((sum, s) => sum + s.totalSubtopics, 0);
      const userData = profiles.map(profile => {
        const completedSubtopics = progressData.filter(p => p.user_id === profile.id).length;
        return {
          ...profile,
          completed_subtopics: completedSubtopics,
          progress_percentage: Math.round((completedSubtopics / totalSubtopics) * 100) || 0,
          badges: badgeData.filter(b => b.user_id === profile.id).length,
          streak: streakData.find(s => s.user_id === profile.id)?.streak || 0,
        };
      });

      setUsers(userData);
      setStats({
        userCount: profiles.length,
        activeUsers: userData.filter(u => u.completed_subtopics > 0).length,
        badgesAwarded: badgeData.length,
      });
    } catch (err) {
      console.error('Error fetching data:', err.message);
    }
  };

  const filteredUsers = users.filter(user =>
    user.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <TestMancerLoader />;

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Access Denied</h3>
          <p className="text-gray-600 mb-4">Admin access required.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-2 rounded-full"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-gradient-to-r from-teal-400 to-teal-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center max-w-6xl">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FiAward /> Admin Dashboard
          </h1>
          <button
            onClick={() => supabase.auth.signOut()}
            className="bg-white text-teal-600 px-4 py-2 rounded-full"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="container mx-auto p-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-4 shadow-lg flex gap-3"
          >
            <FiUsers className="text-teal-500 text-2xl" />
            <div>
              <p className="text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-teal-500">{stats.userCount}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-4 shadow-lg flex gap-3"
          >
            <FiBarChart2 className="text-pink-500 text-2xl" />
            <div>
              <p className="text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-pink-500">{stats.activeUsers}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-4 shadow-lg flex gap-3"
          >
            <FiAward className="text-purple-500 text-2xl" />
            <div>
              <p className="text-gray-600">Badges Awarded</p>
              <p className="text-2xl font-bold text-purple-500">{stats.badgesAwarded}</p>
            </div>
          </motion.div>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <FiUsers /> Users
            </h2>
            <button
              onClick={() => setExpandedCard(expandedCard === 'users' ? null : 'users')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              {expandedCard === 'users' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
          {expandedCard === 'users' && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
              <table className="w-full border border-gray-100">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left text-gray-700 font-bold">Name</th>
                    <th className="p-3 text-left text-gray-700 font-bold">Email</th>
                    <th className="p-3 text-left text-gray-700 font-bold">Role</th>
                    <th className="p-3 text-left text-gray-700 font-bold">Progress</th>
                    <th className="p-3 text-left text-gray-700 font-bold">Badges</th>
                    <th className="p-3 text-left text-gray-700 font-bold">Streak</th>
                    <th className="p-3 text-left text-gray-700 font-bold">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map(user => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3">{user.full_name || 'N/A'}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="w-20 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${user.progress_percentage}%` }} />
                        </div>
                      </td>
                      <td className="p-3">{user.badges}</td>
                      <td className="p-3">{user.streak} days</td>
                      <td className="p-3">{new Date(user.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;