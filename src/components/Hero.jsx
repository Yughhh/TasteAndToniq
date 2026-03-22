import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src="/images/hero_new.webp"
          alt="Taste & Toniq Restaurant interior"
          className="hero__img"
        />
        <div className="hero__overlay"></div>
      </div>
      <div className="hero__content">
        <img src="/images/logo_transparent.webp" alt="Taste & Toniq" className="hero__logo" />
        <h1 className="hero__title">
          Where Great Taste Meets Perfect Vibes
        </h1>
        <p className="hero__subtext">
          Family restaurant in Lucknow — North Indian, Chinese & Continental cuisine. Fine dining, banquet hall, lawn parties & conference facilities.
        </p>
        <div className="hero__cta">
          <a href="#contact" className="btn btn--primary btn--hero">
            Reserve a Table
          </a>
          <a href="#services" className="btn btn--outline btn--hero">
            Book Venue
          </a>
          <Link to="/menu" className="btn btn--outline btn--hero">
            View Menu
          </Link>
        </div>
        <div className="hero__badge">
          <span className="hero__badge-star">⭐</span>
          <span>4.4 Rating</span>
          <span className="hero__badge-divider">|</span>
          <span>Loved by 300+ Guests</span>
        </div>
      </div>
    </section>
  )
}
