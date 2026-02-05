import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY

      setScrolled(currentScroll > 20)

      if (currentScroll > lastScroll && currentScroll > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScroll])

  return (
    <header
      className={`header 
        ${scrolled ? 'header--scrolled' : ''} 
        ${hidden ? 'header--hidden' : ''}
      `}
    >
      <div className="header__container">

        {/* LOGO */}
        <div className="header__logo">
          <img src="../../../v2.svg" alt="PS Copiers" />
        </div>

        {/* NAV */}
        <nav className="header__nav">
          <a href="#nosotros">SOBRE NOSOTROS</a>
          <a href="#servicios">SERVICIOS</a>
          <a href="#productos">PRODUCTOS</a>
          <a href="#contacto" className="nav__cta">CONTACTO</a>
        </nav>

      </div>
    </header>
  )
}

export default Header

