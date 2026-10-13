import { Link } from 'react-router-dom'

const milestones = [
  { n: '01', title: 'DSA Fundamentals', detail: 'Build your problem-solving base', to: '/learn/dsa', status: 'START HERE' },
  { n: '02', title: 'Choose a Language', detail: 'Python or Java, your choice', to: '/learn/language', status: 'UP NEXT' },
  { n: '03', title: 'Core Programming', detail: 'Turn concepts into code', to: '/learn/lessons', status: 'COMING NEXT' },
  { n: '04', title: 'Practice & Revision', detail: 'Strengthen what you learn', to: '/learn/revision', status: 'KEEP GROWING' },
]
const shortcuts = [
  { n: '01', title: 'Personalized Learning Path', desc: 'A clear roadmap from fundamentals to advanced topics.', to: '/learn/dsa' },
  { n: '02', title: 'Guided Problem Solving', desc: 'Work through problems using structured hints.', to: '/learn/tutor' },
  { n: '03', title: 'Concept & Misconception Support', desc: 'Identify gaps and revisit concepts that need attention.', to: '/learn/assessments' },
  { n: '04', title: 'Personalized Revision & Practice', desc: 'Review topics and practise at your own pace.', to: '/learn/revision' },
  { n: '05', title: 'Continuous Learner Intelligence', desc: 'See learning signals and progress in one place.', to: '/learn/profile' },
]

export default function DashboardPage() {
  return <>
    <div className="dashboard-greeting"><div><p className="page-eyebrow">MONDAY MINDSET · STUDENT WORKSPACE</p><h1>Make progress, <span>one concept at a time.</span></h1><p>Welcome to your learning space. Start with DSA, build your foundation, then choose Python or Java.</p><Link to="/learn/dsa" className="primary-link">Continue with DSA <span>→</span></Link></div><div className="greeting-side"><div className="greeting-side-number">01</div><span>YOUR NEXT STEP</span><strong>Learn the fundamentals.</strong></div></div>
    <section className="dashboard-section"><div className="section-title"><div><p className="page-eyebrow">YOUR ROADMAP</p><h2>Learning journey</h2></div><span className="section-note">A suggested order</span></div><div className="milestone-grid">{milestones.map((item, i) => <Link className={`milestone-card ${i === 0 ? 'milestone-current' : ''}`} to={item.to} key={item.n}><div className="milestone-top"><span className="milestone-index">{item.n}</span><span className="milestone-status">{item.status}</span></div><h3>{item.title}</h3><p>{item.detail}</p><span className="milestone-arrow">↗</span></Link>)}</div></section>
    <section className="dashboard-section"><div className="section-title"><div><p className="page-eyebrow">BUILT AROUND YOUR LEARNING</p><h2>Your learning tools</h2></div></div><div className="outcome-grid">{shortcuts.map(item => <Link to={item.to} className="outcome-card" key={item.n}><span className="outcome-index">{item.n}</span><h3>{item.title}</h3><p>{item.desc}</p><span className="outcome-arrow">Explore feature ↗</span></Link>)}</div></section>
    <section className="next-step-banner"><div><p className="page-eyebrow">START STRONG</p><h2>Ready to begin with DSA?</h2><p>Explore arrays, linked lists, stacks, trees, graphs, and more.</p></div><Link to="/learn/dsa" className="outline-light-link">View DSA path →</Link></section>
  </>
}
