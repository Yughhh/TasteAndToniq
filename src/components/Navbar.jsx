import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '/menu', label: 'Menu', isPage: true },
  { href: '#services', label: 'Services' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-text">Taste & Toniq</span>
        </Link>
        <nav className={`navbar__nav ${mobileOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.href}
                to={link.href}
                className="navbar__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ) : location.pathname === '/' ? (
              <a
                key={link.href}
                href={link.href}
                className="navbar__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={{ pathname: '/', hash: link.href.slice(1) }}
                className="navbar__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        <div className="navbar__cta">
          {location.pathname === '/' ? (
            <a href="#contact" className="btn btn--primary btn--sm">
              Reserve
            </a>
          ) : (
            <Link to="/#contact" className="btn btn--primary btn--sm">
              Reserve
            </Link>
          )}
        </div>
        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
