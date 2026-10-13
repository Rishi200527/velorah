import { Link } from 'react-router-dom'

const practice = [
  { label: 'Arrays & Strings', tag: 'FOUNDATION', detail: 'Trace an array operation and explain its time complexity.', action: 'Review DSA topics', to: '/learn/dsa' },
  { label: 'Problem-solving reflection', tag: 'SELF-CHECK', detail: 'Write down where you got stuck and what helped you move forward.', action: 'Open notes', to: '/learn/notes' },
  { label: 'Quick knowledge check', tag: 'ASSESSMENT', detail: 'Try a short concept check to identify what needs another pass.', action: 'Start assessment', to: '/learn/assessments' },
]
export default function RevisionPage() {
  return <><div className="page-heading"><p className="page-eyebrow">OUTCOME 04 · PERSONALIZED REVISION & PRACTICE</p><h1>Make learning <span>stick.</span></h1><p>A focused place to revisit topics, reflect on mistakes, and practise concepts again. The recommendations shown here are demo suggestions until learner data is connected.</p></div><div className="revision-callout"><div><span className="page-eyebrow">SUGGESTED FOR YOUR NEXT STUDY SESSION</span><h2>Review the fundamentals before moving ahead.</h2><p>Small, consistent practice is more useful than rushing through the roadmap.</p></div><span className="revision-number">15<span>MIN</span></span></div><div className="revision-grid">{practice.map((item, i) => <article className="revision-card" key={item.label}><span className="revision-index">0{i + 1}</span><span className="page-eyebrow">{item.tag}</span><h2>{item.label}</h2><p>{item.detail}</p><Link to={item.to}>{item.action} →</Link></article>)}</div><p className="small-disclaimer">Future version: use past answers, confidence, time spent, and topic mastery to recommend a relevant revision plan.</p></>
}
