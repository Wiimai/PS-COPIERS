import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          PS COPIERS
        </div>

        <nav className="header__nav">
          <a href="#">Sobre nosotros</a>
          <a href="#">Servicios</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

