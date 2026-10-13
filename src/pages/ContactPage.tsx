import { useState, type FormEvent } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true) }
  return <main className="marketing-content contact-content"><p className="page-eyebrow">CONTACT US</p><h1>Let's make learning<br /><em>work better.</em></h1><p className="marketing-lead">Questions, feedback, or ideas for Velorah? Leave a message in this frontend demo.</p><form className="contact-form" onSubmit={submit}><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter your name" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label>Message<textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us how we can help" /></label><button className="content-cta" type="submit">Send message <span>→</span></button>{sent && <p className="form-feedback">Demo only: your message has been captured in this screen, but no email has been sent because the backend is not connected.</p>}</form></main>
}
