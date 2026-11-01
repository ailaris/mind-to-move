import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'About' },
  { to: '/demo', label: 'Demo' },
  { to: '/future', label: 'Future' },
  { to: '/team', label: 'Team' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // при смене страницы: закрыть меню и прокрутить вверх
  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* TODO: заменить на официальный логотип, когда будет подходящий файл */}
        <Link to="/" className="navbar__logo">
          Mind to Move
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/demo" className="btn btn-primary navbar__cta">
            Try the Demo
          </Link>
        </nav>
      </div>
    </header>
  )
}