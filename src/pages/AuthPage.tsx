
import { useState, type FormEvent } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import './AuthPage.css'

type AuthMode = 'login' | 'signup'

export default function AuthPage() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const [mode, setMode] = useState<AuthMode>(
    params.get('mode') === 'signup' ? 'signup' : 'login'
  )
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState('')

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (mode === 'signup' && name.trim().length < 2) {
      setError('Please enter your full name.')
      return
    }

    if (password.length < 8) {
      setError('Your password must contain at least 8 characters.')
      return
    }

    if (mode === 'signup' && password !== confirmPassword) {
      setError('Your passwords do not match.')
      return
    }

    // Demo only: this is NOT secure authentication.
    // Replace this block with your backend/API authentication.
    const users = JSON.parse(
      localStorage.getItem('velorah-demo-users') || '[]'
    ) as { name: string; email: string; password: string }[]

    const normalizedEmail = email.trim().toLowerCase()

    if (mode === 'signup') {
      if (users.some((user) => user.email === normalizedEmail)) {
        setError('An account with this email already exists. Please log in.')
        return
      }

      users.push({
        name: name.trim(),
        email: normalizedEmail,
        password,
      })

      localStorage.setItem('velorah-demo-users', JSON.stringify(users))
    } else {
      const user = users.find(
        (item) =>
          item.email === normalizedEmail && item.password === password
      )

      if (!user) {
        setError('Account not found or incorrect password.')
        return
      }
    }

    // Temporary prototype navigation, not a secure session.
    localStorage.setItem('velorah-demo-email', normalizedEmail)
    localStorage.setItem('velorah-demo-remember', String(remember))
    navigate('/learn/dashboard')
  }

  return (
    <main className="auth-page">
      <div className="auth-background" aria-hidden="true" />
      <div className="auth-overlay" aria-hidden="true" />

      <header className="auth-header">
        <Link className="auth-brand" to="/">
          velorah<span>.</span>
        </Link>
        <Link className="auth-home" to="/">
          ← Back to home
        </Link>
      </header>

      <section className="auth-layout">
        <div className="auth-intro">
          <p className="auth-eyebrow">YOUR SPACE TO GROW</p>
          <h1>
            Every great journey
            <br />
            begins with <em>curiosity.</em>
          </h1>
          <p className="auth-description">
            A more personal way to learn. Build your skills, discover your
            strengths, and make every learning session count.
          </p>

          <div className="auth-benefits">
            <div><span>01</span><p>Learning paths shaped around you</p></div>
            <div><span>02</span><p>Practice that builds real confidence</p></div>
            <div><span>03</span><p>Your progress, all in one place</p></div>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-tabs">
            <button
              type="button"
              className={mode === 'login' ? 'active' : ''}
              onClick={() => {
                setMode('login')
                setError('')
              }}
            >
              Log in
            </button>
            <button
              type="button"
              className={mode === 'signup' ? 'active' : ''}
              onClick={() => {
                setMode('signup')
                setError('')
              }}
            >
              Sign up
            </button>
          </div>

          <p className="auth-card-eyebrow">
            {mode === 'signup' ? 'START YOUR JOURNEY' : 'WELCOME BACK'}
          </p>
          <h2>
            {mode === 'signup' ? 'Create your account' : 'Good to see you again.'}
          </h2>
          <p className="auth-card-description">
            {mode === 'signup'
              ? 'Set up your account and begin learning your way.'
              : 'Sign in to pick up where you left off.'}
          </p>

          <form className="auth-form" onSubmit={submitForm}>
            {mode === 'signup' && (
              <label>
                Full name
                <input
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </label>
            )}

            <label>
              Email address
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                minLength={8}
                required
              />
            </label>

            {mode === 'signup' ? (
              <label>
                Confirm password
                <input
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter your password again"
                  minLength={8}
                  required
                />
              </label>
            ) : (
              <div className="auth-form-options">
                <label className="remember-option">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>
                <button
                  className="auth-text-button"
                  type="button"
                  onClick={() =>
                    setError('Password reset will be available after backend integration.')
                  }
                >
                  Forgot password?
                </button>
              </div>
            )}

            {error && <p className="auth-error" role="alert">{error}</p>}

            <button className="auth-submit" type="submit">
              {mode === 'signup' ? 'Create account' : 'Log in'}
              <span>↗</span>
            </button>
          </form>

          <p className="auth-switch">
            {mode === 'signup'
              ? 'Already have an account?'
              : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => {
                setMode(mode === 'signup' ? 'login' : 'signup')
                setError('')
              }}
            >
              {mode === 'signup' ? 'Log in' : 'Sign up'}
            </button>
          </p>

          <p className="auth-legal">
            By continuing, you agree to use Velorah responsibly.
          </p>
        </div>
      </section>
    </main>
  )
}
