import { useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import type { Language } from '../../types'

const lessons: Record<Language, string[]> = {
  Python: ['Introduction to Python', 'Installing Python', 'Your First Program', 'Variables & Data Types', 'Operators and Input', 'Control Flow', 'Functions', 'Lists, Tuples & Dictionaries', 'Object-Oriented Programming', 'Modules and Packages'],
  Java: ['Introduction to Java', 'Installing the JDK', 'Your First Java Program', 'Variables & Data Types', 'Operators and Input', 'Control Flow', 'Methods', 'Arrays and Strings', 'Object-Oriented Programming', 'Collections Framework'],
}
export default function LessonsPage() {
  const [language] = useLocalStorage<Language | null>('velorah-language', null)
  const [selected, setSelected] = useState(0)
  const [completed, setCompleted] = useLocalStorage<string[]>('velorah-completed-lessons', [])
  const activeLanguage = language ?? 'Python'
  const list = lessons[activeLanguage]
  const current = list[selected]
  return <><div className="page-heading"><p className="page-eyebrow">MY LEARNING{language ? ` · ${language.toUpperCase()}` : ''}</p><h1>{language ? `${language} learning path` : 'Your lesson workspace'}</h1><p>{language ? 'Open a lesson, review the learning objective, and mark it complete when you are ready.' : 'Choose Python or Java to personalise this lesson list. Python is shown as a preview until you make a selection.'}</p></div><div className="lesson-layout"><div className="lesson-list-panel"><div className="panel-heading"><strong>Course contents</strong><span>{completed.length} completed</span></div>{list.map((lesson, i) => <button key={lesson} className={`lesson-row ${selected === i ? 'lesson-row-active' : ''}`} onClick={() => setSelected(i)}><span className="lesson-row-number">{completed.includes(lesson) ? '✓' : String(i + 1).padStart(2, '0')}</span><span><strong>{lesson}</strong><small>{i < 3 ? 'Foundations' : i < 7 ? 'Core concepts' : 'Applied concepts'}</small></span><span className="lesson-row-arrow">{selected === i ? '●' : '›'}</span></button>)}</div><article className="lesson-viewer"><div className="lesson-video-preview"><span className="lesson-play">▶</span><span>LESSON PREVIEW</span><small>Learning content will be connected here</small></div><p className="page-eyebrow">LESSON {selected + 1} OF {list.length}</p><h2>{current}</h2><p>This lesson area is ready for course content, examples, code snippets, downloadable notes, and practice activities. The content below is placeholder copy for the frontend demonstration.</p><div className="learning-objective"><strong>Learning objective</strong><p>Understand the core idea, recognise where it is useful, and apply it to a small example.</p></div><button className="primary-button" onClick={() => setCompleted(old => old.includes(current) ? old : [...old, current])}>{completed.includes(current) ? 'Completed ✓' : 'Mark lesson complete →'}</button><p className="small-disclaimer">Lesson completion is stored in this browser only.</p></article></div></>
}
