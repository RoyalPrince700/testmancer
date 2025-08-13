# TestMancer - Project Requirements

## Overview
TestMancer is an online learning platform designed for Nigerian students preparing for post-UTME exams.  
It provides structured learning through modules, quizzes, and gamification, supported by Supabase for backend services.

---

## 1. Technical Requirements

### Frontend
- **Framework:** Vite + React (JSX)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Animations:** Framer Motion (optional, if used in project)
- **State Management:** React Hooks / Context API

### Backend & Database
- **Supabase**:
  - Authentication (email/password and/or social login)
  - Postgres database for storing users, modules, quizzes, gems, badges, and leaderboard data
  - Storage for assets (images, avatars, etc.)
  - Real-time capabilities for leaderboard updates

### Development Tools
- Node.js (v16+ recommended)
- npm or yarn as the package manager
- Git for version control

---

## 2. Functional Requirements

### Learning Modules
- **Subjects:** English, Mathematics, Current Affairs
- **Structure:** Subject → Topics → Subtopics
- **Access Control:** Quizzes locked until module completion

### Quizzes
- Available per subtopic
- Unlock only after module completion
- Hints available using earned gems

### Gamification
- **Gems:** Earned from completing modules and quizzes
- **Badges:** Awarded for completing topics and subjects
- **Leaderboard:** Real-time ranking based on gems earned (via Supabase)

### Authentication
- User signup/login via Supabase Auth
- Profile data stored in Supabase database

---

## 3. Non-Functional Requirements
- **Performance:** Fast page loads and smooth navigation
- **Responsive Design:** Fully functional on mobile, tablet, and desktop
- **Accessibility:** Clear text, contrast, and keyboard navigation support
- **Scalability:** Easily add more subjects, topics, and quizzes

---

## 4. Installation Requirements
1. Node.js installed (v16+)
2. npm or yarn installed
3. Supabase account and project created
4. `.env` file with Supabase keys:
