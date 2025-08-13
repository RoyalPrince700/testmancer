# TestMancer

TestMancer is an online learning platform for Nigerian students preparing for post-UTME exams.  
It uses **Supabase** for backend services, providing authentication, real-time leaderboard updates, and secure data storage.

---

## ✨ Features

### 📚 Learning Modules
- Subjects: **English**, **Mathematics**, **Current Affairs**
- Topics and subtopics for step-by-step learning
- Quizzes unlock only after completing the related module

### 📝 Quizzes
- Available after module completion
- Hints available using earned gems

### 🎮 Gamification
- **Gems:** Earn from completing subtopics, topics, and quizzes
- **Badges:** Awarded for completing topics and subjects
- **Leaderboard:** Real-time ranking via Supabase

### 🔑 Authentication
- Supabase Auth for user login/signup
- Email/password or social logins (if enabled)
- User profiles stored in Supabase database

---

## 🚀 Tech Stack
- **Frontend:** Vite, React (JSX), Tailwind CSS
- **Routing:** React Router
- **Animations:** Framer Motion (if used)
- **Backend:** Supabase (Auth, Database, Storage, Realtime)

---

## 📦 Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- Supabase account & project

### Steps
```bash
# Clone the repository
git clone https://github.com/your-username/testmancer.git

# Navigate into the project
cd testmancer

# Install dependencies
npm install

# Create a .env file in the project root
# Add your Supabase credentials
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Start development server
npm run dev
