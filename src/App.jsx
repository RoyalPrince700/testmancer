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
import QuizSentence from './pages/quiz/QuizSentence';
import QuizSentenceType from './pages/quiz/QuizSentenceType';
import QuizPunctuation from './pages/quiz/QuizPunctuation';
import QuizSubjunctive from './pages/quiz/QuizSubjunctive';
import QuizReal from './pages/quiz/QuizReal';
import QuizError from './pages/quiz/QuizErrors';
import QuizQuestionTag from './pages/quiz/QuizQuestionTag';
import Antonyms from './pages/subjects/english/vocabulary/Antonyms';
import Synonyms from './pages/subjects/english/vocabulary/Synonyms';
import Homonyms from './pages/subjects/english/vocabulary/Homonyms';
import Idioms from './pages/subjects/english/vocabulary/Idioms';
import WordMeaning from './pages/subjects/english/vocabulary/WordMeaning';
import Oral from './pages/subjects/english/orals/Oral';
import Spelling from './pages/subjects/english/orals/Spelling';
import Comprehension from './pages/subjects/english/comprehension/Comprehension';
import Summary from './pages/subjects/english/comprehension/Summary';
import Adverbial from './pages/subjects/english/modifier/Adverbial';
import Participial from './pages/subjects/english/modifier/Participle';
import Infinitive from './pages/subjects/english/modifier/Infinity';
import QuizSummary from './pages/subjects/english/comprehension/QuizSummary';
import QuizComprehension from './pages/subjects/english/comprehension/QuizComprehension';
import QuizAdverbial from './pages/subjects/english/modifier/QuizAdverbial';
import QuizInfinitive from './pages/subjects/english/modifier/QuizInfinitive';
import QuizParticiple from './pages/subjects/english/modifier/QuizParticiple';
import QuizSynonyms from './pages/subjects/english/vocabulary/QuizSynonyms';
import QuizAntonyms from './pages/subjects/english/vocabulary/QuizAntonyms';
import QuizIdioms from './pages/subjects/english/vocabulary/QuizIdioms';
import QuizHomonyms from './pages/subjects/english/vocabulary/QuizHomonyms';
import QuizWordMeaning from './pages/subjects/english/vocabulary/QuizWordMeaning';
import GamesHub from './pages/games/Games';
// import GemQuest from './components/games/GemQuest';
import SynonymsSprint from './components/games/synonymssprint/SynonymsSprint';
import ScoreScreen from './components/games/synonymssprint/ScoreScreen';
import QuizOral from './pages/subjects/english/orals/QuizOral';
import QuizSpelling from './pages/subjects/english/orals/QuizSpelling';
import Mathematics from './pages/subjects/mathematics/Mathematics';
import Indices from './pages/subjects/mathematics/study/algebra/Indices';
import Sequence from './pages/subjects/mathematics/study/algebra/Sequence';
import Equations from './pages/subjects/mathematics/study/algebra/Equation';
import Variation from './pages/subjects/mathematics/study/algebra/Variations';
import Integration from './pages/subjects/mathematics/study/calculus/Integration';
import Differentiation from './pages/subjects/mathematics/study/calculus/Differentiation';
import AppOfCalculus from './pages/subjects/mathematics/study/calculus/AppOfCalculus';
import SetsVennDiagrams from './pages/subjects/mathematics/study/numbertheory/SetsVennDiagrams';
import NumberBases from './pages/subjects/mathematics/study/numbertheory/NumberBases';
import ModularArithmetic from './pages/subjects/mathematics/study/numbertheory/ModularArithmetic';
import MathematicsQuiz from './pages/quiz/MathematicsQuiz';
import QuizIndices from './pages/quiz/mathematics/QuizIndices';
import QuizEquations from './pages/quiz/mathematics/QuizEquations';
import QuizSequences from './pages/quiz/mathematics/QuizSequences';
import QuizVariation from './pages/quiz/mathematics/QuizVariation';
import QuizDifferentiation from './pages/quiz/mathematics/QuizDifferentiation';
import QuizIntegration from './pages/quiz/mathematics/QuizIntegration';
import QuizApplicationCalculus from './pages/quiz/mathematics/QuizApplicationCalculus';
import QuizSetsVennDiagrams from './pages/quiz/mathematics/QuizSetsVennDiagrams';
import QuizNumberBases from './pages/quiz/mathematics/QuizNumberBases';
import QuizModularArithmetic from './pages/quiz/mathematics/QuizModularArithmetic';
import CurrentAffairs from './pages/subjects/currentaffairs/CurrentAffairs';
import PreColo from './pages/subjects/currentaffairs/study/nigerian-history/PreColo';
import Colonial from './pages/subjects/currentaffairs/study/nigerian-history/Colonial';
import PostIndependence from './pages/subjects/currentaffairs/study/nigerian-history/Post-Inde';
import NigerianLeaders from './pages/subjects/currentaffairs/study/nigerian-history/NigerianLeaders';
import PoliticalParty from './pages/subjects/currentaffairs/study/government-politics/PoliticalParty';
import Election from './pages/subjects/currentaffairs/study/government-politics/Elections';
import ConstitutionLaw from './pages/subjects/currentaffairs/study/government-politics/ConstitutionLaw';
import CultureTradition from './pages/subjects/currentaffairs/study/current-event/CultureTrad';
import StateCapital from './pages/subjects/currentaffairs/study/current-event/StateCapital';
import WorldLeaders from './pages/subjects/currentaffairs/study/current-event/WorldLeaders';
import Unilorin from './pages/subjects/currentaffairs/study/current-event/Unilorin';
import CurrentAffairsQuiz from './pages/subjects/currentaffairs/CurrentAffairsQuiz';
import QuizCulture from './pages/subjects/currentaffairs/study/current-event/QuizCulture';
import QuizStateAndCapital from './pages/subjects/currentaffairs/study/current-event/QuizStateAndCapital';
import QuizUnilorin from './pages/subjects/currentaffairs/study/current-event/QuizUnilorin';
import QuizWorldLeader from './pages/subjects/currentaffairs/study/current-event/QuizWorldLeaders';
import QuizElection from './pages/subjects/currentaffairs/study/government-politics/QuizElection';
import QuizConstitution from './pages/subjects/currentaffairs/study/government-politics/QuizConstitution';
import QuizPoliticalParty from './pages/subjects/currentaffairs/study/government-politics/QuizPoliticalParty';
import QuizColonial from './pages/subjects/currentaffairs/study/nigerian-history/QuizNigerianLeaders';
import QuizPostIndependence from './pages/subjects/currentaffairs/study/nigerian-history/QuizPostIndependence';
import QuizPreColo from './pages/subjects/currentaffairs/study/nigerian-history/QuizPreColonial';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner fullScreen />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
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
        <Route path="/games-hub" element={<ProtectedRoute><GamesHub /></ProtectedRoute>} />
        {/* <Route path="/games-hub/gem-quest" element={<ProtectedRoute><GemQuest /></ProtectedRoute>} /> */}
        <Route path="/games-hub/synonyms-sprint" element={<ProtectedRoute><SynonymsSprint /></ProtectedRoute>} />
        <Route path="/games-hub/synonyms-sprint/score" element={<ProtectedRoute><ScoreScreen /></ProtectedRoute>} />



        <Route path="/post-utme/english/concord" element={<ProtectedRoute><Concord /></ProtectedRoute>} />
        <Route path="/post-utme/english/sentence" element={<ProtectedRoute><Sentence /></ProtectedRoute>} />
        <Route path="/post-utme/english/sentence-types" element={<ProtectedRoute><SentenceTypes /></ProtectedRoute>} />
        <Route path="/post-utme/english/punctuation" element={<ProtectedRoute><Punctuation /></ProtectedRoute>} />
        <Route path="/post-utme/english/subjunctive" element={<ProtectedRoute><Subjunctive /></ProtectedRoute>} />
        <Route path="/post-utme/english/real" element={<ProtectedRoute><Real /></ProtectedRoute>} />
        <Route path="/post-utme/english/errors" element={<ProtectedRoute><Errors /></ProtectedRoute>} />
        <Route path="/post-utme/english/question" element={<ProtectedRoute><Question /></ProtectedRoute>} />
        <Route path="/post-utme/english/antonyms" element={<ProtectedRoute><Antonyms /></ProtectedRoute>} />
        <Route path="/post-utme/english/synonyms" element={<ProtectedRoute><Synonyms /></ProtectedRoute>} />
        <Route path="/post-utme/english/homonyms" element={<ProtectedRoute><Homonyms /></ProtectedRoute>} />
        <Route path="/post-utme/english/idioms" element={<ProtectedRoute><Idioms /></ProtectedRoute>} />
        <Route path="/post-utme/english/word-meanings" element={<ProtectedRoute><WordMeaning /></ProtectedRoute>} />
        <Route path="/post-utme/english/oral" element={<ProtectedRoute><Oral /></ProtectedRoute>} />
        <Route path="/post-utme/english/spelling" element={<ProtectedRoute><Spelling /></ProtectedRoute>} />
        <Route path="/post-utme/english/comprehension" element={<ProtectedRoute><Comprehension /></ProtectedRoute>} />
        <Route path="/post-utme/english/summary" element={<ProtectedRoute><Summary /></ProtectedRoute>} />
        <Route path="/post-utme/english/adverbial" element={<ProtectedRoute><Adverbial /></ProtectedRoute>} />
        <Route path="/post-utme/english/participial" element={<ProtectedRoute><Participial /></ProtectedRoute>} />
        <Route path="/post-utme/english/infinitive" element={<ProtectedRoute><Infinitive /></ProtectedRoute>} />

      
          {/* Quiz */}
          <Route path="/quiz-hub" element={<ProtectedRoute><QuizHub /></ProtectedRoute>} />
          <Route path="/quiz-hub/english" element={<ProtectedRoute><EnglishQuiz /></ProtectedRoute>} />
          <Route path="/quiz-hub/english/quiz-tenses" element={<ProtectedRoute><QuizTenses  subtopic="tenses_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/concord-quiz" element={<ProtectedRoute><QuizConcord subtopic="concord_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/sentence-quiz" element={<ProtectedRoute><QuizSentence subtopic="sentence_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/sentence-types-quiz" element={<ProtectedRoute><QuizSentenceType subtopic="sentence_types_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/punctuation-quiz" element={<ProtectedRoute><QuizPunctuation subtopic="punctuation_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/subjunctive-quiz" element={<ProtectedRoute><QuizSubjunctive subtopic="subjunctive_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/real-quiz" element={<ProtectedRoute><QuizReal subtopic="real_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/errors-quiz" element={<ProtectedRoute><QuizError subtopic="errors_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/question-tags-quiz" element={<ProtectedRoute><QuizQuestionTag subtopic="question_tags_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/summary-quiz" element={<ProtectedRoute><QuizSummary subtopic="summary_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/comprehension-quiz" element={<ProtectedRoute><QuizComprehension subtopic="comprehension_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/adverbial-quiz" element={<ProtectedRoute><QuizAdverbial subtopic="modifiers_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/infinitive-quiz" element={<ProtectedRoute><QuizInfinitive subtopic="infinitive_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/participial-quiz" element={<ProtectedRoute><QuizParticiple subtopic="participial_quiz"/></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/synonyms-quiz" element={<ProtectedRoute><QuizSynonyms subtopic="synonyms_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/antonyms-quiz" element={<ProtectedRoute><QuizAntonyms subtopic="antonyms_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/homonyms-quiz" element={<ProtectedRoute><QuizHomonyms subtopic="homonyms_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/idioms-quiz" element={<ProtectedRoute><QuizIdioms subtopic="idioms_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/word-meanings-quiz" element={<ProtectedRoute><QuizWordMeaning subtopic="word_meanings_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/spelling-quiz" element={<ProtectedRoute><QuizSpelling subtopic="spelling_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/english-quiz/oral-quiz" element={<ProtectedRoute><QuizOral subtopic="oral_quiz" /></ProtectedRoute>} />

          {/* Mathematics Quiz Routes */}
          <Route path="/quiz-hub/mathematics" element={<ProtectedRoute><MathematicsQuiz /></ProtectedRoute>} />
          <Route path="/quiz-hub/mathematics/indices-quiz" element={<ProtectedRoute><QuizIndices subtopic="indices_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/mathematics/equations-quiz" element={<ProtectedRoute><QuizEquations subtopic="equations_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/mathematics/sequences-quiz" element={<ProtectedRoute><QuizSequences subtopic="sequences_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/mathematics/variation-quiz" element={<ProtectedRoute><QuizVariation subtopic="variation_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/mathematics/differentiation-quiz" element={<ProtectedRoute><QuizDifferentiation subtopic="differentiation_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/mathematics/integration-quiz" element={<ProtectedRoute><QuizIntegration subtopic="integration_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/mathematics/application-calculus-quiz" element={<ProtectedRoute><QuizApplicationCalculus subtopic="application_calculus_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/mathematics/sets-venn-diagrams-quiz" element={<ProtectedRoute><QuizSetsVennDiagrams subtopic="sets_venn_diagrams_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/mathematics/number-bases-quiz" element={<ProtectedRoute><QuizNumberBases subtopic="number_bases_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/mathematics/modular-arithmetic-quiz" element={<ProtectedRoute><QuizModularArithmetic subtopic="modular_arithmetic_quiz" /></ProtectedRoute>} />

          {/* Nested Routes for mathematics */}
           <Route path="/post-utme/mathematics" element={<ProtectedRoute><Mathematics /></ProtectedRoute>} /> 
          <Route path="/post-utme/mathematics/indices-logarithms" element={<ProtectedRoute><Indices /></ProtectedRoute>} />
          <Route path="/post-utme/mathematics/sequences-series" element={<ProtectedRoute><Sequence /></ProtectedRoute>} />
          <Route path="/post-utme/mathematics/equations-inequalities" element={<ProtectedRoute><Equations /></ProtectedRoute>} />
          <Route path="/post-utme/mathematics/variation" element={<ProtectedRoute><Variation /></ProtectedRoute>} />
          <Route path="/post-utme/mathematics/integration" element={<ProtectedRoute><Integration/></ProtectedRoute>} />
          <Route path="/post-utme/mathematics/differentiation" element={<ProtectedRoute><Differentiation /></ProtectedRoute>} />
          <Route path="/post-utme/mathematics/application-calculus" element={<ProtectedRoute><AppOfCalculus /></ProtectedRoute>} />
          <Route path="/post-utme/mathematics/sets-venn-diagrams" element={<ProtectedRoute><SetsVennDiagrams /></ProtectedRoute>} />
          <Route path="/post-utme/mathematics/number-bases" element={<ProtectedRoute><NumberBases /></ProtectedRoute>} />
          <Route path="/post-utme/mathematics/modular-arithmetic" element={<ProtectedRoute><ModularArithmetic /></ProtectedRoute>} />

          {/* Nested Routes for Current Affairs */}
          <Route path="/post-utme/current-affairs" element={<ProtectedRoute><CurrentAffairs /></ProtectedRoute>} />
          <Route path="/post-utme/current-affairs/pre-colonial" element={<ProtectedRoute><PreColo /></ProtectedRoute>} />
          <Route path="/post-utme/current-affairs/colonial" element={<ProtectedRoute><Colonial /></ProtectedRoute>} />
          <Route path="/post-utme/current-affairs/post-independence" element={<ProtectedRoute><PostIndependence /></ProtectedRoute>} />
          <Route path="/post-utme/current-affairs/nigerian-leaders" element={<ProtectedRoute><NigerianLeaders /></ProtectedRoute>} />
          <Route path="/post-utme/current-affairs/political-parties" element={<ProtectedRoute><PoliticalParty /></ProtectedRoute>} />
          <Route path="/post-utme/current-affairs/election" element={<ProtectedRoute><Election /></ProtectedRoute>} />
          <Route path="/post-utme/current-affairs/constitution" element={<ProtectedRoute><ConstitutionLaw /></ProtectedRoute>} />
          <Route path="/post-utme/current-affairs/culture-tradition" element={<ProtectedRoute><CultureTradition /></ProtectedRoute>} />
          <Route path="/post-utme/current-affairs/state-capital" element={<ProtectedRoute><StateCapital /></ProtectedRoute>} />
          <Route path="/post-utme/current-affairs/world-leaders" element={<ProtectedRoute><WorldLeaders /></ProtectedRoute>} />
          <Route path="/post-utme/current-affairs/unilorin" element={<ProtectedRoute><Unilorin /></ProtectedRoute>} />

          {/* Nested Routes for Current Affairs Quiz */}
          <Route path="/quiz-hub/current-affairs" element={<ProtectedRoute><CurrentAffairsQuiz /></ProtectedRoute>} />
          <Route path="/quiz-hub/current-affairs/culture-quiz" element={<ProtectedRoute><QuizCulture subtopic="culture_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/current-affairs/state-and-capital-quiz" element={<ProtectedRoute><QuizStateAndCapital subtopic="state_and_capital_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/current-affairs/unilorin-quiz" element={<ProtectedRoute><QuizUnilorin subtopic="unilorin_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/current-affairs/world-leaders-quiz" element={<ProtectedRoute><QuizWorldLeader subtopic="world_leader_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/current-affairs/elections-quiz" element={<ProtectedRoute><QuizElection subtopic="nigeria_elections_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/current-affairs/constitution-quiz" element={<ProtectedRoute><QuizConstitution subtopic="nigeria_constitution_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/current-affairs/political-party-quiz" element={<ProtectedRoute><QuizPoliticalParty subtopic="nigeria_political_parties_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/current-affairs/colonial-quiz" element={<ProtectedRoute><QuizColonial subtopic="colonial_nigeria_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/current-affairs/nigeria-leaders-quiz" element={<ProtectedRoute><QuizWorldLeader subtopic="nigerian_leaders_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/current-affairs/post-independence-quiz" element={<ProtectedRoute><QuizPostIndependence subtopic="post_independence_nigeria_quiz" /></ProtectedRoute>} />
          <Route path="/quiz-hub/current-affairs/pre-colonial-quiz" element={<ProtectedRoute><QuizPreColo subtopic="pre_colonial_nigeria_quiz" /></ProtectedRoute>} />



















          




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
