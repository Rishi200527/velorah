import { Link } from 'react-router-dom'

const signals = [
  { title: 'Knowledge and mastery', description: 'Track concept-level understanding across the learning path.', state: 'Awaiting assessment data' },
  { title: 'Mistake patterns', description: 'Record recurring errors and concepts that need another explanation.', state: 'Awaiting practice history' },
  { title: 'Confidence and pace', description: 'Use self-reported confidence and activity to guide revision.', state: 'Awaiting learner activity' },
  { title: 'Problem-solving behaviour', description: 'Observe hint use, attempts, and progress through a problem.', state: 'Awaiting tutor activity' },
]
export default function LearnerProfilePage() {
  return <><div className="page-heading"><p className="page-eyebrow">OUTCOME 05 · CONTINUOUS LEARNER INTELLIGENCE</p><h1>Understand how <span>you learn.</span></h1><p>This space will bring learning signals together so Velorah can improve recommendations over time. No personal analytics are calculated in this frontend-only preview.</p></div><div className="profile-status-card"><div className="profile-status-mark">◎</div><div><strong>Your learner profile is ready to be built.</strong><p>Complete a diagnostic, lessons, and practice activities to begin creating a meaningful profile.</p></div><Link to="/learn/assessments" className="secondary-button">Try sample assessment →</Link></div><div className="profile-signal-grid">{signals.map((signal, i) => <article className="profile-signal" key={signal.title}><span className="signal-number">0{i + 1}</span><h2>{signal.title}</h2><p>{signal.description}</p><span className="signal-state"><i />{signal.state}</span></article>)}</div></>
}
