// src/components/GoogleProfileUpdater.jsx
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

export default function GoogleProfileUpdater({ onSuccess }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateProfileFromGoogle = async () => {
      try {
        // Get currently logged-in user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError) throw userError;
        if (!user) {
          setLoading(false);
          return;
        }

        // Extract Google info
        const fullName =
          user.user_metadata.full_name || user.user_metadata.name || "";
        const avatarUrl = user.user_metadata.avatar_url || "";

        // Save to profiles table (create if missing, update if exists)
        const { error: updateError } = await supabase
          .from("profiles")
          .upsert(
            {
              id: user.id, // id from auth
              full_name: fullName,
              avatar_url: avatarUrl
            },
            { onConflict: "id" }
          );

        if (updateError) throw updateError;

        // Optional callback
        if (onSuccess) {
          onSuccess({ full_name: fullName, avatar_url: avatarUrl });
        }
      } catch (err) {
        console.error("Error updating profile from Google:", err.message);
      } finally {
        setLoading(false);
      }
    };

    updateProfileFromGoogle();
  }, [onSuccess]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <p className="text-lg font-medium">Setting up your profile...</p>
        </div>
      </div>
    );
  }

  return null;
}
