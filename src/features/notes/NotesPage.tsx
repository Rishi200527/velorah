import { useState, type FormEvent } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'

type Note = { id: string; text: string; createdAt: string }
export default function NotesPage() {
  const [notes, setNotes] = useLocalStorage<Note[]>('velorah-student-notes', [])
  const [draft, setDraft] = useState('')
  function save(e: FormEvent) { e.preventDefault(); if (!draft.trim()) return; setNotes(old => [{ id: crypto.randomUUID(), text: draft.trim(), createdAt: new Date().toLocaleDateString() }, ...old]); setDraft('') }
  return <><div className="page-heading"><p className="page-eyebrow">YOUR PERSONAL WORKSPACE</p><h1>Notes that keep <span>you moving.</span></h1><p>Capture tricky concepts, examples, questions, and reminders while you learn.</p></div><form className="note-composer" onSubmit={save}><label htmlFor="new-note">Create a note</label><textarea id="new-note" value={draft} onChange={e => setDraft(e.target.value)} rows={4} placeholder="Write a concept, reminder, code pattern, or question…"/><div className="note-composer-footer"><span>Notes are saved in this browser for this frontend preview.</span><button className="primary-button" type="submit" disabled={!draft.trim()}>Save note +</button></div></form><div className="notes-list-heading"><h2>Saved notes</h2><span>{notes.length} {notes.length === 1 ? 'note' : 'notes'}</span></div>{notes.length ? <div className="saved-notes-grid">{notes.map(note => <article className="saved-note" key={note.id}><div className="saved-note-meta"><span>STUDENT NOTE</span><time>{note.createdAt}</time></div><p>{note.text}</p><button className="delete-note" onClick={() => setNotes(old => old.filter(n => n.id !== note.id))}>Delete note</button></article>)}</div> : <div className="empty-notes"><span>▧</span><strong>Your notes will appear here.</strong><p>Save your first note using the box above.</p></div>}</>
}
