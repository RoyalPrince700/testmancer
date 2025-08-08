// new/src/services/postutmeService.js
import { supabaseService } from './supabaseService';

class PostutmeService {
  constructor() {
    this.supabase = supabaseService.supabase;
  }

  // Mark a UTME course as complete and award points
  async markCourseComplete({ subject, topic, subtopic, points = 3 }) {
    const user = await supabaseService.getCurrentUser();
    if (!user) throw new Error('User not found');

    try {
      const { error } = await this.supabase
  .from('postutme_progress')
  .insert([{
    user_id: user.id,
    subject,
    topic,
    subtopic,
    completed: true,
    points_earned: points,
    completed_at: new Date().toISOString()
  }]);


      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Mark course complete failed:', error);
      throw error;
    }
  }

  // Check if a user has completed a specific UTME course
  async getCourseProgress({ subject, topic, subtopic }) {
    const user = await supabaseService.getCurrentUser();
    if (!user) return false;

    try {
      const { data, error } = await this.supabase
        .from('postutme_progress')
        .select('id')
        .eq('user_id', user.id)
        .eq('subject', subject)
        .eq('topic', topic)
        .eq('subtopic', subtopic)
        .maybeSingle();

      if (error) throw error;
      return !!data;
    } catch (error) {
      console.error('Fetch course progress failed:', error);
      return false;
    }
  }

  // Fetch user's total points and leaderboard rank
  async getUserPointsAndRank() {
    const user = await supabaseService.getCurrentUser();
    if (!user) return { points: 0, rank: 0 };

    try {
      const { data, error } = await this.supabase
        .from('leaderboard')
        .select('total_points, rank')
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      return {
        points: data?.total_points || 0,
        rank: data?.rank || 0
      };
    } catch (error) {
      console.error('Fetch points and rank failed:', error);
      return { points: 0, rank: 0 };
    }
  }

  // Record a quiz attempt
  async recordQuizAttempt({ 
    quizId, 
    score, 
    totalQuestions, 
    pointsEarned, 
    isFirstAttempt = true 
  }) {
    const user = await supabaseService.getCurrentUser();
    if (!user) throw new Error('User not found');

    try {
      const { error } = await this.supabase
        .from('quiz_attempts')
        .insert([{
          user_id: user.id,
          quiz_id: quizId,
          score,
          total_questions: totalQuestions,
          points_earned: pointsEarned,
          is_first_attempt: isFirstAttempt
        }]);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Record quiz attempt failed:', error);
      throw error;
    }
  }

  // Update user streak activity
  async updateStreak() {
  const user = await supabaseService.getCurrentUser();
  if (!user) return 0;

  try {
    const { data, error } = await this.supabase
      .from('user_activity')
      .select('streak, last_active_at')
      .eq('user_id', user.id)
      .single();

    if (error && error.code !== 'PGRST116') throw error;

    const currentStreak = data?.streak || 0;
    const lastActive = data?.last_active_at ? new Date(data.last_active_at) : null;
    const today = new Date();

    let newStreak = 1;
    if (lastActive) {
      const isConsecutive = (
        lastActive.getDate() === today.getDate() - 1 &&
        lastActive.getMonth() === today.getMonth() &&
        lastActive.getFullYear() === today.getFullYear()
      );
      newStreak = isConsecutive ? currentStreak + 1 : 1;
    }

    await this.supabase
      .from('user_activity')
      .upsert([{
        user_id: user.id,
        streak: newStreak,
        last_active_at: today.toISOString()
      }], {
        onConflict: ['user_id']
      });

    return newStreak;
  } catch (error) {
    console.error('Update streak failed:', error);
    return 0;
  }
}

}

export const postutmeService = new PostutmeService();