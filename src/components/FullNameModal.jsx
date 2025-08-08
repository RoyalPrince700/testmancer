// src/components/FullNameModal.jsx
import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';

// Import avatar images statically
import avatar1 from '../assets/avatars/avatar_1.jpg';
import avatar2 from '../assets/avatars/avatar_2.jpg';
import avatar3 from '../assets/avatars/avatar_3.jpg';
import avatar4 from '../assets/avatars/avatar_4.jpg';
import avatar5 from '../assets/avatars/avatar_5.jpg';
import avatar6 from '../assets/avatars/avatar_6.jpg';
import avatar7 from '../assets/avatars/avatar_7.jpg';
import avatar8 from '../assets/avatars/avatar_8.jpg';
import avatar9 from '../assets/avatars/avatar_9.jpg';

export default function FullNameModal({ userId, onClose, onSuccess }) {
  const [fullName, setFullName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const avatars = [
    { id: 1, src: avatar1 },
    { id: 2, src: avatar2 },
    { id: 3, src: avatar3 },
    { id: 4, src: avatar4 },
    { id: 5, src: avatar5 },
    { id: 6, src: avatar6 },
    { id: 7, src: avatar7 },
    { id: 8, src: avatar8 },
    { id: 9, src: avatar9 }
  ];

 const handleSubmit = async () => {
  if (!fullName.trim() || !selectedAvatar || !userId) return;

  setLoading(true);

  const { error } = await supabase
    .from('profiles')
    .update({
      full_name: fullName,
      avatar_url: selectedAvatar
    })
    .eq('id', userId);

  setLoading(false);

  if (!error) {
    onClose();
    if (onSuccess) onSuccess({ full_name: fullName, avatar_url: selectedAvatar });
  } else {
    console.error("Supabase update error:", error);
  }
};


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-auto">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Complete Your Profile</h3>
        <p className="text-gray-600 mb-6">
          Personalize your learning experience with a name and avatar
        </p>

        {/* Name Input */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">
            Your Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Avatar Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-3 font-medium">
            Choose Your Avatar
          </label>
          <div className="grid grid-cols-3 gap-3">
            {avatars.map((avatar) => (
              <button
                key={avatar.id}
                onClick={() => setSelectedAvatar(avatar.src)}
                className={`p-1 rounded-lg border-2 transition-all ${
                  selectedAvatar === avatar.src
                    ? 'border-indigo-500 ring-2 ring-indigo-200'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
                  <img
                    src={avatar.src}
                    alt={`Avatar ${avatar.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={loading || !fullName.trim() || !selectedAvatar}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              !fullName.trim() || !selectedAvatar || loading
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {loading ? 'Creating Your Profile...' : 'Save & Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}
