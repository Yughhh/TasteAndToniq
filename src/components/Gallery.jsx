import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mainPagePreviewImages } from '../data/galleryImages'
import Lightbox from './Lightbox'
import './Gallery.css'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="gallery">
      <div className="section">
        <span className="gallery__label">Gallery</span>
        <h2 className="gallery__title">See the Vibe</h2>
        <p className="gallery__subtitle">
          Interior ambiance, seating, and the moments that make us special.
        </p>
        <div className="gallery__grid gallery__grid--even">
          {mainPagePreviewImages.map((img, i) => (
            <button
              key={i}
              type="button"
              className="gallery__item"
              onClick={() => setLightbox(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
        <div className="gallery__cta">
          <Link to="/gallery" className="btn btn--primary">
            See More Images
          </Link>
        </div>
      </div>
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
