import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { DsaTopic } from '../../types'

const topics: DsaTopic[] = [
  { id: 'intro', title: 'Introduction to DSA', description: 'Problem-solving basics, complexity, and how to think about a problem.', lessons: 5, level: 'Beginner' },
  { id: 'arrays', title: 'Arrays & Strings', description: 'Traversal, two pointers, prefix sums, and common array patterns.', lessons: 8, level: 'Beginner' },
  { id: 'linked', title: 'Linked Lists', description: 'Nodes, pointers, insertion, deletion, and list traversal.', lessons: 7, level: 'Beginner' },
  { id: 'stack', title: 'Stacks & Queues', description: 'LIFO, FIFO, monotonic stacks, and practical applications.', lessons: 6, level: 'Beginner' },
  { id: 'recursion', title: 'Recursion & Backtracking', description: 'Base cases, call stacks, recursion trees, and exploring choices.', lessons: 7, level: 'Intermediate' },
  { id: 'trees', title: 'Trees & Binary Search Trees', description: 'Traversals, search, insertion, and tree-based problem patterns.', lessons: 8, level: 'Intermediate' },
  { id: 'graphs', title: 'Graphs', description: 'Representations, BFS, DFS, and introductory graph problems.', lessons: 8, level: 'Intermediate' },
  { id: 'sorting', title: 'Sorting & Searching', description: 'Sorting algorithms, binary search, and complexity trade-offs.', lessons: 7, level: 'Intermediate' },
  { id: 'dp', title: 'Dynamic Programming', description: 'Overlapping subproblems, memoization, and tabulation.', lessons: 9, level: 'Advanced' },
]
export default function DsaPage() {
  const [selected, setSelected] = useState('intro')
  const topic = topics.find(t => t.id === selected) ?? topics[0]
  return <><div className="page-heading"><p className="page-eyebrow">MILESTONE 01 · YOUR FOUNDATION</p><h1>Data Structures <span>& Algorithms</span></h1><p>Build the way you think about problems. Work through the topics in sequence, revisit what feels difficult, and progress at your own pace.</p></div><div className="path-summary"><div><span className="summary-label">DSA FOUNDATION</span><h2>{topics.length} core topics</h2><p>From fundamentals to advanced problem-solving patterns.</p></div><div className="path-summary-stat"><strong>01</strong><span>START HERE</span></div></div><div className="dsa-layout"><div className="topic-list">{topics.map((item, i) => <button key={item.id} onClick={() => setSelected(item.id)} className={`topic-row ${selected === item.id ? 'topic-row-active' : ''}`}><span className="topic-count">{String(i + 1).padStart(2, '0')}</span><span className="topic-main"><strong>{item.title}</strong><small>{item.description}</small></span><span className="topic-meta"><span>{item.level}</span><small>{item.lessons} lessons</small></span></button>)}</div><aside className="topic-detail-panel"><p className="page-eyebrow">TOPIC DETAILS</p><span className="detail-index">{String(topics.findIndex(t => t.id === selected) + 1).padStart(2, '0')}</span><h2>{topic.title}</h2><p>{topic.description}</p><div className="detail-stat-row"><span>Learning level</span><strong>{topic.level}</strong></div><div className="detail-stat-row"><span>Lessons</span><strong>{topic.lessons}</strong></div><div className="detail-resource">▤ <span>Concept lessons and examples</span></div><div className="detail-resource">⌘ <span>Guided practice problems</span></div><div className="detail-resource">☑ <span>Topic knowledge check</span></div><Link to="/learn/lessons" className="primary-link full-link">Open learning area <span>→</span></Link></aside></div><div className="page-bottom-action"><p>Finished building your DSA foundation? Your next milestone is choosing a language.</p><Link to="/learn/language" className="secondary-link">Continue to Python or Java →</Link></div></>
}
