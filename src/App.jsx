import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import WhyChooseUs from './components/WhyChooseUs'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Location from './components/Location'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import GalleryPage from './pages/GalleryPage'
import MenuPage from './pages/MenuPage'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <Gallery />
      <Location />
      <FinalCTA />
    </>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1))
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar scrolled={scrolled} />
              <main>
                <HomePage />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </>
  )
}

export default App
