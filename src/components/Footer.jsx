import { Link, useLocation } from 'react-router-dom'
import './Footer.css'

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '/menu', label: 'Menu', isPage: true },
  { href: '#services', label: 'Services' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const location = useLocation()

  return (
    <footer className="footer">
      <div className="section footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link">
            <img src="/images/logo_transparent.webp" alt="Taste & Toniq" className="footer__logo-img" />
          </Link>
          <p className="footer__tagline">Family restaurant · North Indian · Chinese · Continental</p>
        </div>
        <nav className="footer__nav">
          {quickLinks.map((link) => (
            link.isPage ? (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ) : location.pathname === '/' ? (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={{ pathname: '/', hash: link.href.slice(1) }}>
                {link.label}
              </Link>
            )
          ))}
        </nav>
        <div className="footer__contact">
          <a href="tel:+917080103232">7080103232</a>
          <span>590-H/186, Raibareli Rd, Lucknow</span>
        </div>
        <div className="footer__social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            Instagram
          </a>
        </div>
        <div className="footer__copy">
          © {new Date().getFullYear()} Taste & Toniq. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
