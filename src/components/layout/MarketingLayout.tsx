import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

export default function MarketingLayout() {
  const location = useLocation()

  return (
    <div className="marketing-shell">
      <header className="marketing-header">
        <Link to="/" className="marketing-brand" aria-label="Velorah home">
          Velorah<sup>®</sup>
        </Link>

        <nav className="marketing-nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'marketing-link is-active' : 'marketing-link'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'marketing-link is-active' : 'marketing-link'
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'marketing-link is-active' : 'marketing-link'
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Begin Journey opens the authentication page first */}
        <Link className="marketing-cta" to="/login">
          Begin Journey <span>↗</span>
        </Link>
      </header>

      <Outlet key={location.pathname} />

      <footer className="marketing-footer">
        <Link to="/" className="marketing-brand footer-brand">
          Velorah<sup>®</sup>
        </Link>

        <span>Learn with direction. Grow with confidence.</span>

        <span>© {new Date().getFullYear()} Velorah</span>
      </footer>
    </div>
  )
}