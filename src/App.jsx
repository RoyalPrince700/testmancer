import { BrowserRouter, Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from "../provider/AuthContext";
import { AuthProvider } from "../provider/AuthContext";
import ScrollToTop from './components/ScrollToTop';
import { supabase } from '../supabase/supabaseClient';
import { GoogleOAuthProvider } from "@react-oauth/google";

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { InputTextPage } from './pages/InputTextPage';
import { QuestionsPage } from './pages/QuestionsPage';
import QuizPage from './pages/QuizPage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import { CameraPage } from './pages/upload/CameraPage';
import { UploadDocumentPage } from './pages/upload/UploadDocumentPage';
import { UploadImagePage } from './pages/upload/UploadImagePage';
import MyQuestionsPage from './pages/MyQuestionsPage';
import { EmailConfirmation } from './pages/EmailConfirmation';
import LoadingSpinner from './components/LoadingSpinner';
import DashboardRedirect from './pages/DashboardRedirect';
import { HowItWorks } from './pages/HowItWorks';

import TextPreviewPage from './pages/upload/TextPreviewPage';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import TermsPolicy from './pages/TermsPolicy';
import AdminDashboard from './pages/AdminDashboard';
import PostUtme from './pages/PostUtme';
import English from './pages/subjects/english/English';
import Tenses from './pages/subjects/english/Tenses';
import LeaderboardPage from './pages/LeaderboardPage';
import QuizHub from './pages/quiz/QuizHub';
import EnglishQuiz from './pages/quiz/EnglishQuiz';
import QuizTenses from './pages/quiz/QuizTenses';
import Concord from './pages/subjects/english/Concord';
import Sentence from './pages/subjects/english/SentenceStructure';
import SentenceTypes from './pages/subjects/english/SentenceType';
import Punctuation from './pages/subjects/english/Punctuation';
import Subjunctive from './pages/subjects/english/Subjunctive';
import Errors from './pages/subjects/english/Errors';
import Real from './pages/subjects/english/Real';
import Question from './pages/subjects/english/QuestionTags';
import QuizConcord from './pages/quiz/QuizConcord';
import Profile from './pages/Profile';
import AuthPage from './pages/Auth';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner fullScreen />;
  }
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
};

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <LoadingSpinner fullScreen />;
  }
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
   <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
    <AuthProvider>
      
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path="/auth" element={<PublicRoute><AuthPage /></PublicRoute>} />
          {/* <Route path="/confirm" element={<EmailConfirmation />} /> */}
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-policy" element={<TermsPolicy />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<DashboardRedirect />} />
          {/* <Route path="/input-text" element={<ProtectedRoute><InputTextPage /></ProtectedRoute>} /> */}
          {/* <Route path="/questions" element={<ProtectedRoute><QuestionsPage /></ProtectedRoute>} /> */}
          {/* <Route path="/questions/:setId" element={<ProtectedRoute><QuestionDetailPage /></ProtectedRoute>} /> */}
          {/* <Route path="/quiz/:setId" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} /> */}
          {/* <Route path="/snap-photo" element={<ProtectedRoute><CameraPage /></ProtectedRoute>} /> */}
          {/* <Route path="/upload-document" element={<ProtectedRoute><UploadDocumentPage /></ProtectedRoute>} /> */}
          {/* <Route path="/upload-image" element={<ProtectedRoute><UploadImagePage /></ProtectedRoute>} /> */}
          {/* <Route path="/text-preview" element={<ProtectedRoute><TextPreviewPage /></ProtectedRoute>} /> */}
          {/* <Route path="/my-questions" element={<ProtectedRoute><MyQuestionsPage /></ProtectedRoute>} /> */}

          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          {/* Nested Subject Routes under /post-utme */}
        <Route path="/post-utme" element={<ProtectedRoute><PostUtme /></ProtectedRoute>} />

        <Route path="/post-utme/english" element={<ProtectedRoute><English /></ProtectedRoute>} />
        <Route path="/post-utme/english/tenses" element={<ProtectedRoute><Tenses /></ProtectedRoute>} />
        <Route path="/post-utme/leaderboard" element={<ProtectedRoute><LeaderboardPage /></ProtectedRoute>} />

        <Route path="/post-utme/english/concord" element={<ProtectedRoute><Concord /></ProtectedRoute>} />
        <Route path="/post-utme/english/sentence" element={<ProtectedRoute><Sentence /></ProtectedRoute>} />
        <Route path="/post-utme/english/sentence-types" element={<ProtectedRoute><SentenceTypes /></ProtectedRoute>} />
        <Route path="/post-utme/english/punctuation" element={<ProtectedRoute><Punctuation /></ProtectedRoute>} />
        <Route path="/post-utme/english/subjunctive" element={<ProtectedRoute><Subjunctive /></ProtectedRoute>} />
        <Route path="/post-utme/english/real" element={<ProtectedRoute><Real /></ProtectedRoute>} />
        <Route path="/post-utme/english/errors" element={<ProtectedRoute><Errors /></ProtectedRoute>} />
        <Route path="/post-utme/english/question" element={<ProtectedRoute><Question /></ProtectedRoute>} />

        


          {/* Quiz */}
          <Route path="/quiz-hub" element={<ProtectedRoute><QuizHub /></ProtectedRoute>} />
          <Route path="/quiz-hub/english" element={<ProtectedRoute><EnglishQuiz /></ProtectedRoute>} />
          <Route path="/quiz-hub/english/quiz-tenses" element={<ProtectedRoute><QuizTenses  subtopic="tenses_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/concord-quiz" element={<ProtectedRoute><QuizConcord subtopic="concord_quiz"/></ProtectedRoute>} />



          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
