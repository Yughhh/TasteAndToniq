import './Reviews.css'

const testimonials = [
  {
    text: 'Comfy sitting area with great vibes and soft music.',
    rating: 5,
  },
  {
    text: 'Nice ambience, tasty food, courteous staff.',
    rating: 5,
  },
  {
    text: 'Service is very nice and polite — must visit!',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="reviews__stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < count ? 'reviews__star reviews__star--filled' : 'reviews__star'}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="section">
        <span className="reviews__label">Testimonials</span>
        <h2 className="reviews__title">Loved by Our Guests</h2>
        <div className="reviews__rating">
          <span className="reviews__rating-value">4.4</span>
          <Stars count={5} />
          <span className="reviews__rating-text">/ 5</span>
        </div>
        <div className="reviews__grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="reviews__card">
              <Stars count={t.rating} />
              <p className="reviews__text">"{t.text}"</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
