import './WhyChooseUs.css'

const features = [
  { icon: '👨‍👩‍👧‍👦', title: 'Family Restaurant', desc: 'Welcoming space for families — dine together, celebrate together.' },
  { icon: '🍽️', title: 'Multi-Cuisine', desc: 'North Indian, Chinese & Continental — one place, endless choices.' },
  { icon: '🏛️', title: 'Event Venues', desc: 'Banquet Hall, Green Lawn & Conference Hall for every occasion.' },
  { icon: '💸', title: 'Affordable Fine Dining', desc: 'Premium experience at ₹200–400 per person.' },
  { icon: '🕛', title: 'Open Till Midnight', desc: 'Late-night cravings? We\'ve got you covered.' },
  { icon: '😊', title: 'Warm Hospitality', desc: 'Friendly service that makes you feel at home.' },
]

export default function WhyChooseUs() {
  return (
    <section className="why">
      <div className="section">
        <span className="why__label">Why Choose Us</span>
        <h2 className="why__title">A Place Where Taste Meets Vibe</h2>
        <div className="why__grid">
          {features.map((feature) => (
            <div key={feature.title} className="why__card">
              <span className="why__icon">{feature.icon}</span>
              <h3 className="why__card-title">{feature.title}</h3>
              <p className="why__card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
