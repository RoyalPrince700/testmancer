import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { avatarList } from '../components/avatarList';

export default function FullNameModal({ userId, onClose, onSuccess }) {
  const [username, setUsername] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const usernamePattern = /^[a-zA-Z0-9_-]+$/; // only letters, numbers, _ and -

 const handleSubmit = async () => {
  if (!username.trim() || !selectedAvatar || !userId) return;

  // Validation: allowed characters only
  if (!usernamePattern.test(username)) {
    setErrorMessage(
      'Username can only contain letters, numbers, underscores (_) and hyphens (-).'
    );
    return;
  }

  setErrorMessage('');
  setLoading(true);

  const lowerUsername = username.trim().toLowerCase();

  // Check if username is taken (case-insensitive, exact match)
  const { data: existingUsers, error: fetchError } = await supabase
    .from('profiles')
    .select('id')
    .ilike('full_name', lowerUsername); // No % wildcards = exact match

  if (fetchError) {
    console.error('Error checking username:', fetchError);
    setLoading(false);
    return;
  }

  const takenByAnotherUser = existingUsers?.some((u) => u.id !== userId);
  if (takenByAnotherUser) {
    setErrorMessage('This username is already taken. Please choose another.');
    setLoading(false);
    return;
  }

  // Try to update the profile
  const { error: updateError } = await supabase
    .from('profiles')
    .update({
      full_name: lowerUsername,
      avatar_url: selectedAvatar
    })
    .eq('id', userId);

  setLoading(false);

  if (updateError) {
    if (updateError.code === '23505') {
      // 23505 = unique constraint violation
      setErrorMessage('This username is already taken. Please choose another.');
    } else {
      console.error('Supabase update error:', updateError);
      setErrorMessage('An error occurred. Please try again.');
    }
    return;
  }

  // Success
  onClose();
  if (onSuccess) {
    onSuccess({ full_name: lowerUsername, avatar_url: selectedAvatar });
  }
};



  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-auto">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Complete Your Profile</h3>
        <p className="text-gray-600 mb-2">
          Choose a unique username and an avatar.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Username must be unique, case-insensitive, can include letters, numbers, and only
          <span className="font-semibold"> _ </span> or
          <span className="font-semibold"> - </span> as special characters. No spaces allowed.
        </p>

        {/* Username Input */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </div>

        {/* Avatar Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-3 font-medium">
            Choose Your Avatar
          </label>
          <div className="grid grid-cols-3 gap-3">
            {avatarList.map((avatarUrl, index) => (
              <button
                key={index}
                onClick={() => setSelectedAvatar(avatarUrl)}
                className={`p-1 rounded-lg border-2 transition-all ${
                  selectedAvatar === avatarUrl
                    ? 'border-indigo-500 ring-2 ring-indigo-200'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
                  <img
                    src={avatarUrl}
                    alt={`Avatar ${index + 1}`}
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
            disabled={loading || !username.trim() || !selectedAvatar}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              !username.trim() || !selectedAvatar || loading
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
