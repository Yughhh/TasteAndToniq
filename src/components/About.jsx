import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section about__inner">
        <div className="about__text">
          <span className="about__label">Our Story</span>
          <h2 className="about__title">
            A Family Restaurant for Every Occasion
          </h2>
          <p className="about__lead">
            Taste & Toniq is a family restaurant in Lucknow where North Indian, Chinese, and Continental cuisines come together with cozy ambiance and warm hospitality.
          </p>
          <ul className="about__highlights">
            <li>North Indian · Chinese · Continental cuisine</li>
            <li>Banquet Hall, Green Lawn & Conference Hall</li>
            <li>Perfect for families, friends & celebrations</li>
          </ul>
        </div>
        <div className="about__gallery">
          <div className="about__img about__img--main">
            <img src="/images/interior-1.webp" alt="Restaurant interior" />
          </div>
          <div className="about__img about__img--secondary">
            <img src="/images/interior-2.webp" alt="Cozy seating area" />
          </div>
          <div className="about__img about__img--tertiary">
            <img src="/images/interior-3.webp" alt="Restaurant ambiance" />
          </div>
        </div>
      </div>
    </section>
  )
}
