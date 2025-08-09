// components/Quiz.jsx
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/UserContext';

export default function Quiz({ questions }) {
  const { user } = useAuth();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = async () => {
    // Calculate score
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
    });
    
    // Submit to Supabase
    const points = await submitQuizResults(
      user.id, 
      'tenses', 
      correct,
      questions.length
    );
    
    setScore(correct);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Quiz UI */}
      {!submitted ? (
        questions.map((q, i) => (
          <div key={i}>
            <h3>{q.question}</h3>
            {q.options.map((opt, j) => (
              <button 
                key={j}
                onClick={() => setAnswers({...answers, [i]: j})}
              >
                {opt}
              </button>
            ))}
          </div>
        ))
      ) : (
        <div>
          <h2>Your Score: {score}/{questions.length}</h2>
          <p>Points Earned: {score} (first attempt only)</p>
        </div>
      )}
      
      {!submitted && (
        <button onClick={handleSubmit}>Submit Quiz</button>
      )}
    </div>
  );
}