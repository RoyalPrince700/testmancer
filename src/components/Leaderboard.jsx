// components/Leaderboard.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { FiAward } from 'react-icons/fi';

export default function Leaderboard({ 
  limit = 10, 
  title = "POST-UTME Leaderboard",
  showBadges = true,
  showRank = true,
  className = ""
}) {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('leaderboard')
        .select('*')
        .order('total_points', { ascending: false })
        .limit(limit);
      
      if (!error) setLeaderboard(data);
      setLoading(false);
    };
    
    fetchLeaderboard();
  }, [limit]);

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p>Loading leaderboard...</p>
        </div>
      ) : leaderboard.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No data available yet</p>
      ) : (
        <div className="space-y-4">
          {leaderboard.map((entry, index) => (
            <div 
              key={entry.user_id} 
              className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              {showRank && (
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">
                  {index + 1}
                </div>
              )}
              
              <div className="flex items-center gap-3 flex-1">
                {entry.avatar_url ? (
                  <img 
                    src={entry.avatar_url} 
                    alt={entry.full_name} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-300"
                  />
                ) : (
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10" />
                )}
                <div className="flex-1">
                  <div className="font-medium">{entry.full_name || 'Anonymous'}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiAward className="text-yellow-500" />
                    <span>{entry.total_points} points</span>
                  </div>
                </div>
              </div>
              
              {showBadges && (
                <div className="flex gap-1">
                  {entry.gold_badges > 0 && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      🥇 {entry.gold_badges}
                    </span>
                  )}
                  {entry.silver_badges > 0 && (
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      🥈 {entry.silver_badges}
                    </span>
                  )}
                  {entry.bronze_badges > 0 && (
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                      🥉 {entry.bronze_badges}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}