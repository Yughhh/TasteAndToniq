import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="cta">
      <div className="cta__bg">
        <img src="/images/hero_new.webp" alt="" className="cta__img" />
        <div className="cta__overlay"></div>
      </div>
      <div className="cta__content">
        <h2 className="cta__title">
          Good Food. Great Vibes. Your Table — or Venue — is Waiting.
        </h2>
        <div className="cta__buttons">
          <a href="#contact" className="btn btn--primary btn--cta">
            Reserve a Table
          </a>
          <a href="#services" className="btn btn--outline btn--cta">
            Book Venue
          </a>
          <a href={`https://wa.me/917080103232`} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--cta">
            Order Online
          </a>
        </div>
      </div>
    </section>
  )
}
