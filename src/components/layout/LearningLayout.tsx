import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const links = [
  { to: '/learn/dashboard', label: 'Overview', icon: '▦', end: true },
  { to: '/learn/dsa', label: 'DSA Path', icon: '⌘' },
  { to: '/learn/language', label: 'Choose Language', icon: '⌥' },
  { to: '/learn/lessons', label: 'My Learning', icon: '▤' },
  { to: '/learn/tutor', label: 'Guided Tutor', icon: '✳' },
  { to: '/learn/assessments', label: 'Assessments', icon: '☑' },
  { to: '/learn/revision', label: 'Revision & Practice', icon: '↻' },
  { to: '/learn/profile', label: 'Learner Profile', icon: '◉' },
  { to: '/learn/notes', label: 'My Notes', icon: '▧' },
  { to: '/learn/settings', label: 'Settings', icon: '⚙' },
]

export default function LearningLayout() {
  const navigate = useNavigate()
  return <div className="learn-app">
    <aside className="learn-sidebar">
      <button className="learn-brand" onClick={() => navigate('/learn/dashboard')}>Velorah<span>.</span></button>
      <p className="sidebar-caption">STUDENT WORKSPACE</p>
      <nav className="learn-nav" aria-label="Student navigation">
        {links.map(link => <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => `learn-nav-link${isActive ? ' is-active' : ''}`}><span className="nav-glyph">{link.icon}</span><span>{link.label}</span></NavLink>)}
      </nav>
      <div className="sidebar-bottom"><div className="student-avatar">RK</div><div className="student-identity"><strong>Student workspace</strong><span>Frontend preview</span></div><button className="leave-app" onClick={() => navigate('/')} aria-label="Return to website" title="Return to website">↗</button></div>
    </aside>
    <div className="learn-main">
      <header className="learn-topbar"><div className="topbar-label"><span className="status-dot" /> YOUR LEARNING SPACE</div><div className="topbar-actions"><span className="preview-pill">FRONTEND PREVIEW</span><div className="student-avatar avatar-small">RK</div></div></header>
      <main className="learn-content"><Outlet /></main>
      <footer className="learn-footer"><span>Velorah Student Workspace</span><span>Built for steady progress, one concept at a time.</span></footer>
    </div>
  </div>
}
