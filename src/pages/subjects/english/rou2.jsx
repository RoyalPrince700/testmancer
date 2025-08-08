import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../provider/AuthContext';
import { postutmeService } from '../../../services/postutmeService';
import ProgressHeader from '../../../components/ProgressHeader';
import ProgressBar from '../../../components/ProgressBar';
import ContentCard from '../../../components/ContentCard';
import NavigationButtons from '../../../components/NavigationButtons';
import CompletionPopup from '../../../components/CompletionPopup';
import BadgesPreview from '../../../components/BadgesPreview';
import { TENSES_PAGES } from '../../../data/tensesContent.jsx';
import { FiAward } from 'react-icons/fi';

const Tenses = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [rank, setRank] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isTensesCompleted, setIsTensesCompleted] = useState(false);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [pointsAwarded, setPointsAwarded] = useState(0);
  const [isMarkingComplete, setIsMarkingComplete] = useState(false);

  const badges = [
    { name: "Tense Master", color: "from-indigo-500 to-indigo-700" },
    { name: "Grammar Guru", color: "from-purple-500 to-purple-700" },
    { name: "Time Traveler", color: "from-blue-500 to-blue-700" }
  ];

  // Fetch user progress and points
  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const isCompleted = await postutmeService.getCourseProgress({
          subject: 'English',
          topic: 'grammatical',
          subtopic: 'Tenses'
        });
        setIsTensesCompleted(isCompleted);

        const streak = await postutmeService.updateStreak();
        setStreak(streak);

        const { points, rank } = await postutmeService.getUserPointsAndRank();
        setTotalPoints(points);
        setRank(rank);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  // Automatically mark as complete when reaching last page
  useEffect(() => {
    if (user && !isTensesCompleted && currentPage === TENSES_PAGES.length - 1 && !isMarkingComplete) {
      markTensesComplete();
    }
  }, [currentPage, isTensesCompleted, user, isMarkingComplete]);

  const markTensesComplete = async () => {
    if (!user || isTensesCompleted) return;

    setIsMarkingComplete(true);

    try {
      await postutmeService.markCourseComplete({
        subject: 'English',
        topic: 'grammatical',
        subtopic: 'Tenses'
      });

      const newStreak = await postutmeService.updateStreak();
      setStreak(newStreak);

      const { points, rank } = await postutmeService.getUserPointsAndRank();
      setTotalPoints(points);
      setRank(rank);

      setIsTensesCompleted(true);
      setPointsAwarded(3);
      setShowCompletionPopup(true);
    } catch (error) {
      console.error("Error marking tenses complete:", error.message);
    } finally {
      setIsMarkingComplete(false);
    }
  };

  const nextPage = () => {
    if (currentPage < TENSES_PAGES.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startQuiz = () => {
    navigate("/quiz-hub/english/quiz-tenses");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {showCompletionPopup && (
        <CompletionPopup 
          subtopic="Tenses" 
          pointsAwarded={pointsAwarded} 
          onClose={() => setShowCompletionPopup(false)} 
          onTakeQuiz={startQuiz} 
        />
      )}

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <ProgressHeader 
          title={TENSES_PAGES[currentPage].title} 
          icon={TENSES_PAGES[currentPage].icon}  // Direct JSX icon
          totalPoints={totalPoints} 
          rank={rank} 
        />

        {isTensesCompleted && (
          <div className="mb-6 bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-xl flex items-center gap-3">
            <FiAward className="text-xl" />
            <span>You've completed Tenses! +3 points earned</span>
          </div>
        )}

        <ProgressBar currentPage={currentPage} totalPages={TENSES_PAGES.length} />

        <ContentCard>
          <p className="text-gray-700 mb-4">{TENSES_PAGES[currentPage].description}</p>
          <ul className="list-disc list-inside mb-4">
            {TENSES_PAGES[currentPage].examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
          <p className="italic text-gray-500">{TENSES_PAGES[currentPage].notes}</p>
        </ContentCard>

        <NavigationButtons 
          currentPage={currentPage} 
          totalPages={TENSES_PAGES.length} 
          prevPage={prevPage} 
          nextPage={nextPage} 
          startQuiz={startQuiz} 
          isCompleted={isTensesCompleted} 
        />

        {currentPage < TENSES_PAGES.length - 1 && (
          <BadgesPreview badges={badges} />
        )}
      </div>
    </div>
  );
};

export default Tenses;
