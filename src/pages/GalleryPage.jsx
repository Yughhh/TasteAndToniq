import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Lightbox from '../components/Lightbox'
import { allGalleryImages } from '../data/galleryImages'
import './GalleryPage.css'

export default function GalleryPage() {
  const [scrolled, setScrolled] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar scrolled={scrolled} />
      <main className="gallery-page">
        <div className="gallery-page__header section">
          <Link to="/#gallery" className="gallery-page__back">
            ← Back to Home
          </Link>
          <h1 className="gallery-page__title">Full Gallery</h1>
          <p className="gallery-page__subtitle">
            Explore our restaurant ambiance, interiors, and dining experience.
          </p>
        </div>
        <div className="gallery-page__grid section">
          {allGalleryImages.map((img, i) => (
            <button
              key={i}
              type="button"
              className="gallery-page__item"
              onClick={() => setLightbox(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </main>
      <Footer />
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}
