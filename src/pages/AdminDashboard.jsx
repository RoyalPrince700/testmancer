import React, { useState, useEffect, useMemo } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { useAuth } from '../../provider/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  FiUsers, FiAward, FiBarChart2, FiClock, FiTrendingUp, 
  FiChevronDown, FiChevronUp, FiSearch, FiActivity 
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid 
} from 'recharts';
import TestMancerLoader from '../components/TestMancer';

// Badge colors for charts
const BADGE_COLORS = {
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#CD7F32'
};

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState({});
  const [expandedCard, setExpandedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: 'created_at', direction: 'desc' });
  const itemsPerPage = 10;
  const [users, setUsers] = useState(null); // Initialize as null


  // Check admin status
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        navigate('/login');
        return;
      }
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
        if (error) throw error;

        if (data.role === 'admin') {
          setIsAdmin(true);
          fetchDashboardData();
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

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_user_view')
        .select('*');
      if (error) throw error;

      // Calculate statistics
      const totalUsers = data.length;
      const activeUsers = data.filter(u => u.progress_points > 0 || u.quiz_points > 0).length;
      const badgesAwarded = data.reduce(
        (sum, u) => sum + (u.gold_badges || 0) + (u.silver_badges || 0) + (u.bronze_badges || 0),
        0
      );
      
      // Calculate averages
      const avgProgress = data.reduce((sum, u) => sum + u.progress_percentage, 0) / totalUsers;
      const avgStreak = data.reduce((sum, u) => sum + (u.streak || 0), 0) / totalUsers;
      
      // Calculate badge distribution
      const goldBadges = data.reduce((sum, u) => sum + (u.gold_badges || 0), 0);
      const silverBadges = data.reduce((sum, u) => sum + (u.silver_badges || 0), 0);
      const bronzeBadges = data.reduce((sum, u) => sum + (u.bronze_badges || 0), 0);
      
      // Prepare progress distribution data
      const progressDistribution = Array.from({ length: 10 }, (_, i) => {
        const min = i * 10;
        const max = (i + 1) * 10;
        const count = data.filter(u => 
          u.progress_percentage >= min && u.progress_percentage < max
        ).length;
        return { range: `${min}-${max}%`, count };
      });

      setStats({
        totalUsers,
        activeUsers,
        badgesAwarded,
        avgProgress: avgProgress.toFixed(1),
        avgStreak: avgStreak.toFixed(1),
        badgeDistribution: [
          { name: 'Gold', value: goldBadges },
          { name: 'Silver', value: silverBadges },
          { name: 'Bronze', value: bronzeBadges }
        ],
        progressDistribution
      });

      setUsers(data);
    } catch (err) {
      console.error('Error fetching admin dashboard data:', err.message);
    }
  };

  // Handle sorting
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Process and sort users
   // Process and sort users with null checks
  const processedUsers = useMemo(() => {
    if (!users) return [];
    
    let sortableUsers = [...users];
    if (sortConfig.key) {
      sortableUsers.sort((a, b) => {
        // Handle null values in sorting
        const aValue = a[sortConfig.key] || (typeof a[sortConfig.key] === 'number' ? 0 : '');
        const bValue = b[sortConfig.key] || (typeof b[sortConfig.key] === 'number' ? 0 : '');
        
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableUsers;
  }, [users, sortConfig]);


  // Filter users based on search term
  const filteredUsers = useMemo(() => {
    return processedUsers.filter(user => {
      const name = user.full_name || '';
      const email = user.email || '';
      return (
        name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [processedUsers, searchTerm]);

  // Pagination
  const paginatedUsers = useMemo(() => {
    return filteredUsers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredUsers, currentPage]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  if (loading) return <TestMancerLoader />;

  if (!isAdmin)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Admin access required</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FiAward className="text-yellow-300" /> Admin Dashboard
          </h1>
          <button
            onClick={() => supabase.auth.signOut()}
            className="bg-white text-teal-600 px-4 py-2 rounded-full hover:bg-teal-50 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="container mx-auto p-4 max-w-7xl">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <StatCard 
            icon={<FiUsers className="text-2xl" />}
            title="Total Users"
            value={stats.totalUsers}
            color="text-teal-500"
            delay={0}
          />
          <StatCard 
            icon={<FiActivity className="text-2xl" />}
            title="Active Users"
            value={stats.activeUsers}
            color="text-pink-500"
            delay={0.1}
          />
          <StatCard 
            icon={<FiAward className="text-2xl" />}
            title="Badges Awarded"
            value={stats.badgesAwarded}
            color="text-purple-500"
            delay={0.2}
          />
          <StatCard 
            icon={<FiBarChart2 className="text-2xl" />}
            title="Avg Progress"
            value={`${stats.avgProgress || 0}%`}
            color="text-yellow-500"
            delay={0.3}
          />
          <StatCard 
            icon={<FiTrendingUp className="text-2xl" />}
            title="Avg Streak"
            value={`${stats.avgStreak || 0} days`}
            color="text-orange-500"
            delay={0.4}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Progress Distribution Chart */}
          <ChartCard 
            title="Progress Distribution"
            icon={<FiBarChart2 />}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats.progressDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar 
                  dataKey="count" 
                  name="Number of Users"
                  fill="#4f46e5" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Badge Distribution Chart */}
          <ChartCard 
            title="Badge Distribution"
            icon={<FiAward />}
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stats.badgeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  <Cell fill={BADGE_COLORS.gold} />
                  <Cell fill={BADGE_COLORS.silver} />
                  <Cell fill={BADGE_COLORS.bronze} />
                </Pie>
                <Tooltip formatter={(value) => [value, 'Badges']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Users Table Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FiUsers /> Users Overview
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative w-full sm:w-64">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <button
                  onClick={() => setExpandedCard(expandedCard === 'users' ? null : 'users')}
                  className="flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors"
                >
                  {expandedCard === 'users' ? (
                    <>
                      <FiChevronUp /> Collapse
                    </>
                  ) : (
                    <>
                      <FiChevronDown /> Expand
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {expandedCard === 'users' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-x-auto"
            >
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <TableHeader 
                      title="Name" 
                      sortKey="full_name" 
                      currentSort={sortConfig} 
                      onSort={handleSort} 
                    />
                    <TableHeader 
                      title="Email" 
                      sortKey="email" 
                      currentSort={sortConfig} 
                      onSort={handleSort} 
                    />
                    <TableHeader 
                      title="Role" 
                      sortKey="role" 
                      currentSort={sortConfig} 
                      onSort={handleSort} 
                    />
                    <TableHeader 
                      title="Progress" 
                      sortKey="progress_percentage" 
                      currentSort={sortConfig} 
                      onSort={handleSort} 
                    />
                    <TableHeader 
                      title="Badges" 
                      sortKey="gold_badges" 
                      currentSort={sortConfig} 
                      onSort={handleSort} 
                    />
                    <TableHeader 
                      title="Streak" 
                      sortKey="streak" 
                      currentSort={sortConfig} 
                      onSort={handleSort} 
                    />
                    <TableHeader 
                      title="Joined" 
                      sortKey="created_at" 
                      currentSort={sortConfig} 
                      onSort={handleSort} 
                    />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedUsers.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="p-3">{user.full_name}</td>
                      <td className="p-3 text-sm text-gray-600">{user.email}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.role === 'admin' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-teal-500 h-2 rounded-full" 
                              style={{ width: `${user.progress_percentage || 0}%` }}
                            ></div>
                          </div>
                          <span>{user.progress_percentage || 0}%</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-1">
                          {user.gold_badges > 0 && (
                            <span className="text-yellow-500" title="Gold badges">●</span>
                          )}
                          {user.silver_badges > 0 && (
                            <span className="text-gray-400" title="Silver badges">●</span>
                          )}
                          {user.bronze_badges > 0 && (
                            <span className="text-yellow-800" title="Bronze badges">●</span>
                          )}
                          {(user.gold_badges || 0) + (user.silver_badges || 0) + (user.bronze_badges || 0)}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-1">
                          <FiTrendingUp className="text-green-500" />
                          {user.streak || 0} days
                        </div>
                      </td>
                      <td className="p-3 text-sm text-gray-500">
                        {new Date(user.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-between items-center p-4 border-t">
                  <div className="text-sm text-gray-600">
                    Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredUsers.length)}-
                    {Math.min(currentPage * itemsPerPage, filteredUsers.length)} of {filteredUsers.length} users
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === 1 
                          ? 'bg-gray-100 text-gray-400' 
                          : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                      }`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === totalPages 
                          ? 'bg-gray-100 text-gray-400' 
                          : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, title, value, color, delay }) => (
  <motion.div 
    className="bg-white rounded-2xl p-4 shadow-lg flex gap-3 items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <div className={`p-3 rounded-full ${color.replace('text', 'bg')} bg-opacity-20`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-600 text-sm">{title}</p>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  </motion.div>
);

// Chart Card Component
const ChartCard = ({ title, icon, children }) => (
  <div className="bg-white p-4 rounded-2xl shadow-lg">
    <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
      {icon} {title}
    </h3>
    {children}
  </div>
);

// Table Header Component
const TableHeader = ({ title, sortKey, currentSort, onSort }) => (
  <th 
    className="p-3 text-left text-gray-700 font-bold cursor-pointer hover:bg-gray-100"
    onClick={() => onSort(sortKey)}
  >
    <div className="flex items-center gap-1">
      {title}
      {currentSort.key === sortKey && (
        <span>{currentSort.direction === 'asc' ? '▲' : '▼'}</span>
      )}
    </div>
  </th>
);

export default AdminDashboard;