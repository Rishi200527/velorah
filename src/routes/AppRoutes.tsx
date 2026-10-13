
import { Navigate, Route, Routes } from 'react-router-dom'

import MarketingLayout from '../components/layout/MarketingLayout'
import LearningLayout from '../components/layout/LearningLayout'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import AuthPage from '../pages/AuthPage'

import DashboardPage from '../features/dashboard/DashboardPage'
import DsaPage from '../features/learning-path/DsaPage'
import LanguagePage from '../features/language-selection/LanguagePage'
import LessonsPage from '../features/lessons/LessonsPage'
import AssessmentsPage from '../features/assessments/AssessmentsPage'
import TutorPage from '../features/ai-tutor/TutorPage'
import NotesPage from '../features/notes/NotesPage'
import RevisionPage from '../features/learning-path/RevisionPage'
import LearnerProfilePage from '../features/dashboard/LearnerProfilePage'
import SettingsPage from '../features/dashboard/SettingsPage'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public marketing website */}
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* Authentication pages */}
      <Route path="/login" element={<AuthPage />} />
      <Route path="/signup" element={<AuthPage />} />

      {/* Student learning platform */}
      <Route path="/learn" element={<LearningLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="dsa" element={<DsaPage />} />
        <Route path="language" element={<LanguagePage />} />
        <Route path="lessons" element={<LessonsPage />} />
        <Route path="assessments" element={<AssessmentsPage />} />
        <Route path="tutor" element={<TutorPage />} />
        <Route path="revision" element={<RevisionPage />} />
        <Route path="profile" element={<LearnerProfilePage />} />
        <Route path="notes" element={<NotesPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Redirect unknown URLs to the homepage */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
