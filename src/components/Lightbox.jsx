import { useEffect } from 'react'
import './Lightbox.css'

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="View image fullscreen"
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div
        className="lightbox__content"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className="lightbox__img" />
      </div>
    </div>
  )
}
