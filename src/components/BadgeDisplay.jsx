// components/BadgeDisplay.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { useAuth } from '../../provider/AuthContext';

export default function BadgeDisplay() {
  const { user } = useAuth();
  const [badges, setBadges] = useState([]);
  
  useEffect(() => {
    const fetchBadges = async () => {
      if (!user) return;
      
      const { data, error } = await supabase
        .from('postutme_badges')
        .select('*')
        .eq('user_id', user.id);
      
      if (!error) setBadges(data);
    };
    
    fetchBadges();
  }, [user]);

  const badgeConfig = {
    gold: { label: 'Master Achiever', color: 'bg-yellow-400' },
    silver: { label: 'Topic Master', color: 'bg-gray-300' },
    bronze: { label: 'Subject Expert', color: 'bg-amber-700' }
  };

  return (
    <div className="p-4 bg-indigo-50 rounded-xl">
      <h3 className="font-bold mb-2">Your Badges</h3>
      
      {badges.length === 0 ? (
        <p>No badges earned yet. Complete topics to earn badges!</p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <div 
              key={badge.id}
              className={`${badgeConfig[badge.badge_type].color} w-16 h-16 rounded-full flex items-center justify-center text-white`}
              title={`${badgeConfig[badge.badge_type].label} - ${badge.subject || 'All Subjects'}`}
            >
              {badge.badge_type === 'gold' && '🥇'}
              {badge.badge_type === 'silver' && '🥈'}
              {badge.badge_type === 'bronze' && '🥉'}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}