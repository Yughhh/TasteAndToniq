import './Location.css'

const address = '590-H/186, Raibareli Rd, Sector 3, Vrindavan Colony, Lucknow'
const phone = '7080103232'

export default function Location() {
  return (
    <section id="contact" className="location">
      <div className="section location__inner">
        <div className="location__info">
          <span className="location__label">Find Us</span>
          <h2 className="location__title">Visit Taste & Toniq</h2>
          <p className="location__intro">Dine with us or book our Banquet Hall, Green Lawn, or Conference Hall for your next event.</p>
          <div className="location__details">
            <div className="location__item">
              <span className="location__icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>{address}</p>
              </div>
            </div>
            <div className="location__item">
              <span className="location__icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>
                  <a href={`tel:+91${phone}`}>{phone}</a>
                </p>
              </div>
            </div>
            <div className="location__item">
              <span className="location__icon">🕛</span>
              <div>
                <strong>Hours</strong>
                <p>Open daily till 12 AM</p>
              </div>
            </div>
          </div>
          <div className="location__cta">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Get Directions
            </a>
            <a href={`tel:+91${phone}`} className="btn btn--outline location__btn--dark">
              Call to Book
            </a>
          </div>
        </div>
        <div className="location__map">
          <iframe
            title="Taste & Toniq Location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
