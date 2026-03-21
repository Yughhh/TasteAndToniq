import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { menuData, menuNote } from '../data/menuData'
import './MenuPage.css'

export default function MenuPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main className="menu-page">
        <header className="menu-page__hero">
          <div className="menu-page__hero-content">
            <Link to="/" className="menu-page__back">
              ← Back to Home
            </Link>
            <img src="/images/logo_transparent.webp" alt="Taste & Toniq" className="menu-page__logo" />
            <h1 className="menu-page__title">Full Menu</h1>
            <p className="menu-page__subtitle">
              Multi-cuisine fine dining — North Indian, Chinese & Continental
            </p>
            <p className="menu-page__note">All prices in ₹</p>
          </div>
        </header>

        <div className="menu-page__content section">
          {menuData.map((section, i) => (
            <section key={i} className="menu-page__category">
              <h2 className="menu-page__category-title">{section.category}</h2>
              {section.subcategories.map((sub, j) => (
                <div key={j} className="menu-page__subcategory">
                  <h3 className="menu-page__subcategory-title">{sub.name}</h3>
                  <ul className="menu-page__items">
                    {sub.items.map((item, k) => (
                      <li key={k} className="menu-page__item">
                        <span className="menu-page__item-name">{item.name}</span>
                        <span className="menu-page__item-dots" aria-hidden="true" />
                        <span className="menu-page__item-price">
                        {item.price.startsWith('+') ? item.price : `₹${item.price}`}
                      </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}

          <div className="menu-page__footer-note">
            <p>{menuNote}</p>
          </div>
        </div>

        <div className="menu-page__cta section">
          <Link to="/#contact" className="btn btn--primary">
            Reserve a Table
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
