import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY

      setScrolled(currentScroll > 10)

      if (currentScroll > lastScroll && currentScroll > 100) {
        // bajando
        setHidden(true)
      } else {
        // subiendo
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
