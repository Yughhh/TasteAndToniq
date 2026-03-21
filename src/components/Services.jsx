import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    icon: '🏛️',
    title: 'Banquet Hall',
    desc: 'Elegant indoor space for weddings, receptions, and grand celebrations. Fully equipped with premium amenities.',
    cta: 'Book Banquet',
  },
  {
    icon: '🌿',
    title: 'Green Lawn',
    desc: 'Beautiful outdoor venue for birthday parties, anniversaries, and intimate gatherings amidst nature.',
    cta: 'Book Lawn',
  },
  {
    icon: '📋',
    title: 'Conference Hall',
    desc: 'Professional setup for meetings, seminars, and corporate events. A/V support and comfortable seating.',
    cta: 'Book Conference',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section">
        <span className="services__label">Our Venues</span>
        <h2 className="services__title">Host Your Perfect Event</h2>
        <p className="services__subtitle">
          From intimate family gatherings to grand celebrations — we have the perfect space for every occasion.
        </p>
        <div className="services__grid">
          {services.map((service, i) => (
            <article key={i} className="services__card">
              <span className="services__icon">{service.icon}</span>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.desc}</p>
              <Link to="/#contact" className="btn btn--primary services__btn">
                {service.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
