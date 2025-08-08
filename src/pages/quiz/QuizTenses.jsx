import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../provider/AuthContext';
import { supabase } from '../../../supabase/supabaseClient';
import { useProgress } from '../../../provider/ProgressContext';

export const QuizTenses = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [quizProgress, setQuizProgress] = useState(null);
  const { progress, setProgress } = useProgress();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const quizId = "tenses";
  
  // Quiz questions data remains the same...

   // Quiz questions data with all 30 questions
  const questions = [
    {
      id: 1,
      text: "Which is correct?",
      options: [
        { id: 'a', text: "She write letters every day." },
        { id: 'b', text: "She writes letters every day.", correct: true },
        { id: 'c', text: "She is write letters every day." }
      ],
      explanation: "Present Simple (routine) needs -s for she"
    },
    {
      id: 2,
      text: "I ______ Jollof rice when you called.",
      options: [
        { id: 'a', text: "cook" },
        { id: 'b', text: "am cooking" },
        { id: 'c', text: "was cooking", correct: true },
        { id: 'd', text: "cooked" }
      ],
      explanation: "Past Continuous (interrupted action)"
    },
    {
      id: 3,
      text: "By 2025, he ______ his degree.",
      options: [
        { id: 'a', text: "completes" },
        { id: 'b', text: "will complete" },
        { id: 'c', text: "will have completed", correct: true },
        { id: 'd', text: "completed" }
      ],
      explanation: "Future Perfect (action finished before a future time)"
    },
    {
      id: 4,
      text: "They ______ in Lagos since 2020.",
      options: [
        { id: 'a', text: "live" },
        { id: 'b', text: "lived" },
        { id: 'c', text: "have lived", correct: true },
        { id: 'd', text: "are living" }
      ],
      explanation: "Present Perfect (action started in past, continues now)"
    },
    {
      id: 5,
      text: "Choose the correct sentence:",
      options: [
        { id: 'a', text: "I am understanding the lesson." },
        { id: 'b', text: "I understand the lesson.", correct: true },
        { id: 'c', text: "I will understanding the lesson." }
      ],
      explanation: "\"Understand\" is a state verb – use Present Simple"
    },
    {
      id: 6,
      text: "While I ______, the phone rang.",
      options: [
        { id: 'a', text: "sleep" },
        { id: 'b', text: "was sleeping", correct: true },
        { id: 'c', text: "slept" },
        { id: 'd', text: "am sleeping" }
      ],
      explanation: "Past Continuous (background action)"
    },
    {
      id: 7,
      text: "She ______ her keys before she left home.",
      options: [
        { id: 'a', text: "loses" },
        { id: 'b', text: "had lost", correct: true },
        { id: 'c', text: "has lost" },
        { id: 'd', text: "lost" }
      ],
      explanation: "Past Perfect (action completed before another past action)"
    },
    {
      id: 8,
      text: "Next week, we ______ a POST-UTME workshop.",
      options: [
        { id: 'a', text: "attend" },
        { id: 'b', text: "will attend", correct: true },
        { id: 'c', text: "attended" },
        { id: 'd', text: "are attend" }
      ],
      explanation: "Future Simple (future decision)"
    },
    {
      id: 9,
      text: "Water ______ at 100°C.",
      options: [
        { id: 'a', text: "boils", correct: true },
        { id: 'b', text: "is boiling" },
        { id: 'c', text: "boiled" },
        { id: 'd', text: "will boil" }
      ],
      explanation: "Present Simple (scientific fact)"
    },
    {
      id: 10,
      text: "I ______ the movie three times already.",
      options: [
        { id: 'a', text: "see" },
        { id: 'b', text: "saw" },
        { id: 'c', text: "have seen", correct: true },
        { id: 'd', text: "seen" }
      ],
      explanation: "Present Perfect (past action with present relevance)"
    },
    {
      id: 11,
      text: "At 6 PM yesterday, I ______ dinner.",
      options: [
        { id: 'a', text: "prepare" },
        { id: 'b', text: "prepared" },
        { id: 'c', text: "was preparing", correct: true },
        { id: 'd', text: "am preparing" }
      ],
      explanation: "Past Continuous (action at specific past time)"
    },
    {
      id: 12,
      text: "After he ______ breakfast, he went to school.",
      options: [
        { id: 'a', text: "has had" },
        { id: 'b', text: "had had", correct: true },
        { id: 'c', text: "have" },
        { id: 'd', text: "has" }
      ],
      explanation: "Past Perfect (sequence of past actions)"
    },
    {
      id: 13,
      text: "______ you ______ to Abuja before?",
      options: [
        { id: 'a', text: "Did / go" },
        { id: 'b', text: "Have / been", correct: true },
        { id: 'c', text: "Do / go" },
        { id: 'd', text: "Are / going" }
      ],
      explanation: "Present Perfect (life experience)"
    },
    {
      id: 14,
      text: "Look! The baby ______.",
      options: [
        { id: 'a', text: "walks" },
        { id: 'b', text: "walked" },
        { id: 'c', text: "is walking", correct: true },
        { id: 'd', text: "has walked" }
      ],
      explanation: "Present Continuous (action happening now)"
    },
    {
      id: 15,
      text: "They ______ football when it started raining.",
      options: [
        { id: 'a', text: "play" },
        { id: 'b', text: "were playing", correct: true },
        { id: 'c', text: "played" },
        { id: 'd', text: "have played" }
      ],
      explanation: "Past Continuous (interrupted action)"
    },
    {
      id: 16,
      text: "I ______ my exam by next Friday.",
      options: [
        { id: 'a', text: "finish" },
        { id: 'b', text: "will finish" },
        { id: 'c', text: "will have finished", correct: true },
        { id: 'd', text: "finished" }
      ],
      explanation: "Future Perfect (action completed before a future time)"
    },
    {
      id: 17,
      text: "He ______ to church every Sunday.",
      options: [
        { id: 'a', text: "go" },
        { id: 'b', text: "goes", correct: true },
        { id: 'c', text: "is going" },
        { id: 'd', text: "has gone" }
      ],
      explanation: "Present Simple (habit)"
    },
    {
      id: 18,
      text: "By the time we arrived, the bus ______.",
      options: [
        { id: 'a', text: "leaves" },
        { id: 'b', text: "left" },
        { id: 'c', text: "had left", correct: true },
        { id: 'd', text: "has left" }
      ],
      explanation: "Past Perfect (\"past before the past\")"
    },
    {
      id: 19,
      text: "She ______ for the test all morning.",
      options: [
        { id: 'a', text: "studies" },
        { id: 'b', text: "studied" },
        { id: 'c', text: "has been studying", correct: true },
        { id: 'd', text: "will study" }
      ],
      explanation: "Present Perfect Continuous (recent ongoing action)"
    },
    {
      id: 20,
      text: "I promise I ______ you tomorrow.",
      options: [
        { id: 'a', text: "call" },
        { id: 'b', text: "will call", correct: true },
        { id: 'c', text: "am calling" },
        { id: 'd', text: "called" }
      ],
      explanation: "Future Simple (promise)"
    },
    {
      id: 21,
      text: "When I was young, I ______ in Kano.",
      options: [
        { id: 'a', text: "live" },
        { id: 'b', text: "lived", correct: true },
        { id: 'c', text: "have lived" },
        { id: 'd', text: "am living" }
      ],
      explanation: "Past Simple (completed past action)"
    },
    {
      id: 22,
      text: "______ she ______ dinner now?",
      options: [
        { id: 'a', text: "Is / cooking", correct: true },
        { id: 'b', text: "Does / cook" },
        { id: 'c', text: "Did / cook" },
        { id: 'd', text: "Has / cooked" }
      ],
      explanation: "Present Continuous (action happening now)"
    },
    {
      id: 23,
      text: "We ______ the new mall before it closed.",
      options: [
        { id: 'a', text: "visit" },
        { id: 'b', text: "visited" },
        { id: 'c', text: "had visited", correct: true },
        { id: 'd', text: "have visited" }
      ],
      explanation: "Past Perfect (action before another past action)"
    },
    {
      id: 24,
      text: "By 2030, Nigeria ______ major reforms.",
      options: [
        { id: 'a', text: "implements" },
        { id: 'b', text: "will implement" },
        { id: 'c', text: "will have implemented", correct: true },
        { id: 'd', text: "implemented" }
      ],
      explanation: "Future Perfect (completed action before future time)"
    },
    {
      id: 25,
      text: "He ______ his phone because he dropped it.",
      options: [
        { id: 'a', text: "breaks" },
        { id: 'b', text: "broke", correct: true },
        { id: 'c', text: "has broken" },
        { id: 'd', text: "had broken" }
      ],
      explanation: "Past Simple (completed past action)"
    },
    {
      id: 26,
      text: "They ______ for hours when the rain stopped.",
      options: [
        { id: 'a', text: "play" },
        { id: 'b', text: "played" },
        { id: 'c', text: "had been playing", correct: true },
        { id: 'd', text: "have played" }
      ],
      explanation: "Past Perfect Continuous (duration before past event)"
    },
    {
      id: 27,
      text: "She ______ in the library all afternoon.",
      options: [
        { id: 'a', text: "studies" },
        { id: 'b', text: "is studying" },
        { id: 'c', text: "has been studying", correct: true },
        { id: 'd', text: "was studying" }
      ],
      explanation: "Present Perfect Continuous (recent ongoing action)"
    },
    {
      id: 28,
      text: "I ______ to the market if it rains.",
      options: [
        { id: 'a', text: "don't go" },
        { id: 'b', text: "didn't go" },
        { id: 'c', text: "won't go", correct: true },
        { id: 'd', text: "haven't gone" }
      ],
      explanation: "Future Simple (future conditional)"
    },
    {
      id: 29,
      text: "Choose the correct question:",
      options: [
        { id: 'a', text: "Did you ate breakfast?" },
        { id: 'b', text: "Have you eaten breakfast?", correct: true },
        { id: 'c', text: "Do you eaten breakfast?" }
      ],
      explanation: "Present Perfect (action relevant to now)"
    },
    {
      id: 30,
      text: "This time tomorrow, I ______ on the beach.",
      options: [
        { id: 'a', text: "relax" },
        { id: 'b', text: "will relax" },
        { id: 'c', text: "will be relaxing", correct: true },
        { id: 'd', text: "am relaxing" }
      ],
      explanation: "Future Continuous (action in progress at future time)"
    }
  ];
  // Check quiz progress on component mount
  useEffect(() => {
    const checkQuizProgress = async () => {
      if (isAuthenticated && user) {
        const { data, error } = await supabase
          .from('postutme_quiz_progress')
          .select('*')
          .eq('user_id', user.id)
          .eq('quiz_id', 'tenses')
          .single();

        if (!error && data) {
          setQuizProgress(data);
        }
      }
    };

    checkQuizProgress();
  }, [isAuthenticated, user]);

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please sign in to submit the quiz.");
      return;
    }

    try {
      setIsSubmitting(true);

      // Calculate score locally based on userAnswers and questions
      let calculatedScore = 0;
      questions.forEach((q, index) => {
        const selectedOptionId = userAnswers[index];
        const correctOption = q.options.find(o => o.correct);
        if (correctOption && selectedOptionId === correctOption.id) {
          calculatedScore += 1;
        }
      });

      // 1. Update UI instantly by updating global progress state
      setProgress(prev => ({
        ...prev,
        tenses: Math.max(prev.tenses || 0, calculatedScore) // keep best score
      }));

      // 2. Update or Insert into postutme_quiz_progress

      // Check if progress exists
      const { data: existingProgress, error: fetchError } = await supabase
        .from("postutme_quiz_progress")
        .select("*")
        .eq("user_id", user.id)
        .eq("quiz_id", quizId)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        // PGRST116 = no rows found, which is fine for insert
        console.error("Error fetching quiz progress:", fetchError);
        alert("Failed to update progress.");
        setIsSubmitting(false);
        return;
      }

      if (existingProgress) {
        // Update existing progress: increment attempts, update best_score if higher, update last_attempt_at
        const newBestScore = Math.max(existingProgress.best_score, calculatedScore);
        const updatedAttempts = existingProgress.attempts + 1;

        const { error: updateError } = await supabase
          .from("postutme_quiz_progress")
          .update({
            attempts: updatedAttempts,
            best_score: newBestScore,
            last_attempt_at: new Date().toISOString(),
            completed: true,
            first_completed_at: existingProgress.first_completed_at || new Date().toISOString()
          })
          .eq("id", existingProgress.id);

        if (updateError) {
          console.error("Error updating quiz progress:", updateError);
          alert("Failed to update progress.");
          setIsSubmitting(false);
          return;
        }
      } else {
        // Insert new progress
        const { error: insertError } = await supabase
          .from("postutme_quiz_progress")
          .insert([{
            user_id: user.id,
            quiz_id: quizId,
            completed: true,
            first_completed_at: new Date().toISOString(),
            last_attempt_at: new Date().toISOString(),
            best_score: calculatedScore,
            attempts: 1,
          }]);

        if (insertError) {
          console.error("Error inserting quiz progress:", insertError);
          alert("Failed to save progress.");
          setIsSubmitting(false);
          return;
        }
      }

      // 3. Optionally insert a quiz_attempt record (for history tracking)
      const { error: attemptError } = await supabase
        .from("quiz_attempts")
        .insert([{
          user_id: user.id,
          quiz_id: quizId,
          score: calculatedScore,
          total_questions: questions.length,
          points_earned: calculatedScore, // or calculate differently if you want
          attempted_at: new Date().toISOString(),
          is_first_attempt: existingProgress ? false : true
        }]);

      if (attemptError) {
        console.error("Error inserting quiz attempt:", attemptError);
        // Not fatal - you can continue
      }

      alert(`Quiz submitted! Your score: ${calculatedScore}/${questions.length}`);
      setSubmitted(true);
    } catch (err) {
      console.error("Unexpected error on quiz submission:", err);
      alert("Unexpected error occurred, try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleNext = () => {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(prev => prev + 1);
  }
};

const handlePrevious = () => {
  if (currentQuestion > 0) {
    setCurrentQuestion(prev => prev - 1);
  }
};

const handleAnswerSelect = (optionId) => {
  setUserAnswers(prev => ({
    ...prev,
    [currentQuestion]: optionId
  }));
};


  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Quiz Results</h2>
        
        <div className="bg-indigo-100 text-indigo-800 p-4 rounded-lg mb-6">
          <p className="text-xl font-semibold">Your Score: <span className="text-3xl">{score}</span>/{questions.length}</p>
          
          {isAuthenticated && user ? (
            quizProgress ? (
              <div className="mt-3">
                <p>This is attempt #{quizProgress.attempts}</p>
                <p className="mt-1">
                  {quizProgress.attempts === 1
                    ? `✅ ${score} points added to your account!`
                    : "Points are only added the first time you take this test"}
                </p>
                <p className="mt-1">Your best score: {quizProgress.best_score}/{questions.length}</p>
              </div>
            ) : (
              <p className="mt-2">✅ {score} points added to your account!</p>
            )
          ) : (
            <p className="mt-2">Sign in to save your progress and earn points!</p>
          )}
        </div>
        
        {/* Rest of results display... */}
      </div>
    );
  }

   const currentQ = questions[currentQuestion];
  const selectedAnswer = userAnswers[currentQuestion];

  
  // Add loading indicator while updating points
  if (isUpdating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Updating your points...</p>
        </div>
      </div>
    );
  }
return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-indigo-800">Tenses Mastery Quiz</h2>
        <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full font-medium">
          {currentQuestion + 1}/{questions.length}
        </span>
      </div>
      
      <div className="mb-8 p-5 bg-indigo-50 rounded-lg border border-indigo-200">
        <p className="text-lg font-semibold text-gray-800">{currentQ.id}. {currentQ.text}</p>
      </div>
      
      <div className="space-y-3 mb-8">
        {currentQ.options.map(option => (
          <button
            key={option.id}
            onClick={() => handleAnswerSelect(option.id)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              selectedAnswer === option.id
                ? 'border-indigo-500 bg-indigo-100 text-indigo-800 font-medium'
                : 'border-gray-200 hover:border-indigo-300 bg-white'
            }`}
          >
            <span className="font-medium">{option.id})</span> {option.text}
          </button>
        ))}
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-6 py-2 rounded-lg font-medium ${
            currentQuestion === 0
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
          }`}
        >
          ← Previous
        </button>
        
        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(userAnswers).length < questions.length}
            className={`px-6 py-2 rounded-lg font-medium ${
              Object.keys(userAnswers).length < questions.length
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
  

  // Rest of component...
};

export default QuizTenses;